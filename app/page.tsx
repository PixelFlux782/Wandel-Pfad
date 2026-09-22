import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { HeroSection } from '@/components/hero-section';

export const metadata: Metadata = {
  title: 'Wandel | Atemarbeit, Coaching & Körperarbeit in Aschaffenburg',
  description:
    'Wandel mit Simon Dalemans: persönliche Begleitung mit Atemarbeit, Coaching und Körperarbeit in Aschaffenburg. Individuell, bodenständig und auf Augenhöhe.'
};

const approaches = [
  { number: '01', title: 'Atemarbeit', text: 'Atem bewusst erleben und als Zugang zu Wahrnehmung und innerem Erleben nutzen.' },
  { number: '02', title: 'Coaching', text: 'Gedanken sortieren, Perspektiven entwickeln und Veränderung bewusst gestalten.' },
  { number: '03', title: 'Körperarbeit', text: 'Über Berührung, Bewegung und Körperwahrnehmung wieder bewusster im eigenen Körper ankommen.' }
];

const qualifications = [
  'Examinierter Gesundheits- und Krankenpfleger',
  'Heilpraktiker',
  'Körpertherapeut Ayurveda',
  'Breathwork Coach'
];

const methods = ['Gespräch', 'Atem', 'Bewegung', 'Körperwahrnehmung', 'Berührung', 'Reflexion'];

const formats = [
  { label: '01', title: '1:1 Atemarbeit', text: 'Eine begleitete Atemerfahrung mit Zeit zum Ankommen, Atmen und Nachspüren. Keine Vorerfahrung notwendig.' },
  { label: '02', title: 'Coaching & persönliche Begleitung', text: 'Raum für Fragen, Übergänge, Veränderung und den Wunsch nach mehr Klarheit und Selbstwahrnehmung.' },
  { label: '03', title: 'Atem & Körperarbeit', text: 'Eine intensive individuelle Auszeit von etwa 90–120 Minuten: ankommen, sprechen, atmen und mit passender Körperarbeit oder ayurvedischer Massage nachspüren.' }
];

