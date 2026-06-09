"use client";

import React from "react";
import { CourseSection } from "@/types/course";
import { sectionMeta } from "@/data/courses/gradCourses";

const SECTIONS: CourseSection[] = [
  "regular",
  "special-topics",
  "unscheduled",
  "retired",
];

interface SectionTabsProps {
  active: CourseSection;
  counts: Record<CourseSection, number>;
  onChange: (section: CourseSection) => void;
}

export function SectionTabs({ active, counts, onChange }: SectionTabsProps) {
  return (
    <div className="flex gap-1 overflow-x-auto scrollbar-none">
      {SECTIONS.map((section) => {
        const isActive = section === active;
        return (
          <button
            key={section}
            onClick={() => onChange(section)}
            className={`flex items-center gap-2 whitespace-nowrap rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${
              isActive
                ? "bg-[#002E5D] text-white shadow-sm"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            {sectionMeta[section].label}
            <span
              className={`rounded-full px-1.5 py-0.5 text-xs font-semibold ${
                isActive
                  ? "bg-white/20 text-white"
                  : "bg-slate-100 text-slate-500"
              }`}
            >
              {counts[section]}
            </span>
          </button>
        );
      })}
    </div>
  );
}