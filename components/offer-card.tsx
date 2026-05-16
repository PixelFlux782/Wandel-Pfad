import Link from 'next/link';
import { Button } from '@/components/button';
import { cn } from '@/lib/utils';

interface OfferCardProps {
  title: string;
  description: string;
  duration: string;
  price: string;
  availability: string;
  href: string;
}

export function OfferCard({ title, description, duration, price, availability, href }: OfferCardProps) {
  return (
    <article className="group relative overflow-hidden border-t border-text/12 py-9 transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:py-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-text/34 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
      <div className="grid gap-7 lg:grid-cols-[minmax(0,0.92fr)_minmax(11rem,0.42fr)] lg:items-start">
        <div>
          <p className="eyebrow">{duration}</p>
          <h3 className="mt-5 max-w-xl font-serif text-[clamp(2.45rem,5vw,4rem)] font-medium leading-[0.98] tracking-normal text-text">{title}</h3>
          <p className="mt-7 max-w-xl text-base leading-8 text-[#504B44]">{description}</p>
        </div>
        <div className="border-t border-text/10 pt-5 text-sm text-muted lg:border-t-0 lg:pt-2">
          <span className="block font-serif text-3xl font-medium leading-none tracking-normal text-text">{price}</span>
          <span className="mt-4 block text-[0.68rem] uppercase leading-5 tracking-[0.28em]">{availability}</span>
          <Link href={href} className={cn('mt-8 inline-flex w-full justify-start sm:w-auto', 'focus:outline-none')}>
            <Button variant="secondary" className="w-full shadow-none sm:w-auto">
              Termin buchen
            </Button>
          </Link>
        </div>
      </div>
    </article>
  );
}
