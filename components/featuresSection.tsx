import FeatureCard from "./featureCard";

const features = [
  {
    title: "Connect Your Data",
    description:
      "Bring all your business data into one place with simple, secure connections.",
    iconSrc: "/assets/database-zap.svg",
    iconAlt: "Connect Your Data",
  },
  {
    title: "Powerful Analytics",
    description:
      "Turn complex data into clear, actionable insights with AI-powered analytics.",
    iconSrc: "/assets/chart-no-axes-combined (1).svg",
    iconAlt: "Powerful Analytics",
  },
  {
    title: "Smart Insights",
    description:
      "Discover important trends and understand what your numbers are telling you.",
    iconSrc: "/assets/sparkles (1).svg",
    iconAlt: "Smart Insights",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="services"
      aria-labelledby="features-title"
      className="mt-[42px] sm:mt-[44px] lg:mt-[38px]"
    >
      <div className="text-left">
        <h2
          id="features-title"
          className="font-poppins text-[20px] font-bold leading-tight text-dp-navy dark:text-white sm:text-[23px] lg:text-[40px]"
        >
          Everything You Need to Understand Your Data
        </h2>
        <p className="mt-0.5 pb-[60px] text-[16px] font-medium text-dp-navy dark:text-[#F1F5F9]/[64%] sm:text-[9px] lg:text-[20px]">
          Powerful AI features built for modern teams
        </p>
      </div>

      <div className="features-grid mx-auto max-w-[1000px] justify-items-stretch gap-10">
        {features.map((f, i) => (
          <FeatureCard
            key={i}
            title={f.title}
            description={f.description}
            iconSrc={f.iconSrc}
            iconAlt={f.iconAlt}
          />
        ))}
      </div>
    </section>
  );
}