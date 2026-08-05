import { FacStaffMember } from "@/components/general/FacStaff/FacStaffCard";

/**
 * Single source of truth for the advisement team.
 *
 * Both the People > Advisors page and each major's "Academic Advising" page
 * read from this list, so an advisor's photo, title, office, or scheduling
 * link only ever needs to be updated in one place. Majors reference advisors
 * by `id` (see `advising.advisorIds` in each major's config).
 */
export interface Advisor extends FacStaffMember {
  /** Stable key referenced by major configs. */
  id: string;
  /** Headshot used on major advising pages (larger, rectangular crop). */
  photo?: string;
  /** Short blurb shown on the advising page card. */
  role: string;
  /** Where students go to book time with this advisor. */
  schedulingUrl: string;
}

export const advisementTeam: Advisor[] = [
  {
    id: "jana-featherstone",
    name: "Jana Featherstone",
    role: "ECEn New Student/Freshman and Graduate Program Advisor",
    title: "Graduate and First-Year Academic Advisor",
    email: "jana_featherstone@byu.edu",
    phone: "422-1160",
    office: "460S EB",
    image: "/undergraduate/advisers/Jana-Featherstone.jpeg",
    photo: "/undergraduate/advisers/Jana-Featherstone.jpeg",
    link: "https://ece.byu.edu/jana-featherstone",
    schedulingUrl: "https://ece.byu.edu/jana-featherstone",
  },
  {
    id: "janalyn-mergist",
    name: "Janalyn Mergist",
    role: "ECEn Undergraduate Advisor",
    title: "ECEn Academic Advisor",
    email: "janalyn@ee.byu.edu",
    phone: "422-4013",
    office: "460R EB",
    image: "/undergraduate/advisers/Janalyn-Mergist.jpeg",
    photo: "/undergraduate/advisers/Janalyn-Mergist.jpeg",
    link: "https://ece.byu.edu/janalyn-mergist",
    schedulingUrl: "https://ece.byu.edu/janalyn-mergist",
  },
  {
    id: "alisha-wall",
    name: "Alisha Wall",
    role: "Cybersecurity Undergraduate Advisor",
    title: "Cybersecurity Academic Advisor",
    email: "alisha_wall@byu.edu",
    phone: "422-1819",
    office: "265 CTB",
    image: "/undergraduate/advisers/Alisha-Wall.jpeg",
    photo: "/undergraduate/advisers/Alisha-Wall.jpeg",
    link: "https://ece.byu.edu/alisha-wall",
    schedulingUrl: "https://ece.byu.edu/alisha-wall",
  },
];

const advisorsById: Record<string, Advisor> = Object.fromEntries(
  advisementTeam.map((advisor) => [advisor.id, advisor]),
);

/**
 * Looks up advisors by id, preserving the order given. Throws on an unknown
 * id so a typo in a major config fails the build instead of silently
 * dropping an advisor from that major's advising page.
 */
export function getAdvisors(ids: string[]): Advisor[] {
  return ids.map((id) => {
    const advisor = advisorsById[id];
    if (!advisor) {
      throw new Error(
        `Unknown advisor id "${id}". Valid ids: ${Object.keys(advisorsById).join(", ")}.`,
      );
    }
    return advisor;
  });
}
