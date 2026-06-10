"use client";

import { RichText } from "@/components/general/RichText";
import type { RichTextBlock } from "@/components/general/RichTextBlocks";

const exampleBlocks: RichTextBlock[] = [
  {
    type: "badge-group",
    badges: [
      { label: "Graduate Programs", color: "blue" },
      { label: "BYU ECE", color: "purple" },
      { label: "2024–2025", color: "gray" },
    ],
    mb: "xs",
  },
  {
    type: "heading",
    level: 1,
    content: "Graduate Degrees in Electrical & Computer Engineering",
    subtitle: "Advanced study across four specialized research areas.",
  },
  {
    type: "paragraph",
    content: [
      "The department offers three graduate degrees: the ",
      { text: "MS in Cybersecurity", bold: true },
      ", the ",
      { text: "MS in Electrical and Computer Engineering", bold: true },
      ", and the ",
      { text: "PhD in Electrical and Computer Engineering", bold: true },
      ". All programs emphasize original research and advanced technical training.",
    ],
    lead: true,
  },
  {
    type: "callout",
    variant: "info",
    title: "Scholarship & Travel Funds Available",
    content: [
      "Significant scholarship funds are available for graduate student tuition, as well as travel funds to present research. Contact the Graduate Coordinator to learn more.",
    ],
  },
  {
    type: "divider",
    style: "fade",
    label: "Degree Programs",
  },
  {
    type: "heading",
    level: 2,
    content: "Master of Science in Cybersecurity",
  },
  {
    type: "paragraph",
    content: [
      "This program is ideal for cybersecurity professionals and those who have recently completed a technical undergraduate degree. Recent graduates often qualify for new positions ",
      { text: "making $20k more per year", bold: true },
      " or go on to PhD programs at top universities.",
    ],
  },
  {
    type: "heading",
    level: 3,
    content: "Program Requirements",
    mt: "md",
  },
  {
    type: "list",
    style: "check",
    items: [
      "30 total credit hours (6 thesis hours + 24 elective hours)",
      "At least 12 credits from CYBER upper-level courses (500 or 600 level)",
      "GPA above 3.0 and above-average GRE scores",
      "Original research thesis reviewed by faculty advisor and committee",
    ],
  },
  {
    type: "callout",
    variant: "warning",
    title: "Admission Note",
    content: [
      "An ",
      { text: "above-average technical background", bold: true },
      " is required for admission. Interested students are encouraged to speak with a Cybersecurity faculty member in their area of expertise.",
    ],
  },
  {
    type: "button-group",
    buttons: [
      { label: "View Degree Requirements", href: "#", variant: "primary" },
      { label: "Contact Coordinator", href: "#", variant: "secondary" },
    ],
    mt: "sm",
  },
  {
    type: "divider",
    style: "fade",
    label: "MS ECE",
  },
  {
    type: "heading",
    level: 2,
    content: "Master of Science in Electrical and Computer Engineering",
  },
  {
    type: "paragraph",
    content: [
      "The MS degree establishes a sound theoretical foundation and exposes students to advanced developments. The critical thinking and high-level mathematical facility required by graduate courses allow the MS graduate to assume responsibility ",
      { text: "beyond that normally given a BS engineer", italic: true },
      ".",
    ],
  },
  {
    type: "heading",
    level: 4,
    content: "Four Broad Study Areas",
    mt: "md",
  },
  {
    type: "list",
    style: "arrow",
    items: [
      "Computer Engineering",
      "Electromagnetics",
      "Microelectronics and VLSI",
      "Signals and Systems",
    ],
    columns: 2,
  },
  {
    type: "quote",
    content:
      "Students pursuing the MS degree work closely with a faculty advisor and develop the research and design tools necessary to participate in leading-edge developments in the discipline.",
    cite: "BYU ECE Graduate Program Overview",
  },
  {
    type: "divider",
    style: "fade",
    label: "PhD",
  },
  {
    type: "heading",
    level: 2,
    content: "Doctor of Philosophy (PhD)",
    subtitle: "Electrical and Computer Engineering",
  },
  {
    type: "paragraph",
    content: [
      "The PhD is primarily a research experience requiring the ability to identify, investigate, formulate, and solve new problems of interest. Results are reported in a dissertation and the research literature.",
    ],
  },
  {
    type: "callout",
    variant: "success",
    title: "Career Outcomes",
    content: [
      "PhD graduates act with considerable independence and assume major responsibilities. Careers span ",
      { text: "industry, government agencies, and academia", bold: true },
      ".",
    ],
  },
  {
    type: "heading",
    level: 3,
    content: "Admission Requirements at a Glance",
    mt: "lg",
  },
  {
    type: "table",
    headers: ["Requirement", "MS Cybersecurity", "MS ECE", "PhD ECE"],
    rows: [
      ["Min. GPA", "3.0", "3.0", "3.5"],
      ["GRE", "Above average", "Recommended", "Required"],
      ["Credit hours", "30", "30", "54+"],
      ["Thesis", "Yes", "Yes", "Dissertation"],
      ["Advisor required", "Yes", "Yes", "Yes"],
    ],
    striped: true,
    caption: "Summary of admission requirements. Verify current requirements with the graduate catalog.",
  },
  {
    type: "divider",
    style: "dashed",
    mt: "lg",
  },
  {
    type: "heading",
    level: 3,
    content: "Example: Inline Code & Rich Marks",
  },
  {
    type: "paragraph",
    content: [
      "Applications are submitted via the ",
      {
        text: "gradstudies.byu.edu",
        link: { href: "https://gradstudies.byu.edu", external: true },
      },
      " portal. Use course code ",
      { text: "CYBER 601", code: true },
      " for the required thesis hours. All ",
      { text: "bold", bold: true },
      ", ",
      { text: "italic", italic: true },
      ", ",
      { text: "underline", underline: true },
      ", and ",
      { text: "strikethrough", strikethrough: true },
      " marks are supported inline.",
    ],
  },
  {
    type: "heading",
    level: 3,
    content: "Sample Code Block",
    mt: "md",
  },
  {
    type: "code",
    language: "typescript",
    filename: "richtext-example.ts",
    code: `import { RichText } from "@/components/RichText";

const blocks = [
  { type: "heading", level: 2, content: "Hello World" },
  { type: "paragraph", content: ["A simple paragraph block."] },
  { type: "button", label: "Get Started", href: "/start", variant: "primary" },
];

export default function Page() {
  return <RichText blocks={blocks} maxWidth="prose" />;
}`,
  },
  {
    type: "spacer",
    size: "md",
  },
  {
    type: "button-group",
    buttons: [
      { label: "Read the Docs", href: "#", variant: "primary" },
      { label: "View on GitHub", href: "#", variant: "ghost" },
    ],
    align: "center",
  },
];

export default function RichTextDemo() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <RichText blocks={exampleBlocks} maxWidth="prose" className="mx-auto" />
    </main>
  );
}