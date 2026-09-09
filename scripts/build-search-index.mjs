#!/usr/bin/env node
// Scans app/**/page.tsx for static routes and extracts their visible text
// (string literals, template literals, JSX text nodes) into a JSON index
// consumed by data/search/index.ts. This lets the client-side search match
// against actual page copy, not just nav labels.
//
// Dynamic routes (app/**/[param]/page.tsx) pull their content from data
// modules (faculty profiles, major/minor configs) instead, since that
// content already exists as importable data and JSX-parsing a template
// route wouldn't produce anything meaningful per-slug.
//
// Run via `npm run build` (see package.json) or `node scripts/build-search-index.mjs`.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const appDir = path.join(rootDir, 'app');
const outFile = path.join(rootDir, 'data', 'search', 'pageIndex.generated.json');

// Pages that exist only as scaffolding/demos and shouldn't show up in search.
const EXCLUDED_ROUTES = new Set(['/graduate/RichTextExample']);

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const fullPath = path.join(dir, entry);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      walk(fullPath, files);
    } else if (entry === 'page.tsx') {
      files.push(fullPath);
    }
  }
  return files;
}

function routeFromFile(filePath) {
  const relative = path.relative(appDir, path.dirname(filePath));
  const segments = relative === '' ? [] : relative.split(path.sep);
  if (segments.some((segment) => segment.startsWith('['))) return null;
  return '/' + segments.join('/');
}

function titleFromRoute(href) {
  if (href === '/') return 'Home';
  const last = href.split('/').filter(Boolean).pop();
  return last
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function extractTitle(source) {
  // Only look inside the `export const metadata = {...}` block, not any
  // `title:` field anywhere in the file (e.g. card/data titles).
  const metaBlockMatch = source.match(/export const metadata[\s\S]*?=\s*\{([\s\S]*?)\n\};/);
  if (!metaBlockMatch) return null;
  const titleMatch = metaBlockMatch[1].match(/title:\s*(['"`])([\s\S]*?)\1/);
  if (!titleMatch) return null;
  return titleMatch[2].split('|')[0].trim();
}

// Object/array literal keys we deliberately index the *values* of — these
// hold real copy (card titles, descriptions, taglines) even though they
// live in plain TS data structures rather than JSX.
const CONTENT_KEYS = new Set([
  'title',
  'label',
  'description',
  'text',
  'subtext',
  'eyebrow',
  'linkLabel',
  'tagline',
  'summary',
  'imageAlt',
]);

// Pulls readable text out of a .tsx source file: template literals, string
// values of known content-bearing keys, and JSX text nodes. Not a real
// parser — good enough to feed a bag-of-words search index without a
// TS/JSX AST dependency.
function extractText(source) {
  let text = source;

  text = text.replace(/\/\*[\s\S]*?\*\//g, ' ');
  text = text.replace(/\/\/.*$/gm, ' ');
  text = text.replace(/^import[\s\S]*?;$/gm, ' ');

  const chunks = [];

  // Template literals (markdown content blocks, multi-line copy).
  for (const match of text.matchAll(/`([^`]*)`/g)) {
    chunks.push(match[1]);
  }

  // String values assigned to known content-bearing keys, e.g.
  // `description: 'Learn how...'` or `title: "Analog Circuits"`.
  const keyPattern = [...CONTENT_KEYS].join('|');
  const keyValueRegex = new RegExp(`\\b(?:${keyPattern})\\s*:\\s*(['"\`])([\\s\\S]*?)\\1`, 'g');
  for (const match of text.matchAll(keyValueRegex)) {
    chunks.push(match[2]);
  }

  // JSX text nodes: text directly between > and < that contains a letter
  // and isn't a bare object-literal fragment (no stray `:` / `{`).
  for (const match of text.matchAll(/>([^<>{}\n][^<>{}]*)</g)) {
    const value = match[1].trim();
    if (value && /[a-zA-Z]/.test(value) && !/^[a-zA-Z]+:\s*$/.test(value)) chunks.push(value);
  }

  const combined = chunks
    .join(' ')
    .replace(/\\n/g, ' ')
    .replace(/[*_#>|`]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  return combined;
}

function buildStaticPageEntries() {
  const files = walk(appDir);
  const entries = [];

  for (const file of files) {
    const route = routeFromFile(file);
    if (route === null) continue; // dynamic route, skip
    if (EXCLUDED_ROUTES.has(route)) continue;

    const source = readFileSync(file, 'utf8');
    const href = route === '' ? '/' : route;
    const title = extractTitle(source) ?? titleFromRoute(href);
    const body = extractText(source);

    entries.push({ href, title, body });
  }

  return entries;
}

function main() {
  const entries = buildStaticPageEntries();
  mkdirSync(path.dirname(outFile), { recursive: true });
  writeFileSync(outFile, JSON.stringify(entries, null, 2) + '\n');
  console.log(`Wrote ${entries.length} page entries to ${path.relative(rootDir, outFile)}`);
}

main();
