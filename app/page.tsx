import Navbar from "@/components/navbar";
import HeroSection from "@/components/heroSection";
import FeaturesSection from "@/components/featuresSection";
import TestimonialsSection from "@/components/testimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DataPilot",
  description: "DataPilot — Turn Your Company Data Into Answers.",
  openGraph: {
    title: "DataPilot ",
    description: "Description de ton produit ou service.",
    url: "https://fda-landing-page.vercel.app/",        // Vercel
    siteName: "DataPilot",
    images: [
      {
        url: "/og-image.jpg",                 
        width: 1200,
        height: 630,
        alt: "Aperçu de mon site",
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