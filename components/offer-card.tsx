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
    <article className="group rounded-[2rem] border border-border bg-white p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="space-y-4">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-muted">{duration}</p>
          <h3 className="mt-3 text-2xl font-semibold text-text">{title}</h3>
        </div>
        <p className="text-base leading-8 text-[#504B44]">{description}</p>
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
          <span className="rounded-full border border-border bg-background px-3 py-1">{price}</span>
          <span>{availability}</span>
        </div>
      </div>
      <Link href={href} className={cn('mt-6 inline-flex w-full justify-center', 'group-hover:underline')}>
        <Button variant="secondary" className="w-full">Termin buchen</Button>
      </Link>
    </article>
  );
}
