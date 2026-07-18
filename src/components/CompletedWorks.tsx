const works = [
  { title: "Hardwood Flooring Install", location: "Sarasota, FL", className: "bg-[linear-gradient(135deg,#6b4a28,#8a6339)]" },
  { title: "Quartz Kitchen Countertop", location: "Tampa, FL", className: "bg-[linear-gradient(135deg,#403b33,#948c7d)]" },
  { title: "Tile Flooring Install", location: "Sarasota, FL", className: "bg-[linear-gradient(135deg,#4d443b,#7d6a54)]" },
  { title: "Granite Countertop Fabrication", location: "Tampa, FL", className: "bg-[linear-gradient(135deg,#2b2420,#544437)]" },
  { title: "Luxury Vinyl Plank Install", location: "Sarasota, FL", className: "bg-[linear-gradient(135deg,#4a3a2a,#a88a63)]" },
  { title: "Waterfall Edge Island", location: "Tampa, FL", className: "bg-[linear-gradient(135deg,#38322c,#615c53)]" },
];

export default function CompletedWorks() {
  const track = [...works, ...works];

  return (
    <section className="bg-brand-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-600">Our Work</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-brand-900 sm:text-4xl">
            Recent Flooring &amp; Countertop Projects
          </h2>
        </div>
      </div>

      <div className="group relative mt-12 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-brand-50 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-brand-50 to-transparent" />

        <div className="animate-scroll-x flex w-max gap-6 px-4 sm:px-6 lg:px-8">
          {track.map((work, index) => (
            <div
              key={`${work.title}-${index}`}
              className="relative h-64 w-80 shrink-0 overflow-hidden rounded-2xl shadow-md"
            >
              <div className={`absolute inset-0 ${work.className}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-white/70">
                  {work.location}
                </p>
                <p className="mt-1 font-display text-lg font-semibold text-white">{work.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
