import { MajorConfig } from "./types";
import { electricalEngineering } from "./electrical-engineering";
import { cybersecurity } from "./cybersecurity";
import { computerEngineering } from "./computer-engineering";

// Add new majors here. Each major's `slug` becomes its URL segment under
// /undergraduate/<slug>.
export const majors: MajorConfig[] = [
  electricalEngineering,
  cybersecurity,
  computerEngineering,
];

const majorsBySlug: Record<string, MajorConfig> = Object.fromEntries(
  majors.map((major) => [major.slug, major])
);

export function getMajor(slug: string): MajorConfig | undefined {
  return majorsBySlug[slug];
}

export function getAllMajorSlugs(): string[] {
  return majors.map((major) => major.slug);
}
