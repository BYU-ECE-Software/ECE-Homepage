'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { courses, sectionMeta } from '@/data/courses/gradCourses';
import type { CourseSection, Semester, YearCycle } from '@/types/Course';
import { SectionTabs } from '@/components/general/SectionTabs';
import { SemesterFilter } from '@/components/general/SemesterFilter';
import { CourseGrid } from '@/components/general/CourseGrid';
import PageBanner from '@/components/layout/PageBanner';

const SECTIONS: CourseSection[] = ['regular', 'special-topics', 'unscheduled', 'retired'];

function sectionFromHash(): CourseSection | null {
  const hash = window.location.hash.replace(/^#/, '');
  return SECTIONS.find((s) => s === hash) ?? null;
}

export default function GraduateCoursesPage() {
  const [activeSection, setActiveSection] = useState<CourseSection>('regular');
  const [activeSemesters, setActiveSemesters] = useState<Semester[]>([]);
  const [activeCycle, setActiveCycle] = useState<YearCycle | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // URL hash -> active section, on load and on any hashchange (deep links,
  // back/forward, manual edits). Runs after hydration, so SSR stays consistent.
  useEffect(() => {
    const fromHash = () => {
      const match = sectionFromHash();
      if (match) setActiveSection(match);
    };
    fromHash();
    window.addEventListener('hashchange', fromHash);
    return () => window.removeEventListener('hashchange', fromHash);
  }, []);

  const handleSectionChange = (section: CourseSection) => {
    setActiveSection(section);
    setActiveSemesters([]);
    setActiveCycle(null);
    setSearchQuery('');
    // replaceState (not location.hash =) so switching tabs doesn't spam
    // browser history or re-trigger the hashchange listener above.
    const url = `${window.location.pathname}${window.location.search}#${section}`;
    window.history.replaceState(null, '', url);
  };

  // Count courses per section (unfiltered)
  const sectionCounts = useMemo(() => {
    const counts = {} as Record<CourseSection, number>;
    const sections: CourseSection[] = ['regular', 'special-topics', 'unscheduled', 'retired'];
    sections.forEach((s) => {
      counts[s] = courses.filter((c) => c.section === s).length;
    });
    return counts;
  }, []);

  // Whether ANY course in the current section has non-"every" cycles
  const showCycleFilter = useMemo(() => {
    return courses
      .filter((c) => c.section === activeSection)
      .some((c) => c.semesters.some((o) => o.cycle !== 'every'));
  }, [activeSection]);

  // Filtered courses for current section
  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      if (course.section !== activeSection) return false;

      const matchesSearch =
        !searchQuery ||
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.number.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.instructor?.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesSemester =
        activeSemesters.length === 0 ||
        course.semesters.some((o) => activeSemesters.includes(o.semester));

      const matchesCycle =
        activeCycle === null || course.semesters.some((o) => o.cycle === activeCycle);

      return matchesSearch && matchesSemester && matchesCycle;
    });
  }, [activeSection, activeSemesters, activeCycle, searchQuery]);

  return (
    <div className="min-h-screen bg-slate-50">
      <PageBanner
        title="Graduate Courses"
        description="Browse and filter ECE graduate course offerings by semester availability. Schedules are subject to change, contact the department with questions or concerns."
      />

      {/* Main content */}
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <SectionTabs active={activeSection} counts={sectionCounts} onChange={handleSectionChange} />

        <div className="mt-4">
          <SemesterFilter
            active={activeSemesters}
            onChange={setActiveSemesters}
            activeCycle={activeCycle}
            onCycleChange={setActiveCycle}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            resultCount={filteredCourses.length}
            showCycleFilter={showCycleFilter}
          />
        </div>

        <div className="mt-6">
          <CourseGrid
            courses={filteredCourses}
            activeSemesters={activeSemesters}
            sectionDescription={sectionMeta[activeSection].description}
          />
        </div>
      </div>
    </div>
  );
}
