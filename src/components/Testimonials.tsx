const placeholders = [1, 2, 3];

export default function Testimonials() {
  return (
    <section className="bg-brand-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-600">Testimonials</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-brand-900 sm:text-4xl">
            What Our Customers Say
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {placeholders.map((i) => (
            <div key={i} className="rounded-2xl bg-white p-6">
              <div className="flex gap-1 text-accent-500">
                {Array.from({ length: 5 }).map((_, star) => (
                  <svg key={star} width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0l2.163 5.279 5.837.451-4.5 3.809 1.474 5.461L8 11.899l-4.974 3.101 1.474-5.461-4.5-3.809 5.837-.451L8 0z" />
                  </svg>
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-brand-700">
                &ldquo;[Add a real customer review here once collected]&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold text-brand-900">[Customer Name]</p>
              <p className="text-xs text-brand-700/70">[Sarasota or Tampa, FL]</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
