"use client"

import { ArrowRight, Code2, Smartphone, Palette, Database, Cloud, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Modern, responsive web applications built with React, Next.js, and the latest frameworks.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "iOS and Android apps using React Native, Flutter, and native technologies.",
  },
  {
    icon: Palette,
    title: "Design Services",
    description: "Complete UI/UX design from wireframes to pixel-perfect implementations.",
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Scalable APIs and serverless architectures using Node.js, Python, and more.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "AWS, Azure, and GCP deployment with CI/CD pipelines and infrastructure as code.",
  },
  {
    icon: BarChart3,
    title: "Consulting",
    description: "Strategic technology consulting to help you make the right technical decisions.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24">
      <div className="container px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive software solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl border bg-background hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <Button variant="ghost" className="group/btn p-0 h-auto">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

