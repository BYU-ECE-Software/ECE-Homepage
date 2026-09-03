import navConfig from '@/components/layout/NavConfig';
import { facultyProfiles } from '@/data/people/FacultyProfiles';
import { majors } from '@/data/undergraduate/majors';
import { minors } from '@/data/undergraduate/minors';
import generatedPageIndex from '@/data/search/pageIndex.generated.json';

export interface SearchEntry {
  label: string;
  href: string;
  /** Shown under the label to give the visitor more context, e.g. a job title or section name. */
  description?: string;
  /**
   * Extra text matched against but never shown, so searches for words that
   * only appear in a page's body copy (not its label) still find it.
   */
  body?: string;
}

// Every page linked from the top nav (including dropdown children), so the
// index can't drift out of sync with what's actually reachable from the site.
const navEntries: SearchEntry[] = navConfig.flatMap((item) =>
  item.kind === 'link'
    ? [{ label: item.label, href: item.href }]
    : item.children.map((child) => ({ label: child.label, href: child.href, description: item.label })),
);

const facultyEntries: SearchEntry[] = facultyProfiles.map((person) => ({
  label: person.name,
  href: `/people/faculty/${person.slug}`,
  description: person.title ?? 'Faculty',
  body: person.biography,
}));

const majorEntries: SearchEntry[] = majors.map((major) => ({
  label: major.displayName,
  href: `/undergraduate/${major.slug}`,
  description: 'Undergraduate major',
  body: `${major.tagline} ${major.summary}`,
}));

const minorEntries: SearchEntry[] = minors.map((minor) => ({
  label: minor.displayName,
  href: `/undergraduate/minors/${minor.slug}`,
  description: 'Undergraduate minor',
  body: minor.description,
}));

// Body text extracted from every static app/**/page.tsx at build time (see
// scripts/build-search-index.mjs). Dynamic routes (faculty, major, minor
// pages) are covered by the entries above instead, since their content
// already lives in the data modules those are built from.
//
// Attach generated body text to matching nav entries, and add an entry for
// any indexed static page that isn't already reachable from the nav.
const navHrefs = new Set(navEntries.map((entry) => entry.href));
const staticPageEntries: SearchEntry[] = [];
for (const { href, title, body } of generatedPageIndex as {
  href: string;
  title: string | null;
  body: string;
}[]) {
  const navEntry = navEntries.find((entry) => entry.href === href);
  if (navEntry) {
    navEntry.body = body;
  } else if (!navHrefs.has(href)) {
    staticPageEntries.push({ label: title ?? href, href, body });
  }
}

export const searchIndex: SearchEntry[] = [
  ...navEntries,
  ...facultyEntries,
  ...majorEntries,
  ...minorEntries,
  ...staticPageEntries,
];

export interface SearchResult extends SearchEntry {
  /**
   * A short excerpt around the match, with the matched substring's position
   * given separately so the UI can highlight it. Comes from the label or
   * description when the match is there (nothing extra to show); comes from
   * `body` — the only field not otherwise rendered — when that's where the
   * query matched, so the visitor can see the term in context.
   */
  snippet?: { text: string; matchStart: number; matchEnd: number };
}

const SNIPPET_RADIUS = 60;

// Builds a snippet centered on the first match of `q` inside `text`, padded
// with ellipses when it's trimmed from the surrounding copy.
function buildSnippet(text: string, q: string): SearchResult['snippet'] {
  const lower = text.toLowerCase();
  const index = lower.indexOf(q);
  if (index === -1) return undefined;

  const start = Math.max(0, index - SNIPPET_RADIUS);
  const end = Math.min(text.length, index + q.length + SNIPPET_RADIUS);
  const prefix = start > 0 ? '…' : '';
  const suffix = end < text.length ? '…' : '';
  const excerpt = prefix + text.slice(start, end).trim() + suffix;

  const matchStart = index - start + prefix.length;
  return { text: excerpt, matchStart, matchEnd: matchStart + q.length };
}

export function searchSite(query: string, limit = 8): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const results: SearchResult[] = [];
  for (const entry of searchIndex) {
    if (entry.label.toLowerCase().includes(q) || entry.description?.toLowerCase().includes(q)) {
      results.push(entry);
    } else if (entry.body?.toLowerCase().includes(q)) {
      results.push({ ...entry, snippet: buildSnippet(entry.body, q) });
    }
    if (results.length >= limit) break;
  }

  return results;
}
