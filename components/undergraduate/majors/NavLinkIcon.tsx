import { NavLinkType } from "./navUtils";

interface NavLinkIconProps {
  linkType: NavLinkType;
}

// Small indicator shown next to a sidebar/mobile-nav item's title, so it's
// clear where a link goes before clicking it:
//   - "slug"     -> no icon; a normal page within this major
//   - "internal" -> a bare arrow; leaves this major's pages, but stays on this site
//   - "external" -> an arrow escaping a box; leaves this site entirely (opens in a new tab)
export default function NavLinkIcon({ linkType }: NavLinkIconProps) {
  if (linkType === "slug") {
    return null;
  }

  const iconClass = "ml-1 inline h-3 w-3 -translate-y-px";

  if (linkType === "internal") {
    return (
      <svg
        className={iconClass}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 17L17 7M7 7h10v10"
        />
      </svg>
    );
  }

  return (
    <svg
      className={iconClass}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}
