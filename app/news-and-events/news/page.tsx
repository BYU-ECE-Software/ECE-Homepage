'use client';

import { useState } from 'react';
import { PageIntro } from '@/components/general/ContentPage';
import NewsGrid, { type NewsItem } from '@/components/general/NewsGrid';
import Pagination from '@/components/general/Pagination';
import { stories } from '@/data/news';

const newsItems: NewsItem[] = stories.map((story) => ({
  title: story.title,
  description: story.description,
  date: story.date,
  category: story.category,
  author: story.author,
  image: story.image,
  imageAlt: story.imageAlt,
  href: `/news-and-events/news/${story.slug}`,
}));

const STORIES_PER_PAGE = 6;

export default function NewsPage() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(newsItems.length / STORIES_PER_PAGE);
  const start = (page - 1) * STORIES_PER_PAGE;
  const pageStories = newsItems.slice(start, start + STORIES_PER_PAGE);

  const handlePageChange = (nextPage: number) => {
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <PageIntro
        title="Department news"
        description="Research breakthroughs, student accomplishments, faculty work, and stories from the ECE community."
      />
      <section className="px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <NewsGrid items={pageStories} featuredFirst={page === 1} />
          <Pagination currentPage={page} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
      </section>
    </>
  );
}
