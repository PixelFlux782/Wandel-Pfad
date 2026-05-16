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
    const updateScrolled = () => {
      const nextScrolled = window.scrollY > 32;
      setScrolled((current) => (current === nextScrolled ? current : nextScrolled));
    };

    updateScrolled();
    window.addEventListener('scroll', updateScrolled, { passive: true });

    return () => window.removeEventListener('scroll', updateScrolled);
  }, []);

  const heroTop = pathname === '/' && !scrolled && !open;
  const isLight = !heroTop;

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-[60] border-b transition-[background-color,backdrop-filter,border-color,box-shadow,color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]',
        isLight
          ? 'border-[#191612]/[0.08] bg-[rgba(246,242,235,0.82)] text-[#211E1A] shadow-[0_16px_46px_rgba(31,28,24,0.055)] backdrop-blur-xl'
          : 'border-white/[0.07] bg-[rgba(8,10,7,0.16)] text-[#F8F1E6] shadow-none backdrop-blur-[4px]'
      )}
    >
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          className={cn(
            'text-[0.68rem] font-semibold uppercase tracking-[0.3em] transition-colors duration-700 sm:text-[0.7rem] sm:tracking-[0.34em]',
            isLight ? 'text-[#211E1A]/88 hover:text-[#211E1A]' : 'text-[#F8F1E6]/90 hover:text-white'
          )}
        >
          Wandel:Pfad
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Hauptnavigation">
          {navLinks.slice(0, 5).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? 'page' : undefined}
              className={cn(
                'relative py-2 text-[0.72rem] font-semibold uppercase tracking-[0.15em] transition-colors duration-700 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:transition-transform after:duration-500 hover:after:scale-x-100',
                isLight
                  ? 'text-[#2D2923]/68 hover:text-[#211E1A] after:bg-[#2A251F]/30'
                  : 'text-[#F8F1E6]/74 hover:text-white after:bg-[#F8F1E6]/38',
                pathname === link.href &&
                  (isLight ? 'text-[#211E1A] after:scale-x-100' : 'text-white/94 after:scale-x-100')
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/termine"
            aria-current={pathname === '/termine' ? 'page' : undefined}
            className={cn(
              'border-b pb-1 text-[0.72rem] font-semibold uppercase tracking-[0.16em] transition duration-700 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D2BE98]/75',
              isLight
                ? 'border-[#211E1A]/20 text-[#211E1A]/74 hover:border-[#211E1A]/42 hover:text-[#211E1A]'
                : 'border-[#F8F1E6]/24 text-[#F8F1E6]/76 hover:border-[#F8F1E6]/48 hover:text-white',
              pathname === '/termine' &&
                (isLight ? 'border-[#211E1A]/48 text-[#211E1A]' : 'border-[#F8F1E6]/56 text-white')
            )}
          >
            Termine
          </Link>
        </nav>

        <button
          onClick={() => setOpen((current) => !current)}
          aria-label="Navigation oeffnen"
          aria-expanded={open}
          className={cn(
            'inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-700 md:hidden',
            isLight
              ? 'border-[#211E1A]/18 bg-[rgba(33,30,26,0.035)] text-[#211E1A] hover:border-[#211E1A]/32 hover:bg-[rgba(33,30,26,0.06)]'
              : 'border-[#F8F1E6]/24 bg-[rgba(248,241,230,0.04)] text-[#F8F1E6]/92 hover:border-[#F8F1E6]/42 hover:bg-[rgba(248,241,230,0.08)] hover:text-white'
          )}
        >
          {open ? <X size={19} strokeWidth={1.7} /> : <Menu size={19} strokeWidth={1.7} />}
        </button>
      </div>

      {open ? (
        <div
          className={cn(
            'border-t px-5 pb-8 shadow-[0_24px_60px_rgba(31,28,24,0.12)] backdrop-blur-2xl md:hidden',
            isLight ? 'border-[#191612]/[0.08] bg-[rgba(246,242,235,0.96)]' : 'border-white/[0.1] bg-[rgba(12,10,8,0.94)]'
          )}
        >
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 pt-5" aria-label="Mobile Navigation">
            {navLinks
              .filter((link) => link.href !== '/termine')
              .map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === link.href ? 'page' : undefined}
                  className={cn(
                    'border-b border-transparent py-4 text-sm font-semibold uppercase tracking-[0.16em] transition-colors duration-700',
                    isLight ? 'text-[#2D2923]/72 hover:text-[#211E1A]' : 'text-[#F8F1E6]/78 hover:text-white',
                    pathname === link.href && (isLight ? 'text-[#211E1A]' : 'text-white')
                  )}
                >
                  {link.label}
                </Link>
              ))}
            <Link
              href="/termine"
              onClick={() => setOpen(false)}
              aria-current={pathname === '/termine' ? 'page' : undefined}
              className={cn(
                'mt-5 inline-flex min-h-12 items-center justify-center rounded-full border px-5 text-sm font-semibold uppercase tracking-[0.15em] transition duration-700 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D2BE98]/75',
                isLight
                  ? 'border-[#211E1A]/18 bg-[rgba(33,30,26,0.035)] text-[#211E1A] hover:border-[#211E1A]/32 hover:bg-[rgba(33,30,26,0.06)]'
                  : 'border-[#F8F1E6]/26 bg-[rgba(248,241,230,0.055)] text-[#F8F1E6]/90 hover:border-[#F8F1E6]/42 hover:bg-[rgba(248,241,230,0.1)] hover:text-white'
              )}
            >
              Termine
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
