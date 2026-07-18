import type { Metadata } from "next";
import Link from "next/link";
import { getAllServicesMeta } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Flooring & Countertop Services",
  description: `Explore flooring and countertop installation services from ${siteConfig.name}, serving Sarasota and Tampa, FL — hardwood, LVP, tile, quartz, granite, and custom fabrication.`,
};

export default function ServicesPage() {
  const services = getAllServicesMeta();
  const flooring = services.filter((s) => s.category === "flooring");
  const countertops = services.filter((s) => s.category === "countertops");

  return (
    <>
      <section className="bg-brand-900 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-400">Our Services</p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
            Flooring &amp; Countertop Services
          </h1>
          <p className="mt-4 max-w-2xl text-base text-brand-100/80">
            Serving homeowners across {siteConfig.serviceAreas.join(" and ")} with hands-on
            fabrication and installation.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-semibold text-brand-900">Flooring</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {flooring.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          <h2 className="mt-16 font-display text-2xl font-semibold text-brand-900">Countertops</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {countertops.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function ServiceCard({
  service,
}: {
  service: ReturnType<typeof getAllServicesMeta>[number];
}) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="flex flex-col rounded-2xl border border-brand-900/10 bg-brand-50 p-6 transition hover:border-accent-400 hover:shadow-lg"
    >
      <p className="font-display text-lg font-semibold text-brand-900">{service.title}</p>
      <p className="mt-2 text-sm leading-relaxed text-brand-700">{service.excerpt}</p>
      <span className="mt-5 text-sm font-semibold text-accent-600">Learn More →</span>
    </Link>
  );
}
