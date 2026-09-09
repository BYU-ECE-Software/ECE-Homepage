import type { MajorConfig } from './types';

export const electricalEngineering: MajorConfig = {
  slug: 'electrical-engineering',
  displayName: 'Electrical Engineering',
  tagline: 'Undergraduate Students',
  summary:
    'Design the systems behind communications, robotics, power, circuits, sensing, and modern electronics.',

  degreeRequirementsUrl: 'https://catalog.byu.edu/programs/34594/program-information-aoYks',

  advising: {
    // Uses the shared department advising text (450 EB).
    advisorIds: ['jana-featherstone', 'janalyn-mergist'],
  },

  flowcharts: {
    fileNamePrefix: 'ee-flowchart',
    years: ['26-27', '25-26', '24-25', '23-24', '22-23'],
  },
};
