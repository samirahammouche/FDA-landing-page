import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DataPilot",
  description: "DataPilot — Turn Your Company Data Into Answers.",
  openGraph: {
    title: "DataPilot ",
    description: "Description de ton produit ou service.",
    url: "https://fda-landing-page.vercel.app/",
    siteName: "DataPilot",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DataPilot analytics platform",
      },
    ],
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection>
          <FeaturesSection />
        </HeroSection>
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}