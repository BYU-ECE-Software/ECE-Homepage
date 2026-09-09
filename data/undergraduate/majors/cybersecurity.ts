import type { MajorConfig } from './types';

export const cybersecurity: MajorConfig = {
  slug: 'cybersecurity',
  displayName: 'Cybersecurity',
  tagline: 'Undergraduate Students',
  summary:
    'Learn to protect connected systems, data, infrastructure, and the people who depend on them.',

  degreeRequirementsUrl: 'https://catalog.byu.edu/programs/34586/program-information-aoYks',

  advising: {
    // Cybersecurity advising happens in the Crabtree Building, not the EB,
    // so this major overrides the shared advising text.
    intro: { file: 'cybersecurity-academic-advising.md' },
    advisorIds: ['alisha-wall'],
  },

  flowcharts: {
    fileNamePrefix: 'cyber-flowchart',
    years: ['26-27', '25-26', '24-25', '23-24', '22-23', '20-21', '19-20', '18-19'],
    // No PNG previews on file for these yet.
    hasPreviewImages: false,
  },
};
