"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  ArrowRight,
  Sparkles,
  Truck,
  ShieldCheck,
} from "lucide-react";

import Image from 'next/image';

const slides = [
  {
    id: 1,
    tag: "Community Reading Network",
    tagIcon: Sparkles,
    headline: "Your Local Library, Delivered",
    description:
      "Democratizing access to books by connecting students and avid readers directly with neighborhood libraries and independent book collectors.",
    ctaPrimary: "Browse Books",
    ctaPrimaryHref: "/browse",
    ctaSecondary: "Become a Provider",
    ctaSecondaryHref: "/register",
    badge: "Over 5,000+ Titles Available",
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    tag: "Safe & Rapid Dispatch",
    tagIcon: Truck,
    headline: "Doorstep Borrowing in Just a Few Clicks",
    description:
      "Request bestsellers, rare manuscripts, and academic textbooks with guaranteed doorstep drop-off and transparent tracking at low delivery fees.",
    ctaPrimary: "Explore Catalog",
    ctaPrimaryHref: "/browse",
    ctaSecondary: "How It Works",
    ctaSecondaryHref: "#",
    badge: "Verified Doorstep Courier",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    tag: "For Librarians & Owners",
    tagIcon: ShieldCheck,
    headline: "Empower Your Local Library Inventory",
    description:
      "List physical books effortlessly, manage borrowing queues, verify returns, and monetize idle collections with our automated provider suite.",
    ctaPrimary: "Start Listing",
    ctaPrimaryHref: "/register",
    ctaSecondary: "Browse Library",
    ctaSecondaryHref: "/browse",
    badge: "100% Verified Readers",
    image:
      "https://images.unsplash.com/photo-1507842229456-832f026a27e0?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const slide = slides[current];
  const TagIcon = slide.tagIcon;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/60 to-white py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative min-h-[460px] md:min-h-[500px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-12"
            >
              {/* Left Column: Text & CTA Content */}
              <div className="lg:col-span-7 space-y-6 text-left">
                {/* Pill Tag */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-semibold text-blue-700 shadow-sm"
                >
                  <TagIcon size={14} />
                  <span>{slide.tag}</span>
                </motion.div>

                {/* Primary Tagline / Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl leading-[1.15]"
                >
                  {slide.headline}
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="max-w-2xl text-base text-gray-600 sm:text-lg leading-relaxed"
                >
                  {slide.description}
                </motion.p>

                {/* CTA Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="flex flex-wrap items-center gap-3.5 pt-2"
                >
                  <Link
                    href={slide.ctaPrimaryHref}
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-700 hover:shadow-blue-500/40"
                  >
                    <BookOpen size={18} />
                    <span>{slide.ctaPrimary}</span>
                    <ArrowRight size={16} />
                  </Link>

                  <Link
                    href={slide.ctaSecondaryHref}
                    className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3.5 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50 hover:border-gray-400"
                  >
                    <span>{slide.ctaSecondary}</span>
                  </Link>
                </motion.div>

                {/* Quick Trust Feature Badges */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-6 pt-4 border-t border-gray-200/80 text-xs text-gray-500"
                >
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span>Real-time availability</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-blue-500" />
                    <span>Stripe-secured fees</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-purple-500" />
                    <span>Verified Reader Reviews</span>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Aesthetic Imagery with Overlay Badge */}
              <div className="lg:col-span-5 relative flex justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.15, duration: 0.5 }}
                  className="relative aspect-4/3 w-full max-w-md lg:max-w-none overflow-hidden rounded-2xl border border-gray-200/80 bg-gray-100 shadow-2xl"
                >
                  <Image
                    src={slide.image}
                    alt={slide.headline}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-gray-950/60 via-transparent to-transparent" />

                  {/* Floating Metric Badge */}
                  <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/20 bg-white/90 p-3.5 backdrop-blur shadow-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                          <BookOpen size={16} />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-gray-900">
                            {slide.badge}
                          </p>
                          <p className="text-[11px] text-gray-500">
                            Live community inventory
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-blue-600">
                        Active
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Navigation Controls */}
        <div className="mt-8 flex items-center justify-between border-t border-gray-200/80 pt-4">
          {/* Indicator Dots */}
          <div className="flex items-center gap-2">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  current === idx
                    ? "w-8 bg-blue-600"
                    : "w-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          {/* Prev / Next Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:bg-gray-50 hover:border-gray-300"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:bg-gray-50 hover:border-gray-300"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
