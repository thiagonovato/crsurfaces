import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Request a free flooring or countertop estimate from ${siteConfig.name}, serving Sarasota and Tampa, FL.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-brand-900 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-400">Contact</p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
            Request Your Free Estimate
          </h1>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-2">
            <h2 className="font-display text-xl font-semibold text-brand-900">Get in Touch</h2>
            <ul className="mt-6 space-y-4 text-sm text-brand-700">
              <li>
                <span className="block font-semibold text-brand-900">Phone</span>
                <a href={siteConfig.phoneHref} className="hover:text-accent-600">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <span className="block font-semibold text-brand-900">Email</span>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-accent-600">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
