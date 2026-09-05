"use client";

import { useState, useEffect } from "react";

interface ProjectItem {
  id: string;
  category: string;
  title: string;
  tech: string[];
  description: string;
  liveUrl: string;
  githubUrl: string;
  image?: string;
  mockupType: "canvas" | "erp" | "ai" | "algorithms";
}

export default function ProjectsPage() {
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

  const projects: ProjectItem[] = [
    {
      id: "collaborative-canvas",
      category: "Full-Stack Web Application",
      title: "DrawTogether — Real-Time Collaborative Canvas",
      tech: ["React.js", "WebSockets", "HTML5 Canvas", "Tailwind CSS"],
      description:
        "A lightweight collaborative canvas where multiple users can draw simultaneously in real-time. Zero accounts, zero friction — just create and collaborate.",
      liveUrl: "https://collaborative-canvas-36g9.onrender.com/",
      githubUrl: "https://github.com/rajdeep1211/collaborative-canvas",
      image: "/projects/drawtogether.png",
      mockupType: "canvas",
    },
    {
      id: "uniform-shop-erp",
      category: "Enterprise ERP & POS",
      title: "Uniform Shop ERP & POS System",
      tech: ["Full-Stack", "PostgreSQL", "Barcode Printing", "Inventory"],
      description:
        "Comprehensive retail management system with barcode printing, live inventory status, supplier management, purchase tracking, and billing automation.",
      liveUrl: "https://github.com/rajdeep1211/uniform-shop-erp", // Replace with live demo URL when provided
      githubUrl: "https://github.com/rajdeep1211/uniform-shop-erp",
      mockupType: "erp",
    },
    {
      id: "ai-system-platform",
      category: "AI Systems & LLMs",
      title: "AI-Powered System Platform",
      tech: ["Python", "FastAPI", "LLMs", "Vector Search", "Docker"],
      description:
        "Autonomous AI system featuring intelligent retrieval pipelines, multi-agent orchestration, streaming APIs, and modern responsive user interfaces.",
      liveUrl: "https://github.com/rajdeep1211", // Replace with live demo URL when provided
      githubUrl: "https://github.com/rajdeep1211",
      mockupType: "ai",
    },
    {
      id: "leetcode-journey",
      category: "Algorithms & Problem Solving",
      title: "Algorithmic Problem-Solving Engine",
      tech: ["Python", "Data Structures", "Algorithms", "System Design"],
      description:
        "Curated repository of algorithmic patterns, dynamic programming paradigms, graph traversal solutions, and competitive programming architectures.",
      liveUrl: "https://github.com/rajdeep1211/leetcode-journey", // Replace with live demo URL when provided
      githubUrl: "https://github.com/rajdeep1211/leetcode-journey",
      mockupType: "algorithms",
    },
  ];

  const handleCardClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // Render high-fidelity website/app UI preview on the card
  const renderMockupPreview = (item: ProjectItem) => {
    if (item.image) {
      return (
        <div className="w-full h-full relative overflow-hidden bg-white">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      );
    }

    switch (item.mockupType) {
      case "canvas":
        return (
          <div className="w-full h-full bg-[#16120e] p-4 flex flex-col justify-between select-none">
            {/* Window bar */}
            <div className="flex items-center justify-between border-b border-caramel/20 pb-2.5">
              <div className="flex items-center space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              </div>
              <div className="text-[11px] font-mono text-cream/60 px-3 py-0.5 rounded bg-black/40 border border-caramel/20">
                canvas.buildwithrajdeep.com
              </div>
              <div className="text-[10px] text-caramel font-mono font-medium">LIVE</div>
            </div>
            {/* Canvas workspace preview */}
            <div className="my-auto py-2 relative flex items-center justify-center">
              <div className="w-full h-32 rounded-xl bg-[#231a14] border border-caramel/15 relative overflow-hidden flex items-center justify-center">
                {/* Canvas grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#C0855208_1px,transparent_1px),linear-gradient(to_bottom,#C0855208_1px,transparent_1px)] bg-[size:16px_16px]" />
                
                {/* Simulated multi-user drawing strokes */}
                <svg className="w-4/5 h-24" viewBox="0 0 200 80" fill="none">
                  <path d="M20 50 Q 50 15, 90 40 T 170 30" stroke="#C08552" strokeWidth="3" strokeLinecap="round" />
                  <path d="M40 65 Q 80 45, 120 60 T 180 50" stroke="#895737" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 3" />
                  <rect x="75" y="25" width="40" height="28" rx="4" fill="#C08552" fillOpacity="0.2" stroke="#C08552" strokeWidth="1.5" />
                </svg>

                {/* Simulated active user cursor tags */}
                <div className="absolute top-4 left-10 flex items-center gap-1 text-[9px] font-mono bg-caramel text-cream px-1.5 py-0.5 rounded shadow">
                  <span>User 1</span>
                </div>
                <div className="absolute bottom-4 right-14 flex items-center gap-1 text-[9px] font-mono bg-[#895737] text-cream px-1.5 py-0.5 rounded shadow">
                  <span>User 2</span>
                </div>
              </div>
            </div>
            {/* Tool palette bar */}
            <div className="flex items-center justify-between text-[11px] font-mono text-cream/70 pt-1 border-t border-caramel/10">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-caramel/30 text-cream text-[10px]">Brush</span>
                <span className="px-2 py-0.5 rounded bg-black/30 text-[10px]">Shapes</span>
                <span className="px-2 py-0.5 rounded bg-black/30 text-[10px]">Layers</span>
              </div>
              <span className="text-[10px] text-cream/50">Multi-User Sync (60 FPS)</span>
            </div>
          </div>
        );

      case "erp":
        return (
          <div className="w-full h-full bg-[#141210] p-4 flex flex-col justify-between select-none">
            {/* Window bar */}
            <div className="flex items-center justify-between border-b border-caramel/20 pb-2.5">
              <div className="flex items-center space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              </div>
              <div className="text-[11px] font-mono text-cream/60 px-3 py-0.5 rounded bg-black/40 border border-caramel/20">
                erp.buildwithrajdeep.com
              </div>
              <div className="text-[10px] text-caramel font-mono font-medium">POS</div>
            </div>
            {/* Dashboard and Billing Mockup */}
            <div className="my-auto py-2 grid grid-cols-3 gap-2">
              <div className="col-span-2 rounded-lg bg-[#221b16] border border-caramel/20 p-2.5 space-y-2">
                <div className="flex justify-between items-center text-[10px] font-mono text-cream/80">
                  <span>BILLING INVOICE #1042</span>
                  <span className="text-caramel font-semibold">PAID</span>
                </div>
                {/* Fake items */}
                <div className="space-y-1 text-[9px] font-mono text-cream/60 border-t border-caramel/10 pt-1">
                  <div className="flex justify-between">
                    <span>Uniform Blazer (Navy) x 1</span>
                    <span>$65.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Oxford Shirt (White) x 2</span>
                    <span>$40.00</span>
                  </div>
                </div>
                {/* Barcode representation */}
                <div className="h-4 bg-white/10 rounded flex items-center justify-center tracking-widest text-[8px] font-mono text-cream/60">
                  ||||| | |||| ||| |||||
                </div>
              </div>

              <div className="col-span-1 rounded-lg bg-[#221b16] border border-caramel/20 p-2.5 space-y-1 flex flex-col justify-between">
                <span className="text-[9px] font-mono text-cream/60">INVENTORY</span>
                <span className="text-lg font-bold text-caramel leading-tight">1,480</span>
                <span className="text-[8px] font-mono text-green-400">● 98.4% In Stock</span>
              </div>
            </div>
            {/* Status bar */}
            <div className="flex items-center justify-between text-[10px] font-mono text-cream/50 pt-1 border-t border-caramel/10">
              <span>PostgreSQL &bull; Express &bull; Node</span>
              <span>Thermal Receipt Ready</span>
            </div>
          </div>
        );

      case "ai":
        return (
          <div className="w-full h-full bg-[#120e0c] p-4 flex flex-col justify-between select-none">
            {/* Window bar */}
            <div className="flex items-center justify-between border-b border-caramel/20 pb-2.5">
              <div className="flex items-center space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              </div>
              <div className="text-[11px] font-mono text-cream/60 px-3 py-0.5 rounded bg-black/40 border border-caramel/20">
                agents.buildwithrajdeep.com
              </div>
              <div className="text-[10px] text-caramel font-mono font-medium">NEURAL</div>
            </div>
            {/* Neural pipeline mockup */}
            <div className="my-auto py-2 flex items-center justify-center">
              <div className="w-full rounded-xl bg-[#1e1713] border border-caramel/20 p-3 flex items-center justify-between gap-2">
                <div className="text-center">
                  <div className="w-7 h-7 rounded-lg bg-caramel/20 border border-caramel/40 flex items-center justify-center text-caramel text-[10px] font-bold mx-auto mb-1">
                    LLM
                  </div>
                  <span className="text-[8px] font-mono text-cream/60">Prompt</span>
                </div>
                <span className="text-caramel text-xs">&rarr;</span>
                <div className="text-center">
                  <div className="w-7 h-7 rounded-lg bg-[#895737]/30 border border-[#895737] flex items-center justify-center text-cream text-[10px] font-bold mx-auto mb-1">
                    RAG
                  </div>
                  <span className="text-[8px] font-mono text-cream/60">Vector DB</span>
                </div>
                <span className="text-caramel text-xs">&rarr;</span>
                <div className="text-center">
                  <div className="w-7 h-7 rounded-lg bg-caramel/20 border border-caramel/40 flex items-center justify-center text-caramel text-[10px] font-bold mx-auto mb-1">
                    Agent
                  </div>
                  <span className="text-[8px] font-mono text-cream/60">Tools</span>
                </div>
                <span className="text-caramel text-xs">&rarr;</span>
                <div className="text-center">
                  <div className="w-7 h-7 rounded-lg bg-green-500/20 border border-green-500/40 flex items-center justify-center text-green-400 text-[10px] font-bold mx-auto mb-1">
                    Out
                  </div>
                  <span className="text-[8px] font-mono text-cream/60">Stream</span>
                </div>
              </div>
            </div>
            {/* Status bar */}
            <div className="flex items-center justify-between text-[10px] font-mono text-cream/50 pt-1 border-t border-caramel/10">
              <span>Streaming Context &bull; FastAPI</span>
              <span className="text-caramel">Latency: 42ms</span>
            </div>
          </div>
        );

      case "algorithms":
        return (
          <div className="w-full h-full bg-[#13100e] p-4 flex flex-col justify-between select-none font-mono">
            {/* Window bar */}
            <div className="flex items-center justify-between border-b border-caramel/20 pb-2.5">
              <div className="flex items-center space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              </div>
              <div className="text-[11px] text-cream/60 px-3 py-0.5 rounded bg-black/40 border border-caramel/20">
                leetcode.buildwithrajdeep.com
              </div>
              <div className="text-[10px] text-caramel font-medium">TESTS</div>
            </div>
            {/* Terminal code view */}
            <div className="my-auto py-2 text-[10px] space-y-1 text-cream/80 bg-[#1d1612] p-2.5 rounded-lg border border-caramel/15">
              <div className="text-cream/50">&gt; pytest test_dynamic_programming.py</div>
              <div className="text-green-400">&bull; test_graph_shortest_path PASSED [0.002s]</div>
              <div className="text-green-400">&bull; test_two_pointers_optimized PASSED [0.001s]</div>
              <div className="text-caramel">&bull; Memory complexity: O(1) space, O(N) time</div>
            </div>
            {/* Status bar */}
            <div className="flex items-center justify-between text-[10px] text-cream/50 pt-1 border-t border-caramel/10">
              <span>Python 3.12 &bull; Algorithms &bull; Data Structures</span>
              <span className="text-green-400">100% Passed</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream text-brownie">
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
              className="text-brownie/85 hover:text-caramel transition-colors"
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
              className="relative text-caramel font-semibold after:absolute after:-bottom-1.5 after:left-0 after:right-0 after:h-0.5 after:bg-caramel after:rounded-full"
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
              className="block py-2 text-base font-medium text-brownie/90 hover:text-caramel"
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
              className="block py-2 text-base font-semibold text-caramel"
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
        <section className="py-16 sm:py-24 px-6 sm:px-12 lg:px-16 xl:px-20 max-w-[1400px] mx-auto">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 lg:mb-20">
            <div className="space-y-3 max-w-2xl text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-caramel/15 text-coffee text-xs font-semibold tracking-wide uppercase">
                <span className="w-2 h-2 rounded-full bg-caramel" />
                Selected Portfolio Work
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-brownie tracking-tight leading-tight">
                Projects
              </h1>
              <p className="text-coffee text-base sm:text-lg leading-relaxed">
                Featured software engineering and AI systems built for performance, reliability, and real-world utility. Tap any card to launch its live demo.
              </p>
            </div>

            {/* Quick GitHub Profile CTA */}
            <a
              href="https://github.com/rajdeep1211"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brownie text-cream font-medium text-sm hover:bg-caramel transition-colors shadow-sm self-start sm:self-auto"
            >
              <span>Explore All on GitHub</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Project Cards Grid (Tap on card redirects to live demo; GitHub logo redirects to repo) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {projects.map((item) => (
              <div
                key={item.id}
                onClick={() => handleCardClick(item.liveUrl)}
                title={`Launch live demo for ${item.title}`}
                className="group rounded-3xl bg-[#1a1412] border border-caramel/25 p-5 sm:p-6 shadow-xl hover:border-caramel/70 hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 cursor-pointer flex flex-col justify-between"
              >
                {/* 1. Upper Image / Project UI Preview */}
                <div className="relative aspect-[16/10] rounded-2xl border border-caramel/20 overflow-hidden mb-6 shadow-inner bg-[#14100e]">
                  {renderMockupPreview(item)}
                </div>

                {/* 2. Lower Content Area */}
                <div className="space-y-4 px-2">
                  {/* Category Label */}
                  <span className="text-xs sm:text-sm font-semibold text-caramel block tracking-wide">
                    {item.category}
                  </span>

                  {/* Title & GitHub Icon Row */}
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug group-hover:text-caramel-light transition-colors">
                      {item.title}
                    </h3>

                    {/* Dedicated GitHub Icon Button */}
                    <a
                      href={item.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      title={`View ${item.title} source code on GitHub`}
                      className="p-2.5 rounded-xl bg-white/5 hover:bg-caramel text-white hover:text-cream transition-all duration-200 focus:outline-none flex-shrink-0"
                      aria-label={`View ${item.title} on GitHub`}
                    >
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                    </a>
                  </div>

                  {/* Short Description */}
                  <p className="text-sm sm:text-base text-cream/75 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-white/5 text-caramel border border-caramel/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* More Projects Callout */}
          <div className="mt-16 lg:mt-20 p-8 sm:p-10 rounded-3xl bg-cream-dark/50 border border-caramel/25 text-center space-y-4">
            <h3 className="text-2xl font-serif font-bold text-brownie">
              Looking for more projects &amp; experiments?
            </h3>
            <p className="text-coffee text-base max-w-xl mx-auto leading-relaxed">
              The portfolio curates featured engineering builds. The complete collection of utilities, tools, algorithms, and repositories is actively preserved on GitHub.
            </p>
            <div className="pt-2">
              <a
                href="https://github.com/rajdeep1211"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-brownie text-cream font-medium text-sm hover:bg-caramel transition-colors shadow-sm"
              >
                <span>Browse rajdeep1211 on GitHub</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Scroll to Top Button */}
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

      {/* Minimal Footer */}
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
