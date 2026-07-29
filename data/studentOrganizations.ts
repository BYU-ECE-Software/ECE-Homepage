import { ResourceCardData } from "@/data/undergraduate/majors/types";

// Placeholder data — replace with the department's actual student
// organizations. This list is shared by every major's "Student
// Organizations" sidebar link (see /student-organizations), so there's one
// list to maintain instead of one per major.
//
// `href` can point to:
//   - an external site (e.g. the org's own website or Instagram), or
//   - an internal page on this site (e.g. "/student-organizations/robotics-club")
// ResourceCard doesn't treat the two differently, so nothing else needs to
// change based on which kind of link a given org uses.
export const studentOrganizations: ResourceCardData[] = [
  {
    title: "IEEE Student Branch",
    description:
      "Weekly workshops, industry speakers, and project teams for students interested in electrical and computer engineering.",
      // Internal example: this one has its own page on this site rather
    // than linking out. See app/student-organizations/robotics-club/page.tsx.
    href: "/student-organizations/IEEE-association",
    image: "/student-organizations/byu-ieee-logo.png",
    linkText: "Visit site →",
  },
  {
    title: "Combat Robotics Club",
    description:
      "From 1lb plastic combatants to 3lb fighting machines, this is where designs are built and pushed to the limits! Students create robots of mayhem and destruction to out swing and out maneuver each other! No coding required!",
    href: "https://combatrobotics.byu.edu/",
    image: "/student-organizations/byu-combat-robotics.jpeg",
    linkText: "Learn more →",
  },
  {
    title: "Rocketry Club",
    description:
      "We don't just build rockets — We build engineers",
    href: "https://rocketry.byu.edu/",
    image: "/student-organizations/byu-rocketry.jpg",
    linkText: "Learn more →",
  },
  {
    title: "Spacecraft Club",
    description:
      "Brigham Young University's Spacecraft Group, consisting of the Spacecraft Research Lab and the Spacecraft Club, develops powerful, low-cost technologies and operates them in space, training a generation of skilled and passionate spacecraft engineers in the process.",
    href: "https://spacecraft.byu.edu/",
    image: "/student-organizations/byu-spacecraft-cubesats.png",
    linkText: "Learn more →",
  },
  {
    title: "Women in Engineering",
    description:
      "A peer community and mentorship network supporting women throughout the engineering program.",
    href: "https://engineering.byu.edu/betogether/resources/women",
    linkText: "Visit site →",
  },
  {
    title: "Cybersecurity Club",
    description:
      "Capture-the-flag competitions, guest talks, and hands-on security labs open to students in any major.",
    href: "https://example.com/cybersecurity-club",
    linkText: "Visit site →",
  },
  {
    title: "Aeronautics Club",
    description:
      "Build, fly, crash. Repeat",
    href: "https://example.byu.edu/",
    image: "/student-organizations/byu-aeronautics.jpeg",
    linkText: "Learn more →",
  },
  {
    title: "Biomedical Engineering Association",
    description:
      "Description here",
    href: "https://example.byu.edu/",
    // image: "/student-organizations/byu-aeronautics.jpeg",
    linkText: "Learn more →",
  },
  {
    title: "BYU Chapter of The American Nuclear Society",
    description:
      "Description here",
    href: "https://example.byu.edu/",
    // image: "/student-organizations/byu-aeronautics.jpeg",
    linkText: "Learn more →",
  },
  {
    title: "Society of Automotive Engineers (SAE)",
    description:
      "Description here",
    href: "https://example.byu.edu/",
    // image: "/student-organizations/byu-aeronautics.jpeg",
    linkText: "Learn more →",
  },
  {
    title: "Engineers in Business",
    description:
      "Description here",
    href: "https://example.byu.edu/",
    // image: "/student-organizations/byu-aeronautics.jpeg",
    linkText: "Learn more →",
  },
  {
    title: "GEO (Global Engineering Outreach) Club",
    description:
      "Description here",
    href: "https://example.byu.edu/",
    // image: "/student-organizations/byu-aeronautics.jpeg",
    linkText: "Learn more →",
  },
  {
    title: "BYU Racing",
    description:
      "Description here",
    href: "https://example.byu.edu/",
    // image: "/student-organizations/byu-aeronautics.jpeg",
    linkText: "Learn more →",
  },
  {
    title: "BYU LIFE Club",
    description:
      "Description here",
    href: "https://example.byu.edu/",
    // image: "/student-organizations/byu-aeronautics.jpeg",
    linkText: "Learn more →",
  },
  {
    title: "Network Engineering Association",
    description:
      "Description here",
    href: "https://example.byu.edu/",
    // image: "/student-organizations/byu-aeronautics.jpeg",
    linkText: "Learn more →",
  },
  {
    title: "Wind Energy Club",
    description:
      "Description here",
    href: "https://example.byu.edu/",
    // image: "/student-organizations/byu-aeronautics.jpeg",
    linkText: "Learn more →",
  },
  {
    title: "BYU Silver Fund",
    description:
      "Description here",
    href: "https://example.byu.edu/",
    // image: "/student-organizations/byu-aeronautics.jpeg",
    linkText: "Learn more →",
  },
];
