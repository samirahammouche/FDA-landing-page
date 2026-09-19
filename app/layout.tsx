import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});


export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "DataPilot — Turn Your Company Data Into Answers",
    template: "%s | DataPilot",
  },
  description: "DataPilot turns company data into clear, actionable insights.",
  openGraph: {
    title: "DataPilot — Turn Your Company Data Into Answers",
    description: "DataPilot turns company data into clear, actionable insights.",
    url: "https://fda-landing-page.vercel.app/",
    siteName: "DataPilot",
    type: "website",
    images: [
      {
        url: "assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "DataPilot — Turn Your Company Data Into Answers",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}