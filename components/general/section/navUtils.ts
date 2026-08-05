import { NavItem } from "@/types/Content";

// Matches "http://..." or "https://..." at the start of a string.
const ABSOLUTE_URL = /^https?:\/\//i;

// - "slug"     -> no `href` set; a page inside this section
// - "internal" -> `href` set, but points elsewhere on this site
// - "external" -> `href` set to an absolute http(s) URL
export type NavLinkType = "slug" | "internal" | "external";

export interface ResolvedNavLink {
  href: string;
  linkType: NavLinkType;
}

export function isExternal(href: string): boolean {
  return ABSOLUTE_URL.test(href);
}

/**
 * Works out where a sidebar/mobile-nav item should link to, and what kind
 * of link it is.
 *
 * - `item.href` set to an absolute URL (http/https)     -> "external", opens in a new tab
 * - `item.href` set to anything else (e.g. "/research") -> "internal", same tab
 * - `item.href` not set -> "slug", a page inside this section: {basePath}/{item.slug}
 *
 * `basePath` is the section root, e.g. "/undergraduate/electrical-engineering"
 * or "/opportunities".
 */
export function resolveNavLink(
  basePath: string,
  item: NavItem,
): ResolvedNavLink {
  if (item.href) {
    return {
      href: item.href,
      linkType: isExternal(item.href) ? "external" : "internal",
    };
  }

  return {
    href: `${basePath}/${item.slug}`,
    linkType: "slug",
  };
}
