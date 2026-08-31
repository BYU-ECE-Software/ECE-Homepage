import { ResourceCardData } from "@/types/Content";

/**
 * Department-wide opportunities, listed on the /opportunities landing page.
 *
 * These used to be duplicated inside each major's config, which meant a
 * scholarship deadline or a new internship contact had to be edited in three
 * places. Each one now has a single page of its own, and this list is just
 * what the landing page links to.
 *
 * To add one: create app/opportunities/<slug>/page.tsx, then add an entry
 * here and a link in the Opportunities dropdown in components/layout/NavConfig.ts.
 */
export const opportunities: ResourceCardData[] = [
  {
    title: "Student Organizations",
    description:
      "Clubs, competition teams, and professional chapters open to students in every major.",
    href: "/student-organizations",
    linkText: "Browse organizations",
  },
  {
    title: "Scholarships",
    description:
      "Department scholarships awarded annually to undergraduates in all ECE programs.",
    href: "/opportunities/scholarships",
    linkText: "Learn more",
  },
  {
    title: "Networking & Internships",
    description:
      "Career services, alumni mentoring, and internship resources for ECE students.",
    href: "/opportunities/networking-internships",
    linkText: "Learn more",
  },
  {
    title: "Undergraduate Research",
    description:
      "Work alongside faculty on real research problems before you graduate.",
    href: "/opportunities/undergraduate-research",
    linkText: "Learn more",
  },
];
