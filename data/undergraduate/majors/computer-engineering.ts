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
        { title: "Networking/Internships", slug: "networking-internships" },
        { title: "Scholarships", slug: "scholarships" },
        {
          title: "Student Organizations",
          slug: "student-organizations",
          href: "/student-organizations",
        },
      ],
    },
    {
      title: "Research",
      items: [
        {
          title: "Faculty Research",
          slug: "faculty-research",
          href: "/research",
        },
        { title: "Undergraduate Research", slug: "undergraduate-research" },
        { title: "Research Labs", slug: "research-labs" },
      ],
    },
  ],

  // Placeholder content, plus a required "home" entry. Every nav item
  // WITHOUT an `href` must have a matching key here, or the build will fail
  // (see generateStaticParams in app/undergraduate/[major]/[slug]/page.tsx).
  // Nav items that set `href` (e.g. Student Organizations, Faculty Research)
  // link elsewhere and don't need an entry here.
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
      overview: "View the [graduation requirements](https://catalog.byu.edu/programs/34200/program-information-aoYks) for Computer Engineering.",
      cards: [],
    },
    "academic-advising": {
      title: "Academic Advising",
      description: "Advising resources and planning tools.",
      overview: { file: "/data/undergraduate/content/computer-engineering-academic-advising.md" },
      cards: [
        {
          title: "Jana Featherstone",
          description: "ECEn New Student/ Freshman and Graduate Program Advisor",
          href: "https://ece.byu.edu/jana-featherstone",
          image: "/undergraduate/advisers/Jana-Featherstone.jpeg",
          linkText: "Schedule Appointment →"
        },
        {
          title: "Janalyn Mergist",
          description: "ECEn Undergraduate Adviser",
          href: "https://ece.byu.edu/janalyn-mergist",
          image: "/undergraduate/advisers/Janalyn-Mergist.jpeg",
          linkText: "Schedule Appointment →"
        },
      ],
    },
    "course-catalog": {
      title: "Course Catalog",
      description: "Browse course offerings, descriptions, and prerequisites for the Computer Engineering program.",
      overview: "Check out the University's course catalog: [Catalog](https://catalog.byu.edu/departments/1130/courses)",
      cards: [],
    },
    "graduation-flowcharts": {
      title: "Graduation Flowcharts",
      description:
        "View the course requirements to complete a degree in Computer Engineering.",
      overview:
        "Choose a flowchart based on the year you started the program. (See your advisor if you have questions about the flowchart).",
      cards: [
        {
          title: "Computer Engineering Flowchart 26-27",
          description:
            "View the 2026-27 course requirements to complete a degree in Computer Engineering. This flowchart is for students who started the program in 2026-27.",
          href: "/undergraduate/majors/computer-engineering/graduation-flowcharts/flowchart-pdfs/ce-flowchart-26-27.pdf",
          image: "/undergraduate/majors/computer-engineering/graduation-flowcharts/flowchart-pngs/26-27.png",
          linkText: "View Flowchart →"
        },
        {
          title: "Computer Engineering Flowchart 25-26",
          description:
            "View the 2025-26 course requirements to complete a degree in Computer Engineering. This flowchart is for students who started the program in 2025-26.",
          href: "/undergraduate/majors/computer-engineering/graduation-flowcharts/flowchart-pdfs/ce-flowchart-25-26.pdf",
          image: "/undergraduate/majors/computer-engineering/graduation-flowcharts/flowchart-pngs/25-26.png",
          linkText: "View Flowchart →"
        },
        {
          title: "Computer Engineering Flowchart 24-25",
          description:
            "View the 2024-25 course requirements to complete a degree in Computer Engineering. This flowchart is for students who started the program in 2024-25.",
          href: "/undergraduate/majors/computer-engineering/graduation-flowcharts/flowchart-pdfs/ce-flowchart-24-25.pdf",
          image: "/undergraduate/majors/computer-engineering/graduation-flowcharts/flowchart-pngs/24-25.png",
          linkText: "View Flowchart →"
        },
        {
          title: "Computer Engineering Flowchart 23-24",
          description:
            "View the 2023-24 course requirements to complete a degree in Computer Engineering. This flowchart is for students who started the program in 2023-24.",
          href: "/undergraduate/majors/computer-engineering/graduation-flowcharts/flowchart-pdfs/ce-flowchart-23-24.pdf",
          image: "/undergraduate/majors/computer-engineering/graduation-flowcharts/flowchart-pngs/23-24.png",
          linkText: "View Flowchart →"
        },
        {
          title: "Computer Engineering Flowchart 22-23",
          description:
            "View the 2022-23 course requirements to complete a degree in Computer Engineering. This flowchart is for students who started the program in 2022-23.",
          href: "/undergraduate/majors/computer-engineering/graduation-flowcharts/flowchart-pdfs/ce-flowchart-22-23.pdf",
          image: "/undergraduate/majors/computer-engineering/graduation-flowcharts/flowchart-pngs/22-23.png",
          linkText: "View Flowchart →"
        },
      ],
    },
    "networking-internships": {
      title: "Networking and Internships",
      description:
        "Internship opportunities and resources for Computer Engineering students.",
      overview:
        "Check out these awesome resources!",
      cards: [
        {
          title: "Jobs and Internships",
          description:
            "Career Services Director, Andrea Merriman, can assist you in all your employment needs. Whether you're seeking a full-time job, internship, or just some sound advice, she is waiting to assist you",
          href: "https://careers.byu.edu/andrea-merriman",
          image: "/undergraduate/career-services/andrea-merriman.png",
        },
        {
          title: "Connect with Alumni",
          description:
            "BYU Connect allows students to connect directly with BYU alumni at specific companies to explore career paths, ask questions, and receive mentoring and professional advice. It is a valuable resource for building your network and preparing for internships and careers after graduation.",
          href: "https://alumni.byu.edu/byuconnect",
          image: "/undergraduate/career-services/byu-connect-alumni.jpeg",
        },
      ],
    },
    scholarships: {
      title: "Scholarships",
      description:
        "Scholarship opportunities available to Computer Engineering students.",
      overview: { file: "/data/undergraduate/content/department-scholarships.md" },
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
