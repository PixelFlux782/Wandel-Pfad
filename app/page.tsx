import Link from 'next/link';
import { Button } from '@/components/button';
import { HeroSection } from '@/components/hero-section';
import { SectionHeading } from '@/components/section-heading';
import { OfferCard } from '@/components/offer-card';
import { FAQAccordion } from '@/components/faq-accordion';
import { ProcessStep } from '@/components/process-step';
import { aboutSection, focusAreas, offerCards, faqItems, timelineSteps, trustCards } from '@/lib/content';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />

      <section className="bg-background px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Worum es hier geht"
            description="Körper, Atem und Regulation als Zugang. Keine schnelle Technik, sondern ein ruhiger Prozess in klaren Schritten."
            className="max-w-2xl"
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="grid gap-6">
              {focusAreas.slice(0, 3).map((item) => (
                <div key={item.title} className="rounded-[2rem] border border-border bg-white p-8 shadow-soft">
                  <h3 className="text-2xl font-semibold text-text">{item.title}</h3>
                  <p className="mt-4 text-base leading-8 text-[#504B44]">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {focusAreas.slice(3).map((item) => (
                <div key={item.title} className="rounded-[2rem] border border-border bg-white p-8 shadow-soft">
                  <h3 className="text-2xl font-semibold text-text">{item.title}</h3>
                  <p className="mt-4 text-base leading-8 text-[#504B44]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F4EEE4] px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Angebote"
            description="Vier ruhige Angebote mit klaren Inhalten, die sich nicht aufdrängen, sondern tragen."
            className="max-w-2xl"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {offerCards.map((offer) => (
              <OfferCard key={offer.title} {...offer} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_0.9fr] lg:items-center">
          <div>
            <SectionHeading title="Über Simon" description="Eine ruhige Haltung, getragen von klinischer Erfahrung und klarer Begleitung." className="max-w-2xl" />
            <div className="mt-10 space-y-6 text-base leading-8 text-[#504B44]">
              <p>Ich bin Simon Dalemans – Heilpraktiker, examinierter Gesundheits- und Krankenpfleger, Körpertherapeut Ayurveda und Breathwork Coach. Meine Arbeit schafft Räume, in denen Menschen wieder langsamer werden und wieder Verbindung zu sich selbst spüren können.</p>
              <p>Jahre auf Intensivstation, im Hospiz und in der Psychiatrie haben meine Haltung geprägt. Heute verbinde ich diese Erfahrungen mit einem klaren, körperorientierten Zugang, der nicht schneller, sondern bewusster machen möchte.</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[3rem] border border-border bg-[#F7F0E8] p-8 shadow-soft">
            <div className="absolute inset-x-6 top-6 h-28 rounded-[2rem] bg-accentSoft/80 blur-2xl" />
            <div className="relative rounded-[2.5rem] bg-white p-8 shadow-soft">
              <img src="/portrait.svg" alt="Portrait Illustration" className="h-full w-full rounded-[2rem] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Ablauf / Einstieg" description="Ein klarer, ruhiger Prozess, der Vertrauen schafft und Unsicherheit nimmt." className="max-w-2xl" />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {timelineSteps.map((step) => (
              <ProcessStep key={step.title} step={step.title} detail={step.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="FAQ" description="Klare Antworten auf die wichtigsten Fragen zur Arbeit, zu Verlauf und Passung." className="max-w-2xl" />
          <div className="mt-12">
            <FAQAccordion items={faqItems.slice(0, 5)} />
          </div>
        </div>
      </section>

      <section className="bg-[#F4EEE4] px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-muted">Einladung</p>
          <h2 className="mt-6 text-4xl font-semibold leading-tight text-text sm:text-5xl">Wenn dich etwas anspricht, kannst du in Ruhe den nächsten Schritt wählen.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#504B44]">Ob ein erstes Gespräch, ein einzelner Termin oder ein kontinuierlicher Weg – es geht darum, einen Raum zu öffnen, in dem du wieder bei dir ankommen kannst.</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/termine">
              <Button>Erstgespräch</Button>
            </Link>
            <Link href="/angebote">
              <Button variant="secondary">Angebote ansehen</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
