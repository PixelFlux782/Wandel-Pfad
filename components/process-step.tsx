interface ProcessStepProps {
  step: string;
  detail: string;
  index?: number;
}

export function ProcessStep({ step, detail, index = 0 }: ProcessStepProps) {
  return (
    <article className="relative border-t border-text/[0.08] py-9 sm:py-11">
      <div className="grid gap-5 sm:grid-cols-[4rem_minmax(9rem,0.34fr)_minmax(0,0.66fr)] sm:gap-8 lg:gap-12">
        <p className="text-[0.64rem] uppercase leading-5 tracking-[0.32em] text-muted/68">{String(index + 1).padStart(2, '0')}</p>
        <h3 className="font-serif text-3xl font-medium leading-tight tracking-normal text-text sm:text-4xl">{step}</h3>
        <p className="max-w-2xl text-base leading-8 text-[#504B44]">{detail}</p>
      </div>
    </article>
  );
}
