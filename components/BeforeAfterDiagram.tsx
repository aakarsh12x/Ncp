/**
 * BeforeAfterDiagram
 * A premium B2B engineering-style schematic comparing the legacy Windows 10 PC fleet
 * to the modernized LEAF OS thin-client environment.
 */
export default function BeforeAfterDiagram() {
  return (
    <div className="w-full overflow-x-auto" role="img" aria-label="Before and after diagram: aging PCs running Windows 10 are converted into managed LEAF OS endpoints connecting to a central virtual desktop server">
      <div className="flex flex-col lg:flex-row gap-0 border border-zinc-200/50 divide-y lg:divide-y-0 lg:divide-x divide-zinc-200/50 min-w-[760px] rounded-3xl overflow-hidden shadow-lg bg-white/30 backdrop-blur-xl transition-all duration-300 hover:shadow-xl">

        {/* ── BEFORE (Legacy State) ─────────────────────────────── */}
        <div className="flex-1 px-10 py-12 bg-zinc-50/50 transition-colors duration-300 hover:bg-zinc-50/80">
          <div className="flex items-center justify-between mb-8">
            <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-red-600/80 bg-red-50 border border-red-100 px-3 py-1 rounded-full">
              Before — Today
            </span>
            <span className="text-xs text-zinc-500 font-medium">Windows 10 EOL Hazard</span>
          </div>

          <svg viewBox="0 0 260 140" className="w-full max-w-sm mx-auto" xmlns="http://www.w3.org/2000/svg">
            <style>{`
              .monitor-screen-old {
                fill: #1e1e1e;
                stroke: #71717a;
                stroke-width: 1.2;
              }
              .monitor-frame-old {
                fill: #e4e4e7;
                stroke: #a1a1aa;
                stroke-width: 1;
              }
              .monitor-stand-old {
                fill: #d4d4d8;
                stroke: #a1a1aa;
                stroke-width: 1;
              }
              .animate-eol-alert {
                animation: alert-glow 2s infinite ease-in-out;
              }
              @keyframes alert-glow {
                0%, 100% { fill: rgba(220, 38, 38, 0.05); stroke: rgba(220, 38, 38, 0.4); }
                50% { fill: rgba(220, 38, 38, 0.2); stroke: rgba(220, 38, 38, 0.95); }
              }
            `}</style>
            
            {/* 3 aging PCs in a row */}
            {[0, 1, 2].map((i) => {
              const x = 12 + i * 84;
              const y = 15;
              return (
                <g key={i} className="opacity-90">
                  {/* Outer Bezel/Chassis */}
                  <rect x={x - 2} y={y - 2} width="56" height="38" rx="4" className="monitor-frame-old" />
                  {/* Inner Screen */}
                  <rect x={x} y={y} width="52" height="32" rx="1.5" className="monitor-screen-old" />
                  {/* Stand Neck */}
                  <path d={`M ${x + 22} ${y + 36} L ${x + 20} ${y + 44} L ${x + 32} ${y + 44} L ${x + 30} ${y + 36} Z`} className="monitor-stand-old" />
                  {/* Stand Base */}
                  <rect x={x + 12} y={y + 43} width="28" height="3" rx="1.5" className="monitor-stand-old" />
                  
                  {/* EOL warning inside the screen */}
                  <rect x={x + 6} y={y + 6} width="40" height="20" rx="2" className="animate-eol-alert" strokeWidth="0.8" />
                  <text x={x + 26} y={y + 14} textAnchor="middle" fontFamily="var(--font-body)" fontSize="5.5" fill="#f87171" fontWeight="bold" letterSpacing="0.05em">ALERT</text>
                  <text x={x + 26} y={y + 22} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="4.5" fill="#ef4444" fontWeight="black">WIN 10 EOL</text>
                  
                  {/* Power Button Indicator (Amber/Off) */}
                  <circle cx={x + 48} cy={y + 34} r="0.8" fill="#f59e0b" />
                  
                  {/* PC Label */}
                  <text x={x + 26} y={y + 55} textAnchor="middle" fontFamily="var(--font-body)" fontSize="7" fill="#71717a" fontWeight="500">PC 0{i + 1}</text>
                </g>
              );
            })}
            
            {/* Caption */}
            <rect x="15" y="105" width="230" height="20" rx="6" fill="#fef2f2" stroke="#fee2e2" strokeWidth="1" />
            <text x="130" y="117" textAnchor="middle" fontFamily="var(--font-body)" fontSize="7.5" fill="#991b1b" fontWeight="600">
              Legacy hardware locked out of Windows 11 updates
            </text>
          </svg>

          {/* Feature Points */}
          <div className="mt-8 space-y-3.5">
            <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-red-50/50 transition-colors duration-200">
              <svg className="w-4 h-4 text-red-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <div>
                <p className="text-xs font-semibold text-zinc-800">Isolated Management</p>
                <p className="text-[11px] text-zinc-500 mt-0.5">Each workstation configured and updated manually on-site.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-red-50/50 transition-colors duration-200">
              <svg className="w-4 h-4 text-red-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <div>
                <p className="text-xs font-semibold text-zinc-800">Security Vulnerabilities</p>
                <p className="text-[11px] text-zinc-500 mt-0.5">Local data storage with patching gaps on unmanaged endpoints.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-red-50/50 transition-colors duration-200">
              <svg className="w-4 h-4 text-red-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <div>
                <p className="text-xs font-semibold text-zinc-800">Forced Capital Expense</p>
                <p className="text-[11px] text-zinc-500 mt-0.5">Unavoidable hardware replacement cost of ₹25,000–₹45,000 per PC.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── CENTRAL FLOW ARROW ─────────────────────────────── */}
        <div className="hidden lg:flex flex-col items-center justify-center w-16 bg-white/40 shrink-0 relative">
          <div className="absolute inset-y-0 w-px bg-gradient-to-b from-zinc-200 via-zinc-300 to-zinc-200" />
          <svg viewBox="0 0 24 100" className="w-8 h-24 z-10" xmlns="http://www.w3.org/2000/svg">
            <style>{`
              .flow-path {
                stroke-dasharray: 8, 8;
                animation: flow-pulse 1.8s infinite linear;
              }
              @keyframes flow-pulse {
                to { stroke-dashoffset: -16; }
              }
            `}</style>
            <path d="M 12 0 L 12 85" stroke="#78b72a" strokeWidth="2.5" strokeLinecap="round" className="flow-path" />
            <polygon points="6,78 12,94 18,78" fill="#78b72a" />
          </svg>
          <span className="text-[8px] font-mono font-bold text-zinc-400 uppercase tracking-widest mt-2">Migrate</span>
        </div>

        {/* ── AFTER (Modernized LEAF OS State) ──────────────────────────────── */}
        <div className="flex-1 px-10 py-12 bg-white transition-colors duration-300 hover:bg-zinc-50/20">
          <div className="flex items-center justify-between mb-8">
            <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-emerald-700 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full">
              After — LEAF OS Installed
            </span>
            <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Windows 11 Compliant
            </span>
          </div>

          <svg viewBox="0 0 260 140" className="w-full max-w-sm mx-auto" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="screen-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1e3a8a" />
                <stop offset="60%" stopColor="#0f172a" />
                <stop offset="100%" stopColor="#020617" />
              </linearGradient>
              <linearGradient id="cloud-glow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
            <style>{`
              .monitor-screen-new {
                fill: url(#screen-grad);
                stroke: #09090b;
                stroke-width: 1.25;
              }
              .monitor-frame-new {
                fill: #09090b;
                stroke: #27272a;
                stroke-width: 1;
              }
              .monitor-stand-new {
                fill: #27272a;
                stroke: #18181b;
                stroke-width: 1;
              }
              .active-pulse {
                animation: ping-pulse 2s infinite cubic-bezier(0.16, 1, 0.3, 1);
              }
              @keyframes ping-pulse {
                0% { r: 1.5px; opacity: 1; }
                100% { r: 7px; opacity: 0; }
              }
            `}</style>

            {/* 3 LEAF OS endpoints in a row */}
            {[0, 1, 2].map((i) => {
              const x = 12 + i * 84;
              const y = 15;
              const cx = x + 26;
              const cy = y + 24;
              return (
                <g key={i}>
                  {/* Outer Bezel (Sleek Modern Thin Bezel) */}
                  <rect x={x - 1.5} y={y - 1.5} width="55" height="35" rx="2" className="monitor-frame-new" />
                  {/* Screen */}
                  <rect x={x} y={y} width="52" height="32" rx="1" className="monitor-screen-new" />
                  {/* Stand Neck */}
                  <rect x={x + 24} y={y + 32} width="4" height="8" className="monitor-stand-new" />
                  {/* Stand Base */}
                  <ellipse cx={cx} cy={y + 40} rx="12" ry="2" className="monitor-stand-new" />
                  
                  {/* OS GUI representation */}
                  <rect x={x + 4} y={y + 4} width="44" height="8" rx="1.5" fill="rgba(255, 255, 255, 0.08)" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="0.5" />
                  <text x={x + 26} y={y + 10} textAnchor="middle" fontFamily="var(--font-body)" fontSize="5" fill="#34d399" fontWeight="bold" letterSpacing="0.05em">LEAF OS</text>
                  
                  {/* Mock Window desktop lines */}
                  <line x1={x + 6} y1={y + 17} x2={x + 46} y2={y + 17} stroke="rgba(255, 255, 255, 0.1)" strokeWidth="0.5" />
                  
                  {/* Status Indicator Connection */}
                  <circle cx={cx} cy={cy} r="1.5" fill="#10b981" className="active-pulse" />
                  <circle cx={cx} cy={cy} r="1.5" fill="#10b981" />
                  
                  {/* Power indicator light (Active Green) */}
                  <circle cx={x + 50} cy={y + 30} r="0.6" fill="#10b981" />
                  
                  {/* Label */}
                  <text x={x + 26} y={y + 55} textAnchor="middle" fontFamily="var(--font-body)" fontSize="7" fill="#18181b" fontWeight="bold">Endpoint 0{i + 1}</text>
                </g>
              );
            })}

            {/* Caption */}
            <rect x="15" y="105" width="230" height="20" rx="6" fill="#ecfdf5" stroke="#d1fae5" strokeWidth="1" />
            <text x="130" y="117" textAnchor="middle" fontFamily="var(--font-body)" fontSize="7.5" fill="#065f46" fontWeight="bold">
              Secure virtualized connection to Windows 11 Cloud
            </text>
          </svg>

          {/* Feature Points */}
          <div className="mt-8 space-y-3.5">
            <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-emerald-50/50 transition-colors duration-200">
              <svg className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <p className="text-xs font-semibold text-zinc-900">Unified Central Console</p>
                <p className="text-[11px] text-zinc-600 mt-0.5">Control, push updates, and configure all endpoints from a single console.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-emerald-50/50 transition-colors duration-200">
              <svg className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <p className="text-xs font-semibold text-zinc-900">Zero-Trust Local Security</p>
                <p className="text-[11px] text-zinc-600 mt-0.5">Zero data saved locally. User sessions run completely isolated in secure clouds.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-emerald-50/50 transition-colors duration-200">
              <svg className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <p className="text-xs font-semibold text-zinc-900">Minimal Resource Footprint</p>
                <p className="text-[11px] text-zinc-600 mt-0.5">Smooth performance on 4 GB RAM, extending existing machine lifetimes by 5+ years.</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Infrastructure Integration Compatibility Panel */}
      <div className="border border-zinc-200/50 bg-white/40 backdrop-blur-md p-6 flex flex-col md:flex-row items-center justify-between gap-6 min-w-[760px] rounded-3xl mt-6 shadow-md transition-all duration-300 hover:shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-zinc-500">
            Works Interoperably With
          </span>
        </div>
        <div className="flex gap-3 flex-wrap justify-center md:justify-end">
          {["Microsoft AVD", "Windows 365", "Citrix", "Omnissa", "vSpace Pro"].map((platform) => (
            <span
              key={platform}
              className="text-[10px] font-body font-semibold text-zinc-700 border border-zinc-200/60 bg-white/70 px-3.5 py-1.5 rounded-full shadow-sm hover:border-emerald-500 hover:text-emerald-700 hover:bg-emerald-50/30 transition-all duration-200 cursor-default select-none"
            >
              {platform}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
