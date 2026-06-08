'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { FiChevronDown } from 'react-icons/fi';
import navConfig, { NavItem } from './NavConfig';

type NavBarProps = {
  navPadLeft?: number;
  mobileOpen: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
  userRoles?: string[]; // Roles the current user holds; omit or pass [] for unauthenticated
};

// An item is visible if it has no roles requirement, or the user holds at least one required role
const hasAccess = (requiredRoles: string[] | undefined, userRoles: string[]): boolean =>
  !requiredRoles || requiredRoles.some((r) => userRoles.includes(r));

const NavBarv2 = ({ navPadLeft = 128, mobileOpen, setMobileOpen, userRoles = [] }: NavBarProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
      return (
        <Link
          key={item.href}
          href={item.href}
          onClick={() => setMobileOpen(false)}
          className="px-6 py-4 text-left hover:bg-[#FAFAFA]"
        >
          {item.label}
        </Link>
      );
    }

    const isOpen = openIndex === index;
    // Filter children by role too
    const visibleChildren = item.children.filter((c) => hasAccess(c.roles, userRoles));
    if (visibleChildren.length === 0) return null;

    return (
      <div key={item.label} ref={(el) => { mobileRefs.current[index] = el; }}>
        <button
          type="button"
          onClick={() => toggle(index)}
          aria-expanded={isOpen}
          className={`flex w-full items-center justify-between px-6 py-4 text-left hover:bg-[#FAFAFA] ${
            isOpen ? 'bg-[#FAFAFA]' : ''
          }`}
        >
          <span>{item.label}</span>
          <FiChevronDown className="text-byu-navy h-4 w-4" aria-hidden="true" />
        </button>

        {isOpen && (
          <div className="flex flex-col text-sm">
            {visibleChildren.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                onClick={() => { closeAll(); setMobileOpen(false); }}
                className="text-byu-navy px-10 py-2 text-left hover:bg-[#FAFAFA]"
              >
                {child.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  const renderDesktopItem = (item: NavItem, index: number) => {
    if (item.kind === 'link') {
      return (
        <Link
          key={item.href}
          href={item.href}
          onClick={closeAll}
          className="nav-link-hover px-8 py-4 whitespace-nowrap hover:bg-[#FAFAFA]"
        >
          {item.label}
        </Link>
      );
    }

    const isOpen = openIndex === index;
    const visibleChildren = item.children.filter((c) => hasAccess(c.roles, userRoles));
    if (visibleChildren.length === 0) return null;

    return (
      <div
        key={item.label}
        className="relative"
        ref={(el) => { desktopRefs.current[index] = el; }}
      >
        <button
          type="button"
          onClick={() => toggle(index)}
          aria-expanded={isOpen}
          className="nav-link-hover inline-flex items-center gap-2 px-8 py-4 whitespace-nowrap hover:bg-[#FAFAFA]"
        >
          <span>{item.label}</span>
          <FiChevronDown className="text-byu-navy h-3 w-3" aria-hidden="true" />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 w-56 border border-gray-200 bg-white shadow-lg">
            {visibleChildren.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                onClick={closeAll}
                className="text-byu-navy block w-full px-6 py-3 text-left hover:bg-gray-50"
              >
                {child.label}
              </Link>
            ))}
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

export default NavBarv2;