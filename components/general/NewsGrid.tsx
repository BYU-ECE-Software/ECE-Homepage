import NewsCard, { type NewsItem } from './NewsCard';

interface NewsGridProps {
  items: NewsItem[];
  featuredFirst?: boolean;
  columns?: 2 | 3;
}

export default function NewsGrid({ items, featuredFirst = false, columns = 3 }: NewsGridProps) {
  if (items.length === 0) {
    return (
      <p className="rounded-lg bg-slate-50 p-8 text-center text-slate-600">
        No stories are currently posted.
      </p>
    );
  }

  const [featured, ...rest] = items;
  const gridClass = columns === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3';

  return (
    <div className="space-y-6">
      {featuredFirst && <NewsCard item={featured} featured />}
      <div className={`grid gap-6 ${gridClass}`}>
        {(featuredFirst ? rest : items).map((item) => (
          <NewsCard key={`${item.title}-${item.date}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export type { NewsItem } from './NewsCard';
