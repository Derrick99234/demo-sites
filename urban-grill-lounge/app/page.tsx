"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Flame,
  Clock,
  MapPin,
  ShieldCheck,
  Music,
  Wine,
  Utensils,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  Star,
  Users,
  Car,
  GlassWater,
  PartyPopper,
  Sparkles,
  Award
} from "lucide-react";

interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: number;
  currency: string;
  description: string;
  image: string;
  isAvailable: boolean;
}

const menuItems: MenuItem[] = [
  {
    id: "prod_rest_001",
    name: "Flame-Grilled Jumbo Croaker Platter",
    category: "Seafood Grill",
    price: 28000,
    currency: "NGN",
    description: "Whole 1.2kg ocean croaker fish marinated in scotch bonnet herb butter, wood-smoked over open coals. Served with roasted plantain (boli), yam chips, and spicy pepper dip.",
    image: "/products/grilled_fish_platter.jpg",
    isAvailable: true
  },
  {
    id: "prod_rest_002",
    name: "350g Prime Angus Ribeye Steak",
    category: "Charcoal Steaks",
    price: 38000,
    currency: "NGN",
    description: "28-day aged USDA prime ribeye steak grilled to your preferred temperature with garlic rosemary butter. Served with creamy truffle mash and Madagascar green peppercorn sauce.",
    image: "/products/ribeye_steak.jpg",
    isAvailable: true
  },
  {
    id: "prod_rest_003",
    name: "Creamy Cajun Seafood Alfredo",
    category: "Mains & Pasta",
    price: 26000,
    currency: "NGN",
    description: "Tender jumbo tiger prawns and Atlantic calamari rings tossed in a rich cajun cream sauce over fresh tagliatelle, finished with aged Parmigiano Reggiano.",
    image: "/products/seafood_pasta.jpg",
    isAvailable: true
  },
  {
    id: "prod_rest_004",
    name: "The Urban Flame Wagyu Burger",
    category: "Gourmet Burgers",
    price: 16500,
    currency: "NGN",
    description: "Double smashed prime beef patties on a toasted brioche bun with smoked cheddar, caramelized shallots, crispy beef bacon, and black truffle mayo. Includes seasoned fries.",
    image: "/products/urban_flame_burger.jpg",
    isAvailable: true
  },
  {
    id: "prod_rest_005",
    name: "Lagos Sunset Signature Cocktail",
    category: "Signature Bar",
    price: 8500,
    currency: "NGN",
    description: "Aged dark rum infused with passion fruit puree, artisanal zobo (hibiscus) reduction, fresh lime, and topped with crisp Italian Prosecco.",
    image: "/products/lagos_sunset_cocktail.jpg",
    isAvailable: true
  },
  {
    id: "prod_rest_006",
    name: "VIP Lounge Booth Reservation",
    category: "Reservations",
    price: 50000,
    currency: "NGN",
    description: "Guarantees priority elevated lounge seating for up to 8 guests on Friday/Saturday nights. Full ₦50,000 credited directly toward your total food and bottle service bill.",
    image: "/media/bar_lounge.jpg",
    isAvailable: true
  },
  {
    id: "prod_rest_007",
    name: "Standard Group Table Deposit (5+ Guests)",
    category: "Reservations",
    price: 20000,
    currency: "NGN",
    description: "Secures an indoor or outdoor terrace dining table for dinner. 100% credited toward your dining order upon arrival.",
    image: "/media/restaurant_dining_room.jpg",
    isAvailable: true
  }
];

const categories = [
  "All Items",
  "Seafood Grill",
  "Charcoal Steaks",
  "Mains & Pasta",
  "Gourmet Burgers",
  "Signature Bar",
  "Reservations"
];

