import { MajorConfig } from "./types";

export const cybersecurity: MajorConfig = {
  slug: "cybersecurity",
  displayName: "CYBERSECURITY",
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
        { title: "Networking/Internships", slug: "networking-internships" },
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
        "Resources, opportunities, and information for Cybersecurity undergraduate students.",
      overview:
        "Use the navigation menu to explore academic planning resources, student opportunities, and research experiences available within the department.",
      cards: [],
    },
    "degree-requirements": {
      title: "Degree Requirements",
      description:
        "Requirements and milestones needed to complete the Cybersecurity degree.",
      overview: "View the [graduation requirements](https://catalog.byu.edu/programs/34586/program-information-aoYks) for Cybersecurity.",
      cards: [],
    },
    "academic-advising": {
      title: "Academic Advising",
      description: "Advising resources and planning tools.",
      overview: { file: "/data/undergraduate/content/electrical-engineering-academic-advising.md" },
      cards: [
        {
          title: "Alisha Wall",
          description: "Cybersecurity Undegraduate Advisor",
          href: "https://ece.byu.edu/alisha-wall",
          image: "/undergraduate/advisers/Alisha-Wall.jpeg",
          linkText: "Schedule Appointment →"
        },
      ]  
    },
    "course-catalog": {
      title: "Course Catalog",
      description: "Browse course offerings for the Cybersecurity program.",
      overview: "Check out the University's course catalog: [Catalog](https://catalog.byu.edu/departments/1130/courses)",
      cards: [],
    },
    "graduation-flowcharts": {
      title: "Graduation Flowcharts",
      description:
        "View the course requirements to complete a degree in Cybersecurity.",
      overview:
        "Choose a flowchart based on the year you started the program. (See your advisor if you have questions about the flowchart).",
      cards: [
        {
          title: "Cybersecurity Flowchart 26-27",
          description:
            "View the 2026-27 course requirements to complete a degree in Cybersecurity. This flowchart is for students who started the program in 2026-27.",
          href: "/undergraduate/majors/cybersecurity/graduation-flowcharts/flowchart-pdfs/cyber-flowchart-26-27.pdf",
          linkText: "View Flowchart →"
        },
        {
          title: "Cybersecurity Flowchart 25-26",
          description:
            "View the 2025-26 course requirements to complete a degree in Cybersecurity. This flowchart is for students who started the program in 2025-26.",
          href: "/undergraduate/majors/cybersecurity/graduation-flowcharts/flowchart-pdfs/cyber-flowchart-25-26.pdf",
          linkText: "View Flowchart →"
        },
        {
          title: "Cybersecurity Flowchart 24-25",
          description:
            "View the 2024-25 course requirements to complete a degree in Cybersecurity. This flowchart is for students who started the program in 2024-25.",
          href: "/undergraduate/majors/cybersecurity/graduation-flowcharts/flowchart-pdfs/cyber-flowchart-24-25.pdf",
          linkText: "View Flowchart →"
        },
        {
          title: "Cybersecurity Flowchart 23-24",
          description:
            "View the 2023-24 course requirements to complete a degree in Cybersecurity. This flowchart is for students who started the program in 2023-24.",
          href: "/undergraduate/majors/cybersecurity/graduation-flowcharts/flowchart-pdfs/cyber-flowchart-23-24.pdf",
          linkText: "View Flowchart →"
        },
        {
          title: "Cybersecurity Flowchart 22-23",
          description:
            "View the 2022-23 course requirements to complete a degree in Cybersecurity. This flowchart is for students who started the program in 2022-23.",
          href: "/undergraduate/majors/cybersecurity/graduation-flowcharts/flowchart-pdfs/cyber-flowchart-22-23.pdf",
          linkText: "View Flowchart →"
        },
        {
          title: "Cybersecurity Flowchart 20-21",
          description:
            "View the 2020-21 course requirements to complete a degree in Cybersecurity. This flowchart is for students who started the program in 2020-21.",
          href: "/undergraduate/majors/cybersecurity/graduation-flowcharts/flowchart-pdfs/cyber-flowchart-20-21.pdf",
          linkText: "View Flowchart →"
        },
        {
          title: "Cybersecurity Flowchart 19-20",
          description:
            "View the 2019-20 course requirements to complete a degree in Cybersecurity. This flowchart is for students who started the program in 2019-20.",
          href: "/undergraduate/majors/cybersecurity/graduation-flowcharts/flowchart-pdfs/cyber-flowchart-19-20.pdf",
          linkText: "View Flowchart →"
        },
        {
          title: "Cybersecurity Flowchart 18-19",
          description:
            "View the 2018-19 course requirements to complete a degree in Cybersecurity. This flowchart is for students who started the program in 2018-19.",
          href: "/undergraduate/majors/cybersecurity/graduation-flowcharts/flowchart-pdfs/cyber-flowchart-18-19.pdf",
          linkText: "View Flowchart →"
        },
      ],
    },
    "networking-internships": {
      title: "Networking/Internships",
      description: "Internship opportunities for Cybersecurity students.",
      overview: "Placeholder content for internships.",
      cards: [],
    },
    scholarships: {
      title: "Scholarships",
      description: "Scholarship opportunities for Cybersecurity students.",
      overview: "Placeholder content for scholarships.",
      cards: [],
    },
    "student-organizations": {
      title: "Student Organizations",
      description: "Clubs and teams for Cybersecurity students.",
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
