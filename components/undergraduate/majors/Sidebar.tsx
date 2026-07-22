import Link from "next/link";
import { NavSection } from "@/data/undergraduate/majors/types";
import { resolveNavLink } from "./navUtils";
import NavLinkIcon from "./NavLinkIcon";

interface SidebarProps {
  majorSlug: string;
  navigation: NavSection[];
  currentSlug?: string;
}

export default function Sidebar({
  majorSlug,
  navigation,
  currentSlug,
}: SidebarProps) {
  const basePath = `/undergraduate/${majorSlug}`;

  return (
    <aside className="sticky top-8">
      <div className="mb-8">
        <ul className="space-y-1">
          <li>
            <Link
              href={basePath}
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
      </div>

      {navigation.map((section) => (
        <div key={section.title} className="mb-8">
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-byu-dark-gray">
            {section.title}
          </h2>

          <ul className="space-y-1">
            {section.items.map((item) => {
              const { href, linkType } = resolveNavLink(majorSlug, item);
              const active = linkType === "slug" && item.slug === currentSlug;
              const external = linkType === "external";

              return (
                <li key={item.slug}>
                  <Link
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
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
    </aside>
  );
}
