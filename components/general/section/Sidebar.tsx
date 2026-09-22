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

const linkBase =
  'flex items-center gap-2 rounded-md py-2.5 pr-3 pl-4 text-sm transition-all duration-200';
const activeClasses = 'bg-byu-navy/5 text-byu-navy font-semibold';
const inactiveClasses =
  'text-byu-medium-gray hover:bg-byu-navy/5 hover:text-byu-navy hover:pl-5 font-medium';

export default function Sidebar({
  basePath,
  homeLabel = 'Overview',
  navigation,
  currentSlug,
}: SidebarProps) {
  return (
    <aside
      className="sticky max-h-[calc(100vh-var(--header-height)-2rem)] overflow-y-auto"
      style={{ top: 'calc(var(--header-height) + 2rem)' }}
    >
      <nav aria-label="Section navigation">
        {navigation.map((section, index) => (
          <div key={section.title || index} className={index > 0 ? 'mt-6' : undefined}>
            {section.title && (
              <h2 className="text-byu-medium-gray mb-2 px-4 text-xs font-bold tracking-widest uppercase">
                {section.title}
              </h2>
            )}

            <ul className="space-y-0.5">
              {index === 0 && (
                <li>
                  <Link
                    href={basePath}
                    aria-current={!currentSlug ? 'page' : undefined}
                    className={`${linkBase} ${!currentSlug ? activeClasses : inactiveClasses}`}
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
                      className={`${linkBase} ${active ? activeClasses : inactiveClasses}`}
                    >
                      <span className="flex-1">{item.title}</span>
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
