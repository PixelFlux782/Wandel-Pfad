import Link from 'next/link';
import { Button } from '@/components/button';
import { HeroSection } from '@/components/hero-section';
import { SectionHeading } from '@/components/section-heading';
import { OfferCard } from '@/components/offer-card';
import { FAQAccordion } from '@/components/faq-accordion';
import { ProcessStep } from '@/components/process-step';
import { focusAreas, offerCards, faqItems, timelineSteps } from '@/lib/content';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />

      <section className="editorial-section bg-background">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Worum es hier geht"
            description="Körper, Atem und Regulation als Zugang. Keine schnelle Technik, sondern ein ruhiger Prozess in klaren Schritten."
            className="max-w-3xl"
          />
          <div className="mt-24 grid gap-x-20 gap-y-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
            <div className="space-y-12 lg:pt-20">
              {focusAreas.slice(0, 3).map((item) => (
                <article key={item.title} className="border-t border-text/12 pt-8">
                  <h3 className="font-serif text-4xl font-medium leading-tight tracking-normal text-text sm:text-5xl">{item.title}</h3>
                  <p className="mt-5 max-w-xl text-base leading-8 text-[#504B44]">{item.description}</p>
                </article>
              ))}
            </div>
            <div className="space-y-12">
              {focusAreas.slice(3).map((item) => (
                <article key={item.title} className="border-t border-text/12 pt-8">
                  <h3 className="font-serif text-4xl font-medium leading-tight tracking-normal text-text sm:text-5xl">{item.title}</h3>
                  <p className="mt-5 max-w-xl text-base leading-8 text-[#504B44]">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="editorial-section relative bg-[#EFE7DC]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Angebote"
            description="Vier ruhige Angebote mit klaren Inhalten, die sich nicht aufdrängen, sondern tragen."
            className="max-w-3xl"
          />
          <div className="mt-24 grid gap-x-16 gap-y-6 lg:grid-cols-2">
            {offerCards.map((offer) => (
              <OfferCard key={offer.title} {...offer} />
            ))}
          </div>
        </div>
      </section>

      <section className="editorial-section">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.92fr_0.82fr] lg:items-center">
          <div>
            <SectionHeading title="Über Simon" description="Eine ruhige Haltung, getragen von klinischer Erfahrung und klarer Begleitung." className="max-w-3xl" />
            <div className="mt-14 max-w-2xl space-y-7 text-base leading-8 text-[#504B44]">
              <p>Ich bin Simon Dalemans - Heilpraktiker, examinierter Gesundheits- und Krankenpfleger, Körpertherapeut Ayurveda und Breathwork Coach. Meine Arbeit schafft Räume, in denen Menschen wieder langsamer werden und wieder Verbindung zu sich selbst spüren können.</p>
              <p>Jahre auf Intensivstation, im Hospiz und in der Psychiatrie haben meine Haltung geprägt. Heute verbinde ich diese Erfahrungen mit einem klaren, körperorientierten Zugang, der nicht schneller, sondern bewusster machen möchte.</p>
            </div>
          </div>
          <div className="relative mt-6 lg:mt-0">
            <div className="absolute -inset-8 bg-[radial-gradient(circle_at_45%_20%,_rgba(136,111,88,0.16),transparent_46%)] blur-2xl" />
            <div className="relative border-y border-text/12 py-8">
              <img src="/portrait.svg" alt="Portrait Illustration" className="mx-auto h-full w-full max-w-md object-cover opacity-95" />
            </div>
          </div>
        </div>
      </section>

      <section className="editorial-section-compact bg-background">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Ablauf / Einstieg" description="Ein klarer, ruhiger Prozess, der Vertrauen schafft und Unsicherheit nimmt." className="max-w-3xl" />
          <div className="mt-20 grid gap-x-16 gap-y-2 lg:grid-cols-1">
            {timelineSteps.map((step) => (
              <ProcessStep key={step.title} step={step.title} detail={step.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="editorial-section">
        <div className="mx-auto max-w-5xl">
          <SectionHeading title="FAQ" description="Klare Antworten auf die wichtigsten Fragen zur Arbeit, zu Verlauf und Passung." className="max-w-3xl" />
          <div className="mt-16">
            <FAQAccordion items={faqItems.slice(0, 5)} />
          </div>
        </div>
      </section>

      <section className="relative bg-[#1C2118] px-6 py-28 text-center text-white sm:px-8 sm:py-40 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(201,185,157,0.2),transparent_34%),linear-gradient(180deg,_rgba(255,255,255,0.04),_rgba(0,0,0,0.18))]" />
        <div className="pointer-events-none absolute inset-0 film-grain opacity-[0.13] mix-blend-soft-light" />
        <div className="relative mx-auto max-w-4xl">
          <p className="text-[0.68rem] uppercase tracking-[0.38em] text-white/46">Einladung</p>
          <h2 className="mt-8 font-serif text-5xl font-medium leading-[0.98] tracking-normal text-[#F5EFE3] sm:text-7xl">Wenn dich etwas anspricht, kannst du in Ruhe den nächsten Schritt wählen.</h2>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-[#E1D8C8]/76">Ob ein erstes Gespräch, ein einzelner Termin oder ein kontinuierlicher Weg - es geht darum, einen Raum zu öffnen, in dem du wieder bei dir ankommen kannst.</p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/termine">
              <Button className="bg-[#F5EFE3] text-[#171813] shadow-none hover:bg-white focus-visible:ring-[#C9B99D] focus-visible:ring-offset-[#171813]">Erstes Gespräch vereinbaren</Button>
            </Link>
            <Link href="/angebote">
              <Button variant="subtle" className="border border-white/22 text-[#F5EFE3]/88 hover:border-white/42 hover:bg-white/8 hover:text-white">Angebote ansehen</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
