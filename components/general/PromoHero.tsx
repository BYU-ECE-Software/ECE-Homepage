import Image from 'next/image';
import Link from 'next/link';

export interface PromoHeroAction {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary';
}

interface PromoHeroProps {
  title: string;
  description: string;
  eyebrow?: string;
  image?: string;
  imageAlt?: string;
  actions?: PromoHeroAction[];
  align?: 'left' | 'center';
}

export default function PromoHero({
  title,
  description,
  eyebrow,
  image,
  imageAlt = '',
  actions = [],
  align = 'left',
}: PromoHeroProps) {
  const centered = align === 'center';

  return (
    <section
      className={`from-byu-navy to-byu-royal relative isolate overflow-hidden bg-linear-to-br via-[#003f7d] px-6 py-20 text-white sm:py-28 ${centered ? 'text-center' : ''}`}
    >
      {image && (
        <>
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            className="-z-20 object-cover"
            sizes="100vw"
          />
          <div className="bg-byu-navy/75 absolute inset-0 -z-10" />
        </>
      )}
      <div className={`mx-auto max-w-6xl ${centered ? 'flex flex-col items-center' : ''}`}>
        {eyebrow && (
          <p className="text-sm font-semibold tracking-[0.2em] text-[#7093ef] uppercase">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100 sm:text-xl">{description}</p>
        {actions.length > 0 && (
          <div className={`mt-8 flex flex-wrap gap-3 ${centered ? 'justify-center' : ''}`}>
            {actions.map((action) => {
              const classes =
                action.variant === 'secondary'
                  ? 'rounded-md border border-white/70 px-5 py-3 font-semibold text-white hover:bg-white/10'
                  : 'rounded-md bg-white px-5 py-3 font-semibold text-byu-navy hover:bg-blue-50';
              return action.href.startsWith('/') ? (
                <Link key={action.label} href={action.href} className={classes}>
                  {action.label}
                </Link>
              ) : (
                <a
                  key={action.label}
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes}
                >
                  {action.label}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
