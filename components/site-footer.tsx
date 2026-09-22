import Link from 'next/link';
import { navLinks } from '@/lib/content';

export function SiteFooter() {
  return (
    <footer className="border-t border-[#20322d]/10 bg-[#e7ded2] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 xl:px-16">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.55fr_0.45fr] lg:gap-20">
        <div>
          <p className="font-serif text-4xl text-[#20322d] sm:text-5xl">Wandel</p>
          <p className="mt-5 max-w-xl text-base leading-8 text-[#5d5952]">Persönliche Begleitung mit Atemarbeit, Coaching und Körperarbeit in Aschaffenburg.</p>
          <p className="mt-7 text-xs uppercase tracking-[0.19em] text-[#326358]/75">Simon Dalemans · Heilpraktiker · Gesundheits- und Krankenpfleger</p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <p className="eyebrow">Navigation</p>
            <div className="mt-5 grid gap-2 text-sm text-[#3f4945]">
              {navLinks.map((link) => <Link key={link.href} href={link.href} className="w-fit py-1 transition-colors hover:text-[#326358]">{link.label}</Link>)}
            </div>
          </div>
          <div>
            <p className="eyebrow">Kontakt</p>
            <div className="mt-5 space-y-2 text-sm leading-7 text-[#3f4945]">
              <p>info@wandel-pfad.de</p>
              <p>Aschaffenburg</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
