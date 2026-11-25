import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { COMPANY } from "@/data/company";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.wiseminds.in"),
  title: {
    default: "WISEMINDS Business Consulting LLP | Transforming Purpose into Sustainable Growth",
    template: "%s | WISEMINDS Business Consulting LLP",
  },
  description:
    "WISEMINDS Business Consulting LLP (WBC) empowers MSMEs and startups with accessible, affordable, and structured consulting solutions. Process Consulting, Startup Mentoring, Executive Coaching, and cross-sector growth in India.",
  keywords: [
    "MSME Business Consulting",
    "Startup Mentoring India",
    "Process Consulting",
    "Executive Coaching",
    "Business Growth Consulting",
    "WISEMINDS Business Consulting LLP",
    "WBC Consulting",
    "SOP Development",
    "Rurban Development",
    "Renewable Energy CBG Consulting",
    "Q-Commerce Supply Chain",
    "MSME ESG Consulting",
  ],
  authors: [{ name: COMPANY.name }],
  creator: COMPANY.name,
  publisher: COMPANY.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "WISEMINDS Business Consulting LLP — Purpose. Process. Practice.",
    description:
      "Accessible, affordable, and structured consulting solutions designed to build stronger businesses, effective leadership, and sustainable profitability.",
    url: "https://www.wiseminds.in",
    siteName: "WISEMINDS Business Consulting LLP",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ConsultingCompany",
    name: COMPANY.name,
    alternateName: ["WBC", "WISEMINDS"],
    url: "https://www.wiseminds.in",
    logo: "https://www.wiseminds.in/images/official-logo.jpg",
    description: COMPANY.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${COMPANY.contact.address.line1}, ${COMPANY.contact.address.line2}`,
      addressLocality: COMPANY.contact.address.city,
      addressRegion: COMPANY.contact.address.state,
      postalCode: COMPANY.contact.address.postalCode,
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: COMPANY.contact.phone,
      contactType: "customer service",
      availableLanguage: ["English", "Tamil", "Hindi"],
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo-mark.png" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-[#0B1739] antialiased selection:bg-[#F4C430] selection:text-[#0B1739]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
