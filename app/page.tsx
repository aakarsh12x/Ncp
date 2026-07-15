import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import LottieAnimation from "@/components/LottieAnimation";
import NumberTicker from "@/components/NumberTicker";

export const metadata: Metadata = {
  title: "Keep your PCs. Get Windows 11.",
  description:
    "Your existing PCs can run Windows 11 virtual desktops with no hardware replacement needed. NComputing LEAF OS installs in hours, not weeks. Trusted by 70,000+ organisations globally.",
  openGraph: {
    title: "NComputing LEAF OS: Keep your PCs. Get Windows 11.",
    description:
      "Your existing PCs can run Windows 11 virtual desktops with no hardware replacement needed. 70,000+ customers. 140 countries.",
    url: "/",
  },
};

// Design read: B2B marketing page for mid-size business owners/IT managers, with a premium editorial language, leaning toward custom typography + warm monochrome palette + structured bento grid layout.
// Dials: VARIANCE = 6, MOTION = 4, DENSITY = 4

const STATS = [
  { value: 20,  suffix: "+",  unit: "years",     label: "In business since 2003" },
  { value: 70,  suffix: "K+", unit: "customers", label: "Across every industry"   },
  { value: 20,  suffix: "M",  unit: "users",     label: "Active virtual desktops" },
  { value: 140, suffix: "",   unit: "countries", label: "Global deployment"       },
];

