interface PageBannerProps {
  title: string;
  /** Shown beside the title, separated by a divider. */
  tagline?: string;
  /** Longer supporting copy shown as a subtitle below the title. */
  description?: string;
}

/**
 * The standard page header banner: a blue gradient bar (bright blue to royal
 * to navy) with a centered title, optional tagline, and optional
 * description. Used at the top of every page so header height and color
 * stay consistent across the site.
 */
export default function PageBanner({ title, tagline, description }: PageBannerProps) {
  return (
    <section
      className="relative flex min-h-32 items-center overflow-hidden py-6 text-white"
      style={{
        background:
          'linear-gradient(to right, #0047b9 0%, var(--color-byu-royal) 30%, var(--color-byu-navy) 100%)',
      }}
    >
      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center gap-2 px-6 text-center">
        <div className="flex flex-wrap items-baseline justify-center gap-x-3">
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

        {description && (
          <p className="text-base leading-7 text-white/85 md:text-lg">{description}</p>
        )}
      </div>
    </section>
  );
}
