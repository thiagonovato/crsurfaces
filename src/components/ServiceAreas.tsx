import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function ServiceAreas() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-600">Service Areas</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-brand-900 sm:text-4xl">
            Proudly Serving Sarasota &amp; Tampa, FL
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-700">
            CR Surfaces installs flooring and countertops for homeowners throughout the Sarasota
            and Tampa Bay area, including the surrounding communities below.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {siteConfig.areaServed.map((city) => (
            <span
              key={city}
              className="rounded-full border border-brand-900/15 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-800"
            >
              {city}, FL
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/service-areas/sarasota"
            className="rounded-full bg-brand-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-800"
          >
            Sarasota Flooring &amp; Countertops
          </Link>
          <Link
            href="/service-areas/tampa"
            className="rounded-full bg-brand-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-800"
          >
            Tampa Flooring &amp; Countertops
          </Link>
        </div>
      </div>
    </section>
  );
}
