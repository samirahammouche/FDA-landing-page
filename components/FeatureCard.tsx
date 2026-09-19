interface FeatureCardProps {
  title: string;
  description: string;
  iconSrc: string;
  iconAlt: string;
}

export default function FeatureCard({
  title,
  description,
  iconSrc,
  iconAlt,
}: FeatureCardProps) {
  return (
    <article className="min-h-[167px] rounded-[3px] border border-white/20 bg-white/20 p-4 text-center shadow-sm backdrop-blur-[2px]">
      <div className="flex justify-center">
        <img
          src={iconSrc}
          alt={iconAlt}
          width={24}
          height={24}
          aria-hidden="true"
          className="mb-1.5 h-6 w-6"
        />
      </div>
      <h3 className="text-[25px] font-bold text-dp-navy dark:text-white sm:text-[25px]">
        {title}
      </h3>
      <p className="mt-2 text-[18px] leading-[1.5] text-dp-navy/80 dark:text-[#F1F5F9]/[64%]">
        {description}
      </p>
    </article>
  );
}