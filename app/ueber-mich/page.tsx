import { SectionHeading } from '@/components/section-heading';
import { aboutSection } from '@/lib/content';

export const metadata = {
  title: 'Über mich | Wandel:Pfad',
  description: 'Simon Dalemans begleitet mit klinischer Erfahrung, achtsamer Körperarbeit und Breathwork in Phasen von Stress und innerer Unruhe.'
};

export default function UeberMichPage() {
  return (
    <div className="bg-background px-6 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-5xl space-y-14">
        <SectionHeading title="Über mich" description="Ein klarer Blick auf den Menschen und auf den Weg, der Ruhe und Körperlichkeit verbindet." className="max-w-2xl" />

        <div className="grid gap-12 lg:grid-cols-[0.9fr_0.9fr] lg:items-start">
          <div className="space-y-7 rounded-[2rem] border border-border bg-white p-10 shadow-soft">
            <p className="text-base leading-8 text-[#504B44]">Ich bin Simon Dalemans – Heilpraktiker, examinierter Gesundheits- und Krankenpfleger, Körpertherapeut Ayurveda und Breathwork Coach. Viele Jahre begleite ich Menschen in Phasen von Stress, Erschöpfung und innerer Unruhe.</p>
            <p className="text-base leading-8 text-[#504B44]">Meine Arbeit schafft Räume, in denen Menschen wieder langsamer werden, ihren Körper bewusster wahrnehmen und mit sich selbst in Kontakt kommen können. Dabei geht es nicht um schnelle Lösungen, sondern um einen gehaltenen Prozess.</p>
          </div>

          <div className="space-y-7 rounded-[2rem] border border-border bg-white p-10 shadow-soft">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-muted">Warum diese Arbeit entstanden ist</p>
              <p className="mt-5 text-base leading-8 text-[#504B44]">Aus der klinischen Arbeit auf Intensivstation, im Hospiz und der Psychiatrie habe ich gelernt, wie eng körperliche Beschwerden, psychische Belastung und innere Orientierung miteinander verwoben sind. Diese Erfahrung ist der Ausgangspunkt meiner Haltung.</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-muted">Meine Haltung</p>
              <ul className="mt-5 space-y-3 text-base leading-8 text-[#504B44]">
                <li>Kein Reparaturversprechen.</li>
                <li>Kein schneller Rat.</li>
                <li>Stattdessen: Räume öffnen, wahrnehmen, begleiten.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-border bg-[#F4EEE4] p-10 shadow-soft">
          <h2 className="text-3xl font-semibold text-text">Meine Grundlage</h2>
          <div className="mt-8 space-y-6 text-base leading-8 text-[#504B44]">
            {aboutSection.details.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
