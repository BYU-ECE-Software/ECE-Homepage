/**
 * Content primitives shared by every section of the site that renders a
 * sidebar, a Markdown body, and a grid of cards — currently the major
 * pages and the Opportunities pages.
 */

export interface NavItem {
  title: string;

  // Identifies this item and, by default, becomes the last URL segment
  // appended to the section's base path.
  slug: string;

  // Optional. If set, navigation links here instead of to
  // "{basePath}/{slug}". Accepts either:
  //   - an absolute URL, e.g. "https://catalog.byu.edu" (opens in a new tab)
  //   - an internal path elsewhere on the site, e.g. "/research"
  // `slug` is still required (it's the React list key), but no matching
  // page needs to exist since the link never renders a local page.
  href?: string;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export interface ResourceCardData {
  title: string;
  description: string;
  href: string;
  image?: string;
  linkText?: string;
}

export interface OverviewFile {
  // Filename inside data/undergraduate/content, e.g. "academic-advising.md"
  file: string;
}

export interface PageContent {
  title: string;
  description: string;
  // Either inline Markdown, or a reference to a Markdown file read at build time.
  overview: string | OverviewFile;
  cards: ResourceCardData[];
}
