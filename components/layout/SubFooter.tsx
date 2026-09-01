import Link from 'next/link';
import type { SubFooterProps } from '@/types/SubFooter';

function isExternal(href: string) {
  return /^https?:\/\//.test(href);
}

export default function SubFooter({ columns = [], contactBlock }: SubFooterProps) {
  return (
    <footer className="w-full bg-[#f0f2f4] px-10 py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* Contact column */}
        {contactBlock && (
          <div className="flex flex-col gap-3">
            <h4 className="text-[0.65rem] font-bold tracking-widest text-gray-900 uppercase">
              Contact
            </h4>
            <address className="text-xs leading-relaxed text-gray-700 not-italic">
              {contactBlock.lines.map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </address>
            <Link
              href={contactBlock.buttonHref}
              className="inline-block self-start rounded bg-[#002255] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#003580]"
            >
              {contactBlock.buttonLabel}
            </Link>
          </div>
        )}

        {/* Link columns */}
        {columns.map((col, i) => (
          <div key={i} className="flex flex-col gap-2">
            <h4 className="mb-1 text-[0.65rem] font-bold tracking-widest text-gray-900 uppercase">
              {col.heading}
            </h4>
            {col.links && (
              <ul className="m-0 flex list-none flex-col gap-1 p-0">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs leading-relaxed text-[#0057a8] hover:underline"
                      {...(isExternal(link.href)
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            {col.content && (
              <div className="text-xs leading-relaxed text-gray-700">{col.content}</div>
            )}
          </div>
        ))}
      </div>
    </footer>
  );
}
