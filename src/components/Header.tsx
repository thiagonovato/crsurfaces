"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";

const SCROLL_THRESHOLD = 80;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        solid
          ? "border-b border-brand-900/10 bg-brand-50/95 backdrop-blur supports-[backdrop-filter]:bg-brand-50/80"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src={solid ? "/images/logo/logo-mark-transparent.png" : "/images/logo/logo-mark-white.png"}
            alt={siteConfig.name}
            width={288}
            height={153}
            priority
            className="h-10 w-auto sm:h-11"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-accent-500 ${
                solid ? "text-brand-800" : "text-white/90"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={siteConfig.phoneHref}
            className={`text-sm font-semibold transition-colors ${solid ? "text-brand-900" : "text-white"}`}
          >
            {siteConfig.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-accent-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-accent-600"
          >
            Get a Free Quote
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className={`flex h-10 w-10 items-center justify-center rounded-md md:hidden ${
            solid ? "text-brand-900" : "text-white"
          }`}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-brand-900/10 bg-brand-50 px-4 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col gap-1">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-base font-medium text-brand-800 hover:bg-brand-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <a href={siteConfig.phoneHref} className="text-base font-semibold text-brand-900">
              {siteConfig.phone}
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-accent-500 px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
