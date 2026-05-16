interface ProcessStepProps {
  step: string;
  detail: string;
}

export function ProcessStep({ step, detail }: ProcessStepProps) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-border bg-white p-6 shadow-soft">
      <div className="absolute inset-y-0 left-0 w-1 bg-accent/15" />
      <div className="relative ml-6 space-y-3">
        <p className="text-sm uppercase tracking-[0.26em] text-muted">{step}</p>
        <p className="text-base leading-8 text-[#504B44]">{detail}</p>
      </div>
    </div>
  );
}
