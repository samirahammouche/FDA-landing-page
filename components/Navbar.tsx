"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  // Measure and animate — mirrors the FAQ accordion in script.js
  useEffect(() => {
    function updateHeight() {
      if (isOpen && menuRef.current) {
        setMaxHeight(menuRef.current.scrollHeight + "px");
      } else {
        setMaxHeight("0px");
      }
    }
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [isOpen]);

  useEffect(() => {
    function closeMenuOnDesktop() {
      if (window.innerWidth >= 640) setIsOpen(false);
    }

    function closeMenuOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen((open) => {
          if (open) document.getElementById("mobile-menu-button")?.focus();
          return false;
        });
      }
    }

    function closeMenuOutside(event: MouseEvent) {
      const target = event.target as Node;
      const menu = document.getElementById("mobile-menu");
      const button = document.getElementById("mobile-menu-button");
      if (menu && button && !menu.contains(target) && !button.contains(target)) {
        setIsOpen(false);
      }
    }

    window.addEventListener("resize", closeMenuOnDesktop);
    document.addEventListener("keydown", closeMenuOnEscape);
    document.addEventListener("click", closeMenuOutside);
    return () => {
      window.removeEventListener("resize", closeMenuOnDesktop);
      document.removeEventListener("keydown", closeMenuOnEscape);
      document.removeEventListener("click", closeMenuOutside);
    };
  }, []);

  return (
    <header className="absolute left-0 right-0 top-0 z-30">
      <nav
        className="relative mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6 sm:px-8 lg:px-12"
        aria-label="Main navigation"
      >
        <Link href="/" aria-label="DataPilot home" className="block">
          <Image
            src="/assets/datapilot_logo.svg"
            alt="DataPilot"
            width={1935}
            height={355}
            className="h-[32px] w-auto"
          />
        </Link>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 sm:hidden">

          <span className="hidden sm:inline-flex">
            <ThemeToggle />
          </span>
          <button
            id="mobile-menu-button"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-md p-2"
          >
            <span className="sr-only">Open main menu</span>
            <Image
              src="/assets/menu.svg"
              alt="Menu"
              aria-hidden="true"
              width={40}
              height={40}
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
        ref={menuRef}
        className="absolute right-6 top-16 z-40 w-[200px] rounded-2xl bg-white shadow-md dark:border dark:border-white/10 dark:bg-[#0B1526] sm:hidden"
        style={{
          maxHeight,
          overflow: "hidden",
          opacity: isOpen ? 1 : 0,
          paddingTop: isOpen ? "" : "0",
          paddingBottom: isOpen ? "" : "0",
          transition:
            "max-height 0.3s ease-in-out, opacity 0.25s ease-in-out, padding 0.3s ease-in-out",
        }}
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
            {/* Theme toggle now uses the real component */}
            <li>
              <ThemeToggle withLabel />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}