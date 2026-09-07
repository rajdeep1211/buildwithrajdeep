"use client";

import { useState, useEffect } from "react";
import LeetCodeDashboard from "@/components/experience/LeetCodeDashboard";
import GitHubDashboard from "@/components/experience/GitHubDashboard";
import ExperienceAccordion from "@/components/experience/ExperienceAccordion";
import {
  leetcodeConfig,
  githubConfig,
  experienceCategories,
} from "@/data/experienceData";

export default function ExperiencePage() {
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

  return (
    <div className="min-h-screen flex flex-col bg-cream text-brownie selection:bg-caramel selection:text-cream">
      {/* Main Content */}
      <main className="flex-1">
        {/* ==================================================== */}
        {/* 1. EXPERIENCE SECTION INTRODUCTION                   */}
        {/* ==================================================== */}
        <section className="pt-12 sm:pt-20 pb-12 sm:pb-16 px-6 sm:px-12 lg:px-16 xl:px-20 max-w-[1400px] mx-auto">
          <div className="text-left space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-caramel/15 text-coffee text-xs font-mono font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-caramel animate-pulse" />
              03 — Engineering Activity & Applied Work
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-extrabold text-brownie tracking-tight leading-[1.08]">
              EXPERIENCE.
            </h1>

            <p className="text-coffee text-lg sm:text-xl font-normal leading-relaxed">
              “What I've worked on, built, solved, and contributed to.”
            </p>

            <p className="text-sm text-coffee/80 max-w-2xl leading-relaxed pt-1">
              Treating experience as a continuous combination of problem-solving rigor, open-source building, and collaborative real-world engineering.
            </p>
          </div>
        </section>

        {/* ==================================================== */}
        {/* 2. DEVELOPER ACTIVITY DASHBOARDS (LEETCODE & GITHUB) */}
        {/* ==================================================== */}
        <section className="pb-16 sm:pb-24 px-6 sm:px-12 lg:px-16 xl:px-20 max-w-[1400px] mx-auto space-y-8 sm:space-y-12">
          {/* Section Subtitle */}
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-caramel/20 pb-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-caramel font-semibold block">
                Activity Intelligence
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-brownie mt-0.5">
                Developer Activity Dashboards
              </h2>
            </div>
            <p className="text-xs font-mono text-coffee/70 max-w-md text-left sm:text-right">
              LeetCode demonstrates algorithmic depth; GitHub shows continuous software delivery.
            </p>
          </div>

          {/* 1. LeetCode Dashboard */}
          <LeetCodeDashboard config={leetcodeConfig} />

          {/* 2. GitHub Dashboard */}
          <GitHubDashboard config={githubConfig} />
        </section>

        {/* ==================================================== */}
        {/* 3. FOUR FULL-WIDTH EDITORIAL EXPERIENCE CATEGORIES   */}
        {/* ==================================================== */}
        <section className="pb-24 sm:pb-32 px-6 sm:px-12 lg:px-16 xl:px-20 max-w-[1400px] mx-auto space-y-8 sm:space-y-10">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-caramel/20 pb-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-caramel font-semibold block">
                Applied Engineering
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-brownie mt-0.5">
                Experience Categories
              </h2>
            </div>
            <p className="text-xs font-mono text-coffee/70 max-w-md text-left sm:text-right">
              Explore applied engineering roles, leadership initiatives, and technical contributions.
            </p>
          </div>

          {/* Editorial Accordion */}
          <ExperienceAccordion categories={experienceCategories} />
        </section>
      </main>

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          type="button"
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-brownie text-cream flex items-center justify-center shadow-lg hover:bg-caramel transition-all duration-200 focus:outline-none cursor-pointer"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

      {/* Footer */}
      <footer className="border-t border-caramel/15 py-8 px-6 sm:px-12 lg:px-16 xl:px-20 bg-cream text-xs text-coffee">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-serif font-bold text-brownie text-base">
            Rajdeep Bakliwal
          </div>
          <div className="flex items-center gap-6 text-xs text-coffee/80">
            <a href="https://github.com/rajdeep1211" target="_blank" rel="noopener noreferrer" className="hover:text-caramel transition-colors">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-caramel transition-colors">LinkedIn</a>
            <a href="https://leetcode.com/u/rajdeep_jain/" target="_blank" rel="noopener noreferrer" className="hover:text-caramel transition-colors">LeetCode</a>
            <a href="/contact" className="hover:text-caramel transition-colors">Contact</a>
          </div>
          <div className="text-coffee/70">
            &copy; {new Date().getFullYear()} BuildWithRajdeep. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

