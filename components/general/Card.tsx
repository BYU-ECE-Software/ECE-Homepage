import Image from "next/image";
import Link from "next/link";

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
  textAlign?: "center" | "left";
  /**
   * "list"      — items stacked one per line (default).
   * "paragraph" — items joined inline with commas.
   */
  textStyle?: "list" | "paragraph";
}

export default function Card({
  image,
  imageAlt = "",
  title,
  titleHref,
  items = [],
  textAlign = "center",
  textStyle = "list",
}: CardProps) {
  const alignClass = textAlign === "center" ? "text-center" : "text-left";

  return (
    <article className="flex flex-col bg-white">
      {/* Image */}
      {image && (
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100 group">
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
      <div className={`flex-1 pt-3 pb-2 px-1 ${alignClass}`}>
        {/* Title */}
        {title && (
          <h3 className="text-sm font-bold text-gray-900 leading-snug mb-1.5">
            {titleHref ? (
              <Link
                href={titleHref}
                className="hover:underline hover:text-[#002255]"
              >
                {title}
              </Link>
            ) : (
              title
            )}
          </h3>
        )}

        {/* Items */}
        {items.length > 0 && (
          <div className="mt-0.5">
            {textStyle === "paragraph" ? (
              <p className="text-xs text-gray-700 leading-relaxed">
                {items.map((item, i) => (
                  <span key={i}>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="text-[#0057a8] hover:underline"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span>{item.label}</span>
                    )}
                    {i < items.length - 1 && ", "}
                  </span>
                ))}
              </p>
            ) : (
              <ul className="space-y-0 list-none p-0 m-0">
                {items.map((item, i) => (
                  <li key={i} className="text-xs text-gray-700 leading-relaxed">
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="text-[#0057a8] hover:underline"
                      >
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
