import Link from 'next/link';
import { SectionHeading } from '@/components/section-heading';
import { OfferCard } from '@/components/offer-card';
import { offerCards } from '@/lib/content';

export const metadata = {
  title: 'Angebote | Wandel:Pfad',
  description: 'Massage, Breathwork, Gruppen und längerfristige Begleitung. Ruhevolle Angebote für körperliche und innere Neuausrichtung.'
};

export default function AngebotePage() {
  return (
    <div className="bg-background px-6 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Angebote" description="Vier ruhige Formate für unterschiedliche Bedürfnisse – von körperlicher Entlastung bis zu begleiteter Veränderung über Zeit." className="max-w-2xl" />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {offerCards.map((offer) => (
            <OfferCard key={offer.title} {...offer} />
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-border bg-white p-10 shadow-soft">
            <h2 className="text-3xl font-semibold text-text">Massage — Ankommen im Körper</h2>
            <p className="mt-6 text-base leading-8 text-[#504B44]">
              Manchmal ist der Kopf zu laut. Gedanken kreisen, der Körper ist angespannt, und es fehlt ein Moment, in dem nichts gefordert wird. Diese Arbeit ist ohne Analyse, ohne Prozessarbeit und ohne innere Auseinandersetzung. Berührung darf regulieren, lösen und beruhigen.
            </p>
          </div>

          <div className="rounded-[2rem] border border-border bg-white p-10 shadow-soft">
            <h2 className="text-3xl font-semibold text-text">Breathwork Einzelbegleitung</h2>
            <p className="mt-6 text-base leading-8 text-[#504B44]">
              Verbundenes Atmen kann dort ankommen, wo Worte nicht mehr greifen. In einem klaren Rahmen kann sich öffnen, was im Alltag zurückgehalten wird: Emotionen, innere Spannung oder einfach das, was lange keinen Raum hatte.
            </p>
          </div>

          <div className="rounded-[2rem] border border-border bg-white p-10 shadow-soft">
            <h2 className="text-3xl font-semibold text-text">Gruppen & Workshops</h2>
            <p className="mt-6 text-base leading-8 text-[#504B44]">
              In der Gruppe entsteht eine besondere Qualität von gemeinsamem Erleben. Es geht nicht um Performance, sondern um gemeinsame Anwesenheit, Atemarbeit, stille Phasen und achtsame Reflexion.
            </p>
          </div>

          <div className="rounded-[2rem] border border-border bg-white p-10 shadow-soft">
            <h2 className="text-3xl font-semibold text-text">3-Monats-Begleitung</h2>
            <p className="mt-6 text-base leading-8 text-[#504B44]">
              Manche Themen zeigen sich über Zeit. Die Begleitung ist kein Programm, sondern ein individueller Weg. Regelmäßige Treffen, Körperarbeit und Reflexion eröffnen Raum für Stabilisierung und Integration im Alltag.
            </p>
          </div>
        </div>

        <div className="mt-16 rounded-[2rem] border border-border bg-[#F4EEE4] p-10 shadow-soft">
          <p className="text-sm uppercase tracking-[0.3em] text-muted">Hinweis</p>
          <p className="mt-4 text-base leading-8 text-[#504B44]">
            Alle Angebote sind auch ohne Vorerfahrung möglich. Wichtig ist Offenheit für körperliche und erfahrungsorientierte Prozesse. Die Entscheidung für das passende Format entsteht gemeinsam, nicht nach Schema.
          </p>
          <Link href="/termine" className="mt-8 inline-flex">
            <button className="inline-flex items-center justify-center rounded-full bg-text px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2b2723]">
              Zum Terminangebot
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
