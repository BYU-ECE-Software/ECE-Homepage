import { MajorConfig, NavSection, PageContent } from "./types";
import { buildMajorNavigation, buildMajorPages } from "./derive";
import { electricalEngineering } from "./electrical-engineering";
import { cybersecurity } from "./cybersecurity";
import { computerEngineering } from "./computer-engineering";

// Add new majors here. Each major's `slug` becomes its URL segment under
// /undergraduate/<slug>. Navigation and pages are generated from the config
// (see derive.ts), so a new major only needs the handful of fields in
// MajorConfig — no page or sidebar markup to copy.
const majorConfigs: MajorConfig[] = [
  electricalEngineering,
  computerEngineering,
  cybersecurity,
];

/** A major with its generated sidebar and pages attached. */
export interface ResolvedMajor extends MajorConfig {
  navigation: NavSection[];
  content: Record<string, PageContent>;
}

export const majors: ResolvedMajor[] = majorConfigs.map((major) => ({
  ...major,
  navigation: buildMajorNavigation(major),
  content: buildMajorPages(major),
}));

const majorsBySlug: Record<string, ResolvedMajor> = Object.fromEntries(
  majors.map((major) => [major.slug, major]),
);

export function getMajor(slug: string): ResolvedMajor | undefined {
  return majorsBySlug[slug];
}

export function getAllMajorSlugs(): string[] {
  return majors.map((major) => major.slug);
}
