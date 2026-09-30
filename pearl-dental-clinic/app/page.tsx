"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  Clock,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Star,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  FileText,
  Activity,
  Award,
  Zap,
  Heart,
  Smile,
  Receipt,
  Car
} from "lucide-react";

interface Treatment {
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

const treatments: Treatment[] = [
  {
    id: "prod_dental_001",
    name: "Comprehensive Clinical Exam & Digital X-Ray",
    category: "Consultations",
    price: 15000,
    currency: "NGN",
    durationMinutes: 45,
    depositRequired: 15000,
    description: "Full mouth intraoral photography, digital HD periapical X-rays, periodontal gum screening, and a comprehensive one-on-one consultation with Dr. Adeleke.",
    image: "/products/dental_consultation.jpg",
    isAvailable: true
  },
  {
    id: "prod_dental_002",
    name: "1-Hour In-Clinic Laser Teeth Whitening",
    category: "Cosmetic Dentistry",
    price: 65000,
    currency: "NGN",
    durationMinutes: 60,
    depositRequired: 15000,
    description: "Painless in-office dental whitening utilizing LED laser activation and dental-grade hydrogen peroxide gel. Brightens teeth 6 to 8 shades in a single 60-minute visit without enamel erosion.",
    image: "/products/teeth_whitening.jpg",
    isAvailable: true
  },
  {
    id: "prod_dental_003",
    name: "Ultrasonic Scaling & Polishing (Routine Cleaning)",
    category: "Preventive Care",
    price: 25000,
    currency: "NGN",
    durationMinutes: 45,
    depositRequired: 10000,
    description: "Vibrational ultrasonic plaque and tartar removal with high-gloss prophylactic paste polish. Eliminates coffee, tea, and red wine stains while keeping gums healthy.",
    image: "/media/dental_operatory.jpg",
    isAvailable: true
  },
  {
    id: "prod_dental_004",
    name: "Clear Aligner 3D Scan & Smile Assessment",
    category: "Orthodontics",
    price: 25000,
    currency: "NGN",
    durationMinutes: 45,
    depositRequired: 15000,
    description: "Digital 3D intraoral simulation showing exactly how your teeth will move week-by-week with clear aligners before you commit. Credited towards your aligner package.",
    image: "/products/clear_aligners.jpg",
    isAvailable: true
  },
  {
    id: "prod_dental_005",
    name: "Composite Bonding / Diastema Closure (Per Tooth)",
    category: "Cosmetic Dentistry",
    price: 35000,
    currency: "NGN",
    durationMinutes: 45,
    depositRequired: 15000,
    description: "Artisan aesthetic composite resin bonding to close front tooth gaps (diastema), restore chipped edges, or reshape uneven teeth in a single comfortable appointment.",
    image: "/products/teeth_whitening.jpg",
    isAvailable: true
  }
];

const categories = [
  "All Treatments",
  "Consultations",
  "Cosmetic Dentistry",
  "Preventive Care",
  "Orthodontics"
];

const doctors = [
  {
    name: "Dr. Dami Adeleke",
    role: "Principal Cosmetic Dentist & Clear Aligner Specialist",
    qualifications: "BDS, MSc Orthodontics • 12+ Years Clinical Experience",
    bio: "Certified Invisalign and 3D Smile Design provider trained in London and Lagos, specializing in anxiety-free cosmetic smile makeovers and digital aligners.",
    tag: "Cosmetic & Orthodontics"
  },
  {
    name: "Dr. Fatima Bello",
    role: "Senior Restorative Dentist & Pediatric Specialist",
    qualifications: "BDS, MFDS • 8+ Years Clinical Experience",
    bio: "Expert in gentle whisper-quiet dentistry, aesthetic composite bonding, root canal therapy, and stress-free treatments for children and adults.",
    tag: "Restorative & Gentle Care"
  }
];

const smileCases = [
  {
    patient: "Chinedu O. (Groom)",
    treatment: "1-Hour In-Clinic Laser Whitening",
    result: "Brightened 7 shades in 60 minutes",
    quote: "I had severe coffee stains from years of late-night coding. One 60-minute session with Dr. Adeleke brightened my teeth by 7 shades right before my traditional wedding. Zero sensitivity!",
    image: "/products/teeth_whitening.jpg"
  },
  {
    patient: "Amina K. (Corporate Banker)",
    treatment: "Clear Aligners (7 Months)",
    result: "Closed diastema & corrected crowded bottom teeth",
    quote: "I couldn't wear metal braces because of client meetings. Pearl Dental gave me custom clear aligners. In 7 months, my smile was completely aligned with zero discomfort.",
    image: "/products/clear_aligners.jpg"
  },
  {
    patient: "Sandra E. (Fashion Designer)",
    treatment: "Composite Gap Closure",
    result: "Seamless front tooth contouring in 45 mins",
    quote: "Dr. Fatima closed my front tooth gap in just 45 minutes without drilling or needles. The color match is so seamless nobody can tell where my tooth ends and the bonding starts.",
    image: "/products/dental_consultation.jpg"
  }
];

const testimonials = [
  {
    quote: "The only dentist I actually look forward to visiting. I used to have severe dental anxiety. From the moment Ada booked me on WhatsApp to the actual treatment with Dr. Adeleke, everything was gentle and genuinely painless.",
    author: "Tolu Ogunleye",
    location: "Ikeja GRA",
    treatment: "Laser Teeth Whitening"
  },
  {
    quote: "Most clinics in Lagos make you sit in a waiting room for 2 hours even with an appointment. At Pearl Dental, my 11:30 AM appointment started at exactly 11:32 AM. Professional, clean, and top-tier service.",
    author: "Emeka Nwosu",
    location: "Maryland",
    treatment: "Scaling & Polishing"
  },
  {
    quote: "I messaged at 10 PM on a Sunday night expecting an answer on Monday morning. Ada answered in 3 seconds, explained whitening aftercare, and locked in my Saturday chair. Outstanding clinic!",
    author: "Kemi Adeyemi",
    location: "Opebi",
    treatment: "Clear Aligner Assessment"
  }
];

const faqs = [
  {
    question: "Does the 1-hour laser whitening cause sharp tooth sensitivity?",
    answer: "No! We isolate your lips and coat your gums with a specialized protective curing barrier before applying the gentle whitening gel. Our cool LED laser accelerates brightening without heating the nerve. Over 95% of our patients experience zero discomfort."
  },
  {
    question: "What is 'The 48-Hour White Diet' after teeth whitening?",
    answer: "For 48 hours post-whitening, tooth enamel pores are slightly receptive. We advise avoiding dark staining items (no black coffee, dark tea, red wine, curry, tomato stew, soy sauce, or tobacco). White rice, grilled chicken, egg whites, milk, and water are completely safe."
  },
  {
    question: "How does HMO and Health Insurance reimbursement work?",
    answer: "Pearl Dental operates as a private fee-for-service boutique clinic. We do not do direct capitation desk billing, but we provide 100% compliant itemized diagnostic receipts, stamped medical claim forms, and ICD-10 diagnosis codes for AXA Mansard, Reliance HMO, Hygeia, Avon HMO, Leadway Health, and Bupa Global to claim full reimbursement."
  },
  {
    question: "Can I pay for clear aligners in installments?",
    answer: "Yes! We offer flexible payment plans. You make an initial 40% deposit upon 3D digital scan approval, and spread the balance comfortably over 3 equal monthly installments."
  },
  {
    question: "Are your clinicians certified by MDCN?",
    answer: "Yes, 100% of our dentists and clinical staff are fully accredited by the Medical and Dental Council of Nigeria (MDCN) and HEFAMAA Lagos."
  }
];

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("All Treatments");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const filteredTreatments =
    activeCategory === "All Treatments"
      ? treatments
      : treatments.filter((t) => t.category === activeCategory);

