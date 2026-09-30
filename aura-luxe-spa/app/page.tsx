"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  Clock,
  MapPin,
  Phone,
  ShieldCheck,
  Wifi,
  Wine,
  Calendar,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  Star,
  Scissors,
  Eye,
  HeartHandshake,
  Sparkle,
  Coffee,
  Navigation,
  ExternalLink
} from "lucide-react";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  currency: string;
  durationMinutes: number;
  depositRequired: number;
  description: string;
  image: string;
  isAvailable: boolean;
}

const services: Product[] = [
  {
    id: "prod_salon_001",
    name: "Full Set Hybrid Lashes",
    category: "Lash Lounge",
    price: 25000,
    currency: "NGN",
    durationMinutes: 90,
    depositRequired: 10000,
    description: "The perfect blend of classic individual lashes and fluffy Russian volume fans. Gives a textured, fluttery, everyday-glam look with feather-light medical grade adhesive.",
    image: "/products/hybrid_lashes.jpg",
    isAvailable: true
  },
  {
    id: "prod_salon_002",
    name: "Mega Volume Russian Lashes",
    category: "Lash Lounge",
    price: 32000,
    currency: "NGN",
    durationMinutes: 120,
    depositRequired: 10000,
    description: "Ultra-dense, dark lash line featuring 6D-10D lightweight handmade fans. Ideal for birthdays, bridal events, and high-impact glamour.",
    image: "/products/hybrid_lashes.jpg",
    isAvailable: true
  },
  {
    id: "prod_salon_003",
    name: "Deep Cleansing Hydrafacial",
    category: "Medspa & Skincare",
    price: 35000,
    currency: "NGN",
    durationMinutes: 75,
    depositRequired: 15000,
    description: "Medical-grade hydro-dermabrasion that vacuums out blackheads, exfoliates dead skin, and infuses antioxidant hyaluronic serums for an instant red-carpet glow.",
    image: "/products/hydrafacial.jpg",
    isAvailable: true
  },
  {
    id: "prod_salon_004",
    name: "Luxury Gel Pedicure & Foot Scrub",
    category: "Nail Lounge",
    price: 15000,
    currency: "NGN",
    durationMinutes: 60,
    depositRequired: 5000,
    description: "Full foot soak, dead skin peel, exfoliating sugar scrub, cuticle grooming, foot massage, and long-lasting UV gel polish of your choice.",
    image: "/products/luxury_gel_nails.jpg",
    isAvailable: true
  },
  {
    id: "prod_salon_005",
    name: "Acrylic Full Set + Ombre French",
    category: "Nail Lounge",
    price: 22000,
    currency: "NGN",
    durationMinutes: 75,
    depositRequired: 10000,
    description: "Precision sculpted acrylic tips with baby boomer ombre French fade or custom French tip line. Chip-free for up to 4 weeks.",
    image: "/products/luxury_gel_nails.jpg",
    isAvailable: true
  },
  {
    id: "prod_salon_006",
    name: "Full Body Swedish Massage",
    category: "Wellness & Spa",
    price: 28000,
    currency: "NGN",
    durationMinutes: 60,
    depositRequired: 10000,
    description: "Gentle, flowing rhythmic strokes using warm organic lavender oil to release bodily stress, improve circulation, and melt muscle tension.",
    image: "/products/swedish_massage.jpg",
    isAvailable: true
  },
  {
    id: "prod_salon_007",
    name: "Deep Tissue Tension Relief Massage",
    category: "Wellness & Spa",
    price: 34000,
    currency: "NGN",
    durationMinutes: 75,
    depositRequired: 10000,
    description: "Firm targeted acupressure addressing chronic neck, shoulder, and lower back tightness caused by long work hours and Lagos traffic.",
    image: "/products/swedish_massage.jpg",
    isAvailable: true
  },
  {
    id: "prod_salon_008",
    name: "Knotless Box Braids (Mid-Back)",
    category: "Hair Studio",
    price: 30000,
    currency: "NGN",
    durationMinutes: 210,
    depositRequired: 10000,
    description: "Tension-free, painless knotless parting that protects your edges. Clean square parts with dipped curved ends. Lasts 6-8 weeks.",
    image: "/products/hybrid_lashes.jpg",
    isAvailable: true
  }
];