export default function Home() {
  return (
    <div className="overflow-clip bg-[#f6f1e8]">
      <HeroSection />

      <section className="section-shell bg-[#f6f1e8]" aria-labelledby="orientation-title">
        <div className="mx-auto max-w-6xl border-y border-[#23352f]/12 py-16 text-center sm:py-24">
          <p className="eyebrow">Orientierung</p>
          <h2 id="orientation-title" className="mx-auto mt-6 max-w-4xl text-[clamp(3rem,8vw,6.2rem)] leading-[0.93] text-[#20322d]">
            Schau, wo du stehst.
            <span className="block italic text-[#6f675c]">Und dann geh deinen Weg.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-[#57534c] sm:text-lg sm:leading-9">
            Veränderung beginnt nicht immer mit einer fertigen Antwort. Manchmal beginnt sie damit, wieder wahrzunehmen, was gerade da ist – im Körper, im Atem und im eigenen Leben.
          </p>
        </div>
      </section>

      <section className="section-shell bg-[#eee5d8]" aria-labelledby="approaches-title">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-7 lg:grid-cols-[0.37fr_0.63fr] lg:items-end">
            <p className="eyebrow">Drei Zugänge</p>
            <h2 id="approaches-title" className="max-w-4xl text-[clamp(3rem,7vw,5.5rem)] leading-[0.96] text-[#20322d]">
              Drei Zugänge. <span className="text-[#7b6a5c]">Ein individueller Weg.</span>
            </h2>
          </div>

          <div className="mt-16 border-y border-[#23352f]/14 lg:mt-24 lg:grid lg:grid-cols-3">
            {approaches.map((item) => (
              <article key={item.title} className="border-b border-[#23352f]/12 py-10 last:border-b-0 lg:border-b-0 lg:border-r lg:px-9 lg:py-14 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0">
                <p className="text-xs tracking-[0.2em] text-[#326358]/70">{item.number}</p>
                <h3 className="mt-8 text-4xl text-[#20322d] sm:text-5xl">{item.title}</h3>
                <p className="mt-6 max-w-sm text-base leading-8 text-[#59554e]">{item.text}</p>
              </article>
            ))}
          </div>

          <p className="mt-10 max-w-3xl text-lg leading-9 text-[#3f4844] lg:ml-auto lg:mt-14 lg:text-xl">
            Was davon Raum bekommt, entscheidet sich nicht nach einem festen Programm, sondern danach, wo du gerade stehst und was für dich sinnvoll ist.
          </p>
        </div>
      </section>

      <section id="simon" className="section-shell bg-[#f6f1e8]" aria-labelledby="simon-title">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.46fr_0.54fr] lg:items-start lg:gap-20">
          <div className="relative lg:sticky lg:top-28">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#d8c8b6]">
              <Image src="/simon_1.jpg" alt="Simon Dalemans begleitet einen Menschen in einer körperorientierten Sitzung" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover object-[50%_44%]" />
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[#625e57]">Präsenz, Erfahrung und ein Blick für den ganzen Menschen</p>
          </div>

          <div className="lg:pt-10">
            <p className="eyebrow">Wer dich begleitet</p>
            <h2 id="simon-title" className="mt-6 text-[clamp(3.5rem,8vw,6.5rem)] leading-[0.92] text-[#20322d]">Ich bin Simon.</h2>
            <div className="mt-9 max-w-2xl space-y-6 text-base leading-8 text-[#57534c] sm:text-lg sm:leading-9">
              <p>Ich komme aus dem Gesundheitswesen und habe Menschen in sehr unterschiedlichen Situationen begleitet – von ambulanter Pflege und Stroke Unit über Intensivstation und Notaufnahme bis zu Hospiz und Psychiatrie.</p>
              <p>Diese Erfahrungen haben meinen Blick auf Gesundheit, Veränderung und menschliche Ressourcen geprägt.</p>
            </div>

            <blockquote className="my-12 border-l-2 border-[#326358] pl-7 font-serif text-[clamp(2.1rem,5vw,3.6rem)] leading-[1.02] text-[#20322d] sm:my-16 sm:pl-10">
              „Warum helfen wir Menschen oft erst dann, wenn sie krank geworden sind?“
            </blockquote>

            <p className="max-w-2xl text-base leading-8 text-[#57534c] sm:text-lg sm:leading-9">
              Aus dieser Frage ist meine heutige Arbeit entstanden. Sie setzt früher an: bei Wahrnehmung, Körperkontakt, Atem, Klarheit – und bei dem, was einen Menschen bereits trägt.
            </p>

            <div className="mt-12 border-y border-[#23352f]/14 py-7">
              {qualifications.map((qualification) => (
                <p key={qualification} className="border-b border-[#23352f]/10 py-3 text-sm tracking-[0.03em] text-[#35443f] last:border-b-0 sm:text-base">{qualification}</p>
              ))}
            </div>

            <Link href="/ueber-mich" className="text-link mt-10">Mehr über meinen Weg</Link>
          </div>
        </div>
      </section>

      <section id="haltung" className="section-shell relative overflow-hidden bg-[#1e312c] text-[#f6f0e6]" aria-labelledby="attitude-title">
        <div className="absolute -right-32 -top-44 h-[34rem] w-[34rem] rounded-full border border-white/5" />
        <div className="absolute -right-12 -top-24 h-[20rem] w-[20rem] rounded-full border border-white/5" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:gap-20">
            <div>
              <p className="eyebrow !text-[#d9cbb8]/65">Meine Haltung</p>
              <h2 id="attitude-title" className="mt-6 text-[clamp(3rem,7vw,5.7rem)] leading-[0.95] text-[#f7f0e6]">Nicht nur schauen, <span className="text-[#b8ad9d]">was fehlt.</span></h2>
            </div>
            <div className="lg:pt-24">
              <p className="font-serif text-[clamp(2.2rem,5vw,4.4rem)] leading-[0.98] text-[#d7c5aa]">Sondern entdecken, was bereits da ist.</p>
              <p className="mt-8 max-w-2xl text-base leading-8 text-[#eee6da] sm:text-lg sm:leading-9">Ich betrachte Menschen nicht als Problem, das gelöst werden muss. Gemeinsam schauen wir: Wo stehst du? Was belastet dich? Was trägt dich? Was brauchst du für deinen nächsten Schritt?</p>
            </div>
          </div>

          <div className="mt-16 border-y border-white/12 py-8 sm:mt-24 sm:py-10">
            <p className="mb-6 text-xs uppercase tracking-[0.24em] text-[#d9cbb8]/55">Mögliche Werkzeuge</p>
            <div className="flex flex-wrap gap-x-7 gap-y-3 sm:gap-x-11">
              {methods.map((method) => <span key={method} className="font-serif text-2xl text-[#f2eadf]/84 sm:text-3xl">{method}</span>)}
            </div>
          </div>

          <Link href="/wie-ich-arbeite" className="text-link-dark mt-10">Wie ich arbeite</Link>
        </div>
      </section>

      <section className="section-shell bg-[#f6f1e8]" aria-labelledby="formats-title">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:items-end">
            <div>
              <p className="eyebrow">Formen der Begleitung</p>
              <h2 id="formats-title" className="mt-6 text-[clamp(3rem,7vw,5.5rem)] leading-[0.96] text-[#20322d]">Wie Begleitung aussehen kann</h2>
            </div>
            <div className="relative aspect-[16/9] overflow-hidden bg-[#d8c8b6] lg:translate-y-12">
              <Image src="/simon_2.jpg" alt="Simon bei einer achtsamen Atem- und Körperarbeit" fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover object-[57%_center]" />
            </div>
          </div>

          <div className="mt-20 lg:mt-32">
            {formats.map((format) => (
              <article key={format.title} className="grid gap-5 border-t border-[#23352f]/14 py-9 sm:grid-cols-[5rem_0.7fr_1fr] sm:gap-8 sm:py-11">
                <p className="text-xs tracking-[0.2em] text-[#326358]/70">{format.label}</p>
                <h3 className="text-3xl leading-tight text-[#20322d] sm:text-4xl">{format.title}</h3>
                <p className="max-w-xl text-base leading-8 text-[#59554e]">{format.text}</p>
              </article>
            ))}
          </div>
          <Link href="/angebote" className="text-link mt-8 lg:ml-[7rem]">Möglichkeiten ansehen</Link>
        </div>
      </section>

      <section className="section-shell bg-[#e6dacb]" aria-labelledby="workshop-title">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.34fr_0.66fr] lg:gap-20">
            <div>
              <p className="eyebrow">Gemeinsam erleben</p>
              <p className="mt-8 inline-flex border border-[#326358]/25 px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#326358]">Termine folgen</p>
            </div>
            <div>
              <h2 id="workshop-title" className="text-[clamp(3.2rem,8vw,6.5rem)] leading-[0.9] text-[#20322d]">Aus dem Kopf in den Körper</h2>
              <p className="mt-6 font-serif text-2xl italic text-[#7a6555] sm:text-3xl">Bewegen. Spüren. Atmen. Loslassen.</p>
              <p className="mt-8 max-w-2xl text-base leading-8 text-[#57534c] sm:text-lg sm:leading-9">Workshops und Gruppenangebote bieten einen niedrigschwelligen Einstieg in die Arbeit von Wandel – gemeinsam, erfahrungsorientiert und ohne Leistungsdruck.</p>
              <Link href="/termine" className="text-link mt-10">Aktuelle Workshops</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-[#f6f1e8]" aria-labelledby="first-step-title">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <p className="eyebrow">Der erste Schritt</p>
            <h2 id="first-step-title" className="mt-6 text-[clamp(3.2rem,8vw,6.5rem)] leading-[0.92] text-[#20322d]">Du musst noch nicht wissen, was du brauchst.</h2>
            <p className="mt-9 max-w-3xl text-base leading-8 text-[#57534c] sm:text-lg sm:leading-9">Du musst dich nicht vorab für Atemarbeit, Coaching oder Körperarbeit entscheiden. In einem ersten Kontakt schauen wir gemeinsam, worum es dir geht und welcher nächste Schritt sinnvoll sein könnte.</p>
          </div>

          <ol className="mt-16 grid border-y border-[#23352f]/14 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
            {['Kontakt aufnehmen', 'Kennenlernen', 'Gemeinsam Orientierung finden', 'Nächsten Schritt vereinbaren'].map((step, index) => (
              <li key={step} className="relative border-b border-[#23352f]/12 px-0 py-8 last:border-b-0 sm:px-6 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0">
                <span className="text-xs tracking-[0.18em] text-[#326358]/65">0{index + 1}</span>
                <p className="mt-4 font-serif text-2xl leading-tight text-[#20322d]">{step}</p>
              </li>
            ))}
          </ol>

          <Link href="/kontakt" className="button-primary mt-12">Unverbindlich Kontakt aufnehmen</Link>
        </div>
      </section>

      <aside className="bg-[#ede5da] px-5 py-9 sm:px-8 lg:px-12" aria-label="Hinweis zu den Grenzen der Begleitung">
        <div className="mx-auto flex max-w-7xl gap-5 border-l border-[#326358]/35 pl-5 sm:items-start sm:gap-8 sm:pl-8">
          <p className="hidden shrink-0 text-xs uppercase tracking-[0.2em] text-[#326358]/70 sm:block">Wichtiger Hinweis</p>
          <p className="max-w-4xl text-sm leading-7 text-[#5d5952]">Wandel ersetzt keine medizinische oder psychotherapeutische Behandlung. Bei akuten körperlichen oder psychischen Krisen ist eine entsprechende fachliche Versorgung erforderlich.</p>
        </div>
      </aside>

      <section className="section-shell relative overflow-hidden bg-[#192a26] text-center text-white" aria-labelledby="final-title">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />
        <div className="relative mx-auto max-w-5xl">
          <p className="eyebrow !text-[#d9cbb8]/60">Eine ruhige Einladung</p>
          <h2 id="final-title" className="mt-7 text-[clamp(3.2rem,8vw,6.5rem)] leading-[0.92] text-[#f8f1e7]">Schau, wo du stehst.<span className="block italic text-[#cfb99a]">Und dann geh deinen Weg.</span></h2>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-[#eee7dc]/70 sm:text-lg sm:leading-9">Wenn du herausfinden möchtest, ob meine Begleitung für dich passend ist, lernen wir uns zunächst kennen.</p>
          <Link href="/kontakt" className="button-primary-dark mt-10">Kontakt aufnehmen</Link>
        </div>
      </section>
    </div>
  );
}
