import Link from 'next/link';
import { navLinks, siteMeta } from '@/lib/content';

export function SiteFooter() {
  return (
    <footer className="relative border-t border-text/[0.07] bg-[#EDE5DA]/72 py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/20 to-transparent" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 sm:px-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(18rem,0.3fr)] lg:px-10">
        <div className="max-w-2xl">
          <p className="text-[0.68rem] font-normal uppercase tracking-[0.34em] text-text/82">Wandel:Pfad</p>
          <p className="mt-7 max-w-xl font-serif text-4xl font-medium leading-tight tracking-normal text-text sm:text-5xl">
            Ein ruhiger Ort für Wandel, Körperarbeit und achtsame Begleitung.
          </p>
          <p className="mt-7 max-w-xl text-sm leading-7 text-muted">Achtsam, klar und bodenständig begleitet von Simon Dalemans.</p>
          <p className="mt-8 text-[0.62rem] uppercase leading-6 tracking-[0.28em] text-muted/72">{siteMeta.smallNote}</p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-1">
          <div>
            <p className="eyebrow">Weitergehen</p>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-sm text-text/78 lg:flex-col lg:gap-3">
              {navLinks.slice(0, 5).map((link) => (
                <Link key={link.href} href={link.href} className="transition-colors duration-500 hover:text-accent">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow">Kontakt</p>
            <div className="mt-5 space-y-2 text-sm leading-7 text-text/78">
              <p>info@wandel-pfad.de</p>
              <p>Frankfurt am Main</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
