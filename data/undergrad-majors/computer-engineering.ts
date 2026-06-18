import { MajorConfig } from "./types";

export const computerEngineering: MajorConfig = {
  slug: "computer-engineering",
  displayName: "COMPUTER ENGINEERING",
  tagline: "Undergraduate Students",

  navigation: [
    {
      title: "Graduation Planning",
      items: [
        { title: "Degree Requirements", slug: "degree-requirements" },
        { title: "Academic Advising", slug: "academic-advising" },
        { title: "Course Catalog", slug: "course-catalog" },
        { title: "Graduation Flowcharts", slug: "graduation-flowcharts" },
      ],
    },
    {
      title: "Opportunities",
      items: [
        { title: "Internships", slug: "internships" },
        { title: "Scholarships", slug: "scholarships" },
        { title: "Student Organizations", slug: "student-organizations" },
      ],
    },
    {
      title: "Research",
      items: [
        { title: "Faculty Research", slug: "faculty-research" },
        { title: "Undergraduate Research", slug: "undergraduate-research" },
        { title: "Research Labs", slug: "research-labs" },
      ],
    },
  ],

  // Placeholder content. Every slug listed in `navigation` above must have a
  // matching key here, plus a "home" entry, or the build will fail (see
  // generateStaticParams in app/undergraduate/[major]/[slug]/page.tsx).
  content: {
    home: {
      title: "Welcome",
      description:
        "Resources, opportunities, and information for Computer Engineering undergraduate students.",
      overview:
        "Use the navigation menu to explore academic planning resources, student opportunities, and research experiences available within the department.",
      cards: [],
    },
    "degree-requirements": {
      title: "Degree Requirements",
      description:
        "Requirements and milestones needed to complete the Computer Engineering degree.",
      overview: "Placeholder content for degree requirements.",
      cards: [],
    },
    "academic-advising": {
      title: "Academic Advising",
      description: "Advising resources and planning tools.",
      overview: "Placeholder advising content.",
      cards: [],
    },
    "course-catalog": {
      title: "Course Catalog",
      description: "Browse course offerings for the Computer Engineering program.",
      overview: "Placeholder content for the course catalog.",
      cards: [],
    },
    "graduation-flowcharts": {
      title: "Graduation Flowcharts",
      description: "Recommended course sequence to graduate on time.",
      overview: "Placeholder content for graduation flowcharts.",
      cards: [],
    },
    internships: {
      title: "Internships",
      description: "Internship opportunities for Computer Engineering students.",
      overview: "Placeholder content for internships.",
      cards: [],
    },
    scholarships: {
      title: "Scholarships",
      description: "Scholarship opportunities for Computer Engineering students.",
      overview: "Placeholder content for scholarships.",
      cards: [],
    },
    "student-organizations": {
      title: "Student Organizations",
      description: "Clubs and teams for Computer Engineering students.",
      overview: "Placeholder content for student organizations.",
      cards: [],
    },
    "faculty-research": {
      title: "Faculty Research",
      description: "Research groups and faculty expertise.",
      overview: "Placeholder content for faculty research.",
      cards: [],
    },
    "undergraduate-research": {
      title: "Undergraduate Research",
      description: "Opportunities to get involved in research.",
      overview: "Placeholder content for undergraduate research.",
      cards: [],
    },
    "research-labs": {
      title: "Research Labs",
      description: "Labs and facilities supporting research.",
      overview: "Placeholder content for research labs.",
      cards: [],
    },
  },
};
