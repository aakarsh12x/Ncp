import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-ink-200 bg-paper-200 text-ink">
      {/* ─── PILOT CALLOUT BANNER ──────────────────────────────── */}
      <div className="border-b border-ink-200/60 bg-paper-300/40">
        <div className="max-w-[80rem] mx-auto px-6 md:px-10 py-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="max-w-2xl">
            <h4 className="font-display text-xl sm:text-2xl text-ink mb-1 tracking-tight">
              Ready to evaluate LEAF OS?
            </h4>
            <p className="text-xs text-ink-600 font-light leading-relaxed">
              Initiate a 30-day pilot on 10–20 PCs. We supply the licenses and boot media. No hardware modifications required.
            </p>
          </div>
          <Link
            href="/solution#contact"
            className="px-5 py-2.5 bg-signal text-paper font-mono text-[10px] uppercase tracking-wider font-semibold rounded-lg transition-all hover:bg-ink hover:text-paper"
          >
            Request Pilot Package &rarr;
          </Link>
        </div>
      </div>

      {/* ─── MAIN FOOTER GRID ──────────────────────────────────── */}
      <div className="max-w-[80rem] mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Column 1: Brand & Status (Spans 4 Columns) */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <svg viewBox="0 0 160 30" className="h-7 w-auto" xmlns="http://www.w3.org/2000/svg">
                  {/* Interlocking loops */}
                  <g>
                    {/* Bottom Left (Orange) */}
                    <circle cx="11" cy="19" r="5.5" fill="none" stroke="#e95d0f" strokeWidth="2.2" />
                    {/* Top (Light Green) */}
                    <circle cx="16" cy="11" r="5.5" fill="none" stroke="#78b72a" strokeWidth="2.2" />
                    {/* Bottom Right (Green) */}
                    <circle cx="21" cy="19" r="5.5" fill="none" stroke="#22c55e" strokeWidth="2.2" />
                  </g>
                  {/* Wordmark */}
                  <text x="36" y="21" fontFamily="var(--font-body)" fontSize="16" fontWeight="800" letterSpacing="-0.03em" className="select-none">
                    <tspan fill="#e95d0f">N</tspan>
                    <tspan fill="#111110">Computing</tspan>
                  </text>
                </svg>
                <span className="font-mono text-xs uppercase tracking-wider text-ink-600">/ LEAF OS</span>
              </div>
              <p className="text-xs text-ink-600 leading-relaxed font-light max-w-[32ch]">
                Extending the lifespan of enterprise PC hardware. Creating secure, thin-client endpoints for virtual environments.
              </p>
            </div>
            
            {/* Live Infrastructure Status */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 border border-zinc-200 bg-white/50 backdrop-blur-sm rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-ink-600">
                All systems operational
              </span>
            </div>
          </div>

          {/* Column 2: Architecture Support (Spans 3 Columns) */}
          <div className="lg:col-span-3">
            <h5 className="font-mono text-[10px] uppercase tracking-widest text-ink-400 font-bold mb-4">
              Supported Platforms
            </h5>
            <ul className="space-y-2.5 text-xs text-ink-600 font-light">
              <li>
                <a href="https://azure.microsoft.com/en-in/products/virtual-desktop/" target="_blank" rel="noopener noreferrer" className="hover:text-signal hover:underline transition-colors">
                  Microsoft Azure Virtual Desktop
                </a>
              </li>
              <li>
                <a href="https://www.microsoft.com/en-in/windows-365" target="_blank" rel="noopener noreferrer" className="hover:text-signal hover:underline transition-colors">
                  Windows 365 Cloud PC
                </a>
              </li>
              <li>
                <a href="https://www.citrix.com" target="_blank" rel="noopener noreferrer" className="hover:text-signal hover:underline transition-colors">
                  Citrix Virtual Apps & Desktops
                </a>
              </li>
              <li>
                <a href="https://www.omnissa.com" target="_blank" rel="noopener noreferrer" className="hover:text-signal hover:underline transition-colors">
                  Omnissa Horizon (VMware)
                </a>
              </li>
              <li>
                <Link href="/solution#interop" className="hover:text-signal hover:underline transition-colors">
                  NComputing vSpace Pro
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Site Map (Spans 2 Columns) */}
          <div className="lg:col-span-2">
            <h5 className="font-mono text-[10px] uppercase tracking-widest text-ink-400 font-bold mb-4">
              Navigation
            </h5>
            <ul className="space-y-2.5 text-xs text-ink-600 font-light">
              <li>
                <Link href="/" className="hover:text-signal hover:underline transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/problem" className="hover:text-signal hover:underline transition-colors">
                  The Problem
                </Link>
              </li>
              <li>
                <Link href="/solution" className="hover:text-signal hover:underline transition-colors">
                  The Solution
                </Link>
              </li>
              <li>
                <Link href="/solution#contact" className="hover:text-signal hover:underline transition-colors">
                  Contact Sales
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Office Details & Global Scale (Spans 3 Columns) */}
          <div className="lg:col-span-3 space-y-4">
            <div>
              <h5 className="font-mono text-[10px] uppercase tracking-widest text-ink-400 font-bold mb-3">
                Global Operations
              </h5>
              <p className="text-xs text-ink-600 font-light leading-relaxed">
                EST: 2003 · Silicon Valley HQ · APAC operations in India, Korea, and EMEA support.
              </p>
            </div>
            <div className="text-[11px] font-mono text-ink-600">
              <p className="font-bold">Contact:</p>
              <p className="text-[10px] font-light mt-0.5">sales@ncomputing.com</p>
            </div>
          </div>

        </div>
      </div>

      {/* ─── BOTTOM LEGAL BAR ──────────────────────────────────── */}
      <div className="border-t border-ink-200 bg-paper-300/60 py-6">
        <div className="max-w-[80rem] mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-ink-600 font-light">
          <div>
            &copy; {year} NComputing Co., Ltd. All rights reserved.
          </div>
          <div className="flex gap-6 font-mono text-[9px] uppercase tracking-wider">
            <a href="https://www.ncomputing.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-signal">Privacy Policy</a>
            <a href="https://www.ncomputing.com/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="hover:text-signal">Terms of Use</a>
            <Link href="/solution#contact" className="hover:text-signal">Request Info</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
