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
  metadataBase: new URL("https://www.theurbangrill.ng"),
  title: "The Urban Grill & Lounge | Contemporary Steakhouse, Seafood & Cocktail Lounge — Ikeja GRA, Lagos",
  description: "Fire-kissed steaks, whole ocean croaker platters, handcrafted cocktails, and vibrant nightlife at 42 Isaac John Street, Ikeja GRA. Reserve your table via WhatsApp.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "The Urban Grill & Lounge — Ikeja GRA, Lagos",
    description: "Wood-Fired Perfection Meets Electric Lagos Nights. Reserve a table or VIP lounge with digital maitre d' Kayla.",
    images: ["/media/restaurant_dining_room.jpg"],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${plusJakarta.variable} dark`}>
      <body className="min-h-screen bg-[#0b0d13] text-[#f8fafc] antialiased selection:bg-[#ea580c]/30 selection:text-[#f8fafc]">
        {children}
        {/* Receptionist Widget integration container */}
        <div id="onerep-widget-container" />
      </body>
    </html>
  );
}
