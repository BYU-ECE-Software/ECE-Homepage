import { NavItem } from "@/data/undergraduate/majors/types";

// Matches "http://..." or "https://..." at the start of a string.
const ABSOLUTE_URL = /^https?:\/\//i;

// - "slug"     -> no `href` set; falls back to this major's own page
// - "internal" -> `href` set, but points elsewhere on this site
// - "external" -> `href` set to an absolute http(s) URL
export type NavLinkType = "slug" | "internal" | "external";

export interface ResolvedNavLink {
  href: string;
  linkType: NavLinkType;
}

/**
 * Works out where a sidebar/mobile-nav item should link to, and what kind
 * of link it is.
 *
 * - `item.href` set to an absolute URL (http/https)  -> "external", opens in a new tab
 * - `item.href` set to anything else (e.g. "/research") -> "internal", same tab
 * - `item.href` not set -> "slug", falls back to the major's own page:
 *   /undergraduate/{majorSlug}/{item.slug}
 */
export function resolveNavLink(
  majorSlug: string,
  item: NavItem
): ResolvedNavLink {
  if (item.href) {
    return {
      href: item.href,
      linkType: ABSOLUTE_URL.test(item.href) ? "external" : "internal",
    };
  }

  return {
    href: `/undergraduate/${majorSlug}/${item.slug}`,
    linkType: "slug",
  };
}

