import Link from "next/link";
import { NavSection } from "@/data/undergraduate/majors/types";

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
                  : "text-byu-medium-gray hover:bg-gray-50 hover:text-byu-navy"
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
              const active = item.slug === currentSlug;

              return (
                <li key={item.slug}>
                  <Link
                    href={`${basePath}/${item.slug}`}
                    className={`block rounded px-3 py-2 text-sm transition ${
                      active
                        ? "border-l-4 border-byu-royal bg-gray-100 font-semibold text-byu-navy"
                        : "text-byu-medium-gray hover:bg-gray-50 hover:text-byu-navy"
                    }`}
                  >
                    {item.title}
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
