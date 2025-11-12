"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const getLogoUrl = (name: string): string => {
  // Direct URLs for technologies that need special handling
  const directUrls: Record<string, string> = {
    "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    "AWS": "/aws-color.svg",
  }

  if (directUrls[name]) {
    return directUrls[name]
  }

  const iconMap: Record<string, string> = {
    "React": "react",
    "Next.js": "nextdotjs",
    "Node.js": "nodedotjs",
    "TypeScript": "typescript",
    "JavaScript": "javascript",
    "Python": "python",
    "Docker": "docker",
    "MongoDB": "mongodb",
    "PostgreSQL": "postgresql",
    "Git": "git",
    "Vue.js": "vuedotjs",
    "Angular": "angular",
    "Flutter": "flutter",
    "React Native": "react",
    "Firebase": "firebase",
    "Kubernetes": "kubernetes",
    "Tailwind CSS": "tailwindcss",
    "GraphQL": "graphql",
    "Redis": "redis",
    "Express.js": "express",
  }
  
  // Direct URLs for local files
  const localFiles: Record<string, string> = {
    "Django": "/django.png",
  }
  
  if (localFiles[name]) {
    return localFiles[name]
  }

  const iconName = iconMap[name] || name.toLowerCase().replace(/\s+/g, "").replace(/\./g, "dot")
  return `https://cdn.simpleicons.org/${iconName}`
}

const commonTechnologies = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "JavaScript",
  "Python",
  "Java",
  "Docker",
  "AWS",
  "MongoDB",
  "PostgreSQL",
  "Git",
  "Vue.js",
  "Angular",
  "Flutter",
  "React Native",
  "Firebase",
  "Kubernetes",
  "Tailwind CSS",
  "GraphQL",
  "Redis",
  "Express.js",
  "Django",
]

export function Technologies() {
  return (
    <section id="technologies" className="py-16 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-3">
            Technologies We <span className="bg-gradient-primary bg-clip-text text-transparent">Work With</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            We use cutting-edge technologies and frameworks to build modern, scalable solutions.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 mb-8">
          {commonTechnologies.map((tech, index) => {
            const logoUrl = getLogoUrl(tech)
            return (
              <div
                key={index}
                className="group flex flex-col items-center justify-center p-4 rounded-lg border bg-background hover:border-primary/50 hover:shadow-md transition-all duration-300"
              >
                <div className={`w-12 h-12 mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 rounded-lg p-1.5 ${
                  // Add white background in dark mode for logos that are hard to see (black logos)
                  (tech === "Rust" || tech === "Express.js" || tech === "Django" || 
                   tech === "Next.js" || tech === "Angular" || tech === "Expo" || tech === "AWS" || tech === "Nuxt.js") 
                    ? "dark:bg-white" 
                    : ""
                } ${
                  // Add black background in light mode for logos that are white
                  (tech === "Unity" || tech === "Cordova")
                    ? "bg-black dark:bg-transparent"
                    : ""
                }`}>
                  <img
                    src={logoUrl}
                    alt={tech}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><rect width="48" height="48" fill="%23f0f0f0"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" font-size="8" fill="%23999">${tech.substring(0, 2)}</text></svg>`)}`
                    }}
                  />
                </div>
                <span className="text-xs font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors">
                  {tech}
                </span>
              </div>
            )
          })}
        </div>

        <div className="text-center space-y-6">
          <Link 
            href="/technologies"
            className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium"
          >
            View All Technologies
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          {/* Start Your Project Button */}
          <div className="pt-4">
            <Link href="/get-started">
              <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:shadow-glow">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

