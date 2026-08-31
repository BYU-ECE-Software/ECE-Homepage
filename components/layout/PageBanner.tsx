interface PageBannerProps {
  title: string;
  /** Shown beside the title, separated by a divider. */
  tagline?: string;
}

/**
 * The standard page header banner: a royal-blue bar with a centered title
 * and optional tagline, and a navy gradient bleeding in from the right.
 * Used at the top of every page so header height and color stay consistent
 * across the site.
 */
export default function PageBanner({ title, tagline }: PageBannerProps) {
  return (
    <section className="bg-byu-royal relative flex h-24 items-center overflow-hidden text-white">
      <div
        aria-hidden="true"
        className="bg-linear-to-l from-byu-navy absolute inset-0 to-transparent"
      />
      <div className="relative mx-auto flex w-full max-w-6xl flex-wrap items-baseline justify-center gap-x-3 px-6 text-center">
        <p className="text-xl font-semibold tracking-wide uppercase md:text-2xl">{title}</p>

        {tagline && (
          <>
            <span aria-hidden="true" className="text-white/40">
              |
            </span>
            <p className="text-sm text-white/80 md:text-base">{tagline}</p>
          </>
        )}
      </div>
    </section>
  );
}
