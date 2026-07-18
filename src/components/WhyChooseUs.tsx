const points = [
  {
    title: "Free In-Home Estimates",
    description: "We measure and quote your project in person, no guessing from photos.",
  },
  {
    title: "Direct Fabrication",
    description: "We fabricate and install ourselves, no subcontracted middleman markup.",
  },
  {
    title: "Clear Written Quotes",
    description: "One price, in writing, before work starts. No surprise line items later.",
  },
  {
    title: "Clean, Respectful Job Sites",
    description: "We protect your home during the job and clean up when we're done.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-600">Why Choose Us</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-brand-900 sm:text-4xl">
            Why Homeowners Choose CR Surfaces
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point) => (
            <div key={point.title}>
              <div className="h-1 w-10 rounded-full bg-accent-500" />
              <p className="mt-4 font-display text-lg font-semibold text-brand-900">{point.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-brand-700">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
