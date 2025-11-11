"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft, Check, Send } from "lucide-react"
import { api } from "@/lib/api"
import { Captcha } from "@/components/captcha"
import { useGetStarted } from "./get-started-context"

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

export function GetStartedModal() {
  const { isOpen, closeModal, openModal } = useGetStarted()
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
  const [captchaToken, setCaptchaToken] = useState<string>("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Show modal after 5-6 seconds (only if not opened externally)
  useEffect(() => {
    // Check if user has already closed the modal in this session
    const hasClosedModal = sessionStorage.getItem("getStartedModalClosed")
    if (hasClosedModal || isOpen) {
      return
    }

    // Random delay between 5-6 seconds
    const delay = 5000 + Math.random() * 1000
    const timer = setTimeout(() => {
      // Only auto-open if modal is not already open
      if (!isOpen) {
        openModal()
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [isOpen, openModal])

  const handleClose = () => {
    closeModal()
    // Remember that user closed it for this session
    sessionStorage.setItem("getStartedModalClosed", "true")
  }

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
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
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
        return formData.name.trim() !== "" && formData.email.trim() !== "" && formData.phone.trim() !== "" && formData.projectDescription.trim() !== ""
      default:
        return true
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!captchaToken) {
      alert("Please complete the CAPTCHA verification")
      return
    }

    setIsSubmitting(true)

    try {
      await api.submitProject({
        ...formData,
        captchaToken,
      })
      alert("Thank you! We'll get back to you soon.")
      // Reset form and close modal
      setFormData({
        services: [],
        customService: "",
        industries: [],
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
      setCaptchaToken("")
      setCurrentStep(1)
      handleClose()
    } catch (error) {
      console.error("Error submitting form:", error)
      alert(error instanceof Error ? error.message : "Failed to submit form. Please try again.")
      setCaptchaToken("")
    } finally {
      setIsSubmitting(false)
    }
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

            <div className="grid md:grid-cols-2 gap-3 max-h-[300px] overflow-y-auto">
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 max-h-[300px] overflow-y-auto">
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

            <div className="space-y-3 max-h-[300px] overflow-y-auto">
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
                <label htmlFor="modal-name" className="block text-sm font-medium mb-2">
                  Full Name <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  id="modal-name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="modal-email" className="block text-sm font-medium mb-2">
                  Email Address <span className="text-destructive">*</span>
                </label>
                <input
                  type="email"
                  id="modal-email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="modal-phone" className="block text-sm font-medium mb-2">
                  Phone Number <span className="text-destructive">*</span>
                </label>
                <input
                  type="tel"
                  id="modal-phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  placeholder="+91 1234567890"
                />
              </div>

              <div>
                <label htmlFor="modal-company" className="block text-sm font-medium mb-2">
                  Company Name (Optional)
                </label>
                <input
                  type="text"
                  id="modal-company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  placeholder="Your Company"
                />
              </div>
            </div>

            <div>
              <label htmlFor="modal-projectDescription" className="block text-sm font-medium mb-2">
                Project Description <span className="text-destructive">*</span>
              </label>
              <textarea
                id="modal-projectDescription"
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
              <label htmlFor="modal-additionalQuestions" className="block text-sm font-medium mb-2">
                Any additional questions or requirements?
              </label>
              <textarea
                id="modal-additionalQuestions"
                name="additionalQuestions"
                rows={4}
                value={formData.additionalQuestions}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 resize-none"
                placeholder="Any specific questions or additional requirements..."
              />
            </div>

            <div>
              <label htmlFor="modal-howDidYouHear" className="block text-sm font-medium mb-2">
                How did you hear about us?
              </label>
              <select
                id="modal-howDidYouHear"
                name="howDidYouHear"
                value={formData.howDidYouHear}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <option value="">Select an option</option>
                <option value="google">Google Search</option>
                <option value="social-media">Social Media</option>
                <option value="referral">Referral</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="modal-previousExperience" className="block text-sm font-medium mb-2">
                Previous experience with similar projects?
              </label>
              <textarea
                id="modal-previousExperience"
                name="previousExperience"
                rows={3}
                value={formData.previousExperience}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 resize-none"
                placeholder="Tell us about any previous experience..."
              />
            </div>
          </div>
        )

      case 6:
        return (
          <div className="space-y-4">
            <div className="mb-4">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">Review Your Information</h2>
              <p className="text-sm text-muted-foreground">Please review your information before submitting</p>
            </div>

            <div className="space-y-4 max-h-[400px] overflow-y-auto">
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Services</h3>
                <p className="text-sm">
                  {formData.services.length > 0 ? formData.services.join(", ") : formData.customService || "Not specified"}
                </p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Industry</h3>
                <p className="text-sm">
                  {formData.industries.length > 0 ? formData.industries.join(", ") : formData.customIndustry || "Not specified"}
                </p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Timeline</h3>
                <p className="text-sm">
                  {timelineOptions.find((t) => t.value === formData.timeline)?.label || "Not specified"}
                </p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Contact Information</h3>
                <p className="text-sm">
                  <strong>Name:</strong> {formData.name || "Not provided"}
                  <br />
                  <strong>Email:</strong> {formData.email || "Not provided"}
                  <br />
                  <strong>Phone:</strong> {formData.phone || "Not provided"}
                  {formData.company && (
                    <>
                      <br />
                      <strong>Company:</strong> {formData.company}
                    </>
                  )}
                </p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Project Description</h3>
                <p className="text-sm whitespace-pre-wrap">{formData.projectDescription || "Not provided"}</p>
              </div>

              {formData.additionalQuestions && (
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Additional Questions</h3>
                  <p className="text-sm whitespace-pre-wrap">{formData.additionalQuestions}</p>
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
          </div>
        )

      default:
        return null
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-background rounded-lg shadow-2xl overflow-hidden flex flex-col">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="p-6 border-b">
          <h1 className="text-3xl font-display font-bold bg-gradient-primary bg-clip-text text-transparent">
            Get Started with Your Project
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Step {currentStep} of {steps.length}: {steps[currentStep - 1].title}
          </p>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6">
          {renderStepContent()}
        </form>

        {/* Footer with Navigation */}
        <div className="p-6 border-t bg-muted/30 flex items-center justify-between gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous
          </Button>

          {currentStep < steps.length ? (
            <Button
              type="button"
              onClick={nextStep}
              disabled={!canProceed()}
              className="flex items-center gap-2 bg-gradient-primary text-primary-foreground hover:shadow-glow"
            >
              Next
              <ArrowRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button
              type="submit"
              onClick={handleSubmit}
              disabled={isSubmitting || !captchaToken}
              className="flex items-center gap-2 bg-gradient-primary text-primary-foreground hover:shadow-glow"
            >
              {isSubmitting ? (
                "Submitting..."
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Submit
                </>
              )}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

