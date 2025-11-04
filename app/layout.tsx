import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: {
    default: "YAT India - Custom Software & Design Agency",
    template: "%s | YAT India",
  },
  description: "YAT India crafts cutting-edge software solutions that scale. From innovative web applications to robust mobile platforms, we turn your vision into exceptional digital experiences.",
  keywords: [
    "software development",
    "custom software",
    "web development",
    "mobile app development",
    "UI/UX design",
    "India",
    "software agency",
    "Next.js",
    "React",
    "cloud solutions",
  ],
  authors: [{ name: "YAT India" }],
  creator: "YAT India",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://yatindia.com",
    title: "YAT India - Custom Software & Design Agency",
    description: "We craft cutting-edge software solutions that scale. From innovative web applications to robust mobile platforms, we turn your vision into exceptional digital experiences.",
    siteName: "YAT India",
  },
  twitter: {
    card: "summary_large_image",
    title: "YAT India - Custom Software & Design Agency",
    description: "We craft cutting-edge software solutions that scale. From innovative web applications to robust mobile platforms, we turn your vision into exceptional digital experiences.",
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
  verification: {
    // Add your verification codes here when available
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
