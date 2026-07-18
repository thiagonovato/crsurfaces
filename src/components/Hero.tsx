"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";
import heroCountertops from "../../public/images/hero/hero-1-countertops.jpg";
import heroFlooringVaulted from "../../public/images/hero/hero-2-flooring-vaulted.jpg";
import heroFlooringView from "../../public/images/hero/hero-3-flooring-view.jpg";

const slides = [
  {
    label: "Custom Stone Countertops",
    image: heroCountertops,
    alt: "Kitchen with natural stone countertops and backsplash installed by CR Surfaces",
  },
  {
    label: "Hardwood Flooring",
    image: heroFlooringVaulted,
    alt: "Hardwood flooring installation in a vaulted, beam-ceiling living room",
  },
  {
    label: "Waterfront Flooring",
    image: heroFlooringView,
    alt: "Hardwood flooring in a beachfront living room with ocean-view windows",
  },
];

const SLIDE_DURATION_MS = 5000;

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.label}
            aria-hidden={index !== active}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
              index === active ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-brand-950/55 to-brand-950/30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full bg-accent-500/90 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white">
            Sarasota &amp; Tampa, FL
          </span>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Flooring &amp; Countertops Built to Last
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
            {siteConfig.name} installs hardwood, tile, and luxury vinyl flooring alongside quartz
            and granite countertops for homeowners across Sarasota and Tampa — precise
            fabrication, clean installs, no shortcuts.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-accent-500 px-7 py-3.5 text-base font-semibold text-white shadow-lg transition hover:bg-accent-600"
            >
              Get Your Free Estimate
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.label}
            type="button"
            aria-label={`Show ${slide.label} slide`}
            onClick={() => setActive(index)}
            className={`h-1.5 rounded-full transition-all ${
              index === active ? "w-8 bg-white" : "w-1.5 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
