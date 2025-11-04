"use client"

import { Globe, ShoppingCart, Smartphone, Code2, Boxes, TrendingUp, Video, Sparkles } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Website - Static & Dynamic",
    description: "Professional websites from simple static pages to complex dynamic web applications with content management systems.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce Apps",
    description: "Complete ecommerce solutions with payment integration, inventory management, and seamless shopping experiences.",
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    description: "Native iOS and Android applications, plus cross-platform solutions using React Native and Flutter.",
  },
  {
    icon: Code2,
    title: "Customized Software Development",
    description: "Tailored software solutions designed specifically for your business needs and workflows.",
  },
  {
    icon: Boxes,
    title: "AR/VR",
    description: "Immersive augmented and virtual reality experiences for gaming, training, visualization, and more.",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies including SEO, social media, content marketing, and analytics.",
  },
  {
    icon: Video,
    title: "2D & 3D Animation Videos",
    description: "Engaging animated content from 2D explainer videos to stunning 3D visualizations and animations.",
  },
  {
    icon: Sparkles,
    title: "AI Applications",
    description: "Intelligent AI-powered solutions including chatbots, machine learning models, and automation systems.",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl border bg-background hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

