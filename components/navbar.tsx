"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./themeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute left-0 right-0 top-0 z-30">
      <nav
        className="relative mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6 sm:px-8 lg:px-12"
        aria-label="Main navigation"
      >
        <Link href="/" aria-label="DataPilot home" className="block">
          <img
            src="/assets/datapilot_logo.svg"
            alt="DataPilot"
            className="h-[32px] w-auto"
          />
        </Link>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 sm:hidden">
          <ThemeToggle />
          <button
            id="mobile-menu-button"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-md p-2"
          >
            <span className="sr-only">Open main menu</span>
            <img
              src="/assets/menu.svg"
              alt="Menu"
              aria-hidden="true"
              className="h-10 w-10"
            />
          </button>
        </div>

        {/* Desktop nav */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-20 text-[30px] text-white sm:flex">
          <li>
            <Link href="/" className="transition-opacity hover:opacity-70">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="transition-opacity hover:opacity-70">
              About
            </Link>
          </li>
          <li>
            <Link href="/#services" className="transition-opacity hover:opacity-70">
              Services
            </Link>
          </li>
          <li>
            <Link href="/#faq" className="transition-opacity hover:opacity-70">
              FAQ
            </Link>
          </li>
        </ul>

        <div className="hidden items-center gap-4 sm:flex">
          <ThemeToggle />
          <Link
            href="/#contact"
            className="rounded-full bg-dp-navy px-4 py-2.5 font-semibold text-white shadow-md transition hover:brightness-110 sm:px-5 sm:text-[20px]"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`absolute right-6 top-16 z-40 w-[200px] rounded-2xl bg-white shadow-md dark:border dark:border-white/10 dark:bg-[#0B1526] sm:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="mx-auto max-w-[1200px] px-6 py-4">
          <ul className="space-y-3">
            <li>
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="block font-semibold text-dp-yellow"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="block font-semibold text-dp-yellow"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/#services"
                onClick={() => setIsOpen(false)}
                className="block font-semibold text-dp-yellow"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/#faq"
                onClick={() => setIsOpen(false)}
                className="block font-semibold text-dp-yellow"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="inline-block w-[140px] rounded-full bg-dp-navy px-4 py-2 text-center text-[12px] font-bold text-white"
              >
                Sign Up
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={() => {
                  const html = document.documentElement;
                  const isDark = html.classList.toggle("dark");
                  localStorage.setItem("theme", isDark ? "dark" : "light");
                }}
                className="flex items-center gap-2 font-semibold text-dp-yellow"
              >
                <svg
                  className="h-4 w-4 dark:hidden"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                </svg>
                <svg
                  className="hidden h-4 w-4 dark:block"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
                <span>Dark Mode</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}