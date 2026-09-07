"use client";

import { useState, useEffect, useCallback } from "react";
import { LeetCodeConfig, ActivityCell } from "@/data/experienceData";

interface LeetCodeDashboardProps {
  config: LeetCodeConfig;
}

export default function LeetCodeDashboard({ config: initialConfig }: LeetCodeDashboardProps) {
  const [data, setData] = useState<LeetCodeConfig>(initialConfig);
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
      const cached = sessionStorage.getItem("bwr_leetcode_live");
      if (cached) {
        const parsed = JSON.parse(cached);
        if (parsed?.problemsSolved !== undefined) {
          setData(parsed);
          setIsLive(true);
        }
      }
    } catch {}
  }, []);

  const fetchLiveLeetCode = useCallback(async (silent = false) => {
    if (!silent) setIsLoading(true);
    try {
      const res = await fetch("/api/leetcode");
      if (res.ok) {
        const liveData = await res.json();
        if (liveData && !liveData.fallback) {
          setData(liveData);
          setIsLive(true);
          setLastSynced(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
          try {
            sessionStorage.setItem("bwr_leetcode_live", JSON.stringify(liveData));
          } catch {}
        }
      }
    } catch (e) {
      console.warn("Could not fetch live LeetCode data, using fallback cache:", e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // 2. Fetch immediately on mount, and continuously sync in the background
  useEffect(() => {
    // Initial fetch
    fetchLiveLeetCode();

    // Periodic sync every 30 seconds
    const intervalId = setInterval(() => {
      fetchLiveLeetCode(true);
    }, 30000);

    // Continuous sync when user returns to tab / window
    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        fetchLiveLeetCode(true);
      }
    };
    const handleFocus = () => fetchLiveLeetCode(true);

    window.addEventListener("focus", handleFocus);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("focus", handleFocus);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [fetchLiveLeetCode]);

  const { easy, medium, hard } = data.difficulty;
  const totalSolved = data.problemsSolved;
  const totalAvailable = easy.total + medium.total + hard.total;

  const easyPercent = totalSolved > 0 ? Math.round((easy.solved / totalSolved) * 100) : 0;
  const mediumPercent = totalSolved > 0 ? Math.round((medium.solved / totalSolved) * 100) : 0;
  const hardPercent = totalSolved > 0 ? Math.round((hard.solved / totalSolved) * 100) : 0;

  // Day names for graph Y-axis
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
        className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-caramel/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-cream/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Header bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-6 sm:pb-8 border-b border-caramel/20">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-caramel/15 border border-caramel/35 text-caramel text-xs font-mono font-semibold uppercase tracking-wider shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-caramel animate-pulse" />
            LeetCode
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
          {data.acceptanceRate && (
            <span>
              Acceptance: <span className="text-caramel font-semibold">{data.acceptanceRate}</span>
            </span>
          )}
          {data.ranking && (
            <>
              <span className="text-cream/20">•</span>
              <span>
                Rank: <span className="text-cream font-semibold">{data.ranking}</span>
              </span>
            </>
          )}

          {/* Refresh button */}
          <button
            onClick={() => fetchLiveLeetCode()}
            disabled={isLoading}
            title="Refresh live data from LeetCode"
            aria-label="Refresh live data from LeetCode"
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

      {/* Main Grid: Left side stats + Right side activity graph */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pt-6 sm:pt-8 items-start">
        {/* Left Side: Overview & Difficulty Breakdown */}
        <div className="lg:col-span-5 space-y-6">
          {/* Top Numbers */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-brownie-dark/40 border border-caramel/25 shadow-inner">
              <span className="text-xs font-mono text-cream/60 uppercase tracking-wider block">
                Problems Solved
              </span>
              <div className="text-3xl sm:text-4xl font-bold font-mono text-cream mt-1 tracking-tight">
                {totalSolved}
                <span className="text-sm font-normal text-cream/40 ml-1">
                  / {totalAvailable}
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-brownie-dark/40 border border-caramel/25 shadow-inner">
              <span className="text-xs font-mono text-cream/60 uppercase tracking-wider block">
                Streak Maintained
              </span>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-caramel mt-1 flex items-center gap-1.5">
                <svg className="w-5 h-5 fill-current text-caramel shrink-0" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.316.492-.474.968-.567 1.341a9.23 9.23 0 01-.137.494c-.16.536-.312.986-.532 1.36-.206.353-.464.636-.807.828a3.992 3.992 0 01-1.28.455c-.24.047-.468.084-.664.123-.23.045-.44.095-.62.164a3.844 3.844 0 00-1.393.918A4.042 4.042 0 003.5 11.5c0 1.256.52 2.404 1.366 3.23.85.83 2.01 1.332 3.284 1.332 1.32 0 2.518-.535 3.385-1.402A4.985 4.985 0 0013 11.13c0-.986-.29-1.9-.798-2.673a5.98 5.98 0 01-.734-1.559c-.198-.673-.284-1.355-.262-1.956.02-.544.135-1.077.34-1.565.17-.406.402-.75.666-1.03a1 1 0 00.183-.794z" clipRule="evenodd" />
                </svg>
                <span>{data.streakMaintained}</span>
              </div>
            </div>
          </div>

          {/* Difficulty Segmented Bar */}
          <div className="p-5 rounded-xl bg-brownie-dark/40 border border-caramel/25 shadow-inner space-y-4">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-cream/80 font-semibold uppercase tracking-wider">
                Difficulty Breakdown
              </span>
              <span className="text-caramel font-mono font-medium">
                {totalAvailable > 0 ? ((totalSolved / totalAvailable) * 100).toFixed(1) : 0}% of LeetCode
              </span>
            </div>

            {/* Composite Progress Bar */}
            <div className="w-full h-3 rounded-full bg-brownie-dark/80 border border-caramel/20 overflow-hidden flex p-0.5 gap-1">
              <div
                style={{ width: `${Math.max(easyPercent, easy.solved > 0 ? 3 : 0)}%` }}
                className="h-full rounded-full bg-caramel-light transition-all duration-500"
                title={`Easy: ${easy.solved}`}
              />
              <div
                style={{ width: `${Math.max(mediumPercent, medium.solved > 0 ? 3 : 0)}%` }}
                className="h-full rounded-full bg-caramel transition-all duration-500"
                title={`Medium: ${medium.solved}`}
              />
              <div
                style={{ width: `${Math.max(hardPercent, hard.solved > 0 ? 3 : 0)}%` }}
                className="h-full rounded-full bg-coffee-light transition-all duration-500"
                title={`Hard: ${hard.solved}`}
              />
            </div>

            {/* Difficulty Level List */}
            <div className="space-y-2.5 pt-1">
              {/* Easy */}
              <div className="flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-caramel-light" />
                  <span className="text-cream/90 font-medium">Easy</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cream font-bold">{easy.solved}</span>
                  <span className="text-cream/40">/ {easy.total}</span>
                  <span className="text-[10px] text-caramel-light w-9 text-right font-medium">
                    {easy.total > 0 ? ((easy.solved / easy.total) * 100).toFixed(1) : 0}%
                  </span>
                </div>
              </div>

              {/* Medium */}
              <div className="flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-caramel" />
                  <span className="text-cream/90 font-medium">Medium</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cream font-bold">{medium.solved}</span>
                  <span className="text-cream/40">/ {medium.total}</span>
                  <span className="text-[10px] text-caramel w-9 text-right font-medium">
                    {medium.total > 0 ? ((medium.solved / medium.total) * 100).toFixed(1) : 0}%
                  </span>
                </div>
              </div>

              {/* Hard */}
              <div className="flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-coffee-light" />
                  <span className="text-cream/90 font-medium">Hard</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cream font-bold">{hard.solved}</span>
                  <span className="text-cream/40">/ {hard.total}</span>
                  <span className="text-[10px] text-caramel-dark w-9 text-right font-medium">
                    {hard.total > 0 ? ((hard.solved / hard.total) * 100).toFixed(1) : 0}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Activity / Question Graph */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-cream/80 uppercase tracking-wider">
                Question Activity Graph
              </span>
              <span className="text-[11px] font-mono text-cream/50">
                Past 32 Weeks
              </span>
            </div>

            {/* Scrollable Graph Container on mobile, full display on desktop */}
            <div className="p-4 sm:p-5 rounded-xl bg-brownie-dark/40 border border-caramel/25 shadow-inner overflow-x-auto">
              <div className="min-w-[500px]">
                <div className="flex gap-1.5 items-start">
                  {/* Y-Axis Day labels */}
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

                  {/* Weeks columns */}
                  <div className="flex gap-1.5">
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
                <div className="flex items-center justify-end gap-2 pt-4 mt-2 border-t border-caramel/15 text-[11px] font-mono text-cream/50">
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

          {/* Centered / Bottom Neumorphic CTA & ID */}
          <div className="pt-2 flex flex-col items-center justify-center text-center space-y-2">
            <a
              href={data.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-mono text-xs font-semibold text-cream bg-gradient-to-b from-brownie-dark to-[#381a13] border border-caramel/35 shadow-[4px_4px_10px_rgba(0,0,0,0.4),-2px_-2px_6px_rgba(255,255,255,0.06),inset_0_1px_0_rgba(255,255,255,0.15)] hover:bg-caramel hover:text-brownie-dark hover:border-caramel active:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.5)] active:translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <span>View LeetCode</span>
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
        </div>
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
              ? `${hoveredCell.cell.count} ${hoveredCell.cell.count === 1 ? "problem" : "problems"} solved`
              : "No questions recorded"}
          </div>
          <div className="text-[10px] text-cream/60">{hoveredCell.cell.date}</div>
        </div>
      )}
    </div>
  );
}
