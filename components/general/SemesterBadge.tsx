import React from "react";
import { Semester } from "@/types/course";

const semesterConfig: Record<
  Semester,
  { label: string; classes: string }
> = {
  fall: {
    label: "Fall",
    classes:
      "bg-amber-100 text-amber-800 ring-1 ring-amber-200",
  },
  winter: {
    label: "Winter",
    classes:
      "bg-sky-100 text-sky-800 ring-1 ring-sky-200",
  },
  spring: {
    label: "Spring",
    classes:
      "bg-emerald-100 text-emerald-800 ring-1 ring-emerald-200",
  },
};

interface SemesterBadgeProps {
  semester: Semester;
  dimmed?: boolean;
}

export function SemesterBadge({ semester, dimmed }: SemesterBadgeProps) {
  const { label, classes } = semesterConfig[semester];
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-opacity ${classes} ${
        dimmed ? "opacity-30" : ""
      }`}
    >
      {label}
    </span>
  );
}