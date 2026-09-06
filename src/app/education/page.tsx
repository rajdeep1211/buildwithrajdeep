"use client";

import { useState, useEffect } from "react";
import InteractiveCertificationCard, {
  CertificateItem,
} from "@/components/InteractiveCertificationCard";

interface EducationItem {
  id: number;
  period: string;
  degree: string;
  institution: string;
  location: string;
  specialization: string;
  summary: string;
  coursework?: string[];
  achievements: string[];
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

  const educationHistory: EducationItem[] = [
    {
      id: 1,
      period: "2022 — 2025",
      degree: "Bachelor of Technology in Computer and Communication Engineering",
      institution: "Manipal University Jaipur",
      location: "Jaipur, India",
      specialization: "Artificial Intelligence, Machine Learning, Computer Networks & Systems Architecture",
      summary:
        "Undergraduate program focused on software engineering, artificial intelligence, machine learning, computer networks, and systems architecture, with hands-on experience building technical projects and participating in collaborative engineering initiatives.",
      achievements: [
        "Led IEEE AESS campus events as Event Head, coordinating planning and execution.",
        "Won the Smart India Hackathon (SIH) campus round with a student team.",
        "Demonstrated strong leadership and team coordination through technical events and competitions.",
      ],
    },
    {
      id: 2,
      period: "2021 — 2022",
      degree: "Higher Secondary Certificate (Class XII)",
      institution: "Yeshwantrao Chavan College",
      location: "India",
      specialization: "Physics, Chemistry, Mathematics, Biology (PCMB) + Information Technology",
      summary:
        "Higher secondary education combining a strong foundation in science and mathematics with practical exposure to information technology and computational concepts.",
      coursework: [
        "Advanced Mathematics (Calculus & Vectors)",
        "Applied Physics & Mechanics",
        "Fundamentals of Computer Programming",
        "Analytical & Computational Reasoning",
      ],
      achievements: [
        "Achieved 80% overall in Higher Secondary education.",
        "Built a broad academic foundation across science, mathematics, and information technology.",
      ],
    },
    {
      id: 3,
      period: "2019 — 2020",
      degree: "Secondary School Certificate (Class X)",
      institution: "G A SHAH ENG PRIMARY SCHOOL",
      location: "India",
      specialization: "Core Science, Mathematics & Foundational Computing",
      summary:
        "Foundational school education with a focus on core academics, personal development, teamwork, and participation in extracurricular activities.",
      coursework: [
        "General Science & Laboratory Research",
        "Foundational Algebra & Geometry",
        "Information Technology Fundamentals",
        "Logic & Reasoning",
      ],
      achievements: [
        "Achieved 63% overall in secondary school education.",
        "Served as Volleyball Team Captain, leading and coordinating the school team.",
        "Served as Club House Head, taking responsibility for student activities and team coordination.",
      ],
    },
  ];

  // 10 Real Verified Certifications
  const certifications: CertificateItem[] = [
    {
      id: "01",
      title: "CCNAv7: Introduction to Networks",
      issuer: "Cisco Networking Academy",
      date: "22 Mar 2024",
      category: "Networking",
      url: "https://github.com/rajdeep1211/buildwithrajdeep/blob/main/public/certificates/01-ccna-introduction-to-networks.pdf",
      preview: "/certificates/01-ccna-introduction-to-networks.pdf",
    },
    {
      id: "02",
      title: "CCNAv7: Switching, Routing, and Wireless Essentials",
      issuer: "Cisco Networking Academy",
      date: "29 Mar 2024",
      category: "Networking",
      url: "https://github.com/rajdeep1211/buildwithrajdeep/blob/main/public/certificates/02-ccna-switching-routing-wireless.pdf",
      preview: "/certificates/02-ccna-switching-routing-wireless.pdf",
    },
    {
      id: "03",
      title: "Introduction to Generative AI",
      issuer: "Google Cloud",
      platform: "Coursera",
      date: "Apr 16, 2025",
      category: "Artificial Intelligence",
      url: "https://github.com/rajdeep1211/buildwithrajdeep/blob/main/public/certificates/03-introduction-to-generative-ai.pdf",
      preview: "/certificates/03-introduction-to-generative-ai.pdf",
    },
    {
      id: "04",
      title: "AI for Everyone",
      issuer: "DeepLearning.AI",
      platform: "Coursera",
      date: "Apr 15, 2025",
      category: "Artificial Intelligence",
      url: "https://github.com/rajdeep1211/buildwithrajdeep/blob/main/public/certificates/04-ai-for-everyone.pdf",
      preview: "/certificates/04-ai-for-everyone.pdf",
    },
    {
      id: "05",
      title: "Symmetric Cryptography",
      issuer: "University of Colorado System",
      platform: "Coursera",
      date: "Nov 5, 2024",
      category: "Cybersecurity",
      url: "https://github.com/rajdeep1211/buildwithrajdeep/blob/main/public/certificates/05-symmetric-cryptography.pdf",
      preview: "/certificates/05-symmetric-cryptography.pdf",
    },
    {
      id: "06",
      title: "Algorithmic Toolbox",
      issuer: "University of California San Diego",
      platform: "Coursera",
      date: "Nov 28, 2024",
      category: "Algorithms",
      url: "https://github.com/rajdeep1211/buildwithrajdeep/blob/main/public/certificates/06-algorithmic-toolbox.pdf",
      preview: "/certificates/06-algorithmic-toolbox.pdf",
    },
    {
      id: "07",
      title: "Foundations of Data Science",
      issuer: "Google",
      platform: "Coursera",
      date: "Nov 17, 2024",
      category: "Data Science",
      url: "https://github.com/rajdeep1211/buildwithrajdeep/blob/main/public/certificates/07-foundations-of-data-science.pdf",
      preview: "/certificates/07-foundations-of-data-science.pdf",
    },
    {
      id: "08",
      title: "Introduction to Software Engineering",
      issuer: "IBM",
      platform: "Coursera",
      date: "Nov 6, 2024",
      category: "Software Engineering",
      url: "https://github.com/rajdeep1211/buildwithrajdeep/blob/main/public/certificates/08-introduction-to-software-engineering.pdf",
      preview: "/certificates/08-introduction-to-software-engineering.pdf",
    },
    {
      id: "09",
      title: "Software Engineering: Modeling Software Systems using UML",
      issuer: "The Hong Kong University of Science and Technology",
      platform: "Coursera",
      date: "Nov 7, 2024",
      category: "Software Engineering",
      url: "https://github.com/rajdeep1211/buildwithrajdeep/blob/main/public/certificates/09-software-engineering-uml.pdf",
      preview: "/certificates/09-software-engineering-uml.pdf",
    },
    {
      id: "10",
      title: "Management of Fashion and Luxury Companies",
      issuer: "Università Bocconi",
      platform: "Coursera",
      date: "Dec 4, 2024",
      category: "Business / Management",
      url: "https://github.com/rajdeep1211/buildwithrajdeep/blob/main/public/certificates/10-management-fashion-luxury.pdf",
      preview: "/certificates/10-management-fashion-luxury.pdf",
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

                        {/* Core Coursework (Hidden when no verified module list is provided) */}
                        {item.coursework && item.coursework.length > 0 && (
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
                        )}

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

          {/* Responsive 4-column Grid: Desktop 4, Tablet 2, Mobile 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {certifications.map((cert, index) => (
              <InteractiveCertificationCard
                key={cert.id}
                cert={cert}
                index={index}
              />
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
