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
  metadataBase: new URL("https://www.pearldental.ng"),
  title: "Pearl Dental & Aesthetic Clinic | Cosmetic Dentistry & Clear Aligners — Ikeja, Lagos",
  description: "Painless 1-hour laser teeth whitening, invisible clear aligners, and gentle aesthetic dentistry at 15 Opebi Road, Ikeja. MDCN accredited with 24/7 WhatsApp concierge.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Pearl Dental & Aesthetic Clinic — Ikeja, Lagos",
    description: "The Modern Dental Experience You've Always Deserved. Book your consultation on WhatsApp with Ada.",
    images: ["/media/clinic_reception.jpg"],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${plusJakarta.variable} dark`}>
      <body className="min-h-screen bg-[#070f1e] text-[#ffffff] antialiased selection:bg-[#00a9ff]/30 selection:text-[#ffffff]">
        {children}
        {/* Receptionist Widget integration container */}
        <div id="onerep-widget-container" />
      </body>
    </html>
  );
}
