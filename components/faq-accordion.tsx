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
    <div className="space-y-0 border-y border-text/12">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <details key={item.question} open={open} className="group border-b border-text/12 px-0 py-7 last:border-b-0 sm:py-8">
            <summary
              onClick={(event) => {
                event.preventDefault();
                setOpenIndex(open ? null : index);
              }}
              className="flex cursor-pointer items-center justify-between gap-6 text-left font-serif text-[1.65rem] font-medium leading-tight tracking-normal text-text transition-colors duration-500 group-hover:text-[#3A322A] sm:text-3xl"
            >
              {item.question}
              <ChevronDown className={`h-5 w-5 shrink-0 text-muted transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${open ? 'rotate-180' : ''}`} />
            </summary>
            <div className="mt-6 max-w-3xl text-base leading-8 text-[#504B44]">{item.answer}</div>
          </details>
        );
      })}
    </div>
  );
}
