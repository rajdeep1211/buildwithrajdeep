"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Transition to compact floating state when scrolled past top hero zone
      if (currentScrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      lastScrollY = currentScrollY;
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Education", href: "/education" },
    { name: "Experience", href: "/experience" },
    { name: "Projects", href: "/projects" },
    { name: "Contact Me", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none">
      {/* Outer framing wrapper ensuring zero layout shifts on page content */}
      <div
        className={`w-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isScrolled
            ? "pt-3 sm:pt-4 px-4 sm:px-6 md:px-8"
            : "pt-0 px-0"
        }`}
      >
        {/* Navigation Bar Capsule */}
        <div
          className={`mx-auto pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isScrolled
              ? "max-w-4xl lg:max-w-5xl rounded-full bg-[#0a1219]/80 backdrop-blur-[16px] backdrop-saturate-[140%] border border-white/10 shadow-[0_12px_32px_rgba(0,0,0,0.35),0_0_20px_-3px_rgba(45,212,191,0.12)] px-5 sm:px-8 py-2.5 sm:py-3"
              : "max-w-[1360px] rounded-none bg-cream/95 backdrop-blur-md border-b border-transparent shadow-none px-6 sm:px-10 lg:px-12 py-5 sm:py-6"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Left: Personal Branding */}
            <a
              href="/"
              className="group flex items-center focus:outline-none transition-transform duration-300 hover:scale-[1.02]"
              aria-label="Rajdeep Bakliwal Home"
            >
              <span
                className={`font-serif font-bold tracking-tight transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isScrolled
                    ? "text-lg sm:text-xl text-white group-hover:text-teal-300"
                    : "text-2xl sm:text-3xl text-brownie group-hover:text-caramel"
                }`}
              >
                Rajdeep Bakliwal
              </span>
              <span
                className={`font-mono font-bold animate-pulse ml-0.5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isScrolled
                    ? "text-lg sm:text-xl text-teal-400"
                    : "text-2xl sm:text-3xl text-caramel"
                }`}
              >
                _
              </span>
            </a>

            {/* Right: Desktop Navigation Links */}
            <nav
              className={`hidden md:flex items-center font-medium transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isScrolled
                  ? "space-x-5 lg:space-x-7 text-sm"
                  : "space-x-7 lg:space-x-9 text-base"
              }`}
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                if (isScrolled) {
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      className={`relative py-1 transition-all duration-200 ${
                        isActive
                          ? "text-teal-300 font-semibold"
                          : "text-neutral-300 hover:text-white"
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && (
                        <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-teal-400 rounded-full shadow-[0_0_8px_rgba(45,212,191,0.6)]" />
                      )}
                    </a>
                  );
                }

                // Initial / Full-Size Hero State
                return (
                  <div key={link.name} className="flex flex-col items-center">
                    <a
                      href={link.href}
                      className={`transition-colors duration-200 ${
                        isActive
                          ? "text-brownie font-semibold hover:text-caramel"
                          : "text-coffee hover:text-brownie"
                      }`}
                    >
                      {link.name}
                    </a>
                    {isActive && (
                      <span className="w-8 sm:w-10 h-[2.5px] bg-caramel rounded-full mt-1 transition-all duration-300" />
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg transition-colors focus:outline-none ${
                  isScrolled
                    ? "text-neutral-200 hover:text-white hover:bg-white/10"
                    : "text-brownie hover:bg-cream-dark"
                }`}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown Sheet */}
        {mobileMenuOpen && (
          <div className="md:hidden pointer-events-auto mt-2 mx-auto max-w-sm sm:max-w-md animate-in fade-in slide-in-from-top-2 duration-300">
            <div
              className={`rounded-2xl p-5 space-y-3 transition-all duration-300 ${
                isScrolled
                  ? "bg-[#0a1219]/95 backdrop-blur-[20px] border border-white/15 shadow-[0_16px_40px_rgba(0,0,0,0.5),0_0_25px_-5px_rgba(45,212,191,0.2)]"
                  : "bg-cream/95 backdrop-blur-md border border-caramel/20 shadow-xl"
              }`}
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-2 px-3 rounded-lg text-base font-medium transition-colors ${
                      isScrolled
                        ? isActive
                          ? "text-teal-300 bg-white/10 font-semibold"
                          : "text-neutral-200 hover:text-white hover:bg-white/5"
                        : isActive
                        ? "text-caramel bg-caramel/10 font-semibold"
                        : "text-brownie/90 hover:text-caramel hover:bg-cream-dark/50"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

