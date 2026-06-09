import type { ContactBlock, FooterColumn, SocialLink } from "@/types/SubFooter";

export const contactBlock: ContactBlock = {
  lines: [
    "Electrical & Computer Engineering",
    "450 Engineering Building",
    "Brigham Young University",
    "Provo, UT 84602",
    "(801) 422-4012",
  ],
  buttonLabel: "Contact Us",
  buttonHref: "/contact",
};

export const subfooterColumns: FooterColumn[] = [
  {
    heading: "Department Resources",
    links: [
      { label: "ECE Intranet", href: "/intranet" },
      { label: "ECE Purchasing", href: "/purchasing" },
      { label: "Student Employees", href: "/student-employees" },
      { label: "Alumni & Friends", href: "/alumni" },
      { label: "Diversity and Belonging", href: "/diversity" },
      { label: "Objectives and Outcomes", href: "/objectives" },
      { label: "Accreditation", href: "/accreditation" },
      { label: "Department AI Policy", href: "/ai-policy" },
      { label: "Event Requesting", href: "/events" },
    ],
  },
  {
    heading: "Scholarship & Employment",
    links: [
      { label: "Career Services for ECE", href: "/careers" },
      { label: "Department Scholarships", href: "/scholarships" },
      { label: "Handshake", href: "https://app.joinhandshake.com" },
      { label: "Part-Time Student Employment", href: "/part-time" },
    ],
  },
  {
    heading: "Help & Software",
    links: [
      { label: "Help Wiki", href: "/wiki" },
      { label: "Submit a Ticket", href: "/ticket" },
      { label: "CAEDM", href: "/caedm" },
      { label: "Cadence Software", href: "/cadence" },
    ],
  },
];

// Inline SVG social icons — swap for your icon library (e.g. lucide-react, heroicons)
export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
];