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
          <details key={item.question} open={open} className="group border-t border-text/[0.08] py-6 last:border-b last:border-text/[0.06] sm:py-9">
            <summary
              onClick={(event) => {
                event.preventDefault();
                setOpenIndex(open ? null : index);
              }}
              className="grid min-h-12 cursor-pointer list-none grid-cols-[1.45rem_minmax(0,1fr)_1.35rem] items-start gap-3 text-left transition-colors duration-500 marker:hidden sm:grid-cols-[2.5rem_minmax(0,1fr)_1.5rem] sm:gap-6 [&::-webkit-details-marker]:hidden"
            >
              <span className="pt-1 text-[0.58rem] uppercase leading-5 tracking-[0.24em] text-muted/62 sm:text-[0.62rem] sm:tracking-[0.3em]">{String(index + 1).padStart(2, '0')}</span>
              <span className="font-serif text-[1.35rem] font-medium leading-[1.12] tracking-normal text-text transition-colors duration-500 group-hover:text-[#3A322A] sm:text-3xl sm:leading-tight">
                {item.question}
              </span>
              <ChevronDown className={`mt-2 h-4 w-4 shrink-0 justify-self-end text-muted/72 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${open ? 'rotate-180' : ''}`} />
            </summary>
            <div className="mt-4 grid gap-4 sm:mt-5 sm:grid-cols-[2.5rem_minmax(0,1fr)_1.5rem] sm:gap-6">
              <div className="hidden sm:block" />
              <p className="max-w-2xl text-[0.98rem] leading-8 text-[#504B44] sm:text-base">{item.answer}</p>
            </div>
          </details>
        );
      })}
    </div>
  );
}
