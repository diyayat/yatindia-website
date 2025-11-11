"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Send, Upload, FileText } from "lucide-react"
import { useState } from "react"
import { api } from "@/lib/api"
import { Captcha } from "@/components/captcha"

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    message: "",
  })
  const [resume, setResume] = useState<File | null>(null)
  const [captchaToken, setCaptchaToken] = useState<string>("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!captchaToken) {
      alert("Please complete the CAPTCHA verification")
      return
    }

    setIsSubmitting(true)

    try {
      await api.submitCareer({
        ...formData,
        resume: resume || undefined,
        captchaToken,
      })
      alert("Thank you for your interest! We'll get back to you soon.")
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        message: "",
      })
      setResume(null)
      setCaptchaToken("")
    } catch (error) {
      console.error("Error submitting form:", error)
      alert(error instanceof Error ? error.message : "Failed to submit form. Please try again.")
      setCaptchaToken("")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      // Validate file type
      const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png', 'image/gif']
      if (!allowedTypes.includes(file.type)) {
        alert('Please upload a PDF or image file (JPEG, PNG, GIF)')
        return
      }
      // Validate file size (10MB)
      if (file.size > 10 * 1024 * 1024) {
        alert('File size must be less than 10MB')
        return
      }
      setResume(file)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/80" />
        <div className="container relative z-10 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Join Our <span className="bg-gradient-primary bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We're always looking for talented individuals to join our team. 
              Send us your details and we'll get in touch!
            </p>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold mb-4">Application Form</h2>
              <p className="text-muted-foreground">
                Fill out the form below to apply for a position. We'll review your application and get back to you soon.
              </p>
            </div>

            {/* Application Form */}
            <div className="bg-background rounded-lg border border-border shadow-lg p-6 md:p-8">
              <h2 className="text-3xl font-display font-bold mb-4 md:mb-6">Career Application Form</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      placeholder="+91 1234567890"
                    />
                  </div>

                  <div>
                    <label htmlFor="position" className="block text-sm font-medium mb-2">
                      Position Interested In
                    </label>
                    <input
                      type="text"
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      placeholder="Software Developer, Designer, etc."
                    />
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium mb-2">
                      Years of Experience
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    >
                      <option value="">Select experience</option>
                      <option value="0-1">0-1 years</option>
                      <option value="1-3">1-3 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5+">5+ years</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 resize-none"
                      placeholder="Tell us about yourself and why you're interested..."
                    />
                  </div>

                  <div>
                    <label htmlFor="resume" className="block text-sm font-medium mb-2">
                      Resume (PDF or Image) <span className="text-muted-foreground text-xs">(Optional, Max 10MB)</span>
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        id="resume"
                        name="resume"
                        accept=".pdf,.jpg,.jpeg,.png,.gif"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <label
                        htmlFor="resume"
                        className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-md border border-input bg-background hover:bg-muted/50 cursor-pointer transition-colors"
                      >
                        <Upload className="w-5 h-5" />
                        <span className="text-sm">
                          {resume ? resume.name : "Choose file or drag and drop"}
                        </span>
                      </label>
                    </div>
                    {resume && (
                      <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                        <FileText className="w-4 h-4" />
                        <span>{resume.name} ({(resume.size / 1024 / 1024).toFixed(2)} MB)</span>
                      </div>
                    )}
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
                    size="lg" 
                    disabled={isSubmitting || !captchaToken}
                    className="w-full bg-gradient-primary text-primary-foreground hover:shadow-glow"
                  >
                    {isSubmitting ? "Submitting..." : (
                      <>
                        Submit Application
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

