"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, Globe, ShoppingCart, Smartphone, Code2, Boxes, TrendingUp, Video, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { StructuredData } from "@/components/structured-data"

const services = [
  {
    icon: Globe,
    title: "Website - Static & Dynamic",
    description: "Professional websites from simple static pages to complex dynamic web applications with content management systems.",
    linkId: "website-development",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce Apps",
    description: "Complete ecommerce solutions with payment integration, inventory management, and seamless shopping experiences.",
    linkId: "ecommerce-applications",
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    description: "Native iOS and Android applications, plus cross-platform solutions using React Native and Flutter.",
    linkId: "mobile-app-development",
  },
  {
    icon: Code2,
    title: "Customized Software Development",
    description: "Tailored software solutions designed specifically for your business needs and workflows.",
    linkId: "custom-software-development",
  },
  {
    icon: Boxes,
    title: "AR/VR",
    description: "Immersive augmented and virtual reality experiences for gaming, training, visualization, and more.",
    linkId: "ar-vr-development",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies including SEO, social media, content marketing, and analytics.",
    linkId: "digital-marketing",
  },
  {
    icon: Video,
    title: "2D & 3D Animation Videos",
    description: "Engaging animated content from 2D explainer videos to stunning 3D visualizations and animations.",
    linkId: "animation-videos",
  },
  {
    icon: Sparkles,
    title: "AI Applications",
    description: "Intelligent AI-powered solutions including chatbots, machine learning models, and automation systems.",
    linkId: "ai-applications",
  },
]

export default function ServicesPage() {
  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Software Development Services",
    provider: {
      "@type": "Organization",
      name: "YAT India",
      url: "https://yatindia.com",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Software Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Website Development",
            description: "Professional websites from simple static pages to complex dynamic web applications",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ecommerce Apps",
            description: "Complete ecommerce solutions with payment integration and inventory management",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mobile App Development",
            description: "Native iOS and Android applications, plus cross-platform solutions",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Software Development",
            description: "Tailored software solutions designed specifically for your business needs",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AR/VR Development",
            description: "Immersive augmented and virtual reality experiences",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Digital Marketing",
            description: "Comprehensive digital marketing strategies including SEO and social media",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "2D & 3D Animation Videos",
            description: "Engaging animated content from 2D explainer videos to 3D visualizations",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Applications",
            description: "Intelligent AI-powered solutions including chatbots and machine learning models",
          },
        },
      ],
    },
  };

  return (
    <main className="min-h-screen">
      <StructuredData data={servicesJsonLd} />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/80" />
        <div className="container relative z-10 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive software solutions tailored to your business needs. 
              We help you transform your ideas into exceptional digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 rounded-xl border bg-background hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <Link href={`/work#${service.linkId}`}>
                  <Button variant="ghost" className="group/btn p-0 h-auto hover:bg-muted hover:px-3 hover:py-1.5 rounded-md transition-all">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can help transform your business with our services.
            </p>
            <Link href="/get-started">
              <Button 
                size="lg" 
                className="bg-gradient-primary text-primary-foreground hover:shadow-glow"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

