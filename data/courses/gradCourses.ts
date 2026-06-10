import { Course } from "@/types/course";

export const courses: Course[] = [
  // Regular offerings
  {
    id: "ece-501",
    number: "ECE 501",
    title: "Linear Systems",
    instructor: "Dr. Warnick",
    semesters: [
      { semester: "fall", cycle: "every" },
      { semester: "winter", cycle: "every" },
    ],
    section: "regular",
  },
  {
    id: "ece-511",
    number: "ECE 511",
    title: "Electromagnetic Field Theory",
    instructor: "Dr. Christiansen",
    semesters: [{ semester: "fall", cycle: "every" }],
    section: "regular",
  },
  {
    id: "ece-521",
    number: "ECE 521",
    title: "Digital Signal Processing",
    instructor: "Dr. Nelson",
    semesters: [{ semester: "winter", cycle: "odd" }],
    section: "regular",
  },
  {
    id: "ece-530",
    number: "ECE 530",
    title: "Power Systems Analysis",
    instructor: "Dr. Oren",
    semesters: [
      { semester: "fall", cycle: "even" },
      { semester: "spring", cycle: "even" },
    ],
    section: "regular",
  },
  {
    id: "ece-545",
    number: "ECE 545",
    title: "Computer Architecture",
    instructor: "Dr. Mangelson",
    semesters: [
      { semester: "winter", cycle: "every" },
      { semester: "spring", cycle: "odd" },
    ],
    section: "regular",
  },
  {
    id: "ece-551",
    number: "ECE 551",
    title: "Machine Learning for Engineers",
    instructor: "Dr. Redd",
    semesters: [
      { semester: "fall", cycle: "every" },
      { semester: "winter", cycle: "every" },
      { semester: "spring", cycle: "every" },
    ],
    section: "regular",
  },
  {
    id: "ece-560",
    number: "ECE 560",
    title: "Control System Design",
    instructor: "Dr. Beard",
    semesters: [{ semester: "fall", cycle: "every" }],
    section: "regular",
  },
  {
    id: "ece-575",
    number: "ECE 575",
    title: "VLSI Design",
    instructor: "Dr. Hutchings",
    semesters: [{ semester: "winter", cycle: "even" }],
    section: "regular",
  },
  {
    id: "ece-580",
    number: "ECE 580",
    title: "Wireless Communications",
    instructor: "Dr. Rice",
    semesters: [
      { semester: "fall", cycle: "every" },
      { semester: "winter", cycle: "every" },
    ],
    section: "regular",
  },
  {
    id: "ece-590r",
    number: "ECE 590R",
    title: "Graduate Seminar",
    semesters: [
      { semester: "fall", cycle: "every" },
      { semester: "winter", cycle: "every" },
      { semester: "spring", cycle: "every" },
    ],
    section: "regular",
  },

  // Special Topics
  {
    id: "ece-5120",
    number: "ECE 5120",
    title: "Advanced Topics in Deep Learning",
    instructor: "Dr. Barrett",
    semesters: [{ semester: "fall", cycle: "odd" }],
    section: "special-topics",
    lastTaught: "Fall 2023",
    nextTaught: "Fall 2025",
  },
  {
    id: "ece-5220",
    number: "ECE 5220",
    title: "Quantum Computing Fundamentals",
    instructor: "Dr. Lee",
    semesters: [{ semester: "winter", cycle: "even" }],
    section: "special-topics",
    lastTaught: "Winter 2024",
    nextTaught: "Winter 2026",
  },
  {
    id: "ece-5320",
    number: "ECE 5320",
    title: "Neuromorphic Engineering",
    instructor: "Dr. Cambou",
    semesters: [{ semester: "spring", cycle: "every" }],
    section: "special-topics",
    lastTaught: "Spring 2024",
    nextTaught: "Spring 2025",
  },
  {
    id: "ece-5420",
    number: "ECE 5420",
    title: "Photonics and Laser Systems",
    instructor: "Dr. Millet",
    semesters: [{ semester: "fall", cycle: "even" }],
    section: "special-topics",
    lastTaught: "Fall 2022",
    nextTaught: "Fall 2024",
  },
  {
    id: "ece-6620",
    number: "ECE 6620",
    title: "Convex Optimization Methods",
    instructor: "Dr. Beard",
    semesters: [{ semester: "winter", cycle: "odd" }],
    section: "special-topics",
    lastTaught: "Winter 2023",
    nextTaught: "Winter 2025",
  },

  // Unscheduled
  {
    id: "ece-605",
    number: "ECE 605",
    title: "Advanced Electromagnetics",
    semesters: [],
    section: "unscheduled",
  },
  {
    id: "ece-625",
    number: "ECE 625",
    title: "Nonlinear Control Systems",
    semesters: [],
    section: "unscheduled",
  },
  {
    id: "ece-670",
    number: "ECE 670",
    title: "Semiconductor Device Physics",
    semesters: [],
    section: "unscheduled",
  },

  // Retired
  {
    id: "ece-499",
    number: "ECE 499",
    title: "Introduction to Graduate Study",
    semesters: [],
    notes: "Replaced by ECE 590R",
    section: "retired",
  },
  {
    id: "ece-502",
    number: "ECE 502",
    title: "Analog Circuit Analysis",
    semesters: [],
    section: "retired",
  },
];

export const sectionMeta: Record<
  string,
  { label: string; description?: string }
> = {
  regular: {
    label: "Regular offerings",
    description: "Courses offered on a recurring semester schedule.",
  },
  "special-topics": {
    label: "Special topics",
    description:
      "Courses listed under ECE 5120, 5220, 5320, 6620. Offerings vary by semester and year.",
  },
  unscheduled: {
    label: "Catalog only",
    description:
      "Listed in the University Graduate Catalog but not currently scheduled.",
  },
  retired: {
    label: "Retired",
    description: "No longer offered.",
  },
};