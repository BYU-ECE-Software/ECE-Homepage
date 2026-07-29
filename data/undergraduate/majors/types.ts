export interface NavItem {
  title: string;

  // Identifies this item and, by default, becomes the URL segment:
  // /undergraduate/{major}/{slug}
  slug: string;

  // Optional. If set, the sidebar links here instead of the internal
  // "/undergraduate/{major}/{slug}" route. Accepts either:
  //   - an absolute URL, e.g. "https://alumni.byu.edu" (opens in a new tab)
  //   - an internal path elsewhere on the site, e.g. "/research"
  // `slug` is still required (it's used as the React list key), but no
  // matching entry in `content` is needed since the link never renders
  // that major's own page.
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
  // Path to a Markdown file, relative to the project root,
  // e.g. "content/electrical-engineering/academic-advising.md"
  file: string;
}

export interface PageContent {
  title: string;
  description: string;
  // Either inline Markdown, or a reference to a Markdown file read at build time.
  overview: string | OverviewFile;
  cards: ResourceCardData[];
}

export interface MajorConfig {
  // URL segment, e.g. "electrical-engineering" -> /undergraduate/electrical-engineering
  slug: string;

  // Shown in the top banner, e.g. "ELECTRICAL ENGINEERING"
  displayName: string;

  // Shown under the display name in the banner, e.g. "Undergraduate Students"
  tagline: string;

  navigation: NavSection[];

  // Keyed by page slug. Must include a "home" entry for the landing page.
  content: Record<string, PageContent>;
}
