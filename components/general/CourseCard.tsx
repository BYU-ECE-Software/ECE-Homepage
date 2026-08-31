import React from 'react';
import type { Course, Semester, SemesterOffering } from '@/types/Course';
import { SemesterBadge } from './SemesterBadge';

const ALL_SEMESTERS: Semester[] = ['fall', 'winter', 'spring', 'summer'];

interface CourseCardProps {
  course: Course;
  activeSemesters: Semester[];
}

export function CourseCard({ course, activeSemesters }: CourseCardProps) {
  const isMatch =
    activeSemesters.length === 0 ||
    course.semesters.some((o) => activeSemesters.includes(o.semester));

  // Build a lookup for quick access to cycle per semester
  const offeringBySemester = Object.fromEntries(
    course.semesters.map((o) => [o.semester, o]),
  ) as Partial<Record<Semester, SemesterOffering>>;

  return (
    <div
      className={`flex flex-col gap-2 rounded-xl border bg-white p-4 shadow-sm transition-all duration-200 ${
        isMatch
          ? 'border-slate-200 hover:border-[#002E5D]/30 hover:shadow-md'
          : 'border-slate-100 opacity-40 grayscale'
      }`}
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-3">
        <span className="rounded-md bg-[#002E5D]/[0.07] px-2 py-1 font-mono text-xs font-semibold tracking-wide whitespace-nowrap text-[#002E5D]">
          {course.number}
        </span>
        {course.section === 'special-topics' && (
          <span className="rounded-full bg-violet-50 px-2 py-0.5 text-xs font-medium whitespace-nowrap text-violet-600 ring-1 ring-violet-200">
            Special topic
          </span>
        )}
      </div>

      {/* Title */}
      <p className="text-sm leading-snug font-semibold text-slate-800">{course.title}</p>

      {/* Instructor */}
      {course.instructor && <p className="text-xs text-slate-500">{course.instructor}</p>}

      {/* Semester badges */}
      {course.semesters.length > 0 ? (
        <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
          {ALL_SEMESTERS.map((s) => {
            const offering = offeringBySemester[s];
            return (
              <SemesterBadge key={s} semester={s} cycle={offering?.cycle} dimmed={!offering} />
            );
          })}
        </div>
      ) : (
        <p className="mt-auto pt-1 text-xs text-slate-400 italic">
          {course.section === 'retired' ? 'No longer offered' : 'Not currently scheduled'}
        </p>
      )}

      {/* Last / Next taught — special topics only */}
      {course.section === 'special-topics' && (course.lastOffered || course.nextOffered) && (
        <div className="mt-1 flex flex-col gap-1 border-t border-slate-100 pt-2">
          {course.lastOffered && (
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs text-slate-400">Last taught</span>
              <span className="text-xs font-medium text-slate-600">{course.lastOffered}</span>
            </div>
          )}
          {course.nextOffered && (
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs text-slate-400">Next taught</span>
              <span className="text-xs font-medium text-[#002E5D]">{course.nextOffered}</span>
            </div>
          )}
        </div>
      )}

      {/* General notes */}
      {course.notes && (
        <p className="mt-1 border-t border-slate-100 pt-2 text-xs text-slate-400">{course.notes}</p>
      )}
    </div>
  );
}
