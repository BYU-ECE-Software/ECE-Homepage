import Image from 'next/image';
import Link from 'next/link';

export interface NewsItem {
  title: string;
  description: string;
  date: string;
  href?: string;
  category?: string;
  author?: string;
  image?: string;
  imageAlt?: string;
}

interface NewsCardProps {
  item: NewsItem;
  featured?: boolean;
}

export default function NewsCard({ item, featured = false }: NewsCardProps) {
  const cardClassName = `group flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm ${item.href ? 'transition hover:shadow-md' : ''} ${featured ? 'md:grid md:grid-cols-2' : ''}`;

  const cardBody = (
    <>
      {item.image && (
        <div
          className={`relative overflow-hidden bg-slate-100 ${featured ? 'min-h-64' : 'aspect-[16/9]'}`}
        >
          <Image
            src={item.image}
            alt={item.imageAlt ?? ''}
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
            sizes={featured ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 100vw, 33vw'}
          />
        </div>
      )}
      <div className={`flex flex-1 flex-col ${featured ? 'p-7 sm:p-9' : 'p-6'}`}>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-slate-500">
          {item.category && (
            <span className="text-byu-royal font-semibold tracking-wider uppercase">
              {item.category}
            </span>
          )}
          <time>{item.date}</time>
        </div>
        <h2
          className={`text-byu-navy mt-3 leading-snug font-semibold group-hover:underline ${featured ? 'text-3xl' : 'text-xl'}`}
        >
          {item.title}
        </h2>
        <p className="mt-3 flex-1 leading-7 text-slate-600">{item.description}</p>
        {item.author && <p className="mt-5 text-sm font-medium text-slate-500">By {item.author}</p>}
      </div>
    </>
  );

  if (item.href?.startsWith('/')) {
    return (
      <Link href={item.href} className={cardClassName}>
        {cardBody}
      </Link>
    );
  }

  if (item.href) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className={cardClassName}>
        {cardBody}
      </a>
    );
  }

  return <article className={cardClassName}>{cardBody}</article>;
}
