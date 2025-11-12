"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const getLogoUrl = (name: string, category: string): string => {
  // Direct image URLs for technologies not available in Simple Icons
  const directUrls: Record<string, string> = {
    "Caffe": "/caffe.jpg",
    "Theano": "https://raw.githubusercontent.com/Theano/Theano/master/doc/images/theano_logo.png",
    "CNTK": "/cntk.png",
    "ONNX": "/onnx.svg",
    "CSS3": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    "AWS": "/aws-color.svg",
    "Azure": "/microsoft_azure.svg_.webp",
    "C#": "/c%23.png",
    "Xamarin": "/xamarin.png",
    "Nuxt.js": "/nuxtjs.svg",
    "Django": "/django.png",
  }

  if (directUrls[name]) {
    return directUrls[name]
  }

  // Map technology names to Simple Icons names or alternative sources
  const iconMap: Record<string, string> = {
    "TensorFlow": "tensorflow",
    "PyTorch": "pytorch",
    "OpenAI": "openai",
    "Hugging Face": "huggingface",
    "Scikit-learn": "scikitlearn",
    "Keras": "keras",
    "MLflow": "mlflow",
    "Apache Spark": "apachespark",
    "Node.js": "nodedotjs",
    "Python": "python",
    "Java": "oracle",
    "Go": "go",
    "Ruby": "ruby",
    "PHP": "php",
    "Rust": "rust",
    "Express.js": "express",
    "Flask": "flask",
    "Spring Boot": "spring",
    "Laravel": "laravel",
    "FastAPI": "fastapi",
    "NestJS": "nestjs",
    "GraphQL": "graphql",
    "React": "react",
    "Next.js": "nextdotjs",
    "Vue.js": "vuedotjs",
    "Angular": "angular",
    "TypeScript": "typescript",
    "JavaScript": "javascript",
    "HTML5": "html5",
    "Tailwind CSS": "tailwindcss",
    "Sass": "sass",
    "Redux": "redux",
    "Webpack": "webpack",
    "Vite": "vite",
    "Svelte": "svelte",
    "Gatsby": "gatsby",
    "React Native": "react",
    "Flutter": "flutter",
    "Swift": "swift",
    "Kotlin": "kotlin",
    "Ionic": "ionic",
    "NativeScript": "nativescript",
    "Cordova": "apachecordova",
    "Unity": "unity",
    "Expo": "expo",
    "Firebase": "firebase",
    "Appium": "appium",
    "Google Cloud": "googlecloud",
    "Docker": "docker",
    "Kubernetes": "kubernetes",
    "Terraform": "terraform",
    "Jenkins": "jenkins",
    "GitLab CI": "gitlab",
    "GitHub Actions": "githubactions",
    "Ansible": "ansible",
    "Chef": "chef",
    "Puppet": "puppet",
    "Vagrant": "vagrant",
    "Prometheus": "prometheus",
    "Grafana": "grafana",
    "ELK Stack": "elasticstack",
  }

  const iconName = iconMap[name] || name.toLowerCase().replace(/\s+/g, "").replace(/\./g, "dot").replace(/#/g, "sharp")
  
  // For Java, use a direct URL
  if (name === "Java") {
    return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
  }
  
  return `https://cdn.simpleicons.org/${iconName}`
}

