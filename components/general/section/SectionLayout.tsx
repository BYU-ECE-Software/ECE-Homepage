import Link from 'next/link';
import Sidebar from './Sidebar';
import MobileNav from './MobileNav';
import type { NavSection } from '@/types/Content';

export interface Breadcrumb {
  label: string;
  /** Omit on the final crumb (the current page). */
  href?: string;
}

interface SectionLayoutProps {
  /** Shown in the banner, uppercased in CSS. */
  title: string;
  /** Shown beside the title in the banner. */
  tagline?: string;
  /** Section root, e.g. "/undergraduate/electrical-engineering". */
  basePath: string;
  /** Label for the sidebar link back to the section root. */
  homeLabel?: string;
  navigation: NavSection[];
  /** Slug of the page currently being viewed; omit on the section root. */
  currentSlug?: string;
  breadcrumbs?: Breadcrumb[];
  children: React.ReactNode;
}

/**
 * Shared layout for any section of the site made up of a banner, a
 * persistent sidebar, and a content column — currently the three majors
 * and the Opportunities section. Keeping one layout means navigation
 * behaviour, active states, and mobile handling stay identical everywhere.
 */
export default function SectionLayout({
  title,
  tagline,
  basePath,
  homeLabel,
  navigation,
  currentSlug,
  breadcrumbs,
  children,
}: SectionLayoutProps) {
  return (
    <div className="bg-white">
      <section className="bg-byu-navy py-4 text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-baseline justify-center gap-x-3 px-6 text-center">
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

      <div className="mx-auto max-w-7xl px-6 py-12">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="text-byu-medium-gray flex flex-wrap items-center gap-x-2 text-sm">
              {breadcrumbs.map((crumb, index) => (
                <li key={`${crumb.label}-${index}`} className="flex items-center gap-x-2">
                  {index > 0 && (
                    <span aria-hidden="true" className="text-gray-300">
                      /
                    </span>
                  )}
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-byu-royal hover:underline">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-byu-dark-gray">
                      {crumb.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className="mb-6 lg:hidden">
          <MobileNav
            basePath={basePath}
            homeLabel={homeLabel}
            navigation={navigation}
            currentSlug={currentSlug}
          />
        </div>

        <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
          <div className="hidden lg:block">
            <Sidebar
              basePath={basePath}
              homeLabel={homeLabel}
              navigation={navigation}
              currentSlug={currentSlug}
            />
          </div>

          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}
