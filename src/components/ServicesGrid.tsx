import Link from "next/link";
import { getAllServicesMeta } from "@/lib/services";

export default function ServicesGrid() {
  const services = getAllServicesMeta();

  return (
    <section id="services" className="bg-brand-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-600">Our Services</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-brand-900 sm:text-4xl">
            Flooring &amp; Countertop Services
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex flex-col rounded-2xl border border-brand-900/10 bg-white p-6 transition hover:border-accent-400 hover:shadow-lg"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent-100 text-accent-600">
                {service.category === "flooring" ? <FlooringIcon /> : <CountertopIcon />}
              </span>
              <p className="mt-5 font-display text-lg font-semibold text-brand-900">{service.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-brand-700">{service.excerpt}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent-600">
                Learn More
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition group-hover:translate-x-1">
                  <path d="M1 7h11M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function FlooringIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M2 6l8-4 8 4-8 4-8-4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M2 10l8 4 8-4M2 14l8 4 8-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CountertopIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="2" y="8" width="16" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 12v5M16 12v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
