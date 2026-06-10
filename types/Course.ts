export type YearCycle = "every" | "odd" | "even";

export type Semester = "fall" | "winter" | "spring" | "summer";

export interface SemesterOffering {
  semester: Semester;
  cycle: YearCycle;
}

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
  semesters: SemesterOffering[];
  notes?: string;
  section: CourseSection;
  //Special Topics only
  lastOffered?: string;
  nextOffered?: string;
}