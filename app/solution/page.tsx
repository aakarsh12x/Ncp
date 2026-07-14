import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import BeforeAfterDiagram from "@/components/BeforeAfterDiagram";
import ContactForm from "@/components/ContactForm";
import LottieAnimation from "@/components/LottieAnimation";

export const metadata: Metadata = {
  title: "LEAF OS: The Solution",
  description:
    "LEAF OS is a lightweight Linux layer that installs on any x86 PC in hours, turning it into a managed, locked-down virtual desktop endpoint for Windows 11 via Azure, Citrix, or vSpace Pro. 4 GB RAM. 8 GB storage. Years of additional hardware life.",
  openGraph: {
    title: "LEAF OS: The Solution | NComputing",
    description:
      "Convert your old fleet into secure thin clients for Windows 11 virtual desktops. Compatible with Microsoft AVD, Windows 365, Citrix, Omnissa, and vSpace Pro.",
    url: "/solution",
  },
};

const COMPATIBILITY = [
  { name: "Azure Virtual Desktop",          abbr: "AVD",     color: "bg-zinc-900 border-zinc-800 text-white" },
  { name: "Windows 365 Cloud PC",           abbr: "W365",    color: "bg-zinc-900 border-zinc-800 text-white" },
  { name: "Citrix Virtual Apps & Desktops", abbr: "Citrix",  color: "bg-zinc-900 border-zinc-800 text-white" },
  { name: "Omnissa Horizon (VMware)",        abbr: "Omnissa", color: "bg-zinc-900 border-zinc-800 text-white" },
  { name: "NComputing vSpace Pro",           abbr: "vSpace",  color: "bg-zinc-900 border-zinc-800 text-white" },
];

const OUTCOMES = [
  {
    metric: "₹0",
    qualifier: "capital expenditure",
    claim: "Zero hardware Capex",
    detail: "No new machines to buy. LEAF OS runs on the PCs you already own, including those bought before 2018. Save ₹25,000–₹45,000 per seat immediately.",
    code: "CAPEX_SAV",
  },
  {
    metric: "45 min",
    qualifier: "install time per PC",
    claim: "Rapid USB deployment",
    detail: "Installs from USB in under an hour. A single IT person can convert 15–20 workstations per day. No complex server side installation required.",
    code: "DEP_SPEED",
  },
  {
    metric: "8 GB",
    qualifier: "minimum storage required",
    claim: "Ultra-low specs needed",
    detail: "Requires only 4 GB RAM and 8 GB local storage. Reclaims old, sluggish machines and makes them run Windows 11 virtual desktops at full local speed.",
    code: "HW_REQ",
  },
  {
    metric: "100%",
    qualifier: "central management",
    claim: "Centralized control",
    detail: "Zero local apps. Zero local user data. Define all endpoint configurations, firmware updates, and connection brokers from a single administrative pane.",
    code: "CTRL_CENT",
  },
];

const SPEC_SHEET = [
  ["Kernel", "Security-hardened Linux kernel (read-only system partition)"],
  ["Broker support", "Microsoft AVD, Windows 365, Citrix Horizon, Omnissa, vSpace Pro"],
  ["Local security", "Firmware lockdown, disabled USB storage, read-only system files"],
  ["System config", "Centrally pushed configs via PMC management console"],
  ["Hardware footprint", "x86-64 CPU, 4 GB RAM minimum, 8 GB storage capacity"],
];

