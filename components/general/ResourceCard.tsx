import Image from "next/image";
import Link from "next/link";
import { ResourceCardData } from "@/types/Content";

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
  linkText,
}: ResourceCardData) {
  const opensNewTab = isExternal(href) || isFileDownload(href);

  const body = (
    <>
      {image && (
        <div className="relative h-48 bg-gray-200">
          <Image
            src={image}
            alt=""
            fill
            unoptimized
            className="object-cover"
          />
        </div>
      )}

      <div className="p-6">
        <h3 className="text-lg font-semibold text-byu-navy">
          {title}
          {opensNewTab && (
            <span className="sr-only"> (opens in a new tab)</span>
          )}
        </h3>

        <p className="mt-2 text-sm text-byu-medium-gray">{description}</p>

        {linkText && (
          <span className="mt-4 inline-block font-medium text-byu-royal">
            {linkText}
          </span>
        )}
      </div>
    </>
  );

  const className =
    "block overflow-hidden rounded-lg border border-gray-200 bg-white transition hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-byu-royal";

  if (opensNewTab) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
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
