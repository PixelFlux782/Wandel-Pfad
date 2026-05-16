interface SectionHeadingProps {
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeading({ title, description, className }: SectionHeadingProps) {
  return (
    <div className={className}>
      <p className="eyebrow">{title}</p>
      {description ? <p className="mt-7 max-w-3xl font-serif text-[clamp(2rem,5vw,4.9rem)] font-medium leading-[1.02] tracking-normal text-[#2D2923] sm:leading-[0.98]">{description}</p> : null}
    </div>
  );
}
