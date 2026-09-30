import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.auraluxespa.com"),
  title: "Aura Luxe Studio & Medspa | Luxury Salon, Lashes & Medspa — Ikeja GRA, Lagos",
  description: "Elevated beauty and seamless care in Ikeja GRA. Bespoke knotless braids, Russian volume lashes, medical-grade hydrafacials, and therapeutic massage. 24/7 WhatsApp concierge.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Aura Luxe Studio & Medspa — Ikeja GRA, Lagos",
    description: "Where Lagos Comes for Effortless Luxury & Flawless Care. Book your chair with our digital concierge Maya.",
    images: ["/media/salon_interior.jpg"],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${plusJakarta.variable} dark`}>
      <body className="min-h-screen bg-[#0f0e0d] text-[#faf8f5] antialiased selection:bg-[#c5a880]/30 selection:text-[#faf8f5]">
        {children}
        {/* Receptionist Widget integration container */}
        <div id="onerep-widget-container" />
      </body>
    </html>
  );
}
