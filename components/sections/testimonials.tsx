"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    name: "Mr. Vinothan",
    company: "Android Robo Technologies",
    location: "Chennai",
    videoId: "08ZVX29aD3c",
    youtubeUrl: "https://www.youtube.com/shorts/08ZVX29aD3c",
  },
  {
    name: "Ms. Sreedevi",
    company: "Corporate Events, BNI",
    location: "Chennai",
    videoId: "e8uvAmOwQ_A",
    youtubeUrl: "https://www.youtube.com/shorts/e8uvAmOwQ_A",
  },
  {
    name: "Mr. Jeyaramachandran",
    company: "IT PROZ Technologies",
    location: "USA",
    videoId: "D1twaUBt3jg",
    youtubeUrl: "https://www.youtube.com/shorts/D1twaUBt3jg",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-24 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-3 sm:mb-4">
              What Our <span className="bg-gradient-primary bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
              Real testimonials from our satisfied clients
            </p>
          </div>

          {/* Testimonial Card */}
          <div className="relative">
            <div className="bg-background rounded-xl border shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 p-4 sm:p-6 md:p-8">
                {/* Video Section with Mobile Outline - Left Side */}
                <div className="flex items-center justify-center order-2 md:order-1">
                  <div className="relative w-full max-w-[200px] sm:max-w-[240px] md:max-w-[280px]">
                    {/* Mobile Phone Frame */}
                    <div className="relative bg-black rounded-[2rem] sm:rounded-[2.5rem] p-1.5 sm:p-2 shadow-2xl">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-4 sm:h-6 bg-black rounded-b-xl sm:rounded-b-2xl z-10"></div>
                      {/* Screen */}
                      <div className="relative w-full aspect-[9/16] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden bg-black">
                        <div className="absolute inset-0 scale-75 origin-top-left" style={{ width: '133.33%', height: '133.33%' }}>
                          <iframe
                            src={`https://www.youtube.com/embed/${currentTestimonial.videoId}`}
                            title={currentTestimonial.name}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section - Right Side */}
                <div className="flex flex-col justify-center order-1 md:order-2">
                  <div className="mb-4 md:mb-6 text-center md:text-left">
                    <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-primary/30 mb-3 md:mb-4 mx-auto md:mx-0" />
                    <h3 className="text-xl sm:text-2xl font-display font-bold mb-2">
                      {currentTestimonial.name}
                    </h3>
                    <p className="text-primary font-medium mb-1 text-sm sm:text-base">
                      {currentTestimonial.company}
                    </p>
                    <p className="text-muted-foreground text-xs sm:text-sm mb-4 md:mb-6">
                      {currentTestimonial.location}
                    </p>

                    <a
                      href={currentTestimonial.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs sm:text-sm text-primary hover:underline"
                    >
                      Watch on YouTube
                      <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                    </a>
                  </div>

                  {/* Pagination Dots - Near the phone */}
                  <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-4 flex-wrap">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border bg-background hover:bg-muted"
                      onClick={prevTestimonial}
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                    </Button>
                    
                    <div className="flex gap-1.5 sm:gap-2">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToTestimonial(index)}
                          className={cn(
                            "h-2 rounded-full transition-all duration-300",
                            index === currentIndex
                              ? "bg-primary w-6 sm:w-8"
                              : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2"
                          )}
                          aria-label={`Go to testimonial ${index + 1}`}
                        />
                      ))}
                    </div>

                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border bg-background hover:bg-muted"
                      onClick={nextTestimonial}
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </Button>

                    <span className="text-xs sm:text-sm text-muted-foreground ml-1 sm:ml-2 whitespace-nowrap">
                      {currentIndex + 1} / {testimonials.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

