"use client";

import { useState } from "react";
import { PageIntro } from "@/components/general/ContentPage";
import NewsGrid, { type NewsItem } from "@/components/general/NewsGrid";
import Pagination from "@/components/general/Pagination";

const stories: NewsItem[] = [
  {
    title: "BYU engineering students design wearable technology for search and rescue rats",
    description: "A capstone team improved a backpack localization device used by trained HeroRATs during search and rescue operations.",
    date: "May 21, 2026",
    category: "Intellect",
    author: "Sharman Gill",
    href: "https://news.byu.edu/",
  },
  {
    title: "BYU student named Honor Graduate as top U.S. Marine Corps officer candidate",
    description: "A BYU student earned the highest national distinction in the Marine Corps officer candidate program.",
    date: "May 19, 2026",
    category: "Character",
    author: "Ellie Larsen",
    href: "https://news.byu.edu/",
  },
  {
    title: "When GPS fails, HeroRATs and BYU engineers step in",
    description: "ECE students helped improve how rescue workers locate trained rats and the survivors they identify after earthquakes.",
    date: "May 14, 2026",
    category: "Department News",
    author: "Allyson Gibson",
  },
  {
    title: "No hardware? No problem: Remote ID for older drones",
    description: "Students developed a practical way to add required Remote ID telemetry to drones that predate newer FAA rules.",
    date: "May 14, 2025",
    category: "Department News",
    author: "Kylie Lay",
  },
  {
    title: "Think small",
    description: "Department researchers are advancing small-scale systems that make ambitious sensing and space applications possible.",
    date: "April 21, 2025",
    category: "Department News",
    author: "Kylie Lay",
  },
];

const STORIES_PER_PAGE = 6;

export default function NewsPage() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(stories.length / STORIES_PER_PAGE);
  const start = (page - 1) * STORIES_PER_PAGE;
  const pageStories = stories.slice(start, start + STORIES_PER_PAGE);

  const handlePageChange = (nextPage: number) => {
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <PageIntro eyebrow="News & Events" title="Department news" description="Research breakthroughs, student accomplishments, faculty work, and stories from the ECE community." />
      <section className="px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <NewsGrid items={pageStories} featuredFirst={page === 1} />
          <Pagination currentPage={page} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
      </section>
    </>
  );
}
