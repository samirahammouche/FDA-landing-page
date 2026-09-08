import Link from "next/link";
import { ReactNode } from "react";

interface HeroSectionProps {
  children?: ReactNode;
}

export default function HeroSection({ children }: HeroSectionProps) {
  return (
    <section
      id="about"
      aria-labelledby="hero-title"
      className="relative min-h-[560px] overflow-hidden pt-10 text-white"
    >
      {/* Light hero background */}
      <img
        src="/assets/light_hero_img.jpg"
        srcSet="/assets/light_hero_img.jpg 500w, /assets/light_hero_img.jpg 1000w, /assets/light_hero_img.jpg 1500w"
        sizes="(max-width: 768px) 100vw, 1465px"
        alt="light mode hero image"
        width={1920}
        height={1080}
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center dark:hidden"
      />
      {/* Dark hero background */}
      <img
        src="/assets/dark_hero_img.jpg"
        srcSet="/assets/dark_hero_img.jpg 500w, /assets/dark_hero_img.jpg 1000w, /assets/dark_hero_img.jpg 1500w"
        sizes="(max-width: 768px) 100vw, 1465px"
        alt="dark mode hero image"
        width={1920}
        height={1080}
        aria-hidden="true"
        className="absolute inset-0 hidden h-full w-full object-cover object-center dark:block"
      />
      <div className="absolute inset-0 bg-transparent" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-[1000px] px-7 pb-12 pt-[98px] sm:px-10 sm:pt-[110px] lg:px-[10%]">
        <div className="mx-auto w-full max-w-[340px] text-left sm:max-w-[900px] sm:text-left">
          <h1
            id="hero-title"
            className="text-[42px] font-bold leading-[1.1] tracking-tight text-dp-navy dark:text-white sm:text-[48px] lg:text-[52px]"
          >
            Turn Your Company Data Into
            <span className="mt-1 block text-dp-yellow">
              Answers Instantly!
            </span>
          </h1>

          <p className="mt-5 max-w-[550px] text-[18px] font-bold leading-[1.35] text-[#F1F5F9]/[64%]">
            Skip the spreadsheets. DataPilot analyzes your company data
            automatically and delivers clear, actionable insights.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="/explorer"
              className="inline-flex h-[70px] w-[300px] items-center justify-center rounded-full bg-dp-navy px-7 text-[30px] font-bold text-white shadow-lg transition hover:-translate-y-0.5 sm:h-[50px] sm:px-8 sm:text-[30px]"
            >
              Start For Free
            </Link>
          </div>
        </div>

        {/* FeaturesSection est rendu ici, à l'intérieur du hero */}
        {children}
      </div>
    </section>
  );
}