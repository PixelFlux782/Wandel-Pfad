import { SectionHeading } from '@/components/section-heading';
import { focusAreas } from '@/lib/content';

export const metadata = {
  title: 'Wie ich arbeite | Wandel:Pfad',
  description: 'Körper- und prozessorientierte Begleitung mit Atemarbeit, Körperarbeit, Gespräch und Naturheilkunde.'
};

export default function WieIchArbeitePage() {
  return (
    <div className="bg-background px-6 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl space-y-14">
        <SectionHeading title="Wie ich arbeite" description="Die Arbeit ist körper- und prozessorientiert. Sie verbindet Atem, Körper und Haltung in einem klaren Rahmen." className="max-w-2xl" />

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-8 rounded-[2rem] border border-border bg-white p-10 shadow-soft">
            <h2 className="text-3xl font-semibold text-text">Körperarbeit</h2>
            <p className="text-base leading-8 text-[#504B44]">Über Berührung und Körperwahrnehmung entsteht Entlastung, Regulation und Ruhe. Die Körperarbeit ist achtsam, ruhig und unmittelbar erlebbar.</p>
          </div>
          <div className="space-y-8 rounded-[2rem] border border-border bg-white p-10 shadow-soft">
            <h2 className="text-3xl font-semibold text-text">Atemarbeit (Breathwork)</h2>
            <p className="text-base leading-8 text-[#504B44]">Der Atem kann innere Prozesse, Emotionen und Spannungen in Bewegung bringen und bewusster erfahrbar machen. Breathwork ist kein Selbstoptimieren – es ist Öffnung.</p>
          </div>
          <div className="space-y-8 rounded-[2rem] border border-border bg-white p-10 shadow-soft">
            <h2 className="text-3xl font-semibold text-text">Gespräch und Reflexion</h2>
            <p className="text-base leading-8 text-[#504B44]">Gespräche helfen, Erfahrungen einzuordnen und Veränderungen bewusst wahrzunehmen. Sie sind Bestandteil, nicht Ersatz, der körperlichen Erfahrung.</p>
          </div>
          <div className="space-y-8 rounded-[2rem] border border-border bg-white p-10 shadow-soft">
            <h2 className="text-3xl font-semibold text-text">Naturheilkundliche Begleitung</h2>
            <p className="text-base leading-8 text-[#504B44]">Wenn passend, können klassische Heilpraktiker-Methoden ergänzend Teil der Arbeit sein. Sie unterstützen das Gesamtbild, ohne es zu dominieren.</p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-border bg-[#F4EEE4] p-10 shadow-soft">
          <h2 className="text-3xl font-semibold text-text">Mein Kern</h2>
          <p className="mt-6 text-base leading-8 text-[#504B44]">Nicht jede Sitzung ist gleich. Im Zentrum steht mehr Kontakt zum eigenen Körper, mehr Wahrnehmung innerer Prozesse, mehr Verständnis für sich selbst, mehr Regulation und Stabilität.</p>
          <p className="mt-6 text-base leading-8 text-[#504B44]">Ich gebe keine fertigen Lösungen vor. Ich begleite Prozesse aufmerksam und klar, unterstütze dabei, das sichtbar zu machen, was im Alltag oft übergangen wird. Nichts wird forciert, nichts übergestülpt.</p>
        </div>
      </div>
    </div>
  );
}
