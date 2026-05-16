import Link from 'next/link';
import { SectionHeading } from '@/components/section-heading';
import { bookingOptions } from '@/lib/content';

export const metadata = {
  title: 'Termine & Gruppen | Wandel:Pfad',
  description: 'Ruhiger Einstieg für Einzeltermine, Gruppen und längerfristige Begleitung.'
};

export default function TerminePage() {
  return (
    <div className="editorial-section-compact bg-background">
      <div className="mx-auto max-w-6xl space-y-20">
        <SectionHeading title="Termine & Gruppen" description="Ein ruhiger Einstieg für individuelle und gruppenbasierte Begleitung." className="max-w-3xl" />

        <div className="grid gap-x-16 gap-y-10 lg:grid-cols-2">
          {bookingOptions.map((option, index) => (
            <div key={option.title} className={`border-t border-text/[0.09] py-9 ${index % 2 ? 'lg:mt-14' : ''}`}>
              <h2 className="font-serif text-[clamp(2.1rem,3.5vw,3rem)] font-medium leading-[1.04] tracking-normal text-text">{option.title}</h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-[#504B44]">{option.description}</p>
              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[0.66rem] uppercase tracking-[0.26em] text-muted/78">
                {option.details.map((detail) => (
                  <p key={detail}>{detail}</p>
                ))}
              </div>
              <p className="mt-7 max-w-xl text-sm leading-7 text-[#504B44]/86">{option.status}</p>
            </div>
          ))}
        </div>

        <div className="quiet-panel px-0 py-12 sm:px-8 lg:px-12">
          <h2 className="font-serif text-[clamp(2.2rem,4vw,3.4rem)] font-medium leading-[1.04] tracking-normal text-text">Rahmen für Termine</h2>
          <p className="mt-8 max-w-3xl text-base leading-8 text-[#504B44]">Einzeltermine, Gruppenbuchungen, freie Plätze und Warteliste sollen später klar sichtbar sein, ohne typische Booking-Plugin-Optik. Im Moment steht der persönliche Einstieg im Vordergrund.</p>
          <p className="mt-6 max-w-3xl text-base leading-8 text-[#504B44]">Die technische Grundlage bleibt vorbereitet, aber sie tritt nicht nach vorne. Wichtig ist ein ruhiger Ablauf, der Orientierung gibt und Raum lässt.</p>
          <div className="mt-10 max-w-2xl border-t border-text/[0.09] pt-9">
            <p className="eyebrow">Nächster Schritt</p>
            <p className="mt-6 text-base leading-8 text-[#504B44]">Wenn du ein Erstgespräch vereinbaren möchtest, kannst du jetzt den ersten Termin anfragen. Gruppe oder Einzeltermin - wir finden gemeinsam den passenden Einstieg.</p>
          </div>
          <Link
            href="/kontakt"
            className="resonant-link mt-10 border-text/22 text-text/66 hover:border-text/42 hover:text-text focus:outline-none focus-visible:ring-1 focus-visible:ring-accent/60"
          >
            In Ruhe anfragen
          </Link>
        </div>
      </div>
    </div>
  );
}
