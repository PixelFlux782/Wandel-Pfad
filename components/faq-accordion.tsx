'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-0">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <details key={item.question} open={open} className="group border-t border-text/[0.08] py-7 last:border-b last:border-text/[0.06] sm:py-9">
            <summary
              onClick={(event) => {
                event.preventDefault();
                setOpenIndex(open ? null : index);
              }}
              className="grid cursor-pointer list-none grid-cols-[1.75rem_minmax(0,1fr)_1.5rem] items-start gap-4 text-left transition-colors duration-500 marker:hidden sm:grid-cols-[2.5rem_minmax(0,1fr)_1.5rem] sm:gap-6 [&::-webkit-details-marker]:hidden"
            >
              <span className="pt-1 text-[0.62rem] uppercase leading-5 tracking-[0.3em] text-muted/62">{String(index + 1).padStart(2, '0')}</span>
              <span className="font-serif text-[1.6rem] font-medium leading-tight tracking-normal text-text transition-colors duration-500 group-hover:text-[#3A322A] sm:text-3xl">
                {item.question}
              </span>
              <ChevronDown className={`mt-2 h-4 w-4 shrink-0 justify-self-end text-muted/72 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${open ? 'rotate-180' : ''}`} />
            </summary>
            <div className="mt-5 grid gap-4 sm:grid-cols-[2.5rem_minmax(0,1fr)_1.5rem] sm:gap-6">
              <div className="hidden sm:block" />
              <p className="max-w-2xl text-base leading-8 text-[#504B44]">{item.answer}</p>
            </div>
          </details>
        );
      })}
    </div>
  );
}
