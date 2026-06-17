export interface NavItem {
  title: string;
  slug: string;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export const navigation: NavSection[] = [
  {
    title: "Graduation Planning",
    items: [
      {
        title: "Degree Requirements",
        slug: "degree-requirements",
      },
      {
        title: "Academic Advising",
        slug: "academic-advising",
      },
      {
        title: "Course Catalog",
        slug: "course-catalog",
      },
      {
        title: "Graduation Flowcharts",
        slug: "graduation-flowcharts",
      },
    ],
  },
  {
    title: "Opportunities",
    items: [
      {
        title: "Internships",
        slug: "internships",
      },
      {
        title: "Scholarships",
        slug: "scholarships",
      },
      {
        title: "Student Organizations",
        slug: "student-organizations",
      },
    ],
  },
  {
    title: "Research",
    items: [
      {
        title: "Faculty Research",
        slug: "faculty-research",
      },
      {
        title: "Undergraduate Research",
        slug: "undergraduate-research",
      },
      {
        title: "Research Labs",
        slug: "research-labs",
      },
    ],
  },
];