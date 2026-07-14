/**
 * BeforeAfterDiagram
 * Engineering-style SVG schematic — thin strokes, labeled boxes, no illustration.
 * Shows: Fleet of aging PCs (before) → LEAF OS installed → Managed virtual desktops (after).
 */
export default function BeforeAfterDiagram() {
  return (
    <div className="w-full overflow-x-auto" role="img" aria-label="Before and after diagram: aging PCs running Windows 10 are converted into managed LEAF OS endpoints connecting to a central virtual desktop server">
      <div className="flex flex-col lg:flex-row gap-0 border border-zinc-200/60 divide-y lg:divide-y-0 lg:divide-x divide-zinc-200/60 min-w-[640px] rounded-2xl overflow-hidden shadow-sm bg-white/40 backdrop-blur-md">

        {/* ── BEFORE ─────────────────────────────── */}
        <div className="flex-1 px-8 py-10 bg-paper">
          <p className="text-[9px] font-body font-semibold uppercase tracking-[0.14em] text-ink-400 mb-6">
            Before — Today
          </p>
          <svg viewBox="0 0 260 140" className="w-full max-w-sm mx-auto" xmlns="http://www.w3.org/2000/svg">
            <style>{`
              .monitor-screen-old {
                fill: #fdfdfc;
                stroke: #a8a8a3;
                stroke-width: 1;
              }
              .monitor-stand-old {
                stroke: #a8a8a3;
                stroke-width: 1;
              }
              .animate-eol-badge {
                animation: eol-warning 3s infinite ease-in-out;
              }
              .animate-eol-text {
                animation: eol-text 3s infinite ease-in-out;
              }
              @keyframes eol-warning {
                0%, 100% { stroke: #a8a8a3; fill: transparent; }
                50% { stroke: #c8401a; fill: rgba(200, 64, 26, 0.05); }
              }
              @keyframes eol-text {
                0%, 100% { fill: #6b6b67; }
                50% { fill: #c8401a; }
              }
            `}</style>
            {/* 3 aging PCs in a 1×3 row */}
            {[0, 1, 2].map((i) => {
              const x = 12 + i * 84;
              const y = 20;
              return (
                <g key={i}>
                  {/* Monitor Screen */}
                  <rect x={x} y={y} width="52" height="32" rx="2" className="monitor-screen-old" />
                  {/* Stand Neck */}
                  <line x1={x + 26} y1={y + 32} x2={x + 26} y2={y + 38} className="monitor-stand-old" />
                  {/* Stand Base */}
                  <line x1={x + 16} y1={y + 38} x2={x + 36} y2={y + 38} className="monitor-stand-old" />
                  
                  {/* EOL warning inside the screen */}
                  <rect x={x + 8} y={y + 6} width="36" height="12" rx="1" fill="none" className="animate-eol-badge" strokeWidth="0.75" />
                  <text x={x + 26} y={y + 14} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="5.5" className="animate-eol-text" fontWeight="bold">WIN 10 EOL</text>
                  
                  {/* Label */}
                  <text x={x + 26} y={y + 52} textAnchor="middle" fontFamily="var(--font-body)" fontSize="7" fill="#6b6b67">PC 0{i + 1}</text>
                </g>
              );
            })}
            {/* Caption */}
            <text x="130" y="112" textAnchor="middle" fontFamily="var(--font-body)" fontSize="8" fill="#6b6b67">
              Aging fleet — Windows 10 support ends Oct 2025
            </text>
          </svg>
          <div className="mt-6 space-y-2">
            <div className="flex items-start gap-2">
              <span className="w-1.5 h-px bg-signal mt-2 shrink-0"/>
              <p className="text-xs text-ink-400">Each PC managed separately</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="w-1.5 h-px bg-signal mt-2 shrink-0"/>
              <p className="text-xs text-ink-400">Local data, inconsistent patching</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="w-1.5 h-px bg-signal mt-2 shrink-0"/>
              <p className="text-xs text-ink-400">Hardware replacement: ₹25,000–₹45,000 per seat</p>
            </div>
          </div>
        </div>

        {/* ── ARROW ─────────────────────────────── */}
        <div className="hidden lg:flex flex-col items-center justify-center w-14 bg-paper shrink-0">
          <svg viewBox="0 0 24 80" className="w-6" xmlns="http://www.w3.org/2000/svg">
            <style>{`
              .arrow-line {
                stroke-dasharray: 6, 4;
                animation: flow-dash 1.5s infinite linear;
              }
              @keyframes flow-dash {
                to {
                  stroke-dashoffset: -10;
                }
              }
            `}</style>
            <line x1="12" y1="0" x2="12" y2="60" stroke="#6b6b67" strokeWidth="1.5" className="arrow-line"/>
            <polyline points="6,54 12,66 18,54" fill="none" stroke="#6b6b67" strokeWidth="1.5" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* ── AFTER ──────────────────────────────── */}
        <div className="flex-1 px-8 py-10 bg-paper">
          <p className="text-[9px] font-body font-semibold uppercase tracking-[0.14em] text-ink mb-6">
            After — LEAF OS Installed
          </p>
          <svg viewBox="0 0 260 140" className="w-full max-w-sm mx-auto" xmlns="http://www.w3.org/2000/svg">
            <style>{`
              .monitor-screen-new {
                fill: #fffef9;
                stroke: #111110;
                stroke-width: 1.25;
              }
              .monitor-stand-new {
                stroke: #111110;
                stroke-width: 1.25;
              }
              .ping-circle {
                animation: ping-anim 2.5s infinite cubic-bezier(0.16, 1, 0.3, 1);
              }
              @keyframes ping-anim {
                0% {
                  r: 2px;
                  opacity: 0.8;
                }
                100% {
                  r: 8px;
                  opacity: 0;
                }
              }
            `}</style>
            {/* 3 LEAF OS endpoints in a 1×3 row */}
            {[0, 1, 2].map((i) => {
              const x = 12 + i * 84;
              const y = 20;
              const cx = x + 26;
              const cy = y + 24;
              return (
                <g key={i}>
                  {/* Monitor Screen */}
                  <rect x={x} y={y} width="52" height="32" rx="2" className="monitor-screen-new" />
                  {/* Stand Neck */}
                  <line x1={x + 26} y1={y + 32} x2={x + 26} y2={y + 38} className="monitor-stand-new" />
                  {/* Stand Base */}
                  <line x1={x + 16} y1={y + 38} x2={x + 36} y2={y + 38} className="monitor-stand-new" />
                  
                  {/* LEAF OS branding inside screen */}
                  <rect x={x + 6} y={y + 5} width="40" height="10" rx="1" fill="none" stroke="#22c55e" strokeWidth="0.75" />
                  <text x={x + 26} y={y + 12} textAnchor="middle" fontFamily="var(--font-body)" fontSize="6" fill="#111110" fontWeight="bold">LEAF OS</text>

                  {/* Remote session visual: small desk line */}
                  <line x1={x + 10} y1={y + 19} x2={x + 42} y2={y + 19} stroke="#a8a8a3" strokeWidth="0.5" />
                  
                  {/* Connection indicator */}
                  <circle cx={cx} cy={cy} r="2" fill="#22c55e" className="ping-circle" />
                  <circle cx={cx} cy={cy} r="2" fill="#22c55e" />

                  {/* Label */}
                  <text x={x + 26} y={y + 52} textAnchor="middle" fontFamily="var(--font-body)" fontSize="7" fill="#111110" fontWeight="bold">Endpoint 0{i + 1}</text>
                </g>
              );
            })}
            {/* Caption */}
            <text x="130" y="112" textAnchor="middle" fontFamily="var(--font-body)" fontSize="8" fill="#111110" fontWeight="bold">
              Centrally managed Windows 11 cloud sessions
            </text>
          </svg>
          <div className="mt-6 space-y-2">
            <div className="flex items-start gap-2">
              <span className="w-1.5 h-px bg-signal mt-2 shrink-0"/>
              <p className="text-xs text-ink-400">Single pane of glass — all endpoints from one console</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="w-1.5 h-px bg-signal mt-2 shrink-0"/>
              <p className="text-xs text-ink-400">No local data — sessions run in the cloud or on-prem server</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="w-1.5 h-px bg-signal mt-2 shrink-0"/>
              <p className="text-xs text-ink-400">Runs on 4 GB RAM, 8 GB storage — hardware life extended by years</p>
            </div>
          </div>
        </div>

      </div>

      {/* Infrastructure layer */}
      <div className="border border-zinc-200/60 bg-white/40 backdrop-blur-md p-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 min-w-[640px] rounded-2xl mt-4 shadow-sm">
        <div className="text-center">
          <p className="text-[9px] font-body font-semibold uppercase tracking-[0.14em] text-ink-400 mb-1">Works with</p>
          <div className="flex gap-4 flex-wrap justify-center">
            {["Microsoft AVD", "Windows 365", "Citrix", "Omnissa", "vSpace Pro"].map((p) => (
              <span key={p} className="text-[10px] font-body font-medium text-ink border border-zinc-200/60 bg-white/50 px-2.5 py-1 rounded-lg">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
