export type Semester = "fall" | "winter" | "spring";

export type CourseSection =
  | "regular"
  | "special-topics"
  | "unscheduled"
  | "retired";

export interface Course {
  id: string;
  number: string;
  title: string;
  instructor?: string;
  semesters: Semester[];
  notes?: string;
  section: CourseSection;
}