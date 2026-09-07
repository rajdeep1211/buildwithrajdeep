"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import InteractiveCapabilityCard, {
  CapabilityItem,
} from "@/components/InteractiveCapabilityCard";

export default function ContactPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [activeDockSocial, setActiveDockSocial] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  }>({});

  // Capabilities Visibility Observer
  const [capabilitiesVisible, setCapabilitiesVisible] = useState(false);
  const capabilitiesRef = useRef<HTMLDivElement>(null);

  // Terminal Section Ref for smooth scrolling
  const terminalRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  // 3D Terminal Tilt & Specular Lighting State (Homepage Theme)
  const terminalCardRef = useRef<HTMLDivElement>(null);
  const [terminalRotate, setTerminalRotate] = useState({ x: 0, y: 0 });
  const [terminalMousePos, setTerminalMousePos] = useState({ x: 0, y: 0 });
  const [isTerminalHovered, setIsTerminalHovered] = useState(false);

  const handleTerminalMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!terminalCardRef.current) return;
    const rect = terminalCardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Constrained to +/- 1.8 degrees for subtle, clean physical 3D responsiveness
    const rotateX = -((y - centerY) / centerY) * 1.8;
    const rotateY = ((x - centerX) / centerX) * 1.8;
    setTerminalRotate({ x: rotateX, y: rotateY });
    setTerminalMousePos({ x, y });
  };

  const handleTerminalMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsTerminalHovered(true);
    if (!terminalCardRef.current) return;
    const rect = terminalCardRef.current.getBoundingClientRect();
    setTerminalMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleTerminalMouseLeave = () => {
    setIsTerminalHovered(false);
    setTerminalRotate({ x: 0, y: 0 });
  };

  // Live transmission payload size in bytes for live developer feedback
  const payloadBytes =
    (formData.name?.length || 0) +
    (formData.email?.length || 0) +
    (formData.subject?.length || 0) +
    (formData.message?.length || 0);

  // Configurable Project Constants (No fabricated URLs)
  const emailAddress = "rajdeepbakliwal@gmail.com";
  const locationText = "Jaipur, India";
  const mapUrl = "https://maps.google.com/?q=Jaipur,+Rajasthan,+India";
  const resumeUrl = "/resume.pdf"; // Configurable resume path

  const onlineLinks = [
    {
      name: "GitHub",
      href: "https://github.com/rajdeep1211",
      handle: "rajdeep1211",
      icon: (
        <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      handle: "linkedin.com",
      icon: (
        <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "Email",
      href: `mailto:${emailAddress}`,
      handle: emailAddress,
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  // Configurable Dock Social Links for Interactive Horizontal Row
  const dockSocialLinks = [
    {
      name: "LeetCode",
      href: "https://leetcode.com/u/rajdeep_jain/",
      icon: (
        <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 4.818 3.86 5.833 5.833 0 0 0 2.809-.273 5.86 5.86 0 0 0 1.423-.772l3.414-2.651a1.272 1.272 0 0 0 .474-.997 1.295 1.295 0 0 0-.426-.957 1.233 1.233 0 0 0-1.745.03l-3.398 2.637a3.374 3.374 0 0 1-3.674.35 3.369 3.369 0 0 1-1.7-2.454 3.276 3.276 0 0 1 .42-2.122 3.398 3.398 0 0 1 1.036-1.127l3.655-3.91 4.54-4.869a1.29 1.29 0 0 0 .034-1.777l-.034-.035a1.282 1.282 0 0 0-.916-.432zm3.783 7.828a1.286 1.286 0 0 0-.916.438l-4.54 4.869-1.928 2.064a1.288 1.288 0 0 0 1.88 1.758l1.928-2.065 4.54-4.869a1.29 1.29 0 0 0-.034-1.777 1.28 1.28 0 0 0-.93-.418zm2.298 5.463h-7.85a1.286 1.286 0 0 0 0 2.572h7.85a1.286 1.286 0 0 0 0-2.572z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/_its_rajdeep_/",
      icon: (
        <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@rajdeepbakliwal1733",
      icon: (
        <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: "Email",
      href: `mailto:${emailAddress}`,
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  // Currently Open To Items
  const openToItems = [
    "Software Engineering Opportunities",
    "AI / ML Projects",
    "Product Building",
    "Technical Collaborations",
    "Community & Event Initiatives",
  ];

  // 6 Interactive Capability Cards
  const capabilities: CapabilityItem[] = [
    {
      title: "AI Systems",
      description:
        "AI-powered applications, intelligent workflows, and agent systems.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Software Engineering",
      description:
        "Reliable, maintainable, and scalable software systems.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: "Full-Stack Development",
      description:
        "Building products across frontend, backend, APIs, and infrastructure.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM4 9h16M9 4v16" />
        </svg>
      ),
    },
    {
      title: "AI / ML Engineering",
      description:
        "Machine learning, LLMs, AI tooling, and intelligent architectures.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Product Building",
      description:
        "Turning ideas into usable, scalable, and practical software products.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      title: "Community & Collaboration",
      description:
        "Technical communities, events, volunteering, and collaborative initiatives.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  // Scroll listener for scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection observer for capabilities cards entrance
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToTerminal = () => {
    if (terminalRef.current) {
      terminalRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        nameInputRef.current?.focus();
      }, 500);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const validateForm = () => {
    const newErrors: typeof errors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter a subject";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please enter a message";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitted(true);
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setErrors({});
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream text-brownie selection:bg-caramel/30 selection:text-brownie">
      <main className="flex-1 space-y-16 sm:space-y-24 lg:space-y-32">
        {/* =========================================================================
            01 — HERO / INTRO — LOCKED
            Two-column hero section with dedicated illustration placeholder space.
           ========================================================================= */}
        <section className="pt-8 sm:pt-14 lg:pt-16 px-6 sm:px-12 lg:px-16 xl:px-20 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
            {/* Left Column: Headline, Supporting Copy, Primary CTA */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-caramel/15 border border-caramel/30 text-coffee text-xs font-mono font-semibold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-caramel animate-pulse" />
                  CONTACT
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-brownie leading-[1.15]">
                  Let&apos;s Build Something Meaningful.
                </h1>
                <p className="text-coffee text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl font-normal">
                  Have an idea, opportunity, or interesting problem? I&apos;d love to hear about it.
                </p>
              </div>

              <div>
                <button
                  type="button"
                  onClick={scrollToTerminal}
                  className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-brownie hover:bg-caramel text-cream text-sm sm:text-base font-semibold transition-all duration-200 shadow-md shadow-brownie/15 hover:shadow-lg active:scale-[0.98] cursor-pointer"
                >
                  <span>Start a Conversation</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-200 font-mono">
                    &rarr;
                  </span>
                </button>
              </div>
            </div>

            {/* Right Column: Dedicated Illustration Placeholder Space (Locked structure) */}
            <div className="lg:col-span-5 w-full">
              <div
                aria-label="Future Illustration Placeholder"
                className="w-full min-h-[300px] sm:min-h-[380px] lg:min-h-[420px] rounded-3xl border-2 border-dashed border-caramel/35 bg-cream-dark/20 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden group select-none transition-all duration-300 hover:border-caramel/50"
              >
                {/* Subtle blueprint coordinate guides */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[radial-gradient(#5E3023_1px,transparent_1px)] [background-size:16px_16px]" />

                {/* Corner markers for engineering aesthetic */}
                <span className="absolute top-4 left-4 font-mono text-[10px] text-caramel/40">
                  +
                </span>
                <span className="absolute top-4 right-4 font-mono text-[10px] text-caramel/40">
                  +
                </span>
                <span className="absolute bottom-4 left-4 font-mono text-[10px] text-caramel/40">
                  +
                </span>
                <span className="absolute bottom-4 right-4 font-mono text-[10px] text-caramel/40">
                  +
                </span>

                {/* Abstract visualization icon silhouette */}
                <div className="w-16 h-16 rounded-2xl bg-caramel/10 border border-caramel/25 flex items-center justify-center text-caramel/70 mb-4 group-hover:scale-105 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253"
                    />
                  </svg>
                </div>

                {/* Placeholder Label */}
                <div className="space-y-1.5 relative z-10">
                  <div className="font-mono text-xs font-semibold tracking-wider text-brownie uppercase">
                    [ ILLUSTRATION SPACE ]
                  </div>
                  <p className="text-xs font-mono text-coffee/70 max-w-xs">
                    Abstract AI &middot; Systems &middot; Connection Visualization
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            02 — CURRENTLY OPEN TO
            Compact availability section with subtle active indicator.
           ========================================================================= */}
        <section className="px-6 sm:px-12 lg:px-16 xl:px-20 max-w-[1400px] mx-auto">
          <div className="p-6 sm:p-8 rounded-3xl bg-cream-dark/25 border border-caramel/20 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-caramel">
                CURRENTLY OPEN TO
              </span>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-600/20 text-emerald-800 text-xs font-mono font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                <span>Currently Open</span>
              </div>
            </div>

            {/* Light, compact horizontal tags */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3 pt-1">
              {openToItems.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-cream border border-caramel/25 text-brownie text-xs sm:text-sm font-medium shadow-2xs hover:border-caramel/60 hover:bg-cream-dark/30 transition-all"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            03 — GET IN TOUCH + FIND ME ONLINE + RESUME DOWNLOAD
            Clean two-column section with location and professional links.
           ========================================================================= */}
        <section className="px-6 sm:px-12 lg:px-16 xl:px-20 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column: Get In Touch */}
            <div className="p-7 sm:p-9 rounded-3xl bg-cream-dark/25 border border-caramel/20 space-y-6 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-caramel block mb-2">
                    DIRECT REACH
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brownie tracking-tight">
                    Get In Touch
                  </h2>
                </div>

                {/* Email Section */}
                <div className="space-y-2.5">
                  <div className="text-xs font-mono font-semibold uppercase tracking-wider text-coffee">
                    Email
                  </div>
                  <div className="text-base sm:text-lg font-mono font-semibold text-brownie truncate">
                    {emailAddress}
                  </div>
                  <div className="pt-1 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="px-4 py-2 rounded-xl bg-brownie hover:bg-caramel text-cream text-xs font-mono font-medium transition-colors flex items-center gap-2 shadow-sm cursor-pointer"
                      aria-label="Copy email address"
                    >
                      {copiedEmail ? (
                        <>
                          <svg className="w-3.5 h-3.5 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <svg className="w-3.5 h-3.5 text-cream/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                          <span>Copy Email</span>
                        </>
                      )}
                    </button>
                    <a
                      href={`mailto:${emailAddress}`}
                      className="px-4 py-2 rounded-xl bg-caramel/15 border border-caramel/30 text-xs font-mono font-semibold text-coffee hover:bg-caramel hover:text-cream transition-colors inline-flex items-center gap-1.5 shadow-xs"
                    >
                      <span>Send Email</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>

                {/* Location Section */}
                <div className="space-y-2 pt-2 border-t border-caramel/15">
                  <div className="text-xs font-mono font-semibold uppercase tracking-wider text-coffee">
                    Location
                  </div>
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="text-base sm:text-lg font-medium text-brownie flex items-center gap-2">
                      <span className="text-caramel">📍</span>
                      <span>{locationText}</span>
                    </div>
                    <a
                      href={mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono font-semibold text-coffee hover:text-caramel transition-colors inline-flex items-center gap-1 group"
                    >
                      <span>View on Map</span>
                      <span className="group-hover:translate-x-0.5 transition-transform">&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Natural placement for Resume Download */}
              <div className="pt-6 border-t border-caramel/20 flex items-center justify-between flex-wrap gap-4">
                <div>
                  <div className="text-xs font-mono font-semibold uppercase tracking-wider text-coffee">
                    Curriculum Vitae
                  </div>
                  <p className="text-xs text-coffee/80 mt-0.5">
                    Verified background &amp; engineering experience.
                  </p>
                </div>
                <a
                  href={resumeUrl}
                  download="Rajdeep_Bakliwal_Resume.pdf"
                  className="px-5 py-2.5 rounded-xl bg-brownie hover:bg-caramel text-cream text-xs font-mono font-semibold transition-all duration-200 shadow-sm flex items-center gap-2"
                >
                  <span>Download Resume</span>
                  <span aria-hidden="true">&darr;</span>
                </a>
              </div>
            </div>

            {/* Right Column: Find Me Online */}
            <div className="p-7 sm:p-9 rounded-3xl bg-cream-dark/25 border border-caramel/20 space-y-6 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-caramel block mb-2">
                    NETWORK
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brownie tracking-tight">
                    Find Me Online
                  </h2>
                </div>

                <div className="space-y-3">
                  {onlineLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-3.5 rounded-2xl bg-cream border border-caramel/25 hover:border-caramel hover:bg-cream-dark/30 transition-all shadow-2xs"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="w-9 h-9 rounded-xl bg-cream-dark/40 border border-caramel/25 flex items-center justify-center text-brownie group-hover:text-caramel group-hover:border-caramel transition-colors">
                          {link.icon}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-brownie group-hover:text-caramel transition-colors">
                            {link.name}
                          </div>
                          <div className="text-xs font-mono text-coffee/75">
                            {link.handle}
                          </div>
                        </div>
                      </div>
                      <span className="text-coffee/60 group-hover:text-caramel group-hover:translate-x-1 transition-all text-sm font-mono">
                        &rarr;
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Interactive Horizontal Social Dock with Dark Neumorphic Active State */}
              <div className="pt-6 border-t border-caramel/15">
                <div
                  className="flex items-center justify-center gap-1.5 sm:gap-2.5 h-12 relative"
                  role="toolbar"
                  aria-label="Social and professional profiles"
                >
                  {dockSocialLinks.map((platform) => {
                    const isActive = activeDockSocial === platform.name;

                    return (
                      <a
                        key={platform.name}
                        href={platform.href}
                        target={platform.href.startsWith("mailto:") ? undefined : "_blank"}
                        rel={platform.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                        aria-label={platform.name}
                        onMouseEnter={() => setActiveDockSocial(platform.name)}
                        onMouseLeave={() => setActiveDockSocial(null)}
                        onFocus={() => setActiveDockSocial(platform.name)}
                        onBlur={() => setActiveDockSocial(null)}
                        onTouchStart={() => setActiveDockSocial(platform.name)}
                        className={`group relative flex items-center justify-center h-10 rounded-xl transition-all duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] select-none focus:outline-none ${
                          isActive
                            ? "bg-brownie-dark text-cream border border-caramel/40 shadow-[4px_6px_16px_rgba(71,35,25,0.32),-2px_-2px_6px_rgba(255,255,255,0.7),inset_0_1px_1px_rgba(255,255,255,0.2)] -translate-y-1 scale-[1.02] px-3 z-10"
                            : "w-9 sm:w-10 bg-cream border border-caramel/25 text-brownie hover:border-caramel hover:text-caramel shadow-2xs"
                        }`}
                      >
                        <span className="flex items-center justify-center shrink-0">
                          {platform.icon}
                        </span>
                        <span
                          className={`overflow-hidden transition-all duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] flex items-center ${
                            isActive
                              ? "max-w-[120px] opacity-100 ml-2"
                              : "max-w-0 opacity-0 pointer-events-none"
                          }`}
                        >
                          <span className="text-xs font-mono font-semibold tracking-wide text-cream whitespace-nowrap">
                            {platform.name}
                          </span>
                          <span className="text-teal-400 text-xs font-mono ml-1.5" aria-hidden="true">
                            &rarr;
                          </span>
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            04 — TERMINAL CONTACT FORM — SIGNATURE INTERACTION
            Premium terminal interface with blinking cursor, command prompt,
            subtle teal/cyan active states, and mobile accessibility.
           ========================================================================= */}
        <section
          ref={terminalRef}
          id="contact-terminal"
          className="px-4 sm:px-8 lg:px-12 xl:px-16 max-w-[960px] mx-auto scroll-mt-28"
        >
          {/* Terminal Console Container with 3D Depth & Perspective Tilt matching Homepage Theme */}
          <div
            ref={terminalCardRef}
            onMouseMove={handleTerminalMouseMove}
            onMouseEnter={handleTerminalMouseEnter}
            onMouseLeave={handleTerminalMouseLeave}
            style={{
              transform: isTerminalHovered
                ? `perspective(1200px) rotateX(${terminalRotate.x.toFixed(2)}deg) rotateY(${terminalRotate.y.toFixed(2)}deg) translateY(-4px)`
                : "perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0px)",
              transformStyle: "preserve-3d",
              transition: isTerminalHovered
                ? "transform 120ms ease-out, box-shadow 300ms ease"
                : "transform 500ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 300ms ease",
            }}
            className="group relative rounded-2xl sm:rounded-3xl border-2 border-brownie bg-[#F4EDE4] text-brownie shadow-[8px_10px_0px_0px_#472319,0_25px_40px_rgba(94,48,35,0.22)] hover:shadow-[10px_14px_0px_0px_#472319,0_32px_50px_rgba(94,48,35,0.28)] overflow-hidden transition-all duration-300"
          >
            {/* Terminal Title Bar Chrome (Dark Brownie with chamfered top highlight) */}
            <div className="bg-brownie px-5 sm:px-7 py-3.5 sm:py-4 flex items-center justify-between select-none shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] relative z-20">
              {/* Window Controls & Title */}
              <div className="flex items-center">
                <div className="flex items-center space-x-2.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#E06C55] inline-block shadow-2xs" />
                  <span className="w-3.5 h-3.5 rounded-full bg-[#E5A93C] inline-block shadow-2xs" />
                  <span className="w-3.5 h-3.5 rounded-full bg-[#6BB377] inline-block shadow-2xs" />
                </div>
                <span className="font-mono text-xs sm:text-sm text-cream/90 font-medium pl-4 sm:pl-5">
                  buildwithrajdeep@portfolio: ~ contact
                </span>
              </div>

              {/* Status Indicator (Live beacon) */}
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-cream/10 border border-cream/15">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                  </span>
                  <span className="font-mono text-[11px] text-cream/90 font-medium">
                    live:ready
                  </span>
                </div>
              </div>
            </div>

            {/* Inside Terminal Workspace Body with subtle recessed screen depth */}
            <div className="relative p-6 sm:p-9 lg:p-10 font-mono space-y-6 text-sm shadow-[inset_0_3px_12px_rgba(94,48,35,0.06)] min-h-[480px]">
              {/* Extremely subtle physical surface grain/noise texture */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay z-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
              />

              {/* Dynamic light reflection glare on 3D hover */}
              {isTerminalHovered && (
                <div
                  className="pointer-events-none absolute inset-0 opacity-25 mix-blend-soft-light transition-opacity duration-300 z-10"
                  style={{
                    background: `radial-gradient(650px circle at ${terminalMousePos.x}px ${terminalMousePos.y}px, rgba(255,255,255,0.8), transparent 60%)`,
                  }}
                />
              )}

              {/* Integrated Mountain Landscape & Sun Silhouette in Bottom Right (Homepage Theme) */}
              <svg
                viewBox="0 0 600 220"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-0 right-0 w-full max-w-[560px] sm:max-w-[620px] pointer-events-none select-none z-0 opacity-40 sm:opacity-50"
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

              {/* Terminal command execution header */}
              <div className="space-y-1.5 text-xs sm:text-sm border-b border-[#D5C2B1] pb-4 relative z-10">
                <div className="flex items-center gap-2 font-mono">
                  <span className="text-caramel font-semibold">rajdeep@buildwithrajdeep:~$</span>
                  <span className="text-brownie font-bold">./start-conversation</span>
                </div>
                <div className="text-coffee/80 text-xs font-mono">
                  // Dispatch a transmission directly to Rajdeep&apos;s primary inbox.
                </div>
              </div>

              {isSubmitted ? (
                /* Submission Confirmation Terminal View (Light Theme) */
                <div className="py-6 space-y-5 relative z-10">
                  <div className="space-y-2 text-xs sm:text-sm font-mono">
                    <p className="text-teal-700 font-semibold">&gt; Validating payload integrity... [OK]</p>
                    <p className="text-teal-700 font-semibold">&gt; Resolving gateway endpoint... [OK]</p>
                    <p className="text-teal-700 font-semibold">&gt; Establishing TLS transmission tunnel... [ESTABLISHED]</p>
                    <p className="text-emerald-700 font-bold">
                      &gt; Message dispatched successfully [200 OK]
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#D5C2B1] space-y-3 shadow-xs">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-brownie">
                      Thank you for reaching out, {formData.name || "friend"}.
                    </h3>
                    <p className="text-coffee text-xs sm:text-sm leading-relaxed font-sans">
                      Your transmission has been logged. I have received your note regarding &ldquo;
                      {formData.subject}&rdquo; and will respond to{" "}
                      <span className="font-mono font-semibold text-caramel">{formData.email}</span> as soon as possible.
                    </p>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="px-6 py-3 rounded-xl bg-brownie hover:bg-caramel text-cream font-mono text-xs font-semibold tracking-wider uppercase transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-[3px_4px_0px_0px_#472319] hover:shadow-[4px_5px_0px_0px_#472319] hover:-translate-y-0.5 active:translate-y-0.5"
                    >
                      <span>$ ./send-another-message</span>
                      <span>&rarr;</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Interactive Terminal Form (Light Theme) */
                <form onSubmit={handleSubmit} noValidate className="space-y-6 relative z-10">
                  {/* Field: Name */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <label
                        htmlFor="terminal-name"
                        className={`font-mono font-semibold tracking-wider transition-colors duration-200 ${
                          focusedField === "name" ? "text-caramel font-bold" : "text-brownie"
                        }`}
                      >
                        NAME <span className="text-coffee/60 font-normal">// required</span>
                      </label>
                      {errors.name && (
                        <span className="text-rose-600 font-mono text-xs font-medium">
                          ! {errors.name}
                        </span>
                      )}
                    </div>
                    <div className="relative flex items-center">
                      <span
                        className={`absolute left-3.5 font-mono font-bold transition-colors duration-200 select-none ${
                          focusedField === "name" ? "text-teal-600" : "text-caramel"
                        }`}
                      >
                        &gt;
                      </span>
                      <input
                        ref={nameInputRef}
                        id="terminal-name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        className={`w-full pl-9 pr-4 py-3 rounded-xl bg-[#FAF7F2] border text-brownie placeholder:text-coffee/40 text-xs sm:text-sm font-mono shadow-[inset_0_1.5px_3px_rgba(71,35,25,0.06)] focus:outline-none focus:bg-white transition-all duration-200 ${
                          errors.name
                            ? "border-rose-500 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20"
                            : "border-[#D5C2B1] focus:border-brownie focus:ring-2 focus:ring-caramel/20"
                        }`}
                        aria-invalid={!!errors.name}
                      />
                    </div>
                  </div>

                  {/* Field: Email */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <label
                        htmlFor="terminal-email"
                        className={`font-mono font-semibold tracking-wider transition-colors duration-200 ${
                          focusedField === "email" ? "text-caramel font-bold" : "text-brownie"
                        }`}
                      >
                        EMAIL <span className="text-coffee/60 font-normal">// required</span>
                      </label>
                      {errors.email && (
                        <span className="text-rose-600 font-mono text-xs font-medium">
                          ! {errors.email}
                        </span>
                      )}
                    </div>
                    <div className="relative flex items-center">
                      <span
                        className={`absolute left-3.5 font-mono font-bold transition-colors duration-200 select-none ${
                          focusedField === "email" ? "text-teal-600" : "text-caramel"
                        }`}
                      >
                        &gt;
                      </span>
                      <input
                        id="terminal-email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        className={`w-full pl-9 pr-4 py-3 rounded-xl bg-[#FAF7F2] border text-brownie placeholder:text-coffee/40 text-xs sm:text-sm font-mono shadow-[inset_0_1.5px_3px_rgba(71,35,25,0.06)] focus:outline-none focus:bg-white transition-all duration-200 ${
                          errors.email
                            ? "border-rose-500 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20"
                            : "border-[#D5C2B1] focus:border-brownie focus:ring-2 focus:ring-caramel/20"
                        }`}
                        aria-invalid={!!errors.email}
                      />
                    </div>
                  </div>

                  {/* Field: Subject */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <label
                        htmlFor="terminal-subject"
                        className={`font-mono font-semibold tracking-wider transition-colors duration-200 ${
                          focusedField === "subject" ? "text-caramel font-bold" : "text-brownie"
                        }`}
                      >
                        SUBJECT <span className="text-coffee/60 font-normal">// discussion topic</span>
                      </label>
                      {errors.subject && (
                        <span className="text-rose-600 font-mono text-xs font-medium">
                          ! {errors.subject}
                        </span>
                      )}
                    </div>
                    <div className="relative flex items-center">
                      <span
                        className={`absolute left-3.5 font-mono font-bold transition-colors duration-200 select-none ${
                          focusedField === "subject" ? "text-teal-600" : "text-caramel"
                        }`}
                      >
                        &gt;
                      </span>
                      <input
                        id="terminal-subject"
                        type="text"
                        placeholder="What would you like to discuss?"
                        value={formData.subject}
                        onFocus={() => setFocusedField("subject")}
                        onBlur={() => setFocusedField(null)}
                        onChange={(e) => {
                          setFormData({ ...formData, subject: e.target.value });
                          if (errors.subject) setErrors({ ...errors, subject: undefined });
                        }}
                        className={`w-full pl-9 pr-4 py-3 rounded-xl bg-[#FAF7F2] border text-brownie placeholder:text-coffee/40 text-xs sm:text-sm font-mono shadow-[inset_0_1.5px_3px_rgba(71,35,25,0.06)] focus:outline-none focus:bg-white transition-all duration-200 ${
                          errors.subject
                            ? "border-rose-500 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20"
                            : "border-[#D5C2B1] focus:border-brownie focus:ring-2 focus:ring-caramel/20"
                        }`}
                        aria-invalid={!!errors.subject}
                      />
                    </div>
                  </div>

                  {/* Field: Message */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <label
                        htmlFor="terminal-message"
                        className={`font-mono font-semibold tracking-wider transition-colors duration-200 ${
                          focusedField === "message" ? "text-caramel font-bold" : "text-brownie"
                        }`}
                      >
                        MESSAGE <span className="text-coffee/60 font-normal">// payload</span>
                      </label>
                      {errors.message && (
                        <span className="text-rose-600 font-mono text-xs font-medium">
                          ! {errors.message}
                        </span>
                      )}
                    </div>
                    <div className="relative">
                      <span
                        className={`absolute left-3.5 top-3 font-mono font-bold transition-colors duration-200 select-none ${
                          focusedField === "message" ? "text-teal-600" : "text-caramel"
                        }`}
                      >
                        &gt;
                      </span>
                      <textarea
                        id="terminal-message"
                        rows={4}
                        placeholder="Write your transmission payload..."
                        value={formData.message}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: undefined });
                        }}
                        className={`w-full pl-9 pr-4 py-3 rounded-xl bg-[#FAF7F2] border text-brownie placeholder:text-coffee/40 text-xs sm:text-sm font-mono shadow-[inset_0_1.5px_3px_rgba(71,35,25,0.06)] focus:outline-none focus:bg-white transition-all duration-200 resize-y ${
                          errors.message
                            ? "border-rose-500 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20"
                            : "border-[#D5C2B1] focus:border-brownie focus:ring-2 focus:ring-caramel/20"
                        }`}
                        aria-invalid={!!errors.message}
                      />
                    </div>
                  </div>

                  {/* Ready command line & Dispatch CTA */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#D5C2B1]">
                    <div className="text-xs font-mono flex items-center flex-wrap gap-2.5 select-none">
                      <div className="flex items-center gap-1.5">
                        <span className="text-caramel font-semibold">$ send_message --ready</span>
                        <span className="w-2.5 h-4.5 bg-coffee inline-block animate-pulse align-middle" />
                      </div>
                      <span className="text-[11px] font-mono text-coffee/70 bg-[#EFE6DC] px-2 py-0.5 rounded border border-[#D5C2B1]">
                        payload: {payloadBytes}B
                      </span>
                    </div>

                    <button
                      type="submit"
                      className="px-8 py-3.5 rounded-xl bg-brownie hover:bg-caramel text-cream font-mono font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 shadow-[4px_5px_0px_0px_#472319] hover:shadow-[5px_6px_0px_0px_#472319] hover:-translate-y-0.5 active:translate-y-1 active:shadow-[1px_2px_0px_0px_#472319] flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>SEND MESSAGE</span>
                      <span>&rarr;</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* =========================================================================
            05 — WHAT I CAN HELP WITH
            Six compact interactive capability cards matching the portfolio language.
           ========================================================================= */}
        <section className="px-6 sm:px-12 lg:px-16 xl:px-20 max-w-[1400px] mx-auto">
          <div className="space-y-10 lg:space-y-12">
            <div className="text-left space-y-3 max-w-2xl">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-caramel">
                COLLABORATION DOMAINS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-brownie tracking-tight">
                What I Can Help With
              </h2>
              <p className="text-coffee text-base sm:text-lg leading-relaxed">
                Areas where I can contribute technical depth, engineering rigor, and product execution.
              </p>
            </div>

            {/* 6 Capabilities Cards Grid with 3D Tilt & Viewport Entrance */}
            <div
              ref={capabilitiesRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch"
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

        {/* =========================================================================
            06 & 07 — CREATIVE AVAILABILITY INDICATOR + PERSONAL CLOSING (SIDE BY SIDE)
            Balanced two-column layout combining connection status with personal closing.
           ========================================================================= */}
        <section className="px-6 sm:px-12 lg:px-16 xl:px-20 max-w-[1400px] mx-auto pb-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Left Column: Creative Availability Indicator */}
            <div className="md:col-span-5 p-7 sm:p-9 rounded-3xl bg-cream-dark/25 border border-caramel/20 flex flex-col justify-between space-y-6 shadow-2xs">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-600/20 text-teal-800 text-xs font-mono font-bold uppercase tracking-wider">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-600"></span>
                  </span>
                  <span>CONNECTION STATUS</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-bold text-brownie tracking-tight leading-snug">
                  Open to interesting conversations and meaningful technical work.
                </h3>
              </div>

              <div className="pt-4 border-t border-caramel/15 flex items-center justify-between text-xs font-mono text-coffee/80">
                <span>// STATUS: ACTIVE</span>
                <span className="text-emerald-700 font-semibold">Ready for Inquiries</span>
              </div>
            </div>

            {/* Right Column: Personal Closing Message */}
            <div className="md:col-span-7 p-7 sm:p-9 rounded-3xl bg-cream-dark/25 border border-caramel/20 flex flex-col justify-between space-y-6 shadow-2xs">
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-caramel block">
                  LET&apos;S TALK
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brownie tracking-tight">
                  Not Sure Where to Start?
                </h2>
                <p className="text-coffee text-sm sm:text-base leading-relaxed max-w-xl">
                  That&apos;s completely fine. Send me a message anyway. If the idea is interesting, we&apos;ll figure out where it goes.
                </p>
              </div>

              <div className="pt-4 border-t border-caramel/15 flex items-center justify-between flex-wrap gap-4">
                <span className="text-xs font-mono text-coffee/75">
                  Direct message via terminal console &uarr;
                </span>
                <button
                  type="button"
                  onClick={scrollToTerminal}
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brownie hover:bg-caramel text-cream text-xs sm:text-sm font-semibold transition-all duration-200 shadow-md shadow-brownie/15 hover:shadow-lg active:scale-[0.98] cursor-pointer"
                >
                  <span>Say Hello</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-200 font-mono">
                    &rarr;
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =========================================================================
          08 — MINIMAL FOOTER
          Preserves portfolio global conventions and copyright.
         ========================================================================= */}
      <footer className="border-t border-brownie/25 py-10 px-6 sm:px-12 lg:px-16 xl:px-20 bg-cream text-brownie">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <div className="font-serif text-lg font-bold text-brownie tracking-tight">
              BuildWithRajdeep
            </div>
            <p className="text-xs text-coffee">
              Software Engineer building AI systems.
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono text-coffee">
            <a
              href="https://github.com/rajdeep1211"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-caramel transition-colors"
            >
              GitHub
            </a>
            <span className="text-caramel/40">&bull;</span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-caramel transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-caramel/40">&bull;</span>
            <a
              href={`mailto:${emailAddress}`}
              className="hover:text-caramel transition-colors"
            >
              Email
            </a>
          </div>

          <p className="text-xs text-coffee/75 font-mono">
            &copy; 2026 Rajdeep Bakliwal
          </p>
        </div>
      </footer>

      {/* Floating Scroll-To-Top Button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3.5 rounded-full bg-brownie border border-caramel text-cream shadow-xl hover:bg-caramel transition-all focus:outline-none cursor-pointer"
          aria-label="Scroll back to top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
}
