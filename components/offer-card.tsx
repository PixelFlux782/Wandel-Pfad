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
  variant?: 'default' | 'home';
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

export function OfferCard({ title, description, duration, price, availability, href, index = 0, variant = 'default' }: OfferCardProps) {
  const meta = { duration, price, availability };
  const formatLabel = getFormatLabel(title);

  if (variant === 'home') {
    return (
      <article className="group relative py-12 sm:py-14 lg:py-16">
        <div
          className={cn(
            'grid gap-10 lg:grid-cols-[minmax(5rem,0.14fr)_minmax(0,0.58fr)_minmax(18rem,0.28fr)] lg:items-start lg:gap-12',
            index % 2 === 1 ? 'lg:pl-[6%]' : 'lg:pr-[4%]'
          )}
        >
          <div className="flex items-start gap-4 lg:block">
            <p className="text-[0.62rem] uppercase leading-5 tracking-[0.34em] text-[#7B746D]/52">{String(index + 1).padStart(2, '0')}</p>
            <div className="mt-1 hidden h-px w-14 bg-text/[0.08] lg:block" />
          </div>

          <div className="min-w-0">
            <p className="text-[0.62rem] uppercase leading-5 tracking-[0.3em] text-[#7B746D]/62">{formatLabel}</p>
            <h3 className="mt-5 max-w-3xl font-serif text-[clamp(2.05rem,4.4vw,4.15rem)] font-medium leading-[1.02] tracking-normal text-text sm:leading-[0.98]">
              {title}
            </h3>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#504B44] sm:mt-6">{description}</p>
          </div>

          <div className="min-w-0 lg:pt-10">
            <div className="grid gap-5 border-t border-text/[0.08] pt-6 sm:grid-cols-3 sm:gap-6 lg:grid-cols-1 lg:border-t-0 lg:pt-0">
              {metaItems.map((item) => (
                <div key={item.key} className="min-w-0">
                  <dt className="text-[0.6rem] uppercase leading-5 tracking-[0.26em] text-[#7B746D]/62">{item.label}</dt>
                  <dd className="mt-2 text-sm leading-6 text-text/74">{meta[item.key]}</dd>
                </div>
              ))}
            </div>

            <Link
              href={href}
              className="resonant-link mt-8 inline-flex border-text/18 text-text/66 hover:border-text/42 hover:text-text focus:outline-none focus-visible:ring-1 focus-visible:ring-accent/60"
            >
              Passenden Einstieg finden
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className={cn(
        'group relative border-t border-text/[0.09] py-11 sm:py-14 lg:py-16',
        index === 0 ? 'border-text/[0.14]' : ''
      )}
    >
      <div
        className={cn(
          'relative grid gap-9 md:grid-cols-[minmax(0,1fr)_minmax(13rem,17rem)] md:items-start md:gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(15rem,0.3fr)] lg:gap-20',
          index % 2 === 1 ? 'lg:pl-14' : ''
        )}
      >
        <div className="min-w-0">
          <p className="text-[0.64rem] uppercase leading-5 tracking-[0.3em] text-[#7B746D]/68">{formatLabel}</p>
          <h3 className="mt-5 max-w-3xl font-serif text-[clamp(2.25rem,4vw,3.55rem)] font-medium leading-[1.02] tracking-normal text-text">
            {title}
          </h3>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#504B44]">{description}</p>
        </div>

        <div className="min-w-0 border-t border-text/[0.065] pt-7 md:border-l md:border-t-0 md:pl-9 md:pt-1 lg:pl-11">
          <dl className="grid gap-5 sm:grid-cols-3 md:grid-cols-1 md:gap-6">
            {metaItems.map((item) => (
              <div key={item.key} className="min-w-0">
                <dt className="text-[0.6rem] uppercase leading-5 tracking-[0.26em] text-[#7B746D]/62">{item.label}</dt>
                <dd className="mt-2 text-sm leading-6 text-text/78">{meta[item.key]}</dd>
              </div>
            ))}
          </dl>

          <Link
            href={href}
            className="resonant-link mt-8 border-text/22 text-text/66 hover:border-text/42 hover:text-text focus:outline-none focus-visible:ring-1 focus-visible:ring-accent/60"
          >
            In Ruhe anfragen
          </Link>
        </div>
      </div>
    </article>
  );
}