const categories = [
  "All Services",
  "Hair Studio",
  "Lash Lounge",
  "Nail Lounge",
  "Medspa & Skincare",
  "Wellness & Spa"
];

const specialists = [
  {
    name: "Blessing Okafor",
    role: "Senior Lash & Brow Master",
    bio: "Specializes in Russian Volume, Wet-look mapping, and featherlight Hybrid extensions that preserve 100% of natural lash health.",
    experience: "7+ Years Experience",
    tags: ["Russian Volume", "Lash Mapping", "Brow Sculpting"]
  },
  {
    name: "Chidinma Adeleke",
    role: "Master Hair Stylist & Texture Specialist",
    bio: "Celebrated across Lagos for precision zero-tension parting, painless knotless braids, flawless silk presses, and protective styling.",
    experience: "9+ Years Experience",
    tags: ["Knotless Braids", "Silk Press", "Edge Care"]
  },
  {
    name: "Dr. Tunde Alabi",
    role: "Clinical Aesthetician & Skin Therapist",
    bio: "Certified skin therapist delivering clinical hydrafacials, dermaplaning, targeted acne protocols, and medical skincare solutions.",
    experience: "Medical Aesthetics Certified",
    tags: ["Hydrafacials", "Skin Extraction", "LED Therapy"]
  }
];

const testimonials = [
  {
    quote: "The only salon in Lagos that does not pull my edges! I got waist-length knotless braids done by Chidinma. She was so gentle I fell asleep in the chair. Three weeks later, my scalp is completely healthy with zero tension bumps.",
    author: "Ronke Balogun",
    location: "Ikeja GRA",
    service: "Knotless Box Braids"
  },
  {
    quote: "Blessing is a magician. I did the Full Set Hybrid Lashes before my trip to Dubai. Swimming, beach, humidity—and not a single lash shed awkwardly. 10/10 concierge experience from start to finish.",
    author: "Anita Adeleke",
    location: "Victoria Island",
    service: "Full Set Hybrid Lashes"
  },
  {
    quote: "Dr. Tunde gave me the Hydrafacial two days before my wedding. The extraction was painless, and my makeup artist said my skin looked like glass. Worth every single Naira. The Starlink and chilled champagne were a fantastic touch.",
    author: "Olamide Cole",
    location: "Maryland",
    service: "Deep Cleansing Hydrafacial"
  }
];

