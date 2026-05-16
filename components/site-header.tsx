'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/lib/content';
import { Button } from '@/components/button';

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[60] border-b border-white/10 bg-[#12150f]/72 text-white backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 sm:px-8 lg:px-10">
        <Link href="/" className="text-sm font-medium uppercase tracking-[0.28em] text-[#F4ECDC] transition-colors duration-700 hover:text-white">
          Wandel:Pfad
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.slice(0, 5).map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-white/[0.64] transition-colors duration-700 hover:text-white">
              {link.label}
            </Link>
          ))}
          <Link href="/termine">
            <Button variant="subtle" className="border border-white/18 px-6 py-3 text-white/80 hover:border-white/36 hover:bg-white/8 hover:text-white">
              Termine
            </Button>
          </Link>
        </nav>
        <button
          onClick={() => setOpen(!open)}
          aria-label="Navigation öffnen"
          aria-expanded={open}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/18 bg-white/8 text-white transition-colors duration-700 hover:border-white/36 hover:bg-white/12 md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-white/10 bg-[#12150f]/95 px-6 pb-6 backdrop-blur-2xl md:hidden">
          <div className="flex flex-col gap-4 pt-5">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-base text-white/80 transition-colors duration-500 hover:text-white">
                {link.label}
              </Link>
            ))}
            <Link href="/termine" onClick={() => setOpen(false)}>
              <Button variant="subtle" className="w-full border border-white/18 text-white/[0.85] hover:border-white/36 hover:bg-white/8 hover:text-white">
                Termine
              </Button>
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
