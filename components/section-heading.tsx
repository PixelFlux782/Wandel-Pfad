import * as React from 'react';

interface SectionHeadingProps {
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeading({ title, description, className }: SectionHeadingProps) {
  return (
    <div className={className}>
      <p className="text-xs uppercase tracking-[0.32em] text-muted">{title}</p>
      {description ? <p className="mt-4 max-w-2xl text-lg leading-8 text-[#443F39]">{description}</p> : null}
    </div>
  );
}
