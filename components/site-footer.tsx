import Link from 'next/link';
import { navLinks, siteMeta } from '@/lib/content';

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-white py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 sm:px-8 lg:px-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-xl space-y-4">
          <p className="text-lg font-semibold text-text">Wandel:Pfad</p>
          <p className="text-sm leading-7 text-muted">Raum für Wandel. Begleitung mit Tiefe. Achtsam, klar und bodenständig begleitet von Simon Dalemans.</p>
          <p className="text-sm text-muted">{siteMeta.smallNote}</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">Navigation</p>
            <div className="flex flex-col gap-2 text-sm text-text">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-accent">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">Kontakt</p>
            <div className="space-y-2 text-sm text-text">
              <p>info@wandel-pfad.de</p>
              <p>Frankfurt am Main</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
