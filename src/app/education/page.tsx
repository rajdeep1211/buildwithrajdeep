"use client";

import { useState, useEffect } from "react";

interface EducationItem {
  id: number;
  period: string;
  degree: string;
  institution: string;
  location: string;
  specialization: string;
  summary: string;
  coursework: string[];
  achievements: string[];
}

interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  description: string;
  url: string;
}

export default function EducationPage() {
  const [activeEduId, setActiveEduId] = useState<number | null>(null);
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

  // Exactly 3 Education Entries
  const educationHistory: EducationItem[] = [
    {
      id: 1,
      period: "2021 — 2025",
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "Institute of Engineering & Technology",
      location: "India",
      specialization: "Artificial Intelligence, Machine Learning & Systems Architecture",
      summary:
        "Comprehensive undergraduate program focusing on advanced algorithms, deep neural network architectures, distributed computing, and full-stack software development.",
      coursework: [
        "Machine Learning & Deep Learning",
        "Data Structures & Algorithms",
        "Distributed Systems & Cloud Computing",
        "Database Management Systems",
        "Object-Oriented Software Architecture",
        "Computer Networks & Security",
      ],
      achievements: [
        "Led university technical teams in building automated student AI tools.",
        "Consistently recognized on the Dean's Academic Merit list for excellence in core computer science modules.",
        "Organized campus technical workshops and collaborative hackathons.",
      ],
    },
    {
      id: 2,
      period: "2019 — 2021",
      degree: "Higher Secondary Certificate (Class XII)",
      institution: "Senior Secondary School",
      location: "India",
      specialization: "Physics, Chemistry & Mathematics (PCM) with Computer Science",
      summary:
        "Rigorous STEM foundation emphasizing analytical problem solving, linear algebra, calculus, and introductory object-oriented programming.",
      coursework: [
        "Advanced Mathematics (Calculus & Vectors)",
        "Applied Physics & Mechanics",
        "Fundamentals of Computer Programming",
        "Analytical & Computational Reasoning",
      ],
      achievements: [
        "Secured top tier percentile in regional competitive engineering entrance examinations.",
        "Awarded academic distinction in Computational Mathematics and Physics.",
      ],
    },
    {
      id: 3,
      period: "2018 — 2019",
      degree: "Secondary School Certificate (Class X)",
      institution: "High School",
      location: "India",
      specialization: "Core Science, Mathematics & Foundational Computing",
      summary:
        "Foundational education fostering early interest in software logic, algorithm design, scientific inquiry, and technology leadership.",
      coursework: [
        "General Science & Laboratory Research",
        "Foundational Algebra & Geometry",
        "Information Technology Fundamentals",
        "Logic & Reasoning",
      ],
      achievements: [
        "Graduated with Distinction across science and mathematics disciplines.",
        "Active participant in regional science exhibitions and mathematics Olympiads.",
      ],
    },
  ];

  // Exactly 3 Certification Entries
  const certifications: CertificationItem[] = [
    {
      title: "Deep Learning Specialization",
      issuer: "DeepLearning.AI",
      date: "2024",
      credentialId: "DL-AI-2024-9842",
      description:
        "Comprehensive mastery of Neural Networks, CNNs, Sequence Models, Transformers, and optimization strategies for practical deep learning systems.",
      url: "https://www.deeplearning.ai",
    },
    {
      title: "Machine Learning Specialization",
      issuer: "Stanford Online & DeepLearning.AI",
      date: "2023",
      credentialId: "ML-STAN-2023-4109",
      description:
        "Foundational and advanced machine learning algorithms including supervised learning, unsupervised learning, recommendation systems, and reinforcement learning.",
      url: "https://www.coursera.org",
    },
    {
      title: "Cloud & Full-Stack Systems Engineering",
      issuer: "AWS / Google Cloud Training",
      date: "2024",
      credentialId: "ARCH-CLOUD-2024-8173",
      description:
        "Architecting resilient cloud platforms, automated CI/CD deployment pipelines, containerized backend services, and scalable web infrastructures.",
      url: "https://aws.amazon.com",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-cream text-brownie">
      {/* Main Content */}
      <main className="flex-1">
        {/* ==================================================== */}
        {/* 1. EDUCATION SECTION — LIGHTWEIGHT VERTICAL TIMELINE */}
        {/* ==================================================== */}
        <section className="py-16 sm:py-24 px-6 sm:px-12 lg:px-16 xl:px-20 max-w-[1400px] mx-auto">
          {/* Section Header */}
          <div className="text-left space-y-3 max-w-2xl mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-caramel/15 text-coffee text-xs font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-caramel animate-pulse" />
              Academic Journey
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-brownie tracking-tight leading-tight">
              Education
            </h1>
            <p className="text-coffee text-base sm:text-lg leading-relaxed">
              A chronological journey of engineering inquiry, computational sciences, and formal academic milestones.
            </p>
            <p className="text-xs text-caramel font-medium pt-1">
              Hover or tap an entry to reveal curriculum and academic details.
            </p>
          </div>

          {/* Vertical Interactive Timeline (Hardware-accelerated, zero lag) */}
          <div className="relative pl-6 sm:pl-10 lg:pl-16 border-l-2 border-caramel/30 space-y-10 lg:space-y-14">
            {educationHistory.map((item) => {
              const isFocused = activeEduId === item.id;
              const hasAnyFocus = activeEduId !== null;
              const isDimmed = hasAnyFocus && !isFocused;

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveEduId(item.id)}
                  onMouseLeave={() => setActiveEduId(null)}
                  onClick={() => setActiveEduId(isFocused ? null : item.id)}
                  className={`relative cursor-pointer transition-opacity duration-150 group ${
                    isDimmed ? "opacity-40" : "opacity-100"
                  }`}
                >
                  {/* Timeline Node Point on the line */}
                  <div className="absolute -left-[31px] sm:-left-[47px] lg:-left-[71px] top-6 flex items-center justify-center">
                    <div
                      className={`w-5 h-5 rounded-full border-2 transition-all duration-150 ${
                        isFocused
                          ? "bg-caramel border-brownie scale-125 shadow-sm"
                          : "bg-cream border-caramel/70 group-hover:border-caramel"
                      }`}
                    />
                  </div>

                  {/* Card Container (Clean Cream / Caramel palette, no heavy blur filters) */}
                  <div
                    className={`rounded-2xl p-6 sm:p-8 lg:p-10 transition-all duration-150 ${
                      isFocused
                        ? "bg-cream-light border-2 border-caramel shadow-md"
                        : "bg-cream border border-caramel/25 hover:border-caramel/60 shadow-sm"
                    }`}
                  >
                    {/* Header: Period & Location */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-caramel/15 text-coffee border border-caramel/30">
                        {item.period}
                      </span>
                      <span className="text-xs text-coffee/80 font-medium">
                        {item.location}
                      </span>
                    </div>

                    {/* Degree & Institution */}
                    <h2 className="text-xl sm:text-2xl font-bold text-brownie tracking-tight mb-1 group-hover:text-caramel transition-colors">
                      {item.degree}
                    </h2>
                    <h3 className="text-base sm:text-lg font-medium text-coffee mb-4">
                      {item.institution}
                    </h3>

                    {/* Compact Default State: Short summary */}
                    <p className="text-sm sm:text-base text-brownie/85 leading-relaxed max-w-3xl">
                      {item.summary}
                    </p>

                    {/* Expanded Details: Revealed on Hover/Focus */}
                    {isFocused && (
                      <div className="mt-6 pt-6 border-t border-caramel/20 space-y-6">
                        {/* Specialization */}
                        <div>
                          <span className="text-xs font-mono uppercase tracking-wider text-caramel font-semibold block mb-1">
                            Concentration
                          </span>
                          <p className="text-sm font-medium text-brownie">
                            {item.specialization}
                          </p>
                        </div>

                        {/* Core Coursework */}
                        <div>
                          <span className="text-xs font-mono uppercase tracking-wider text-caramel font-semibold block mb-2.5">
                            Key Academic Modules
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {item.coursework.map((course) => (
                              <span
                                key={course}
                                className="text-xs px-2.5 py-1 rounded-md bg-cream-dark text-coffee font-medium border border-caramel/20"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Key Highlights & Achievements */}
                        <div>
                          <span className="text-xs font-mono uppercase tracking-wider text-caramel font-semibold block mb-2">
                            Highlights &amp; Engagements
                          </span>
                          <ul className="space-y-1.5 text-sm text-brownie/85 list-disc list-inside">
                            {item.achievements.map((ach) => (
                              <li key={ach} className="leading-relaxed">
                                {ach}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ==================================================== */}
        {/* 2. CERTIFICATIONS SECTION                            */}
        {/* ==================================================== */}
        <section className="py-20 lg:py-28 px-6 sm:px-12 lg:px-16 xl:px-20 max-w-[1400px] mx-auto border-t border-caramel/20 bg-cream-dark/20">
          {/* Section Heading */}
          <div className="text-left space-y-3 max-w-2xl mb-14 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-caramel/15 text-coffee text-xs font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-caramel" />
              Verified Credentials
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-brownie tracking-tight">
              Certifications
            </h2>
            <p className="text-coffee text-base sm:text-lg">
              Credentials that reflect my continuous learning, systems engineering discipline, and technical growth.
            </p>
          </div>

          {/* Exactly 3 Certification Cards: Desktop 3-column, Tablet 2/3, Mobile vertical stack */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="group rounded-2xl bg-brownie text-cream border border-caramel/30 overflow-hidden shadow-md hover:border-caramel hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
              >
                {/* Upper Portion: Certificate Visual Area */}
                <div className="relative aspect-[16/10] bg-gradient-to-br from-[#472319] via-brownie to-[#3d1d14] p-6 border-b border-caramel/20 overflow-hidden flex flex-col justify-between">
                  {/* Subtle technical background watermark */}
                  <div className="absolute inset-0 bg-[radial-gradient(#C08552_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />

                  {/* Top Bar of Certificate Badge */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center space-x-1.5">
                      <span className="w-2 h-2 rounded-full bg-caramel" />
                      <span className="text-[10px] font-mono tracking-widest text-caramel uppercase font-semibold">
                        VERIFIED CREDENTIAL
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-cream/70">
                      {cert.date}
                    </span>
                  </div>

                  {/* Certificate Graphical Seal & Emblem */}
                  <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center space-y-2 py-2">
                    <div className="w-14 h-14 rounded-2xl bg-caramel/20 border border-caramel/40 flex items-center justify-center text-caramel group-hover:scale-105 group-hover:border-caramel transition-all duration-200">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <span className="text-xs font-mono font-medium text-cream/70">
                      ID: {cert.credentialId}
                    </span>
                  </div>

                  {/* Certificate Footer Stamp */}
                  <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-cream/60 border-t border-caramel/20 pt-2">
                    <span>{cert.issuer}</span>
                    <span className="text-caramel font-medium">OFFICIAL PASS</span>
                  </div>
                </div>

                {/* Lower Portion: Information & CTA */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-caramel">
                      {cert.issuer}
                    </span>
                    <h3 className="text-xl font-bold text-cream tracking-tight group-hover:text-caramel-light transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-cream/80 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  {/* CTA Link */}
                  <div className="pt-4 border-t border-cream/15">
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-caramel hover:text-caramel-light transition-colors focus:outline-none focus:underline"
                    >
                      <span>View Certificate</span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
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

      {/* Footer (Matching Homepage) */}
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
