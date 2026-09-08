"use client";

import Link from "next/link";

export default function ExplorerNavbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-700 dark:bg-[#0B1526]/80">
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-7 sm:px-10">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/assets/datapilot_logo.svg"
            alt="DataPilot"
            className="h-[32px] w-auto"
          />
        </Link>

        <button className="rounded-xl bg-dp-yellow px-5 py-2.5 text-sm font-semibold text-dp-navy transition hover:opacity-90">
          Upgrade Plan
        </button>
      </div>
    </header>
  );
}