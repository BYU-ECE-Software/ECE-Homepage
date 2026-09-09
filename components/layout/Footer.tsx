import Link from 'next/link';
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';
import type { FooterProps } from '@/types/SubFooter';

function isExternal(href: string) {
  return /^https?:\/\//.test(href);
}

// Single footer bar used on every page: contact info, resource link columns,
// and social/legal links, all in one block.
const Footer = ({ columns = [], contactBlock }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#002E5D] px-6 py-10 text-white sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start justify-between gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* Contact column */}
        {contactBlock && (
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold tracking-widest text-white uppercase">Contact</h4>
            <address className="text-sm leading-relaxed text-white not-italic">
              {contactBlock.lines.map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </address>
            <Link
              href={contactBlock.buttonHref}
              className="inline-block self-start rounded bg-white px-4 py-2 text-xs font-semibold text-[#002E5D] transition-colors hover:bg-blue-50"
            >
              {contactBlock.buttonLabel}
            </Link>
          </div>
        )}

        {/* Link columns */}
        {columns.map((col, i) => (
          <div key={i} className="flex flex-col gap-2">
            <h4 className="mb-1 text-xs font-bold tracking-widest text-white uppercase">
              {col.heading}
            </h4>
            {col.links && (
              <ul className="m-0 flex list-none flex-col gap-1 p-0">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm leading-relaxed text-white hover:underline"
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
            {col.content && <div className="text-sm leading-relaxed text-white">{col.content}</div>}
          </div>
        ))}

        {/* Social / connect column */}
        <div className="flex flex-col gap-2">
          <h4 className="mb-1 text-xs font-bold tracking-widest text-white uppercase">
            Connect With Us
          </h4>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/BYUECEn/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-200"
              aria-label="Facebook"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/byu_ecen/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-200"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCj2sMA0jEfi8oYhgX6h5g5A"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-200"
              aria-label="YouTube"
            >
              <FaYoutube size={20} />
            </a>
            <a
              href="https://www.linkedin.com/groups/1826750/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-200"
              aria-label="LinkedIn (IEEE group)"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://www.linkedin.com/groups/150520/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-200"
              aria-label="LinkedIn (alumni group)"
            >
              <FaLinkedin size={20} />
            </a>
          </div>

          <ul className="mt-4 flex list-none flex-col gap-1 p-0 text-sm">
            <li>
              <a
                href="https://www.byu.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-white hover:underline"
              >
                BYU Homepage
              </a>
            </li>
            <li>
              <a
                href="https://www.byu.edu/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-white hover:underline"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://www.byu.edu/accessibility"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-white hover:underline"
              >
                Accessibility
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Disclaimer */}
      <div className="mt-8 text-center text-xs text-blue-100">
        © {currentYear} Brigham Young University. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
