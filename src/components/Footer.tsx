import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { getAllServicesMeta } from "@/lib/services";

export default function Footer() {
  const services = getAllServicesMeta();

  return (
    <footer className="border-t border-brand-900/10 bg-brand-900 text-brand-100">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div>
          <Image
            src="/images/logo/logo-mark-white.png"
            alt={siteConfig.name}
            width={288}
            height={153}
            className="h-11 w-auto"
          />
          <p className="mt-4 text-sm leading-relaxed text-brand-100/80">
            Residential &amp; commercial flooring and countertop installation.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-100/60">Quick Links</p>
          <ul className="mt-4 space-y-2 text-sm">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-accent-400">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-100/60">Our Services</p>
          <ul className="mt-4 space-y-2 text-sm">
            {services.slice(0, 6).map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className="hover:text-accent-400">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-100/60">Contact</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={siteConfig.phoneHref} className="hover:text-accent-400">
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-accent-400">
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-6 text-center text-xs text-brand-100/60 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
