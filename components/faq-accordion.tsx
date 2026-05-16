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
    <div className="space-y-4">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <details key={item.question} open={open} className="rounded-[2rem] border border-border bg-white px-6 py-5 shadow-soft">
            <summary
              onClick={(event) => {
                event.preventDefault();
                setOpenIndex(open ? null : index);
              }}
              className="flex cursor-pointer items-center justify-between gap-4 text-left text-lg font-semibold text-text"
            >
              {item.question}
              <ChevronDown className={`h-5 w-5 transition-transform ${open ? 'rotate-180' : ''}`} />
            </summary>
            <div className="mt-4 text-base leading-8 text-[#504B44]">{item.answer}</div>
          </details>
        );
      })}
    </div>
  );
}
