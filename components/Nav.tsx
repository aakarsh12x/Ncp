"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const NAV_LINKS = [
  { href: "/", label: "Overview" },
  { href: "/problem", label: "The Problem" },
  { href: "/solution", label: "The Solution" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Scrolled state (determines background styling)
      setScrolled(currentScrollY > 20);

      // 2. Hide on scroll down, show on scroll up
      if (currentScrollY <= 64) {
        // Always show near the top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        // Scrolling down -> hide
        setIsVisible(false);
      } else {
        // Scrolling up -> show
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initialize immediately
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled
          ? "bg-white/80 border-b border-zinc-200/60 backdrop-blur-md shadow-sm"
          : "bg-transparent border-b border-zinc-200/30"
      }`}
    >
      <div className="max-w-[80rem] mx-auto px-6 md:px-10 flex h-14 md:h-16 items-center justify-between gap-5">
        {/* Wordmark */}
        <Link href="/" className="flex items-center group" aria-label="NComputing - Home">
          <div className="flex items-center group-hover:scale-[1.02] transition-transform duration-200">
            <svg viewBox="0 0 160 30" className="h-6 md:h-7 w-auto" xmlns="http://www.w3.org/2000/svg">
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
                <tspan fill="#111110" className="transition-colors group-hover:fill-black">Computing</tspan>
              </text>
            </svg>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <nav aria-label="Main navigation" className="flex items-center gap-6">
            {NAV_LINKS.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-zinc-950 font-semibold"
                      : "text-zinc-500 hover:text-zinc-900"
                  }`}
                >
                  {label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-ngreen rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/solution#contact"
            className="inline-flex items-center gap-2 px-5 py-2 bg-ngreen text-white text-xs md:text-sm font-semibold hover:bg-ngreen-dark hover:ring-2 hover:ring-ngreen/30 hover:ring-offset-2 active:scale-[0.98] transition-all rounded-lg shadow-sm"
          >
            Request pilot
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* Mobile nav */}
        <nav aria-label="Mobile navigation" className="flex md:hidden items-center gap-4">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`relative py-1 text-xs font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-zinc-950 font-semibold"
                    : "text-zinc-500 hover:text-zinc-900"
                }`}
              >
                {label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-ngreen rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
