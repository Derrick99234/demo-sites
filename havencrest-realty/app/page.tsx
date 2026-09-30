"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Building2,
  Clock,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Star,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  FileCheck2,
  Video,
  KeyRound,
  Scale,
  Award,
  Compass,
  Home,
  Briefcase
} from "lucide-react";

interface Property {
  id: string;
  name: string;
  category: string;
  price: number;
  currency: string;
  location: string;
  title?: string;
  description: string;
  image: string;
  isAvailable: boolean;
}

const properties: Property[] = [
  {
    id: "prop_realty_001",
    name: "Contemporary 4-Bed Semi-Detached Duplex + BQ",
    category: "Residential Sales",
    price: 260000000,
    currency: "NGN",
    location: "Orchid Road, Lekki, Lagos",
    title: "Governor's Consent",
    description: "Brand new, architecturally designed 4-bedroom semi-detached duplex featuring en-suite rooms, fully fitted contemporary kitchen, stamped concrete compound, 4-car parking, smart video doorbell, and separate maids quarters (BQ). Ready for immediate occupancy.",
    image: "/products/4bed_semi_detached_duplex.jpg",
    isAvailable: true
  },
  {
    id: "prop_realty_002",
    name: "Ultra-Luxury 5-Bed Fully Detached Smart Mansion",
    category: "Luxury Mansions",
    price: 450000000,
    currency: "NGN",
    location: "Lekki Phase 1, Lagos",
    title: "Governor's Consent",
    description: "Exquisite 5-bedroom modern mansion with private infinity swimming pool, rooftop sky lounge, 8-seater cinema room, high-speed elevator, fully automated Control4 smart home automation, and 6-car garage.",
    image: "/products/smart_detached_mansion.jpg",
    isAvailable: true
  },
  {
    id: "prop_realty_003",
    name: "2-Bed Luxury Waterfront Shortlet Apartment",
    category: "Shortlets & Hospitality",
    price: 140000,
    currency: "NGN",
    location: "Admiralty Way, Lekki Phase 1, Lagos",
    title: "Serviced Luxury Shortlet",
    description: "Bespoke 2-bedroom executive shortlet apartment overlooking the Lekki-Ikoyi waterfront. Features 24/7 power, high-speed Starlink WiFi, Olympic pool, fully equipped kitchen, daily housekeeping, and 24-hour armed security.",
    image: "/products/waterfront_luxury_shortlet.jpg",
    isAvailable: true
  },
  {
    id: "prop_realty_004",
    name: "500sqm Prime Commercial/Residential Dry Land",
    category: "Land & Developments",
    price: 38000000,
    currency: "NGN",
    location: "Alaro City Corridor, Epe Expressway, Lagos",
    title: "Certificate of Occupancy (C of O)",
    description: "100% dry, level table land located in a master-planned gated development with paved drainage, solar streetlights, and 24/7 access control. Instant physical allocation upon completion of payment.",
    image: "/products/prime_development_land.jpg",
    isAvailable: true
  },
  {
    id: "prop_realty_005",
    name: "VIP Private Chauffeured Inspection Tour",
    category: "Inspection Services",
    price: 25000,
    currency: "NGN",
    location: "Lekki / Ikoyi Corridor",
    title: "Private VIP Service",
    description: "Private VIP inspection tour with dedicated chauffeur in a luxury SUV accompanied by a senior surveyor. Includes physical document inspection at site. 100% credited toward property purchase.",
    image: "/media/realty_corporate_office.jpg",
    isAvailable: true
  }
];

const categories = [
  "All Properties",
  "Residential Sales",
  "Luxury Mansions",
  "Shortlets & Hospitality",
  "Land & Developments",
  "Inspection Services"
];

