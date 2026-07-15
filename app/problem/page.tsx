import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";

export const metadata: Metadata = {
  title: "The Windows 10 EOL Problem",
  description:
    "Windows 10 goes end-of-life October 2025. For businesses with fleets of older PCs, the standard answer (replacing all the hardware) carries a cost most IT budgets haven't planned for. Here's what that actually looks like.",
  openGraph: {
    title: "The Windows 10 EOL Problem | NComputing LEAF OS",
    description:
      "Bulk hardware replacement costs ₹25,000–₹45,000 per seat. For a 200-seat operation, that's ₹50–90 lakh in unplanned capex. There is another way.",
    url: "/problem",
  },
};

const WHO_IT_HITS = [
  {
    sector: "Manufacturing & back-office",
    scenario:
      "200–500 data-entry workstations running shift work. Every downtime minute costs money. A staged PC refresh takes weeks and disrupts operations.",
    seats: "200–500",
  },
  {
    sector: "Multi-branch retail chains",
    scenario:
      "30 stores, each with 8–12 checkout and back-office PCs. A hardware refresh means coordinating 240+ machine replacements across locations, each with different IT coverage.",
    seats: "240–360",
  },
  {
    sector: "Schools and coaching institutes",
    scenario:
      "Computer labs bought in 2015–2018 with fixed IT budgets. Windows 11 requires TPM 2.0 and an 8th-gen or newer CPU, hardware most of those machines lack.",
    seats: "30–120",
  },
  {
    sector: "Clinics and diagnostics centres",
    scenario:
      "Patient-facing terminals and diagnostic workstations. Compliance requires up-to-date software, but any unplanned downtime is unacceptable.",
    seats: "10–60",
  },
];

const REQUIREMENTS = [
  { req: "TPM 2.0 Cryptographic Module", hit: true,  note: "Most pre-2018 PCs: ABSENT" },
  { req: "CPU: 8th Gen Intel / AMD Zen+", hit: true,  note: "Sold from late 2017: OUT" },
  { req: "64-bit Architecture, 1 GHz+",   hit: false, note: "Standard: PASS" },
  { req: "4 GB RAM Minimum",              hit: false, note: "Standard: PASS" },
  { req: "64 GB Storage Capacity",        hit: false, note: "Standard: PASS" },
  { req: "UEFI / Secure Boot Firmware",  hit: true,  note: "Often absent: FAILS" },
];

const COSTS = [
  {
    label: "Hardware acquisition",
    number: "₹25,000–₹45,000",
    per: "per seat",
    detail: "Business PC hardware meeting Windows 11 requirements. Equals ₹50–90L unplanned CAPEX for 200 seats.",
    code: "CAPEX_ACQ",
    badge: "CAPEX // ACQ.01",
    intensity: 90,
    color: "signal",
    parts: [
      "Business PC hardware meeting Windows 11 requirements. Equals ",
      "₹50–90L unplanned CAPEX for 200 seats."
    ]
  },
  {
    label: "IT deployment labour",
    number: "4–6 hours",
    per: "per machine",
    detail: "OS staging, data migration, and software setup. 3–4 weeks of deployment downtime risk for 200 seats.",
    code: "OPEX_LABR",
    badge: "OPEX // LABR.02",
    intensity: 65,
    color: "amber",
    parts: [
      "OS staging, data migration, and software setup. ",
      "3–4 weeks of deployment downtime risk for 200 seats."
    ]
  },
  {
    label: "Productivity loss",
    number: "1–3 days",
    per: "per user",
    detail: "User onboarding, configuration, and file recovery. Typically unaccounted for in standard budgets.",
    code: "OPEX_PROD",
    badge: "OPEX // PROD.03",
    intensity: 50,
    color: "rose",
    parts: [
      "User onboarding, configuration, and file recovery. ",
      "Typically unaccounted for in standard budgets."
    ]
  },
  {
    label: "E-waste and disposal",
    number: "₹500–₹2,000",
    per: "per unit",
    detail: "Eco-compliant disposal of functional hardware. Adds ₹1–4L in recycling and carbon costs.",
    code: "DISP_CO2",
    badge: "DISP // CO2.04",
    intensity: 30,
    color: "emerald",
    parts: [
      "Eco-compliant disposal of functional hardware. ",
      "Adds ₹1–4L in recycling and carbon costs."
    ]
  },
];