const diningSpaces = [
  {
    title: "The Intimate Dining Room",
    subtitle: "Executive dinners & romantic celebrations",
    desc: "Sophisticated mood lighting, plush booth seating, and attentive table service designed for executive business dinners, anniversaries, and date nights.",
    image: "/media/restaurant_dining_room.jpg",
    tag: "Indoor • Climate Controlled"
  },
  {
    title: "The Open-Air Terrace Grill",
    subtitle: "Charcoal aroma & breezy Isaac John street views",
    desc: "Breezy outdoor terrace where you can watch our pitmasters fire whole croaker fish and prime steaks over glowing hardwood embers in real time.",
    image: "/products/grilled_fish_platter.jpg",
    tag: "Al Fresco • Live Grill"
  },
  {
    title: "The VIP Cocktail Lounge",
    subtitle: "Craft cocktails & resident DJs after 9 PM",
    desc: "The heartbeat of Ikeja GRA nightlife. High-end bottle service, craft mixology, and curated Afro-house and Amapiano sets every Friday and Saturday night.",
    image: "/media/bar_lounge.jpg",
    tag: "Late Night • Strictly 21+"
  }
];

const team = [
  {
    name: "Chef Femi Banjo",
    role: "Executive Chef & Master Pitmaster",
    bio: "20+ years mastering open-fire charcoal grilling, wood smoking, and 28-day dry aged meats paired with authentic Nigerian spice profiles.",
    tag: "Fire & Smoked Meats"
  },
  {
    name: "Tariq Balogun",
    role: "Head Mixologist & Beverage Director",
    bio: "Pioneer in modern Nigerian mixology, crafting botanical infusions, house-smoked bitters, and signature Lagos nightlife libations.",
    tag: "Craft Cocktails"
  }
];

const testimonials = [
  {
    quote: "The best grilled croaker on the mainland, period. The fish was huge, seasoned deep to the bone, and the boli was sweet and perfectly roasted. The vibe on the terrace is unmatched on a Friday evening.",
    author: "Babatunde Alao",
    location: "Ikeja GRA",
    highlight: "Flame-Grilled Jumbo Croaker"
  },
  {
    quote: "Celebrated my 30th birthday here—exceptional staff! We had a table of 10. Booking on WhatsApp took 60 seconds with Kayla, our deposit was deducted smoothly, and the sparkler presentation for my cake was unforgettable.",
    author: "Sharon Eke",
    location: "Victoria Island",
    highlight: "Celebration Birthday Package"
  },
  {
    quote: "Most places in Lagos overcook steak no matter what you request. Chef Femi nailed the ribeye with incredible char and tender juiciness. Top-tier cocktails as well.",
    author: "Kunle Adeleke",
    location: "Magodo",
    highlight: "350g Prime Angus Ribeye"
  }
];

