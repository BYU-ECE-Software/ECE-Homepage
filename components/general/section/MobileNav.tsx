'use client';

import { Fragment } from 'react';
import { useRouter } from 'next/navigation';
import type { NavSection } from '@/types/Content';
import { resolveNavLink } from './navUtils';

interface MobileNavProps {
  /** Section root, e.g. "/undergraduate/electrical-engineering". */
  basePath: string;
  homeLabel?: string;
  navigation: NavSection[];
  currentSlug?: string;
}

// A flat option list built from the section groups, one <optgroup> per
// section, so the select mirrors the sidebar's structure on small screens.
export default function MobileNav({
  basePath,
  homeLabel = 'Overview',
  navigation,
  currentSlug,
}: MobileNavProps) {
  const router = useRouter();

  const currentValue = currentSlug ?? '';

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const slug = e.target.value;
    if (slug === '') {
      router.push(basePath);
      return;
    }

    const item = navigation.flatMap((section) => section.items).find((i) => i.slug === slug);
    if (!item) return;

    const { href, linkType } = resolveNavLink(basePath, item);
    if (linkType === 'external') {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      router.push(href);
    }
  };

  return (
    <select
      aria-label="Section navigation"
      value={currentValue}
      onChange={handleChange}
      className="text-byu-navy w-full rounded border border-gray-300 bg-white px-4 py-3 text-sm font-semibold shadow-sm"
    >
      <option value="">{homeLabel}</option>
      {navigation.map((section, index) =>
        section.title ? (
          <optgroup key={section.title || index} label={section.title}>
            {section.items.map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.title}
              </option>
            ))}
          </optgroup>
        ) : (
          <Fragment key={section.title || index}>
            {section.items.map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.title}
              </option>
            ))}
          </Fragment>
        ),
      )}
    </select>
  );
}
