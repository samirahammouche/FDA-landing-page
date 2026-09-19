"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function ExplorerNavbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-700 dark:bg-[#0B1526]/80">
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-7 sm:px-10">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/datapilot_logo.svg"
            alt="DataPilot"
            width={1935}
            height={355}
            className="h-[32px] w-auto"
          />
        </Link>

        <Button variant="yellow" className="rounded-xl px-5 py-2.5 text-sm font-semibold shadow-none hover:opacity-90 hover:brightness-100">
          Upgrade Plan
        </Button>
      </div>
    </header>
  );
}