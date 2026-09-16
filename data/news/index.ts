export interface NewsStory {
  slug: string;
  title: string;
  description: string;
  date: string;
  category?: string;
  author?: string;
  image?: string;
  imageAlt?: string;
  /** Full article body (Markdown). Placeholder until real copy is supplied. */
  content: string;
}

export const stories: NewsStory[] = [
  {
    slug: 'wearable-technology-search-and-rescue-rats',
    title: 'BYU engineering students design wearable technology for search and rescue rats',
    description:
      'A capstone team improved a backpack localization device used by trained HeroRATs during search and rescue operations.',
    date: 'May 21, 2026',
    category: 'Intellect',
    author: 'Sharman Gill',
    content:
      'A capstone team improved a backpack localization device used by trained HeroRATs during search and rescue operations.',
  },
  {
    slug: 'honor-graduate-marine-corps-officer-candidate',
    title: 'BYU student named Honor Graduate as top U.S. Marine Corps officer candidate',
    description:
      'A BYU student earned the highest national distinction in the Marine Corps officer candidate program.',
    date: 'May 19, 2026',
    category: 'Character',
    author: 'Ellie Larsen',
    content:
      'A BYU student earned the highest national distinction in the Marine Corps officer candidate program.',
  },
  {
    slug: 'gps-fails-herorats-byu-engineers',
    title: 'When GPS fails, HeroRATs and BYU engineers step in',
    description:
      'ECE students helped improve how rescue workers locate trained rats and the survivors they identify after earthquakes.',
    date: 'May 14, 2026',
    category: 'Department News',
    author: 'Allyson Gibson',
    content:
      'ECE students helped improve how rescue workers locate trained rats and the survivors they identify after earthquakes.',
  },
  {
    slug: 'remote-id-for-older-drones',
    title: 'No hardware? No problem: Remote ID for older drones',
    description:
      'Students developed a practical way to add required Remote ID telemetry to drones that predate newer FAA rules.',
    date: 'May 14, 2025',
    category: 'Department News',
    author: 'Kylie Lay',
    content:
      'Students developed a practical way to add required Remote ID telemetry to drones that predate newer FAA rules.',
  },
  {
    slug: 'think-small',
    title: 'Think small',
    description:
      'Department researchers are advancing small-scale systems that make ambitious sensing and space applications possible.',
    date: 'April 21, 2025',
    category: 'Department News',
    author: 'Kylie Lay',
    content:
      'Department researchers are advancing small-scale systems that make ambitious sensing and space applications possible.',
  },
];
