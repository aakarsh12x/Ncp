"use client";

/**
 * ContactForm
 * Static form UI — does NOT submit to any endpoint.
 * Wire up to a mail service (Resend, Formspree, etc.) before going live.
 */
export default function ContactForm() {
  const inputClass =
    "w-full border border-zinc-200/60 bg-white/40 px-3 py-2 text-xs text-zinc-900 font-body placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 transition-all rounded-lg";

  return (
    <form
      className="border border-zinc-200/50 bg-white/40 backdrop-blur-md shadow-[0_16px_48px_rgba(0,0,0,0.04)] rounded-xl p-5 md:p-6 relative overflow-hidden transition-all hover:bg-white/60"
      onSubmit={(e) => e.preventDefault()}
      aria-label="Pilot request form — currently non-functional (portfolio demo)"
    >
      {/* Subtle accent top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-zinc-900" />

      <div className="flex justify-between items-center mb-4 pt-1">
        <div>
          <p className="text-sm font-bold text-zinc-900">Pilot Scoping Request</p>
          <p className="text-[11px] text-zinc-400 mt-0.5">Typical pilot: 10–20 machines, 30 days</p>
        </div>
        <span className="text-[9px] font-mono text-emerald-600 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 uppercase tracking-wide font-semibold">Free</span>
      </div>

      <div className="space-y-3.5">
        <div>
          <label htmlFor="contact-name" className="block text-[10px] font-semibold uppercase tracking-wider text-zinc-700 mb-1">
            Your name
          </label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            className={inputClass}
            placeholder="Rajesh Kumar"
          />
        </div>

        <div>
          <label htmlFor="contact-company" className="block text-[10px] font-semibold uppercase tracking-wider text-zinc-700 mb-1">
            Company name
          </label>
          <input
            id="contact-company"
            type="text"
            autoComplete="organization"
            className={inputClass}
            placeholder="Acme Manufacturing Pvt. Ltd."
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-[10px] font-semibold uppercase tracking-wider text-zinc-700 mb-1">
            Work email
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            className={inputClass}
            placeholder="you@company.com"
          />
        </div>

        <div>
          <label htmlFor="contact-seats" className="block text-[10px] font-semibold uppercase tracking-wider text-zinc-700 mb-1">
            Approximate number of PCs
          </label>
          <div className="relative">
            <select
              id="contact-seats"
              className={`${inputClass} appearance-none pr-10 cursor-pointer`}
            >
              <option value="">Select a range</option>
              <option>10–50</option>
              <option>50–100</option>
              <option>100–300</option>
              <option>300+</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-zinc-400">
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path d="M1 1.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="contact-message" className="block text-[10px] font-semibold uppercase tracking-wider text-zinc-700 mb-1">
            Anything specific you want to cover?
          </label>
          <textarea
            id="contact-message"
            rows={2}
            className={`${inputClass} resize-none`}
            placeholder="e.g. We have 80 PCs across 3 branches, all bought in 2016–2017."
          />
        </div>
        <button
          type="submit"
          className="w-full bg-zinc-900 text-white text-xs font-semibold py-2.5 hover:bg-zinc-800 transition-all rounded-lg"
        >
          Request a pilot conversation →
        </button>
        <div className="flex justify-between items-center text-[10px] text-zinc-400">
          <span>No commitment required</span>
          <span>Response within 24h</span>
        </div>
      </div>
    </form>
  );
}
