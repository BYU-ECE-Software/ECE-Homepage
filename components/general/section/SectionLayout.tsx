import Link from 'next/link';
import PageBanner from '@/components/layout/PageBanner';

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
  breadcrumbs?: Breadcrumb[];
  children: React.ReactNode;
}

export default function SectionLayout({
  title,
  tagline,
  breadcrumbs,
  children,
}: SectionLayoutProps) {
  return (
    <div className="overflow-x-hidden bg-white">
      <PageBanner title={title} tagline={tagline} />

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

        <div>{children}</div>
      </div>
    </div>
  );
}
