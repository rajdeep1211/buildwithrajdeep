"use client";

import { useState, useEffect } from "react";

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/rajdeep1211",
      bgColor: "bg-[#181717] hover:bg-[#2b2a2a]",
      icon: (
        <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      bgColor: "bg-[#0A66C2] hover:bg-[#084e96]",
      icon: (
        <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://youtube.com",
      bgColor: "bg-[#FF0000] hover:bg-[#cc0000]",
      icon: (
        <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: "Email",
      href: "mailto:rajdeepbakliwal@gmail.com",
      bgColor: "bg-[#EA4335] hover:bg-[#c53224]",
      icon: (
        <svg className="w-4 h-4 fill-none stroke-white" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      name: "X (Twitter)",
      href: "https://x.com",
      bgColor: "bg-[#000000] hover:bg-[#1a1a1a]",
      icon: (
        <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "Discord",
      href: "https://discord.com",
      bgColor: "bg-[#5865F2] hover:bg-[#4752c4]",
      icon: (
        <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      bgColor: "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-90",
      icon: (
        <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
  ];

  const capabilities = [
    {
      title: "AI Systems",
      description:
        "Building AI-powered applications, intelligent workflows, and agent-based systems.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Software Engineering",
      description:
        "Designing and building reliable, scalable software products.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: "Full-Stack Development",
      description:
        "Building complete products from frontend interfaces to backend systems and APIs.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM4 9h16M9 4v16" />
        </svg>
      ),
    },
    {
      title: "AI / ML Engineering",
      description:
        "Working with machine learning, LLMs, AI tooling, and intelligent application architectures.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Product Building",
      description:
        "Turning ideas into usable, practical software products.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      title: "Community & Collaboration",
      description:
        "Building communities, organizing events, volunteering, and bringing people together around technology.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-cream text-brownie relative">
      {/* 1. Header / Navigation */}
      <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-md transition-all">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 h-24 flex items-center justify-between">
          {/* Left: Personal Branding */}
          <a
            href="/"
            className="group flex flex-col focus:outline-none"
            aria-label="Rajdeep Bakliwal Home"
          >
            <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-brownie group-hover:text-caramel transition-colors">
              Rajdeep Bakliwal
            </span>
          </a>

          {/* Right: Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10 text-base font-medium">
            <a
              href="/"
              className="relative text-caramel font-semibold after:absolute after:-bottom-1.5 after:left-0 after:right-0 after:h-0.5 after:bg-caramel after:rounded-full"
            >
              Home
            </a>
            <a
              href="/education"
              className="text-brownie/85 hover:text-caramel transition-colors"
            >
              Education
            </a>
            <a
              href="/experience"
              className="text-brownie/85 hover:text-caramel transition-colors"
            >
              Experience
            </a>
            <a
              href="/projects"
              className="text-brownie/85 hover:text-caramel transition-colors"
            >
              Projects
            </a>
            <a
              href="/contact"
              className="text-brownie/85 hover:text-caramel transition-colors"
            >
              Contact Me
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-brownie hover:bg-cream-dark transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-caramel/20 bg-cream/95 px-6 pt-2 pb-6 space-y-3 shadow-md">
            <a
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-caramel"
            >
              Home
            </a>
            <a
              href="/education"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-brownie/90 hover:text-caramel"
            >
              Education
            </a>
            <a
              href="/experience"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-brownie/90 hover:text-caramel"
            >
              Experience
            </a>
            <a
              href="/projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-brownie/90 hover:text-caramel"
            >
              Projects
            </a>
            <a
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-brownie/90 hover:text-caramel"
            >
              Contact Me
            </a>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* 2 & 3. Hero Section (Spacious layout matching Image 1) */}
        <section className="min-h-[calc(88vh-6rem)] flex items-center py-10 lg:py-16 px-6 sm:px-12 lg:px-16 xl:px-20 max-w-[1400px] mx-auto">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Column: Personal Information & Links */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-7 text-left">
              {/* Name */}
              <div className="space-y-1">
                <h1 className="text-5xl sm:text-6xl xl:text-7xl font-serif font-extrabold text-brownie tracking-tight leading-[1.08]">
                  Rajdeep
                  <br />
                  Bakliwal
                </h1>
                <p className="text-lg sm:text-xl font-medium text-coffee italic pt-1">
                  ( buildwithrajdeep )
                </p>
              </div>

              {/* Short Message / Personal Statement */}
              <p className="text-xl sm:text-2xl text-coffee/90 font-normal leading-relaxed max-w-xl">
                A passionate software engineer who builds end-to-end products, scalable AI systems,
                and brings ideas and people together to create meaningful impact.
              </p>

              {/* Social / Platform Links: Vivid circular badges */}
              <div className="pt-1">
                <div className="flex flex-wrap items-center gap-3 sm:gap-3.5">
                  {socialLinks.map((platform) => (
                    <a
                      key={platform.name}
                      href={platform.href}
                      target={platform.href.startsWith("http") ? "_blank" : undefined}
                      rel={platform.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      aria-label={platform.name}
                      className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center ${platform.bgColor} shadow-sm transition-transform duration-150 hover:scale-110`}
                    >
                      {platform.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* CTA Action Button */}
              <div className="pt-2">
                <a
                  href="https://github.com/rajdeep1211"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg bg-brownie text-cream font-medium text-sm hover:bg-caramel transition-colors shadow-md group"
                >
                  <span className="text-amber-300">★</span>
                  <span>Star Me On Github</span>
                </a>
              </div>
            </div>

            {/* Right Column: Hero Illustration (Workspace & Developer) */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl">
                <svg
                  viewBox="0 0 700 520"
                  className="w-full h-auto drop-shadow-sm"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Floor Shadow */}
                  <ellipse cx="380" cy="485" rx="270" ry="18" fill="#E8DBC9" opacity="0.6" />

                  {/* DESK - Backing & Legs */}
                  {/* Left Drawer Cabinet */}
                  <rect x="170" y="240" width="130" height="235" rx="8" fill="#FAF5EE" stroke="#E8DBC9" strokeWidth="2" />
                  {/* Left Drawer handles & lines */}
                  <line x1="170" y1="295" x2="300" y2="295" stroke="#E8DBC9" strokeWidth="2" />
                  <line x1="170" y1="355" x2="300" y2="355" stroke="#E8DBC9" strokeWidth="2" />
                  <line x1="170" y1="415" x2="300" y2="415" stroke="#E8DBC9" strokeWidth="2" />
                  <rect x="220" y="265" width="30" height="5" rx="2.5" fill="#5E3023" />
                  <rect x="220" y="322" width="30" height="5" rx="2.5" fill="#5E3023" />
                  <rect x="220" y="382" width="30" height="5" rx="2.5" fill="#5E3023" />
                  <rect x="220" y="442" width="30" height="5" rx="2.5" fill="#5E3023" />

                  {/* Right Drawer Cabinet */}
                  <rect x="490" y="240" width="130" height="235" rx="8" fill="#FAF5EE" stroke="#E8DBC9" strokeWidth="2" />
                  {/* Right Drawer handles & lines */}
                  <line x1="490" y1="295" x2="620" y2="295" stroke="#E8DBC9" strokeWidth="2" />
                  <line x1="490" y1="355" x2="620" y2="355" stroke="#E8DBC9" strokeWidth="2" />
                  <line x1="490" y1="415" x2="620" y2="415" stroke="#E8DBC9" strokeWidth="2" />
                  <rect x="540" y="265" width="30" height="5" rx="2.5" fill="#5E3023" />
                  <rect x="540" y="322" width="30" height="5" rx="2.5" fill="#5E3023" />
                  <rect x="540" y="382" width="30" height="5" rx="2.5" fill="#5E3023" />
                  <rect x="540" y="442" width="30" height="5" rx="2.5" fill="#5E3023" />

                  {/* Desk Center Backplate */}
                  <rect x="300" y="240" width="190" height="150" fill="#E8DBC9" opacity="0.4" />

                  {/* Desk Top Surface */}
                  <rect x="150" y="230" width="490" height="18" rx="5" fill="#FAF5EE" stroke="#E8DBC9" strokeWidth="2" />

                  {/* DESKTOP MONITOR */}
                  {/* Stand Base */}
                  <ellipse cx="490" cy="225" rx="36" ry="7" fill="#5E3023" />
                  {/* Stand Neck */}
                  <rect x="484" y="180" width="12" height="46" rx="2" fill="#5E3023" />
                  {/* Monitor Body */}
                  <rect x="375" y="80" width="230" height="155" rx="10" fill="#5E3023" />
                  {/* Monitor Screen Glass */}
                  <rect x="385" y="90" width="210" height="135" rx="6" fill="#FAF5EE" />

                  {/* Code Elements on Screen */}
                  <rect x="405" y="110" width="55" height="5" rx="2.5" fill="#C08552" />
                  <rect x="465" y="110" width="70" height="5" rx="2.5" fill="#895737" />
                  <rect x="540" y="110" width="30" height="5" rx="2.5" fill="#5E3023" />

                  <rect x="420" y="125" width="80" height="5" rx="2.5" fill="#895737" />
                  <rect x="505" y="125" width="50" height="5" rx="2.5" fill="#C08552" />

                  <rect x="420" y="140" width="40" height="5" rx="2.5" fill="#5E3023" />
                  <rect x="465" y="140" width="90" height="5" rx="2.5" fill="#C08552" />
                  <rect x="560" y="140" width="15" height="5" rx="2.5" fill="#895737" />

                  <rect x="405" y="155" width="60" height="5" rx="2.5" fill="#C08552" />
                  <rect x="470" y="155" width="45" height="5" rx="2.5" fill="#5E3023" />

                  {/* Mini neural network nodes on screen */}
                  <circle cx="430" cy="185" r="4" fill="#C08552" />
                  <circle cx="460" cy="175" r="4" fill="#895737" />
                  <circle cx="490" cy="190" r="4" fill="#5E3023" />
                  <circle cx="520" cy="180" r="4" fill="#C08552" />
                  <line x1="430" y1="185" x2="460" y2="175" stroke="#C08552" strokeWidth="1.5" />
                  <line x1="460" y1="175" x2="490" y2="190" stroke="#895737" strokeWidth="1.5" />
                  <line x1="490" y1="190" x2="520" y2="180" stroke="#5E3023" strokeWidth="1.5" />

                  {/* Web camera dot */}
                  <circle cx="490" cy="85" r="2.5" fill="#895737" />

                  {/* Keyboard on Desk */}
                  <rect x="420" y="224" width="85" height="7" rx="2" fill="#5E3023" />
                  {/* Mouse */}
                  <ellipse cx="530" cy="227" rx="8" ry="4" fill="#5E3023" />

                  {/* DEVELOPER FIGURE (Seated on desk edge like Image 1) */}
                  {/* Head / Face */}
                  <ellipse cx="235" cy="85" rx="22" ry="26" fill="#FAD2B8" />
                  {/* Hair */}
                  <path
                    d="M215 80C215 65 225 55 245 55C260 55 265 65 262 82C256 75 245 74 238 78C232 72 220 74 215 80Z"
                    fill="#5E3023"
                  />

                  {/* Inner T-shirt (Caramel / Cyan blue accent) */}
                  <path d="M222 110L248 110L252 195L218 195Z" fill="#C08552" />

                  {/* Jacket / Overshirt (Dark Brownie / Navy) */}
                  <path
                    d="M205 110C205 110 220 105 235 108C250 105 265 110 265 110L275 220L250 225L248 135L222 135L220 225L195 220Z"
                    fill="#5E3023"
                  />

                  {/* Arms */}
                  {/* Left Arm Resting */}
                  <path d="M198 120L185 185L205 230L220 225L202 188L212 130Z" fill="#5E3023" />
                  {/* Left Hand */}
                  <ellipse cx="208" cy="235" rx="9" ry="11" fill="#FAD2B8" />

                  {/* Right Arm Reaching Forward */}
                  <path d="M265 125L285 180L270 235L255 230L268 185L255 135Z" fill="#5E3023" />
                  {/* Right Hand */}
                  <ellipse cx="265" cy="242" rx="9" ry="11" fill="#FAD2B8" />

                  {/* Trousers / Legs (Sitting on the desk) */}
                  {/* Left Leg */}
                  <path d="M205 220L215 350L200 375L185 365L195 230Z" fill="#3D1D14" />
                  {/* Left Foot / Shoe */}
                  <path d="M185 365C185 365 170 380 180 395C190 405 208 398 208 398L202 375Z" fill="#5E3023" />

                  {/* Right Leg (Crossed or hanging) */}
                  <path d="M245 220L295 310L280 345L235 240Z" fill="#3D1D14" />
                  {/* Right Lower Leg */}
                  <path d="M280 340L292 370L275 385L265 355Z" fill="#3D1D14" />
                  {/* Right Foot / Shoe */}
                  <path d="M275 380C275 380 270 400 285 410C298 415 310 405 310 405L295 375Z" fill="#5E3023" />
                </svg>
              </div>
            </div>

          </div>
        </section>

        {/* 5. Core Capabilities (What I Do) */}
        <section className="py-20 lg:py-28 bg-cream-dark/30 border-t border-caramel/20 px-6 sm:px-12 lg:px-16 xl:px-20">
          <div className="max-w-[1400px] mx-auto space-y-12 lg:space-y-16">
            <div className="text-left space-y-3 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-caramel">
                Areas of Focus
              </span>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-brownie tracking-tight">
                Core Capabilities
              </h2>
              <p className="text-coffee text-base sm:text-lg">
                Key capability areas spanning artificial intelligence, modern software engineering, product development, and technical community building.
              </p>
            </div>

            {/* Capabilities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((item) => (
                <div
                  key={item.title}
                  className="p-8 rounded-2xl bg-cream border border-caramel/25 shadow-sm hover:border-caramel hover:-translate-y-1 transition-all duration-200 space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-caramel/15 flex items-center justify-center text-caramel">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-brownie tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-brownie/80 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Floating Scroll to Top Button (Bottom Right matching Image 1) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          type="button"
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-brownie text-cream flex items-center justify-center shadow-lg hover:bg-caramel transition-all duration-200 focus:outline-none"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

      {/* Minimal Bottom Bar */}
      <footer className="border-t border-caramel/15 py-8 px-6 sm:px-12 lg:px-16 xl:px-20 bg-cream text-xs text-coffee">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-serif font-bold text-brownie text-base">
            Rajdeep Bakliwal
          </div>
          <div className="text-coffee/70">
            &copy; {new Date().getFullYear()} BuildWithRajdeep. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
