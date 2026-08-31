import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";
import { WordmarkPinProvider } from "@/lib/wordmark-pin-context";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: "variable",
  axes: ["SOFT", "WONK", "opsz"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "KHOV Group",
  description:
    "Technology consulting for small and mid-size businesses in the Washington DC area.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-canvas flex flex-col">
        <WordmarkPinProvider>
          <TopNav />
          <main className="flex-1">{children}</main>
          <Footer />
        </WordmarkPinProvider>
      </body>
    </html>
  );
}
