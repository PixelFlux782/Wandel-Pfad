'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '@/components/button';
import { siteMeta } from '@/lib/content';

const trustItems = [
  {
    label: 'Heilpraktiker',
    text: 'Körpernaher Blick auf Regulation und Orientierung.'
  },
  {
    label: 'Intensivstation',
    text: 'Erfahrung mit Grenzsituationen und Belastbarkeit.'
  },
  {
    label: 'Hospiz & geschlossene Psychiatrie',
    text: 'Begleitung, wenn Worte nicht mehr reichen.'
  }
];

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const introInitial = reduceMotion ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 16, filter: 'blur(10px)' };
  const asideInitial = reduceMotion ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 18, filter: 'blur(8px)' };

  return (
    <section className="relative isolate min-h-[calc(100svh-68px)] overflow-hidden bg-[#11140f] text-white">
      <Image
        src="/hero-wandelpfad.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-30 object-cover object-[58%_50%] opacity-[0.7] sm:object-center"
      />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,_rgba(5,7,5,0.9)_0%,_rgba(11,13,9,0.68)_42%,_rgba(11,13,9,0.22)_72%,_rgba(5,7,5,0.62)_100%)]" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_24%_48%,_rgba(218,198,158,0.09),transparent_36%),radial-gradient(ellipse_at_center,_transparent_38%,_rgba(0,0,0,0.66)_100%)]" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,_rgba(0,0,0,0.58)_0%,_rgba(0,0,0,0.08)_34%,_rgba(0,0,0,0.76)_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 film-grain opacity-[0.075] mix-blend-soft-light" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-0 h-52 bg-gradient-to-t from-background to-transparent" />

      <div className="relative mx-auto flex min-h-[calc(100svh-68px)] max-w-7xl px-5 pb-14 pt-24 sm:px-8 sm:pb-20 sm:pt-28 lg:px-10 lg:pb-24 lg:pt-32">
        <div className="grid w-full content-end gap-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(17rem,0.28fr)] lg:items-end lg:gap-16">
          <motion.div
            initial={introInitial}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-w-5xl self-end"
          >
            <p className="text-[0.62rem] uppercase tracking-[0.4em] text-white/50 sm:text-[0.64rem] sm:tracking-[0.46em]">Wandel:Pfad</p>
            <h1 className="mt-6 max-w-5xl font-serif text-[clamp(2.45rem,12vw,7.45rem)] font-medium leading-[0.96] tracking-normal text-[#F7F0E4] sm:mt-8 sm:leading-[0.92] lg:leading-[0.9]">
              Raum für Wandel.
              <span className="block text-[#D4C2A2]">Begleitung mit Tiefe.</span>
            </h1>
            <p className="mt-7 max-w-[34rem] text-[0.98rem] leading-8 text-[#E8DECD]/78 sm:mt-9 sm:text-[1.05rem] sm:leading-8">
              Für Menschen, die in Phasen von Stress, Erschöpfung oder innerer Unruhe wieder Ruhe und Verbindung suchen.
              Körperorientierte Atem-, Massage- und Begleitungsarbeit in einem klaren, getragenen Rahmen.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:mt-9 sm:flex-row sm:items-center sm:gap-8">
              <Link href="/termine" className="w-full sm:w-auto">
                <Button
                  variant="secondary"
                  className="w-full border-[#F7F0E4]/28 bg-[#F7F0E4]/[0.08] px-7 text-[#F7F0E4]/90 hover:border-[#F7F0E4]/44 hover:bg-[#F7F0E4]/[0.12] hover:text-white focus-visible:ring-[#D2BE98] focus-visible:ring-offset-[#171813] sm:w-auto"
                >
                  Erstes Gespräch vereinbaren
                </Button>
              </Link>
              <Link
                href="/angebote"
                className="resonant-link min-h-11 border-[#F7F0E4]/24 text-[#F7F0E4]/62 hover:border-[#F7F0E4]/52 hover:text-[#F7F0E4] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D2BE98]/70"
              >
                Angebote ansehen
              </Link>
            </div>
            <p className="mt-9 max-w-[22rem] text-[0.64rem] font-semibold uppercase leading-6 tracking-[0.16em] text-[#F8F1E6]/70 [text-shadow:0_1px_12px_rgba(0,0,0,0.35)] sm:mt-10 sm:max-w-3xl sm:text-xs sm:tracking-[0.24em]">
              {siteMeta.smallNote}
            </p>
          </motion.div>

          <motion.aside
            initial={asideInitial}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-w-xl self-end text-[#E8DECD]/58 lg:max-w-[18rem] lg:justify-self-end lg:pb-2"
            aria-label="Vertrauen und beruflicher Weg"
          >
            <p className="text-[0.62rem] uppercase tracking-[0.36em] text-white/34">Erfahrung</p>
            <div className="mt-5 border-y border-white/[0.11]">
              {trustItems.map((item) => (
                <article key={item.label} className="grid gap-1.5 border-b border-white/[0.075] py-3.5 last:border-b-0 sm:grid-cols-[minmax(8rem,0.34fr)_minmax(0,1fr)] sm:gap-4 lg:grid-cols-1 lg:gap-1.5 lg:py-4">
                  <p className="text-[0.6rem] uppercase leading-5 tracking-[0.26em] text-[#D2BE98]/58">{item.label}</p>
                  <p className="max-w-[22rem] text-[0.82rem] leading-6 text-[#E8DECD]/56 lg:max-w-[18rem]">{item.text}</p>
                </article>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
