"use client";

import { useId, useState } from "react";

type AccordionItemData = {
  question: string;
  answer: string;
};

export function Accordion({ items }: { items: AccordionItemData[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col divide-y divide-foreground/10 border-t border-b border-foreground/10">
      {items.map((item, i) => (
        <AccordionItem
          key={item.question}
          question={item.question}
          answer={item.answer}
          open={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          index={i}
        />
      ))}
    </div>
  );
}

function AccordionItem({
  question,
  answer,
  open,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
  index: number;
}) {
  const id = useId();

  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={id}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="flex items-baseline gap-4">
          <span className="text-sm text-muted">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-display text-xl sm:text-2xl">
            {question}
          </span>
        </span>
        <span
          aria-hidden="true"
          className={`shrink-0 text-2xl text-accent transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        id={id}
        className={`grid overflow-hidden transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <p className="max-w-2xl pb-6 pl-11 text-muted">{answer}</p>
        </div>
      </div>
    </div>
  );
}
