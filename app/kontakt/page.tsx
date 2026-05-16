import Link from 'next/link';
import { SectionHeading } from '@/components/section-heading';
import { Button } from '@/components/button';

export const metadata = {
  title: 'Kontakt | Wandel:Pfad',
  description: 'Kontaktaufnahme für Erstgespräch, Anfragen oder individuelle Begleitung. Ruhevolle Verbindung ohne Druck.'
};

const inputClass =
  'w-full rounded-none border-0 border-b border-text/18 bg-transparent px-0 py-3 text-base text-text outline-none transition-colors duration-500 placeholder:text-muted/55 focus:border-accent focus:ring-0';

export default function KontaktPage() {
  return (
    <div className="editorial-section-compact bg-background">
      <div className="mx-auto max-w-5xl space-y-20">
        <SectionHeading title="Kontakt" description="Schreibe mir, wenn du einen ruhigen Einstieg in die Begleitung suchst." className="max-w-3xl" />

        <div className="grid gap-14 lg:grid-cols-[0.88fr_0.72fr] lg:items-start">
          <div className="border-t border-text/12 pt-8 lg:mt-14">
            <p className="max-w-xl text-base leading-8 text-[#504B44]">Wenn du spürst, dass dich etwas anspricht, kannst du hier den ersten Schritt machen. Es braucht keine genaue Vorstellung. Wichtig ist, dass du dich verstanden fühlst und der Rahmen passt.</p>
            <div className="mt-10 space-y-7">
              <div>
                <p className="eyebrow">E-Mail</p>
                <p className="mt-3 text-base text-text">info@wandel-pfad.de</p>
              </div>
              <div>
                <p className="eyebrow">Ort</p>
                <p className="mt-3 text-base text-text">Frankfurt am Main</p>
              </div>
            </div>
          </div>

          <div className="quiet-panel px-0 py-9 sm:px-8">
            <p className="eyebrow">Kontaktformular</p>
            <form action="mailto:info@wandel-pfad.de" className="mt-7 space-y-7">
              <div>
                <label className="eyebrow block" htmlFor="name">
                  Name
                </label>
                <input id="name" type="text" name="name" className={inputClass} placeholder="Dein Name" />
              </div>
              <div>
                <label className="eyebrow block" htmlFor="email">
                  E-Mail
                </label>
                <input id="email" type="email" name="email" className={inputClass} placeholder="deine@email.de" />
              </div>
              <div>
                <label className="eyebrow block" htmlFor="message">
                  Nachricht
                </label>
                <textarea id="message" name="message" rows={5} className={inputClass} placeholder="Was bewegt dich gerade?" />
              </div>
              <div className="flex justify-start">
                <Button type="submit">In Ruhe Kontakt aufnehmen</Button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-y border-text/12 py-10">
          <p className="eyebrow">Ablauf</p>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#504B44]">Sobald deine Anfrage angekommen ist, bekommst du in Ruhe eine Rückmeldung. Wir stimmen gemeinsam ab, ob ein Erstgespräch oder eine direkte Empfehlung für ein Angebot der passendere Weg ist.</p>
          <Link href="/termine" className="mt-9 inline-flex">
            <Button variant="secondary">Termine ansehen</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
