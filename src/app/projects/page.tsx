import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllProjectsMeta } from "@/lib/projects";
import { siteConfig } from "@/lib/site-config";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Recent Projects",
  description: `Recent flooring and countertop projects completed by ${siteConfig.name} for homeowners across Sarasota and Tampa, FL.`,
};

export default function ProjectsPage() {
  const projects = getAllProjectsMeta();

  return (
    <>
      <section className="bg-brand-900 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-400">Our Work</p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
            Recent Projects
          </h1>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group overflow-hidden rounded-2xl border border-brand-900/10 transition hover:shadow-lg"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold uppercase tracking-wide text-accent-600">
                    {project.category === "flooring" ? "Flooring" : "Countertops"}
                  </span>
                  <p className="mt-1 font-display text-lg font-semibold text-brand-900">
                    {project.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-brand-700">{project.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
