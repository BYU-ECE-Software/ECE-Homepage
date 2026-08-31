'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiChevronDown } from 'react-icons/fi';
import type { NavItem } from './NavConfig';
import navConfig from './NavConfig';

type NavBarProps = {
  navPadLeft?: number;
  mobileOpen: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
  userRoles?: string[]; // Roles the current user holds; omit or pass [] for unauthenticated
};

// An item is visible if it has no roles requirement, or the user holds at least one required role
const hasAccess = (requiredRoles: string[] | undefined, userRoles: string[]): boolean =>
  !requiredRoles || requiredRoles.some((r) => userRoles.includes(r));

// Trailing slashes are on (see next.config.ts), so normalise before comparing
const normalise = (path: string): string =>
  path !== '/' && path.endsWith('/') ? path.slice(0, -1) : path;

// A link is "current" when the visitor is on that page or anywhere beneath it.
// The Home link only matches the root, so it isn't highlighted on every page.
const linkMatches = (href: string, pathname: string): boolean => {
  const target = normalise(href);
  const current = normalise(pathname);
  if (target === '/') return current === '/';
  return current === target || current.startsWith(`${target}/`);
};

// A dropdown is "current" if any of its children match, so visitors can see
// which section of the site they're in from the top-level bar alone.
const itemMatches = (item: NavItem, pathname: string): boolean =>
  item.kind === 'link'
    ? linkMatches(item.href, pathname)
    : item.children.some((child) => linkMatches(child.href, pathname));

