import Link from 'next/link';
import { SectionHeading } from '@/components/section-heading';
import { Button } from '@/components/button';

export const metadata = {
  title: 'Kontakt | Wandel:Pfad',
  description: 'Kontaktaufnahme für Erstgespräch, Anfragen oder individuelle Begleitung. Ruhevolle Verbindung ohne Druck.'
};

export default function KontaktPage() {
  return (
    <div className="bg-background px-6 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-5xl space-y-14">
        <SectionHeading title="Kontakt" description="Schreibe mir, wenn du einen ruhigen Einstieg in die Begleitung suchst." className="max-w-2xl" />

        <div className="grid gap-10 lg:grid-cols-[0.9fr_0.7fr] lg:items-start">
          <div className="space-y-8 rounded-[2rem] border border-border bg-white p-10 shadow-soft">
            <p className="text-base leading-8 text-[#504B44]">Wenn du spürst, dass dich etwas anspricht, kannst du hier den ersten Schritt machen. Es braucht keine genaue Vorstellung. Wichtig ist, dass du dich verstanden fühlst und der Rahmen passt.</p>
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-muted">E-Mail</p>
                <p className="mt-3 text-base text-text">info@wandel-pfad.de</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-muted">Ort</p>
                <p className="mt-3 text-base text-text">Frankfurt am Main</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-border bg-[#F4EEE4] p-10 shadow-soft">
            <p className="text-sm uppercase tracking-[0.3em] text-muted">Kontaktformular</p>
            <form action="mailto:info@wandel-pfad.de" className="mt-6 space-y-6">
              <label className="block text-sm font-medium text-text">Name</label>
              <input type="text" name="name" className="w-full rounded-3xl border border-border bg-white px-4 py-3 text-base text-text outline-none focus:border-accent focus:ring-2 focus:ring-accent/15" placeholder="Dein Name" />
              <label className="block text-sm font-medium text-text">E-Mail</label>
              <input type="email" name="email" className="w-full rounded-3xl border border-border bg-white px-4 py-3 text-base text-text outline-none focus:border-accent focus:ring-2 focus:ring-accent/15" placeholder="deine@email.de" />
              <label className="block text-sm font-medium text-text">Nachricht</label>
              <textarea name="message" rows={5} className="w-full rounded-3xl border border-border bg-white px-4 py-3 text-base text-text outline-none focus:border-accent focus:ring-2 focus:ring-accent/15" placeholder="Was bewegt dich gerade?"></textarea>
              <div className="flex justify-end">
                <Button type="submit">Nachricht senden</Button>
              </div>
            </form>
          </div>
        </div>

        <div className="rounded-[2rem] border border-border bg-white p-10 shadow-soft">
          <p className="text-sm uppercase tracking-[0.3em] text-muted">Ablauf</p>
          <p className="mt-4 text-base leading-8 text-[#504B44]">Sobald deine Anfrage angekommen ist, bekommst du in Ruhe eine Rückmeldung. Wir stimmen gemeinsam ab, ob ein Erstgespräch oder eine direkte Empfehlung für ein Angebot der passendere Weg ist.</p>
          <Link href="/termine" className="mt-8 inline-flex">
            <Button>Termine ansehen</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