  const getWhatsAppLink = (treatmentName?: string, price?: number) => {
    const baseUrl = "https://wa.me/2348124008921";
    let text = "Hello Ada! I'd like to book a consultation at Pearl Dental & Aesthetic Clinic.";
    if (treatmentName && price) {
      text = `Hello Ada! I would like to book the *${treatmentName}* (₦${price.toLocaleString()}) at Pearl Dental Clinic. What appointment slots are open this week?`;
    } else if (treatmentName) {
      text = `Hello Ada! I would like to inquire about *${treatmentName}* at Pearl Dental Clinic.`;
    }
    return `${baseUrl}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen bg-[#070f1e] text-[#ffffff] selection:bg-[#00a9ff]/30 selection:text-[#ffffff]">
      {/* 1. TOP ANNOUNCEMENT & PATIENT COORDINATOR BAR */}
      <div className="border-b border-[#00a9ff]/15 bg-[#09152a]/90 px-4 py-2.5 text-xs text-[#cbd5e1] backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#00a9ff]">
              <MapPin className="h-3.5 w-3.5" />
              15 Opebi Road (Opposite Salvation Bus Stop), Ikeja
            </span>
            <span className="hidden items-center gap-1.5 sm:flex">
              <Clock className="h-3.5 w-3.5 text-[#00a9ff]" />
              Mon–Fri: 8:30AM–6:30PM | Sat: 9AM–5PM
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden items-center gap-1.5 text-[#38bdf8] md:flex">
              <ShieldCheck className="h-3.5 w-3.5" />
              MDCN &amp; HEFAMAA Accredited
            </span>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-medium text-[#00a9ff] transition hover:text-[#38bdf8]"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              WhatsApp: +234 812 400 8921
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION */}
      <header className="sticky top-0 z-40 border-b border-[#00a9ff]/15 bg-[#070f1e]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-lg border border-[#00a9ff]/40 bg-[#0c182e] p-1">
              <Image
                src="/logo.png"
                alt="Pearl Dental Clinic Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <span className="font-heading text-xl font-bold tracking-tight text-[#ffffff]">
                Pearl Dental
              </span>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-[#00a9ff]">
                &amp; Aesthetic Clinic • Ikeja
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-[#cbd5e1] md:flex">
            <a href="#treatments" className="transition hover:text-[#00a9ff]">
              Treatments &amp; Pricing
            </a>
            <a href="#journey" className="transition hover:text-[#00a9ff]">
              Patient Journey
            </a>
            <a href="#gallery" className="transition hover:text-[#00a9ff]">
              Smile Gallery
            </a>
            <a href="#doctors" className="transition hover:text-[#00a9ff]">
              Clinicians
            </a>
            <a href="#insurance" className="transition hover:text-[#00a9ff]">
              HMO &amp; Insurance
            </a>
            <a href="#location" className="transition hover:text-[#00a9ff]">
              Location &amp; Hours
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[#00a9ff] bg-[#00a9ff]/10 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#38bdf8] transition hover:bg-[#00a9ff] hover:text-[#070f1e]"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Book Appointment</span>
            </a>
          </div>
        </div>
      </header>

      {/* 3. HERO SECTION (NO PILL BADGES ABOVE H1) */}
      <section className="relative overflow-hidden border-b border-[#00a9ff]/15 pt-16 pb-20 lg:pt-24 lg:pb-32">
        <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
          <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#00a9ff]/25 blur-[120px]" />
          <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#0284c7]/20 blur-[140px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Left Column: Bold Headline & Editorial Copy */}
            <div className="lg:col-span-7">
              <h1 className="font-heading text-4xl font-extrabold tracking-tight text-[#ffffff] sm:text-5xl lg:text-6xl leading-[1.12]">
                The Modern Dental Experience You’ve{" "}
                <span className="cyan-gradient-text">Always Deserved.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-[#cbd5e1]">
                Painless 1-hour laser teeth whitening, invisible clear aligners,
                and precision cosmetic dentistry in a calm, boutique clinic on
                Opebi Road, Ikeja. Zero waiting room delays with dedicated 1-on-1 care.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#00a9ff] to-[#0284c7] px-7 py-4 text-sm font-semibold text-[#070f1e] shadow-lg transition-all hover:opacity-95 hover:shadow-[#00a9ff]/25 font-bold"
                >
                  <MessageCircle className="h-4 w-4 text-[#070f1e]" />
                  <span>Book Consultation (+234 812 400 8921)</span>
                </a>

                <a
                  href="#treatments"
                  className="flex items-center justify-center gap-2 rounded-lg border border-[#00a9ff]/30 bg-[#0c182e] px-7 py-4 text-sm font-medium text-[#ffffff] transition hover:border-[#00a9ff] hover:bg-[#122240]"
                >
                  <span>View Treatments &amp; Pricing</span>
                  <ArrowRight className="h-4 w-4 text-[#00a9ff]" />
                </a>
              </div>

              {/* Trust Features */}
              <div className="mt-12 grid grid-cols-1 gap-4 border-t border-[#00a9ff]/15 pt-8 sm:grid-cols-3">
                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 shrink-0 text-[#00a9ff]" />
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#ffffff]">
                      MDCN Accredited
                    </h4>
                    <p className="mt-1 text-xs text-[#788a9f]">
                      UK &amp; Nigeria certified clinicians.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-[#00a9ff]" />
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#ffffff]">
                      Class-B Autoclave
                    </h4>
                    <p className="mt-1 text-xs text-[#788a9f]">
                      100% sterile &amp; single-use barriers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 shrink-0 text-[#00a9ff]" />
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#ffffff]">
                      Zero Wait Guarantee
                    </h4>
                    <p className="mt-1 text-xs text-[#788a9f]">
                      Your operatory chair is ready on arrival.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Grid */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="relative h-[420px] w-full overflow-hidden rounded-2xl border border-[#00a9ff]/25 shadow-2xl">
                  <Image
                    src="/media/clinic_reception.jpg"
                    alt="Pearl Dental Clinic Reception"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070f1e] via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-[#00a9ff]/20 bg-[#0c182e]/90 p-4 backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold text-[#ffffff]">
                          15 Opebi Road Sanctuary
                        </p>
                        <p className="text-[11px] text-[#cbd5e1]">
                          Opposite Salvation Bus Stop • Ikeja
                        </p>
                      </div>
                      <span className="rounded bg-[#00a9ff]/20 px-2 py-1 text-[10px] font-semibold text-[#38bdf8]">
                        Gated Compound Parking
                      </span>
                    </div>
                  </div>
                </div>

                {/* Secondary Image */}
                <div className="absolute -bottom-8 -left-8 hidden sm:block h-48 w-48 overflow-hidden rounded-xl border-2 border-[#070f1e] shadow-2xl">
                  <Image
                    src="/media/dental_operatory.jpg"
                    alt="Dental Operatory Room"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE PATIENT JOURNEY (4-STEP EXPERIENCE) */}
      <section id="journey" className="border-b border-[#00a9ff]/15 bg-[#09152a] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-3xl sm:text-4xl text-[#ffffff]">
              The Pain-Free Patient Journey
            </h2>
            <p className="mt-3 text-base text-[#cbd5e1] max-w-2xl mx-auto">
              From instant WhatsApp scheduling to transparent 3D digital planning,
              we remove all dental anxiety and unexpected fees.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="clinical-card rounded-2xl p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#00a9ff]/15 border border-[#00a9ff]/30 text-[#00a9ff] font-heading text-lg font-bold">
                01
              </div>
              <h3 className="mt-5 text-base font-bold text-[#ffffff]">
                Instant WhatsApp Booking
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#788a9f]">
                Chat with Ada 24/7 on WhatsApp. Pick your treatment, ask clinical
                questions, and lock in your chair without waiting on hold.
              </p>
            </div>

            <div className="clinical-card rounded-2xl p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#00a9ff]/15 border border-[#00a9ff]/30 text-[#00a9ff] font-heading text-lg font-bold">
                02
              </div>
              <h3 className="mt-5 text-base font-bold text-[#ffffff]">
                3D Digital Scan &amp; Exam
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#788a9f]">
                Arrive at our calm Opebi clinic. Experience low-radiation digital
                X-rays and intraoral 3D camera assessment with Dr. Adeleke.
              </p>
            </div>

            <div className="clinical-card rounded-2xl p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#00a9ff]/15 border border-[#00a9ff]/30 text-[#00a9ff] font-heading text-lg font-bold">
                03
              </div>
              <h3 className="mt-5 text-base font-bold text-[#ffffff]">
                Transparent Blueprint
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#788a9f]">
                Review your treatment plan on a widescreen monitor with upfront,
                fixed pricing in Naira (₦). Zero hidden charges—ever.
              </p>
            </div>

            <div className="clinical-card rounded-2xl p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#00a9ff]/15 border border-[#00a9ff]/30 text-[#00a9ff] font-heading text-lg font-bold">
                04
              </div>
              <h3 className="mt-5 text-base font-bold text-[#ffffff]">
                Walk Out with Confidence
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#788a9f]">
                Enjoy gentle care with noise-cancelling headphones and walk out
                with a dazzling, healthy smile you are proud to show off.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE TREATMENTS & PRICING */}
      <section id="treatments" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl text-[#ffffff]">
                Clinical Treatments &amp; Transparent Fees
              </h2>
              <p className="mt-3 text-base text-[#cbd5e1] max-w-xl">
                Honest, upfront pricing in Nigerian Naira (₦). No surprise bills.
                Consultation deposits are 100% credited toward your procedure.
              </p>
            </div>
            <a
              href={getWhatsAppLink("Custom Treatment Inquiry")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#00a9ff] hover:text-[#38bdf8]"
            >
              <span>Ask a Dental Question</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Category Tabs */}
          <div className="mt-10 flex flex-wrap gap-2 border-b border-[#00a9ff]/15 pb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-lg px-5 py-2 text-xs font-medium transition ${
                  activeCategory === cat
                    ? "bg-[#00a9ff] text-[#070f1e] font-bold"
                    : "bg-[#0c182e] text-[#cbd5e1] hover:bg-[#122240] hover:text-[#ffffff] border border-[#00a9ff]/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Treatments Grid */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {filteredTreatments.map((treatment) => (
              <div
                key={treatment.id}
                className="clinical-card group flex flex-col justify-between overflow-hidden rounded-2xl"
              >
                <div>
                  <div className="relative h-52 w-full overflow-hidden bg-[#0c182e]">
                    <Image
                      src={treatment.image}
                      alt={treatment.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 rounded bg-[#070f1e]/85 px-2.5 py-1 text-[11px] font-medium text-[#00a9ff] backdrop-blur-md">
                      {treatment.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-heading text-lg font-bold text-[#ffffff] group-hover:text-[#38bdf8] transition">
                      {treatment.name}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-[#788a9f]">
                      {treatment.description}
                    </p>

                    <div className="mt-4 flex items-center gap-4 text-xs text-[#cbd5e1]">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5 text-[#00a9ff]" />
                        {treatment.durationMinutes} mins
                      </span>
                      <span className="text-[#788a9f]">•</span>
                      <span>
                        ₦{treatment.depositRequired.toLocaleString()} deposit (credited)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-[#00a9ff]/15 bg-[#070f1e]/50 p-6 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#788a9f]">
                        Treatment Fee
                      </span>
                      <p className="font-heading text-xl font-bold text-[#ffffff]">
                        ₦{treatment.price.toLocaleString()}
                      </p>
                    </div>

                    <a
                      href={getWhatsAppLink(treatment.name, treatment.price)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 rounded-lg bg-[#00a9ff]/15 px-4 py-2 text-xs font-semibold text-[#38bdf8] transition hover:bg-[#00a9ff] hover:text-[#070f1e]"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      <span>Book Slot</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PATIENT TRANSFORMATIONS / SMILE GALLERY */}
      <section id="gallery" className="border-t border-b border-[#00a9ff]/15 bg-[#09152a] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-3xl sm:text-4xl text-[#ffffff]">
              Real Patients. Real Smiles.
            </h2>
            <p className="mt-3 text-base text-[#cbd5e1] max-w-2xl mx-auto">
              Explore before &amp; after outcomes delivered by our clinical
              team using gentle laser technology and precision bonding.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
            {smileCases.map((c, idx) => (
              <div
                key={idx}
                className="clinical-card flex flex-col justify-between rounded-2xl overflow-hidden"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={c.image}
                    alt={c.patient}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c182e] via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="rounded bg-[#00a9ff]/20 px-2.5 py-0.5 text-[10px] font-bold text-[#38bdf8]">
                      {c.result}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="font-heading text-base font-bold text-[#ffffff]">
                    {c.patient}
                  </h4>
                  <p className="text-xs text-[#00a9ff] font-medium">{c.treatment}</p>
                  <p className="mt-3 text-xs italic leading-relaxed text-[#cbd5e1]">
                    “{c.quote}”
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. LEAD CLINICIANS SPOTLIGHT */}
      <section id="doctors" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-3xl sm:text-4xl text-[#ffffff]">
              Meet Our Principal Clinicians
            </h2>
            <p className="mt-3 text-base text-[#cbd5e1] max-w-2xl mx-auto">
              Trained in the UK and Nigeria, our doctors combine international
              clinical credentials with gentle, empathetic chairside care.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {doctors.map((doc) => (
              <div key={doc.name} className="clinical-card rounded-2xl p-8">
                <div className="flex items-center justify-between">
                  <div className="h-14 w-14 rounded-xl border border-[#00a9ff]/40 bg-[#070f1e] flex items-center justify-center font-heading text-xl font-bold text-[#00a9ff]">
                    {doc.name.charAt(3) || "D"}
                  </div>
                  <span className="rounded-full bg-[#00a9ff]/10 border border-[#00a9ff]/30 px-3 py-1 text-[11px] font-semibold text-[#00a9ff]">
                    {doc.tag}
                  </span>
                </div>

                <h3 className="mt-5 font-heading text-xl font-bold text-[#ffffff]">
                  {doc.name}
                </h3>
                <p className="text-xs font-semibold text-[#38bdf8]">
                  {doc.qualifications}
                </p>
                <p className="mt-1 text-xs text-[#00a9ff]">{doc.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#788a9f]">
                  {doc.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. HMO & INSURANCE REIMBURSEMENT */}
      <section id="insurance" className="border-t border-b border-[#00a9ff]/15 bg-[#09152a] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="font-heading text-3xl sm:text-4xl text-[#ffffff]">
                HMO &amp; Insurance Reimbursement
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#cbd5e1]">
                Pearl Dental operates on an independent private fee-for-service model.
                We provide complete documentation to ensure you can claim full
                reimbursement from your HMO provider or employer.
              </p>

              <div className="mt-8 rounded-2xl border border-[#00a9ff]/30 bg-[#0c182e] p-6">
                <h4 className="flex items-center gap-2 text-sm font-bold text-[#38bdf8]">
                  <Receipt className="h-4 w-4" />
                  What We Provide for Every Claim:
                </h4>
                <ul className="mt-3 space-y-2 text-xs text-[#cbd5e1]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#00a9ff]" />
                    Itemized diagnostic receipts with HEFAMAA/MDCN clinic stamp
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#00a9ff]" />
                    Standard ICD-10 medical diagnosis &amp; treatment codes
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#00a9ff]" />
                    Signed doctor claim forms ready for instant insurer submission
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="clinical-card rounded-xl p-6">
                <h4 className="text-base font-bold text-[#ffffff]">
                  Supported HMO Claims &amp; Insurers
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-[#788a9f]">
                  Patients routinely claim reimbursement for scaling &amp; polishing,
                  restorative fillings, and examinations with AXA Mansard, Reliance
                  HMO, Hygeia, Avon HMO, Leadway Health, and Bupa Global.
                </p>
              </div>

              <div className="clinical-card rounded-xl p-6">
                <h4 className="text-base font-bold text-[#ffffff]">
                  Flexible Installment Plans (Clear Aligners &amp; Veneers)
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-[#788a9f]">
                  For Clear Aligners (from ₦650k), make a 40% initial deposit upon
                  3D scan approval and spread the balance across 3 equal monthly
                  installments. For Veneers (₦120k/tooth), pay 50% on tooth preparation
                  and 50% upon final bonding.
                </p>
              </div>

              <div className="clinical-card rounded-xl p-6">
                <h4 className="text-base font-bold text-[#ffffff]">
                  The 48-Hour &quot;White Diet&quot; Protocol
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-[#788a9f]">
                  Following 1-hour laser whitening, avoid dark staining items
                  (coffee, red wine, tomato stew, curry, dark tea) for 48 hours to
                  lock in 6 to 8 shades of brilliant brightness.
                </p>
              </div>
            </div>
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
              Everything you need to know before visiting our Opebi Road clinic.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="clinical-card overflow-hidden rounded-xl border border-[#00a9ff]/20"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between p-5 text-left text-sm font-semibold text-[#ffffff] transition hover:text-[#38bdf8]"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="h-4 w-4 text-[#00a9ff] shrink-0" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-[#788a9f] shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="border-t border-[#00a9ff]/15 bg-[#070f1e]/60 px-5 py-4 text-xs leading-relaxed text-[#cbd5e1]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. LOCATION & CONTACT */}
      <section id="location" className="border-t border-[#00a9ff]/15 bg-[#09152a] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-heading text-3xl sm:text-4xl text-[#ffffff]">
                Visit Our Opebi Clinic
              </h2>
              <p className="text-sm leading-relaxed text-[#cbd5e1]">
                Conveniently situated on Opebi Road, directly opposite Salvation
                Bus Stop and 2 buildings down from GTBank. Gated private compound
                parking with uniformed security guards.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 shrink-0 text-[#00a9ff]" />
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#ffffff]">
                      Address
                    </h4>
                    <p className="mt-1 text-sm text-[#cbd5e1]">
                      15 Opebi Road (Opposite Salvation Bus Stop), Ikeja, Lagos, Nigeria.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 shrink-0 text-[#00a9ff]" />
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#ffffff]">
                      Clinic Hours
                    </h4>
                    <p className="mt-1 text-xs text-[#788a9f]">
                      Monday – Friday: 8:30 AM – 6:30 PM
                      <br />
                      Saturday: 9:00 AM – 5:00 PM (Cosmetic &amp; Aligner Appointments)
                      <br />
                      Sunday: 12:00 PM – 4:00 PM (Emergency Triage On-Call)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Car className="h-5 w-5 shrink-0 text-[#00a9ff]" />
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#ffffff]">
                      Secure Gated Parking
                    </h4>
                    <p className="mt-1 text-xs text-[#788a9f]">
                      Private dedicated parking compound with 24/7 security. Zero street hassle.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="clinical-card rounded-2xl p-8 text-center flex flex-col justify-center items-center h-full">
                <div className="h-16 w-16 rounded-full bg-[#00a9ff]/15 flex items-center justify-center text-[#00a9ff] mb-4">
                  <Smile className="h-8 w-8" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-[#ffffff]">
                  Ready for a Radiant Smile?
                </h3>
                <p className="mt-2 text-sm text-[#cbd5e1] max-w-md">
                  Message Ada on WhatsApp to check open operatory chairs, book
                  your 1-hour laser whitening, or claim your clear aligner assessment.
                </p>

                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#00a9ff] to-[#0284c7] px-8 py-4 text-sm font-bold text-[#070f1e] shadow-lg transition-transform hover:scale-105"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Start WhatsApp Chat with Ada</span>
                </a>

                <p className="mt-4 text-[11px] text-[#788a9f]">
                  Instant Confirmation • WhatsApp: +234 812 400 8921
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="border-t border-[#00a9ff]/15 bg-[#050b16] py-12 text-xs text-[#788a9f]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="relative h-8 w-8 overflow-hidden rounded-lg border border-[#00a9ff]/30 bg-[#0c182e] p-1">
              <Image
                src="/logo.png"
                alt="Pearl Dental Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-heading font-bold text-sm text-[#ffffff]">
              Pearl Dental &amp; Aesthetic Clinic
            </span>
          </div>

          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Pearl Dental Clinic. 15 Opebi Road,
            Ikeja, Lagos. MDCN Accredited.
          </p>

          <div className="flex items-center gap-4 text-[#cbd5e1]">
            <a href="#treatments" className="hover:text-[#00a9ff]">
              Treatments
            </a>
            <a href="#insurance" className="hover:text-[#00a9ff]">
              HMO Policy
            </a>
            <a href="#location" className="hover:text-[#00a9ff]">
              Location
            </a>
          </div>
        </div>
      </footer>

      {/* 12. FLOATING WHATSAPP BUTTON */}
      <aside aria-label="Dental Concierge" className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-[#20ba5a]"
          aria-label="Chat with Ada on WhatsApp"
        >
          <div className="relative flex h-6 w-6 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-40" />
            <MessageCircle className="h-5 w-5 fill-current" />
          </div>
          <div className="hidden text-left sm:block">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-green-100">
              Patient Coordinator
            </p>
            <p className="text-xs font-bold leading-tight">Chat with Ada</p>
          </div>
        </a>
      </aside>
    </div>
  );
}
