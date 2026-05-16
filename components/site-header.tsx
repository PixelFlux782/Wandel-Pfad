'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/lib/content';
import { Button } from '@/components/button';

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <Link href="/" className="text-lg font-semibold tracking-[0.12em] text-text">
          Wandel:Pfad
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.slice(0, 5).map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-muted transition hover:text-text">
              {link.label}
            </Link>
          ))}
          <Link href="/termine">
            <Button variant="default">Termine</Button>
          </Link>
        </nav>
        <button
          onClick={() => setOpen(!open)}
          aria-label="Navigation öffnen"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-text transition hover:border-text md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-border bg-white/95 px-6 pb-6 md:hidden">
          <div className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-base text-text">
                {link.label}
              </Link>
            ))}
            <Link href="/termine" onClick={() => setOpen(false)}>
              <Button variant="default" className="w-full">Termine</Button>
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
