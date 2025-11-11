"use client"

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter()
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/yatindiavideo.mp4" type="video/mp4" />
        </video>
        
        {/* Gradient Overlays - Light Mode */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95 dark:hidden" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent dark:hidden" />
        
        {/* Gradient Overlays - Dark Mode */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/90 hidden dark:block" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent hidden dark:block" />
        
        {/* Additional gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-hero opacity-40" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-primary text-primary-foreground text-sm font-medium shadow-glow">
            <Sparkles className="w-4 h-4" />
            <span>Transforming Ideas Into Reality</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight">
            <span className="block text-foreground mb-2">Build The Future</span>
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              With YAT INDIA
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We craft cutting-edge software solutions that scale. From innovative web applications to robust mobile platforms, we turn your vision into exceptional digital experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              onClick={() => router.push("/get-started")}
              className="group bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300 text-lg px-8"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Link href="/work">
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 border-2 hover:bg-muted hover:text-primary"
              >
                View Our Work
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-display font-bold bg-gradient-primary bg-clip-text text-transparent">
                100+
              </div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-display font-bold bg-gradient-primary bg-clip-text text-transparent">
                50+
              </div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-display font-bold bg-gradient-primary bg-clip-text text-transparent">
                Since 2019
              </div>
              <div className="text-sm text-muted-foreground">Innovating Sense</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-gradient-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

