import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FooterSection from "@/components/sections/FooterSection";
import Cursor from "@/components/Cursor";
import Navigation from "@/components/sections/Navigation";
import { Analytics } from "@vercel/analytics/react"
import HeroSection from "@/components/sections/HeroSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SPA-Esports",
  description: "Hecha por Odiador",
  keywords: ["Esports", "SPA", "cafesports.club", "odiador.dev"],
  openGraph: {
    title: "SPA-Esports",
    description: "Hecha por Odiador",
    url: "https://esports.odiador.dev",
    siteName: "esports.odiador.dev",
    images: [
      {
        url: "https://esports.odiador.dev/logo.png",
        width: 325,
        height: 325,
        alt: "esports.odiador.dev - SPA-Esports",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" style={{ scrollBehavior: 'smooth' }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <Analytics />
        <h1 className="hidden">SPA-Esports</h1>
        <div className="flex flex-col justify-between min-h-screen">
          <Navigation />
          <HeroSection/>
          <div className="flex-1 flex flex-col z-10">{children}</div>
          <Cursor />
          <FooterSection />
        </div>
      </body>
    </html>
  );
}