const COLOR_MAP = {
  signal: {
    border: "hover:border-signal/40",
    glow: "bg-signal/5",
    text: "text-signal",
    bar: "bg-signal",
    icon: (
      <svg className="w-5 h-5 text-signal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M9 20h6M12 16v4" />
        <path d="M7 8l10 4M7 12l10-4" strokeOpacity="0.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  amber: {
    border: "hover:border-amber-500/40",
    glow: "bg-amber-500/5",
    text: "text-amber-500",
    bar: "bg-amber-500",
    icon: (
      <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.24 7.76a6 6 0 010 8.49M7.76 7.76a6 6 0 000 8.49" strokeOpacity="0.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  rose: {
    border: "hover:border-rose-500/40",
    glow: "bg-rose-500/5",
    text: "text-rose-400",
    bar: "bg-rose-500",
    icon: (
      <svg className="w-5 h-5 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  emerald: {
    border: "hover:border-emerald-500/40",
    glow: "bg-emerald-500/5",
    text: "text-emerald-400",
    bar: "bg-emerald-500",
    icon: (
      <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2c0 0-4 4.5-4 8.5 0 2.485 2.015 4.5 4 4.5s4-2.015 4-4.5C16 6.5 12 2 12 2z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 15v5M9 20h6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
};

export default function ProblemPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-[75vh] flex items-center bg-paper border-b border-ink-200">
        <div className="w-full max-w-[80rem] mx-auto px-6 md:px-10 pt-20 pb-12 lg:pt-24 lg:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* ── Left: Copy ─────────────────────────────────── */}
            <div className="lg:col-span-7 flex flex-col pt-4">

              <Reveal delay={60}>
                <h1 className="font-display text-3xl sm:text-5xl lg:text-[3.75rem] text-ink leading-[1.08] tracking-tight max-w-[18ch]">
                  Microsoft ended Windows 10 support.{" "}
                  <span className="text-ink-600 font-light">
                    Every unpatched machine is now a liability.
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={120}>
                <p className="mt-8 text-base sm:text-lg text-ink-600 max-w-[48ch] leading-relaxed font-light">
                  On October 14, 2025, Microsoft stopped issuing security patches for Windows 10. The exposure compounds with each passing month.
                </p>
              </Reveal>

              <Reveal delay={180}>
                <div className="mt-10 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center w-full sm:w-auto">
                  <Link
                    href="/solution"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-ink text-paper text-sm font-semibold rounded-lg hover:bg-ngreen active:scale-[0.98] transition-all"
                  >
                    See the solution
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M3 7h8M7.5 4l3.5 3-3.5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                  <Link
                    href="/problem#costs"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 border border-ink-200 text-ink-600 text-sm font-medium rounded-lg hover:border-ink hover:text-ink hover:bg-ink-200/30 active:scale-[0.98] transition-all"
                  >
                    See the cost breakdown
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* ── Right: EOL Status Panel ─────────────────────── */}
            <div className="lg:col-span-5">
              <Reveal delay={220}>
                <div className="border border-zinc-700 bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl">
                  {/* Panel header */}
                  <div className="px-6 py-4 border-b border-zinc-800/60">
                    <p className="font-mono text-[9px] text-red-400 uppercase tracking-widest font-bold">SUPPORT EXPIRED</p>
                  </div>

                  {/* Key deadline */}
                  <div className="px-6 py-6 border-b border-zinc-800/60">
                    <p className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest mb-2">End-of-support date</p>
                    <p className="font-display text-3xl text-white tracking-tight">Oct 14, 2025</p>
                    <p className="font-mono text-[10px] text-red-400 mt-2 font-semibold tracking-wider">SUPPORT HAS ENDED</p>
                  </div>

                  {/* Status rows */}
                  <div className="px-6 py-2">
                    {[
                      { label: "Security patches",    value: "None issued",   warn: true },
                      { label: "Vulnerability fixes", value: "Ceased",        warn: true },
                      { label: "Compliance posture",  value: "At risk",       warn: true },
                      { label: "Hardware refresh avg",value: "₹25K–45K/seat", warn: false },
                      { label: "Replacement timeline",value: "3–4 weeks/site",warn: false },
                    ].map(({ label, value, warn }) => (
                      <div key={label} className="flex justify-between items-baseline py-3 border-b border-zinc-800 last:border-0">
                        <span className="text-xs text-zinc-400 font-light">{label}</span>
                        <span className={`text-xs font-mono font-semibold ${ warn ? "text-red-400" : "text-zinc-300" }`}>{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* ─── THE SITUATION ────────────────────────────────────── */}
      <section className="relative bg-paper-200 border-b border-ink-200" aria-label="Windows 11 hardware requirements">
        <div className="relative max-w-[80rem] mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <Reveal>
              <div className="lg:pr-8">
                <h2 className="font-display text-3xl md:text-4xl text-ink mb-6 tracking-tight leading-[1.1]">
                  Windows 11 won&apos;t run on most office PCs bought before 2018.
                </h2>
                <div className="space-y-5 text-ink-600 leading-relaxed">
                  <p>
                    Microsoft&apos;s minimum requirements for Windows 11 include a TPM 2.0 chip and a processor from Intel&apos;s 8th generation or AMD&apos;s Zen+ architecture or newer. PCs purchased before 2018, the vast majority of most mid-size business fleets, fail this check.
                  </p>
                  <p>
                    That means the standard advice to &ldquo;upgrade to Windows 11&rdquo; is not an upgrade. It&apos;s a hardware replacement programme in disguise, regardless of whether the computers themselves are performing fine.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Requirements schematic — shadcn-style card */}
            <Reveal delay={100}>
              <div className="border border-ink-200/50 bg-white/40 backdrop-blur-md overflow-hidden rounded-2xl shadow-sm hover:bg-white/60 transition-all" role="img" aria-label="Windows 11 hardware requirements checklist">
                <div className="px-6 py-5 border-b border-ink-200/60 bg-paper-200/50 flex justify-between items-center">
                  <p className="text-sm font-bold text-ink tracking-tight">
                    Windows 11 Requirements Check
                  </p>
                  <span className="text-xs text-ink-600 font-mono">Pre-2018 Fleet</span>
                </div>
                {REQUIREMENTS.map(({ req, hit, note }) => (
                  <div key={req} className="px-6 py-4 flex items-center justify-between gap-4 border-b border-ink-200/50 last:border-0 hover:bg-paper-200/40 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className={`shrink-0 font-mono text-sm font-bold ${hit ? "text-signal" : "text-ngreen"}`}>
                        {hit ? "[✕]" : "[✓]"}
                      </span>
                      <span className="text-sm font-medium text-ink">{req}</span>
                    </div>
                    <span className={`text-[10px] font-mono shrink-0 ${hit ? "text-signal font-semibold" : "text-ink-600"}`}>
                      {note}
                    </span>
                  </div>
                ))}
                <div className="px-6 py-4 bg-amber-50/50 border-t border-amber-100">
                  <p className="text-xs text-amber-800 font-medium leading-relaxed">
                    Failing even one highlighted requirement means the machine cannot run Windows 11 natively.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── THE COST OF THE NAIVE RESPONSE ──────────────────── */}
      <section className="relative bg-paper-200 border-y border-ink-200 py-16 lg:py-24" aria-label="Cost of hardware replacement" id="costs">
        <div className="w-full max-w-[80rem] mx-auto px-6 md:px-10">
          <ScrollStack
            itemDistance={60}
            itemScale={0.04}
            itemStackDistance={30}
            stackPosition="12%"
            scaleEndPosition="4%"
            baseScale={0.92}
            useWindowScroll={true}
          >
            {/* CARD 1: Four Cost Breakdown Cards */}
            <ScrollStackItem>
              <div className="border border-zinc-700 bg-zinc-900 rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.08)] p-8 md:p-12 transition-all hover:border-zinc-600 text-white">
                <div className="max-w-3xl mb-12">
                  <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.5rem] text-white mb-4 tracking-tight leading-[1.12]">
                    &ldquo;Just replace the computers&rdquo; <br className="hidden sm:inline" />
                    is not a plan. <span className="text-zinc-500 font-light">It&apos;s an invoice.</span>
                  </h2>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light max-w-2xl mt-4">
                    Hardware replacement looks straightforward on paper. In practice, it triggers four separate cost centers that rarely appear in the initial budget, resulting in a compounding financial and operational hit.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 border-t border-zinc-800/80 pt-10">
                  {COSTS.map(({ label, number, per, parts }) => (
                    <div key={label} className="flex flex-col justify-between h-full group">
                      <div>
                        <p className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 mb-2">{label}</p>
                        <div className="flex items-baseline gap-1 mb-4 flex-wrap">
                          <span className="font-display text-lg sm:text-xl xl:text-2xl font-semibold tracking-tight text-white">
                            {number}
                          </span>
                          <span className="text-[10px] text-zinc-500 font-mono">{per}</span>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-zinc-800/60 mt-auto">
                        <p className="text-[11px] xl:text-xs text-zinc-400 leading-relaxed font-light">
                          {parts[0]}
                          <span className="text-white font-medium">{parts[1]}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollStackItem>

            {/* CARD 2: TCO Comparative Projection */}
            <ScrollStackItem>
              <div className="border border-zinc-700 bg-zinc-900 rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.08)] p-8 md:p-12 transition-all hover:border-zinc-600 text-white">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Heading and explanation */}
                  <div className="lg:col-span-5 flex flex-col justify-between">
                    <div>
                      <h3 className="font-display text-2xl md:text-3xl text-white tracking-tight leading-snug mb-4">
                        The financial reality: standard hardware refresh vs software conversion.
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light mb-8">
                        An analysis of a 200-seat workstation environment over a 5-year cycle, comparing hardware refresh costs against instant software-defined endpoints using LEAF OS.
                      </p>
                    </div>

                    <div className="pt-6 border-t border-zinc-800">
                      <p className="text-3xl font-display font-semibold text-emerald-400 mb-1">
                        88% Saved
                      </p>
                      <p className="text-xs text-zinc-400 leading-normal font-light">
                        Eliminating CAPEX acquisition and reducing deployment labour to less than 4 hours per branch.
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Comparative chart widget */}
                  <div className="lg:col-span-7">
                    <div className="p-6 md:p-8 rounded-xl border border-zinc-800 bg-zinc-950/40 relative overflow-hidden">
                      <div className="relative z-10 space-y-6">
                        {/* Bar 1: Traditional PC Replacement */}
                        <div>
                          <div className="flex justify-between items-baseline text-xs font-mono mb-2 text-zinc-400">
                            <span className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-signal" />
                              Traditional PC Refresh (Buy new hardware)
                            </span>
                            <span className="text-white font-semibold">₹50L – ₹90L <span className="text-zinc-500 font-normal ml-1">(100% Capex)</span></span>
                          </div>
                          <div className="h-3 bg-zinc-900/50 rounded-full overflow-hidden relative">
                            <div
                              className="h-full bg-signal rounded-full"
                              style={{
                                width: "100%",
                              }}
                            />
                          </div>
                        </div>

                        {/* Bar 2: LEAF OS Conversion */}
                        <div>
                          <div className="flex justify-between items-baseline text-xs font-mono mb-2 text-zinc-400">
                            <span className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                              LEAF OS Transition (Software Conversion)
                            </span>
                            <span className="text-emerald-400 font-semibold">₹6L – ₹10L <span className="text-emerald-500 font-normal ml-1">(88% Saved)</span></span>
                          </div>
                          <div className="h-3 bg-zinc-900/50 rounded-full overflow-hidden relative">
                            <div
                              className="h-full bg-emerald-500 rounded-full"
                              style={{
                                width: "12%",
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Chart Grid Scale Line */}
                      <div className="mt-8 pt-4 border-t border-zinc-800/60 flex justify-between text-[9px] font-mono text-zinc-600">
                        <span>0L (BASE)</span>
                        <span>25L</span>
                        <span>50L</span>
                        <span>75L</span>
                        <span>100L (MAX REFLECTED)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollStackItem>
          </ScrollStack>
        </div>
      </section>

      <section className="relative bg-paper border-b border-ink-200" aria-label="Industries most affected">
        <div className="relative max-w-[80rem] mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 lg:items-center">
            <div>
              <Reveal>
                <h2 className="font-display text-3xl md:text-4xl text-ink mb-4 tracking-tight leading-[1.1]">
                  This hits hardest when you have many desks and one IT person.
                </h2>
                <p className="text-ink-600 mt-4 mb-12 max-w-[52ch] leading-relaxed font-light">
                  Any operation with a distributed or large workstation fleet carries disproportionate risk, not because the problem is bigger, but because the operational complexity of fixing it is.
                </p>
              </Reveal>

              <div className="space-y-2.5">
                {WHO_IT_HITS.map(({ sector, scenario, seats }, i) => (
                  <Reveal key={sector} delay={i * 80}>
                    <div className="flex items-stretch gap-4 p-4 rounded-xl border border-ink-200/60 bg-white/50 backdrop-blur-sm hover:border-ink-400/40 hover:bg-white/80 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group">
                      <div className="shrink-0 w-1 self-stretch rounded bg-ink-200 group-hover:bg-ink transition-colors" />
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4 mb-1">
                          <p className="font-semibold text-ink text-sm sm:text-base">{sector}</p>
                          <span className="shrink-0 text-xs font-mono text-ink-600">({seats} seats)</span>
                        </div>
                        <p className="text-[13px] text-ink-600 leading-relaxed font-light">{scenario}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* IT room supporting image */}
            <div className="w-full flex flex-col justify-center h-full">
              <Reveal delay={120}>
                <figure className="w-full">
                  <div className="relative w-full overflow-hidden rounded-2xl border border-ink-200/80 shadow-[0_16px_48px_rgba(0,0,0,0.06)] aspect-[16/10] md:aspect-[4/5]">
                    <Image
                      src="/images/problem/itroom.png"
                      alt="The interior of a small, cluttered IT server room with patch panels, tangled ethernet cables, aging tower unit, and a single warm overhead light."
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                  <figcaption className="mt-4 flex justify-between items-center text-[10px] font-mono text-ink-400 uppercase tracking-widest px-1">
                    <span>Location: Typical Server Closet</span>
                    <span>Status: High Complexity</span>
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SOLUTION TRANSITION ───────────────────────────────── */}
      <section className="bg-paper border-t border-ink-200 py-16" aria-label="Navigation to the solution">
        <div className="max-w-[80rem] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 items-center">
            <Reveal>
              <h2 className="font-display text-3xl md:text-4xl text-ink leading-tight tracking-tight max-w-[28ch]">
                The problem is clear. The cost of inaction is measurable. The solution is a software install.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <Link
                href="/solution"
                className="group block bg-ink rounded-xl p-7 hover:bg-ngreen active:scale-[0.99] transition-all duration-200"
              >
                {/* Next page navigation */}
                <h3 className="font-display text-2xl text-paper mb-3 leading-snug">
                  How LEAF OS solves this{" "}
                  <span className="inline-block animate-slide-x transition-transform">&rarr;</span>
                </h3>
                <p className="text-xs text-paper/60 leading-relaxed mb-6 font-light">
                  A lightweight Linux layer that converts existing PCs into secure Windows 11 virtual desktop endpoints, with no hardware replacement required.
                </p>
                <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-semibold text-paper/50 group-hover:text-paper transition-colors">
                  See the product <span className="inline-block animate-slide-x">&rarr;</span>
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
