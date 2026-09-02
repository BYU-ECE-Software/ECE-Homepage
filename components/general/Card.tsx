import Image from 'next/image';
import Link from 'next/link';

function isExternal(href: string): boolean {
  return /^https?:\/\//i.test(href);
}

export interface CardItem {
  label: string;
  /** If provided, renders the item as a Next.js Link. */
  href?: string;
}

interface CardProps {
  /** Image src path. */
  image?: string;
  /** Alt text for the card image. */
  imageAlt?: string;
  /** Card heading. */
  title?: string;
  /** Makes the card title itself a link. */
  titleHref?: string;
  /** List of people / labels shown below the title. */
  items?: CardItem[];
  /**
   * Text alignment for the card body.
   * "center" matches the original BYU ECE design.
   */
  textAlign?: 'center' | 'left';
  /**
   * "list"      — items stacked one per line (default).
   * "paragraph" — items joined inline with commas.
   */
  textStyle?: 'list' | 'paragraph';
}

export default function Card({
  image,
  imageAlt = '',
  title,
  titleHref,
  items = [],
  textAlign = 'center',
  textStyle = 'list',
}: CardProps) {
  const alignClass = textAlign === 'center' ? 'text-center' : 'text-left';

  return (
    <article className="flex flex-col bg-white">
      {/* Image */}
      {image && (
        <div className="group relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      )}

      {/* Body */}
      <div className={`flex-1 px-1 pt-3 pb-2 ${alignClass}`}>
        {/* Title */}
        {title && (
          <h3 className="mb-1.5 text-sm leading-snug font-bold text-gray-900">
            {titleHref ? (
              isExternal(titleHref) ? (
                <a
                  href={titleHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#002255] hover:underline"
                >
                  {title}
                </a>
              ) : (
                <Link href={titleHref} className="hover:text-[#002255] hover:underline">
                  {title}
                </Link>
              )
            ) : (
              title
            )}
          </h3>
        )}

        {/* Items */}
        {items.length > 0 && (
          <div className="mt-0.5">
            {textStyle === 'paragraph' ? (
              <p className="text-xs leading-relaxed text-gray-700">
                {items.map((item, i) => (
                  <span key={i}>
                    {item.href ? (
                      <Link href={item.href} className="text-[#0057a8] hover:underline">
                        {item.label}
                      </Link>
                    ) : (
                      <span>{item.label}</span>
                    )}
                    {i < items.length - 1 && ', '}
                  </span>
                ))}
              </p>
            ) : (
              <ul className="m-0 list-none space-y-0 p-0">
                {items.map((item, i) => (
                  <li key={i} className="text-xs leading-relaxed text-gray-700">
                    {item.href ? (
                      <Link href={item.href} className="text-[#0057a8] hover:underline">
                        {item.label}
                      </Link>
                    ) : (
                      item.label
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
