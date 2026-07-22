"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export interface Announcement {
  title: string;
  description?: string;
  eyebrow?: string;
  href?: string;
  linkLabel?: string;
}

interface AnnouncementCarouselProps {
  announcements: Announcement[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

export default function AnnouncementCarousel({
  announcements,
  autoPlay = true,
  interval = 7000,
  className = "",
}: AnnouncementCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const hasMultiple = announcements.length > 1;

  useEffect(() => {
    if (!autoPlay || paused || !hasMultiple) return;
    const timer = window.setInterval(
      () => setActiveIndex((current) => (current + 1) % announcements.length),
      interval,
    );
    return () => window.clearInterval(timer);
  }, [announcements.length, autoPlay, hasMultiple, interval, paused]);

  if (announcements.length === 0) return null;
  const announcement = announcements[activeIndex];

  return (
    <section
      aria-label="Department announcements"
      className={`bg-byu-navy px-6 py-4 text-white ${className}`.trim()}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      <div className="mx-auto flex min-h-20 max-w-6xl flex-col justify-center gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div aria-live="polite" aria-atomic="true" className="max-w-4xl">
          {announcement.eyebrow && (
            <p className="text-xs font-semibold tracking-[0.18em] text-blue-200 uppercase">
              {announcement.eyebrow}
            </p>
          )}
          <h2 className="mt-1 text-lg font-semibold sm:text-xl">{announcement.title}</h2>
          {announcement.description && (
            <p className="mt-1 text-sm leading-6 text-blue-100">{announcement.description}</p>
          )}
        </div>

        <div className="flex shrink-0 items-center gap-3">
          {announcement.href && (
            announcement.href.startsWith("/") ? (
              <Link href={announcement.href} className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-byu-navy hover:bg-blue-50">
                {announcement.linkLabel ?? "Learn more"}
              </Link>
            ) : (
              <a href={announcement.href} target="_blank" rel="noopener noreferrer" className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-byu-navy hover:bg-blue-50">
                {announcement.linkLabel ?? "Learn more"}
              </a>
            )
          )}

          {hasMultiple && (
            <div className="flex items-center gap-2" role="group" aria-label="Announcement controls">
              <button type="button" onClick={() => setActiveIndex((activeIndex - 1 + announcements.length) % announcements.length)} className="rounded p-2 hover:bg-white/10" aria-label="Previous announcement">
                <span aria-hidden="true">←</span>
              </button>
              <span className="min-w-12 text-center text-xs text-blue-200">
                {activeIndex + 1} / {announcements.length}
              </span>
              <button type="button" onClick={() => setActiveIndex((activeIndex + 1) % announcements.length)} className="rounded p-2 hover:bg-white/10" aria-label="Next announcement">
                <span aria-hidden="true">→</span>
              </button>
              {autoPlay && (
                <button type="button" onClick={() => setPaused((value) => !value)} className="rounded px-2 py-1 text-xs font-medium hover:bg-white/10" aria-label={paused ? "Resume rotating announcements" : "Pause rotating announcements"}>
                  {paused ? "Play" : "Pause"}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
