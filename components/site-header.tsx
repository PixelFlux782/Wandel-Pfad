'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/lib/content';
import { cn } from '@/lib/utils';

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  const overHero = pathname === '/' && !scrolled && !open;
  const light = !overHero;
  const mainLinks = navLinks.filter((link) => link.href !== '/kontakt');

  return (
    <header className={cn('fixed inset-x-0 top-0 z-[60] border-b transition-all duration-500', light ? 'border-[#20322d]/10 bg-[#f6f1e8]/92 text-[#20322d] shadow-[0_10px_40px_rgba(20,34,30,0.05)] backdrop-blur-xl' : 'border-white/10 bg-[#11201c]/15 text-white backdrop-blur-[3px]')}>
      <div className="mx-auto flex h-[72px] max-w-[90rem] items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-16">
        <Link href="/" className="group flex items-baseline gap-2" aria-label="Wandel Startseite">
          <span className="font-serif text-[1.7rem] leading-none tracking-[-0.02em]">Wandel</span>
          <span className={cn('hidden text-[0.55rem] uppercase tracking-[0.24em] transition-colors sm:inline', light ? 'text-[#326358]/65' : 'text-[#eadcc7]/65')}>Simon Dalemans</span>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Hauptnavigation">
          {mainLinks.map((link) => (
            <Link key={link.href} href={link.href} aria-current={pathname === link.href ? 'page' : undefined} className={cn('border-b border-transparent py-2 text-[0.68rem] font-semibold uppercase tracking-[0.12em] transition-colors', light ? 'text-[#20322d]/68 hover:border-[#20322d]/35 hover:text-[#20322d]' : 'text-white/70 hover:border-white/40 hover:text-white', pathname === link.href && (light ? 'border-[#20322d]/35 text-[#20322d]' : 'border-white/40 text-white'))}>
              {link.label}
            </Link>
          ))}
          <Link href="/kontakt" className={cn('ml-2 inline-flex min-h-10 items-center border px-5 text-[0.68rem] font-semibold uppercase tracking-[0.13em] transition-colors', light ? 'border-[#20322d] bg-[#20322d] text-white hover:bg-[#2c4640]' : 'border-white/45 bg-white/10 text-white hover:bg-white hover:text-[#20322d]')}>
            Kontakt
          </Link>
        </nav>

        <button type="button" onClick={() => setOpen((value) => !value)} aria-label={open ? 'Navigation schließen' : 'Navigation öffnen'} aria-expanded={open} aria-controls="mobile-navigation" className={cn('inline-flex h-11 w-11 items-center justify-center border transition-colors xl:hidden', light ? 'border-[#20322d]/20 text-[#20322d]' : 'border-white/30 text-white')}>
          {open ? <X size={20} strokeWidth={1.6} /> : <Menu size={20} strokeWidth={1.6} />}
        </button>
      </div>

      {open && (
        <nav id="mobile-navigation" className="border-t border-[#20322d]/10 bg-[#f6f1e8] px-5 pb-7 pt-3 text-[#20322d] shadow-[0_24px_50px_rgba(20,34,30,0.12)] sm:px-8 xl:hidden" aria-label="Mobile Navigation">
          <div className="mx-auto max-w-[90rem]">
            {mainLinks.map((link) => (
              <Link key={link.href} href={link.href} className="flex min-h-12 items-center border-b border-[#20322d]/10 text-sm tracking-[0.03em]">{link.label}</Link>
            ))}
            <Link href="/kontakt" className="mt-5 inline-flex min-h-12 w-full items-center justify-center bg-[#20322d] px-5 text-sm font-semibold tracking-[0.05em] text-white sm:w-auto">Kontakt</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
