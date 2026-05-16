import { SectionHeading } from '@/components/section-heading';
import { Button } from '@/components/button';
import { bookingOptions } from '@/lib/content';

export const metadata = {
  title: 'Termine & Gruppen | Wandel:Pfad',
  description: 'Vorbereitete Buchungsarchitektur für Einzeltermine, Gruppen und längerfristige Begleitung. Cal.com-Integration geplant.'
};

export default function TerminePage() {
  return (
    <div className="bg-background px-6 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl space-y-14">
        <SectionHeading title="Termine & Gruppen" description="Eine ruhige Buchungsarchitektur für individuelle und gruppenbasierte Begleitung." className="max-w-2xl" />

        <div className="grid gap-8 lg:grid-cols-2">
          {bookingOptions.map((option) => (
            <div key={option.title} className="rounded-[2rem] border border-border bg-white p-8 shadow-soft">
              <h2 className="text-2xl font-semibold text-text">{option.title}</h2>
              <p className="mt-4 text-base leading-8 text-[#504B44]">{option.description}</p>
              <div className="mt-6 space-y-2 text-sm text-muted">
                {option.details.map((detail) => (
                  <p key={detail}>• {detail}</p>
                ))}
              </div>
              <p className="mt-6 text-sm text-[#504B44]">{option.status}</p>
            </div>
          ))}
        </div>

        <div className="rounded-[2rem] border border-border bg-[#F4EEE4] p-10 shadow-soft">
          <h2 className="text-3xl font-semibold text-text">Buchungsarchitektur</h2>
          <p className="mt-6 text-base leading-8 text-[#504B44]">Das aktuelle Design ist vorbereitet für eine modulare Cal.com-Integration. Es geht um Einzeltermine, Gruppenbuchungen, freie Plätze, Warteliste und eine elegante Kalenderdarstellung ohne typische Booking-Plugin-Optik.</p>
          <p className="mt-6 text-base leading-8 text-[#504B44]">Die technische Basis ist klar gegliedert: separate Events, skalierbare Terminmodelle und ein sauberer UI-Aufbau, der später direkt an eine API anschließbar ist.</p>
          <div className="mt-8 max-w-xl rounded-[2rem] border border-border bg-white p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-muted">Nächster Schritt</p>
            <p className="mt-4 text-base leading-8 text-[#504B44]">Wenn du ein Erstgespräch vereinbaren möchtest, kannst du jetzt den ersten Termin anfragen. Gruppe oder Einzeltermin – wir finden gemeinsam den passenden Einstieg.</p>
          </div>
          <div className="mt-8 inline-flex">
            <Button>Erstgespräch anfragen</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
