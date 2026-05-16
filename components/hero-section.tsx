'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '@/components/button';
import { siteMeta } from '@/lib/content';

const trustItems = [
  {
    label: 'Heilpraktiker',
    text: 'Naturheilkundliche Haltung, ruhig und körpernah.'
  },
  {
    label: 'Intensivstation',
    text: 'Klinische Erfahrung in Grenzsituationen.'
  },
  {
    label: 'Hospiz & Psychiatrie',
    text: 'Begleitung in Krisen und Übergängen.'
  }
];

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const introInitial = reduceMotion ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 16, filter: 'blur(10px)' };
  const asideInitial = reduceMotion ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 18, filter: 'blur(8px)' };

  return (
    <section className="relative isolate min-h-[calc(100svh-64px)] overflow-hidden bg-[#11140f] text-white">
      <Image
        src="/hero-wandelpfad.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-30 object-cover object-[58%_50%] opacity-[0.72] sm:object-center"
      />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,_rgba(6,8,6,0.9)_0%,_rgba(12,14,10,0.7)_36%,_rgba(12,14,10,0.3)_66%,_rgba(6,8,6,0.72)_100%)]" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_25%_46%,_rgba(218,198,158,0.15),transparent_31%),radial-gradient(ellipse_at_center,_transparent_34%,_rgba(0,0,0,0.68)_100%)]" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,_rgba(0,0,0,0.52)_0%,_rgba(0,0,0,0.08)_38%,_rgba(0,0,0,0.72)_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 film-grain opacity-[0.11] mix-blend-soft-light" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-0 h-44 bg-gradient-to-t from-background to-transparent" />

      <div className="relative mx-auto flex min-h-[calc(100svh-64px)] max-w-7xl px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-10">
        <div className="grid w-full content-start gap-8 pt-2 sm:pt-4 lg:grid-cols-[minmax(0,0.72fr)_minmax(220px,0.28fr)] lg:items-start lg:pt-10 xl:pt-12">
          <motion.div
            initial={introInitial}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-w-5xl self-start pt-2 sm:pt-3 lg:pt-0"
          >
            <p className="text-[0.66rem] uppercase tracking-[0.42em] text-white/56">Wandel:Pfad</p>
            <h1 className="mt-5 max-w-5xl font-serif text-[clamp(2.85rem,8.1vw,7.7rem)] font-medium leading-[0.88] tracking-normal text-[#F7F0E4] sm:mt-6 lg:leading-[0.86]">
              Raum für Wandel.
              <span className="block text-[#D2BE98]">Begleitung mit Tiefe.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#E8DECD]/84 sm:mt-6 sm:text-[1.05rem] sm:leading-8">
              Für Menschen, die in Phasen von Stress, Erschöpfung oder innerer Unruhe wieder Ruhe und Verbindung suchen.
              Körperorientierte Atem-, Massage- und Begleitungsarbeit in einem klaren, getragenen Rahmen.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/termine" className="w-full sm:w-auto">
                <Button className="w-full bg-[#F3EBDC] px-8 text-[#171813] shadow-none hover:bg-white focus-visible:ring-[#D2BE98] focus-visible:ring-offset-[#171813] sm:w-auto">
                  Erstes Gespräch vereinbaren
                </Button>
              </Link>
              <Link
                href="/angebote"
                className="group inline-flex w-fit items-center py-2 text-sm font-medium tracking-[0.08em] text-[#F7F0E4]/70 transition duration-700 hover:text-[#F7F0E4] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D2BE98]/70"
              >
                <span className="border-b border-[#F7F0E4]/24 pb-1 transition duration-700 group-hover:border-[#F7F0E4]/58">Angebote ansehen</span>
              </Link>
            </div>
            <p className="mt-7 max-w-[20rem] text-[0.68rem] font-semibold uppercase leading-6 tracking-[0.18em] text-[#F8F1E6]/78 [text-shadow:0_1px_12px_rgba(0,0,0,0.35)] sm:mt-8 sm:max-w-3xl sm:whitespace-nowrap sm:text-xs sm:tracking-[0.24em]">
              {siteMeta.smallNote}
            </p>
          </motion.div>

          <motion.aside
            initial={asideInitial}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-w-sm self-start text-[#E8DECD]/62 sm:max-w-lg lg:mt-24 lg:max-w-[15rem] lg:justify-self-end"
            aria-label="Vertrauen und beruflicher Weg"
          >
            <p className="text-[0.64rem] uppercase tracking-[0.32em] text-white/36">Erfahrung</p>
            <div className="mt-4 space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:block lg:space-y-4">
              {trustItems.map((item) => (
                <article key={item.label} className="relative">
                  <p className="text-[0.64rem] uppercase leading-5 tracking-[0.22em] text-[#D2BE98]/60">{item.label}</p>
                  <p className="mt-1 max-w-[17rem] text-[0.82rem] leading-5 text-[#E8DECD]/60">{item.text}</p>
                </article>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
