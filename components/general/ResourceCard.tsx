import Image from 'next/image';
import Link from 'next/link';
import type { ResourceCardData } from '@/types/Content';

function isExternal(href: string): boolean {
  return /^https?:\/\//i.test(href);
}

function isFileDownload(href: string): boolean {
  return /\.(pdf|docx?|xlsx?|pptx?)$/i.test(href);
}

/**
 * Card linking to a resource — an advisor, a flowchart PDF, an external
 * catalog page, a club website. Links that leave the site or open a file
 * are given target="_blank" automatically, so a student clicking a
 * flowchart doesn't lose the page they were reading.
 */
export default function ResourceCard({
  title,
  description,
  href,
  image,
  imageClassName = 'h-48',
  imagePosition,
  linkText,
}: ResourceCardData & { imageClassName?: string; imagePosition?: string }) {
  const opensNewTab = isExternal(href) || isFileDownload(href);

  const body = (
    <>
      {image && (
        <div className={`relative bg-gray-200 ${imageClassName}`}>
          <Image
            src={image}
            alt=""
            fill
            unoptimized
            className="object-cover"
            style={imagePosition ? { objectPosition: imagePosition } : undefined}
          />
        </div>
      )}

      <div className="p-6">
        <h3 className="text-byu-navy text-lg font-semibold">
          {title}
          {opensNewTab && (
            <>
              <svg
                className="ml-1.5 inline h-3.5 w-3.5 -translate-y-px opacity-60"
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
              <span className="sr-only"> (opens in a new tab)</span>
            </>
          )}
        </h3>

        <p className="text-byu-medium-gray mt-2 text-sm">{description}</p>

        {linkText && (
          <span className="text-byu-royal mt-4 inline-block font-medium">{linkText}</span>
        )}
      </div>
    </>
  );

  const className =
    'block overflow-hidden rounded-lg border border-gray-200 bg-white transition hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-byu-royal';

  if (opensNewTab) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {body}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {body}
    </Link>
  );
}
