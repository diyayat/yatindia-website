import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Hero from "@/components/hero";
import { Services } from "@/components/sections/services";
import { Features } from "@/components/sections/features";
import { About } from "@/components/sections/about";
import { Technologies } from "@/components/sections/technologies";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Features />
      <About />
      <Technologies />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
