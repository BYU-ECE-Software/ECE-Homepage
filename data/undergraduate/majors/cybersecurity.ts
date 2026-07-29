import { MajorConfig } from "./types";

export const cybersecurity: MajorConfig = {
  slug: "cybersecurity",
  displayName: "CYBERSECURITY",
  tagline: "Undergraduate Students",

  navigation: [
    {
      title: "Graduation Planning",
      items: [
        { 
          title: "Degree Requirements", 
          slug: "degree-requirements",
          href: "https://catalog.byu.edu/programs/34586/program-information-aoYks",
        },
        { 
          title: "Course Catalog", 
          slug: "course-catalog",
          href: "https://catalog.byu.edu/departments/1130/courses",
        },
        { title: "Academic Advising", slug: "academic-advising" },
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
        "Resources, opportunities, and information for Cybersecurity undergraduate students.",
      overview:
        "Use the navigation menu to explore academic planning resources, student opportunities, and research experiences available within the department.",
      cards: [],
    },
    // "degree-requirements": {
    //   title: "Degree Requirements",
    //   description:
    //     "Requirements and milestones needed to complete the Cybersecurity degree.",
    //   overview: "View the [graduation requirements](https://catalog.byu.edu/programs/34586/program-information-aoYks) for Cybersecurity.",
    //   cards: [],
    // },
    // "course-catalog": {
    //   title: "Course Catalog",
    //   description: "Browse course offerings for the Cybersecurity program.",
    //   overview: "Check out the University's course catalog: [Catalog](https://catalog.byu.edu/departments/1130/courses)",
    //   cards: [],
    // },
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
    "scholarships": {
      title: "Scholarships",
      description:
        "Scholarship opportunities available to Cybersecurity students.",
      overview: { file: "/data/undergraduate/content/department-scholarships.md" },
      cards: [],
    },
    "undergraduate-research": {
      title: "Undergraduate Research",
      description:
        "Opportunities for undergraduate students to get involved in research.",
      overview:
        "ECEN students have the opportunity to participate in IMMERSE, an undergraduate summer research program. This is a great opportunity for students interested in graduate school to get hands-on research experience over the summer and develop relationships with professors.",
      cards: [
          {
          title: "IMMERSE",
          description:
            "Accepting applications",
          href: "https://immerse.byu.edu/",
          image: "/research/immerse_2026.jpeg",
        },
      ],
    },
  },
};
