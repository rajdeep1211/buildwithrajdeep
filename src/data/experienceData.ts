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
  period?: string;
  projectType?: string;
  subtitle?: string;
  location?: string;
  badge?: string;
  description?: string;
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
    entries: [
      {
        id: "era-nexus-international-school",
        company: "ERA NEXUS INTERNATIONAL SCHOOL",
        role: "Tech Support Intern",
        period: "January 2026 — June 2026",
        description:
          "Supported the school's day-to-day technology operations while contributing to the development of its digital presence.",
        keyContributions: [
          "Resolved day-to-day technical issues across school systems and devices.",
          "Contributed to the development of the school's official website.",
          "Improved the reliability and usability of technology used by staff and students.",
          "Assisted with system setup, troubleshooting, and ongoing IT operations.",
          "Worked directly with staff to turn technical requirements into practical solutions.",
        ],
        technologies: [
          "Tech Support",
          "Website Development",
          "IT Operations",
          "Troubleshooting",
        ],
      },
    ],
  },
  {
    id: "micro-internships",
    title: "Micro Internships",
    subtitle: "Short-term targeted technical sprints, industry simulations, and modular engineering sprints.",
    emptyStateMessage:
      "No external micro-internships on record. Actively participating in agile open-source project sprints and collaborative technical builds.",
    entries: [
      {
        id: "tata-iq-virtual-internship",
        company: "Tata iQ (via Forage)",
        role: "Data Analytics & AI Virtual Intern",
        period: "September 2026",
        location: "Remote",
        badge: "Virtual Experience",
        keyContributions: [
          "Conducted exploratory data analysis on a **150,000+ record financial dataset**, identifying credit utilization and payment delays as key delinquency indicators.",
          "Designed a **predictive modeling approach** using classification techniques, data imputation, class-imbalance handling, and evaluation metrics such as AUC-ROC, Recall, and F1-score.",
          "Designed an **agentic AI collections framework** with dynamic risk tiering, real-time data inputs, and automated omnichannel intervention strategies.",
          "Incorporated **Responsible AI principles**, including model explainability, fairness monitoring, and compliance considerations.",
        ],
        technologies: [
          "Data Analytics",
          "Predictive Modeling",
          "Agentic AI",
          "Responsible AI",
        ],
        links: [
          {
            label: "View Certificate",
            url: "/certificates/tata-iq-genai-data-analytics.pdf",
            type: "certificate",
          },
        ],
      },
    ],
  },
  {
    id: "volunteering",
    title: "Volunteering",
    subtitle: "Technical leadership, engineering community building, and hackathon organization.",
    entries: [
      {
        id: "phi-research-club",
        company: "PHI Research Club",
        role: "Senior Event Head & Coordinator",
        period: "2025",
        description:
          "Served as Senior Event Head & Coordinator at PHI Research Club, contributing to the planning, coordination, and execution of student-focused technical and research-oriented events.",
        keyContributions: [
          "Coordinated events and activities involving students and club members.",
          "Managed event planning, coordination, and execution.",
          "Worked with teams to organize technical and research-focused initiatives.",
          "Helped create an engaging environment for students to collaborate, learn, and participate.",
          "Coordinated responsibilities across teams to ensure smooth event execution.",
        ],
        technologies: [
          "Event Coordination",
          "Technical Events",
          "Team Management",
          "Research Community",
        ],
      },
      {
        id: "ieee-aess",
        company: "IEEE Aerospace and Electronic Systems Society (AESS)",
        role: "Event Head",
        period: "2023 — 2024",
        location: "Manipal University Jaipur, India",
        description:
          "Worked as Event Head at IEEE AESS, contributing to the organization and execution of technical events, workshops, and student engineering activities.",
        keyContributions: [
          "Organized and coordinated technical events and engineering activities.",
          "Managed event planning, logistics, and execution.",
          "Coordinated with student teams and faculty during events.",
          "Supported technical workshops and student-focused engineering initiatives.",
          "Helped create opportunities for students to collaborate and explore engineering concepts.",
        ],
        technologies: [
          "Event Leadership",
          "Technical Events",
          "Team Coordination",
          "Engineering Community",
        ],
      },
      {
        id: "social-life",
        company: "Social Life",
        role: "Founder & CEO",
        badge: "Community Initiative",
        projectType: "Community Initiative",
        subtitle: "Community Builder",
        description:
          "Founded Social Life as a community initiative designed to bring strangers together through shared experiences, short trips, workshops, and social gatherings — creating a space where people can meet, connect, and build genuine friendships.",
        keyContributions: [
          "Founded and led a community focused on meaningful social connections.",
          "Organized short trips and experiences designed to bring new people together.",
          "Created opportunities for strangers to meet, interact, and build friendships.",
          "Planned small workshops and community activities around shared interests.",
          "Organized social gatherings and parties to encourage interaction in a relaxed environment.",
          "Managed the concept, community experience, planning, and overall direction of the initiative.",
        ],
        technologies: [
          "Community Building",
          "Founder",
          "Event Management",
          "Social Experiences",
        ],
        links: [
          {
            label: "Instagram",
            url: "https://www.instagram.com/sociallife.in/",
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
    entries: [
      {
        id: "uniform-shop-erp",
        company: "UNIFORM SHOP ERP",
        role: "Full-Stack Developer",
        projectType: "Freelance / Client Project",
        subtitle: "Freelance · Full-Stack Development",
        description:
          "A custom ERP system built for a uniform shop to streamline and centralize day-to-day business operations, including inventory, orders, customers, and sales workflows.",
        keyContributions: [
          "Inventory Management — managing uniform stock and availability.",
          "Order Management — handling and organizing customer orders.",
          "Customer Management — maintaining customer information and records.",
          "Sales Workflow — streamlining day-to-day sales operations.",
          "ERP Operations — bringing core shop operations into one centralized system.",
          "Client Customization — building the system around the client's actual business workflow and requirements.",
        ],
      },
    ],
  },
];

