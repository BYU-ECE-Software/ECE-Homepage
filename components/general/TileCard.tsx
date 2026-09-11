import Image from 'next/image';
import Link from 'next/link';

export interface TileItem {
  title: string;
  href: string;
  image: string;
  imageAlt?: string;
  eyebrow?: string;
}

function isExternal(href: string): boolean {
  return /^https?:\/\//i.test(href);
}

// Full-bleed image tile with the title overlaid at the bottom, in the style
// of engineering.byu.edu's "Departments & Programs" grid.
export default function TileCard({ title, href, image, imageAlt = '', eyebrow }: TileItem) {
  const body = (
    <article className="group relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-900">
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        {eyebrow && (
          <p className="text-xs font-semibold tracking-widest text-white/80 uppercase">
            {eyebrow}
          </p>
        )}
        <h3 className="text-lg leading-snug font-bold text-white drop-shadow">{title}</h3>
      </div>
    </article>
  );

  return isExternal(href) ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {body}
    </a>
  ) : (
    <Link href={href}>{body}</Link>
  );
}
