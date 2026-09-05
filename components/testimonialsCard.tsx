interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  quote: string;
  imageSrc: string;
}

export default function TestimonialCard({
  name,
  role,
  company,
  quote,
  imageSrc,
}: TestimonialCardProps) {
  return (
    <article className="w-full min-w-[300px] rounded-[3px] bg-[#F5F7F8] p-2.5 dark:bg-[#132038]">
      <div className="flex items-start justify-between">
        <img
          src={imageSrc}
          alt={name}
          width={64}
          height={64}
          loading="lazy"
          className="h-16 w-16 rounded-full object-cover"
        />
        <span className="ml-auto mt-3 flex h-[20px] w-[110px] items-center justify-center overflow-hidden rounded-full bg-dp-navy text-[15px] font-semibold leading-none text-white dark:bg-dp-navy">
          {company}
        </span>
      </div>

      <div className="mt-3 text-2xl font-bold text-dp-navy dark:text-white">
        &ldquo;
      </div>
      <div
        className="mt-1.5 text-[16px] tracking-[1px] text-black dark:text-dp-yellow"
        aria-label="5 out of 5 stars"
      >
        ★★★★★
      </div>
      <p className="mt-0.5 text-[18px] leading-[1.35] text-[#243B5A] dark:text-white/90">
        {quote}
      </p>
      <span className="ml-auto px-1.5 py-0.5 text-[25px] font-semibold text-dp-navy/80 dark:text-white">
        {name}
      </span>
      <p className="mt-1 text-[18px] text-dp-navy/80 dark:text-[#a2b6c4]">
        {role} · {company}
      </p>
    </article>
  );
}