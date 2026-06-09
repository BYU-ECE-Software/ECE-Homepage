"use client";

import React, { useState, useMemo } from "react";
import { courses, sectionMeta } from "@/data/courses/gradCourses";
import { Course, CourseSection, Semester } from "@/types/course";
import { SectionTabs } from "@/components/general/SectionTabs";
import { SemesterFilter } from "@/components/general/SemesterFilter";
import { CourseGrid } from "@/components/general/CourseGrid";
import PageTitle from "@/components/layout/PageTitle";

export default function GraduateCoursesPage() {
  const [activeSection, setActiveSection] = useState<CourseSection>("regular");
  const [activeSemesters, setActiveSemesters] = useState<Semester[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Count courses per section (unfiltered)
  const sectionCounts = useMemo(() => {
    const counts = {} as Record<CourseSection, number>;
    const sections: CourseSection[] = [
      "regular",
      "special-topics",
      "unscheduled",
      "retired",
    ];
    sections.forEach((s) => {
      counts[s] = courses.filter((c) => c.section === s).length;
    });
    return counts;
  }, []);

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
        course.semesters.some((s) => activeSemesters.includes(s));

      return matchesSearch && matchesSemester;
    });
  }, [activeSection, activeSemesters, searchQuery]);

  return (
    <>
    <PageTitle title="Graduate Courses" />
    <div className="min-h-screen bg-slate-50">
      {/* Page header */}
      <header className="bg-[#002E5D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-sky-300 mb-2">
            Electrical &amp; Computer Engineering
          </p>
          <h1 className="text-3xl font-bold tracking-tight">
            Graduate Courses
          </h1>
          <p className="mt-2 text-slate-300 text-sm max-w-xl">
            Browse and filter ECE graduate course offerings by semester
            availability. Schedules are subject to change — verify with the
            department.
          </p>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Section tabs */}
        <SectionTabs
          active={activeSection}
          counts={sectionCounts}
          onChange={(s) => {
            setActiveSection(s);
            setActiveSemesters([]);
            setSearchQuery("");
          }}
        />

        {/* Filter bar */}
        <div className="mt-4">
          <SemesterFilter
            active={activeSemesters}
            onChange={setActiveSemesters}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            resultCount={filteredCourses.length}
          />
        </div>

        {/* Course grid */}
        <div className="mt-6">
          <CourseGrid
            courses={filteredCourses}
            activeSemesters={activeSemesters}
            sectionDescription={sectionMeta[activeSection].description}
          />
        </div>
      </main>
    </div>
    </>
  );
}