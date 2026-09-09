'use client';

import React from 'react';
import type { Semester, YearCycle } from '@/types/Course';

const SEMESTERS: { value: Semester; label: string; activeClasses: string }[] = [
  { value: 'fall', label: 'Fall', activeClasses: 'bg-amber-500 text-white ring-amber-500' },
  { value: 'winter', label: 'Winter', activeClasses: 'bg-sky-500 text-white ring-sky-500' },
  { value: 'spring', label: 'Spring', activeClasses: 'bg-emerald-500 text-white ring-emerald-500' },
  { value: 'summer', label: 'Summer', activeClasses: 'bg-rose-500 text-white ring-rose-500' },
];

const CYCLES: { value: YearCycle; label: string }[] = [
  { value: 'every', label: 'Every year' },
  { value: 'even', label: 'Even years' },
  { value: 'odd', label: 'Odd years' },
];

interface SemesterFilterProps {
  active: Semester[];
  onChange: (semesters: Semester[]) => void;
  activeCycle: YearCycle | null;
  onCycleChange: (cycle: YearCycle | null) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  resultCount: number;
  showCycleFilter?: boolean;
}

export function SemesterFilter({
  active,
  onChange,
  activeCycle,
  onCycleChange,
  searchQuery,
  onSearchChange,
  resultCount,
  showCycleFilter = true,
}: SemesterFilterProps) {
  function toggleSemester(s: Semester) {
    if (active.includes(s)) {
      onChange(active.filter((x) => x !== s));
    } else {
      onChange([...active, s]);
    }
  }

  const hasFilters = active.length > 0 || searchQuery || activeCycle !== null;

  return (
    <div className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 py-3 backdrop-blur-sm">
      <div className="flex flex-wrap items-center gap-3">
        {/* Search */}
        <div className="relative min-w-[180px] flex-1">
          <svg
            className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search courses…"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-white py-2 pr-3 pl-9 text-sm placeholder:text-slate-400 focus:border-[#002E5D]/40 focus:ring-2 focus:ring-[#002E5D]/20 focus:outline-none"
          />
        </div>

        {/* Semester toggle pills */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-medium text-slate-500">Semester:</span>
          {SEMESTERS.map(({ value, label, activeClasses }) => (
            <button
              key={value}
              onClick={() => toggleSemester(value)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium ring-1 transition-all ${
                active.includes(value)
                  ? activeClasses
                  : 'bg-white text-slate-600 ring-slate-200 hover:ring-slate-300'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Year cycle filter — only shown when relevant */}
        {showCycleFilter && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium text-slate-500">Year:</span>
            {CYCLES.map(({ value, label }) => (
              <button
                key={value}
                onClick={() => onCycleChange(activeCycle === value ? null : value)}
                className={`rounded-full px-3 py-1.5 text-xs font-medium ring-1 transition-all ${
                  activeCycle === value
                    ? 'bg-[#002E5D] text-white ring-[#002E5D]'
                    : 'bg-white text-slate-600 ring-slate-200 hover:ring-slate-300'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        )}

        {/* Clear + count */}
        <div className="ml-auto flex items-center gap-3">
          {hasFilters && (
            <button
              onClick={() => {
                onChange([]);
                onSearchChange('');
                onCycleChange(null);
              }}
              className="text-xs text-slate-400 transition-colors hover:text-slate-600"
            >
              Clear all
            </button>
          )}
          <span className="hidden text-xs text-slate-400 sm:block">
            {resultCount} {resultCount === 1 ? 'course' : 'courses'}
          </span>
        </div>
      </div>
    </div>
  );
}
