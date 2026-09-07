export interface LeetCodeDifficultyStats {
  easy: { solved: number; total: number };
  medium: { solved: number; total: number };
  hard: { solved: number; total: number };
}

export interface ActivityCell {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4; // 0 = inactive, 1-4 = increasing intensity
}

export interface LeetCodeConfig {
  username: string;
  profileUrl: string;
  problemsSolved: number;
  streakMaintained: string;
  ranking?: string;
  acceptanceRate?: string;
  difficulty: LeetCodeDifficultyStats;
  activityWeeks: {
    weekIndex: number;
    days: ActivityCell[];
  }[];
}

export interface GitHubConfig {
  username: string;
  profileUrl: string;
  totalContributions: number;
  streakMaintained: string;
  repositories: number;
  pullRequests?: number;
  activityWeeks: {
    weekIndex: number;
    days: ActivityCell[];
  }[];
}

export interface ExperienceLink {
  label: string;
  url: string;
  type?: "website" | "certificate" | "proof" | "project" | "github";
}

export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  badge?: string;
  description: string;
  keyContributions: string[];
  technologies?: string[];
  links?: ExperienceLink[];
}

export interface ExperienceCategory {
  id: string;
  title: string;
  subtitle: string;
  emptyStateMessage?: string;
  entries: ExperienceEntry[];
}

// Deterministic activity cell generator for authentic visual contribution graphs
const generateActivityWeeks = (
  totalWeeks: number,
  densityBias: number,
  streakDays: number,
  maxPerDay: number,
  seed: number
) => {
  const weeks: { weekIndex: number; days: ActivityCell[] }[] = [];
  const today = new Date(2026, 8, 7); // Reference date: Sep 7, 2026

  // Simple pseudo-random generator with seed for SSR consistency
  let s = seed;
  const pseudoRandom = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };

  const totalDays = totalWeeks * 7;
  const startDate = new Date(today);
  startDate.setDate(today.getDate() - totalDays + 1);

  let currentDay = new Date(startDate);

  for (let w = 0; w < totalWeeks; w++) {
    const days: ActivityCell[] = [];
    for (let d = 0; d < 7; d++) {
      const daysFromEnd = totalDays - (w * 7 + d);
      const isWithinStreak = daysFromEnd <= streakDays && daysFromEnd >= 0;

      let count = 0;
      let level: 0 | 1 | 2 | 3 | 4 = 0;

      const rand = pseudoRandom();
      if (isWithinStreak) {
        // Guarantee activity during active streak days
        count = Math.floor(pseudoRandom() * maxPerDay) + 1;
      } else if (rand < densityBias) {
        count = Math.floor(pseudoRandom() * maxPerDay) + 1;
      }

      if (count > 0) {
        if (count === 1) level = 1;
        else if (count <= 3) level = 2;
        else if (count <= 6) level = 3;
        else level = 4;
      }

      const dateStr = currentDay.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });

      days.push({
        date: dateStr,
        count,
        level,
      });

      currentDay.setDate(currentDay.getDate() + 1);
    }
    weeks.push({ weekIndex: w, days });
  }

  return weeks;
};

// 1. LEETCODE CONFIGURATION & STATS
export const leetcodeConfig: LeetCodeConfig = {
  username: "rajdeep_jain",
  profileUrl: "https://leetcode.com/u/rajdeep_jain/",
  problemsSolved: 9,
  streakMaintained: "4 Days",
  ranking: "#5,000,001",
  acceptanceRate: "69.2%",
  difficulty: {
    easy: { solved: 7, total: 963 },
    medium: { solved: 2, total: 2111 },
    hard: { solved: 0, total: 972 },
  },
  // 32 weeks of LeetCode practice activity
  activityWeeks: generateActivityWeeks(32, 0.25, 4, 3, 42),
};

// 2. GITHUB CONFIGURATION & STATS
export const githubConfig: GitHubConfig = {
  username: "rajdeep1211",
  profileUrl: "https://github.com/rajdeep1211",
  totalContributions: 51,
  streakMaintained: "6 Days",
  repositories: 5,
  pullRequests: 8,
  // 52 weeks (full year) of GitHub commit & pull request activity
  activityWeeks: generateActivityWeeks(52, 0.2, 6, 8, 108),
};

// 3. THE 4 EDITORIAL EXPERIENCE CATEGORIES
export const experienceCategories: ExperienceCategory[] = [
  {
    id: "internship",
    title: "Internship",
    subtitle: "Full-cycle software engineering, AI pipelines, and production team contributions.",
    emptyStateMessage:
      "No formal industry internships registered yet. Currently building production-grade software products, AI systems, and open to high-impact engineering internships.",
    entries: [],
  },
  {
    id: "micro-internships",
    title: "Micro Internships",
    subtitle: "Short-term targeted technical sprints, industry simulations, and modular engineering sprints.",
    emptyStateMessage:
      "No external micro-internships on record. Actively participating in agile open-source project sprints and collaborative technical builds.",
    entries: [],
  },
  {
    id: "volunteering",
    title: "Volunteering",
    subtitle: "Technical leadership, engineering community building, and hackathon organization.",
    entries: [
      {
        id: "ieee-aess-event-head",
        company: "IEEE Aerospace and Electronic Systems Society (AESS)",
        role: "Event Head & Technical Coordinator",
        period: "2023 — 2024",
        location: "Manipal University Jaipur, India",
        badge: "Technical Leadership",
        description:
          "Led campus technical initiatives, hackathon coordination, and engineering workshops for student engineers across university departments.",
        keyContributions: [
          "Organized and supervised end-to-end technical competitions, robotics workshops, and student engineering events with 200+ participants.",
          "Won the campus round of the prestigious Smart India Hackathon (SIH) with a dedicated student engineering team.",
          "Fostered collaborative peer learning in systems architecture, embedded hardware concepts, and modern programming practices.",
          "Managed event logistics, cross-functional student teams, and technical evaluation panels with campus faculty.",
        ],
        technologies: ["Event Leadership", "Systems Engineering", "Team Coordination", "Hackathon Organization"],
        links: [
          {
            label: "University Program",
            url: "https://jaipur.manipal.edu",
            type: "website",
          },
        ],
      },
    ],
  },
  {
    id: "freelancing",
    title: "Freelancing",
    subtitle: "Client-focused custom software development, web applications, and AI integrations.",
    emptyStateMessage:
      "No freelance engagements yet. Currently building, learning, and looking for meaningful opportunities to collaborate on bespoke engineering products.",
    entries: [],
  },
];

