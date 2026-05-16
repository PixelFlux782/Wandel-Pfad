interface ProcessStepProps {
  step: string;
  detail: string;
}

export function ProcessStep({ step, detail }: ProcessStepProps) {
  return (
    <div className="relative border-t border-text/12 py-8 sm:py-9">
      <div className="grid gap-4 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-8">
        <p className="eyebrow">{step}</p>
        <p className="max-w-xl text-base leading-8 text-[#504B44]">{detail}</p>
      </div>
    </div>
  );
}
