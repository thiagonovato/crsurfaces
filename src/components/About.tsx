import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export default function About() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative h-80 overflow-hidden rounded-2xl lg:h-[26rem]">
          <Image
            src="/images/about/about-kitchen-renovation.jpg"
            alt={`${siteConfig.name} kitchen renovation in progress`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-600">About {siteConfig.name}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-brand-900 sm:text-4xl">
            Dedicated to Flooring &amp; Countertop Work You Can Trust
          </h2>
          <p className="mt-6 text-base leading-relaxed text-brand-700">
            {siteConfig.name} focuses on one thing: flooring and countertop installation, done
            right, for homeowners across Sarasota and Tampa. From material selection to final
            walkthrough, we handle the details that make the difference between a floor or
            countertop that looks good on day one and one that still looks good years later.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-brand-900/10 p-4">
              <p className="font-display text-lg font-semibold text-brand-900">Flooring</p>
              <p className="mt-1 text-sm text-brand-700">Hardwood, LVP, tile &amp; stone</p>
            </div>
            <div className="rounded-xl border border-brand-900/10 p-4">
              <p className="font-display text-lg font-semibold text-brand-900">Countertops</p>
              <p className="mt-1 text-sm text-brand-700">Quartz, granite &amp; custom fabrication</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
