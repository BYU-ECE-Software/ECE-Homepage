import React from "react";
import { Course, Semester } from "@/types/course";
import { CourseCard } from "./CourseCard";

interface CourseGridProps {
  courses: Course[];
  activeSemesters: Semester[];
  sectionDescription?: string;
}

export function CourseGrid({
  courses,
  activeSemesters,
  sectionDescription,
}: CourseGridProps) {
  if (courses.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="rounded-full bg-slate-100 p-4 mb-4">
          <svg
            className="w-6 h-6 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        </div>
        <p className="text-sm font-medium text-slate-600">No courses found</p>
        <p className="text-xs text-slate-400 mt-1">
          Try adjusting your search or filters.
        </p>
      </div>
    );
  }

  return (
    <div>
      {sectionDescription && (
        <p className="text-sm text-slate-500 mb-4">{sectionDescription}</p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            activeSemesters={activeSemesters}
          />
        ))}
      </div>
    </div>
  );
}