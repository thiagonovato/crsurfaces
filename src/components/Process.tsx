const steps = [
  { step: "01", title: "Free Consultation", description: "Tell us about your project and we schedule an in-home visit." },
  { step: "02", title: "Measure & Select Materials", description: "We measure your space and help you choose the right material." },
  { step: "03", title: "Fabrication & Installation", description: "We fabricate and install with care, protecting your home." },
  { step: "04", title: "Final Walkthrough", description: "We walk the finished job with you before we consider it done." },
];

export default function Process() {
  return (
    <section className="bg-brand-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-600">Our Process</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-brand-900 sm:text-4xl">
            A Simple, Straightforward Process
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <div key={item.step} className="rounded-2xl bg-white p-6">
              <span className="font-display text-3xl font-semibold text-accent-500">{item.step}</span>
              <p className="mt-4 font-display text-lg font-semibold text-brand-900">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-brand-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
