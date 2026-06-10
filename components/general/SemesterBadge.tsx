import React from "react";
import { Semester, YearCycle } from "@/types/course";

const semesterConfig: Record<Semester, { label: string; classes: string; dimClasses: string }> = {
  fall: {
    label: "Fall",
    classes: "bg-amber-100 text-amber-800 ring-1 ring-amber-200",
    dimClasses: "bg-amber-50 text-amber-300 ring-1 ring-amber-100",
  },
  winter: {
    label: "Winter",
    classes: "bg-sky-100 text-sky-800 ring-1 ring-sky-200",
    dimClasses: "bg-sky-50 text-sky-300 ring-1 ring-sky-100",
  },
  spring: {
    label: "Spring",
    classes: "bg-emerald-100 text-emerald-800 ring-1 ring-emerald-200",
    dimClasses: "bg-emerald-50 text-emerald-300 ring-1 ring-emerald-100",
  },
  summer: {
    label: "Summer",
    classes: "bg-rose-100 text-rose-800 ring-1 ring-rose-200",
    dimClasses: "bg-rose-50 text-rose-300 ring-1 ring-rose-100",
  },
};

const cycleLabel: Record<YearCycle, string | null> = {
  every: null,
  even: "even yrs",
  odd: "odd yrs",
};

interface SemesterBadgeProps {
  semester: Semester;
  cycle?: YearCycle;
  dimmed?: boolean;
}

export function SemesterBadge({ semester, cycle = "every", dimmed }: SemesterBadgeProps) {
  const { label, classes, dimClasses } = semesterConfig[semester];
  const cycleText = cycleLabel[cycle];

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium transition-all ${
        dimmed ? dimClasses : classes
      }`}
    >
      {label}
      {!dimmed && cycleText && (
        <>
          <span className="opacity-40">·</span>
          <span className="font-normal opacity-70">{cycleText}</span>
        </>
      )}
    </span>
  );
}