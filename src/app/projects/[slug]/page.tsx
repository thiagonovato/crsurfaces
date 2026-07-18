import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/projects";
import { siteConfig } from "@/lib/site-config";
import CTASection from "@/components/CTASection";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.metaDescription,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: project.title,
      description: project.metaDescription,
      url: `${siteConfig.url}/projects/${project.slug}`,
      images: project.images,
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <section className="bg-brand-900 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link href="/projects" className="text-sm font-semibold text-accent-400">
            ← All Projects
          </Link>
          <span className="mt-4 block text-sm font-semibold uppercase tracking-wide text-accent-400">
            {project.category === "flooring" ? "Flooring" : "Countertops"}
          </span>
          <h1 className="mt-2 font-display text-4xl font-semibold text-white sm:text-5xl">
            {project.title}
          </h1>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div
            className={`grid gap-4 ${project.images.length > 1 ? "sm:grid-cols-2" : "grid-cols-1"}`}
          >
            {project.images.map((src) => (
              <div key={src} className="relative h-80 overflow-hidden rounded-2xl sm:h-96">
                <Image
                  src={src}
                  alt={project.title}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div
            className="prose prose-stone mt-10 max-w-none prose-headings:font-display prose-a:text-accent-600"
            dangerouslySetInnerHTML={{ __html: project.contentHtml }}
          />
        </div>
      </section>

      <CTASection />
    </>
  );
}
