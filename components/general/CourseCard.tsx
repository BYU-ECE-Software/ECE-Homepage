import React from 'react';
import type { Course, Semester } from '@/types/Course';
import { SemesterBadge } from './SemesterBadge';

interface CourseCardProps {
  course: Course;
  activeSemesters: Semester[];
}

export function CourseCard({ course, activeSemesters }: CourseCardProps) {
  const isMatch =
    activeSemesters.length === 0 ||
    course.semesters.some((o) => activeSemesters.includes(o.semester));

  return (
    <div
      className={`flex flex-col gap-2 bg-white px-4 py-3 transition-all duration-200 sm:flex-row sm:items-center sm:gap-4 ${
        isMatch ? 'hover:bg-slate-50' : 'opacity-40 grayscale'
      }`}
    >
      {/* Number */}
      <span className="rounded-md bg-[#002E5D]/[0.07] px-2 py-1 font-mono text-xs font-semibold tracking-wide whitespace-nowrap text-[#002E5D] sm:w-24 sm:shrink-0 sm:text-center">
        {course.number}
      </span>

      {/* Title + instructor */}
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-sm leading-snug font-semibold text-slate-800">{course.title}</p>
          {course.section === 'special-topics' && (
            <span className="rounded-full bg-violet-50 px-2 py-0.5 text-xs font-medium whitespace-nowrap text-violet-600 ring-1 ring-violet-200">
              Special topic
            </span>
          )}
        </div>
        {course.instructor && <p className="text-xs text-slate-500">{course.instructor}</p>}
        {course.notes && <p className="mt-0.5 text-xs text-slate-400">{course.notes}</p>}
      </div>

      {/* Last / Next taught — special topics only */}
      {course.section === 'special-topics' && (course.lastOffered || course.nextOffered) && (
        <div className="flex shrink-0 flex-col gap-0.5 sm:items-end">
          {course.lastOffered && (
            <span className="text-xs text-slate-400">Last taught: {course.lastOffered}</span>
          )}
          {course.nextOffered && (
            <span className="text-xs font-medium text-[#002E5D]">
              Next taught: {course.nextOffered}
            </span>
          )}
        </div>
      )}

      {/* Semester badges */}
      {course.semesters.length > 0 ? (
        <div className="flex shrink-0 flex-wrap gap-1.5 sm:w-80 sm:flex-nowrap sm:justify-end">
          {course.semesters.map((offering) => (
            <SemesterBadge key={offering.semester} semester={offering.semester} cycle={offering.cycle} />
          ))}
        </div>
      ) : (
        <p className="shrink-0 text-xs text-slate-400 italic sm:w-80 sm:text-right">
          {course.section === 'retired' ? 'No longer offered' : 'Not currently scheduled'}
        </p>
      )}
    </div>
  );
}
