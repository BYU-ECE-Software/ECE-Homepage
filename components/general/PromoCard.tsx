import Image from "next/image";
import Link from "next/link";

export interface PromoItem {
  title: string;
  description: string;
  href: string;
  linkLabel?: string;
  image?: string;
  imageAlt?: string;
  eyebrow?: string;
}

export default function PromoCard({ item }: { item: PromoItem }) {
  const body = (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg">
      {item.image && (
        <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
          <Image src={item.image} alt={item.imageAlt ?? ""} fill className="object-cover transition duration-300 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        {item.eyebrow && <p className="text-xs font-semibold tracking-widest text-byu-royal uppercase">{item.eyebrow}</p>}
        <h3 className="mt-2 text-xl font-semibold text-byu-navy">{item.title}</h3>
        <p className="mt-3 flex-1 leading-7 text-slate-600">{item.description}</p>
        <span className="mt-5 font-semibold text-byu-royal">{item.linkLabel ?? "Learn more"}</span>
      </div>
    </article>
  );

  return item.href.startsWith("/") ? <Link href={item.href}>{body}</Link> : <a href={item.href} target="_blank" rel="noopener noreferrer">{body}</a>;
}
