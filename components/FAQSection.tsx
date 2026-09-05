"use client";

import { useState } from "react";
import FAQItem from "./FAQItems";

const faqs = [
  {
    question: "How does DataPilot connect to my data?",
    answer:
      "DataPilot connects securely to your existing tools and databases through simple, guided integrations — no code required.",
  },
  {
    question: "Do I need a technical background to use it?",
    answer:
      "Not at all. DataPilot is built for business teams, not engineers — insights are generated automatically and explained in plain language.",
  },
  {
    question: "Is my company's data secure?",
    answer:
      "Yes. All connections are encrypted, and your data is never shared with third parties.",
  },
  {
    question: "Can I cancel my plan at any time?",
    answer:
      "Yes, you can upgrade, downgrade, or cancel your plan at any time with no long-term commitment.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="bg-white px-7 py-10 dark:bg-[#0B1526] sm:px-10"
    >
      <div className="mx-auto max-w-[800px]">
        <h2
          id="faq-title"
          className="text-center text-[30px] font-bold leading-none text-dp-navy dark:text-white sm:text-[36px]"
        >
          Frequently Asked Questions
        </h2>

        <div className="mt-8 space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}