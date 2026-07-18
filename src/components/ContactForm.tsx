"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/site-config";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const phone = String(formData.get("phone") ?? "");
    const projectType = String(formData.get("projectType") ?? "");
    const message = String(formData.get("message") ?? "");

    const subject = encodeURIComponent(`Estimate Request: ${projectType || "Flooring/Countertops"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nProject Type: ${projectType}\n\n${message}`
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-brand-800">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1.5 w-full rounded-lg border border-brand-900/15 px-4 py-2.5 text-sm focus:border-accent-500 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-brand-800">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="mt-1.5 w-full rounded-lg border border-brand-900/15 px-4 py-2.5 text-sm focus:border-accent-500 focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium text-brand-800">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1.5 w-full rounded-lg border border-brand-900/15 px-4 py-2.5 text-sm focus:border-accent-500 focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="projectType" className="text-sm font-medium text-brand-800">
          Project Type
        </label>
        <select
          id="projectType"
          name="projectType"
          className="mt-1.5 w-full rounded-lg border border-brand-900/15 px-4 py-2.5 text-sm focus:border-accent-500 focus:outline-none"
        >
          <option>Flooring</option>
          <option>Countertops</option>
          <option>Both</option>
          <option>Not sure yet</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-brand-800">
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="mt-1.5 w-full rounded-lg border border-brand-900/15 px-4 py-2.5 text-sm focus:border-accent-500 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-600 sm:w-auto"
      >
        Send Message
      </button>

      {submitted && (
        <p className="text-sm text-brand-700">
          Opening your email app to send this request. If nothing opens, email us directly at{" "}
          <a href={`mailto:${siteConfig.email}`} className="font-semibold text-accent-600">
            {siteConfig.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
