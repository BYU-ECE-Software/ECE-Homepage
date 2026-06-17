export interface ResourceCard {
  title: string;
  description: string;
  href: string;
  image: string;
}

export interface SectionContent {
  title: string;
  description: string;
  overview: string;
  cards: ResourceCard[];
}

export const content: Record<string, SectionContent> = {
  home: {
    title: "Welcome",
    description:
      "Resources, opportunities, and information for Electrical Engineering undergraduate students.",

    overview:
      "Use the navigation menu to explore academic planning resources, student opportunities, and research experiences available within the department.",

    cards: [
      {
        title: "Student Organizations",
        description:
          "Explore clubs, competition teams, and leadership opportunities.",
        href: "/undergraduate/electrical-engineering/student-organizations",
        image: "/images/placeholders/clubs.jpg",
      },
      {
        title: "Faculty Research",
        description:
          "Learn about research groups and faculty expertise.",
        href: "/undergraduate/electrical-engineering/faculty-research",
        image: "/images/placeholders/research.jpg",
      },
      {
        title: "Academic Advising",
        description:
          "Connect with advisors and plan your academic journey.",
        href: "/undergraduate/electrical-engineering/academic-advising",
        image: "/images/placeholders/advising.jpg",
      },
    ],
  },

  "degree-requirements": {
    title: "Degree Requirements",
    description:
      "Requirements and milestones needed to complete the Electrical Engineering degree.",

    overview:
      "Placeholder content for degree requirements.",

    cards: [],
  },

  "academic-advising": {
    title: "Academic Advising",
    description:
      "Advising resources and planning tools.",

    overview:
      "Placeholder advising content.",

    cards: [],
  },

  "course-catalog": {
    title: "Course Catalog",
    description:
      "Browse course offerings, descriptions, and prerequisites for the Electrical Engineering program.",

    overview:
      "Placeholder content for the course catalog. Replace with a course list, a link to the registrar's catalog, or an embedded search tool.",

    cards: [],
  },

  "graduation-flowcharts": {
    title: "Graduation Flowcharts",
    description:
      "Visual roadmaps showing the recommended course sequence to graduate on time.",

    overview:
      "Placeholder content for graduation flowcharts. Replace with downloadable PDFs or images of the degree flowcharts for each track or catalog year.",

    cards: [],
  },

  internships: {
    title: "Internships",
    description:
      "Internship opportunities and resources for Electrical Engineering students.",

    overview:
      "Placeholder content for internships. Replace with listings, employer partners, or links to the department's internship coordinator.",

    cards: [],
  },

  scholarships: {
    title: "Scholarships",
    description:
      "Scholarship opportunities available to Electrical Engineering students.",

    overview:
      "Placeholder content for scholarships. Replace with eligibility info, application deadlines, and links to apply.",

    cards: [],
  },

  "student-organizations": {
    title: "Student Organizations",
    description:
      "Clubs, competition teams, and leadership opportunities for Electrical Engineering students.",

    overview:
      "Placeholder content for student organizations. Replace with a list of clubs, advisor contacts, and meeting information.",

    cards: [],
  },

  "faculty-research": {
    title: "Faculty Research",
    description:
      "Research groups and faculty expertise within the Electrical Engineering department.",

    overview:
      "Placeholder content for faculty research. Replace with faculty profiles, research areas, and links to lab pages.",

    cards: [],
  },

  "undergraduate-research": {
    title: "Undergraduate Research",
    description:
      "Opportunities for undergraduate students to get involved in research.",

    overview:
      "Placeholder content for undergraduate research. Replace with how to find a mentor, available positions, and application steps.",

    cards: [],
  },

  "research-labs": {
    title: "Research Labs",
    description:
      "Labs and facilities supporting research within the department.",

    overview:
      "Placeholder content for research labs. Replace with a list of labs, their focus areas, and links to lab websites.",

    cards: [],
  },
};