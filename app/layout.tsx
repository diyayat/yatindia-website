import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { StructuredData } from "@/components/structured-data";

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
  metadataBase: new URL("https://yatindia.com"),
  title: {
    default: "YAT India - Custom Software & Design Agency | Web & Mobile App Development",
    template: "%s | YAT India",
  },
  description: "YAT India crafts cutting-edge software solutions that scale. From innovative web applications to robust mobile platforms, AI applications, AR/VR, and digital marketing, we turn your vision into exceptional digital experiences. Serving India and globally with 100+ successful projects.",
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
    "AI applications",
    "AR/VR development",
    "ecommerce development",
    "digital marketing",
    "software company India",
    "custom software solutions",
    "web design agency",
    "mobile app agency",
    "full stack development",
  ],
  authors: [{ name: "YAT India", url: "https://yatindia.com" }],
  creator: "YAT India",
  publisher: "YAT India",
  alternates: {
    canonical: "https://yatindia.com",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://yatindia.com",
    title: "YAT India - Custom Software & Design Agency | Web & Mobile App Development",
    description: "We craft cutting-edge software solutions that scale. From innovative web applications to robust mobile platforms, AI applications, AR/VR, and digital marketing, we turn your vision into exceptional digital experiences.",
    siteName: "YAT India",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "YAT India - Custom Software & Design Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YAT India - Custom Software & Design Agency",
    description: "Crafting cutting-edge software solutions that scale. Web & mobile apps, AI, AR/VR, and digital marketing. 100+ successful projects delivered.",
    images: ["/og-image.jpg"],
    creator: "@yat_india",
    site: "@yat_india",
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
  category: "technology",
  classification: "Software Development Company",
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  other: {
    "contact:email": "hosting.yatindia@gmail.com",
    "contact:phone_number": "+91 8428343404",
    "geo.region": "IN",
  },
  icons: {
    icon: "/yatindia_logo.jpeg",
    shortcut: "/yatindia_logo.jpeg",
    apple: "/yatindia_logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "YAT India",
    url: "https://yatindia.com",
    logo: "https://yatindia.com/yatindia_logo.jpeg",
    description: "YAT India crafts cutting-edge software solutions that scale. From innovative web applications to robust mobile platforms, we turn your vision into exceptional digital experiences.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-8428343404",
      contactType: "Customer Service",
      email: "hosting.yatindia@gmail.com",
      areaServed: "IN",
      availableLanguage: "English",
    },
    sameAs: [
      "https://www.youtube.com/@YAT-INDIA/",
      "https://www.linkedin.com/company/yatindia/",
      "https://www.instagram.com/yat_india/",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressLocality: "India",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "50",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased font-sans`}
      >
        <StructuredData data={jsonLd} />
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
