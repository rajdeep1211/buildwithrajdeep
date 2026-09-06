"use client";

import { useState, useEffect, useRef } from "react";
import InteractiveCapabilityCard from "@/components/InteractiveCapabilityCard";

export default function HomePage() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [capabilitiesVisible, setCapabilitiesVisible] = useState(false);
  const capabilitiesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCapabilitiesVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (capabilitiesRef.current) {
      observer.observe(capabilitiesRef.current);
    }

    return () => observer.disconnect();
  }, []);

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

  const capabilities = [
    {
      title: "AI Systems",
      description:
        "Building AI-powered applications, intelligent workflows, and agent-based systems.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Software Engineering",
      description:
        "Designing and building reliable, scalable software products.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: "Full-Stack Development",
      description:
        "Building complete products from frontend interfaces to backend systems and APIs.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM4 9h16M9 4v16" />
        </svg>
      ),
    },
    {
      title: "AI / ML Engineering",
      description:
        "Working with machine learning, LLMs, AI tooling, and intelligent application architectures.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Product Building",
      description:
        "Turning ideas into usable, practical software products.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      title: "Community & Collaboration",
      description:
        "Building communities, organizing events, volunteering, and bringing people together around technology.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-cream text-brownie relative selection:bg-caramel/30 selection:text-brownie">
      {/* Main Content */}
      <main className="flex-1">
        {/* 2. Hero Section: Sophisticated Developer Terminal Workspace (Pixel-accurate to design) */}
        <section className="pt-6 pb-16 sm:pt-8 sm:pb-20 lg:pt-10 lg:pb-24 px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-[1360px] mx-auto">
            {/* Terminal Window Container with 3D physical depth, extruded shadow & highlight */}
            <div className="rounded-2xl sm:rounded-3xl border-2 border-brownie bg-[#F4EDE4] shadow-[8px_10px_0px_0px_#472319,0_25px_40px_rgba(94,48,35,0.22)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[10px_14px_0px_0px_#472319,0_32px_50px_rgba(94,48,35,0.28)] overflow-hidden">
              {/* Terminal Title Bar / Chrome (Dark Brownie with chamfered top highlight) */}
              <div className="bg-brownie px-6 sm:px-7 py-4 flex items-center justify-between select-none shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]">
                {/* macOS Style Window Controls & Title */}
                <div className="flex items-center">
                  <div className="flex items-center space-x-2.5">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#E06C55] inline-block shadow-2xs" />
                    <span className="w-3.5 h-3.5 rounded-full bg-[#E5A93C] inline-block shadow-2xs" />
                    <span className="w-3.5 h-3.5 rounded-full bg-[#6BB377] inline-block shadow-2xs" />
                  </div>
                  <span className="font-mono text-xs sm:text-sm text-cream/90 font-medium pl-4 sm:pl-5">
                    buildwithrajdeep@portfolio: ~
                  </span>
                </div>

                {/* Right: Tagline & Expand Icon */}
                <div className="flex items-center space-x-3.5 sm:space-x-4">
                  <span className="hidden sm:inline font-mono text-xs sm:text-sm text-cream/80">
                    Ideas. Code. People. Impact.
                  </span>
                  <svg
                    className="w-4 h-4 text-cream/80 hover:text-cream cursor-pointer transition-colors"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                  </svg>
                </div>
              </div>

              {/* Inside Terminal Workspace Body with subtle recessed screen depth */}
              <div className="relative p-7 sm:p-9 lg:p-12 min-h-[520px] lg:min-h-[560px] shadow-[inset_0_3px_12px_rgba(94,48,35,0.06)]">
                {/* Grid Layout: Left (Main Terminal) and Right (Information Panel) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 relative z-10">
                  {/* Left Column (Main Terminal Content - 8 Cols) */}
                  <div className="lg:col-span-8 space-y-6 font-mono">
                    {/* 1. whoami */}
                    <div className="space-y-1.5">
                      <div className="text-sm sm:text-base">
                        <span className="text-caramel font-semibold">rajdeep@buildwithrajdeep:~$</span>{" "}
                        <span className="text-brownie font-bold">whoami</span>
                      </div>
                      <div className="pt-1">
                        <h1 className="font-mono font-bold text-3xl sm:text-4xl lg:text-[44px] text-brownie tracking-tight leading-tight">
                          Rajdeep Bakliwal
                        </h1>
                        <p className="font-mono text-sm sm:text-base text-coffee mt-1">
                          Software Engineer building AI systems.
                        </p>
                      </div>
                    </div>

                    {/* 2. cat about.txt */}
                    <div className="space-y-1.5 pt-1">
                      <div className="text-sm sm:text-base">
                        <span className="text-caramel font-semibold">rajdeep@buildwithrajdeep:~$</span>{" "}
                        <span className="text-brownie font-bold">cat about.txt</span>
                      </div>
                      <p className="font-mono text-xs sm:text-sm text-brownie leading-relaxed max-w-xl pt-0.5">
                        A passionate software engineer who builds end-to-end products, scalable AI systems, and brings ideas and people together to create meaningful impact.
                      </p>
                    </div>

                    {/* 3. ls */}
                    <div className="space-y-2 pt-1">
                      <div className="text-sm sm:text-base">
                        <span className="text-caramel font-semibold">rajdeep@buildwithrajdeep:~$</span>{" "}
                        <span className="text-brownie font-bold">ls</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-0.5">
                        {[
                          { name: "education/", href: "/education" },
                          { name: "experience/", href: "/experience" },
                          { name: "projects/", href: "/projects" },
                          { name: "contact/", href: "/contact" },
                        ].map((dir) => (
                          <a
                            key={dir.name}
                            href={dir.href}
                            className="group flex items-center gap-2 font-mono text-xs sm:text-sm font-bold text-brownie hover:text-caramel transition-colors"
                          >
                            <svg
                              className="w-5 h-4 text-coffee group-hover:text-caramel transition-colors fill-current"
                              viewBox="0 0 20 16"
                            >
                              <path d="M1.5 1A1.5 1.5 0 0 0 0 2.5v11A1.5 1.5 0 0 0 1.5 15h13a1.5 1.5 0 0 0 1.5-1.5V5.5A1.5 1.5 0 0 0 14.5 4H8.207L6.854 2.146A1.5 1.5 0 0 0 5.646 1.5H1.5z" />
                            </svg>
                            <span>{dir.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* 4. status */}
                    <div className="space-y-2.5 pt-1">
                      <div className="text-sm sm:text-base">
                        <span className="text-caramel font-semibold">rajdeep@buildwithrajdeep:~$</span>{" "}
                        <span className="text-brownie font-bold">status</span>
                      </div>
                      <div className="grid grid-cols-[auto_120px_1fr] sm:grid-cols-[auto_135px_1fr] items-center gap-x-3.5 gap-y-2 text-xs sm:text-sm pl-0.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-coffee inline-block" />
                        <span className="text-coffee font-medium">Building</span>
                        <span className="text-brownie font-medium">AI-powered products</span>

                        <span className="w-2.5 h-2.5 rounded-full bg-coffee inline-block" />
                        <span className="text-coffee font-medium">Learning</span>
                        <span className="text-brownie font-medium">New technologies</span>

                        <span className="w-2.5 h-2.5 rounded-full bg-coffee inline-block" />
                        <span className="text-coffee font-medium">Collaborating</span>
                        <span className="text-brownie font-medium">With amazing people</span>

                        <span className="w-2.5 h-2.5 rounded-full bg-coffee inline-block" />
                        <span className="text-coffee font-medium">Open to</span>
                        <span className="text-brownie font-medium">Opportunities</span>
                      </div>
                    </div>

                    {/* Active Prompt with solid block cursor */}
                    <div className="flex items-center gap-2 pt-2 text-sm sm:text-base">
                      <span className="text-caramel font-semibold">rajdeep@buildwithrajdeep:~$</span>
                      <span className="w-2.5 h-5 bg-coffee inline-block animate-pulse align-middle" />
                    </div>
                  </div>

                  {/* Right Column (Information Panel - 4 Cols with vertical divider) */}
                  <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-[#D5C2B1] pt-6 lg:pt-0 lg:pl-8 xl:pl-10 space-y-6 flex flex-col justify-between">
                    <div className="space-y-6">
                      {/* // LOCATION */}
                      <div className="space-y-2">
                        <div className="font-mono text-xs font-semibold uppercase tracking-wider text-coffee">
                          // LOCATION
                        </div>
                        <div className="flex items-center gap-2.5 font-mono text-sm sm:text-base text-brownie font-medium">
                          <svg className="w-4 h-4 text-coffee fill-current flex-shrink-0" viewBox="0 0 24 24">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                          </svg>
                          <span>India</span>
                          <span className="text-base">🇮🇳</span>
                        </div>
                      </div>

                      {/* // FOCUS */}
                      <div className="space-y-2.5 pt-1">
                        <div className="font-mono text-xs font-semibold uppercase tracking-wider text-coffee">
                          // FOCUS
                        </div>
                        <div className="space-y-2 font-mono text-xs sm:text-sm text-brownie font-medium">
                          <div className="flex items-center gap-3">
                            <span className="text-coffee font-bold text-sm tracking-tighter w-4 text-center">&lt;/&gt;</span>
                            <span>Software Engineering</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <svg className="w-4 h-4 text-coffee flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                            </svg>
                            <span>AI Systems</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <svg className="w-4 h-4 text-coffee flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span>Communities &amp; Impact</span>
                          </div>
                        </div>
                      </div>

                      {/* Divider Line */}
                      <div className="w-full h-px bg-[#D5C2B1] my-4" />

                      {/* Quote Section */}
                      <div className="space-y-2 pt-1 pb-4">
                        <span className="font-serif text-3xl sm:text-4xl text-coffee/80 leading-none block">&ldquo;</span>
                        <p className="font-serif italic text-sm sm:text-base text-brownie leading-relaxed pl-0.5">
                          Building a better tomorrow,<br />
                          one line of code at a time.
                        </p>
                        <p className="font-mono text-xs text-coffee pt-2">
                          — Rajdeep Bakliwal
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Integrated Mountain Landscape & Sun Silhouette in Bottom Right */}
                <svg
                  viewBox="0 0 600 220"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute bottom-0 right-0 w-full max-w-[620px] sm:max-w-[680px] pointer-events-none select-none z-0"
                  preserveAspectRatio="xMaxYMax meet"
                  aria-hidden="true"
                >
                  {/* Sun Disc */}
                  <circle cx="450" cy="115" r="62" fill="#EAD9C8" fillOpacity="0.85" />

                  {/* Background Mountain Ridge (Lightest Warm Sand) */}
                  <path
                    d="M60 220C140 190 220 165 300 168C370 170 420 148 480 152C530 155 570 140 600 144V220H60Z"
                    fill="#DFCDBC"
                    fillOpacity="0.85"
                  />

                  {/* Midground Ridge (Warm Tan/Caramel) */}
                  <path
                    d="M160 220C240 195 320 178 390 180C450 182 495 155 545 158C575 160 590 148 600 150V220H160Z"
                    fill="#C9AE96"
                    fillOpacity="0.9"
                  />

                  {/* Foreground Ridge (Warm Rich Coffee) */}
                  <path
                    d="M260 220C330 200 400 185 455 186C505 187 540 160 580 145C590 141 596 138 600 135V220H260Z"
                    fill="#A67E60"
                    fillOpacity="0.95"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Core Capabilities Section (Matching the shared image directly on scroll) */}
        <section className="pt-16 pb-8 sm:pt-20 sm:pb-10 lg:pt-24 lg:pb-12 px-6 sm:px-12 lg:px-16 xl:px-20 max-w-[1400px] mx-auto">
          <div className="space-y-10 lg:space-y-12">
            {/* Section Heading */}
            <div className="text-left space-y-3 max-w-2xl">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-caramel">
                AREAS OF FOCUS
              </span>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-brownie tracking-tight">
                Core Capabilities
              </h2>
              <p className="text-coffee text-base sm:text-lg leading-relaxed">
                Key capability areas spanning artificial intelligence, modern software engineering, product development, and technical community building.
              </p>
            </div>

            {/* 6 Capabilities Cards Grid (3 Columns, 2 Rows) */}
            <div
              ref={capabilitiesRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {capabilities.map((item, index) => (
                <InteractiveCapabilityCard
                  key={item.title}
                  item={item}
                  index={index}
                  isVisible={capabilitiesVisible}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* 4. Floating Scroll to Top Button (Matching Image in Brownie with white up arrow) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          type="button"
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-brownie text-cream flex items-center justify-center shadow-lg hover:bg-caramel transition-all duration-200 focus:outline-none"
          aria-label="Scroll to top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

      {/* 5. Minimal Footer with Darker Separation Boundary */}
      <footer className="border-t border-brownie/25 py-8 px-6 sm:px-12 lg:px-16 xl:px-20 bg-cream text-xs text-coffee">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-serif font-bold text-brownie text-base">
            Rajdeep Bakliwal
          </div>
          <div className="text-coffee/70 font-mono">
            &copy; {new Date().getFullYear()} BuildWithRajdeep. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
