'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/lib/content';
import { cn } from '@/lib/utils';

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 16);

    updateScrolled();
    window.addEventListener('scroll', updateScrolled, { passive: true });

    return () => window.removeEventListener('scroll', updateScrolled);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-[60] text-white transition-[background-color,backdrop-filter,border-color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]',
        scrolled || open ? 'border-b border-white/[0.06] bg-[#10130e]/72 backdrop-blur-xl' : 'border-b border-transparent bg-[#10130e]/28 backdrop-blur-[10px]'
      )}
    >
      <div className={cn('mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10', scrolled ? 'py-3' : 'py-4')}>
        <Link
          href="/"
          className="text-[0.72rem] font-normal uppercase tracking-[0.34em] text-[#F4ECDC]/86 transition-colors duration-700 hover:text-[#F4ECDC]"
        >
          Wandel:Pfad
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Hauptnavigation">
          {navLinks.slice(0, 5).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.76rem] font-normal uppercase tracking-[0.16em] text-white/[0.58] transition-colors duration-700 hover:text-[#F4ECDC]/88"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/termine"
            className="rounded-full border border-white/[0.16] px-5 py-2.5 text-[0.74rem] font-normal uppercase tracking-[0.18em] text-[#F4ECDC]/72 transition duration-700 hover:border-white/[0.28] hover:bg-white/[0.035] hover:text-[#F4ECDC] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D2BE98]/65"
          >
            Termine
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Navigation öffnen"
          aria-expanded={open}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.14] bg-white/[0.035] text-[#F4ECDC]/84 transition-colors duration-700 hover:border-white/[0.26] hover:bg-white/[0.06] hover:text-[#F4ECDC] md:hidden"
        >
          {open ? <X size={19} strokeWidth={1.7} /> : <Menu size={19} strokeWidth={1.7} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/[0.06] bg-[#10130e]/82 px-6 pb-7 backdrop-blur-xl md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 pt-4" aria-label="Mobile Navigation">
            {navLinks
              .filter((link) => link.href !== '/termine')
              .map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-sm font-normal uppercase tracking-[0.18em] text-white/68 transition-colors duration-500 hover:text-[#F4ECDC]"
                >
                  {link.label}
                </Link>
              ))}
            <Link
              href="/termine"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex min-h-12 items-center justify-center rounded-full border border-white/[0.16] px-5 text-sm font-normal uppercase tracking-[0.18em] text-[#F4ECDC]/76 transition duration-700 hover:border-white/[0.28] hover:bg-white/[0.035] hover:text-[#F4ECDC] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D2BE98]/65"
            >
              Termine
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
