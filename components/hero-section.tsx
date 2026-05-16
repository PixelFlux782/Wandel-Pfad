'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/button';
import { siteMeta } from '@/lib/content';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(136,111,88,0.16),transparent_24%),linear-gradient(180deg,_rgba(255,255,255,0.95),_rgba(246,242,235,1))] py-20 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_top,_rgba(136,111,88,0.08),transparent_35%)]" />
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10"
          >
            <p className="text-sm uppercase tracking-[0.28em] text-muted">Wandel:Pfad</p>
            <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-tight tracking-[-0.05em] text-text sm:text-6xl">
              Raum für Wandel. <span className="text-accent">Begleitung mit Tiefe.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-9 text-[#4F4A44] sm:text-xl">
              Für Menschen, die in Phasen von Stress, Erschöpfung oder innerer Unruhe wieder Ruhe und Verbindung suchen. Körperorientierte Atem-, Massage- und Begleitungsarbeit in einem klaren, getragenen Rahmen.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href="/termine">
                <Button>Erstgespräch vereinbaren</Button>
              </Link>
              <Link href="/angebote">
                <Button variant="secondary">Angebote ansehen</Button>
              </Link>
            </div>
            <p className="mt-8 max-w-xl text-sm uppercase tracking-[0.3em] text-muted">{siteMeta.smallNote}</p>
          </motion.div>
          <div className="relative flex items-end justify-center">
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[420px] rounded-[3rem] bg-[radial-gradient(circle,_rgba(136,111,88,0.12),transparent_52%)] blur-2xl" />
            <div className="relative w-full overflow-hidden rounded-[3rem] border border-border bg-white/75 p-8 shadow-soft sm:p-10">
              <div className="space-y-6">
                <div className="rounded-[2rem] border border-border bg-background p-6 text-sm leading-7 text-[#3E3A34]">
                  Eine ruhige Einführung in die Arbeit, die nicht mit Versprechen arbeitet, sondern mit Aufmerksamkeit.
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {['Heilpraktiker', 'Gesundheits- & Krankenpfleger', 'Intensivstation', 'Hospiz'].map((title) => (
                    <div key={title} className="rounded-[1.75rem] border border-border bg-white p-5">
                      <p className="text-sm uppercase tracking-[0.22em] text-muted">{title}</p>
                      <p className="mt-3 text-sm leading-7 text-[#504B44]">{title === 'Heilpraktiker' ? 'Fundierte naturheilkundliche Haltung mit ruhigem Blick auf Körper und Regulation.' : title === 'Gesundheits- & Krankenpfleger' ? 'Jahre auf Intensivstation, Hospiz und Psychiatrie haben die Begleitung geprägt.' : title === 'Intensivstation' ? 'Menschen in Grenzsituationen begleiten, ohne sie in eine Schublade zu stecken.' : 'Leise Fürsorge und Präsenz in Verletzlichkeit und Veränderung.'}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
