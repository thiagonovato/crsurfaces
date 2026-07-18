import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteConfig.name}, a flooring and countertop installation company serving Sarasota and Tampa, FL.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand-900 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-400">About Us</p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
            About {siteConfig.name}
          </h1>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl space-y-6 px-4 text-base leading-relaxed text-brand-700 sm:px-6 lg:px-8">
          <p>
            {siteConfig.name} focuses on flooring and countertop installation for homeowners
            across Sarasota and Tampa, FL. We keep our scope narrow on purpose — flooring and
            countertops are what we do, so it&apos;s what we do well.
          </p>
          <p>
            Every project starts with an in-home visit, an honest quote, and a plan you
            understand before any material is ordered. From there, we handle templating,
            fabrication, and installation directly, so there&apos;s no subcontracted middleman
            between the estimate you approved and the crew doing the work.
          </p>
          <p>
            Whether it&apos;s a single room of luxury vinyl plank or a full kitchen of quartz
            countertops, the approach is the same: measure carefully, install cleanly, and leave
            the job site the way we found it.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
