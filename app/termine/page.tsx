import { SectionHeading } from '@/components/section-heading';
import { Button } from '@/components/button';
import { bookingOptions } from '@/lib/content';

export const metadata = {
  title: 'Termine & Gruppen | Wandel:Pfad',
  description: 'Vorbereitete Buchungsarchitektur für Einzeltermine, Gruppen und längerfristige Begleitung. Cal.com-Integration geplant.'
};

export default function TerminePage() {
  return (
    <div className="editorial-section-compact bg-background">
      <div className="mx-auto max-w-6xl space-y-20">
        <SectionHeading title="Termine & Gruppen" description="Eine ruhige Buchungsarchitektur für individuelle und gruppenbasierte Begleitung." className="max-w-3xl" />

        <div className="grid gap-x-14 gap-y-6 lg:grid-cols-2">
          {bookingOptions.map((option, index) => (
            <div key={option.title} className={`border-t border-text/12 py-8 ${index % 2 ? 'lg:mt-12' : ''}`}>
              <h2 className="font-serif text-4xl font-medium leading-tight tracking-normal text-text">{option.title}</h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-[#504B44]">{option.description}</p>
              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-[0.68rem] uppercase tracking-[0.26em] text-muted">
                {option.details.map((detail) => (
                  <p key={detail}>{detail}</p>
                ))}
              </div>
              <p className="mt-6 max-w-xl text-sm leading-7 text-[#504B44]">{option.status}</p>
            </div>
          ))}
        </div>

        <div className="quiet-panel px-0 py-10 sm:px-8 lg:px-12">
          <h2 className="font-serif text-4xl font-medium leading-tight tracking-normal text-text">Buchungsarchitektur</h2>
          <p className="mt-7 max-w-3xl text-base leading-8 text-[#504B44]">Das aktuelle Design ist vorbereitet für eine modulare Cal.com-Integration. Es geht um Einzeltermine, Gruppenbuchungen, freie Plätze, Warteliste und eine elegante Kalenderdarstellung ohne typische Booking-Plugin-Optik.</p>
          <p className="mt-6 max-w-3xl text-base leading-8 text-[#504B44]">Die technische Basis ist klar gegliedert: separate Events, skalierbare Terminmodelle und ein sauberer UI-Aufbau, der später direkt an eine API anschließbar ist.</p>
          <div className="mt-9 max-w-2xl border-t border-text/12 pt-8">
            <p className="eyebrow">Nächster Schritt</p>
            <p className="mt-5 text-base leading-8 text-[#504B44]">Wenn du ein Erstgespräch vereinbaren möchtest, kannst du jetzt den ersten Termin anfragen. Gruppe oder Einzeltermin - wir finden gemeinsam den passenden Einstieg.</p>
          </div>
          <div className="mt-9 inline-flex">
            <Button>Erstes Gespräch anfragen</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
