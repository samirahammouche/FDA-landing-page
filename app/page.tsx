import Navbar from "@/components/navbar";
import HeroSection from "@/components/heroSection";
import FeaturesSection from "@/components/featuresSection";
import TestimonialsSection from "@/components/testimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/footer";

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