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

function getFormatLabel(title: string) {
  if (title.includes('Massage')) return 'Körperarbeit';
  if (title.includes('Breathwork')) return 'Einzelbegleitung';
  if (title.includes('Gruppen')) return 'Gruppe';
  if (title.includes('3-Monats')) return 'Prozessbegleitung';

  return 'Angebot';
}

export function OfferCard({ title, description, duration, price, availability, href, index = 0 }: OfferCardProps) {
  const meta = { duration, price, availability };
  const formatLabel = getFormatLabel(title);

  return (
    <article
      className={cn(
        'group relative overflow-hidden border-t border-text/[0.11] py-9 sm:py-11 lg:py-12',
        'before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-full before:bg-[linear-gradient(90deg,_rgba(255,252,246,0.34),_rgba(255,252,246,0.08)_48%,_transparent_100%)] before:opacity-0 before:transition-opacity before:duration-700 hover:before:opacity-100',
        index === 0 ? 'border-text/[0.14]' : ''
      )}
    >
      <div className="relative grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(13rem,17rem)] md:items-start md:gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(15rem,0.28fr)] lg:gap-16">
        <div className="min-w-0">
          <p className="text-[0.66rem] uppercase leading-5 tracking-[0.26em] text-[#7B746D]/78">{formatLabel}</p>
          <h3 className="mt-4 max-w-3xl font-serif text-[clamp(2.2rem,4.2vw,3.6rem)] font-medium leading-[1.04] tracking-normal text-text">
            {title}
          </h3>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#504B44]">{description}</p>
        </div>

        <div className="min-w-0 border-t border-text/[0.08] pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-1 lg:pl-10">
          <dl className="grid gap-4 sm:grid-cols-3 md:grid-cols-1 md:gap-5">
            {metaItems.map((item) => (
              <div key={item.key} className="min-w-0">
                <dt className="text-[0.62rem] uppercase leading-5 tracking-[0.24em] text-[#7B746D]/68">{item.label}</dt>
                <dd className="mt-1.5 text-sm leading-6 text-text/84">{meta[item.key]}</dd>
              </div>
            ))}
          </dl>

          <Link
            href={href}
            className="mt-7 inline-flex min-h-11 w-full items-center justify-center rounded-full border border-text/[0.17] px-5 text-[0.72rem] font-medium uppercase tracking-[0.14em] text-text/78 transition duration-700 hover:border-text/[0.32] hover:bg-text/[0.035] hover:text-text focus:outline-none focus-visible:ring-1 focus-visible:ring-accent/60 sm:w-auto md:w-full"
          >
            Termin buchen
          </Link>
        </div>
      </div>
    </article>
  );
}