const leadership = [
  {
    name: "Engr. Babatunde Jinadu (FNSE)",
    role: "Managing Partner & Head of Structural Engineering",
    credentials: "Fellow Nigerian Society of Engineers • 20+ Years Civil Development",
    bio: "Pioneered landmark residential estates across Lekki and Ikoyi with structural integrity guarantees, zero flooding engineering, and precision finishes.",
    tag: "Engineering & Architecture"
  },
  {
    name: "Folake Adeleke (Esq.)",
    role: "Lead Legal Counsel & Title Perfection Partner",
    credentials: "Senior Real Estate Conveyancer • Nigerian Bar Association",
    bio: "Specializes in Alausa Lands Bureau search investigations, Governor's Consent perfection, and escrow transaction protection for Nigerian and diaspora buyers.",
    tag: "Legal & Title Due Diligence"
  }
];

const testimonials = [
  {
    quote: "Bought my Lekki home completely from Manchester without stress. As a doctor working in the UK, I had been burned before by family members mismanaging building funds. Havencrest was transparent from day one. Tari sent 4K walkthroughs, their lawyer provided Alausa search documents, and my brother inspected the physical duplex on Saturday. Flawless execution.",
    author: "Dr. Kevin Nwankwo",
    location: "Manchester, UK",
    investment: "4-Bed Duplex (Orchid Road)"
  },
  {
    quote: "Buying land in Lagos is notoriously risky. Havencrest sold me two 500sqm plots along the Epe corridor with genuine C of O. Allocation took less than 48 hours and perimeter fencing was already complete. Truly professional.",
    author: "Tunde Oshodi",
    location: "Houston, Texas",
    investment: "Epe Land Corridor"
  },
  {
    quote: "I purchased an apartment on Admiralty Way through Havencrest. Their hospitality arm manages the daily bookings, power, and cleaning. It maintains an 85% occupancy rate with 100% hands-off passive returns.",
    author: "Chinelo Eze",
    location: "Victoria Island, Lagos",
    investment: "Waterfront Shortlet"
  }
];

