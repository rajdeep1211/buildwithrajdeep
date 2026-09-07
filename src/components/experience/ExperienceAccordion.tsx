"use client";

import { useState } from "react";
import { ExperienceCategory, ExperienceEntry } from "@/data/experienceData";

interface ExperienceAccordionProps {
  categories: ExperienceCategory[];
}

export default function ExperienceAccordion({ categories }: ExperienceAccordionProps) {
  // Default to first non-empty category or null
  const [expandedId, setExpandedId] = useState<string | null>("volunteering");

  const toggleCategory = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full space-y-0 border-t border-caramel/25">
      {categories.map((category) => {
        const isOpen = expandedId === category.id;
        const hasEntries = category.entries.length > 0;

        return (
          <div
            key={category.id}
            className={`border-b border-caramel/25 transition-colors duration-300 ${
              isOpen ? "bg-caramel/[0.04]" : "hover:bg-caramel/[0.02]"
            }`}
          >
            {/* Accordion Row Header */}
            <button
              onClick={() => toggleCategory(category.id)}
              aria-expanded={isOpen}
              className="w-full py-6 sm:py-8 lg:py-10 flex items-center justify-between gap-4 text-left focus:outline-none group cursor-pointer"
            >
              <div className="space-y-1 sm:space-y-1.5 flex-1 pr-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-brownie group-hover:text-caramel transition-colors tracking-tight">
                    {category.title}
                  </h3>
                  {hasEntries && (
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-caramel/15 text-coffee font-semibold border border-caramel/30">
                      {category.entries.length} {category.entries.length === 1 ? "entry" : "entries"}
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-coffee/80 font-sans max-w-2xl leading-relaxed">
                  {category.subtitle}
                </p>
              </div>

              {/* Right-aligned rotating arrow indicator */}
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-caramel/30 flex items-center justify-center text-brownie group-hover:text-caramel group-hover:border-caramel transition-all duration-300 shrink-0 ${
                  isOpen ? "bg-brownie text-cream border-brownie rotate-90" : "bg-white/40"
                }`}
                aria-hidden="true"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </button>

            {/* Collapsible Content Area */}
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100 pb-8 sm:pb-12"
                  : "grid-rows-[0fr] opacity-0 pb-0 pointer-events-none"
              }`}
            >
              <div className="overflow-hidden">
                {hasEntries ? (
                  <div className="space-y-8 pt-2">
                    {category.entries.map((entry) => (
                      <ExperienceEntryCard key={entry.id} entry={entry} />
                    ))}
                  </div>
                ) : (
                  /* Tasteful Empty State per Prompt Section 14 */
                  <div className="pt-2">
                    <div className="p-6 sm:p-8 rounded-2xl bg-white/40 border border-dashed border-caramel/35 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="space-y-1.5 max-w-2xl">
                        <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-coffee uppercase tracking-wider">
                          <span className="w-1.5 h-1.5 rounded-full bg-caramel/60" />
                          Status: Active Pipeline
                        </div>
                        <p className="text-sm sm:text-base text-coffee/90 leading-relaxed font-sans">
                          {category.emptyStateMessage ||
                            "No engagements registered yet. Currently building, learning, and looking for meaningful opportunities to collaborate."}
                        </p>
                      </div>

                      <a
                        href="/contact"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-4 py-2 rounded-lg bg-brownie/10 hover:bg-brownie hover:text-cream text-brownie border border-caramel/30 transition-all duration-200 shrink-0 self-start sm:self-auto"
                      >
                        <span>Discuss Collaboration</span>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Single Experience Entry Component
function ExperienceEntryCard({ entry }: { entry: ExperienceEntry }) {
  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-white/70 border border-caramel/25 shadow-xs space-y-6">
      {/* Header: Company → Role → Period */}
      <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-caramel/15">
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2.5">
            <h4 className="text-xl sm:text-2xl font-bold text-brownie tracking-tight font-serif">
              {entry.company}
            </h4>
            {entry.badge && (
              <span className="text-xs font-mono font-semibold text-caramel bg-caramel/15 px-2.5 py-0.5 rounded-full border border-caramel/30">
                {entry.badge}
              </span>
            )}
          </div>
          <div className="text-sm sm:text-base font-semibold text-caramel font-mono">
            {entry.role}
          </div>
        </div>

        <div className="flex flex-col sm:items-end gap-1">
          <span className="text-xs font-mono font-semibold px-3 py-1 rounded-md bg-caramel/10 text-coffee border border-caramel/25">
            {entry.period}
          </span>
          {entry.location && (
            <span className="text-xs text-coffee/70 font-sans">
              {entry.location}
            </span>
          )}
        </div>
      </div>

      {/* Short Description */}
      <p className="text-sm sm:text-base text-brownie/90 leading-relaxed">
        {entry.description}
      </p>

      {/* Key Contributions */}
      {entry.keyContributions.length > 0 && (
        <div className="space-y-2.5">
          <span className="text-xs font-mono uppercase tracking-wider text-coffee font-semibold block">
            Key Contributions & Systems Built:
          </span>
          <ul className="space-y-2">
            {entry.keyContributions.map((contrib, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-coffee/90 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-caramel mt-1.5 shrink-0" />
                <span>{contrib}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Technologies & Verified Links */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        {entry.technologies && entry.technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {entry.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-2.5 py-1 rounded-md bg-white border border-caramel/20 text-coffee"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {entry.links && entry.links.length > 0 && (
          <div className="flex items-center gap-3">
            {entry.links.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-caramel hover:text-caramel-dark hover:underline transition-colors"
              >
                <span>{link.label}</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

