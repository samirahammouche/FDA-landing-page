import Link from "next/link";
import ContactForm from "./ContactForm";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gradient-to-br from-[#075B91] to-[#0B3C80] px-0 pb-4 pt-7 text-white dark:from-[#050D1C] dark:to-[#0A2545] sm:px-[210px] sm:pt-4"
    >
      <div className="mx-auto grid w-[268px] max-w-full grid-cols-1 gap-8 text-left sm:w-auto sm:max-w-[1200px] sm:grid-cols-4 sm:gap-5">
        {/* Brand */}
        <section aria-labelledby="footer-brand">
          <div className="flex justify-center sm:justify-start">
            <Link href="/" className="inline-block">
              <img
                src="/assets/datapilot_logo.svg"
                alt="DataPilot"
                className="h-[32px] w-auto"
              />
            </Link>
          </div>
          <h2 id="footer-brand" className="sr-only">
            About DataPilot
          </h2>
          <p className="mx-auto mt-4 max-w-[268px] text-[20px] font-semibold leading-[1.45] text-white sm:mx-0 sm:max-w-[250px] sm:text-[20px]">
            Powerful analytics and intelligent insights to help modern teams
            understand their data and move forward with confidence.
          </p>
        </section>

        {/* Quick Links */}
        <section aria-labelledby="quick-links">
          <h2
            id="quick-links"
            className="text-left text-[25px] font-bold text-dp-navy sm:text-[30px]"
          >
            Quick Links
          </h2>
          <nav aria-label="Footer navigation">
            <ul className="mt-0.5 space-y-0.5 text-left text-[18px] font-semibold text-white sm:text-[25px]">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white">
                  Services
                </Link>
              </li>
            </ul>
          </nav>
        </section>

        {/* Our Services*/}
        <section aria-labelledby="our-services">
          <h2
            id="our-services"
            className="text-left text-[25px] font-bold text-dp-navy sm:text-[30px]"
          >
            Our Services
          </h2>
          <ul className="mt-0.5 space-y-0.5 text-left text-[18px] font-semibold text-white sm:text-[25px]">
            <li>Data Integration</li>
            <li>Data Analytics</li>
            <li>Smart Reporting</li>
          </ul>
        </section>

        {/* Contact */}
        <section aria-labelledby="contact-title">
          <h2
            id="contact-title"
            className="text-left text-[25px] font-bold text-dp-navy sm:text-[30px]"
          >
            Contact Us
          </h2>
          <address className="mt-2 not-italic text-[17px] font-semibold leading-[1.5] text-white sm:text-[25px]">
            <p className="flex items-center gap-2.5">
              <svg
                className="h-5 w-5 flex-shrink-0 text-dp-navy sm:h-6 sm:w-6"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.2.48 2.5.74 3.83.74a1 1 0 011 1V20a1 1 0 01-1 1C9.39 21 3 14.61 3 6a1 1 0 011-1h3.5a1 1 0 011 1c0 1.33.26 2.63.74 3.83a1 1 0 01-.21 1.11l-2.2 2.2z" />
              </svg>
              <span>+1 (555) 014-7823</span>
            </p>
            <p className="mt-4 flex items-center gap-2.5">
              <svg
                className="h-5 w-5 flex-shrink-0 text-dp-navy sm:h-6 sm:w-6"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M2 6.5A2.5 2.5 0 014.5 4h15A2.5 2.5 0 0122 6.5v11A2.5 2.5 0 0119.5 20h-15A2.5 2.5 0 012 17.5v-11zM4.5 6L12 11l7.5-5" />
              </svg>
              <span>hi@datapilot.example</span>
            </p>
          </address>
        </section>

        {/* Contact Form  spans full width */}
        <section
          aria-labelledby="contact-form-title"
          className="col-span-1 sm:col-span-4"
        >
          <h2 id="contact-form-title" className="sr-only">
            Contact Form
          </h2>
          <ContactForm />
        </section>
      </div>

      {/* Divider */}
      <div className="mt-8 border-t border-white/60 pt-3">
        <p className="text-center text-[18px] text-white/70 sm:text-[25px]">
          © 2026 DataPilot. All rights reserved.
        </p>
      </div>
    </footer>
  );
}