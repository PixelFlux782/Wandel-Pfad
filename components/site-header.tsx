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

  const isLight = scrolled;

  return (
    <header
      className={cn(
        'sticky top-0 z-[60] border-b transition-[background-color,backdrop-filter,border-color,box-shadow,color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
        isLight
          ? 'border-[#191612]/10 bg-[rgba(244,238,228,0.88)] text-[#211E1A] shadow-[0_12px_34px_rgba(31,28,24,0.08)] backdrop-blur-md'
          : 'border-white/[0.1] bg-[rgba(12,10,8,0.52)] text-[#F8F1E6] shadow-[0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-xl'
      )}
    >
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10">
        <Link
          href="/"
          className={cn(
            'text-[0.72rem] font-semibold uppercase tracking-[0.3em] transition-colors duration-500',
            isLight ? 'text-[#211E1A] hover:text-[#4E4236]' : 'text-[#F8F1E6]/96 hover:text-white'
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
                'relative py-2 text-[0.76rem] font-semibold uppercase tracking-[0.13em] transition-colors duration-500 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100',
                isLight
                  ? 'text-[#3A342E] hover:text-[#211E1A] after:bg-[#2A251F]/32'
                  : 'text-[#F8F1E6]/86 hover:text-white after:bg-[#F8F1E6]/42',
                pathname === link.href &&
                  (isLight ? 'text-[#211E1A] after:scale-x-100' : 'text-white after:scale-x-100')
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/termine"
            aria-current={pathname === '/termine' ? 'page' : undefined}
            className={cn(
              'rounded-full border px-5 py-2.5 text-[0.74rem] font-semibold uppercase tracking-[0.14em] transition duration-500 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D2BE98]/75',
              isLight
                ? 'border-[#211E1A]/20 bg-[rgba(33,30,26,0.05)] text-[#211E1A] hover:border-[#211E1A]/32 hover:bg-[rgba(33,30,26,0.08)]'
                : 'border-[#F8F1E6]/34 bg-[rgba(248,241,230,0.1)] text-[#F8F1E6]/95 hover:border-[#F8F1E6]/48 hover:bg-[rgba(248,241,230,0.15)] hover:text-white',
              pathname === '/termine' &&
                (isLight ? 'border-[#211E1A]/36 bg-[rgba(33,30,26,0.09)]' : 'border-[#F8F1E6]/52 bg-[rgba(248,241,230,0.16)] text-white')
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
            'inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-500 md:hidden',
            isLight
              ? 'border-[#211E1A]/22 bg-[rgba(33,30,26,0.05)] text-[#211E1A] hover:border-[#211E1A]/34 hover:bg-[rgba(33,30,26,0.08)]'
              : 'border-[#F8F1E6]/34 bg-[rgba(248,241,230,0.1)] text-[#F8F1E6]/96 hover:border-[#F8F1E6]/48 hover:bg-[rgba(248,241,230,0.15)] hover:text-white'
          )}
        >
          {open ? <X size={19} strokeWidth={1.7} /> : <Menu size={19} strokeWidth={1.7} />}
        </button>
      </div>

      {open ? (
        <div
          className={cn(
            'border-t px-6 pb-7 backdrop-blur-xl md:hidden',
            isLight ? 'border-[#191612]/10 bg-[rgba(244,238,228,0.96)]' : 'border-white/[0.1] bg-[rgba(12,10,8,0.94)]'
          )}
        >
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 pt-4" aria-label="Mobile Navigation">
            {navLinks
              .filter((link) => link.href !== '/termine')
              .map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === link.href ? 'page' : undefined}
                  className={cn(
                    'min-h-12 py-3 text-sm font-semibold uppercase tracking-[0.15em] transition-colors duration-500',
                    isLight ? 'text-[#3A342E] hover:text-[#211E1A]' : 'text-[#F8F1E6]/84 hover:text-white',
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
                'mt-3 inline-flex min-h-12 items-center justify-center rounded-full border px-5 text-sm font-semibold uppercase tracking-[0.15em] transition duration-500 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D2BE98]/75',
                isLight
                  ? 'border-[#211E1A]/22 bg-[rgba(33,30,26,0.05)] text-[#211E1A] hover:border-[#211E1A]/34 hover:bg-[rgba(33,30,26,0.08)]'
                  : 'border-[#F8F1E6]/28 bg-[rgba(248,241,230,0.08)] text-[#F8F1E6]/92 hover:border-[#F8F1E6]/42 hover:bg-[rgba(248,241,230,0.13)] hover:text-white'
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
