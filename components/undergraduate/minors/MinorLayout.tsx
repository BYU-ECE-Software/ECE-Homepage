import type { MinorConfig } from '@/data/undergraduate/minors/types';

interface MinorLayoutProps {
  minor: MinorConfig;
  children: React.ReactNode;
}

export default function MinorLayout({ minor, children }: MinorLayoutProps) {
  return (
    <div className="bg-white">
      <section className="bg-byu-navy py-4 text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-baseline justify-center gap-x-3 px-6 text-center">
          <p className="text-xl font-semibold tracking-wide uppercase md:text-2xl">
            {minor.displayName}
          </p>

          <span className="text-white/40">|</span>

          <p className="text-sm text-white/80 md:text-base">{minor.tagline}</p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-6 py-12">
        <div>{children}</div>
      </div>
    </div>
  );
}
