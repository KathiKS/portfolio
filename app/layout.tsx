import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Karthikeyan | Portfolio",
  description:
    "Portfolio of Karthikeyan - AI & DS Student, Developer, Cloud Enthusiast, and Problem Solver.",
  keywords: [
    "Karthikeyan",
    "Portfolio",
    "AI",
    "Data Science",
    "Java",
    "Python",
    "AWS",
    "Azure",
    "Web Developer",
  ],
  authors: [{ name: "Karthikeyan" }],
  creator: "Karthikeyan",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Karthikeyan | Portfolio",
    description:
      "Building technology that solves problems, creates value, and inspires innovation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}