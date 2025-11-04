import { Header } from "@/components/header"
import Hero from "@/components/hero"
import { Features } from "@/components/sections/features"
import { Services } from "@/components/sections/services"
import { About } from "@/components/sections/about"
import { CTA } from "@/components/sections/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Services />
      <About />
      <CTA />
      <Footer />
    </main>
  )
}
