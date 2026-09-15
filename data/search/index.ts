import navConfig from '@/components/layout/NavConfig';
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

// Two shapes share pageIndex.generated.json (see scripts/build-search-index.mjs):
// static pages (`href`/`title`/`body`, extracted from app/**/page.tsx) and
// dynamic-route entries — faculty, majors, minors — pre-extracted at build
// time from their data modules (`label`/`href`/`description`/`body`) so this
// module never has to import those modules itself. FacultyProfiles.ts alone
// is ~1900 lines of full biography/publication text; importing it here would
// ship all of that prose into the client search bundle just to support
// substring search.
type GeneratedEntry =
  | { href: string; title: string | null; body: string }
  | { label: string; href: string; description: string; body: string };

const navHrefs = new Set(navEntries.map((entry) => entry.href));
const generatedEntries: SearchEntry[] = [];
for (const entry of generatedPageIndex as GeneratedEntry[]) {
  const navEntry = navEntries.find((e) => e.href === entry.href);
  if (navEntry) {
    navEntry.body = entry.body;
    continue;
  }
  if (navHrefs.has(entry.href)) continue;

  generatedEntries.push(
    'label' in entry
      ? entry
      : { label: entry.title ?? entry.href, href: entry.href, body: entry.body },
  );
}

export const searchIndex: SearchEntry[] = [...navEntries, ...generatedEntries];

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

// Higher is better. Ranks an exact/prefix label match above an incidental
// mid-word or body match, so e.g. searching "Beard" surfaces the faculty
// member named Beard before a page whose body copy merely mentions him.
const RANK = {
  labelExact: 5,
  labelPrefix: 4,
  labelIncludes: 3,
  descriptionIncludes: 2,
  bodyIncludes: 1,
};

function rank(entry: SearchEntry, q: string): number {
  const label = entry.label.toLowerCase();
  if (label === q) return RANK.labelExact;
  if (label.startsWith(q)) return RANK.labelPrefix;
  if (label.includes(q)) return RANK.labelIncludes;
  if (entry.description?.toLowerCase().includes(q)) return RANK.descriptionIncludes;
  if (entry.body?.toLowerCase().includes(q)) return RANK.bodyIncludes;
  return 0;
}

export function searchSite(query: string, limit = 8): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const scored: { entry: SearchEntry; score: number }[] = [];
  for (const entry of searchIndex) {
    const score = rank(entry, q);
    if (score > 0) scored.push({ entry, score });
  }

  scored.sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map(({ entry, score }) => {
    if (score !== RANK.bodyIncludes || !entry.body) return entry;
    return { ...entry, snippet: buildSnippet(entry.body, q) };
  });
}
