import { SectionHeading } from '@/components/section-heading';
import { aboutSection } from '@/lib/content';

export const metadata = {
  title: 'Über mich | Wandel:Pfad',
  description: 'Simon Dalemans begleitet mit klinischer Erfahrung, achtsamer Körperarbeit und Breathwork in Phasen von Stress und innerer Unruhe.'
};

export default function UeberMichPage() {
  return (
    <div className="editorial-section-compact bg-background">
      <div className="mx-auto max-w-5xl space-y-20">
        <SectionHeading title="Über mich" description="Ein klarer Blick auf den Menschen und auf den Weg, der Ruhe und Körperlichkeit verbindet." className="max-w-3xl" />

        <div className="grid gap-14 lg:grid-cols-[0.92fr_0.88fr] lg:items-start">
          <div className="border-t border-text/12 pt-8 lg:mt-12">
            <p className="max-w-xl text-base leading-8 text-[#504B44]">Ich bin Simon Dalemans - Heilpraktiker, examinierter Gesundheits- und Krankenpfleger, Körpertherapeut Ayurveda und Breathwork Coach. Viele Jahre begleite ich Menschen in Phasen von Stress, Erschöpfung und innerer Unruhe.</p>
            <p className="mt-7 max-w-xl text-base leading-8 text-[#504B44]">Meine Arbeit schafft Räume, in denen Menschen wieder langsamer werden, ihren Körper bewusster wahrnehmen und mit sich selbst in Kontakt kommen können. Dabei geht es nicht um schnelle Lösungen, sondern um einen gehaltenen Prozess.</p>
          </div>

          <div className="border-y border-text/12 py-8">
            <div>
              <p className="eyebrow">Warum diese Arbeit entstanden ist</p>
              <p className="mt-6 max-w-xl text-base leading-8 text-[#504B44]">Aus der klinischen Arbeit auf Intensivstation, im Hospiz und der Psychiatrie habe ich gelernt, wie eng körperliche Beschwerden, psychische Belastung und innere Orientierung miteinander verwoben sind. Diese Erfahrung ist der Ausgangspunkt meiner Haltung.</p>
            </div>
            <div className="mt-10 border-t border-text/10 pt-8">
              <p className="eyebrow">Meine Haltung</p>
              <ul className="mt-6 space-y-3 text-base leading-8 text-[#504B44]">
                <li>Kein Reparaturversprechen.</li>
                <li>Kein schneller Rat.</li>
                <li>Stattdessen: Räume öffnen, wahrnehmen, begleiten.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="quiet-panel px-0 py-10 sm:px-8 lg:px-12">
          <h2 className="font-serif text-4xl font-medium leading-tight tracking-normal text-text">Meine Grundlage</h2>
          <div className="mt-8 max-w-3xl space-y-6 text-base leading-8 text-[#504B44]">
            {aboutSection.details.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
