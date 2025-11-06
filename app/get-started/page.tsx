"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft, Check, Send } from "lucide-react"
import { useState } from "react"

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

const timelineOptions = [
  { value: "asap", label: "ASAP", description: "I need this project completed urgently" },
  { value: "1-2", label: "1-2 months", description: "I have a tight deadline" },
  { value: "3-4", label: "3-4 months", description: "Standard timeline" },
  { value: "5-6", label: "5-6 months", description: "Flexible timeline" },
  { value: "6+", label: "6+ months", description: "Long-term project" },
  { value: "flexible", label: "Flexible", description: "No specific deadline" },
]

const steps = [
  { id: 1, title: "Services", description: "What do you need?" },
  { id: 2, title: "Industry", description: "Your industry" },
  { id: 3, title: "Timeline", description: "Project timeline" },
  { id: 4, title: "Details", description: "Your information" },
  { id: 5, title: "Questions", description: "Additional info" },
  { id: 6, title: "Review", description: "Review & submit" },
]

export default function GetStartedPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    services: [] as string[],
    customService: "",
    industries: [] as string[],
    customIndustry: "",
    timeline: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    projectDescription: "",
    additionalQuestions: "",
    howDidYouHear: "",
    previousExperience: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }))
  }

  const handleIndustryToggle = (industry: string) => {
    setFormData((prev) => ({
      ...prev,
      industries: prev.industries.includes(industry)
        ? prev.industries.filter((i) => i !== industry)
        : [...prev.industries, industry],
    }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.services.length > 0 || formData.customService.trim() !== ""
      case 2:
        return formData.industries.length > 0 || formData.customIndustry.trim() !== ""
      case 3:
        return formData.timeline !== ""
      case 4:
        return formData.name !== "" && formData.email !== "" && formData.phone !== ""
      case 5:
        return true // Optional step
      default:
        return true
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData)
      alert("Thank you for your submission! We'll get back to you within 24 hours.")
      setIsSubmitting(false)
      // Reset form or redirect
      window.location.href = "/"
    }, 1500)
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-3">
            <div className="mb-2">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-1">What services do you need?</h2>
              <p className="text-sm md:text-base text-muted-foreground">Select all that apply or specify a custom service</p>
            </div>

            <div className="grid md:grid-cols-2 gap-3">
              {services.map((service) => (
                <button
                  key={service}
                  type="button"
                  onClick={() => handleServiceToggle(service)}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    formData.services.includes(service)
                      ? "border-primary bg-primary/10 shadow-md"
                      : "border-border hover:border-primary/50 hover:bg-muted/50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{service}</span>
                    {formData.services.includes(service) && (
                      <Check className="w-5 h-5 text-primary" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            <div>
              <label htmlFor="customService" className="block text-sm font-medium mb-2">
                Or specify a custom service
              </label>
              <input
                type="text"
                id="customService"
                name="customService"
                value={formData.customService}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                placeholder="Describe your custom service needs..."
              />
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-3">
            <div className="mb-2">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-1">What industry are you in?</h2>
              <p className="text-sm md:text-base text-muted-foreground">Select all that apply or specify a custom industry</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {industries.map((industry) => (
                <button
                  key={industry}
                  type="button"
                  onClick={() => handleIndustryToggle(industry)}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    formData.industries.includes(industry)
                      ? "border-primary bg-primary/10 shadow-md"
                      : "border-border hover:border-primary/50 hover:bg-muted/50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{industry}</span>
                    {formData.industries.includes(industry) && (
                      <Check className="w-5 h-5 text-primary" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            <div>
              <label htmlFor="customIndustry" className="block text-sm font-medium mb-2">
                Or specify a custom industry
              </label>
              <input
                type="text"
                id="customIndustry"
                name="customIndustry"
                value={formData.customIndustry}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                placeholder="Describe your industry..."
              />
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-3">
            <div className="mb-2">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-1">What's your project timeline?</h2>
              <p className="text-sm md:text-base text-muted-foreground">Help us understand your project timeline</p>
            </div>

            <div className="space-y-3">
              {timelineOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setFormData({ ...formData, timeline: option.value })}
                  className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                    formData.timeline === option.value
                      ? "border-primary bg-primary/10 shadow-md"
                      : "border-border hover:border-primary/50 hover:bg-muted/50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-lg">{option.label}</span>
                    {formData.timeline === option.value && (
                      <Check className="w-5 h-5 text-primary" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{option.description}</p>
                </button>
              ))}
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-3">
            <div className="mb-2">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-1">Tell us about yourself</h2>
              <p className="text-sm md:text-base text-muted-foreground">We'll use this information to get in touch with you</p>
            </div>

            <div className="grid md:grid-cols-2 gap-3">
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
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
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
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
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
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  placeholder="+91 1234567890"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company Name (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  placeholder="Your Company"
                />
              </div>
            </div>

            <div>
              <label htmlFor="projectDescription" className="block text-sm font-medium mb-2">
                Project Description <span className="text-destructive">*</span>
              </label>
                <textarea
                id="projectDescription"
                name="projectDescription"
                required
                rows={4}
                value={formData.projectDescription}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 resize-none"
                placeholder="Tell us about your project, requirements, goals, and any specific features you need..."
              />
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-3">
            <div className="mb-2">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-1">Additional Information</h2>
              <p className="text-sm md:text-base text-muted-foreground">Help us understand your project better (all optional)</p>
            </div>

            <div>
              <label htmlFor="additionalQuestions" className="block text-sm font-medium mb-2">
                Any additional questions or requirements?
              </label>
              <textarea
                id="additionalQuestions"
                name="additionalQuestions"
                rows={4}
                value={formData.additionalQuestions}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 resize-none"
                placeholder="Anything else you'd like us to know about your project?"
              />
            </div>

            <div>
              <label htmlFor="howDidYouHear" className="block text-sm font-medium mb-2">
                How did you hear about us?
              </label>
              <select
                id="howDidYouHear"
                name="howDidYouHear"
                value={formData.howDidYouHear}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <option value="">Select an option</option>
                <option value="google">Google Search</option>
                <option value="social">Social Media</option>
                <option value="referral">Referral</option>
                <option value="previous-client">Previous Client</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="previousExperience" className="block text-sm font-medium mb-2">
                Have you worked with a software development company before?
              </label>
              <textarea
                id="previousExperience"
                name="previousExperience"
                rows={3}
                value={formData.previousExperience}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 resize-none"
                placeholder="Share your experience, if any..."
              />
            </div>
          </div>
        )

      case 6:
        return (
          <div className="space-y-3">
            <div className="mb-2">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-1">Review Your Information</h2>
              <p className="text-sm md:text-base text-muted-foreground">Please review all the information before submitting</p>
            </div>

            <div className="space-y-4 bg-muted/30 rounded-lg p-4 md:p-6">
              <div>
                <h3 className="font-semibold mb-2">Services Selected:</h3>
                <div className="flex flex-wrap gap-2">
                  {formData.services.length > 0 ? (
                    formData.services.map((service) => (
                      <span key={service} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {service}
                      </span>
                    ))
                  ) : (
                    <span className="text-muted-foreground">None selected</span>
                  )}
                  {formData.customService && (
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      Custom: {formData.customService}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Industries Selected:</h3>
                <div className="flex flex-wrap gap-2">
                  {formData.industries.length > 0 ? (
                    formData.industries.map((industry) => (
                      <span key={industry} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {industry}
                      </span>
                    ))
                  ) : (
                    <span className="text-muted-foreground">None selected</span>
                  )}
                  {formData.customIndustry && (
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      Custom: {formData.customIndustry}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Timeline:</h3>
                <p className="text-muted-foreground">
                  {timelineOptions.find((t) => t.value === formData.timeline)?.label || "Not selected"}
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Contact Information:</h3>
                <p className="text-muted-foreground">
                  {formData.name} ({formData.email}) - {formData.phone}
                </p>
                {formData.company && (
                  <p className="text-muted-foreground">Company: {formData.company}</p>
                )}
              </div>

              <div>
                <h3 className="font-semibold mb-2">Project Description:</h3>
                <p className="text-muted-foreground whitespace-pre-wrap">{formData.projectDescription}</p>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-8 md:pt-36 md:pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-50" />
        
        <div className="container relative z-0 px-4">
          {/* Progress Steps */}
          <div className="max-w-4xl mx-auto mb-4 md:mb-6">
            <div className="flex items-center justify-between mb-2 md:mb-3 overflow-x-auto pb-2">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center flex-1 min-w-0">
                  <div className="flex flex-col items-center flex-1 min-w-0">
                    <div
                      className={`w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center font-semibold transition-all text-xs md:text-base flex-shrink-0 ${
                        currentStep > step.id
                          ? "bg-primary text-primary-foreground"
                          : currentStep === step.id
                          ? "bg-primary text-primary-foreground ring-2 md:ring-4 ring-primary/20"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {currentStep > step.id ? <Check className="w-4 h-4 md:w-6 md:h-6" /> : step.id}
                    </div>
                    <div className="mt-2 text-center hidden sm:block">
                      <p className={`text-[10px] md:text-xs font-medium truncate w-full ${currentStep >= step.id ? "text-foreground" : "text-muted-foreground"}`}>
                        {step.title}
                      </p>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`h-0.5 md:h-1 flex-1 mx-1 md:mx-2 transition-all flex-shrink ${
                        currentStep > step.id ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Content */}
          <div className="max-w-3xl mx-auto relative z-0 mt-4">
            <div className="bg-background rounded-lg border border-border shadow-lg p-4 md:p-6 relative z-0">
              <form onSubmit={currentStep === steps.length ? handleSubmit : (e) => { e.preventDefault(); nextStep(); }}>
                {renderStepContent()}

                {/* Navigation Buttons */}
                <div className="flex flex-col sm:flex-row justify-between gap-4 mt-6 md:mt-8 pt-4 border-t">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="flex items-center justify-center gap-2 w-full sm:w-auto"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Previous
                  </Button>

                  {currentStep < steps.length ? (
                    <Button
                      type="submit"
                      disabled={!canProceed()}
                      className="flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground hover:shadow-glow w-full sm:w-auto"
                    >
                      Next
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      disabled={!canProceed() || isSubmitting}
                      className="flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground hover:shadow-glow w-full sm:w-auto"
                    >
                      {isSubmitting ? "Submitting..." : (
                        <>
                          Submit
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </Button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

