import type { MinorConfig } from './types';
import { cybersecurityMinor } from './cybersecurity';

// Add new minors here. Each minor's `slug` becomes its URL segment
// under /minors/<slug>.
export const minors: MinorConfig[] = [cybersecurityMinor];

const minorsBySlug: Record<string, MinorConfig> = Object.fromEntries(
  minors.map((minor) => [minor.slug, minor]),
);

export function getMinor(slug: string): MinorConfig | undefined {
  return minorsBySlug[slug];
}

export function getAllMinorSlugs(): string[] {
  return minors.map((minor) => minor.slug);
}
