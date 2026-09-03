import Navbar from "@/components/navbar";
import HeroSection from "@/components/heroSection";
import TestimonialsSection from "@/components/testimonialsCard";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}