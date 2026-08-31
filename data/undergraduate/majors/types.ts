import type { OverviewFile } from '@/types/Content';

// Shared content primitives (NavItem, NavSection, ResourceCardData,
// OverviewFile, PageContent) now live in types/Content.ts, since the
// Opportunities section renders the same shapes. Re-exported here so
// existing imports from this module keep working.
export type {
  NavItem,
  NavSection,
  ResourceCardData,
  OverviewFile,
  PageContent,
} from '@/types/Content';

/**
 * Describes a major's set of graduation flowcharts. Every flowchart follows
 * the same naming convention, so listing the catalog years is enough to
 * generate all of the cards:
 *
 *   PDF: /undergraduate/majors/{slug}/graduation-flowcharts/flowchart-pdfs/{fileNamePrefix}-{year}.pdf
 *   PNG: /undergraduate/majors/{slug}/graduation-flowcharts/flowchart-pngs/{year}.png
 *
 * To publish next year's flowchart, drop the files in those folders and add
 * the year to the front of `years`. No card markup to copy or edit.
 */
export interface FlowchartSet {
  // e.g. "ee-flowchart" -> ee-flowchart-26-27.pdf
  fileNamePrefix: string;

  // Catalog years, newest first, in "YY-YY" form, e.g. "26-27".
  years: string[];

  // Set to false for majors that don't have PNG previews of each flowchart.
  // Cards then render as text-only instead of showing a broken image.
  hasPreviewImages?: boolean;
}

export interface AdvisingConfig {
  // Optional override for the shared department advising text. Leave unset
  // to use data/undergraduate/content/academic-advising.md.
  intro?: string | OverviewFile;

  // Advisor ids from data/people/Advisors.ts, in display order.
  advisorIds: string[];
}

/**
 * Everything that is genuinely unique to a major.
 *
 * Anything shared across all three majors (scholarships, internships,
 * student organizations, undergraduate research) lives under
 * data/opportunities instead and is surfaced at /opportunities, so it's
 * written and maintained exactly once.
 */
export interface MajorConfig {
  // URL segment, e.g. "electrical-engineering" -> /undergraduate/electrical-engineering
  slug: string;

  // Title case, e.g. "Electrical Engineering". The banner uppercases it in
  // CSS, so this stays readable when reused in prose, card titles, and
  // page metadata.
  displayName: string;

  // Shown under the display name in the banner.
  tagline: string;

  // One or two sentences describing the major. Used on the major's landing
  // page and anywhere the major is listed alongside the others.
  summary: string;

  // University catalog page for this program's degree requirements.
  degreeRequirementsUrl: string;

  // Optional override; defaults to the department-wide course listing.
  courseCatalogUrl?: string;

  advising: AdvisingConfig;

  flowcharts: FlowchartSet;

  // Set to true once real outcome stats (starting salary, placement rate,
  // grad-school continuation rate, etc.) are ready for this major. Until
  // then the landing page shows a "coming soon" placeholder instead of
  // fabricated numbers.
  hasOutcomesData?: boolean;
}
