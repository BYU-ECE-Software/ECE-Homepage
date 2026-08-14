import Link from "next/link";
import { NavSection } from "@/types/Content";
import { resolveNavLink } from "./navUtils";
import NavLinkIcon from "./NavLinkIcon";

interface SidebarProps {
  /** Section root, e.g. "/undergraduate/electrical-engineering". */
  basePath: string;
  /** Label for the link back to the section root. */
  homeLabel?: string;
  navigation: NavSection[];
  currentSlug?: string;
}

const activeClasses =
  "border-l-4 border-byu-royal bg-gray-100 font-semibold text-byu-navy";

export default function Sidebar({
  basePath,
  homeLabel = "Overview",
  navigation,
  currentSlug,
}: SidebarProps) {
  return (
    <aside className="sticky top-8">
      <nav aria-label="Section navigation">
        <div className="mb-8">
          <ul className="space-y-1">
            <li>
              <Link
                href={basePath}
                aria-current={!currentSlug ? "page" : undefined}
                className={`block rounded px-3 py-2 text-sm transition ${
                  !currentSlug
                    ? activeClasses
                    : "font-medium text-byu-navy hover:bg-gray-50"
                }`}
              >
                {homeLabel}
              </Link>
            </li>
          </ul>
        </div>

        {navigation.map((section) => (
          <div key={section.title} className="mb-8">
            <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-byu-dark-gray">
              {section.title}
            </h2>

            <ul className="space-y-1">
              {section.items.map((item) => {
                const { href, linkType } = resolveNavLink(basePath, item);
                const active = linkType === "slug" && item.slug === currentSlug;
                const external = linkType === "external";

                return (
                  <li key={item.slug}>
                    <Link
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      aria-current={active ? "page" : undefined}
                      className={`block rounded px-3 py-2 text-sm transition ${
                        active
                          ? activeClasses
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
      </nav>
    </aside>
  );
}
