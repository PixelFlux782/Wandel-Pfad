import Link from 'next/link';
import { SectionHeading } from '@/components/section-heading';
import { OfferCard } from '@/components/offer-card';
import { offerCards } from '@/lib/content';

export const metadata = {
  title: 'Angebote | Wandel:Pfad',
  description: 'Massage, Breathwork, Gruppen und längerfristige Begleitung. Ruhevolle Angebote für körperliche und innere Neuausrichtung.'
};

const details = [
  {
    title: 'Massage - Ankommen im Körper',
    text: 'Manchmal ist der Kopf zu laut. Gedanken kreisen, der Körper ist angespannt, und es fehlt ein Moment, in dem nichts gefordert wird. Diese Arbeit ist ohne Analyse, ohne Prozessarbeit und ohne innere Auseinandersetzung. Berührung darf regulieren, lösen und beruhigen.'
  },
  {
    title: 'Breathwork Einzelbegleitung',
    text: 'Verbundenes Atmen kann dort ankommen, wo Worte nicht mehr greifen. In einem klaren Rahmen kann sich öffnen, was im Alltag zurückgehalten wird: Emotionen, innere Spannung oder einfach das, was lange keinen Raum hatte.'
  },
  {
    title: 'Gruppen & Workshops',
    text: 'In der Gruppe entsteht eine besondere Qualität von gemeinsamem Erleben. Es geht nicht um Performance, sondern um gemeinsame Anwesenheit, Atemarbeit, stille Phasen und achtsame Reflexion.'
  },
  {
    title: '3-Monats-Begleitung',
    text: 'Manche Themen zeigen sich über Zeit. Die Begleitung ist kein Programm, sondern ein individueller Weg. Regelmäßige Treffen, Körperarbeit und Reflexion eröffnen Raum für Stabilisierung und Integration im Alltag.'
  }
];

export default function AngebotePage() {
  return (
    <div className="editorial-section-compact bg-background">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Angebote"
          description="Vier ruhige Formate für unterschiedliche Bedürfnisse - von körperlicher Entlastung bis zu begleiteter Veränderung über Zeit."
          className="max-w-4xl"
        />

        <div className="mt-24">
          {offerCards.map((offer, index) => (
            <OfferCard key={offer.title} {...offer} index={index} />
          ))}
        </div>

        <div className="mt-36 grid gap-x-24 gap-y-16 lg:grid-cols-2">
          {details.map((detail, index) => (
            <article key={detail.title} className={`border-t border-text/[0.09] pt-9 ${index % 2 ? 'lg:mt-16' : ''}`}>
              <h2 className="max-w-xl font-serif text-[clamp(2.15rem,3.8vw,3.2rem)] font-medium leading-[1.04] tracking-normal text-text">{detail.title}</h2>
              <p className="mt-8 max-w-xl text-base leading-8 text-[#504B44]">{detail.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-40 border-y border-text/[0.09] py-14">
          <div className="grid gap-8 lg:grid-cols-[0.32fr_0.68fr] lg:items-start">
            <p className="eyebrow">Hinweis</p>
            <div>
              <p className="max-w-3xl text-base leading-8 text-[#504B44]">
                Alle Angebote sind auch ohne Vorerfahrung möglich. Wichtig ist Offenheit für körperliche und erfahrungsorientierte Prozesse. Die Entscheidung für das passende Format entsteht gemeinsam, nicht nach Schema.
              </p>
              <Link
                href="/termine"
                className="resonant-link mt-10 border-text/22 text-text/66 hover:border-text/42 hover:text-text focus:outline-none focus-visible:ring-1 focus-visible:ring-accent/60"
              >
                Erstes Gespräch vereinbaren
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
