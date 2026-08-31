import Link from "next/link";
import type { SubFooterProps } from "@/types/SubFooter";

export default function SubFooter({
  columns = [],
  contactBlock,
}: SubFooterProps) {
  return (
    <footer className="w-full bg-[#f0f2f4] px-10 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
        {/* Contact column */}
        {contactBlock && (
          <div className="flex flex-col gap-3">
            <h4 className="text-[0.65rem] font-bold uppercase tracking-widest text-gray-900">
              Contact
            </h4>
            <address className="not-italic text-xs text-gray-700 leading-relaxed">
              {contactBlock.lines.map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </address>
            <Link
              href={contactBlock.buttonHref}
              className="inline-block self-start bg-[#002255] text-white text-xs font-semibold px-4 py-2 rounded hover:bg-[#003580] transition-colors"
            >
              {contactBlock.buttonLabel}
            </Link>
          </div>
        )}

        {/* Link columns */}
        {columns.map((col, i) => (
          <div key={i} className="flex flex-col gap-2">
            <h4 className="text-[0.65rem] font-bold uppercase tracking-widest text-gray-900 mb-1">
              {col.heading}
            </h4>
            {col.links && (
              <ul className="flex flex-col gap-1 list-none p-0 m-0">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs text-[#0057a8] hover:underline leading-relaxed"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            {col.content && (
              <div className="text-xs text-gray-700 leading-relaxed">
                {col.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </footer>
  );
}
