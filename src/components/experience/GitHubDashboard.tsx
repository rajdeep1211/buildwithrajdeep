"use client";

import { useState, useEffect, useCallback } from "react";
import { GitHubConfig, ActivityCell } from "@/data/experienceData";

interface GitHubDashboardProps {
  config: GitHubConfig;
}

export default function GitHubDashboard({ config: initialConfig }: GitHubDashboardProps) {
  const [data, setData] = useState<GitHubConfig>(initialConfig);
  const [isLive, setIsLive] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [lastSynced, setLastSynced] = useState<string | null>(null);

  const [hoveredCell, setHoveredCell] = useState<{
    cell: ActivityCell;
    x: number;
    y: number;
  } | null>(null);

  // 1. Restore from client-side warm cache on mount with 0ms lag
  useEffect(() => {
    try {
      const cached = sessionStorage.getItem("bwr_github_live");
      if (cached) {
        const parsed = JSON.parse(cached);
        if (parsed?.totalContributions !== undefined) {
          setData(parsed);
          setIsLive(true);
        }
      }
    } catch {}
  }, []);

  const fetchLiveGitHub = useCallback(async (silent = false) => {
    if (!silent) setIsLoading(true);
    try {
      const res = await fetch("/api/github");
      if (res.ok) {
        const liveData = await res.json();
        if (liveData && !liveData.fallback) {
          setData(liveData);
          setIsLive(true);
          setLastSynced(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
          try {
            sessionStorage.setItem("bwr_github_live", JSON.stringify(liveData));
          } catch {}
        }
      }
    } catch (e) {
      console.warn("Could not fetch live GitHub data, using fallback cache:", e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // 2. Fetch immediately on mount, and continuously sync in the background
  useEffect(() => {
    // Initial fetch
    fetchLiveGitHub();

    // Periodic sync every 30 seconds
    const intervalId = setInterval(() => {
      fetchLiveGitHub(true);
    }, 30000);

    // Continuous sync when user returns to tab / window
    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        fetchLiveGitHub(true);
      }
    };
    const handleFocus = () => fetchLiveGitHub(true);

    window.addEventListener("focus", handleFocus);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("focus", handleFocus);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [fetchLiveGitHub]);

  // Month names for the 52-week horizontal timeline
  const months = [
    "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"
  ];
  const dayLabels = ["", "Mon", "", "Wed", "", "Fri", ""];

  return (
    <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#472319] via-brownie to-[#3d1d14] border border-caramel/30 p-6 sm:p-8 lg:p-10 shadow-[0_16px_36px_-8px_rgba(71,35,25,0.38),inset_0_1px_1px_rgba(255,255,255,0.12)] overflow-hidden text-cream">
      {/* Subtle technical background grid watermark */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#C08552_1px,transparent_1px)] [background-size:16px_16px] opacity-10 z-0"
        aria-hidden="true"
      />

      {/* Surface noise grain texture */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl sm:rounded-3xl opacity-[0.035] mix-blend-overlay z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      {/* Ambient warm light flares */}
      <div
        className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-caramel/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-cream/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Header bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-6 sm:pb-8 border-b border-caramel/20">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-caramel/15 border border-caramel/35 text-caramel text-xs font-mono font-semibold uppercase tracking-wider shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-caramel animate-pulse" />
            GitHub
          </span>

          {/* Live Sync Status Indicator */}
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brownie-dark/70 border border-caramel/25 text-[11px] font-mono">
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                isLive ? "bg-caramel-light animate-ping" : "bg-caramel/60"
              }`}
            />
            <span className={isLive ? "text-caramel-light font-semibold" : "text-cream/60"}>
              {isLive ? "LIVE SYNC" : isLoading ? "SYNCING..." : "CACHED"}
            </span>
            {lastSynced && (
              <span className="text-cream/40 hidden sm:inline-block">
                • {lastSynced}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono text-cream/70">
          {data.pullRequests !== undefined && (
            <span>
              PRs: <span className="text-caramel font-semibold">{data.pullRequests}</span>
            </span>
          )}
          <span className="text-cream/20">•</span>
          <span>Verified Commits</span>

          {/* Refresh button */}
          <button
            onClick={() => fetchLiveGitHub()}
            disabled={isLoading}
            title="Refresh live data from GitHub"
            aria-label="Refresh live data from GitHub"
            className="p-1.5 rounded-md hover:bg-white/10 text-cream/70 hover:text-caramel transition-colors cursor-pointer disabled:opacity-40"
          >
            <svg
              className={`w-3.5 h-3.5 ${isLoading ? "animate-spin text-caramel" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Key Metric Highlights Row */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-4 py-6 sm:py-8">
        {/* Total Contributions */}
        <div className="p-4 sm:p-5 rounded-xl bg-brownie-dark/40 border border-caramel/25 shadow-inner">
          <span className="text-xs font-mono text-cream/60 uppercase tracking-wider block">
            Total Contributions
          </span>
          <div className="text-3xl sm:text-4xl font-bold font-mono text-cream mt-1 tracking-tight">
            {data.totalContributions.toLocaleString()}
            <span className="text-sm font-normal text-caramel ml-1.5 font-sans">
              in past year
            </span>
          </div>
        </div>

        {/* Streak Maintained */}
        <div className="p-4 sm:p-5 rounded-xl bg-brownie-dark/40 border border-caramel/25 shadow-inner">
          <span className="text-xs font-mono text-cream/60 uppercase tracking-wider block">
            Streak Maintained
          </span>
          <div className="text-3xl sm:text-4xl font-bold font-mono text-caramel mt-1 flex items-center gap-2">
            <svg className="w-6 h-6 fill-current text-caramel shrink-0" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.316.492-.474.968-.567 1.341a9.23 9.23 0 01-.137.494c-.16.536-.312.986-.532 1.36-.206.353-.464.636-.807.828a3.992 3.992 0 01-1.28.455c-.24.047-.468.084-.664.123-.23.045-.44.095-.62.164a3.844 3.844 0 00-1.393.918A4.042 4.042 0 003.5 11.5c0 1.256.52 2.404 1.366 3.23.85.83 2.01 1.332 3.284 1.332 1.32 0 2.518-.535 3.385-1.402A4.985 4.985 0 0013 11.13c0-.986-.29-1.9-.798-2.673a5.98 5.98 0 01-.734-1.559c-.198-.673-.284-1.355-.262-1.956.02-.544.135-1.077.34-1.565.17-.406.402-.75.666-1.03a1 1 0 00.183-.794z" clipRule="evenodd" />
            </svg>
            <span>{data.streakMaintained}</span>
          </div>
        </div>

        {/* Repositories */}
        <div className="p-4 sm:p-5 rounded-xl bg-brownie-dark/40 border border-caramel/25 shadow-inner">
          <span className="text-xs font-mono text-cream/60 uppercase tracking-wider block">
            Public Repositories
          </span>
          <div className="text-3xl sm:text-4xl font-bold font-mono text-cream mt-1 tracking-tight">
            {data.repositories}
            <span className="text-sm font-normal text-cream/40 ml-1.5 font-sans">
              repositories
            </span>
          </div>
        </div>
      </div>

      {/* Main Visual Element: The GitHub Contribution Graph */}
      <div className="relative z-10 space-y-3 pt-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono text-cream/80 uppercase tracking-wider">
            Contribution Activity Graph (Past 52 Weeks)
          </span>
          <span className="text-[11px] font-mono text-cream/50 hidden sm:inline-block">
            Continuous delivery & open collaboration
          </span>
        </div>

        {/* Scrollable Container on smaller screens */}
        <div className="p-4 sm:p-6 rounded-xl bg-brownie-dark/40 border border-caramel/25 shadow-inner overflow-x-auto">
          <div className="min-w-[760px]">
            {/* Month labels header */}
            <div className="flex justify-between pl-8 pr-2 pb-2 text-[10px] font-mono text-cream/50 select-none">
              {months.map((m, i) => (
                <span key={i}>{m}</span>
              ))}
            </div>

            {/* Grid display */}
            <div className="flex gap-1.5 items-start">
              {/* Day of Week Labels */}
              <div className="flex flex-col gap-1.5 pr-2 select-none">
                {dayLabels.map((lbl, idx) => (
                  <span
                    key={idx}
                    className="text-[9px] font-mono text-cream/40 h-[12px] leading-[12px]"
                  >
                    {lbl}
                  </span>
                ))}
              </div>

              {/* 52 Columns */}
              <div className="flex gap-1.5 flex-1 justify-between">
                {data.activityWeeks.map((week) => (
                  <div key={week.weekIndex} className="flex flex-col gap-1.5">
                    {week.days.map((day, dIdx) => {
                      const getIntensityClass = (lvl: number) => {
                        switch (lvl) {
                          case 1:
                            return "bg-caramel/25 border border-caramel/35 hover:border-caramel";
                          case 2:
                            return "bg-caramel/55 border border-caramel/60 hover:border-caramel-light";
                          case 3:
                            return "bg-caramel border border-caramel-light/70 shadow-[0_0_6px_rgba(192,133,82,0.35)] hover:border-cream";
                          case 4:
                            return "bg-cream-light border border-cream shadow-[0_0_10px_rgba(243,233,220,0.5)] hover:scale-125";
                          default:
                            return "bg-white/[0.04] border border-white/[0.03] hover:border-caramel/40";
                        }
                      };

                      return (
                        <div
                          key={dIdx}
                          onMouseEnter={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            setHoveredCell({
                              cell: day,
                              x: rect.left + rect.width / 2,
                              y: rect.top,
                            });
                          }}
                          onMouseLeave={() => setHoveredCell(null)}
                          className={`w-[12px] h-[12px] rounded-[3px] transition-transform duration-150 cursor-pointer ${getIntensityClass(
                            day.level
                          )}`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            {/* Legend */}
            <div className="flex items-center justify-between pt-4 mt-3 border-t border-caramel/15 text-[11px] font-mono text-cream/50">
              <span className="text-[10px] text-cream/40">
                Calculated directly from verified public commits
              </span>
              <div className="flex items-center gap-2">
                <span>Less</span>
                <span className="w-[10px] h-[10px] rounded-[2px] bg-white/[0.04] border border-white/[0.03]" />
                <span className="w-[10px] h-[10px] rounded-[2px] bg-caramel/25 border border-caramel/35" />
                <span className="w-[10px] h-[10px] rounded-[2px] bg-caramel/55 border border-caramel/60" />
                <span className="w-[10px] h-[10px] rounded-[2px] bg-caramel" />
                <span className="w-[10px] h-[10px] rounded-[2px] bg-cream-light border border-cream shadow-[0_0_6px_rgba(243,233,220,0.4)]" />
                <span>More</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Centered / Bottom Neumorphic CTA & ID */}
      <div className="relative z-10 pt-8 flex flex-col items-center justify-center text-center space-y-2">
        <a
          href={data.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-mono text-xs font-semibold text-cream bg-gradient-to-b from-brownie-dark to-[#381a13] border border-caramel/35 shadow-[4px_4px_10px_rgba(0,0,0,0.4),-2px_-2px_6px_rgba(255,255,255,0.06),inset_0_1px_0_rgba(255,255,255,0.15)] hover:bg-caramel hover:text-brownie-dark hover:border-caramel active:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.5)] active:translate-y-0.5 transition-all duration-200 cursor-pointer"
        >
          <span>View GitHub</span>
          <span className="w-1.5 h-1.5 rounded-[1px] bg-caramel group-hover:bg-brownie-dark" />
          <svg
            className="w-3.5 h-3.5 text-caramel group-hover:text-brownie-dark transition-colors transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
        <span className="text-[11px] font-mono text-cream/50">
          @{data.username}
        </span>
      </div>

      {/* Floating Hover Tooltip */}
      {hoveredCell && (
        <div
          style={{
            position: "fixed",
            left: `${hoveredCell.x}px`,
            top: `${hoveredCell.y - 10}px`,
            transform: "translate(-50%, -100%)",
          }}
          className="pointer-events-none z-50 px-2.5 py-1.5 rounded-lg bg-brownie-dark border border-caramel/40 shadow-xl backdrop-blur-md text-[11px] font-mono text-cream whitespace-nowrap animate-fade-in"
        >
          <div className="font-bold text-caramel-light">
            {hoveredCell.cell.count > 0
              ? `${hoveredCell.cell.count} ${hoveredCell.cell.count === 1 ? "contribution" : "contributions"}`
              : "No contributions"}
          </div>
          <div className="text-[10px] text-cream/60">{hoveredCell.cell.date}</div>
        </div>
      )}
    </div>
  );
}
