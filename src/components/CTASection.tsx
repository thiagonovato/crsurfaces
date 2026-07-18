import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function CTASection() {
  return (
    <section className="bg-brand-900 py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
          Start Your Flooring or Countertop Project Today
        </h2>
        <p className="max-w-xl text-base text-brand-100/80">
          Get a free, no-pressure estimate from {siteConfig.name} — serving Sarasota and Tampa, FL.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-accent-500 px-7 py-3.5 text-base font-semibold text-white transition hover:bg-accent-600"
          >
            Request a Free Estimate
          </Link>
          <a
            href={siteConfig.phoneHref}
            className="rounded-full border border-white/30 px-7 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
          >
            Call {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
