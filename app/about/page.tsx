import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Testimonials } from "@/components/sections/testimonials"
import { Target, Users, Award, Heart } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - YAT India",
  description: "Learn about YAT India - a team of passionate developers and designers dedicated to creating exceptional digital experiences. With 5+ years of experience, 100+ projects delivered, and 50+ happy clients across India and globally.",
  keywords: [
    "about YAT India",
    "software development company",
    "web development team",
    "India software agency",
    "custom software developers",
    "mobile app development team",
  ],
  openGraph: {
    title: "About Us - YAT India | Software Development Company",
    description: "Learn about YAT India - a team of passionate developers and designers dedicated to creating exceptional digital experiences. 5+ years, 100+ projects, 50+ clients.",
    url: "https://yatindia.com/about",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About YAT India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - YAT India",
    description: "Learn about YAT India - 5+ years, 100+ projects, 50+ happy clients. Passionate developers and designers creating exceptional digital experiences.",
  },
  alternates: {
    canonical: "https://yatindia.com/about",
  },
}

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

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/80" />
        <div className="container relative z-10 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">YAT India</span>
            </h1>
            <p className="text-xl text-muted-foreground">
               We serve clients in India, US and Singapore.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-10">
              <div>
                <h2 className="text-3xl font-display font-bold mb-4">Our Story</h2>
                <p className="text-muted-foreground mb-3 leading-relaxed">
                  Founded with a vision to bridge the gap between innovative ideas and exceptional execution, 
                  YAT India has been at the forefront of software development and design for over 5 years.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We've helped startups and enterprises alike transform their digital presence, delivering 
                  over 100 successful projects that have impacted millions of users worldwide.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-display font-bold mb-4">What We Do</h2>
                <p className="text-muted-foreground mb-3 leading-relaxed">
                  We specialize in custom software development, mobile applications, web platforms, and UI/UX design. 
                  Our full-stack expertise allows us to take projects from concept to deployment.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With a focus on modern technologies, best practices, and user-centric design, we create solutions 
                  that are not just functional, but truly exceptional.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mb-10 py-8 border-y">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-display font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  100+
                </div>
                <div className="text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-display font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  50+
                </div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-display font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  Since 2019
                </div>
                <div className="text-muted-foreground">6+ Years Experience</div>
              </div>
            </div>

            {/* Values */}
            <div>
              <h2 className="text-3xl font-display font-bold mb-8 text-center">Our Values</h2>
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
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      <Footer />
    </main>
  )
}

