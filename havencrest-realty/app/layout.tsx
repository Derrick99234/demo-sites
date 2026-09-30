import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.havencrestrealty.ng"),
  title: "Havencrest Realty & Developments | Luxury Properties & Verified Land — Lekki, Lagos",
  description: "Verified luxury duplexes, waterfront shortlets, and prime commercial land with guaranteed Governor's Consent & C of O in Lekki Phase 1, Ikoyi, and Epe.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Havencrest Realty & Developments — Lekki, Lagos",
    description: "Verified Lagos Real Estate with Guaranteed Legal Title. Consult with property advisor Tari on WhatsApp.",
    images: ["/media/lekki_waterfront_estate.jpg"],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${plusJakarta.variable} dark`}>
      <body className="min-h-screen bg-[#060b19] text-[#ffffff] antialiased selection:bg-[#d4af37]/30 selection:text-[#ffffff]">
        {children}
        {/* Receptionist Widget integration container */}
        <div id="onerep-widget-container" />
      </body>
    </html>
  );
}
