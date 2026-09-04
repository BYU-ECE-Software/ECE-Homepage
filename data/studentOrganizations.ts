import type { ResourceCardData } from '@/types/Content';

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
    title: 'IEEE Student Branch',
    description:
      "IEEE is the world's largest professional association dedicated to advancing technological innovation and excellence for the benefit of humanity.",
    // Internal example: this one has its own page on this site rather
    // than linking out. See app/student-organizations/robotics-club/page.tsx.
    href: '/student-organizations/IEEE-association',
    image: '/student-organizations/byu-ieee-logo.png',
    linkText: 'Visit site',
  },
  {
    title: 'Combat Robotics Club',
    description:
      'From 1lb plastic combatants to 3lb fighting machines, this is where designs are built and pushed to the limits! Students create robots of mayhem and destruction to out swing and out maneuver each other! No coding required!',
    href: 'https://combatrobotics.byu.edu/',
    image: '/student-organizations/byu-combat-robotics.jpeg',
    linkText: 'Learn more',
  },
  {
    title: 'Rocketry Club',
    description:
      'Rocketry is our passion. From record breaking alka-seltzer rockets to our towering 10 foot rocket, we aim to be the best in what we do.',
    href: 'https://rocketry.byu.edu/',
    image: '/student-organizations/byu-rocketry.jpg',
    linkText: 'Learn more',
  },
  {
    title: 'Spacecraft Club',
    description:
      "BYU's Spacecraft Club prepares undergraduate engineers to contribute in BYU Spacecraft research and in industry.",
    href: 'https://spacecraft.byu.edu/',
    image: '/student-organizations/byu-spacecraft-cubesats.png',
    linkText: 'Learn more',
  },
  {
    title: 'Women in Engineering',
    description:
      'A peer community and mentorship network supporting women throughout the engineering program.',
    href: 'https://engineering.byu.edu/betogether/resources/women',
    linkText: 'Visit site',
  },
  {
    title: 'Cybersecurity Student Association (CSA)',
    description:
      'The BYU Cybersecurity Students Academic Association (CSA) is an official student club that provides a relaxed and fun way for cybersecurity enthusiasts to learn and socialize.',
    href: 'https://example.com/cybersecurity-club',
    linkText: 'Visit site',
  },
  {
    title: 'Aeronautics Club',
    description: 'Build, fly, crash. Repeat',
    href: 'https://example.byu.edu/',
    image: '/student-organizations/byu-aeronautics.jpeg',
    linkText: 'Learn more',
  },
  {
    title: 'Society of Hispanic Professional Engineers (SHPE)',
    description:
      'SHPE changes lives by empowering the Hispanic community to realize its fullest potential and to impact the world through STEM awareness, access, support and development.',
    href: 'https://example.byu.edu/',
    linkText: 'Learn more',
  },
  {
    title: 'Society of Women Engineers (SWE)',
    description:
      'The Society of Women Engineers (SWE) is a not-for-profit educational and service organization that empowers women to succeed and advance in the field of engineering.',
    href: 'https://example.byu.edu/',
    linkText: 'Learn more',
  },
  {
    title: 'Women in CyberSecurity (WiCyS)',
    description:
      'WiCyS started in 2013 by Dr. Ambareen Siraj through a National Science Foundation grant awarded to Tennessee Tech University.',
    href: 'https://example.byu.edu/',
    linkText: 'Learn more',
  },
  {
    title: 'Mixed Reality Club',
    description:
      'We are a group of Mixed Reality enthusiasts. We love what we do and would love to share our passion with anyone who wants to learn more about Mixed Reality technologies.',
    href: 'https://example.byu.edu/',
    linkText: 'Learn more',
  },
  {
    title: 'BE Together',
    description:
      'Initiative focused on improving teamwork in diverse environments and building inclusive confidence among engineering students.',
    href: 'https://example.byu.edu/',
    linkText: 'Learn more',
  },
];
