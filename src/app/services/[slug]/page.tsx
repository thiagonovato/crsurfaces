import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllServiceSlugs, getServiceBySlug } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";
import CTASection from "@/components/CTASection";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.title,
      description: service.metaDescription,
      url: `${siteConfig.url}/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: siteConfig.name,
    },
    areaServed: siteConfig.areaServed.map((city) => ({ "@type": "City", name: city })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-brand-900 py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="text-sm font-semibold text-accent-400">
            ← All Services
          </Link>
          <h1 className="mt-4 font-display text-4xl font-semibold text-white sm:text-5xl">
            {service.title}
          </h1>
        </div>
      </section>

      <article className="bg-white py-16">
        <div
          className="prose prose-stone mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose-headings:font-display prose-a:text-accent-600"
          dangerouslySetInnerHTML={{ __html: service.contentHtml }}
        />
      </article>

      <CTASection />
    </>
  );
}
