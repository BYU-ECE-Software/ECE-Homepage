import { getAdvisors } from "@/data/people/Advisors";
import {
  FlowchartSet,
  MajorConfig,
  NavSection,
  PageContent,
  ResourceCardData,
} from "./types";

/**
 * Department-wide course listing. Every major pointed at this same URL, so
 * it lives here once and majors only override it if that ever changes.
 */
export const DEPARTMENT_COURSE_CATALOG_URL =
  "https://catalog.byu.edu/departments/1130/courses";

/** Shared advising text used unless a major overrides it. */
const DEFAULT_ADVISING_INTRO = { file: "academic-advising.md" } as const;

/**
 * Expands a "YY-YY" catalog year into a readable "20YY–YY" label,
 * e.g. "26-27" -> "2026–27".
 * All flowcharts on file are from 2018 onward, so a "20" prefix is safe;
 * revisit this helper before the 2099-00 catalog year.
 */
function formatCatalogYear(year: string): string {
  const [start, end] = year.split("-");
  return `20${start}\u2013${end}`;
}

function buildFlowchartCards(
  major: MajorConfig,
  flowcharts: FlowchartSet,
): ResourceCardData[] {
  const base = `/undergraduate/majors/${major.slug}/graduation-flowcharts`;

  return flowcharts.years.map((year) => {
    const label = formatCatalogYear(year);

    return {
      title: `${major.displayName} Flowchart ${label}`,
      description: `Course requirements for students who began the ${major.displayName} program in ${label}.`,
      href: `${base}/flowchart-pdfs/${flowcharts.fileNamePrefix}-${year}.pdf`,
      image:
        flowcharts.hasPreviewImages === false
          ? undefined
          : `${base}/flowchart-pngs/${year}.png`,
      linkText: "View Flowchart \u2192",
    };
  });
}

function buildAdvisorCards(major: MajorConfig): ResourceCardData[] {
  return getAdvisors(major.advising.advisorIds).map((advisor) => ({
    title: advisor.name,
    description: advisor.role,
    href: advisor.schedulingUrl,
    image: advisor.photo,
    linkText: "Schedule Appointment \u2192",
  }));
}

/**
 * Generates every page a major hosts. A major only has three: its landing
 * page plus the two subsections that are actually unique to it. Degree
 * requirements and the course catalog are external links, so they appear in
 * navigation without a page of their own.
 */
export function buildMajorPages(
  major: MajorConfig,
): Record<string, PageContent> {
  const basePath = `/undergraduate/${major.slug}`;

  return {
    home: {
      title: major.displayName,
      description: major.summary,
      overview:
        "Requirements, course maps, and advising for this major are below. " +
        "Scholarships, internships, clubs, and undergraduate research are open " +
        "to students in all three majors \u2014 see [Opportunities](/opportunities).",
      cards: [
        {
          title: "Degree Requirements",
          description:
            "The official catalog listing of required courses, credit hours, and program milestones.",
          href: major.degreeRequirementsUrl,
          linkText: "View in catalog \u2192",
        },
        {
          title: "Course Catalog",
          description:
            "Browse course descriptions, prerequisites, and when each course is typically offered.",
          href: major.courseCatalogUrl ?? DEPARTMENT_COURSE_CATALOG_URL,
          linkText: "Browse courses \u2192",
        },
        {
          title: "Academic Advising",
          description:
            "Meet with an advisor to plan your semesters and stay on track to graduate.",
          href: `${basePath}/academic-advising`,
          linkText: "Meet your advisors \u2192",
        },
        {
          title: "Graduation Flowcharts",
          description:
            "Semester-by-semester course maps for each catalog year in the program.",
          href: `${basePath}/graduation-flowcharts`,
          linkText: "View flowcharts \u2192",
        },
      ],
    },

    "academic-advising": {
      title: "Academic Advising",
      description: `Advising resources and planning support for ${major.displayName} students.`,
      overview: major.advising.intro ?? DEFAULT_ADVISING_INTRO,
      cards: buildAdvisorCards(major),
    },

    "graduation-flowcharts": {
      title: "Graduation Flowcharts",
      description: `Course maps showing how to complete the ${major.displayName} degree.`,
      overview:
        "Choose the flowchart for the catalog year you started the program. If you're not sure which one applies to you, or your plan has changed, check with your advisor before registering.",
      cards: buildFlowchartCards(major, major.flowcharts),
    },
  };
}

/**
 * Builds the sidebar for a major. This is only the major's own material —
 * the four things that actually differ between the three programs.
 *
 * Department-wide content (scholarships, internships, student organizations,
 * undergraduate research) lives under the Opportunities tab in the main
 * header, and faculty research has its own top-level tab. Neither is
 * repeated here: a student on a major page should see what's specific to
 * that major, not a second copy of the site's navigation.
 */
export function buildMajorNavigation(major: MajorConfig): NavSection[] {
  return [
    {
      title: "Graduation Planning",
      items: [
        {
          title: "Degree Requirements",
          slug: "degree-requirements",
          href: major.degreeRequirementsUrl,
        },
        {
          title: "Course Catalog",
          slug: "course-catalog",
          href: major.courseCatalogUrl ?? DEPARTMENT_COURSE_CATALOG_URL,
        },
        { title: "Academic Advising", slug: "academic-advising" },
        { title: "Graduation Flowcharts", slug: "graduation-flowcharts" },
      ],
    },
  ];
}