const faqs = [
  {
    question: "How do you verify the legal title before listing a property?",
    answer: "Our in-house legal team, led by Folake Adeleke (Esq.), conducts independent searches at the Lagos State Lands Bureau (Alausa). We verify the root of title, check for government acquisitions or court disputes, and provide certified true copies of Governor’s Consent or C of O to your legal counsel prior to any transaction."
  },
  {
    question: "Can I inspect properties remotely if I reside overseas?",
    answer: "Yes! Over 60% of our buyers reside in the UK, US, and Canada. We arrange personalized 4K live video inspections via WhatsApp or Zoom, guided by our engineer with laser measuring equipment to inspect room dimensions, finishes, water pressure, and drainage in real time."
  },
  {
    question: "What are the standard closing fees in Lagos?",
    answer: "In addition to the property price, standard professional closing fees in Lagos include a 5% Legal Documentation Fee (Deed of Assignment preparation & registration) and a 5% Agency Consultation Fee. All infrastructure levies are disclosed upfront with zero hidden charges."
  },
  {
    question: "How do off-plan milestone payment plans work?",
    answer: "Our standard milestone structure requires a 30% initial commitment deposit to lock in your allocation price. You pay 30% at the carcass structure stage, 30% at interior finishing/tiling, and the final 10% upon quality snagging and physical key handover."
  },
  {
    question: "How does the VIP chauffeured site inspection work?",
    answer: "We provide a dedicated luxury SUV with private chauffeur and senior surveyor to pick you up anywhere in Victoria Island, Ikoyi, or Lekki for physical property viewings. The ₦25,000 reservation deposit is 100% credited toward your property acquisition."
  }
];

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("All Properties");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const filteredProperties =
    activeCategory === "All Properties"
      ? properties
      : properties.filter((p) => p.category === activeCategory);

  const getWhatsAppLink = (propName?: string, price?: number) => {
    const baseUrl = "https://wa.me/2348093341120";
    let text = "Hello Tari! I'd like to consult on luxury real estate opportunities with Havencrest Realty.";
    if (propName && price) {
      text = `Hello Tari! I am interested in *${propName}* (₦${price.toLocaleString()}) listed with Havencrest Realty. Could you share the title search report and 4K inspection schedule?`;
    } else if (propName) {
      text = `Hello Tari! I would like to inquire about *${propName}* with Havencrest Realty.`;
    }
    return `${baseUrl}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen bg-[#060b19] text-[#ffffff] selection:bg-[#d4af37]/30 selection:text-[#ffffff]">
      {/* 1. TOP ANNOUNCEMENT & PROPERTY ADVISOR BAR */}
      <div className="border-b border-[#d4af37]/15 bg-[#091124]/90 px-4 py-2.5 text-xs text-[#cbd5e1] backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#e5c583]">
              <MapPin className="h-3.5 w-3.5" />
              14 Admiralty Way (Near Link Bridge), Lekki Phase 1, Lagos
            </span>
            <span className="hidden items-center gap-1.5 sm:flex">
              <Clock className="h-3.5 w-3.5 text-[#e5c583]" />
              Mon–Fri: 8AM–6:30PM | Sat: 9AM–5PM (Site Tours)
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden items-center gap-1.5 text-[#d4af37] md:flex">
              <FileCheck2 className="h-3.5 w-3.5" />
              100% Alausa Title Verified
            </span>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-medium text-[#e5c583] transition hover:text-[#ffffff]"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              WhatsApp: +234 809 334 1120
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION */}
      <header className="sticky top-0 z-40 border-b border-[#d4af37]/15 bg-[#060b19]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-lg border border-[#d4af37]/40 bg-[#0b132b] p-1">
              <Image
                src="/logo.png"
                alt="Havencrest Realty Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <span className="font-heading text-xl font-bold tracking-tight text-[#ffffff]">
                Havencrest Realty
              </span>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-[#d4af37]">
                &amp; Developments • Lekki
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-[#cbd5e1] md:flex">
            <a href="#portfolio" className="transition hover:text-[#d4af37]">
              Properties &amp; Lands
            </a>
            <a href="#journey" className="transition hover:text-[#d4af37]">
              Buyer Journey
            </a>
            <a href="#diligence" className="transition hover:text-[#d4af37]">
              Title Due Diligence
            </a>
            <a href="#diaspora" className="transition hover:text-[#d4af37]">
              Diaspora Concierge
            </a>
            <a href="#leadership" className="transition hover:text-[#d4af37]">
              Partners
            </a>
            <a href="#location" className="transition hover:text-[#d4af37]">
              Headquarters
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[#d4af37] bg-[#d4af37]/10 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#e5c583] transition hover:bg-[#d4af37] hover:text-[#060b19]"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Consult Advisor</span>
            </a>
          </div>
        </div>
      </header>

      {/* 3. HERO SECTION (NO PILL BADGES ABOVE H1) */}
      <section className="relative overflow-hidden border-b border-[#d4af37]/15 pt-16 pb-20 lg:pt-24 lg:pb-32">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#d4af37]/20 blur-[120px]" />
          <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#0b132b]/40 blur-[140px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Left Column: Bold Headline & Editorial Copy */}
            <div className="lg:col-span-7">
              <h1 className="font-heading text-4xl font-extrabold tracking-tight text-[#ffffff] sm:text-5xl lg:text-6xl leading-[1.12]">
                Verified Lagos Real Estate with{" "}
                <span className="realty-gold-text">Guaranteed Legal Title.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-[#cbd5e1]">
                Turnkey luxury duplexes, waterfront shortlet investments, and
                prime commercial developments across Lekki Phase 1, Ikoyi, and
                Epe. Backed by Alausa land searches and trusted by hundreds of
                diaspora investors.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#aa8624] px-7 py-4 text-sm font-bold text-[#060b19] shadow-lg transition-all hover:opacity-95 hover:shadow-[#d4af37]/25"
                >
                  <MessageCircle className="h-4 w-4 text-[#060b19]" />
                  <span>Chat with Advisor (+234 809 334 1120)</span>
                </a>

                <a
                  href="#portfolio"
                  className="flex items-center justify-center gap-2 rounded-lg border border-[#d4af37]/30 bg-[#0b132b] px-7 py-4 text-sm font-medium text-[#ffffff] transition hover:border-[#d4af37] hover:bg-[#111c3d]"
                >
                  <span>View Verified Properties</span>
                  <ArrowRight className="h-4 w-4 text-[#d4af37]" />
                </a>
              </div>

              {/* Trust Features */}
              <div className="mt-12 grid grid-cols-1 gap-4 border-t border-[#d4af37]/15 pt-8 sm:grid-cols-3">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-[#d4af37]" />
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#ffffff]">
                      Alausa Search Verified
                    </h4>
                    <p className="mt-1 text-xs text-[#788a9f]">
                      Governor&apos;s Consent &amp; C of O.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Video className="h-5 w-5 shrink-0 text-[#d4af37]" />
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#ffffff]">
                      4K Diaspora Tours
                    </h4>
                    <p className="mt-1 text-xs text-[#788a9f]">
                      Live engineer-guided walkthroughs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <KeyRound className="h-5 w-5 shrink-0 text-[#d4af37]" />
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#ffffff]">
                      Milestone Escrow
                    </h4>
                    <p className="mt-1 text-xs text-[#788a9f]">
                      30-30-30-10 transparent funding.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Grid */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="relative h-[420px] w-full overflow-hidden rounded-2xl border border-[#d4af37]/25 shadow-2xl">
                  <Image
                    src="/media/lekki_waterfront_estate.jpg"
                    alt="Lekki Waterfront Luxury Estate"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060b19] via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-[#d4af37]/20 bg-[#0b132b]/90 p-4 backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold text-[#ffffff]">
                          14 Admiralty Way Headquarters
                        </p>
                        <p className="text-[11px] text-[#cbd5e1]">
                          Lekki Phase 1 • Link Bridge Corridor
                        </p>
                      </div>
                      <span className="rounded bg-[#d4af37]/20 px-2 py-1 text-[10px] font-semibold text-[#e5c583]">
                        Underground Parking
                      </span>
                    </div>
                  </div>
                </div>

                {/* Secondary Visual Overlay */}
                <div className="absolute -bottom-8 -left-8 hidden sm:block h-48 w-48 overflow-hidden rounded-xl border-2 border-[#060b19] shadow-2xl">
                  <Image
                    src="/products/smart_detached_mansion.jpg"
                    alt="Smart Detached Mansion"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE 4-STEP BUYER JOURNEY */}
      <section id="journey" className="border-b border-[#d4af37]/15 bg-[#091124] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-3xl sm:text-4xl text-[#ffffff]">
              The 4-Step Havencrest Acquisition Journey
            </h2>
            <p className="mt-3 text-base text-[#cbd5e1] max-w-2xl mx-auto">
              A transparent, legal-first framework engineered for local corporate
              executives and international diaspora property investors.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="realty-card rounded-2xl p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#e5c583] font-heading text-lg font-bold">
                01
              </div>
              <h3 className="mt-5 text-base font-bold text-[#ffffff]">
                WhatsApp Discovery
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#788a9f]">
                Chat with Tari 24/7 on WhatsApp. Define your budget, desired
                neighborhood, and yield targets to get vetted options in 60 seconds.
              </p>
            </div>

            <div className="realty-card rounded-2xl p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#e5c583] font-heading text-lg font-bold">
                02
              </div>
              <h3 className="mt-5 text-base font-bold text-[#ffffff]">
                Legal Title Due Diligence
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#788a9f]">
                Review certified true copies of Governor’s Consent or C of O,
                coordinate survey beacons, and Alausa search reports before paying.
              </p>
            </div>

            <div className="realty-card rounded-2xl p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#e5c583] font-heading text-lg font-bold">
                03
              </div>
              <h3 className="mt-5 text-base font-bold text-[#ffffff]">
                4K Live Video Inspection
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#788a9f]">
                Join an on-site inspection or experience a 4K live video tour
                guided by our structural engineer from London, Houston, or Toronto.
              </p>
            </div>

            <div className="realty-card rounded-2xl p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#e5c583] font-heading text-lg font-bold">
                04
              </div>
              <h3 className="mt-5 text-base font-bold text-[#ffffff]">
                Milestone Closing &amp; Handover
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#788a9f]">
                Pay safely through verified bank escrow, execute official deeds
                with our legal partners, and take immediate key possession.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE PROPERTY PORTFOLIO */}
      <section id="portfolio" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl text-[#ffffff]">
                Prime Properties &amp; Development Lands
              </h2>
              <p className="mt-3 text-base text-[#cbd5e1] max-w-xl">
                100% verified legal titles in Nigerian Naira (₦). Complete with
                title documents, exact locations, and instant WhatsApp inquiry.
              </p>
            </div>
            <a
              href={getWhatsAppLink("Custom Off-Plan Inquiry")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#e5c583] hover:text-[#ffffff]"
            >
              <span>Request Off-Plan Brochure</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Category Filter Tabs */}
          <div className="mt-10 flex flex-wrap gap-2 border-b border-[#d4af37]/15 pb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-lg px-5 py-2 text-xs font-medium transition ${
                  activeCategory === cat
                    ? "bg-[#d4af37] text-[#060b19] font-bold"
                    : "bg-[#0b132b] text-[#cbd5e1] hover:bg-[#111c3d] hover:text-[#ffffff] border border-[#d4af37]/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Properties Grid */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {filteredProperties.map((prop) => (
              <div
                key={prop.id}
                className="realty-card group flex flex-col justify-between overflow-hidden rounded-2xl"
              >
                <div>
                  <div className="relative h-56 w-full overflow-hidden bg-[#0b132b]">
                    <Image
                      src={prop.image}
                      alt={prop.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 rounded bg-[#060b19]/85 px-2.5 py-1 text-[11px] font-semibold text-[#e5c583] backdrop-blur-md">
                      {prop.category}
                    </div>
                    {prop.title && (
                      <div className="absolute top-3 right-3 rounded bg-[#d4af37]/20 border border-[#d4af37]/40 px-2.5 py-1 text-[10px] font-bold text-[#e5c583] backdrop-blur-md">
                        {prop.title}
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <p className="flex items-center gap-1.5 text-xs text-[#d4af37] font-medium">
                      <MapPin className="h-3.5 w-3.5" />
                      {prop.location}
                    </p>

                    <h3 className="mt-2 font-heading text-lg font-bold text-[#ffffff] group-hover:text-[#e5c583] transition">
                      {prop.name}
                    </h3>

                    <p className="mt-3 text-xs leading-relaxed text-[#788a9f]">
                      {prop.description}
                    </p>
                  </div>
                </div>

                <div className="border-t border-[#d4af37]/15 bg-[#060b19]/50 p-6 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#788a9f]">
                        Asking Price
                      </span>
                      <p className="font-heading text-xl font-bold text-[#ffffff]">
                        ₦{prop.price.toLocaleString()}
                      </p>
                    </div>

                    <a
                      href={getWhatsAppLink(prop.name, prop.price)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 rounded-lg bg-[#d4af37]/15 px-4 py-2 text-xs font-semibold text-[#e5c583] transition hover:bg-[#d4af37] hover:text-[#060b19]"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      <span>Inquire</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. LEGAL DUE DILIGENCE & MILESTONE SCHEDULE */}
      <section id="diligence" className="border-t border-b border-[#d4af37]/15 bg-[#091124] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="font-heading text-3xl sm:text-4xl text-[#ffffff]">
                100% Clean Title Guarantee &amp; Milestones
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#cbd5e1]">
                We eliminate the risks of Lagos land transactions. Every property
                in our portfolio is subjected to multi-stage title verification
                at the Lagos State Lands Bureau (Alausa).
              </p>

              <div className="mt-8 rounded-2xl border border-[#d4af37]/30 bg-[#0b132b] p-6">
                <h4 className="flex items-center gap-2 text-sm font-bold text-[#e5c583]">
                  <Scale className="h-4 w-4" />
                  Standard Off-Plan Milestone Schedule:
                </h4>
                <ul className="mt-3 space-y-2.5 text-xs text-[#cbd5e1]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#d4af37]" />
                    <strong>30% Commitment:</strong> Contract signing &amp; unit allocation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#d4af37]" />
                    <strong>30% Carcass Stage:</strong> Concrete frame &amp; roof completion
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#d4af37]" />
                    <strong>30% Finishing Stage:</strong> Plastering, wiring &amp; Italian tiling
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#d4af37]" />
                    <strong>10% Final Handover:</strong> Quality snagging &amp; key handover
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="realty-card rounded-xl p-6">
                <h4 className="text-base font-bold text-[#ffffff]">
                  Independent Alausa Search Reports
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-[#788a9f]">
                  We provide formal search reports conducted at the Lagos State
                  Lands Bureau directly to your legal counsel, confirming root of
                  title and freedom from government acquisition or pending litigation.
                </p>
              </div>

              <div className="realty-card rounded-xl p-6">
                <h4 className="text-base font-bold text-[#ffffff]">
                  Transparent Transaction Closing Costs
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-[#788a9f]">
                  Closing costs follow standard Lagos real estate conventions:
                  5% Legal Documentation Fee (Deed of Assignment sealing) and 5%
                  Agency Consultation Fee. Zero unannounced fees.
                </p>
              </div>

              <div className="realty-card rounded-xl p-6">
                <h4 className="text-base font-bold text-[#ffffff]">
                  VIP Chauffeured Site Inspection Tours (₦25,000 Deposit)
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-[#788a9f]">
                  Pick-up from Victoria Island, Ikoyi, or Lekki in a private luxury
                  SUV accompanied by our senior surveyor and physical title deeds.
                  100% credited toward your purchase.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. DIASPORA REMOTE INVESTOR CONCIERGE */}
      <section id="diaspora" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-3xl sm:text-4xl text-[#ffffff]">
              Trusted by Diaspora Investors Across 4 Continents
            </h2>
            <p className="mt-3 text-base text-[#cbd5e1] max-w-2xl mx-auto">
              Over 60% of our buyers live in the UK, USA, Canada, and UAE.
              Here is how we deliver seamless remote acquisitions with complete peace of mind.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="realty-card flex flex-col justify-between rounded-2xl p-7"
              >
                <div>
                  <div className="flex gap-1 text-[#d4af37]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-[#ffffff] italic">
                    “{t.quote}”
                  </p>
                </div>

                <div className="mt-8 border-t border-[#d4af37]/15 pt-4">
                  <p className="font-bold text-sm text-[#ffffff]">{t.author}</p>
                  <p className="text-xs text-[#788a9f]">
                    {t.location} • <span className="text-[#e5c583]">{t.investment}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. LEADERSHIP & LEGAL PARTNERS */}
      <section id="leadership" className="border-t border-b border-[#d4af37]/15 bg-[#091124] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-3xl sm:text-4xl text-[#ffffff]">
              Leadership &amp; Legal Partners
            </h2>
            <p className="mt-3 text-base text-[#cbd5e1] max-w-2xl mx-auto">
              Our engineering and legal directors bring 30+ combined years of
              structural excellence and airtight title conveyancing in Lagos.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {leadership.map((partner) => (
              <div key={partner.name} className="realty-card rounded-2xl p-8">
                <div className="flex items-center justify-between">
                  <div className="h-14 w-14 rounded-xl border border-[#d4af37]/40 bg-[#060b19] flex items-center justify-center font-heading text-xl font-bold text-[#e5c583]">
                    {partner.name.charAt(5) || "H"}
                  </div>
                  <span className="rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 px-3 py-1 text-[11px] font-semibold text-[#e5c583]">
                    {partner.tag}
                  </span>
                </div>

                <h3 className="mt-5 font-heading text-xl font-bold text-[#ffffff]">
                  {partner.name}
                </h3>
                <p className="text-xs font-semibold text-[#d4af37]">
                  {partner.credentials}
                </p>
                <p className="mt-1 text-xs text-[#cbd5e1]">{partner.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#788a9f]">
                  {partner.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-3xl sm:text-4xl text-[#ffffff]">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-base text-[#cbd5e1]">
              Everything you need to know about Lagos titles, remote inspections, and closing deeds.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="realty-card overflow-hidden rounded-xl border border-[#d4af37]/20"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between p-5 text-left text-sm font-semibold text-[#ffffff] transition hover:text-[#e5c583]"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="h-4 w-4 text-[#d4af37] shrink-0" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-[#788a9f] shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="border-t border-[#d4af37]/15 bg-[#060b19]/60 px-5 py-4 text-xs leading-relaxed text-[#cbd5e1]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. HEADQUARTERS & CONTACT */}
      <section id="location" className="border-t border-[#d4af37]/15 bg-[#091124] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-heading text-3xl sm:text-4xl text-[#ffffff]">
                Visit Our Admiralty Way HQ
              </h2>
              <p className="text-sm leading-relaxed text-[#cbd5e1]">
                Located in a contemporary 3-story glass office building on Admiralty
                Way, Lekki Phase 1 (near the Lekki-Ikoyi link bridge roundabout).
                Dedicated underground parking with armed security.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 shrink-0 text-[#d4af37]" />
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#ffffff]">
                      Address
                    </h4>
                    <p className="mt-1 text-sm text-[#cbd5e1]">
                      14 Admiralty Way (Near Link Bridge Roundabout), Lekki Phase 1, Lagos, Nigeria.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 shrink-0 text-[#d4af37]" />
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#ffffff]">
                      Office &amp; Site Tour Hours
                    </h4>
                    <p className="mt-1 text-xs text-[#788a9f]">
                      Monday – Friday: 8:00 AM – 6:30 PM (Title Reviews &amp; Consultations)
                      <br />
                      Saturday: 9:00 AM – 5:00 PM (Lekki, Orchid &amp; Epe Site Tours)
                      <br />
                      Sunday: 1:00 PM – 6:00 PM (Virtual Diaspora 4K Video Tours)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-[#d4af37]" />
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#ffffff]">
                      Underground Secure Parking
                    </h4>
                    <p className="mt-1 text-xs text-[#788a9f]">
                      Gated private underground parking with armed security and biometric access control.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="realty-card rounded-2xl p-8 text-center flex flex-col justify-center items-center h-full">
                <div className="h-16 w-16 rounded-full bg-[#d4af37]/15 flex items-center justify-center text-[#e5c583] mb-4">
                  <Building2 className="h-8 w-8" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-[#ffffff]">
                  Begin Your Property Due Diligence
                </h3>
                <p className="mt-2 text-sm text-[#cbd5e1] max-w-md">
                  Message Tari on WhatsApp to schedule a private VIP site tour,
                  request certified Alausa title search documents, or arrange a 4K live video walkthrough.
                </p>

                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa8624] px-8 py-4 text-sm font-bold text-[#060b19] shadow-lg transition-transform hover:scale-105"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Start WhatsApp Chat with Tari</span>
                </a>

                <p className="mt-4 text-[11px] text-[#788a9f]">
                  Direct Acquisitions Line • WhatsApp: +234 809 334 1120
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="border-t border-[#d4af37]/15 bg-[#040710] py-12 text-xs text-[#788a9f]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="relative h-8 w-8 overflow-hidden rounded-lg border border-[#d4af37]/30 bg-[#0b132b] p-1">
              <Image
                src="/logo.png"
                alt="Havencrest Realty Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-heading font-bold text-sm text-[#ffffff]">
              Havencrest Realty &amp; Developments
            </span>
          </div>

          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Havencrest Realty &amp; Developments. 14 Admiralty
            Way, Lekki Phase 1, Lagos. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-[#cbd5e1]">
            <a href="#portfolio" className="hover:text-[#d4af37]">
              Properties
            </a>
            <a href="#diligence" className="hover:text-[#d4af37]">
              Due Diligence
            </a>
            <a href="#location" className="hover:text-[#d4af37]">
              Headquarters
            </a>
          </div>
        </div>
      </footer>

      {/* 12. FLOATING WHATSAPP BUTTON */}
      <aside aria-label="Real Estate Concierge" className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-[#20ba5a]"
          aria-label="Chat with Tari on WhatsApp"
        >
          <div className="relative flex h-6 w-6 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-40" />
            <MessageCircle className="h-5 w-5 fill-current" />
          </div>
          <div className="hidden text-left sm:block">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-green-100">
              Property Advisor
            </p>
            <p className="text-xs font-bold leading-tight">Chat with Tari</p>
          </div>
        </a>
      </aside>
    </div>
  );
}
