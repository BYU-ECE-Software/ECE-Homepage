import { MajorConfig } from "./types";

export const electricalEngineering: MajorConfig = {
  slug: "electrical-engineering",
  displayName: "ELECTRICAL ENGINEERING",
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

  content: {
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
          description: "Learn about research groups and faculty expertise.",
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
      overview: "View the [graduation requirements](https://catalog.byu.edu/programs/34594/program-information-aoYks) for Electrical Engineering.",
      cards: [],
    },

    "academic-advising": {
      title: "Academic Advising",
      description: "Advising resources and planning tools.",
      overview: { file: "/data/undergraduate/content/electrical-engineering-academic-advising.md" },
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
      description:
        "Browse course offerings, descriptions, and prerequisites for the Electrical Engineering program.",
      overview:
        "Check out the University's course catalog: [Catalog](https://catalog.byu.edu/departments/1130/courses)",
      cards: [],
    },

    
    "graduation-flowcharts": {
      title: "Graduation Flowcharts",
      description:
        "View the course requirements to complete a degree in Electrical Engineering.",
      overview:
        "Choose a flowchart based on the year you started the program. (See your advisor if you have questions about the flowchart).",
      cards: [
        {
          title: "EE Flowchart 26-27",
          description:
            "View the 2026-27 course requirements to complete a degree in Electrical Engineering. This flowchart is for students who started the program in 2026-27.",
          href: "/undergraduate/majors/electrical-engineering/graduation-flowcharts/flowchart-pdfs/ee-flowchart-26-27.pdf",
          image: "/undergraduate/majors/electrical-engineering/graduation-flowcharts/flowchart-pngs/26-27.png",
          linkText: "View Flowchart →"
        },
        {
          title: "EE Flowchart 25-26",
          description:
            "View the 2025-26 course requirements to complete a degree in Electrical Engineering. This flowchart is for students who started the program in 2025-26.",
          href: "/undergraduate/majors/electrical-engineering/graduation-flowcharts/flowchart-pdfs/ee-flowchart-25-26.pdf",
          image: "/undergraduate/majors/electrical-engineering/graduation-flowcharts/flowchart-pngs/25-26.png",
          linkText: "View Flowchart →"
        },
        {
          title: "EE Flowchart 24-25",
          description:
            "View the 2024-25 course requirements to complete a degree in Electrical Engineering. This flowchart is for students who started the program in 2024-25.",
          href: "/undergraduate/majors/electrical-engineering/graduation-flowcharts/flowchart-pdfs/ee-flowchart-24-25.pdf",
          image: "/undergraduate/majors/electrical-engineering/graduation-flowcharts/flowchart-pngs/24-25.png",
          linkText: "View Flowchart →"
        },
        {
          title: "EE Flowchart 23-24",
          description:
            "View the 2023-24 course requirements to complete a degree in Electrical Engineering. This flowchart is for students who started the program in 2023-24.",
          href: "/undergraduate/majors/electrical-engineering/graduation-flowcharts/flowchart-pdfs/ee-flowchart-23-24.pdf",
          image: "/undergraduate/majors/electrical-engineering/graduation-flowcharts/flowchart-pngs/23-24.png",
          linkText: "View Flowchart →"
        },
        {
          title: "EE Flowchart 22-23",
          description:
            "View the 2022-23 course requirements to complete a degree in Electrical Engineering. This flowchart is for students who started the program in 2022-23.",
          href: "/undergraduate/majors/electrical-engineering/graduation-flowcharts/flowchart-pdfs/ee-flowchart-22-23.pdf",
          image: "/undergraduate/majors/electrical-engineering/graduation-flowcharts/flowchart-pngs/22-23.png",
          linkText: "View Flowchart →"
        },
      ],
    },

    "networking-internships": {
      title: "Networking and Internships",
      description:
        "Internship opportunities and resources for Electrical Engineering students.",
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
        "Scholarship opportunities available to Electrical Engineering students.",
      overview: { file: "/data/undergraduate/content/department-scholarships.md" },
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
        "Research groups and faculty expertise within the Electrical and Computer Engineering department.",
      overview:
        "Check out the [faculty research page](/research).",
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
  },
};
