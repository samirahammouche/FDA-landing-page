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
  metadataBase: new URL("http://localhost:3000"),
  title: "DataPilot — Turn Your Company Data Into Answers",
  description:
    "DataPilot turns company data into clear, actionable insights.",
  openGraph: {
    title: "DataPilot — Turn Your Company Data Into Answers",
    description: "DataPilot turns company data into clear, actionable insights.",
    type: "website",
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