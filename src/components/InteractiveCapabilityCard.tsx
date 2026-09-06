"use client";

import { useState, useRef, MouseEvent, ReactNode } from "react";

export interface CapabilityItem {
  title: string;
  description: string;
  icon: ReactNode;
}

interface InteractiveCapabilityCardProps {
  item: CapabilityItem;
  index: number;
  isVisible: boolean;
}

export default function InteractiveCapabilityCard({
  item,
  index,
  isVisible,
}: InteractiveCapabilityCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // (1) Subtle 3D perspective/tilt based on cursor position (limited to ~3-4 degrees)
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Constrained to +/- 3.8 degrees max for subtle, premium physical movement
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
    // (6) Gentle staggered fade + upward movement on scroll into viewport
    <div
      style={{
        transitionDelay: `${index * 85}ms`,
        perspective: 1000,
      }}
      className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-7 pointer-events-none"
      }`}
    >
      {/* 
        Interactive Card Shell:
        - Default state: light card background (bg-cream-dark/30) and dark text (text-brownie)
        - Hover state: smoothly transitions to dark card background (bg-brownie) and light text (text-cream)
        - 3D tilt, 8px hover lift, soft deep shadow, and surface grain preserved
      */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: isHovered
            ? `perspective(1000px) rotateX(${rotate.x.toFixed(2)}deg) rotateY(${rotate.y.toFixed(2)}deg) translateY(-8px)`
            : "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)",
          transformStyle: "preserve-3d",
          transition: isHovered
            ? "transform 100ms ease-out, box-shadow 350ms ease, background-color 350ms ease, border-color 350ms ease"
            : "transform 500ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 350ms ease, background-color 350ms ease, border-color 350ms ease",
        }}
        className={`group relative overflow-hidden rounded-3xl p-7 sm:p-8 space-y-5 flex flex-col justify-between select-none ${
          isHovered
            ? "bg-brownie border border-caramel/50 shadow-[0_22px_40px_-10px_rgba(71,35,25,0.32),0_8px_16px_-6px_rgba(71,35,25,0.20)]"
            : "bg-cream-dark/30 border border-caramel/25 shadow-xs"
        }`}
      >
        {/* (8) Extremely subtle physical surface grain/noise texture */}
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl opacity-[0.035] mix-blend-overlay z-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />

        {/* (2) & (5) Soft cursor-following light reflection across the card surface */}
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-350 z-0"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(360px circle at ${mousePos.x}px ${mousePos.y}px, rgba(243, 233, 220, 0.16), transparent 65%)`,
          }}
          aria-hidden="true"
        />

        {/* Card Content with (3) Layered 3D Elevation */}
        <div className="space-y-4 relative z-10">
          {/* (4) Icon badge subtly pops and lifts on hover with color transition */}
          <div
            style={{
              transform: isHovered ? "translateZ(26px)" : "translateZ(0px)",
              transition: "transform 300ms ease",
            }}
          >
            <div
              className={`w-11 h-11 rounded-2xl flex items-center justify-center shadow-2xs transition-all duration-350 group-hover:-translate-y-1 group-hover:scale-105 group-hover:shadow-xs ${
                isHovered
                  ? "bg-brownie-dark border border-caramel/40 text-cream"
                  : "bg-cream border border-caramel/25 text-caramel"
              }`}
            >
              {item.icon}
            </div>
          </div>

          {/* Heading elevated in 3D with smooth color transition */}
          <div
            style={{
              transform: isHovered ? "translateZ(18px)" : "translateZ(0px)",
              transition: "transform 300ms ease",
            }}
          >
            <h3
              className={`text-xl font-bold tracking-tight transition-colors duration-350 ${
                isHovered ? "text-cream" : "text-brownie"
              }`}
            >
              {item.title}
            </h3>
          </div>

          {/* Description elevated in 3D with smooth color transition */}
          <div
            style={{
              transform: isHovered ? "translateZ(12px)" : "translateZ(0px)",
              transition: "transform 300ms ease",
            }}
          >
            <p
              className={`text-sm leading-relaxed transition-colors duration-350 ${
                isHovered ? "text-cream/85" : "text-brownie/85"
              }`}
            >
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
