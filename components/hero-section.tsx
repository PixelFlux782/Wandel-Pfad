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
    <section className="relative isolate min-h-[calc(100svh-72px)] overflow-hidden bg-[#11140f] text-white">
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

      <div className="relative mx-auto flex min-h-[calc(100svh-72px)] max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="grid w-full gap-14 lg:grid-cols-[minmax(0,0.72fr)_minmax(220px,0.28fr)] lg:items-end">
          <motion.div
            initial={introInitial}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-w-5xl self-center pt-10 lg:self-end lg:pb-24"
          >
            <p className="text-[0.68rem] uppercase tracking-[0.48em] text-white/56">Wandel:Pfad</p>
            <h1 className="mt-10 max-w-5xl font-serif text-[clamp(3.65rem,11.2vw,9.8rem)] font-medium leading-[0.88] tracking-normal text-[#F7F0E4]">
              Raum für Wandel.
              <span className="block text-[#D2BE98]">Begleitung mit Tiefe.</span>
            </h1>
            <p className="mt-11 max-w-2xl text-base leading-8 text-[#E8DECD]/84 sm:text-lg sm:leading-9">
              Für Menschen, die in Phasen von Stress, Erschöpfung oder innerer Unruhe wieder Ruhe und Verbindung suchen.
              Körperorientierte Atem-, Massage- und Begleitungsarbeit in einem klaren, getragenen Rahmen.
            </p>
            <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center">
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
            <p className="mt-9 max-w-lg text-xs uppercase leading-6 tracking-[0.34em] text-white/48">{siteMeta.smallNote}</p>
          </motion.div>

          <motion.aside
            initial={asideInitial}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-w-sm self-end text-[#E8DECD]/66 sm:max-w-lg lg:mb-24 lg:max-w-[17rem] lg:justify-self-end lg:pb-1"
            aria-label="Vertrauen und beruflicher Weg"
          >
            <p className="text-[0.66rem] uppercase tracking-[0.4em] text-white/38">Erfahrung</p>
            <div className="mt-7 space-y-6 sm:grid sm:grid-cols-3 sm:gap-8 sm:space-y-0 lg:block lg:space-y-8">
              {trustItems.map((item) => (
                <article key={item.label} className="relative">
                  <p className="text-[0.66rem] uppercase leading-5 tracking-[0.28em] text-[#D2BE98]/62">{item.label}</p>
                  <p className="mt-2 max-w-[18rem] text-sm leading-7 text-[#E8DECD]/64">{item.text}</p>
                </article>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
