"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export function CTA() {

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/80" />
      
      {/* Animated elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="container relative z-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to Start Your <span className="bg-gradient-primary bg-clip-text text-transparent">Project</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Let's discuss how we can help transform your ideas into reality. Get in touch with us today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link href="/get-started">
              <Button 
                size="lg" 
                className="group bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300 text-lg px-8"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 border-2 hover:bg-muted hover:text-primary"
              >
                <Mail className="mr-2 w-5 h-5 hover:text-primary" />
                Contact Us
              </Button>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>info@yatindia.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>YAT INDIA, 5/2B, Reddy Street, Tambaram West, Chennai-600045.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

