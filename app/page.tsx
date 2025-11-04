"use client"

import { Header } from "@/components/header"
import Hero from "@/components/hero"
import { Features } from "@/components/sections/features"
import { Services } from "@/components/sections/services"
import { Technologies } from "@/components/sections/technologies"
import { About } from "@/components/sections/about"
import { Testimonials } from "@/components/sections/testimonials"
import { CTA } from "@/components/sections/cta"
import { Footer } from "@/components/footer"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    // Handle hash scrolling after page loads
    const hash = window.location.hash
    if (hash) {
      const element = document.getElementById(hash.substring(1))
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [])

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Services />
      <Technologies />
      <About />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
