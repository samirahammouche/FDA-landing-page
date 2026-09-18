import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0B1526]">
      <Navbar />
      <main className="flex-grow px-7 py-16 sm:px-10">
        <div className="relative z-10 mx-auto max-w-[1000px] px-7 pb-12 pt-[98px] sm:px-10 sm:pt-[110px] lg:px-[10%]">
          <Link
            href="/"
            className="inline-flex items-center text-dp-navy dark:text-dp-yellow hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-dp-navy dark:text-white mb-6">
            About DataPilot
          </h1>

          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-dp-navy/80 dark:text-gray-300 mb-6">
              DataPilot is an intelligent analytics platform designed to help
              modern teams understand their data without the complexity of
              traditional business intelligence tools.
            </p>

            <h2 className="text-2xl font-bold text-dp-navy dark:text-white mt-8 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-dp-navy/80 dark:text-gray-300 mb-6">
              We believe every team deserves access to powerful insights. Our
              AI-driven platform connects to your existing data sources and
              automatically generates actionable reports — no coding required.
            </p>

            <h2 className="text-2xl font-bold text-dp-navy dark:text-white mt-8 mb-4">
              Why Choose DataPilot?
            </h2>
            <ul className="list-disc list-inside space-y-2 text-dp-navy/80 dark:text-gray-300 mb-6">
              <li>Seamless integration with your existing tools</li>
              <li>AI-powered insights in plain language</li>
              <li>Bank-grade security and encryption</li>
              <li>Designed for business teams, not just data scientists</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}