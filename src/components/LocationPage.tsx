import Link from "next/link";
import { getAllServicesMeta } from "@/lib/services";
import CTASection from "@/components/CTASection";

type LocationPageProps = {
  city: string;
  neighborhoods: string[];
  intro: string;
};

export default function LocationPage({ city, neighborhoods, intro }: LocationPageProps) {
  const services = getAllServicesMeta();

  return (
    <>
      <section className="bg-brand-900 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-400">Service Area</p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
            Flooring &amp; Countertops in {city}, FL
          </h1>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 text-base leading-relaxed text-brand-700 sm:px-6 lg:px-8">
          <p>{intro}</p>

          <h2 className="mt-10 font-display text-xl font-semibold text-brand-900">
            Areas We Serve Near {city}
          </h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {neighborhoods.map((n) => (
              <span
                key={n}
                className="rounded-full border border-brand-900/15 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-800"
              >
                {n}
              </span>
            ))}
          </div>

          <h2 className="mt-10 font-display text-xl font-semibold text-brand-900">
            Services Available in {city}
          </h2>
          <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className="text-accent-600 hover:underline">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection />
    </>
  );
}