const technologies = {
  ai: [
    { name: "TensorFlow" },
    { name: "PyTorch" },
    { name: "OpenAI" },
    { name: "Hugging Face" },
    { name: "Scikit-learn" },
    { name: "Keras" },
    { name: "MLflow" },
    { name: "Apache Spark" },
    { name: "Caffe" },
    { name: "Theano" },
    { name: "CNTK" },
    { name: "ONNX" },
  ],
  backend: [
    { name: "Node.js" },
    { name: "Python" },
    { name: "Java" },
    { name: "C#" },
    { name: "Go" },
    { name: "Ruby" },
    { name: "PHP" },
    { name: "Rust" },
    { name: "Express.js" },
    { name: "Django" },
    { name: "Flask" },
    { name: "Spring Boot" },
    { name: "Laravel" },
    { name: "FastAPI" },
    { name: "NestJS" },
    { name: "GraphQL" },
  ],
  frontend: [
    { name: "React" },
    { name: "Next.js" },
    { name: "Vue.js" },
    { name: "Angular" },
    { name: "TypeScript" },
    { name: "JavaScript" },
    { name: "HTML5" },
    { name: "CSS3" },
    { name: "Tailwind CSS" },
    { name: "Sass" },
    { name: "Redux" },
    { name: "Webpack" },
    { name: "Vite" },
    { name: "Svelte" },
    { name: "Nuxt.js" },
    { name: "Gatsby" },
  ],
  app: [
    { name: "React Native" },
    { name: "Flutter" },
    { name: "Swift" },
    { name: "Kotlin" },
    { name: "Ionic" },
    { name: "Xamarin" },
    { name: "NativeScript" },
    { name: "Cordova" },
    { name: "Unity" },
    { name: "Expo" },
    { name: "Firebase" },
    { name: "Appium" },
  ],
  cloud: [
    { name: "AWS" },
    { name: "Azure" },
    { name: "Google Cloud" },
    { name: "Docker" },
    { name: "Kubernetes" },
    { name: "Terraform" },
    { name: "Jenkins" },
    { name: "GitLab CI" },
    { name: "GitHub Actions" },
    { name: "Ansible" },
    { name: "Chef" },
    { name: "Puppet" },
    { name: "Vagrant" },
    { name: "Prometheus" },
    { name: "Grafana" },
    { name: "ELK Stack" },
  ],
}

const tabs = [
  { id: "ai", label: "AI technologies" },
  { id: "backend", label: "Back-end technologies" },
  { id: "frontend", label: "Front-end technologies" },
  { id: "app", label: "App development" },
  { id: "cloud", label: "Cloud Computing" },
]

// Note: Metadata is in a separate file for client components
// See: app/technologies/layout.tsx or use generateMetadata function

export default function TechnologiesPage() {
  const [activeTab, setActiveTab] = useState("ai")

  // Handle hash-based navigation
  useEffect(() => {
    const hash = window.location.hash.substring(1) // Remove the #
    if (hash && tabs.find(tab => tab.id === hash)) {
      setActiveTab(hash)
      // Scroll to tabs section after a short delay
      setTimeout(() => {
        const tabsElement = document.getElementById('technologies-tabs')
        if (tabsElement) {
          tabsElement.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }, [])

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/80" />
        <div className="container relative z-10 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Technologies</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We leverage cutting-edge technologies and frameworks to build robust, scalable, and innovative solutions 
              for businesses across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies Tabs Section */}
      <section id="technologies-tabs" className="py-16">
        <div className="container px-4">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-8 border-b border-border">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-6 py-4 text-sm font-medium transition-all duration-300 border-b-2 -mb-px",
                  activeTab === tab.id
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground/50"
                )}
              >
                <h3 className="text-lg">{tab.label}</h3>
              </button>
            ))}
          </div>

          {/* Technologies Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {(technologies[activeTab as keyof typeof technologies] || []).map((tech, index) => {
              const logoUrl = getLogoUrl(tech.name, activeTab)
              return (
                <div
                  key={index}
                  className="group relative p-6 rounded-xl border bg-background hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center cursor-pointer"
                >
                  <div className="flex flex-col items-center justify-center gap-3">
                    <div className={cn(
                      "w-16 h-16 mb-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 rounded-lg p-2",
                      // Add white background in dark mode for logos that are hard to see (black logos)
                      (tech.name === "Rust" || tech.name === "Express.js" || tech.name === "Django" || 
                       tech.name === "Next.js" || tech.name === "Angular" || tech.name === "Expo" || 
                       tech.name === "AWS" || tech.name === "Nuxt.js") && 
                      "dark:bg-white",
                      // Add black background in light mode for logos that are white
                      (tech.name === "Unity" || tech.name === "Cordova") &&
                      "bg-black dark:bg-transparent"
                    )}>
                      <img
                        src={logoUrl}
                        alt={`${tech.name} technology logo`}
                        className="w-full h-full object-contain"
                        loading="lazy"
                        width="64"
                        height="64"
                        onError={(e) => {
                          // Fallback to a placeholder if image fails to load
                          const target = e.target as HTMLImageElement
                          target.src = `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><rect width="64" height="64" fill="%23f0f0f0"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" font-size="10" fill="%23999">${tech.name.substring(0, 2)}</text></svg>`)}`
                        }}
                      />
                    </div>
                    <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                      {tech.name}
                    </h4>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