export default function SolutionPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-[75vh] flex items-center bg-paper border-b border-ink-200">
        <div className="relative z-20 w-full max-w-[80rem] mx-auto px-6 md:px-10 pt-20 pb-12 lg:pt-24 lg:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* ── Left: Copy ─────────────────────────────────── */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="border-t border-ink-200/30 pt-4 mb-8" />

              <Reveal delay={60}>
                <h1 className="font-display text-3xl sm:text-5xl lg:text-[3.75rem] text-ink leading-[1.08] tracking-tight max-w-[18ch]">
                  A Linux layer that gives your old PCs{" "}
                  <span className="text-ink-600 font-light">
                    a second career.
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={120}>
                <p className="mt-8 text-base sm:text-lg text-ink-600 max-w-[48ch] leading-relaxed font-light">
                  LEAF OS installs on any x86 PC and converts it into a managed, locked-down endpoint for virtual desktop delivery. The PC becomes a thin client. Windows 11 runs in the cloud or on your server.
                </p>
              </Reveal>

              <Reveal delay={180}>
                <div className="mt-10 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center w-full sm:w-auto">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-ink text-paper text-sm font-semibold rounded-lg hover:bg-ngreen active:scale-[0.98] transition-all"
                  >
                    Request a pilot
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M3 7h8M7.5 4l3.5 3-3.5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <a
                    href="#specs"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 border border-ink-200 text-ink-600 text-sm font-medium rounded-lg hover:border-ink hover:text-ink hover:bg-ink-200/30 active:scale-[0.98] transition-all"
                  >
                    View technical specs
                  </a>
                </div>
              </Reveal>
            </div>

            {/* ── Right: LEAF OS Spec Panel ──────────────────── */}
            <div className="lg:col-span-5">
              <Reveal delay={220}>
                <div className="border border-zinc-700 bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl">
                  {/* Panel header */}
                  <div className="px-6 py-4 border-b border-zinc-800/60">
                    <p className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest font-semibold">QUICK SPECS</p>
                  </div>

                  {/* Spec rows */}
                  <div className="px-6 py-2">
                    {[
                      { spec: "RAM required",    value: "4 GB minimum" },
                      { spec: "Storage required",value: "8 GB minimum" },
                      { spec: "CPU",             value: "x86-64, any speed" },
                      { spec: "Install time",    value: "~45 min per PC" },
                      { spec: "Deployment",      value: "Bootable USB" },
                      { spec: "Management",      value: "Central console" },
                    ].map(({ spec, value }) => (
                      <div key={spec} className="flex justify-between items-baseline py-3 border-b border-zinc-800/60 last:border-0">
                        <span className="text-xs text-zinc-400 font-mono uppercase tracking-wider">{spec}</span>
                        <span className="text-xs font-semibold text-zinc-200">{value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Compatible platforms */}
                  <div className="px-6 py-4 border-t border-zinc-850 bg-zinc-900/60">
                    <p className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest mb-3">Compatible with</p>
                    <div className="flex flex-wrap gap-1.5">
                      {["AVD", "W365", "Citrix", "Omnissa", "vSpace Pro"].map((p) => (
                        <span key={p} className="font-mono text-[9px] text-zinc-400 border border-zinc-800 px-2 py-1 rounded tracking-wider hover:border-ngreen/50 hover:text-ngreen hover:bg-ngreen-soft/10 transition-colors duration-200 cursor-default">{p}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* ─── WHAT LEAF OS IS ──────────────────────────────────── */}
      <section className="relative bg-zinc-50 border-b border-zinc-200" aria-label="What LEAF OS is">
        <div className="relative max-w-[80rem] mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16 items-start">
            <Reveal>
              <div>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-zinc-900 mb-4 tracking-tight leading-[1.1]">
                  What LEAF OS actually is
                </h2>
                <div className="space-y-5 text-zinc-600 leading-relaxed font-light">
                  <p>
                    LEAF OS is a lightweight Linux distribution built specifically to do one job: boot a PC, connect it to a virtual desktop broker, and get out of the way. There is no local application layer, no local storage of user data, and no local administrative surface to compromise.
                  </p>
                  <p>
                    It installs from USB in under an hour per machine. Once installed, it boots directly into the virtual desktop session. From the user&apos;s perspective, they sit down, log in, and see their Windows 11 desktop (running on Azure Virtual Desktop, Citrix, Omnissa, or NComputing&apos;s own vSpace Pro server).
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Spec sheet card */}
            <Reveal delay={100}>
              <div className="border border-zinc-200/50 bg-white/40 backdrop-blur-md overflow-hidden rounded-2xl shadow-sm hover:bg-white/60 transition-all">
                <div className="px-6 py-5 border-b border-zinc-100 bg-zinc-50/50 flex items-center justify-between">
                  <p className="text-sm font-bold text-zinc-900">Spec Sheet: Operating Parameters</p>
                  <span className="text-[10px] font-mono text-emerald-700 font-semibold">ACTIVE</span>
                </div>
                <div className="divide-y divide-zinc-100">

                  {SPEC_SHEET.map(([spec, detail]) => (
                    <div key={spec as string} className="px-6 py-4 hover:bg-zinc-50/70 transition-colors">
                      <span className="block text-xs font-bold text-zinc-900 uppercase tracking-widest mb-1.5">{spec}</span>
                      <span className="text-sm text-zinc-500 leading-relaxed font-light">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── BEFORE / AFTER DIAGRAM ───────────────────────────── */}
      <section className="relative bg-paper border-b border-ink-200" aria-label="Before and after schematic">
        <div className="relative max-w-[80rem] mx-auto px-6 md:px-10 py-16 md:py-20">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl text-ink mb-3 tracking-tight leading-[1.1] max-w-[28ch]">
              Same hardware. Completely different infrastructure.
            </h2>
            <p className="text-ink-600 mb-16 max-w-[52ch] leading-relaxed font-light">
              The schematic below shows what changes, and what does not, when LEAF OS replaces a Windows 10 installation on an existing fleet.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <BeforeAfterDiagram />
          </Reveal>
        </div>
      </section>

      {/* ─── CONCRETE OUTCOMES + PRODUCT RENDER ──────────────────────── */}
      <section id="specs" className="relative bg-paper-200 border-b border-ink-200" aria-label="What LEAF OS delivers">
        <div className="relative max-w-[80rem] mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 lg:items-center">
            <div>
              <Reveal>
                <h2 className="font-display text-3xl md:text-4xl text-ink mb-10 tracking-tight leading-[1.1]">
                  What LEAF OS delivers in plain numbers.
                </h2>
              </Reveal>

              {/* 2×2 bento card grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {OUTCOMES.map(({ metric, qualifier, claim, detail }, i) => (
                  <Reveal key={claim} delay={i * 80}>
                    <div className={`border rounded-2xl p-6 flex flex-col h-full hover:-translate-y-0.5 transition-all duration-200 bg-white/60 ${
                      i === 0 ? "border-signal/20 hover:shadow-[0_12px_32px_rgba(200,64,26,0.07)]" :
                      i === 1 ? "border-ink-200/60 hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)]" :
                                "border-ngreen/20 hover:shadow-[0_12px_32px_rgba(120,183,42,0.07)]"
                    }`}>
                      {/* Metric */}
                      <div className={`font-display text-4xl md:text-5xl tracking-tight font-bold leading-none mb-1 ${
                        i === 0 ? "text-signal" :
                        i === 1 ? "text-ink" :
                                  "text-ngreen"
                      }`}>
                        {metric}
                      </div>
                      <div className="font-mono text-[9px] text-ink-400 uppercase tracking-wider mb-5">
                        {qualifier}
                      </div>
                      {/* Claim + detail */}
                      <div className="border-t border-ink-200/40 pt-4 mt-auto">
                        <p className="font-semibold text-ink text-sm mb-2">{claim}</p>
                        <p className="text-xs text-ink-600 leading-relaxed font-light">{detail}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Visuals Column (Right) */}
            <div className="w-full flex flex-col justify-center h-full">
              {/* Product render */}
              <Reveal delay={100}>
                <figure className="w-full">
                  <div className="relative w-full overflow-hidden rounded-2xl border border-ink-200/80 shadow-[0_16px_48px_rgba(0,0,0,0.06)] bg-zinc-900" style={{ aspectRatio: "4/3" }}>
                    <Image
                      src="/images/solution/leafos_usb.png"
                      alt="Premium studio product photograph of a modern metallic swivel USB drive with the LEAF OS logo, representing the bootable deployment medium."
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                  <figcaption className="mt-4 flex justify-between items-center text-[10px] font-mono text-ink-400 uppercase tracking-widest px-1">
                    <span>Medium: Bootable USB Drive</span>
                    <span>Format: FAT32 / UEFI</span>
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── COMPATIBILITY ────────────────────────────────────── */}
      <section className="relative bg-white border-b border-zinc-200" aria-label="Compatible virtual desktop platforms">
        <div className="relative max-w-[80rem] mx-auto px-6 md:px-10 py-20 md:py-24">

          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl text-zinc-900 mb-3 tracking-tight leading-tight">
              Compatible Virtual Desktop Delivery Brokers
            </h2>
          </Reveal>
          <Reveal delay={60}>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {COMPATIBILITY.map(({ name, abbr, color }) => (
                <div
                  key={abbr}
                  className={`border border-zinc-700 bg-zinc-900 px-5 py-5 flex flex-col gap-2 hover:-translate-y-1 hover:shadow-lg hover:border-zinc-600 transition-all rounded-xl ${color}`}
                  title={name}
                >
                  <span className="text-xl font-bold font-mono">{abbr}</span>
                  <span className="text-[11px] opacity-70 leading-tight">{name}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-10 text-sm text-zinc-500 max-w-[64ch] leading-relaxed font-light">
              If you already have a Microsoft, Citrix, or Omnissa agreement in place, LEAF OS integrates with your existing licensing and management infrastructure. If you&apos;re starting fresh, NComputing&apos;s own vSpace Pro server handles the virtual desktop layer on-premises.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── TCO COMPARISON ───────────────────────────────────── */}
      <section className="relative bg-zinc-900 text-white border-y border-zinc-800 overflow-hidden" aria-label="TCO comparison">
        <div className="relative z-10 max-w-[80rem] mx-auto px-6 md:px-10 py-12 md:py-16">
          <Reveal>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-white mb-3 tracking-tight leading-[1.15] max-w-[30ch]">
              The total cost comparison: hardware replacement vs. LEAF OS.
            </h2>
            <p className="text-zinc-400 mb-6 max-w-[50ch] text-sm leading-relaxed font-light">
              Numbers below are directional estimates for a 100-seat deployment in the Indian market. Your actual figures will vary.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Option A */}
            <Reveal>
              <div className="border border-zinc-800 bg-zinc-950/20 p-5 md:p-6 h-full flex flex-col rounded-xl shadow-xl">
                <p className="text-xs font-mono text-zinc-400 mb-4">
                  Option A: Bulk Hardware Replacement
                </p>
                <div className="space-y-2.5 flex-1">
                  {[
                    ["New PC fleet (100 × ₹30,000 avg.)", "₹30,00,000"],
                    ["IT deployment labour (est.)",        "₹3,00,000"],
                    ["Certified E-waste disposal",          "₹1,00,000"],
                    ["Workplace productivity loss",         "₹2,00,000"],
                  ].map(([item, cost]) => (
                    <div key={item as string} className="flex justify-between items-baseline gap-4 border-b border-white/5 pb-2.5">
                      <span className="text-xs sm:text-sm text-zinc-400 font-light">{item}</span>
                      <span className="text-xs sm:text-sm font-semibold text-white shrink-0 font-body">{cost}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-zinc-800 flex justify-between items-baseline">
                  <span className="text-xs sm:text-sm font-semibold text-white">Total Capex + Opex</span>
                  <span className="font-display text-xl sm:text-2xl text-red-400">₹36,00,000</span>
                </div>
              </div>
            </Reveal>

            {/* Option B */}
            <Reveal delay={80}>
              <div className="border border-ngreen/20 bg-ngreen/5 p-5 md:p-6 h-full flex flex-col rounded-xl shadow-xl">
                <p className="text-xs font-mono text-ngreen mb-4">
                  Option B: LEAF OS on Existing Hardware
                </p>
                <div className="space-y-2.5 flex-1">
                  {[
                    ["LEAF OS per-seat licensing",         "Contact for quote"],
                    ["IT deployment (est., USB install)",  "₹75,000"],
                    ["Hardware replacement",               "₹0"],
                    ["E-waste disposal",                   "₹0"],
                  ].map(([item, cost]) => (
                    <div key={item as string} className="flex justify-between items-baseline gap-4 border-b border-ngreen/10 pb-2.5">
                      <span className="text-xs sm:text-sm text-zinc-400 font-light">{item}</span>
                      <span className={`text-xs sm:text-sm font-semibold shrink-0 font-body ${cost === "₹0" ? "text-ngreen" : "text-white"}`}>{cost}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-ngreen/10 flex justify-between items-baseline">
                  <span className="text-xs sm:text-sm font-semibold text-white">Hardware Capex</span>
                  <span className="font-display text-xl sm:text-2xl text-ngreen">₹0</span>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="mt-8 text-sm text-zinc-500 max-w-[64ch] leading-relaxed font-light">
            LEAF OS pricing depends on deployment size and platform choice. The conversation starts with a pilot, typically 10 to 20 machines, before a full commitment.
          </div>
        </div>
      </section>

      {/* ─── CONTACT / CTA ────────────────────────────────────── */}
      <section id="contact" className="scroll-mt-20 relative bg-white" aria-label="Contact and pilot request">
        <div className="relative max-w-[80rem] mx-auto px-6 md:px-10 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <Reveal>
              <div>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-zinc-900 mb-3 tracking-tight leading-[1.1]">
                  Start with a pilot.<br />
                  <em>No commitment required.</em>
                </h2>
                <p className="text-sm text-zinc-500 leading-relaxed mb-6 max-w-[44ch] font-light">
                  A typical LEAF OS pilot runs on 10–20 machines over 30 days. Our team handles the initial setup. You evaluate the result. If it doesn&apos;t perform as described, you reinstall Windows 10 and we part ways cleanly.
                </p>
                <div className="space-y-3">
                  {[
                    "Free pilot scoping call: no slides, just your situation",
                    "Hardware compatibility check before any commitment",
                    "Setup assistance included in pilot",
                    "India-based support team",
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <span className="shrink-0 w-4 h-4 rounded-full bg-ngreen/10 text-ngreen-dark border border-ngreen/20 flex items-center justify-center text-[10px] font-bold mt-0.5">✓</span>
                      <p className="text-[13px] text-zinc-700 font-medium">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