const NavBar = ({ navPadLeft = 128, mobileOpen, setMobileOpen, userRoles = [] }: NavBarProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const pathname = usePathname() ?? '/';

  const desktopNavRef = useRef<HTMLDivElement | null>(null);
  const desktopRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [navSize, setNavSize] = useState<'base' | 'sm' | 'xs'>('base');

  const closeAll = () => setOpenIndex(null);
  const toggle = (index: number) => setOpenIndex((prev) => (prev === index ? null : index));

  // Filter the config once per render so indexes stay stable for refs
  const visibleItems = navConfig.filter((item) => hasAccess(item.roles, userRoles));

  useLayoutEffect(() => {
    const el = desktopNavRef.current;
    if (!el) return;

    const fits = () => el.scrollWidth <= el.clientWidth;

    const update = () => {
      setNavSize('base');
      requestAnimationFrame(() => {
        if (fits()) return;
        setNavSize('sm');
        requestAnimationFrame(() => {
          if (fits()) return;
          setNavSize('xs');
        });
      });
    };

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [navPadLeft, openIndex]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const clickedAny = visibleItems.some(
        (_, i) =>
          (desktopRefs.current[i]?.contains(target) ?? false) ||
          (mobileRefs.current[i]?.contains(target) ?? false),
      );
      if (!clickedAny) closeAll();
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeAll();
        setMobileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [setMobileOpen, visibleItems]);

  // ── Render helpers ───────────────────────────────────────────────────────

  const renderMobileItem = (item: NavItem, index: number) => {
    if (item.kind === 'link') {
      const active = linkMatches(item.href, pathname);
      return (
        <Link
          key={item.href}
          href={item.href}
          onClick={() => setMobileOpen(false)}
          aria-current={active ? 'page' : undefined}
          className={`px-6 py-4 text-left hover:bg-[#FAFAFA] ${
            active ? 'border-byu-navy border-l-4 bg-[#FAFAFA] font-semibold' : ''
          }`}
        >
          {item.label}
        </Link>
      );
    }

    const isOpen = openIndex === index;
    const sectionActive = itemMatches(item, pathname);
    // Filter children by role too
    const visibleChildren = item.children.filter((c) => hasAccess(c.roles, userRoles));
    if (visibleChildren.length === 0) return null;

    return (
      <div
        key={item.label}
        ref={(el) => {
          mobileRefs.current[index] = el;
        }}
      >
        <button
          type="button"
          onClick={() => toggle(index)}
          aria-expanded={isOpen}
          className={`flex w-full items-center justify-between px-6 py-4 text-left hover:bg-[#FAFAFA] ${
            isOpen ? 'bg-[#FAFAFA]' : ''
          } ${sectionActive ? 'border-byu-navy border-l-4 font-semibold' : ''}`}
        >
          <span>{item.label}</span>
          <FiChevronDown className="text-byu-navy h-4 w-4" aria-hidden="true" />
        </button>

        {isOpen && (
          <div className="flex flex-col text-sm">
            {visibleChildren.map((child) => {
              const childActive = linkMatches(child.href, pathname);
              return (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={() => {
                    closeAll();
                    setMobileOpen(false);
                  }}
                  aria-current={childActive ? 'page' : undefined}
                  className={`text-byu-navy px-10 py-2 text-left hover:bg-[#FAFAFA] ${
                    childActive ? 'bg-[#FAFAFA] font-semibold' : ''
                  }`}
                >
                  {child.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  const renderDesktopItem = (item: NavItem, index: number) => {
    if (item.kind === 'link') {
      const active = linkMatches(item.href, pathname);
      return (
        <Link
          key={item.href}
          href={item.href}
          onClick={closeAll}
          aria-current={active ? 'page' : undefined}
          className={`nav-link-hover px-8 py-4 whitespace-nowrap hover:bg-[#FAFAFA] ${
            active ? 'nav-link-active font-semibold' : ''
          }`}
        >
          {item.label}
        </Link>
      );
    }

    const isOpen = openIndex === index;
    const sectionActive = itemMatches(item, pathname);
    const visibleChildren = item.children.filter((c) => hasAccess(c.roles, userRoles));
    if (visibleChildren.length === 0) return null;

    return (
      <div
        key={item.label}
        className="relative"
        ref={(el) => {
          desktopRefs.current[index] = el;
        }}
      >
        <button
          type="button"
          onClick={() => toggle(index)}
          aria-expanded={isOpen}
          className={`nav-link-hover inline-flex items-center gap-2 px-8 py-4 whitespace-nowrap hover:bg-[#FAFAFA] ${
            sectionActive ? 'nav-link-active font-semibold' : ''
          }`}
        >
          <span>{item.label}</span>
          <FiChevronDown className="text-byu-navy h-3 w-3" aria-hidden="true" />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 w-56 border border-gray-200 bg-white shadow-lg">
            {visibleChildren.map((child) => {
              const childActive = linkMatches(child.href, pathname);
              return (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={closeAll}
                  aria-current={childActive ? 'page' : undefined}
                  className={`text-byu-navy block w-full px-6 py-3 text-left hover:bg-gray-50 ${
                    childActive ? 'bg-gray-50 font-semibold' : ''
                  }`}
                >
                  {child.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  // ────────────────────────────────────────────────────────────────────────

  return (
    <>
      {/* ------ Mobile nav bar ------ */}
      {mobileOpen && (
        <div id="mobile-menu" className="text-byu-navy w-full border-t bg-white shadow md:hidden">
          <nav className="flex flex-col py-2 text-base font-medium">
            {visibleItems.map((item, index) => renderMobileItem(item, index))}
          </nav>
        </div>
      )}

      {/* ------ Desktop nav bar ------ */}
      <nav className="text-byu-navy hidden w-full bg-white shadow md:block">
        <div
          ref={desktopNavRef}
          className={`flex px-6 font-medium ${
            navSize === 'base' ? 'text-base' : navSize === 'sm' ? 'text-sm' : 'text-xs'
          }`}
          style={{ paddingLeft: navPadLeft }}
        >
          {visibleItems.map((item, index) => renderDesktopItem(item, index))}
        </div>
      </nav>

      <button type="button" className="sr-only" aria-hidden="true" tabIndex={-1} />
    </>
  );
};

export default NavBar;
