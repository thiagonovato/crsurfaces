import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Service Areas",
  description: `${siteConfig.name} serves homeowners across Sarasota and Tampa, FL with flooring and countertop installation.`,
};

const locations = [
  { city: "Sarasota", href: "/service-areas/sarasota" },
  { city: "Tampa", href: "/service-areas/tampa" },
];

export default function ServiceAreasPage() {
  return (
    <>
      <section className="bg-brand-900 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-400">Service Areas</p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
            Where We Work
          </h1>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:px-8">
          {locations.map((location) => (
            <Link
              key={location.href}
              href={location.href}
              className="rounded-2xl border border-brand-900/10 bg-brand-50 p-8 transition hover:border-accent-400 hover:shadow-lg"
            >
              <p className="font-display text-2xl font-semibold text-brand-900">{location.city}, FL</p>
              <span className="mt-3 inline-block text-sm font-semibold text-accent-600">
                View {location.city} Services →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
