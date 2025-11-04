"use client"

import { Youtube, Linkedin, Instagram, Mail } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img 
                src="/yatindia_logo.jpeg" 
                alt="YAT India Logo" 
                className="h-10 w-auto"
                width={120}
                height={40}
              />
              <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                YAT India
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Transforming ideas into reality through exceptional software solutions and design.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.youtube.com/@YAT-INDIA/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border flex items-center justify-center hover:bg-muted transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/yatindia/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border flex items-center justify-center hover:bg-muted transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/yat_india/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border flex items-center justify-center hover:bg-muted transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:hosting.yatindia@gmail.com"
                className="w-10 h-10 rounded-lg border flex items-center justify-center hover:bg-muted transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/services" className="hover:text-foreground transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-foreground transition-colors">
                  Ecommerce Apps
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-foreground transition-colors">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-foreground transition-colors">
                  Custom Software
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-foreground transition-colors">
                  AR/VR Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-foreground transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-foreground transition-colors">
                  Animation Videos
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-foreground transition-colors">
                  AI Applications
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-foreground transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-foreground transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>hosting.yatindia@gmail.com</li>
              <li>+91 8428343404</li>
              <li>India</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} YAT India. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

