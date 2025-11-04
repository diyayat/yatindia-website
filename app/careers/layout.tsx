import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Careers - Join Our Team | YAT India",
  description: "Join YAT India - We're always looking for talented individuals to join our team. Software developers, designers, and tech professionals. Build cutting-edge software solutions with us.",
  keywords: [
    "careers at YAT India",
    "software developer jobs",
    "web developer jobs",
    "mobile app developer jobs",
    "tech jobs India",
    "software engineering jobs",
    "UI UX designer jobs",
  ],
  openGraph: {
    title: "Careers - Join Our Team | YAT India",
    description: "Join YAT India - We're always looking for talented individuals. Software developers, designers, and tech professionals. Build cutting-edge software solutions with us.",
    url: "https://yatindia.com/careers",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Careers at YAT India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers - Join Our Team | YAT India",
    description: "Join YAT India - We're always looking for talented individuals. Software developers, designers, and tech professionals.",
  },
  alternates: {
    canonical: "https://yatindia.com/careers",
  },
}

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

