import Link from 'next/link';
import { cn } from '@/lib/utils';

interface OfferCardProps {
  title: string;
  description: string;
  duration: string;
  price: string;
  availability: string;
  href: string;
  index?: number;
}

const metaItems = [
  { key: 'duration', label: 'Dauer' },
  { key: 'price', label: 'Preis' },
  { key: 'availability', label: 'Verfügbarkeit' }
] as const;

export function OfferCard({ title, description, duration, price, availability, href, index = 0 }: OfferCardProps) {
  const meta = { duration, price, availability };

  return (
    <article
      className={cn(
        'group relative border-t border-text/[0.08] py-10 sm:py-12 lg:py-14',
        index % 2 === 1 ? 'lg:mt-10' : 'lg:mt-0'
      )}
    >
      <div className="grid gap-9 lg:grid-cols-[minmax(0,0.94fr)_minmax(13rem,0.46fr)] lg:items-start lg:gap-12">
        <div>
          <p className="text-[0.66rem] uppercase leading-5 tracking-[0.34em] text-[#7B746D]/82">{duration}</p>
          <h3 className="mt-5 max-w-xl font-serif text-[clamp(2.35rem,4.6vw,3.85rem)] font-medium leading-[1] tracking-normal text-text">{title}</h3>
          <p className="mt-7 max-w-xl text-base leading-8 text-[#504B44]">{description}</p>
        </div>

        <div className="lg:pt-1">
          <dl className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1 lg:gap-6">
            {metaItems.map((item) => (
              <div key={item.key} className="min-w-0">
                <dt className="text-[0.62rem] uppercase leading-5 tracking-[0.3em] text-[#7B746D]/72">{item.label}</dt>
                <dd className="mt-1 text-sm leading-7 text-text/82">{meta[item.key]}</dd>
              </div>
            ))}
          </dl>

          <Link
            href={href}
            className="mt-8 inline-flex min-h-11 items-center rounded-full border border-text/[0.16] px-5 text-[0.72rem] font-normal uppercase tracking-[0.18em] text-text/78 transition duration-700 hover:border-text/[0.3] hover:bg-text/[0.03] hover:text-text focus:outline-none focus-visible:ring-1 focus-visible:ring-accent/60"
          >
            Termin buchen
          </Link>
        </div>
      </div>
    </article>
  );
}