const BENTO_STEPS = [
  {
    step: "01",
    heading: "Keep the hardware",
    body: "LEAF OS installs on any x86 PC, including machines too old to run Windows 11 natively. If it can boot from USB, it qualifies.",
    img: "/images/landing/strip-a.png",
    alt: "An ordinary desktop tower and monitor sitting on a clean office desk, capable, unremarkable hardware, ready to be repurposed.",
  },
  {
    step: "02",
    heading: "Install LEAF OS",
    body: "A locked-down Linux layer replaces the local OS. 4 GB RAM and 8 GB storage is all it needs. Deployment takes hours, not days.",
  },
  {
    step: "03",
    heading: "Work in Windows 11",
    body: "Each endpoint connects to a virtual Windows 11 desktop hosted on Azure, Citrix, or your own server. Centrally managed and fully patched.",
    img: "/images/landing/strip-c.png",
    alt: "A hand resting near a mouse as a monitor glows with an orderly virtual desktop session in a calm, modern office environment.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO SECTION ───────────────────────────────────────── */}
      <section className="relative min-h-[75vh] flex items-center bg-paper pt-20 pb-12 lg:pt-24 lg:pb-16 border-b border-ink-200">
        <div className="w-full max-w-[80rem] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Hero Copy (Left 7 Columns) */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <Reveal>
                <div className="border-t border-ink-200/30 pt-4 mb-8" />
              </Reveal>

              <Reveal delay={60}>
                <h1 className="font-display text-4xl sm:text-6xl lg:text-[4.75rem] text-ink leading-[1.08] tracking-tight max-w-[18ch]">
                  Your computers <br className="hidden sm:block" />
                  don&apos;t need replacing. <br />
                  <span className="text-ink-600 font-light">Windows 10 does.</span>
                </h1>
              </Reveal>

              <Reveal delay={120}>
                <p className="mt-8 text-base sm:text-lg text-ink-600 max-w-[48ch] leading-relaxed font-normal">
                  LEAF OS replaces the local OS, turning your existing PCs into secure, centrally managed Windows 11 virtual endpoints.
                </p>
              </Reveal>

              <Reveal delay={180}>
                <div className="mt-10 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center w-full sm:w-auto">
                  <Link href="/problem" className="btn-primary">
                    See why this matters now
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="ml-1">
                      <path d="M3.33331 8H12.6666M8.66665 4L12.6666 8L8.66665 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                  <Link href="/solution" className="btn-secondary">
                    What is LEAF OS?
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Hero Visual Asset (Right 5 Columns) */}
            <div className="lg:col-span-5 w-full">
              <Reveal delay={200} className="w-full">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-zinc-200/80 shadow-[0_16px_48px_rgba(0,0,0,0.06)] bg-paper-200">
                  <Image
                    src="/images/landing/hero.png"
                    alt="Open-plan modern office background showing repurposed computer hardware"
                    fill
                    priority={true}
                    className="object-cover grayscale contrast-[1.05] brightness-[0.95]"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-ink/5 mix-blend-multiply pointer-events-none" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROOF NUMBERS SECTION ────────────────────────────────── */}
      <section className="bg-paper py-20 lg:py-24 border-b border-ink-200" aria-label="Company scale and verification">
        <div className="max-w-[80rem] mx-auto px-6 md:px-10">
          {/* Tabular stat layout with symmetric grid dividers */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
            {STATS.map(({ value, suffix, unit, label }, i) => {
              let cellClasses = "";
              if (i === 0) cellClasses = "pr-6 pb-8 lg:pr-8 lg:pl-0 lg:pb-0";
              if (i === 1) cellClasses = "pl-6 pb-8 border-l border-ink-200 lg:px-8 lg:pb-0";
              if (i === 2) cellClasses = "pr-6 pt-8 border-t border-ink-200 lg:px-8 lg:pt-0 lg:border-t-0 lg:border-l";
              if (i === 3) cellClasses = "pl-6 pt-8 border-t border-l border-ink-200 lg:pl-8 lg:pr-0 lg:pt-0 lg:border-t-0";

              return (
                <Reveal key={label} delay={i * 120} className={cellClasses}>
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-1">
                        <span className="font-display text-5xl md:text-6xl font-normal tracking-tight text-ink">
                          <NumberTicker value={value} suffix={suffix} duration={1000} />
                        </span>
                        <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-ngreen font-semibold">
                          {unit}
                        </span>
                      </div>
                      <p className="text-xs text-ink-600 font-medium tracking-wide mt-2">
                        {label}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <Reveal delay={520}>
            <p className="mt-10 text-[10px] font-mono text-ink-400 border-t border-ink-200 pt-4">
              † Company records as of Q4 2024. Customer count per NComputing CRM records.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── HOW IT WORKS (BENTO GRID) ─────────────────────────────── */}
      <section className="bg-paper py-12 lg:py-16 border-b border-ink-200" aria-label="How LEAF OS works">
        <div className="max-w-[80rem] mx-auto px-6 md:px-10">

          <Reveal>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-6">
              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight leading-[1.1] max-w-[20ch]">
                Three steps from old PC to managed virtual endpoint.
              </h3>
              <Link href="/solution" className="group inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-ngreen transition-colors mb-1">
                Full technical specifications 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </Reveal>

          {/* Asymmetric Bento Grid to replace simple repeating cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Card 1: Step 01 (Spans 2 columns, split layout) */}
            <Reveal className="lg:col-span-2">
              <div className="h-full flex flex-col md:flex-row border border-zinc-200/50 bg-white/40 backdrop-blur-md rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.02)] transition-all duration-200 hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)] hover:bg-white/60 hover:-translate-y-0.5 p-5 md:p-6 justify-between items-center gap-6">
                <div className="flex flex-col justify-between flex-1 max-w-[36ch]">
                  <div>
                    <span className="font-mono text-xs text-ngreen font-bold mb-2 block">
                      {BENTO_STEPS[0].step}
                    </span>
                    <h4 className="font-display text-xl sm:text-2xl text-ink mb-2">
                      {BENTO_STEPS[0].heading}
                    </h4>
                    <p className="text-sm text-ink-600 leading-relaxed">
                      {BENTO_STEPS[0].body}
                    </p>
                  </div>
                </div>
                {BENTO_STEPS[0].img && (
                  <div className="relative w-full md:w-[180px] h-[120px] md:h-[135px] shrink-0 overflow-hidden rounded-lg border border-zinc-200/60 shadow-sm bg-paper-200">
                    <Image
                      src={BENTO_STEPS[0].img}
                      alt={BENTO_STEPS[0].alt || ""}
                      fill
                      className="object-cover grayscale"
                      sizes="(max-width: 768px) 100vw, 180px"
                    />
                  </div>
                )}
              </div>
            </Reveal>

            {/* Card 2: Step 02 (Spans 1 column, pure typographic bento diversity) */}
            <Reveal className="lg:col-span-1">
              <div className="h-full flex flex-col border border-zinc-200/50 bg-white/40 backdrop-blur-md rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.02)] transition-all duration-200 hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)] hover:bg-white/60 hover:-translate-y-0.5 p-5 md:p-6 justify-between gap-4">
                <div>
                  <span className="font-mono text-xs text-ngreen font-bold mb-2 block">
                    {BENTO_STEPS[1].step}
                  </span>
                  <h4 className="font-display text-xl sm:text-2xl text-ink mb-2">
                    {BENTO_STEPS[1].heading}
                  </h4>
                  <p className="text-sm text-ink-600 leading-relaxed mb-2">
                    {BENTO_STEPS[1].body}
                  </p>
                </div>
                <div className="relative w-full h-[120px] md:h-[135px] overflow-hidden rounded-lg border border-zinc-200/60 bg-zinc-50/50 flex items-center justify-center p-2">
                  <LottieAnimation
                    src="https://lottie.host/31a622df-9221-4b0f-afa9-36150a79943b/wcUivdrKrP.lottie"
                    className="w-full h-full max-w-[120px]"
                  />
                </div>
              </div>
            </Reveal>

            {/* Card 3: Step 03 (Spans 3 columns, highlighted dark card split) */}
            <Reveal className="lg:col-span-3">
              <div className="flex flex-col md:flex-row border border-zinc-700 bg-zinc-900 rounded-xl shadow-[0_16px_48px_rgba(0,0,0,0.08)] p-5 md:p-6 justify-between items-center gap-6 transition-all hover:border-zinc-650">
                <div className="flex flex-col justify-between flex-1 max-w-[48ch]">
                  <div>
                    <span className="font-mono text-xs text-ngreen-light font-bold mb-2 block">
                      {BENTO_STEPS[2].step}
                    </span>
                    <h4 className="font-display text-xl sm:text-2xl text-paper mb-2">
                      {BENTO_STEPS[2].heading}
                    </h4>
                    <p className="text-sm sm:text-base text-ink-200 leading-relaxed">
                      {BENTO_STEPS[2].body}
                    </p>
                  </div>
                </div>
                {BENTO_STEPS[2].img && (
                  <div className="relative w-full md:w-[280px] h-[150px] shrink-0 overflow-hidden rounded-lg border border-zinc-800 shadow-sm bg-zinc-900">
                    <Image
                      src={BENTO_STEPS[2].img}
                      alt={BENTO_STEPS[2].alt || ""}
                      fill
                      className="object-cover grayscale opacity-90"
                      sizes="(max-width: 768px) 100vw, 280px"
                    />
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA SECTION ───────────────────────────────────── */}
      <section className="bg-paper py-16 lg:py-24" aria-label="Lifecycle deadline notice and solutions">
        <div className="max-w-[80rem] mx-auto px-6 md:px-10">
          <div className="border border-zinc-200/50 bg-white/40 backdrop-blur-md p-8 md:p-16 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
            <Reveal className="max-w-2xl">
              <div>
                <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl text-ink leading-[1.15] mb-6">
                  Windows 10 support ended October 14, 2025. Every unpatched machine in your office is now an active compliance liability.
                </h3>
                <p className="text-sm sm:text-base text-ink-600 leading-relaxed font-normal">
                  Microsoft no longer issues security patches for Windows 10. The exposure grows with each passing month. The question is no longer if you need to act - it is how.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100} className="shrink-0 w-full lg:w-[26rem]">
              <Link
                href="/problem"
                className="group block bg-ink rounded-xl p-7 hover:bg-ngreen active:scale-[0.99] transition-all duration-200"
              >
                {/* Next navigation block */}
                <h4 className="font-display text-2xl text-paper mb-3 leading-snug">
                  The Windows 10 Cost Problem{" "}
                  <span className="inline-block animate-slide-x transition-transform">&rarr;</span>
                </h4>
                <p className="text-xs text-paper/60 leading-relaxed mb-6 font-light">
                  Why bulk hardware replacement is an unplanned capital expense most IT budgets have not accounted for.
                </p>
                <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-semibold text-paper/50 group-hover:text-paper transition-colors">
                  Read the full analysis <span className="inline-block animate-slide-x">&rarr;</span>
                </span>
              </Link>
            </Reveal>          </div>
        </div>
      </section>
    </>
  );
}
