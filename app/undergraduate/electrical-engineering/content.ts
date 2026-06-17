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
};