import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { getExperienceSummary } from "@/lib/experience";

const inter = Inter({ subsets: ["latin"] });

const experienceYears = getExperienceSummary();

export const metadata: Metadata = {
  title: "Hemanth Karna | Full Stack Developer | MEAN Stack Specialist",
  description: `Senior Full Stack Developer with ${experienceYears} of experience specializing in MEAN Stack, Angular, Node.js, MongoDB, AWS. Building scalable, secure, and high-performance web applications.`,
  keywords: [
    "Full Stack Developer",
    "MEAN Stack Developer",
    "Angular Developer",
    "Node.js Developer",
    "MongoDB Expert",
    "Senior Software Engineer",
    "Hyderabad Developer",
    "Enterprise Web Applications",
    "AWS Cloud Solutions",
    "Microservices Architecture",
  ],
  authors: [{ name: "Hemanth Karna" }],
  creator: "Hemanth Karna",
  publisher: "Hemanth Karna",
  metadataBase: new URL("https://hemanthkarna.dev"),
  openGraph: {
    title: "Hemanth Karna | Senior Full Stack Developer",
    description: "Building scalable, secure & high-performance web applications with MEAN Stack",
    url: "https://hemanthkarna.dev",
    siteName: "Hemanth Karna Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hemanth Karna | Senior Full Stack Developer",
    description: "Building scalable, secure & high-performance web applications",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
