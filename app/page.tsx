import Link from 'next/link';
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
          <div className="mt-24 grid gap-x-20 gap-y-10 lg:grid-cols-2 lg:gap-y-16">
            {offerCards.map((offer, index) => (
              <OfferCard key={offer.title} {...offer} index={index} />
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
          <div className="mt-20">
            {timelineSteps.map((step, index) => (
              <ProcessStep key={step.title} step={step.title} detail={step.description} index={index} />
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

      <section className="relative bg-[#1C2118] px-6 py-28 text-white sm:px-8 sm:py-36 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,_rgba(201,185,157,0.14),transparent_38rem),linear-gradient(180deg,_rgba(255,255,255,0.035),_rgba(0,0,0,0.2))]" />
        <div className="pointer-events-none absolute inset-0 film-grain opacity-[0.1] mix-blend-soft-light" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.32fr_0.68fr] lg:items-start">
          <p className="text-[0.68rem] uppercase tracking-[0.38em] text-white/46">Einladung</p>
          <div>
            <h2 className="max-w-4xl font-serif text-5xl font-medium leading-[0.98] tracking-normal text-[#F5EFE3] sm:text-7xl">
              Wenn sich etwas davon stimmig anfühlt, können wir in Ruhe schauen, was gerade sinnvoll ist.
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-8 text-[#E1D8C8]/76">
              Ob ein erstes Gespräch, ein einzelner Termin oder ein kontinuierlicher Weg: Es geht nicht um Druck, sondern um einen passenden Anfang.
            </p>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/termine"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#F5EFE3]/24 px-6 text-[0.74rem] font-normal uppercase tracking-[0.18em] text-[#F5EFE3]/86 transition duration-700 hover:border-[#F5EFE3]/42 hover:bg-white/[0.04] hover:text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C9B99D]/70"
              >
                Erstes Gespräch vereinbaren
              </Link>
              <Link
                href="/angebote"
                className="inline-flex w-fit py-2 text-sm font-medium tracking-[0.08em] text-[#F5EFE3]/62 transition duration-700 hover:text-[#F5EFE3] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C9B99D]/70"
              >
                Angebote ansehen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
