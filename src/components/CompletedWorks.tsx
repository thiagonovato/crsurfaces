import Link from "next/link";
import Image from "next/image";
import { getAllProjectsMeta } from "@/lib/projects";

export default function CompletedWorks() {
  const projects = getAllProjectsMeta();
  const track = [...projects, ...projects];

  return (
    <section className="bg-brand-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent-600">Our Work</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-brand-900 sm:text-4xl">
              Recent Flooring &amp; Countertop Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-sm font-semibold text-accent-600 hover:underline"
          >
            View All Projects →
          </Link>
        </div>
      </div>

      <div className="group relative mt-12 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-brand-50 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-brand-50 to-transparent" />

        <div className="animate-scroll-x flex w-max gap-6 px-4 sm:px-6 lg:px-8">
          {track.map((project, index) => (
            <Link
              key={`${project.slug}-${index}`}
              href={`/projects/${project.slug}`}
              className="relative h-64 w-80 shrink-0 overflow-hidden rounded-2xl shadow-md"
            >
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                sizes="320px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-white/70">
                  {project.category === "flooring" ? "Flooring" : "Countertops"}
                </p>
                <p className="mt-1 font-display text-lg font-semibold text-white">{project.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
