"use client";

import { useState, useRef, MouseEvent } from "react";

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  platform?: string;
  date: string;
  category: string;
  url?: string;
  preview?: string | null;
}

interface InteractiveCertificationCardProps {
  cert: CertificateItem;
  index: number;
}

export default function InteractiveCertificationCard({
  cert,
  index,
}: InteractiveCertificationCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Subtle 3D perspective/tilt based on cursor position (limited to ~3-4 degrees max)
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -((y - centerY) / centerY) * 3.8;
    const rotateY = ((x - centerX) / centerX) * 3.8;

    setRotate({ x: rotateX, y: rotateY });
    setMousePos({ x, y });
  };

  const handleMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
    setIsHovered(true);
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      style={{
        perspective: 1000,
      }}
      className="h-full"
    >
      {/* 
        Interactive 3D Physical Credential Card:
        - Deep Brownie tactile surface
        - Dual directional shadow + inner bevel edge highlight
        - Smooth cursor tilt (+/- 3.8 deg)
        - Dynamic cursor light beam
        - Micro surface grain texture
      */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: isHovered
            ? `perspective(1000px) rotateX(${rotate.x.toFixed(2)}deg) rotateY(${rotate.y.toFixed(2)}deg) translateY(-6px)`
            : "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)",
          transformStyle: "preserve-3d",
          transition: isHovered
            ? "transform 100ms ease-out, box-shadow 300ms ease, border-color 300ms ease"
            : "transform 450ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 300ms ease, border-color 300ms ease",
        }}
        className={`group relative h-full rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-[#472319] via-brownie to-[#3d1d14] text-cream flex flex-col justify-between overflow-hidden select-none ${
          isHovered
            ? "border border-caramel/60 shadow-[0_20px_35px_-8px_rgba(71,35,25,0.38),0_8px_16px_-4px_rgba(71,35,25,0.22),inset_0_1px_1px_rgba(255,255,255,0.2)]"
            : "border border-caramel/30 shadow-[0_10px_24px_-4px_rgba(71,35,25,0.26),inset_0_1px_1px_rgba(255,255,255,0.12)]"
        }`}
      >
        {/* Subtle technical background grid watermark */}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(#C08552_1px,transparent_1px)] [background-size:16px_16px] opacity-10 z-0"
          aria-hidden="true"
        />

        {/* Extremely subtle physical surface grain/noise texture */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-[0.035] mix-blend-overlay z-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />

        {/* Soft cursor-following light reflection across card surface */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 z-0"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(280px circle at ${mousePos.x}px ${mousePos.y}px, rgba(243, 233, 220, 0.14), transparent 65%)`,
          }}
          aria-hidden="true"
        />

        {/* Layer 1: Top Bar with Category Badge & Date */}
        <div
          style={{
            transform: isHovered ? "translateZ(16px)" : "translateZ(0px)",
            transition: "transform 250ms ease",
          }}
          className="relative z-10 flex items-center justify-between gap-2 mb-4"
        >
          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-semibold uppercase tracking-wider text-caramel bg-caramel/15 px-2.5 py-0.5 rounded-full border border-caramel/30">
            <span className="w-1.5 h-1.5 rounded-full bg-caramel" />
            {cert.category}
          </span>
          <span className="text-[11px] font-mono text-cream/70 font-medium">
            {cert.date}
          </span>
        </div>

        {/* Layer 2: Main Credential Content (Issuer & Bold Title) */}
        <div
          style={{
            transform: isHovered ? "translateZ(22px)" : "translateZ(0px)",
            transition: "transform 250ms ease",
          }}
          className="relative z-10 space-y-2 mb-6 flex-1 flex flex-col justify-start"
        >
          <span className="text-xs font-mono font-medium text-caramel/90 tracking-wide uppercase">
            {cert.issuer}
            {cert.platform && (
              <span className="text-cream/50 normal-case ml-1.5 font-normal">
                via {cert.platform}
              </span>
            )}
          </span>
          <h3 className="text-base sm:text-lg font-bold text-cream tracking-tight leading-snug group-hover:text-caramel-light transition-colors">
            {cert.title}
          </h3>
        </div>

        {/* Layer 3: Bottom Action Row */}
        <div
          style={{
            transform: isHovered ? "translateZ(14px)" : "translateZ(0px)",
            transition: "transform 250ms ease",
          }}
          className="relative z-10 pt-3 border-t border-caramel/20 flex items-center justify-between"
        >
          {/* View Certificate Action (opens certificate on GitHub in new tab) */}
          <a
            href={cert.url || `https://github.com/rajdeep1211/buildwithrajdeep/blob/main/public/certificates/${cert.id}.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-caramel group-hover:text-caramel-light transition-colors focus:outline-none"
            aria-label={`View certificate for ${cert.title} on GitHub`}
          >
            <span>View Certificate</span>
            <svg
              className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-200"
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
          </a>

          <span className="text-[10px] font-mono text-cream/40 uppercase tracking-wider">
            #{cert.id}
          </span>
        </div>
      </div>
    </div>
  );
}
