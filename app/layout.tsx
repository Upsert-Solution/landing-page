import type { Metadata } from "next";
import "./globals.css";

import { fontBody, fontDisplay } from "@/src/lib/fonts";
import { Footer, Header } from "@/src/components/layout";

export const metadata: Metadata = {
  title: "Upsert Solution",
  description:
    "Upsert builds clean, conversion-focused websites for clinics, salons, coaches & restaurants in the Philippines — delivered in 14 days. Get more inquiries starting today.",
  icons: {
    icon: "favicon.ico",
  },
  keywords: [
    // Service keywords
    "web design Philippines",
    "web design agency Philippines",
    "website design Philippines",
    "affordable website design Philippines",
    "web design services Philippines",
    "professional website Philippines",
    "business website Philippines",
    "landing page design Philippines",
    "website redesign Philippines",

    // Location-specific
    "web design Baguio",
    "web design Manila",
    "web design Cebu",
    "web design Davao",
    "website developer Philippines",
    "freelance web designer Philippines",

    // Niche-specific
    "website for clinic Philippines",
    "website for salon Philippines",
    "website for fitness coach Philippines",
    "website for restaurant Philippines",
    "website for small business Philippines",
    "website for service business Philippines",

    // Outcome keywords
    "get more inquiries website",
    "conversion focused website",
    "website that converts visitors",
    "professional website for business",
    "website to get more clients",
    "14 day website delivery",
    "fast website design",

    // Brand
    "Upsert",
    "Upsert web design",
    "upsert.ph",
  ],

  authors: [{ name: "Upsert Solution", url: "https://upsertsolution.com" }],
  creator: "Upsert Solution",
  publisher: "Upsert Solution",

  openGraph: {
    type: "website",
    url: "https://upsertsolution.com",
    siteName: "Upsert Solution",
    title: "Upsert Solution | Websites That Turn Visitors Into Customers",
    description:
      "We build clean, conversion-focused websites for service businesses in the Philippines — delivered in 14 days. Clinics, salons, coaches & restaurants.",
    locale: "en_PH",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "Web Design & Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontBody.variable} ${fontDisplay.variable} h-full antialiased`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="px-4 sm:px-6 lg:px-8 pt-25 max-w-400 mx-auto flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
