"use client"

import { Target, Users, Award, Heart, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We're committed to delivering solutions that drive real business value.",
  },
  {
    icon: Users,
    title: "Client-Focused",
    description: "Your success is our success. We partner with you every step of the way.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in code quality and user experience.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We love what we do, and it shows in every project we deliver.",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">YAT India</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're a team of passionate developers and designers dedicated to creating exceptional digital experiences. We serve clients in India, US and Singapore.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
              <p className="text-muted-foreground mb-4">
                Founded with a vision to bridge the gap between innovative ideas and exceptional execution, YAT India has been at the forefront of software development and design for over 5 years.
              </p>
              <p className="text-muted-foreground">
                We've helped startups and enterprises alike transform their digital presence, delivering over 100 successful projects that have impacted millions of users worldwide.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">What We Do</h3>
              <p className="text-muted-foreground mb-4">
                We specialize in custom software development, mobile applications, web platforms, and UI/UX design. Our full-stack expertise allows us to take projects from concept to deployment.
              </p>
              <p className="text-muted-foreground">
                With a focus on modern technologies, best practices, and user-centric design, we create solutions that are not just functional, but truly exceptional.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-lg border bg-background">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="font-semibold mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>

          {/* Start Your Project Button */}
          <div className="mt-12 text-center">
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

