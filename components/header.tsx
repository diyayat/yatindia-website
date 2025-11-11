"use client"

import { ThemeToggle } from "./theme-toggle"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const services = [
  "Website - Static & Dynamic",
  "Ecommerce Apps",
  "Mobile App",
  "Customized Software Development",
  "AR/VR",
  "Digital Marketing",
  "2D & 3D Animation Videos",
  "AI Applications",
]

const industries = [
  "Healthcare",
  "Fintech",
  "Transportation and Logistics",
  "Business Software Development",
  "Financial Services",
  "Retail",
  "Banking",
  "Supply Chain Development",
  "Accounting",
  "Education",
  "Telecommunications",
  "Energy",
  "Construction",
  "Aviation",
  "Agriculture",
  "Real Estate",
  "Media and Entertainment",
]

const techCategories = [
  { name: "AI", id: "ai" },
  { name: "Backend", id: "backend" },
  { name: "Frontend", id: "frontend" },
  { name: "App", id: "app" },
  { name: "Cloud", id: "cloud" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCompanyOpen, setIsCompanyOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false)
  const [isTechnologiesOpen, setIsTechnologiesOpen] = useState(false)
  const pathname = usePathname()

  const scrollToSection = (sectionId: string) => {
    if (pathname === '/') {
      // If on home page, scroll to section
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
      setIsMenuOpen(false)
    } else {
      // If on another page, navigate to home with hash
      window.location.href = `/#${sectionId}`
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 md:h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <img 
            src="/YAT INDIA LOGO UPDATED.png" 
            alt="YAT India Logo" 
            className="h-16 md:h-20 w-auto"
            width={240}
            height={80}
          />
          <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          
          {/* Services Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1">
              Services
              <ChevronDown className="w-4 h-4" />
            </button>
            {isServicesOpen && (
              <div className="absolute top-full left-0 pt-1 w-64 z-50">
                <div className="rounded-md border bg-background shadow-lg py-2 max-h-96 overflow-y-auto">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href="/services"
                      className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Company Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setIsCompanyOpen(true)}
            onMouseLeave={() => setIsCompanyOpen(false)}
          >
            <button className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1">
              Company
              <ChevronDown className="w-4 h-4" />
            </button>
            {isCompanyOpen && (
              <div className="absolute top-full left-0 pt-1 w-48 z-50">
                <div className="rounded-md border bg-background shadow-lg py-2">
                  <Link
                    href="/about"
                    className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
                    onClick={() => setIsCompanyOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/careers"
                    className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
                    onClick={() => setIsCompanyOpen(false)}
                  >
                    Careers
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/blog" className="text-sm font-medium transition-colors hover:text-primary">
            Blog
          </Link>

          {/* Industries Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setIsIndustriesOpen(true)}
            onMouseLeave={() => setIsIndustriesOpen(false)}
          >
            <button className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1">
              Industries
              <ChevronDown className="w-4 h-4" />
            </button>
            {isIndustriesOpen && (
              <div className="absolute top-full right-0 pt-1 w-64 z-50">
                <div className="rounded-md border bg-background shadow-lg py-2 max-h-96 overflow-y-auto">
                  {industries.map((industry, index) => (
                    <Link
                      key={index}
                      href="/industries"
                      className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
                      onClick={() => setIsIndustriesOpen(false)}
                    >
                      {industry}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Technologies Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setIsTechnologiesOpen(true)}
            onMouseLeave={() => setIsTechnologiesOpen(false)}
          >
            <button className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1">
              Technologies
              <ChevronDown className="w-4 h-4" />
            </button>
            {isTechnologiesOpen && (
              <div className="absolute top-full right-0 pt-1 w-48 z-50">
                <div className="rounded-md border bg-background shadow-lg py-2">
                  {techCategories.map((category, index) => (
                    <Link
                      key={index}
                      href={`/technologies#${category.id}`}
                      className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
                      onClick={() => setIsTechnologiesOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => scrollToSection('testimonials')}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Testimonials
          </button>

          <Link
            href="/contact"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link href="/get-started">
            <Button className="hidden md:flex">
              Get Started
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t">
          <nav className="container flex flex-col gap-4 px-4 py-4">
            <Link 
              href="/" 
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            
            {/* Services Dropdown Mobile */}
            <div className="flex flex-col gap-2">
              <button 
                className="text-sm font-medium transition-colors hover:text-primary flex items-center justify-between"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesOpen && (
                <div className="pl-4 flex flex-col gap-2">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href="/services"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Company Dropdown Mobile */}
            <div className="flex flex-col gap-2">
              <button 
                className="text-sm font-medium transition-colors hover:text-primary flex items-center justify-between"
                onClick={() => setIsCompanyOpen(!isCompanyOpen)}
              >
                Company
                <ChevronDown className={`w-4 h-4 transition-transform ${isCompanyOpen ? 'rotate-180' : ''}`} />
              </button>
              {isCompanyOpen && (
                <div className="pl-4 flex flex-col gap-2">
                  <Link
                    href="/about"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/careers"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Careers
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/blog"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>

            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-left text-sm font-medium transition-colors hover:text-primary"
            >
              Testimonials
            </button>

            {/* Industries Dropdown Mobile */}
            <div className="flex flex-col gap-2">
              <button 
                className="text-sm font-medium transition-colors hover:text-primary flex items-center justify-between"
                onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
              >
                Industries
                <ChevronDown className={`w-4 h-4 transition-transform ${isIndustriesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isIndustriesOpen && (
                <div className="pl-4 flex flex-col gap-2 max-h-64 overflow-y-auto">
                  {industries.map((industry, index) => (
                    <Link
                      key={index}
                      href="/industries"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {industry}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Technologies Dropdown Mobile */}
            <div className="flex flex-col gap-2">
              <button 
                className="text-sm font-medium transition-colors hover:text-primary flex items-center justify-between"
                onClick={() => setIsTechnologiesOpen(!isTechnologiesOpen)}
              >
                Technologies
                <ChevronDown className={`w-4 h-4 transition-transform ${isTechnologiesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isTechnologiesOpen && (
                <div className="pl-4 flex flex-col gap-2">
                  {techCategories.map((category, index) => (
                    <Link
                      key={index}
                      href={`/technologies#${category.id}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-left text-sm font-medium transition-colors hover:text-primary"
            >
              Testimonials
            </button>

            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-left text-sm font-medium transition-colors hover:text-primary"
            >
              Contact
            </Link>
            <Link href="/get-started" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full mt-2">
                Get Started
              </Button>
            </Link>
          </nav>
        </div>
      )}

    </header>
  )
}

