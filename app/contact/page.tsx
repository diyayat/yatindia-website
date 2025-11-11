"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Youtube, Linkedin, Instagram, ArrowRight, Briefcase, User, MapPin } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { api } from "@/lib/api"
import { Captcha } from "@/components/captcha"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const [captchaToken, setCaptchaToken] = useState<string>("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!captchaToken) {
      alert("Please complete the CAPTCHA verification")
      return
    }

    setIsSubmitting(true)

    try {
      await api.submitContact({
        ...formData,
        captchaToken,
      })
      alert("Thank you! We'll call you back soon.")
      setFormData({
        name: "",
        email: "",
        phone: "",
      })
      setCaptchaToken("")
    } catch (error) {
      console.error("Error submitting form:", error)
      alert(error instanceof Error ? error.message : "Failed to submit form. Please try again.")
      setCaptchaToken("")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="pt-24 pb-12 md:pt-28 md:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-50" />
        
        <div className="container relative z-10 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Get in <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Have a question or want to work with us? Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div className="bg-background rounded-lg border border-border shadow-lg p-6">
                <h2 className="text-2xl font-display font-bold mb-2">Request a Callback</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Leave your details and we'll call you back
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      placeholder="+91 1234567890"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Verification *
                    </label>
                    <Captcha
                      onVerify={(token) => setCaptchaToken(token)}
                      onError={() => {
                        setCaptchaToken("")
                        alert("CAPTCHA verification failed. Please try again.")
                      }}
                      onExpire={() => setCaptchaToken("")}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting || !captchaToken}
                    className="w-full bg-gradient-primary text-primary-foreground hover:shadow-glow"
                  >
                    {isSubmitting ? "Submitting..." : "Request Callback"}
                  </Button>
                </form>

                <div className="mt-8 pt-6 border-t">
                  <p className="text-sm font-medium mb-4">What are you looking for?</p>
                  <div className="space-y-3">
                    <Link href="/get-started">
                      <Button
                        variant="outline"
                        className="w-full justify-start group"
                      >
                        <Briefcase className="mr-2 w-5 h-5" />
                        Start a Project
                        <ArrowRight className="ml-auto w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Link href="/careers">
                      <Button
                        variant="outline"
                        className="w-full justify-start group"
                      >
                        <User className="mr-2 w-5 h-5" />
                        Join Our Team
                        <ArrowRight className="ml-auto w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <div className="bg-background rounded-lg border border-border shadow-lg p-6">
                  <h2 className="text-2xl font-display font-bold mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <a 
                          href="mailto:info@yatindia.com" 
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          info@yatindia.com
                        </a>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Address</h3>
                        <p className="text-sm text-muted-foreground">
                          YAT INDIA, 5/2B, Reddy Street, Tambaram West, Chennai-600045.
                        </p>
                      </div>
                    </div>

                    {/* WhatsApp */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-[#25D366]/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">WhatsApp</h3>
                        <a 
                          href="https://wa.me/918428343404" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          Chat with us on WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-background rounded-lg border border-border shadow-lg p-6">
                  <h2 className="text-2xl font-display font-bold mb-6">Follow Us</h2>
                  <div className="flex gap-4">
                    <a
                      href="https://www.youtube.com/@YAT-INDIA/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg border border-border flex items-center justify-center hover:bg-muted hover:border-primary/50 transition-colors"
                      aria-label="YouTube"
                    >
                      <Youtube className="w-6 h-6" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/yatindia/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg border border-border flex items-center justify-center hover:bg-muted hover:border-primary/50 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a
                      href="https://www.instagram.com/yat_india/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg border border-border flex items-center justify-center hover:bg-muted hover:border-primary/50 transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

