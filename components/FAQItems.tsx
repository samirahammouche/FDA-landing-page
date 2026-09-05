"use client";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export default function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="rounded-[3px] border border-dp-card/60 bg-dp-light dark:border-white/10 dark:bg-[#132038]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between px-5 py-4 text-left text-[18px] font-semibold text-dp-navy dark:text-white sm:text-[20px]"
      >
        <span>{question}</span>
        <span className="ml-4 text-dp-yellow" aria-hidden="true">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      <div
        aria-hidden={!isOpen}
        className="overflow-hidden px-5 text-[16px] leading-[1.5] text-dp-navy/80 transition-[max-height,opacity,padding] duration-300 ease-in-out dark:text-white/70 sm:text-[18px]"
        style={{
          maxHeight: isOpen ? "500px" : "0",
          opacity: isOpen ? 1 : 0,
          paddingBottom: isOpen ? "16px" : "0",
        }}
      >
        {answer}
      </div>
    </div>
  );
}