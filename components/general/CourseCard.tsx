import React from "react";
import { Course, Semester } from "@/types/course";
import { SemesterBadge } from "./SemesterBadge";

const ALL_SEMESTERS: Semester[] = ["fall", "winter", "spring"];

interface CourseCardProps {
  course: Course;
  activeSemesters: Semester[];
}

export function CourseCard({ course, activeSemesters }: CourseCardProps) {
  // When no filter is active, show all; otherwise check overlap
  const isMatch =
    activeSemesters.length === 0 ||
    course.semesters.some((s) => activeSemesters.includes(s));

  return (
    <div
      className={`group flex flex-col gap-2 rounded-xl border bg-white p-4 shadow-sm transition-all duration-200 ${
        isMatch
          ? "border-slate-200 hover:border-[#002E5D]/30 hover:shadow-md"
          : "border-slate-100 opacity-40 grayscale"
      }`}
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-3">
        <span className="font-mono text-xs font-semibold tracking-wide text-[#002E5D] bg-[#002E5D]/8 rounded-md px-2 py-1 whitespace-nowrap">
          {course.number}
        </span>
        {course.section === "special-topics" && (
          <span className="text-xs text-violet-600 bg-violet-50 ring-1 ring-violet-200 rounded-full px-2 py-0.5 font-medium">
            Special topic
          </span>
        )}
      </div>

      {/* Title */}
      <p className="text-sm font-semibold text-slate-800 leading-snug">
        {course.title}
      </p>

      {/* Instructor */}
      {course.instructor && (
        <p className="text-xs text-slate-500">{course.instructor}</p>
      )}

      {/* Semester badges */}
      {course.semesters.length > 0 ? (
        <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
          {ALL_SEMESTERS.map((s) => (
            <SemesterBadge
              key={s}
              semester={s}
              dimmed={!course.semesters.includes(s)}
            />
          ))}
        </div>
      ) : (
        <p className="mt-auto text-xs text-slate-400 italic pt-1">
          {course.section === "retired"
            ? "No longer offered"
            : "Not currently scheduled"}
        </p>
      )}

      {/* Notes */}
      {course.notes && (
        <p className="text-xs text-slate-400 border-t border-slate-100 pt-2 mt-1">
          {course.notes}
        </p>
      )}
    </div>
  );
}