const faqs = [
  {
    question: "Do I need to bring my own hair extensions for knotless braids?",
    answer: "You are welcome to bring your own preferred brand (we recommend 3 packs of pre-stretched X-pression 48\" or 52\"), or you can purchase premium pre-stretched salon-grade hair directly in our studio for ₦2,500 per pack."
  },
  {
    question: "Will lash extensions damage my natural lashes?",
    answer: "Never at Aura Luxe. We perform precise single-lash isolation and use lightweight medical-grade, formaldehyde-free adhesives tailored to your natural lash weight. They shed naturally along with your real lash cycle without pulling."
  },
  {
    question: "What happens if I get held up in Lagos traffic?",
    answer: "We understand Lagos traffic! We offer a 15-minute grace period on all appointments. If delayed, simply message Maya on WhatsApp. For delays over 20 minutes, we will work with you to adjust styling or slide you into the next available chair without forfeiting your deposit."
  },
  {
    question: "Why is a deposit required for weekend appointments?",
    answer: "A ₦10,000 appointment deposit (payable securely via Paystack) is required for Friday, Saturday, and Sunday bookings to reserve your dedicated specialist and private chair. 100% of this deposit is deducted from your final bill upon arrival."
  },
  {
    question: "Can I walk in or must I book in advance?",
    answer: "While we accommodate walk-ins when chairs are open, weekend and bridal slots fill up rapidly. We strongly recommend booking through Maya on WhatsApp to guarantee zero waiting time."
  }
];

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("All Services");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const filteredServices =
    activeCategory === "All Services"
      ? services
      : services.filter((s) => s.category === activeCategory);

  const getWhatsAppLink = (serviceName?: string, price?: number) => {
    const baseUrl = "https://wa.me/2348145502931";
    let text = "Hello Maya! I'd like to book an appointment at Aura Luxe Studio & Medspa.";
    if (serviceName && price) {
      text = `Hello Maya! I would like to book the *${serviceName}* (₦${price.toLocaleString()}) at Aura Luxe Studio. Could you check available slots?`;
    }
    return `${baseUrl}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen bg-[#0f0e0d] text-[#faf8f5] selection:bg-[#c5a880]/30 selection:text-[#faf8f5]">
      {/* 1. TOP ANNOUNCEMENT & CONCIERGE BAR */}
      <div className="border-b border-[#c5a880]/15 bg-[#141211]/90 px-4 py-2.5 text-xs text-[#c4beb7] backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#c5a880]">
              <MapPin className="h-3.5 w-3.5" />
              28 Sobo Arobiodu Street, Ikeja GRA, Lagos
            </span>
            <span className="hidden items-center gap-1.5 sm:flex">
              <Clock className="h-3.5 w-3.5 text-[#c5a880]" />
              Mon–Sat: 9AM–8PM | Sun: 12PM–7PM
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden items-center gap-1.5 text-[#e5c583] md:flex">
              <Sparkles className="h-3.5 w-3.5" />
              24/7 Digital Concierge Available
            </span>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-medium text-[#c5a880] transition hover:text-[#e5c583]"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              WhatsApp: +234 814 550 2931
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION */}
      <header className="sticky top-0 z-40 border-b border-[#c5a880]/15 bg-[#0f0e0d]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full border border-[#c5a880]/40 bg-[#1a1816] p-1">
              <Image
                src="/logo.png"
                alt="Aura Luxe Studio Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <span className="font-serif text-xl font-medium tracking-wide text-[#faf8f5]">
                Aura Luxe
              </span>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-[#c5a880]">
                Studio & Medspa
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-[#c4beb7] md:flex">
            <a href="#services" className="transition hover:text-[#c5a880]">
              Services & Pricing
            </a>
            <a href="#experience" className="transition hover:text-[#c5a880]">
              The Experience
            </a>
            <a href="#specialists" className="transition hover:text-[#c5a880]">
              Specialists
            </a>
            <a href="#reviews" className="transition hover:text-[#c5a880]">
              Client Reviews
            </a>
            <a href="#policies" className="transition hover:text-[#c5a880]">
              Studio Policies
            </a>
            <a href="#location" className="transition hover:text-[#c5a880]">
              Location & Hours
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#c5a880] bg-[#c5a880]/10 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#e5c583] transition hover:bg-[#c5a880] hover:text-[#0f0e0d]"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Book Appointment</span>
            </a>
          </div>
        </div>
      </header>

      {/* 3. HERO SECTION (STRICT NO PILL BADGES ABOVE H1) */}
      <section className="relative overflow-hidden border-b border-[#c5a880]/15 pt-16 pb-20 lg:pt-24 lg:pb-32">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#c5a880]/20 blur-[120px]" />
          <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#9a7b56]/20 blur-[140px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Left Column: Bold Headline & Editorial Copy */}
            <div className="lg:col-span-7">
              <h1 className="font-serif text-4xl font-normal tracking-tight text-[#faf8f5] sm:text-5xl lg:text-6xl leading-[1.12]">
                Where Lagos Comes for{" "}
                <span className="italic font-normal gold-gradient-text">
                  Effortless Luxury
                </span>{" "}
                & Flawless Care.
              </h1>

              <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-[#c4beb7]">
                Ikeja GRA’s premier destination for bespoke knotless braids,
                Russian volume lashes, medical-grade hydrafacials, and rejuvenating
                massage therapy. Experience tailored beauty artistry in an unhurried,
                private sanctuary.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#c5a880] to-[#b3936a] px-7 py-4 text-sm font-semibold text-[#0f0e0d] shadow-lg transition-all hover:opacity-95 hover:shadow-[#c5a880]/20"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Book on WhatsApp (+234 814 550 2931)</span>
                </a>

                <a
                  href="#services"
                  className="flex items-center justify-center gap-2 rounded-lg border border-[#c5a880]/30 bg-[#171514] px-7 py-4 text-sm font-medium text-[#faf8f5] transition hover:border-[#c5a880] hover:bg-[#1f1c1a]"
                >
                  <span>Explore Service Menu & Pricing</span>
                  <ArrowRight className="h-4 w-4 text-[#c5a880]" />
                </a>
              </div>

              {/* Studio Trust Features (No AI Badges - Crisp Luxury List) */}
              <div className="mt-12 grid grid-cols-1 gap-4 border-t border-[#c5a880]/15 pt-8 sm:grid-cols-3">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-[#c5a880]" />
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#faf8f5]">
                      100% Autoclave Sterile
                    </h4>
                    <p className="mt-1 text-xs text-[#8c857b]">
                      Hospital-grade sterilization & single-use liners.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Wifi className="h-5 w-5 shrink-0 text-[#c5a880]" />
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#faf8f5]">
                      Starlink WiFi & Bar
                    </h4>
                    <p className="mt-1 text-xs text-[#8c857b]">
                      Complimentary chilled Prosecco, zobo & coffee.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Scissors className="h-5 w-5 shrink-0 text-[#c5a880]" />
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#faf8f5]">
                      Zero Hairline Tension
                    </h4>
                    <p className="mt-1 text-xs text-[#8c857b]">
                      Painless parting designed to protect natural edges.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: High End Visual Grid */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="relative h-[420px] w-full overflow-hidden rounded-2xl border border-[#c5a880]/20 shadow-2xl">
                  <Image
                    src="/media/salon_interior.jpg"
                    alt="Aura Luxe Studio Ikeja GRA Interior"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0d] via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-[#c5a880]/20 bg-[#171514]/85 p-4 backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold text-[#faf8f5]">
                          Sobo Arobiodu Sanctuary
                        </p>
                        <p className="text-[11px] text-[#c4beb7]">
                          Private gated compound • Ikeja GRA
                        </p>
                      </div>
                      <span className="rounded bg-[#c5a880]/20 px-2 py-1 text-[10px] font-semibold text-[#e5c583]">
                        Gated & Valet Parking
                      </span>
                    </div>
                  </div>
                </div>

                {/* Secondary Image Overlay */}
                <div className="absolute -bottom-8 -left-8 hidden sm:block h-48 w-48 overflow-hidden rounded-xl border-2 border-[#0f0e0d] shadow-2xl">
                  <Image
                    src="/media/spa_treatment_room.jpg"
                    alt="Spa Treatment Room"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW YOUR VISIT WORKS (4-STEP BESPOKE FLOW) */}
      <section id="experience" className="border-b border-[#c5a880]/15 bg-[#141211] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#faf8f5]">
              The Seamless Aura Luxe Experience
            </h2>
            <p className="mt-3 text-base text-[#c4beb7] max-w-2xl mx-auto">
              From the moment you message our digital concierge to when you walk
              out radiant, every detail is engineered for your comfort.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="luxury-card rounded-2xl p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#c5a880]/10 border border-[#c5a880]/30 text-[#e5c583] font-serif text-lg font-bold">
                01
              </div>
              <h3 className="mt-5 text-base font-semibold text-[#faf8f5]">
                3-Second WhatsApp Booking
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#8c857b]">
                Chat with Maya 24/7 on WhatsApp. Pick your preferred service,
                master specialist, and chair slot with zero back-and-forth delay.
              </p>
            </div>

            <div className="luxury-card rounded-2xl p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#c5a880]/10 border border-[#c5a880]/30 text-[#e5c583] font-serif text-lg font-bold">
                02
              </div>
              <h3 className="mt-5 text-base font-semibold text-[#faf8f5]">
                Welcome & Refreshment
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#8c857b]">
                Arrive at our private compound on Sobo Arobiodu. Relax with
                complimentary chilled Prosecco, artisan zobo, or Nespresso.
              </p>
            </div>

            <div className="luxury-card rounded-2xl p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#c5a880]/10 border border-[#c5a880]/30 text-[#e5c583] font-serif text-lg font-bold">
                03
              </div>
              <h3 className="mt-5 text-base font-semibold text-[#faf8f5]">
                Bespoke Artistry
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#8c857b]">
                Unwind in ergonomic plush chairs while certified stylists and
                clinical aestheticians work with medical-grade precision and zero rush.
              </p>
            </div>

            <div className="luxury-card rounded-2xl p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#c5a880]/10 border border-[#c5a880]/30 text-[#e5c583] font-serif text-lg font-bold">
                04
              </div>
              <h3 className="mt-5 text-base font-semibold text-[#faf8f5]">
                Long-Lasting Radiance
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#8c857b]">
                Step out turning heads with flawless hair, lash retention, and
                glowing skin that stays immaculate for weeks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE SERVICE CATALOG & PRICING */}
      <section id="services" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#faf8f5]">
                Curated Service Menu & Pricing
              </h2>
              <p className="mt-3 text-base text-[#c4beb7] max-w-xl">
                Transparent pricing in Nigerian Naira (₦). Complete with service
                durations, deposit details, and instant WhatsApp booking.
              </p>
            </div>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#c5a880] hover:text-[#e5c583]"
            >
              <span>Custom Service Inquiry</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Category Filter Tabs */}
          <div className="mt-10 flex flex-wrap gap-2 border-b border-[#c5a880]/15 pb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 py-2 text-xs font-medium transition ${
                  activeCategory === cat
                    ? "bg-[#c5a880] text-[#0f0e0d] font-semibold"
                    : "bg-[#171514] text-[#c4beb7] hover:bg-[#1f1c1a] hover:text-[#faf8f5] border border-[#c5a880]/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredServices.map((product) => (
              <div
                key={product.id}
                className="luxury-card group flex flex-col justify-between overflow-hidden rounded-2xl"
              >
                <div>
                  <div className="relative h-52 w-full overflow-hidden bg-[#1f1c1a]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 rounded-md bg-[#0f0e0d]/80 px-2.5 py-1 text-[11px] font-medium text-[#c5a880] backdrop-blur-md">
                      {product.category}
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-base font-semibold text-[#faf8f5] group-hover:text-[#e5c583] transition">
                        {product.name}
                      </h3>
                    </div>

                    <p className="mt-2 text-xs leading-relaxed text-[#8c857b] line-clamp-3">
                      {product.description}
                    </p>

                    <div className="mt-4 flex items-center gap-4 text-xs text-[#c4beb7]">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5 text-[#c5a880]" />
                        {product.durationMinutes >= 60
                          ? `${product.durationMinutes / 60} hrs`
                          : `${product.durationMinutes} mins`}
                      </span>
                      <span className="text-[#8c857b]">•</span>
                      <span>
                        ₦{product.depositRequired.toLocaleString()} deposit
                      </span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-[#c5a880]/15 bg-[#141211]/50 p-5 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#8c857b]">
                        Service Fee
                      </span>
                      <p className="font-serif text-lg font-bold text-[#faf8f5]">
                        ₦{product.price.toLocaleString()}
                      </p>
                    </div>

                    <a
                      href={getWhatsAppLink(product.name, product.price)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 rounded-lg bg-[#c5a880]/15 px-3.5 py-2 text-xs font-semibold text-[#e5c583] transition hover:bg-[#c5a880] hover:text-[#0f0e0d]"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      <span>Book</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SPECIALISTS & MASTER ARTISTS SPOTLIGHT */}
      <section id="specialists" className="border-t border-b border-[#c5a880]/15 bg-[#141211] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#faf8f5]">
              Meet Our Lead Artists & Skin Therapists
            </h2>
            <p className="mt-3 text-base text-[#c4beb7] max-w-2xl mx-auto">
              Our master practitioners bring deep technical training, hygienic
              excellence, and an unhurried artistic touch to every appointment.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {specialists.map((spec) => (
              <div key={spec.name} className="luxury-card rounded-2xl p-7">
                <div className="flex items-center justify-between">
                  <div className="h-14 w-14 rounded-full border border-[#c5a880]/40 bg-[#1e1c1a] flex items-center justify-center font-serif text-xl text-[#e5c583]">
                    {spec.name.charAt(0)}
                  </div>
                  <span className="rounded-full bg-[#c5a880]/10 border border-[#c5a880]/20 px-3 py-1 text-[11px] font-medium text-[#c5a880]">
                    {spec.experience}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-semibold text-[#faf8f5]">
                  {spec.name}
                </h3>
                <p className="text-xs font-medium text-[#c5a880]">{spec.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#8c857b]">
                  {spec.bio}
                </p>

                <div className="mt-5 flex flex-wrap gap-2 border-t border-[#c5a880]/15 pt-4">
                  {spec.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-[#1f1c1a] px-2.5 py-1 text-[11px] text-[#c4beb7]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CLIENT TRANSFORMATIONS & REVIEWS */}
      <section id="reviews" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#faf8f5]">
              Client Transformations & Words of Trust
            </h2>
            <p className="mt-3 text-base text-[#c4beb7] max-w-2xl mx-auto">
              Read genuine feedback from women and professionals across Lagos
              who trust Aura Luxe with their bridal looks, weekly glam, and skincare.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="luxury-card flex flex-col justify-between rounded-2xl p-7"
              >
                <div>
                  <div className="flex gap-1 text-[#e5c583]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-[#faf8f5] italic font-serif">
                    “{t.quote}”
                  </p>
                </div>

                <div className="mt-8 border-t border-[#c5a880]/15 pt-4">
                  <p className="font-medium text-sm text-[#faf8f5]">{t.author}</p>
                  <p className="text-xs text-[#8c857b]">
                    {t.location} • <span className="text-[#c5a880]">{t.service}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. STUDIO POLICIES & PRACTICAL GUIDELINES */}
      <section id="policies" className="border-t border-[#c5a880]/15 bg-[#141211] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="font-serif text-3xl sm:text-4xl text-[#faf8f5]">
                Practical Guidelines & Studio Etiquette
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#c4beb7]">
                We value your time and comfort. Here is everything you need to
                know regarding traffic buffers, hair extensions, deposits, and
                safety protocols before visiting our Ikeja GRA compound.
              </p>

              <div className="mt-8 rounded-2xl border border-[#c5a880]/30 bg-[#1a1816] p-6">
                <h4 className="flex items-center gap-2 text-sm font-semibold text-[#e5c583]">
                  <Wine className="h-4 w-4" />
                  Complimentary Studio Amenities
                </h4>
                <ul className="mt-3 space-y-2 text-xs text-[#c4beb7]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#c5a880]" />
                    Chilled Prosecco, sparkling wine, artisan hibiscus zobo
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#c5a880]" />
                    High-speed Starlink WiFi & charging docks at every chair
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#c5a880]" />
                    Ergonomic memory-foam styling & treatment beds
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="luxury-card rounded-xl p-6">
                <h4 className="text-base font-semibold text-[#faf8f5]">
                  Lagos Traffic Grace Period (15 Minutes)
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-[#8c857b]">
                  We know commuting in Lagos can be unpredictable. We offer a
                  15-minute grace period on every booking. Just drop Maya a quick
                  text on WhatsApp if you run into traffic delays so we can hold
                  your specialist.
                </p>
              </div>

              <div className="luxury-card rounded-xl p-6">
                <h4 className="text-base font-semibold text-[#faf8f5]">
                  Weekend Deposit & Credit Policy
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-[#8c857b]">
                  A ₦10,000 reservation deposit is required for Friday–Sunday
                  appointments. 100% of your deposit is credited toward your bill
                  at checkout. Free rescheduling is available up to 24 hours prior.
                </p>
              </div>

              <div className="luxury-card rounded-xl p-6">
                <h4 className="text-base font-semibold text-[#faf8f5]">
                  Hair Extensions & Wash Guidelines
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-[#8c857b]">
                  Bring your own hair extensions (e.g., 3 packs of X-pression 48&quot; or 52&quot;)
                  or purchase salon-grade pre-stretched hair in our studio for
                  ₦2,500/pack. Clarifying wash & scalp detox add-ons are available for ₦5,000.
                </p>
              </div>

              <div className="luxury-card rounded-xl p-6">
                <h4 className="text-base font-semibold text-[#faf8f5]">
                  Medical-Grade Sterilization & Allergy Testing
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-[#8c857b]">
                  100% autoclave sterilization of metal tools. Single-use buffers,
                  files, and foot liners. Complimentary 5-minute glue patch tests
                  for sensitive eye clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS (FAQS) */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#faf8f5]">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-base text-[#c4beb7]">
              Have questions? Maya and our client concierge team are always here to assist.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="luxury-card overflow-hidden rounded-xl border border-[#c5a880]/20"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between p-5 text-left text-sm font-medium text-[#faf8f5] transition hover:text-[#e5c583]"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="h-4 w-4 text-[#c5a880] shrink-0" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-[#8c857b] shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="border-t border-[#c5a880]/15 bg-[#141211]/60 px-5 py-4 text-xs leading-relaxed text-[#c4beb7]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. LOCATION, DRIVING DIRECTIONS & VISITING INFO */}
      <section id="location" className="border-t border-[#c5a880]/15 bg-[#141211] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Contact & Hours Info */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-serif text-3xl sm:text-4xl text-[#faf8f5]">
                Visit Our Ikeja GRA Sanctuary
              </h2>
              <p className="text-sm leading-relaxed text-[#c4beb7]">
                Located in a discreet, private gated compound with 24/7 uniformed
                security and dedicated parking for up to 12 vehicles. Zero street parking worries.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 shrink-0 text-[#c5a880]" />
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#faf8f5]">
                      Address
                    </h4>
                    <p className="mt-1 text-sm text-[#c4beb7]">
                      28 Sobo Arobiodu Street (Between Oduduwa Way & Isaac John),
                      Ikeja GRA, Lagos, Nigeria.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Navigation className="h-5 w-5 shrink-0 text-[#c5a880]" />
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#faf8f5]">
                      Driving Landmarks
                    </h4>
                    <p className="mt-1 text-xs text-[#8c857b]">
                      • From Maryland / Mobolaji Bank Anthony: Turn into Oduduwa
                      Way, connect right into Sobo Arobiodu.
                      <br />• From Isaac John: Turn at Archbishop Vining roundabout
                      into Sobo Arobiodu. Number 28 has gold architectural signage.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 shrink-0 text-[#c5a880]" />
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#faf8f5]">
                      Operating Hours
                    </h4>
                    <p className="mt-1 text-xs text-[#8c857b]">
                      Monday – Friday: 9:00 AM – 8:00 PM
                      <br />
                      Saturday: 9:00 AM – 8:30 PM (Peak Bridal & Weekend Glam)
                      <br />
                      Sunday: 12:00 PM – 7:00 PM (Afternoon Spa & Recovery)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-[#c5a880]" />
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#faf8f5]">
                      Direct Line & WhatsApp
                    </h4>
                    <p className="mt-1 text-sm text-[#c5a880] font-medium">
                      +234 814 550 2931 • bookings@auraluxespa.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map / Booking Card */}
            <div className="lg:col-span-6">
              <div className="luxury-card rounded-2xl p-8 text-center flex flex-col justify-center items-center h-full">
                <div className="h-16 w-16 rounded-full bg-[#c5a880]/15 flex items-center justify-center text-[#e5c583] mb-4">
                  <Sparkles className="h-8 w-8" />
                </div>
                <h3 className="font-serif text-2xl text-[#faf8f5]">
                  Ready to Reserve Your Chair?
                </h3>
                <p className="mt-2 text-sm text-[#c4beb7] max-w-md">
                  Message Maya right now on WhatsApp to view live specialist
                  schedules, reserve your slot, and receive instant confirmation.
                </p>

                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#c5a880] to-[#b3936a] px-8 py-4 text-sm font-semibold text-[#0f0e0d] shadow-lg transition-transform hover:scale-105"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Start WhatsApp Chat with Maya</span>
                </a>

                <p className="mt-4 text-[11px] text-[#8c857b]">
                  Average response time: &lt; 30 seconds • 24/7 Concierge
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="border-t border-[#c5a880]/15 bg-[#0a0908] py-12 text-xs text-[#8c857b]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="relative h-8 w-8 overflow-hidden rounded-full border border-[#c5a880]/30 bg-[#171514] p-1">
              <Image
                src="/logo.png"
                alt="Aura Luxe Studio Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-serif text-sm text-[#faf8f5]">
              Aura Luxe Studio & Medspa
            </span>
          </div>

          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Aura Luxe Studio & Medspa. 28 Sobo Arobiodu,
            Ikeja GRA, Lagos. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-[#c4beb7]">
            <a href="#services" className="hover:text-[#c5a880]">
              Menu
            </a>
            <a href="#policies" className="hover:text-[#c5a880]">
              Policies
            </a>
            <a href="#location" className="hover:text-[#c5a880]">
              Directions
            </a>
          </div>
        </div>
      </footer>

      {/* 12. FLOATING WHATSAPP BUTTON (ALWAYS PRESENT & ENGAGING) */}
      <aside aria-label="WhatsApp Concierge" className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-[#20ba5a]"
          aria-label="Chat with Maya on WhatsApp"
        >
          <div className="relative flex h-6 w-6 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-40" />
            <MessageCircle className="h-5 w-5 fill-current" />
          </div>
          <div className="hidden text-left sm:block">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-green-100">
              Instant Booking
            </p>
            <p className="text-xs font-bold leading-tight">Chat with Maya</p>
          </div>
        </a>
      </aside>
    </div>
  );
}
