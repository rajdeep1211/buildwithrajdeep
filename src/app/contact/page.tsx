"use client";

import { useState, useEffect, FormEvent } from "react";

export default function ContactPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const emailAddress = "rajdeepbakliwal@gmail.com";

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

  const socialPlatforms = [
    {
      name: "GitHub",
      href: "https://github.com/rajdeep1211",
      icon: (
        <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: (
        <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://youtube.com",
      icon: (
        <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: (
        <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "X (Twitter)",
      href: "https://x.com",
      icon: (
        <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "Discord",
      href: "https://discord.com",
      icon: (
        <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-cream text-brownie selection:bg-caramel/30 selection:text-brownie">
      {/* 1. Global Navigation Header */}
      <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-md border-b border-caramel/15 transition-all">
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
              className="text-brownie/85 hover:text-caramel transition-colors"
            >
              Projects
            </a>
            <a
              href="/contact"
              className="relative text-caramel font-semibold after:absolute after:-bottom-1.5 after:left-0 after:right-0 after:h-0.5 after:bg-caramel after:rounded-full"
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
              className="block py-2 text-base font-medium text-brownie/90 hover:text-caramel"
            >
              Projects
            </a>
            <a
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-caramel"
            >
              Contact Me
            </a>
          </div>
        )}
      </header>

      {/* 2. Main Content */}
      <main className="flex-1">
        <section className="py-14 sm:py-20 lg:py-24 px-6 sm:px-12 lg:px-16 xl:px-20 max-w-[1400px] mx-auto">
          {/* Hero / Introduction Header */}
          <div className="max-w-3xl mb-12 sm:mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-caramel/15 border border-caramel/30 text-coffee text-xs font-mono font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-caramel animate-pulse" />
              GET IN TOUCH
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-brownie leading-tight">
              Let&apos;s Build Something Together.
            </h1>
            <p className="text-coffee text-base sm:text-lg leading-relaxed max-w-2xl">
              I&apos;m always open to interesting ideas, meaningful collaborations, AI projects, software engineering opportunities, and conversations around technology.
            </p>
          </div>

          {/* Balanced 2-Column Responsive Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-start">
            {/* Left Column: Personal Introduction, Availability, Email, Social */}
            <div className="lg:col-span-5 space-y-6">
              {/* Availability & Personal Note */}
              <div className="p-6 sm:p-7 rounded-3xl bg-cream-dark/40 border border-caramel/25 space-y-4 shadow-sm">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-caramel opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-caramel"></span>
                  </span>
                  <span className="text-xs font-mono font-semibold text-coffee tracking-wide uppercase">
                    Open to conversations
                  </span>
                </div>
                <p className="text-brownie/90 text-sm sm:text-base leading-relaxed italic">
                  &ldquo;Whether it&apos;s an idea, a project, a collaboration, or just a good conversation — I&apos;d love to hear from you.&rdquo;
                </p>
              </div>

              {/* Direct Email Card */}
              <div className="p-6 sm:p-7 rounded-3xl bg-cream-dark/40 border border-caramel/25 space-y-3.5 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-coffee">
                    EMAIL
                  </span>
                  <span className="text-xs text-coffee/75 font-mono">Direct inbox</span>
                </div>
                <div className="text-base sm:text-lg font-mono font-semibold text-brownie truncate">
                  {emailAddress}
                </div>
                <div className="pt-2 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="px-4 py-2 rounded-xl bg-brownie hover:bg-caramel text-cream text-xs font-medium transition-colors flex items-center gap-2 shadow-sm"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <>
                        <svg className="w-3.5 h-3.5 text-cream-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-mono">Copied!</span>
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
                    className="px-4 py-2 rounded-xl bg-caramel/15 border border-caramel/30 text-xs font-semibold text-coffee hover:bg-caramel hover:text-cream transition-colors inline-flex items-center gap-1.5 shadow-sm"
                  >
                    <span>Send Email</span>
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>

              {/* Social / Platform Connections */}
              <div className="p-6 sm:p-7 rounded-3xl bg-cream-dark/40 border border-caramel/25 space-y-3.5 shadow-sm">
                <div className="flex items-center justify-between border-b border-caramel/15 pb-2.5">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-coffee">
                    CONNECT WITH ME
                  </span>
                  <span className="text-xs text-coffee/75 font-mono">6 platforms</span>
                </div>
                <div className="space-y-1">
                  {socialPlatforms.map((platform) => (
                    <a
                      key={platform.name}
                      href={platform.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-2.5 -mx-1.5 rounded-xl hover:bg-caramel/10 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-cream border border-caramel/25 flex items-center justify-center text-brownie group-hover:text-caramel group-hover:border-caramel transition-colors shadow-xs">
                          {platform.icon}
                        </div>
                        <span className="text-sm font-medium text-brownie group-hover:text-caramel transition-colors">
                          {platform.name}
                        </span>
                      </div>
                      <span className="text-coffee/60 group-hover:text-caramel group-hover:translate-x-0.5 transition-all text-sm font-mono">
                        &rarr;
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Clean, Minimal Contact Form or Success State */}
            <div className="lg:col-span-7">
              {isSubmitted ? (
                /* Submission Success State */
                <div className="p-8 sm:p-12 rounded-3xl bg-cream-dark/40 border border-caramel/30 text-center space-y-6 shadow-sm">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-caramel/20 border border-caramel/40 flex items-center justify-center text-brownie shadow-sm">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="space-y-2 max-w-md mx-auto">
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-brownie tracking-tight">
                      Message Sent ✓
                    </h3>
                    <p className="text-coffee text-sm sm:text-base leading-relaxed">
                      Thanks for reaching out. I&apos;ll get back to you as soon as I can.
                    </p>
                  </div>
                  <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                    <a
                      href="/"
                      className="px-6 py-3 rounded-xl bg-brownie hover:bg-caramel text-cream font-semibold text-sm transition-all shadow-md"
                    >
                      Back to Home
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: "", email: "", subject: "", message: "" });
                      }}
                      className="px-6 py-3 rounded-xl bg-cream border border-caramel/40 text-brownie hover:bg-caramel/10 font-medium text-sm transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                /* Main Contact Form */
                <div className="p-7 sm:p-9 rounded-3xl bg-cream-dark/30 border border-caramel/25 shadow-sm space-y-6">
                  <div className="space-y-1">
                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-brownie tracking-tight">
                      Send a Message
                    </h2>
                    <p className="text-xs sm:text-sm text-coffee">
                      Fill out the details below and I will respond to your inquiry promptly.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    {/* Name Field */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-mono font-semibold uppercase tracking-wider text-coffee"
                      >
                        Name <span className="text-caramel">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        className={`w-full px-4 py-3 rounded-xl bg-cream border text-brownie placeholder:text-coffee/50 text-sm focus:outline-none transition-colors ${
                          errors.name
                            ? "border-rose-500/80 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/30"
                            : "border-caramel/30 focus:border-caramel focus:ring-1 focus:ring-caramel/30"
                        }`}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="text-xs text-rose-700 flex items-center gap-1 mt-1 font-mono">
                          <span aria-hidden="true">&bull;</span> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-mono font-semibold uppercase tracking-wider text-coffee"
                      >
                        Email <span className="text-caramel">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        className={`w-full px-4 py-3 rounded-xl bg-cream border text-brownie placeholder:text-coffee/50 text-sm focus:outline-none transition-colors ${
                          errors.email
                            ? "border-rose-500/80 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/30"
                            : "border-caramel/30 focus:border-caramel focus:ring-1 focus:ring-caramel/30"
                        }`}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-xs text-rose-700 flex items-center gap-1 mt-1 font-mono">
                          <span aria-hidden="true">&bull;</span> {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Subject Field */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-subject"
                        className="block text-xs font-mono font-semibold uppercase tracking-wider text-coffee"
                      >
                        Subject <span className="text-caramel">*</span>
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        placeholder="What would you like to discuss?"
                        value={formData.subject}
                        onChange={(e) => {
                          setFormData({ ...formData, subject: e.target.value });
                          if (errors.subject) setErrors({ ...errors, subject: undefined });
                        }}
                        className={`w-full px-4 py-3 rounded-xl bg-cream border text-brownie placeholder:text-coffee/50 text-sm focus:outline-none transition-colors ${
                          errors.subject
                            ? "border-rose-500/80 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/30"
                            : "border-caramel/30 focus:border-caramel focus:ring-1 focus:ring-caramel/30"
                        }`}
                        aria-invalid={!!errors.subject}
                        aria-describedby={errors.subject ? "subject-error" : undefined}
                      />
                      {errors.subject && (
                        <p id="subject-error" className="text-xs text-rose-700 flex items-center gap-1 mt-1 font-mono">
                          <span aria-hidden="true">&bull;</span> {errors.subject}
                        </p>
                      )}
                    </div>

                    {/* Message Field */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-message"
                        className="block text-xs font-mono font-semibold uppercase tracking-wider text-coffee"
                      >
                        Message <span className="text-caramel">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        rows={5}
                        placeholder="Tell me a little about your idea or project..."
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: undefined });
                        }}
                        className={`w-full px-4 py-3 rounded-xl bg-cream border text-brownie placeholder:text-coffee/50 text-sm focus:outline-none transition-colors resize-y ${
                          errors.message
                            ? "border-rose-500/80 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/30"
                            : "border-caramel/30 focus:border-caramel focus:ring-1 focus:ring-caramel/30"
                        }`}
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? "message-error" : undefined}
                      />
                      {errors.message && (
                        <p id="message-error" className="text-xs text-rose-700 flex items-center gap-1 mt-1 font-mono">
                          <span aria-hidden="true">&bull;</span> {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Action */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-brownie hover:bg-caramel text-cream font-semibold text-sm transition-all shadow-md shadow-brownie/15 active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>Send Message</span>
                        <span aria-hidden="true">&rarr;</span>
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* 3. Minimal Footer */}
      <footer className="border-t border-caramel/20 py-10 px-6 sm:px-12 lg:px-16 xl:px-20 bg-cream-dark/30 text-brownie">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <div className="font-serif text-lg font-bold text-brownie tracking-tight">
              Rajdeep Bakliwal
            </div>
            <p className="text-xs text-coffee">
              Building software, AI systems, and ideas.
            </p>
          </div>
          <p className="text-xs text-coffee/75 font-mono">
            &copy; {new Date().getFullYear()} Rajdeep Bakliwal &bull; All rights reserved.
          </p>
        </div>
      </footer>

      {/* 4. Floating Scroll-To-Top Button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3.5 rounded-full bg-brownie border border-caramel text-cream shadow-xl hover:bg-caramel transition-all focus:outline-none"
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
