import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rajdeep Bakliwal | Software Engineer building AI systems",
  description:
    "Software Engineer building AI systems, solving real-world problems, and bringing ideas and people together.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-cream text-brownie selection:bg-caramel selection:text-cream antialiased">
        {children}
      </body>
    </html>
  );
}