const faqs = [
  {
    question: "Can we bring our own birthday cake?",
    answer: "Absolutely! We offer our Celebration Cake Package for ₦5,000, which includes cold sparklers, dry ice presentation, festive celebration song by our staff, cake cutting, and dessert service for all your guests."
  },
  {
    question: "How do table reservations and deposits work?",
    answer: "Standard tables for 1–4 guests are completely free to reserve. For groups of 5+ on peak evenings (Fri–Sun), a ₦20,000 deposit confirms your table. 100% of this deposit is credited directly to your final food and drink tab upon arrival."
  },
  {
    question: "What is your corkage fee for wine or champagne?",
    answer: "For bespoke vintage wines or rare spirits not listed on our cellar menu, our corkage fee is ₦15,000 per 750ml bottle."
  },
  {
    question: "What is the dress code?",
    answer: "Smart Casual. We kindly ask our guests to avoid bathroom slippers, singlets, and gym wear in our indoor dining room and VIP cocktail lounge after 6:00 PM."
  },
  {
    question: "Are your meats Halal certified?",
    answer: "Yes, 100% of our beef, poultry, and lamb cuts are sourced from certified Halal suppliers."
  }
];

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("All Items");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const filteredItems =
    activeCategory === "All Items"
      ? menuItems
      : menuItems.filter((i) => i.category === activeCategory);

  const getWhatsAppLink = (itemOrOccasion?: string, price?: number) => {
    const baseUrl = "https://wa.me/2348039124478";
    let text = "Hello Kayla! I'd like to reserve a table at The Urban Grill & Lounge.";
    if (itemOrOccasion && price) {
      text = `Hello Kayla! I would like to inquire / book *${itemOrOccasion}* (₦${price.toLocaleString()}) at The Urban Grill. What dates and times are open?`;
    } else if (itemOrOccasion) {
      text = `Hello Kayla! I would like to reserve a table for *${itemOrOccasion}* at The Urban Grill.`;
    }
    return `${baseUrl}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen bg-[#0b0d13] text-[#f8fafc] selection:bg-[#ea580c]/30 selection:text-[#f8fafc]">
      {/* 1. TOP ANNOUNCEMENT & RESERVATION BAR */}
      <div className="border-b border-[#ea580c]/15 bg-[#0f131d]/90 px-4 py-2.5 text-xs text-[#cbd5e1] backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#f97316]">
              <MapPin className="h-3.5 w-3.5" />
              42 Isaac John Street, Ikeja GRA, Lagos
            </span>
            <span className="hidden items-center gap-1.5 sm:flex">
              <Clock className="h-3.5 w-3.5 text-[#f97316]" />
              Tue–Thu: 12PM–11:30PM | Fri–Sat: 12PM–2AM | Sun: 1PM–11PM
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden items-center gap-1.5 text-[#fb923c] md:flex">
              <Car className="h-3.5 w-3.5" />
              Free Secure Valet Parking Inside Compound
            </span>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-medium text-[#f97316] transition hover:text-[#fb923c]"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              WhatsApp: +234 803 912 4478
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION */}
      <header className="sticky top-0 z-40 border-b border-[#ea580c]/15 bg-[#0b0d13]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-lg border border-[#ea580c]/40 bg-[#121622] p-1">
              <Image
                src="/logo.png"
                alt="The Urban Grill & Lounge Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <span className="font-heading text-xl font-bold tracking-tight text-[#f8fafc]">
                The Urban Grill
              </span>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-[#f97316]">
                &amp; Lounge • Ikeja GRA
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-[#cbd5e1] md:flex">
            <a href="#menu" className="transition hover:text-[#f97316]">
              Menu &amp; Grills
            </a>
            <a href="#spaces" className="transition hover:text-[#f97316]">
              The Spaces
            </a>
            <a href="#culinary" className="transition hover:text-[#f97316]">
              Pitmasters
            </a>
            <a href="#reviews" className="transition hover:text-[#f97316]">
              Reviews
            </a>
            <a href="#policies" className="transition hover:text-[#f97316]">
              Dining Policies
            </a>
            <a href="#location" className="transition hover:text-[#f97316]">
              Location &amp; Valet
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[#ea580c] bg-[#ea580c]/10 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#f97316] transition hover:bg-[#ea580c] hover:text-white"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Reserve Table</span>
            </a>
          </div>
        </div>
      </header>

      {/* 3. HERO SECTION (NO PILL BADGES ABOVE H1) */}
      <section className="relative overflow-hidden border-b border-[#ea580c]/15 pt-16 pb-20 lg:pt-24 lg:pb-32">
        <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
          <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#ea580c]/25 blur-[120px]" />
          <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#b45309]/20 blur-[140px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Left Column: Bold Headline & Editorial Copy */}
            <div className="lg:col-span-7">
              <h1 className="font-heading text-4xl font-extrabold tracking-tight text-[#f8fafc] sm:text-5xl lg:text-6xl leading-[1.12]">
                Wood-Fired Perfection Meets{" "}
                <span className="flame-gradient-text">Electric Lagos</span>{" "}
                Nights.
              </h1>

              <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-[#cbd5e1]">
                Ikeja GRA’s premier destination for charcoal-grilled prime steaks,
                flame-kissed coastal seafood platters, handcrafted mixology, and
                high-energy weekend vibes on Isaac John Street.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#ea580c] to-[#c2410c] px-7 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:opacity-95 hover:shadow-[#ea580c]/25"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Reserve on WhatsApp (+234 803 912 4478)</span>
                </a>

                <a
                  href="#menu"
                  className="flex items-center justify-center gap-2 rounded-lg border border-[#ea580c]/30 bg-[#121622] px-7 py-4 text-sm font-medium text-[#f8fafc] transition hover:border-[#ea580c] hover:bg-[#191e2e]"
                >
                  <span>Explore Food &amp; Bar Menu</span>
                  <ArrowRight className="h-4 w-4 text-[#f97316]" />
                </a>
              </div>

              {/* Steakhouse Trust Features */}
              <div className="mt-12 grid grid-cols-1 gap-4 border-t border-[#ea580c]/15 pt-8 sm:grid-cols-3">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-[#f97316]" />
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#f8fafc]">
                      100% Halal Meats
                    </h4>
                    <p className="mt-1 text-xs text-[#64748b]">
                      Certified prime beef, poultry &amp; lamb.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Car className="h-5 w-5 shrink-0 text-[#f97316]" />
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#f8fafc]">
                      Free Valet Parking
                    </h4>
                    <p className="mt-1 text-xs text-[#64748b]">
                      Private compound with 24/7 security.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Music className="h-5 w-5 shrink-0 text-[#f97316]" />
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#f8fafc]">
                      Live Weekend Sets
                    </h4>
                    <p className="mt-1 text-xs text-[#64748b]">
                      Afro-house &amp; Amapiano DJs (Fri &amp; Sat).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Grid */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="relative h-[420px] w-full overflow-hidden rounded-2xl border border-[#ea580c]/25 shadow-2xl">
                  <Image
                    src="/media/restaurant_dining_room.jpg"
                    alt="The Urban Grill Dining Room"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d13] via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-[#ea580c]/20 bg-[#121622]/85 p-4 backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold text-[#f8fafc]">
                          Isaac John Strip • Ikeja GRA
                        </p>
                        <p className="text-[11px] text-[#cbd5e1]">
                          Charcoal Grills, Steaks &amp; VIP Cocktail Lounge
                        </p>
                      </div>
                      <span className="rounded bg-[#ea580c]/20 px-2 py-1 text-[10px] font-semibold text-[#f97316]">
                        Open Till 2 AM (Fri–Sat)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Secondary Visual Overlay */}
                <div className="absolute -bottom-8 -left-8 hidden sm:block h-48 w-48 overflow-hidden rounded-xl border-2 border-[#0b0d13] shadow-2xl">
                  <Image
                    src="/products/grilled_fish_platter.jpg"
                    alt="Flame-Grilled Croaker Fish"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THREE DISTINCT DINING EXPERIENCES */}
      <section id="spaces" className="border-b border-[#ea580c]/15 bg-[#0f131d] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-3xl sm:text-4xl text-[#f8fafc]">
              Three Distinct Dining Atmospheres
            </h2>
            <p className="mt-3 text-base text-[#cbd5e1] max-w-2xl mx-auto">
              Whether you desire an executive business dinner, an open-air
              terrace breeze, or high-energy late night bottle service, we have
              the perfect setting for you.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
            {diningSpaces.map((space) => (
              <div
                key={space.title}
                className="steakhouse-card group flex flex-col justify-between overflow-hidden rounded-2xl"
              >
                <div>
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={space.image}
                      alt={space.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 rounded bg-[#0b0d13]/85 px-2.5 py-1 text-[10px] font-semibold text-[#f97316] backdrop-blur-md">
                      {space.tag}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-heading text-lg font-bold text-[#f8fafc] group-hover:text-[#f97316] transition">
                      {space.title}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-[#f97316]">
                      {space.subtitle}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-[#64748b]">
                      {space.desc}
                    </p>
                  </div>
                </div>

                <div className="border-t border-[#ea580c]/15 bg-[#0b0d13]/40 p-6 pt-4">
                  <a
                    href={getWhatsAppLink(space.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-xs font-semibold text-[#f97316] hover:text-[#fb923c]"
                  >
                    <span>Reserve in this Area</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE MENU & PRICING */}
      <section id="menu" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl text-[#f8fafc]">
                Curated Grills, Steaks &amp; Bar Menu
              </h2>
              <p className="mt-3 text-base text-[#cbd5e1] max-w-xl">
                Transparent menu pricing in Nigerian Naira (₦). Hand-cut steaks,
                coastal ocean catches, artisanal pasta, and handcrafted cocktails.
              </p>
            </div>
            <a
              href={getWhatsAppLink("Full Menu Inquiry")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#f97316] hover:text-[#fb923c]"
            >
              <span>Custom Event / Bottle Menu</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Category Filter Tabs */}
          <div className="mt-10 flex flex-wrap gap-2 border-b border-[#ea580c]/15 pb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-lg px-5 py-2 text-xs font-medium transition ${
                  activeCategory === cat
                    ? "bg-[#ea580c] text-white font-bold"
                    : "bg-[#121622] text-[#cbd5e1] hover:bg-[#191e2e] hover:text-[#f8fafc] border border-[#ea580c]/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Items Grid */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="steakhouse-card group flex flex-col justify-between overflow-hidden rounded-2xl"
              >
                <div>
                  <div className="relative h-52 w-full overflow-hidden bg-[#191e2e]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 rounded bg-[#0b0d13]/85 px-2.5 py-1 text-[11px] font-medium text-[#f97316] backdrop-blur-md">
                      {item.category}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-heading text-base font-bold text-[#f8fafc] group-hover:text-[#fb923c] transition">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-[#64748b] line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="border-t border-[#ea580c]/15 bg-[#0b0d13]/50 p-5 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#64748b]">
                        Price
                      </span>
                      <p className="font-heading text-lg font-bold text-[#f8fafc]">
                        ₦{item.price.toLocaleString()}
                      </p>
                    </div>

                    <a
                      href={getWhatsAppLink(item.name, item.price)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 rounded-lg bg-[#ea580c]/15 px-3.5 py-2 text-xs font-semibold text-[#f97316] transition hover:bg-[#ea580c] hover:text-white"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      <span>Order / Book</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CULINARY LEADERSHIP & MIXOLOGY */}
      <section id="culinary" className="border-t border-b border-[#ea580c]/15 bg-[#0f131d] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-3xl sm:text-4xl text-[#f8fafc]">
              Masters of the Flame &amp; Shaker
            </h2>
            <p className="mt-3 text-base text-[#cbd5e1] max-w-2xl mx-auto">
              Our culinary pitmasters and beverage artisans bring precision,
              premium ingredients, and unmatched passion to every plate and glass.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="steakhouse-card rounded-2xl p-8">
                <div className="flex items-center justify-between">
                  <div className="h-14 w-14 rounded-xl border border-[#ea580c]/40 bg-[#191e2e] flex items-center justify-center font-heading text-xl font-bold text-[#f97316]">
                    {member.name.charAt(0)}
                  </div>
                  <span className="rounded-full bg-[#ea580c]/10 border border-[#ea580c]/30 px-3 py-1 text-[11px] font-semibold text-[#f97316]">
                    {member.tag}
                  </span>
                </div>

                <h3 className="mt-5 font-heading text-xl font-bold text-[#f8fafc]">
                  {member.name}
                </h3>
                <p className="text-xs font-medium text-[#f97316]">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#64748b]">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. GUEST REVIEWS */}
      <section id="reviews" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-3xl sm:text-4xl text-[#f8fafc]">
              Diner Stories &amp; Social Proof
            </h2>
            <p className="mt-3 text-base text-[#cbd5e1] max-w-2xl mx-auto">
              Read authentic feedback from foodies, executives, and celebrants
              who make The Urban Grill their go-to destination in Ikeja GRA.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="steakhouse-card flex flex-col justify-between rounded-2xl p-7"
              >
                <div>
                  <div className="flex gap-1 text-[#f97316]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-[#f8fafc] italic">
                    “{t.quote}”
                  </p>
                </div>

                <div className="mt-8 border-t border-[#ea580c]/15 pt-4">
                  <p className="font-bold text-sm text-[#f8fafc]">{t.author}</p>
                  <p className="text-xs text-[#64748b]">
                    {t.location} • <span className="text-[#f97316]">{t.highlight}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. DINING POLICIES & CELEBRATIONS */}
      <section id="policies" className="border-t border-[#ea580c]/15 bg-[#0f131d] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="font-heading text-3xl sm:text-4xl text-[#f8fafc]">
                Dining Policies &amp; Celebrations
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#cbd5e1]">
                To maintain the highest quality of service and ambiance for all
                guests, please review our table holding, celebration cake, and
                corkage policies.
              </p>

              <div className="mt-8 rounded-2xl border border-[#ea580c]/30 bg-[#121622] p-6">
                <h4 className="flex items-center gap-2 text-sm font-semibold text-[#fb923c]">
                  <PartyPopper className="h-4 w-4" />
                  Celebration Cake Package (₦5,000)
                </h4>
                <ul className="mt-3 space-y-2 text-xs text-[#cbd5e1]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#f97316]" />
                    Festive cold sparklers &amp; dry ice presentation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#f97316]" />
                    Celebratory staff song &amp; cake cutting service
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#f97316]" />
                    Premium dessert plating &amp; utensils for all guests
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="steakhouse-card rounded-xl p-6">
                <h4 className="text-base font-bold text-[#f8fafc]">
                  Group Reservations &amp; Deposit (100% Credited)
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-[#64748b]">
                  Groups of 5+ on Friday–Sunday require a ₦20,000 reservation deposit
                  to secure prime seating. 100% of this amount is credited to your
                  food &amp; beverage bill.
                </p>
              </div>

              <div className="steakhouse-card rounded-xl p-6">
                <h4 className="text-base font-bold text-[#f8fafc]">
                  Lagos Traffic Grace Period (Up to 30 Mins)
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-[#64748b]">
                  Tables are normally held for 15 minutes. If navigating heavy
                  traffic on Mobolaji Bank Anthony or Isaac John, simply message
                  Kayla on WhatsApp and we will extend your table hold up to 30 minutes.
                </p>
              </div>

              <div className="steakhouse-card rounded-xl p-6">
                <h4 className="text-base font-bold text-[#f8fafc]">
                  Corkage Policy (₦15,000 / 750ml Bottle)
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-[#64748b]">
                  Guests wishing to bring rare vintage wines or private cellar
                  bottles not offered on our beverage list are welcomed with a
                  corkage fee of ₦15,000 per bottle.
                </p>
              </div>

              <div className="steakhouse-card rounded-xl p-6">
                <h4 className="text-base font-bold text-[#f8fafc]">
                  Smart Casual Dress Code
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-[#64748b]">
                  We maintain an upscale dining ambiance. Bathroom slippers,
                  singlets, and athletic gym wear are restricted in the main
                  dining room and lounge after 6:00 PM.
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
            <h2 className="font-heading text-3xl sm:text-4xl text-[#f8fafc]">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-base text-[#cbd5e1]">
              Everything you need to know before booking your table with Kayla.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="steakhouse-card overflow-hidden rounded-xl border border-[#ea580c]/20"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between p-5 text-left text-sm font-semibold text-[#f8fafc] transition hover:text-[#f97316]"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="h-4 w-4 text-[#f97316] shrink-0" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-[#64748b] shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="border-t border-[#ea580c]/15 bg-[#0b0d13]/60 px-5 py-4 text-xs leading-relaxed text-[#cbd5e1]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. LOCATION & VALET */}
      <section id="location" className="border-t border-[#ea580c]/15 bg-[#0f131d] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-heading text-3xl sm:text-4xl text-[#f8fafc]">
                Find Us on Isaac John Street
              </h2>
              <p className="text-sm leading-relaxed text-[#cbd5e1]">
                Located in the heart of Ikeja GRA along the iconic Isaac John
                restaurant corridor, opposite the Radisson Blu corridor.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 shrink-0 text-[#f97316]" />
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#f8fafc]">
                      Address
                    </h4>
                    <p className="mt-1 text-sm text-[#cbd5e1]">
                      42 Isaac John Street, Ikeja GRA, Lagos, Nigeria.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 shrink-0 text-[#f97316]" />
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#f8fafc]">
                      Service Hours
                    </h4>
                    <p className="mt-1 text-xs text-[#64748b]">
                      Tuesday – Thursday: 12:00 PM – 11:30 PM (Kitchen closes 10:30 PM)
                      <br />
                      Friday – Saturday: 12:00 PM – 2:00 AM (Late night lounge &amp; DJ)
                      <br />
                      Sunday: 1:00 PM – 11:00 PM (Champagne Brunch 1PM–5PM)
                      <br />
                      Monday: Closed for Sanitization
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Car className="h-5 w-5 shrink-0 text-[#f97316]" />
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#f8fafc]">
                      Valet &amp; Security
                    </h4>
                    <p className="mt-1 text-xs text-[#64748b]">
                      Complimentary professional valet service inside our gated
                      compound with numbered tags and 24/7 armed security.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="steakhouse-card rounded-2xl p-8 text-center flex flex-col justify-center items-center h-full">
                <div className="h-16 w-16 rounded-full bg-[#ea580c]/15 flex items-center justify-center text-[#f97316] mb-4">
                  <Flame className="h-8 w-8" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-[#f8fafc]">
                  Reserve Your Table in 60 Seconds
                </h3>
                <p className="mt-2 text-sm text-[#cbd5e1] max-w-md">
                  Message Kayla directly on WhatsApp to check table availability,
                  book VIP booths, or arrange custom birthday celebrations.
                </p>

                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#ea580c] to-[#c2410c] px-8 py-4 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Chat with Kayla on WhatsApp</span>
                </a>

                <p className="mt-4 text-[11px] text-[#64748b]">
                  Instant Table Confirmation • WhatsApp: +234 803 912 4478
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="border-t border-[#ea580c]/15 bg-[#08090d] py-12 text-xs text-[#64748b]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="relative h-8 w-8 overflow-hidden rounded-lg border border-[#ea580c]/30 bg-[#121622] p-1">
              <Image
                src="/logo.png"
                alt="The Urban Grill Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-heading font-bold text-sm text-[#f8fafc]">
              The Urban Grill &amp; Lounge
            </span>
          </div>

          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} The Urban Grill &amp; Lounge. 42 Isaac John
            Street, Ikeja GRA, Lagos. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-[#cbd5e1]">
            <a href="#menu" className="hover:text-[#f97316]">
              Menu
            </a>
            <a href="#spaces" className="hover:text-[#f97316]">
              Spaces
            </a>
            <a href="#policies" className="hover:text-[#f97316]">
              Policies
            </a>
            <a href="#location" className="hover:text-[#f97316]">
              Valet
            </a>
          </div>
        </div>
      </footer>

      {/* 12. FLOATING WHATSAPP BUTTON */}
      <aside aria-label="Table Reservations" className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-[#20ba5a]"
          aria-label="Reserve table on WhatsApp with Kayla"
        >
          <div className="relative flex h-6 w-6 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-40" />
            <MessageCircle className="h-5 w-5 fill-current" />
          </div>
          <div className="hidden text-left sm:block">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-green-100">
              Table Maitre D&apos;
            </p>
            <p className="text-xs font-bold leading-tight">Chat with Kayla</p>
          </div>
        </a>
      </aside>
    </div>
  );
}
