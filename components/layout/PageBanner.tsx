interface PageBannerProps {
  title: string;
  /** Shown beside the title, separated by a divider. */
  tagline?: string;
  /** Longer supporting copy shown as a subtitle below the title. */
  description?: string;
  /** Optional full-width background image, shown behind a dark overlay instead of the default gradient. */
  backgroundImage?: string;
}

/**
 * The standard page header banner: a blue gradient bar (bright blue to royal
 * to navy) with a centered title, optional tagline, and optional
 * description. Used at the top of every page so header height and color
 * stay consistent across the site. Pass `backgroundImage` to show a photo
 * banner (with a dark overlay for text contrast) instead of the gradient.
 */
export default function PageBanner({ title, tagline, description, backgroundImage }: PageBannerProps) {
  return (
    <section
      className={`relative flex items-center overflow-hidden bg-cover bg-center text-white ${backgroundImage ? 'min-h-96 py-14' : 'min-h-32 py-6'}`}
      style={
        backgroundImage
          ? { backgroundImage: `url('${backgroundImage}')` }
          : {
              background:
                'linear-gradient(to right, #0047b9 0%, var(--color-byu-royal) 30%, var(--color-byu-navy) 100%)',
            }
      }
    >
      {backgroundImage && <div className="absolute inset-0 bg-[#6c7580]/70" aria-hidden="true" />}
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
