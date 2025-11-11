"use client"

import { Quote, ChevronRight, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

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
  {
    name: "Client Testimonial",
    company: "YAT India Client",
    location: "",
    videoId: "OrAScELhNh8",
    youtubeUrl: "https://youtube.com/shorts/OrAScELhNh8?si=avcr_O56g-e5vuFD",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-24 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-3 sm:mb-4">
              What Our <span className="bg-gradient-primary bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
              Real testimonials from our satisfied clients
            </p>
          </div>

          {/* Three Testimonials Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-background rounded-xl border shadow-lg overflow-hidden flex flex-col"
              >
                {/* Video Section */}
                <div className="flex items-center justify-center p-4 sm:p-6 bg-muted/30">
                  <div className="relative w-full max-w-[180px] sm:max-w-[200px]">
                    {/* Mobile Phone Frame */}
                    <div className="relative bg-black rounded-[2rem] sm:rounded-[2.5rem] p-1.5 sm:p-2 shadow-2xl">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-3 sm:h-4 bg-black rounded-b-xl sm:rounded-b-2xl z-10"></div>
                      {/* Screen */}
                      <div className="relative w-full aspect-[9/16] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden bg-black">
                        <div className="absolute inset-0 scale-75 origin-top-left" style={{ width: '133.33%', height: '133.33%' }}>
                          <iframe
                            src={`https://www.youtube.com/embed/${testimonial.videoId}`}
                            title={testimonial.name}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col justify-between flex-1 p-4 sm:p-6">
                  <div className="mb-4 text-center">
                    <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-primary/30 mb-3 mx-auto" />
                    <h3 className="text-lg sm:text-xl font-display font-bold mb-2">
                      {testimonial.name}
                    </h3>
                    <p className="text-primary font-medium mb-1 text-sm">
                      {testimonial.company}
                    </p>
                    <p className="text-muted-foreground text-xs sm:text-sm mb-4">
                      {testimonial.location}
                    </p>
                  </div>

                  <a
                    href={testimonial.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center text-xs sm:text-sm text-primary hover:underline mx-auto"
                  >
                    Watch on YouTube
                    <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Start Your Project Button */}
          <div className="mt-12 text-center">
            <Link href="/get-started">
              <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:shadow-glow">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

