import Link from 'next/link';
import { HeroSection } from '@/components/hero-section';
import { SectionHeading } from '@/components/section-heading';
import { OfferCard } from '@/components/offer-card';
import { FAQAccordion } from '@/components/faq-accordion';
import { ProcessStep } from '@/components/process-step';
import { focusAreas, offerCards, faqItems, timelineSteps } from '@/lib/content';

const experienceStatements = [
  'Erfahrung mit Grenzsituationen, in denen Ruhe nicht behauptet, sondern gehalten werden muss.',
  'Begleitung von Menschen, wenn Sprache knapp wird und der Körper trotzdem weiter erzählt.',
  'Ein Blick auf Gesundheit, der Körper, Psyche und Orientierung nicht voneinander trennt.'
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />

      <section className="paper-depth relative bg-background px-5 pb-[clamp(7rem,11vw,13rem)] pt-[clamp(7.5rem,13vw,15rem)] sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Worum es hier geht"
            description="Körper, Atem und Regulation als Zugang. Keine schnelle Technik, sondern ein ruhiger Prozess in klaren Schritten."
            className="max-w-3xl"
          />
          <div className="mt-20 grid gap-x-24 gap-y-14 sm:mt-24 lg:mt-32 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div className="space-y-14 lg:pt-28">
              {focusAreas.slice(0, 3).map((item) => (
                <article key={item.title} className="border-t border-text/[0.09] pt-8">
                  <h3 className="font-serif text-[2rem] font-medium leading-tight tracking-normal text-text sm:text-5xl">{item.title}</h3>
                  <p className="mt-5 max-w-xl text-base leading-8 text-[#504B44]">{item.description}</p>
                </article>
              ))}
            </div>
            <div className="space-y-16 lg:max-w-2xl lg:justify-self-end">
              {focusAreas.slice(3).map((item) => (
                <article key={item.title} className="border-t border-text/[0.09] pt-8">
                  <h3 className="font-serif text-[2rem] font-medium leading-tight tracking-normal text-text sm:text-5xl">{item.title}</h3>
                  <p className="mt-5 max-w-xl text-base leading-8 text-[#504B44]">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="paper-depth relative bg-[#F1EADF] px-5 pb-[clamp(7.5rem,13vw,15rem)] pt-[clamp(7rem,12vw,14rem)] sm:px-8 lg:px-10">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-background via-background/70 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-background/80 to-transparent" />
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Angebote"
            description="Drei ruhige Zugänge, die sich nicht aufdrängen. Ergänzende Gruppenformate finden sich auf der Angebotsseite."
            className="max-w-3xl lg:ml-[8%]"
          />
          <div className="mt-24 lg:mt-32">
            {offerCards.slice(0, 3).map((offer, index) => (
              <OfferCard key={offer.title} {...offer} index={index} variant="home" />
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-sm leading-8 text-[#504B44]/82 lg:ml-[8%]">
            Zusätzlich gibt es gruppenbasierte Formate und längerfristige Begleitung. Mehr dazu findest du auf der Angebotsseite.
          </p>
        </div>
      </section>

      <section className="paper-depth relative bg-background px-5 pb-[clamp(7rem,10vw,12rem)] pt-[clamp(6rem,9vw,10rem)] sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.86fr_0.9fr] lg:items-center lg:gap-24">
          <div className="lg:pt-16">
            <SectionHeading title="Über Simon" description="Eine ruhige Haltung, getragen von klinischer Erfahrung und klarer Begleitung." className="max-w-3xl" />
            <div className="mt-14 max-w-2xl space-y-7 text-base leading-8 text-[#504B44]">
              <p>Ich bin Simon Dalemans - Heilpraktiker, examinierter Gesundheits- und Krankenpfleger, Körpertherapeut Ayurveda und Breathwork Coach. Meine Arbeit schafft Räume, in denen Menschen wieder langsamer werden und wieder Verbindung zu sich selbst spüren können.</p>
              <p>Jahre auf Intensivstation, im Hospiz und in der geschlossenen Psychiatrie haben meine Haltung geprägt. Heute verbinde ich diese Erfahrungen mit einem klaren, körperorientierten Zugang, der nicht schneller, sondern bewusster machen möchte.</p>
            </div>
            <div className="quiet-panel mt-14 p-10 sm:mt-16">
              <p className="eyebrow">Klinische Erfahrung</p>
              <div className="mt-7 grid gap-6 sm:grid-cols-3 sm:gap-7">
                {experienceStatements.map((statement) => (
                  <p key={statement} className="max-w-sm font-serif text-[1.32rem] font-medium leading-[1.18] text-[#2D2923]/82 sm:text-[1.55rem] sm:leading-[1.12]">
                    {statement}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="relative mt-10 lg:mt-0 lg:-translate-y-10">
            <div className="absolute -inset-10 bg-[radial-gradient(circle_at_42%_24%,_rgba(136,111,88,0.11),transparent_48%)] blur-2xl" />
            <div className="relative border-y border-text/[0.09] py-10 lg:ml-auto lg:max-w-lg">
              <img src="/portrait.svg" alt="Portrait Illustration" className="mx-auto h-full w-full max-w-md object-cover opacity-90" />
            </div>
          </div>
        </div>
      </section>

      <section className="paper-depth relative bg-background px-5 pb-[clamp(7.5rem,12vw,14rem)] pt-[clamp(5.5rem,8vw,9rem)] sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Ablauf / Einstieg" description="Ein klarer, ruhiger Prozess, der Vertrauen schafft und Unsicherheit nimmt." className="max-w-3xl lg:ml-auto" />
          <div className="mt-20 lg:ml-[14%] lg:mt-28">
            {timelineSteps.map((step, index) => (
              <ProcessStep key={step.title} step={step.title} detail={step.description} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="paper-depth relative px-5 pb-[clamp(7rem,11vw,13rem)] pt-[clamp(5.5rem,9vw,10rem)] sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="FAQ" description="Klare Antworten auf die wichtigsten Fragen zur Arbeit, zu Verlauf und Passung." className="max-w-3xl" />
          <div className="mt-20 max-w-5xl lg:ml-auto lg:mt-24">
            <FAQAccordion items={faqItems.slice(0, 5)} />
          </div>
        </div>
      </section>

      <section className="relative bg-[#1C2118] px-5 py-[clamp(7.5rem,13vw,15rem)] text-white sm:px-8 lg:px-10">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background/60 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,_rgba(201,185,157,0.1),transparent_42rem),linear-gradient(180deg,_rgba(255,255,255,0.025),_rgba(0,0,0,0.18))]" />
        <div className="pointer-events-none absolute inset-0 film-grain opacity-[0.08] mix-blend-soft-light" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.32fr_0.68fr] lg:items-start">
          <p className="text-[0.68rem] uppercase tracking-[0.38em] text-white/46">Einladung</p>
          <div>
            <h2 className="max-w-4xl font-serif text-[clamp(2.5rem,12vw,4.5rem)] font-medium leading-[1.02] tracking-normal text-[#F5EFE3] sm:text-7xl sm:leading-[0.98]">
              Wenn sich etwas davon stimmig anfühlt, können wir in Ruhe schauen, was gerade sinnvoll ist.
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-8 text-[#E1D8C8]/76">
              Ob ein erstes Gespräch, ein einzelner Termin oder ein kontinuierlicher Weg: Es geht nicht um Druck, sondern um einen passenden Anfang.
            </p>
            <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
              <Link
                href="/termine"
                className="resonant-link border-[#F5EFE3]/24 text-[#F5EFE3]/78 hover:border-[#F5EFE3]/48 hover:text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C9B99D]/70"
              >
                Erstes Gespräch vereinbaren
              </Link>
              <Link
                href="/angebote"
                className="inline-flex w-fit py-2 text-sm font-normal tracking-[0.08em] text-[#F5EFE3]/56 transition duration-700 hover:text-[#F5EFE3] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C9B99D]/70"
              >
                Angebot ansehen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
