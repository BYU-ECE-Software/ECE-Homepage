import { MajorConfig } from "./types";

export const computerEngineering: MajorConfig = {
  slug: "computer-engineering",
  displayName: "Computer Engineering",
  tagline: "Undergraduate Students",
  summary:
    "Build computing hardware and the software that connects digital systems to the physical world.",

  degreeRequirementsUrl:
    "https://catalog.byu.edu/programs/34200/program-information-aoYks",

  advising: {
    // Uses the shared department advising text (450 EB).
    advisorIds: ["jana-featherstone", "janalyn-mergist"],
  },

  flowcharts: {
    fileNamePrefix: "ce-flowchart",
    years: ["26-27", "25-26", "24-25", "23-24", "22-23"],
  },
};
