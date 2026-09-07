import { NextResponse } from "next/server";
import dns from "node:dns";
import { githubConfig, GitHubConfig, ActivityCell } from "@/data/experienceData";

try {
  dns.setDefaultResultOrder("ipv4first");
} catch {
  // Ignore if not supported in environment
}

export const dynamic = "force-dynamic";

// In-memory cache for ultra-fast <1ms responses with zero lag
let memoryCache: any = null;
let lastFetchTime = 0;
let isRefreshing = false;
const CACHE_TTL_MS = 60 * 1000; // 60 seconds freshness

async function fetchFromGitHub(username: string) {
  // 1. Fetch user profile from GitHub API
  const userPromise = fetch(`https://api.github.com/users/${username}`, {
    headers: {
      "User-Agent": "BuildWithRajdeep-Portfolio",
      Accept: "application/vnd.github.v3+json",
    },
  });

  // 2. Fetch contribution calendar data
  const contribPromise = fetch(
    `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
    {
      headers: {
        "User-Agent": "BuildWithRajdeep-Portfolio",
      },
    }
  );

  const [userRes, contribRes] = await Promise.all([userPromise, contribPromise]);

  let publicRepos = githubConfig.repositories;
  if (userRes.ok) {
    const userData = await userRes.json();
    if (typeof userData.public_repos === "number") {
      publicRepos = userData.public_repos;
    }
  }

  if (!contribRes.ok) {
    throw new Error(`Contribution API error: ${contribRes.status}`);
  }

  const contribData = await contribRes.json();
  const rawContributions: { date: string; count: number; level: number }[] =
    contribData.contributions || [];

  const totalContributions =
    contribData.total?.lastYear ??
    rawContributions.reduce((sum, item) => sum + (item.count || 0), 0);

  // Calculate current streak from raw contributions
  let streak = 0;
  const sorted = [...rawContributions].sort((a, b) => b.date.localeCompare(a.date));

  let checking = true;
  let i = 0;
  // Allow today to be 0 if early in the day
  if (sorted[0] && sorted[0].count === 0) {
    i = 1;
  }

  while (checking && i < sorted.length) {
    if (sorted[i].count > 0) {
      streak++;
      i++;
    } else {
      checking = false;
    }
  }

  // Convert raw contributions into 52 weeks x 7 days structure
  const recentDays = rawContributions.slice(-364);
  const activityWeeks: { weekIndex: number; days: ActivityCell[] }[] = [];

  for (let w = 0; w < Math.floor(recentDays.length / 7); w++) {
    const days: ActivityCell[] = [];
    for (let d = 0; d < 7; d++) {
      const item = recentDays[w * 7 + d];
      if (item) {
        const dateObj = new Date(item.date);
        const dateStr = dateObj.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        });

        days.push({
          date: dateStr,
          count: item.count,
          level: (item.level as 0 | 1 | 2 | 3 | 4) || 0,
        });
      }
    }
    activityWeeks.push({ weekIndex: w, days });
  }

  const liveConfig: GitHubConfig & { isLive: boolean; lastSynced: string } = {
    username,
    profileUrl: githubConfig.profileUrl,
    totalContributions,
    streakMaintained: streak > 0 ? `${streak} Days` : "6 Days",
    repositories: publicRepos,
    pullRequests: 8,
    activityWeeks: activityWeeks.length > 0 ? activityWeeks : githubConfig.activityWeeks,
    isLive: true,
    lastSynced: new Date().toISOString(),
  };

  return liveConfig;
}

export async function GET() {
  const username = githubConfig.username;
  const now = Date.now();

  // If we already have fresh cached data, serve immediately with zero lag!
  if (memoryCache) {
    // If stale, refresh in background without blocking the user
    if (now - lastFetchTime > CACHE_TTL_MS && !isRefreshing) {
      isRefreshing = true;
      fetchFromGitHub(username)
        .then((fresh) => {
          memoryCache = fresh;
          lastFetchTime = Date.now();
        })
        .catch((e) => console.warn("Background GitHub refresh error:", e))
        .finally(() => {
          isRefreshing = false;
        });
    }

    return NextResponse.json(memoryCache, {
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
      },
    });
  }

  // Initial cold fetch
  try {
    const liveConfig = await fetchFromGitHub(username);
    memoryCache = liveConfig;
    lastFetchTime = now;

    return NextResponse.json(liveConfig, {
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
      },
    });
  } catch (err: any) {
    console.error("GitHub Live Fetch Error:", err?.message || err);
    // Graceful fallback to static configuration
    return NextResponse.json({
      ...githubConfig,
      isLive: false,
      lastSynced: new Date().toISOString(),
      fallback: true,
    });
  }
}
