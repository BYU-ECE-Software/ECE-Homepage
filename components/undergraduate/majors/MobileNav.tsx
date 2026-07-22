"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { NavSection } from "@/data/undergraduate/majors/types";
import { resolveNavLink } from "./navUtils";
import NavLinkIcon from "./NavLinkIcon";

interface MobileNavProps {
  majorSlug: string;
  navigation: NavSection[];
  currentSlug?: string;
}

export default function MobileNav({
  majorSlug,
  navigation,
  currentSlug,
}: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const basePath = `/undergraduate/${majorSlug}`;

  const currentTitle = currentSlug
    ? navigation
        .flatMap((section) => section.items)
        .find((item) => item.slug === currentSlug)?.title
    : "Home";

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between rounded border border-gray-300 bg-white px-4 py-3 text-left text-sm font-semibold text-byu-navy shadow-sm"
        aria-expanded={open}
      >
        <span>{currentTitle}</span>

        <svg
          className={`h-4 w-4 text-byu-medium-gray transition-transform ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute z-20 mt-2 w-full rounded border border-gray-200 bg-white p-4 shadow-lg">
          <ul className="mb-4 space-y-1 border-b border-gray-100 pb-4">
            <li>
              <Link
                href={basePath}
                onClick={() => setOpen(false)}
                className={`block rounded px-3 py-2 text-sm transition ${
                  !currentSlug
                    ? "border-l-4 border-byu-royal bg-gray-100 font-semibold text-byu-navy"
                    : "font-medium text-byu-navy hover:bg-gray-50"
                }`}
              >
                Home
              </Link>
            </li>
          </ul>

          {navigation.map((section, index) => (
            <div
              key={section.title}
              className={index === navigation.length - 1 ? "" : "mb-4"}
            >
              <h2 className="mb-2 text-xs font-bold uppercase tracking-wide text-byu-dark-gray">
                {section.title}
              </h2>

              <ul className="space-y-1">
                {section.items.map((item) => {
                  const { href, linkType } = resolveNavLink(majorSlug, item);
                  const active =
                    linkType === "slug" && item.slug === currentSlug;
                  const external = linkType === "external";

                  return (
                    <li key={item.slug}>
                      <Link
                        href={href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        onClick={() => setOpen(false)}
                        className={`block rounded px-3 py-2 text-sm transition ${
                          active
                            ? "border-l-4 border-byu-royal bg-gray-100 font-semibold text-byu-navy"
                            : "text-byu-medium-gray hover:bg-gray-50 hover:text-byu-navy"
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
        </div>
      )}
    </div>
  );
}
