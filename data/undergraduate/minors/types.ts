import type { OverviewFile } from '@/types/Content';

export interface MinorConfig {
  // URL segment, e.g. "electrical-engineering-minor"
  // -> /minors/electrical-engineering-minor
  slug: string;

  // Shown in the top banner, e.g. "ELECTRICAL ENGINEERING MINOR"
  displayName: string;

  // Shown next to the display name in the banner, e.g. "Undergraduate Minor"
  tagline: string;

  // A short sentence shown below the title on the page.
  description: string;

  // Main page body. Either an inline Markdown string or a { file } reference
  // read at build time — same pattern as undergraduate.
  overview: string | OverviewFile;
}
