import { FAQAccordion } from '@/components/faq-accordion';
import { SectionHeading } from '@/components/section-heading';
import { faqItems } from '@/lib/content';

export const metadata = {
  title: 'FAQ | Wandel:Pfad',
  description: 'Antworten auf die wichtigsten Fragen zu Passung, Format und Ablauf der Arbeit.'
};

export default function FAQPage() {
  return (
    <div className="bg-background px-6 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-5xl space-y-12">
        <SectionHeading title="FAQ" description="Klare Antworten auf häufige Fragen, damit du dich sicher fühlen kannst." className="max-w-2xl" />

        <div className="rounded-[2rem] border border-border bg-white p-10 shadow-soft">
          <p className="text-sm uppercase tracking-[0.3em] text-muted">Wichtig</p>
          <h2 className="mt-4 text-3xl font-semibold text-text">Ist das Therapie?</h2>
          <p className="mt-5 text-base leading-8 text-[#504B44]">Meine Arbeit ist keine Psychotherapie im heilkundlichen Sinne. Sie ist körper- und prozessorientiert und kann in Phasen von Stress, Erschöpfung oder Veränderung stützen.</p>
        </div>

        <div className="space-y-6">
          <FAQAccordion items={faqItems} />
        </div>
      </div>
    </div>
  );
}
