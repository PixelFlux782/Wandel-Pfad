import { FAQAccordion } from '@/components/faq-accordion';
import { SectionHeading } from '@/components/section-heading';
import { faqItems } from '@/lib/content';

export const metadata = {
  title: 'FAQ | Wandel:Pfad',
  description: 'Antworten auf die wichtigsten Fragen zu Passung, Format und Ablauf der Arbeit.'
};

export default function FAQPage() {
  return (
    <div className="editorial-section-compact bg-background">
      <div className="mx-auto max-w-5xl space-y-16">
        <SectionHeading title="FAQ" description="Klare Antworten auf häufige Fragen, damit du dich sicher fühlen kannst." className="max-w-3xl" />

        <div className="quiet-panel grid gap-8 py-9 sm:px-8 lg:grid-cols-[0.28fr_0.72fr] lg:px-10">
          <p className="eyebrow">Wichtig</p>
          <div>
            <h2 className="font-serif text-4xl font-medium leading-tight tracking-normal text-text">Ist das Therapie?</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#504B44]">Meine Arbeit ist keine Psychotherapie im heilkundlichen Sinne. Sie ist körper- und prozessorientiert und kann in Phasen von Stress, Erschöpfung oder Veränderung stützen.</p>
          </div>
        </div>

        <FAQAccordion items={faqItems} />
      </div>
    </div>
  );
}
