import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Technologies We Use - AI, Backend, Frontend, Mobile & Cloud",
  description: "We leverage cutting-edge technologies and frameworks to build robust, scalable solutions. AI (TensorFlow, PyTorch), Backend (Node.js, Python, Java), Frontend (React, Next.js, Vue), Mobile (React Native, Flutter), and Cloud (AWS, Azure, Google Cloud).",
  keywords: [
    "React development",
    "Next.js development",
    "Python development",
    "Node.js development",
    "mobile app technologies",
    "AI technologies",
    "cloud computing",
    "TensorFlow",
    "React Native",
    "AWS development",
    "Azure development",
  ],
  openGraph: {
    title: "Technologies We Use - AI, Backend, Frontend, Mobile & Cloud | YAT India",
    description: "Cutting-edge technologies: AI (TensorFlow, PyTorch), Backend (Node.js, Python), Frontend (React, Next.js), Mobile (React Native, Flutter), and Cloud (AWS, Azure).",
    url: "https://yatindia.com/technologies",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "YAT India Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technologies We Use - YAT India",
    description: "Cutting-edge technologies: AI, Backend, Frontend, Mobile, and Cloud platforms for robust software solutions.",
  },
  alternates: {
    canonical: "https://yatindia.com/technologies",
  },
}

export default function TechnologiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

