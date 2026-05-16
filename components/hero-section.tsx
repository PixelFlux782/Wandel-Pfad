'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '@/components/button';
import { siteMeta } from '@/lib/content';

const trustItems = [
  {
    label: 'Heilpraktiker',
    text: 'Fundierte naturheilkundliche Haltung mit ruhigem Blick auf Körper und Regulation.'
  },
  {
    label: 'Intensivstation',
    text: 'Jahre klinische Erfahrung in Grenzsituationen und hoher Belastung.'
  },
  {
    label: 'Hospiz & Psychiatrie',
    text: 'Begleitung von Menschen in Krisen, Verletzlichkeit und Veränderungsphasen.'
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
        className="absolute inset-0 -z-30 object-cover object-[58%_50%] opacity-[0.74] sm:object-center"
      />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,_rgba(7,9,7,0.9)_0%,_rgba(13,16,12,0.68)_38%,_rgba(13,16,12,0.32)_64%,_rgba(7,9,7,0.74)_100%)]" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_24%_43%,_rgba(218,198,158,0.2),transparent_30%),radial-gradient(circle_at_74%_17%,_rgba(89,111,79,0.18),transparent_34%),radial-gradient(ellipse_at_center,_transparent_32%,_rgba(0,0,0,0.62)_100%)]" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,_rgba(0,0,0,0.44)_0%,_rgba(0,0,0,0.1)_34%,_rgba(0,0,0,0.66)_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 film-grain opacity-[0.14] mix-blend-soft-light" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-0 h-36 bg-gradient-to-t from-background to-transparent" />

      <div className="relative mx-auto flex min-h-[calc(100svh-72px)] max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="grid w-full gap-16 lg:grid-cols-[minmax(0,0.62fr)_minmax(300px,0.38fr)] lg:items-end">
          <motion.div
            initial={introInitial}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-w-5xl self-center pt-8 lg:self-end lg:pb-20"
          >
            <p className="text-[0.68rem] uppercase tracking-[0.44em] text-white/60">Wandel:Pfad</p>
            <h1 className="mt-8 max-w-4xl font-serif text-[clamp(3.25rem,10.4vw,9rem)] font-medium leading-[0.88] tracking-normal text-[#F7F0E4]">
              Raum für Wandel.
              <span className="block text-[#D2BE98]">Begleitung mit Tiefe.</span>
            </h1>
            <p className="mt-9 max-w-xl text-base leading-8 text-[#E8DECD]/80 sm:text-lg sm:leading-9">
              Für Menschen, die in Phasen von Stress, Erschöpfung oder innerer Unruhe wieder Ruhe und Verbindung suchen. Körperorientierte Atem-, Massage- und Begleitungsarbeit in einem klaren, getragenen Rahmen.
            </p>
            <div className="mt-11 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <Link href="/termine" className="w-full sm:w-auto">
                <Button className="w-full bg-[#F3EBDC] text-[#171813] shadow-none hover:bg-white focus-visible:ring-[#D2BE98] focus-visible:ring-offset-[#171813] sm:w-auto">
                  Erstes Gespräch vereinbaren
                </Button>
              </Link>
              <Link href="/angebote" className="w-full sm:w-auto">
                <Button variant="subtle" className="w-full border border-white/22 px-7 text-[#F7F0E4]/90 hover:border-white/36 hover:bg-white/8 hover:text-white sm:w-auto">
                  Angebote ansehen
                </Button>
              </Link>
            </div>
            <p className="mt-9 max-w-lg text-xs uppercase leading-6 tracking-[0.34em] text-white/48">{siteMeta.smallNote}</p>
          </motion.div>

          <motion.aside
            initial={asideInitial}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 self-end border-y border-white/14 py-7 sm:max-w-lg lg:mb-20 lg:justify-self-end lg:border-l lg:border-y-0 lg:py-2 lg:pl-8"
            aria-label="Vertrauen und beruflicher Weg"
          >
            <p className="text-[0.68rem] uppercase tracking-[0.38em] text-white/42">Vertrauen</p>
            <div className="mt-7 space-y-7">
              {trustItems.map((item) => (
                <article key={item.label} className="relative border-t border-white/[0.13] pt-5 first:border-t-0 first:pt-0">
                  <p className="text-[0.68rem] uppercase tracking-[0.32em] text-[#D2BE98]/70">{item.label}</p>
                  <p className="mt-3 max-w-sm text-sm leading-7 text-[#E8DECD]/70">{item.text}</p>
                </article>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
