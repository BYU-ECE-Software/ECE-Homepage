import Link from 'next/link';
import type { NavSection } from '@/types/Content';
import { resolveNavLink } from './navUtils';
import NavLinkIcon from './NavLinkIcon';

interface SidebarProps {
  /** Section root, e.g. "/undergraduate/electrical-engineering". */
  basePath: string;
  /** Label for the link back to the section root. */
  homeLabel?: string;
  navigation: NavSection[];
  currentSlug?: string;
}

const activeClasses = 'bg-byu-navy text-white font-semibold';
const inactiveClasses = 'text-byu-medium-gray hover:text-byu-navy hover:bg-gray-100';

export default function Sidebar({
  basePath,
  homeLabel = 'Overview',
  navigation,
  currentSlug,
}: SidebarProps) {
  return (
    <aside className="sticky top-8">
      <nav aria-label="Section navigation">
        {navigation.map((section, index) => (
          <div key={section.title || index} className="mb-6">
            {section.title && (
              <h2 className="text-byu-dark-gray mb-3 px-4 text-sm font-bold tracking-wide uppercase">
                {section.title}
              </h2>
            )}

            <ul className="space-y-1">
              {index === 0 && (
                <li>
                  <Link
                    href={basePath}
                    aria-current={!currentSlug ? 'page' : undefined}
                    className={`block rounded-lg px-4 py-2.5 text-sm transition ${
                      !currentSlug ? activeClasses : inactiveClasses
                    }`}
                  >
                    {homeLabel}
                  </Link>
                </li>
              )}

              {section.items.map((item) => {
                const { href, linkType } = resolveNavLink(basePath, item);
                const active = linkType === 'slug' && item.slug === currentSlug;
                const external = linkType === 'external';

                return (
                  <li key={item.slug}>
                    <Link
                      href={href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                      aria-current={active ? 'page' : undefined}
                      className={`block rounded-lg px-4 py-2.5 text-sm transition ${
                        active ? activeClasses : inactiveClasses
                      }`}
                    >
                      {item.title}
                      <NavLinkIcon linkType={linkType} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
