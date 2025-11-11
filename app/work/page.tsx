import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { StructuredData } from "@/components/structured-data"
import { ArrowRight, Globe, ShoppingCart, Smartphone, Code2, Boxes, TrendingUp, Video, Sparkles, CheckCircle2, Zap, Shield, Users, Target } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "View Our Work - Services & Technologies | YAT India",
  description: "Explore our comprehensive services and cutting-edge technologies. Learn how we build websites, mobile apps, ecommerce solutions, AI applications, AR/VR experiences, and more using modern tech stacks including React, Next.js, Node.js, Python, AWS, and more.",
  keywords: [
    "software development portfolio",
    "web development services explained",
    "mobile app development technologies",
    "ecommerce development stack",
    "AI application development",
    "AR VR development technologies",
    "custom software solutions",
    "technology stack explained",
    "software development process",
    "React Next.js development",
    "Node.js Python development",
    "AWS cloud solutions",
  ],
  openGraph: {
    title: "View Our Work - Services & Technologies | YAT India",
    description: "Explore our services and technologies: Web development, mobile apps, ecommerce, AI, AR/VR using React, Next.js, Node.js, Python, AWS, and more.",
    url: "https://yatindia.com/work",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "YAT India - Our Work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "View Our Work - Services & Technologies | YAT India",
    description: "Explore our services and technologies: Web development, mobile apps, ecommerce, AI, AR/VR using modern tech stacks.",
  },
  alternates: {
    canonical: "https://yatindia.com/work",
  },
}

const servicesWithTech = [
  {
    icon: Globe,
    title: "Website Development - Static & Dynamic",
    description: "Professional websites from simple static pages to complex dynamic web applications with content management systems.",
    detailedDescription: "We create websites that combine stunning design with powerful functionality. Whether you need a simple brochure site or a complex web application, we build solutions that scale with your business.",
    technologies: ["React", "Next.js", "Vue.js", "Angular", "TypeScript", "Node.js", "Django", "Express.js", "PostgreSQL", "MongoDB", "Tailwind CSS"],
    benefits: [
      "Fast loading times and optimal performance",
      "SEO-friendly structure for better search rankings",
      "Responsive design for all devices",
      "Scalable architecture for growth",
      "Secure and maintainable codebase",
    ],
    useCases: [
      "Corporate websites and landing pages",
      "E-commerce platforms",
      "Content management systems",
      "Web applications and dashboards",
      "Progressive web apps (PWAs)",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce Applications",
    description: "Complete ecommerce solutions with payment integration, inventory management, and seamless shopping experiences.",
    detailedDescription: "We build comprehensive ecommerce platforms that handle everything from product catalog management to secure payment processing and order fulfillment.",
    technologies: ["Next.js", "React", "Node.js", "Express.js", "PostgreSQL", "MongoDB", "Stripe", "PayPal", "AWS", "Docker", "Redis"],
    benefits: [
      "Secure payment gateway integration",
      "Real-time inventory management",
      "Mobile-optimized shopping experience",
      "Advanced analytics and reporting",
      "Multi-currency and multi-language support",
    ],
    useCases: [
      "Online retail stores",
      "B2B ecommerce platforms",
      "Marketplace applications",
      "Subscription-based services",
      "Digital product sales",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native iOS and Android applications, plus cross-platform solutions using React Native and Flutter.",
    detailedDescription: "We develop high-performance mobile applications that provide native-like experiences across iOS and Android platforms, or build cross-platform solutions for faster deployment.",
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "TypeScript", "Firebase", "AWS Amplify", "GraphQL", "Redux", "Expo"],
    benefits: [
      "Cross-platform compatibility",
      "Native performance and feel",
      "Offline functionality",
      "Push notifications and real-time updates",
      "App store optimization",
    ],
    useCases: [
      "Consumer mobile apps",
      "Enterprise mobile solutions",
      "Social networking apps",
      "E-commerce mobile apps",
      "Healthcare and fitness apps",
    ],
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Tailored software solutions designed specifically for your business needs and workflows.",
    detailedDescription: "We create bespoke software solutions that perfectly match your business processes, integrating seamlessly with your existing systems and workflows.",
    technologies: ["Python", "Java", "Node.js", "C#", "Go", "PostgreSQL", "MongoDB", "Docker", "Kubernetes", "AWS", "Azure"],
    benefits: [
      "Tailored to your specific needs",
      "Seamless system integration",
      "Scalable architecture",
      "Maintenance and support",
      "Future-proof technology choices",
    ],
    useCases: [
      "Enterprise resource planning (ERP)",
      "Customer relationship management (CRM)",
      "Business process automation",
      "Data analytics platforms",
      "Internal tooling and dashboards",
    ],
  },
  {
    icon: Boxes,
    title: "AR/VR Development",
    description: "Immersive augmented and virtual reality experiences for gaming, training, visualization, and more.",
    detailedDescription: "We create immersive AR and VR experiences that engage users in new and exciting ways, from gaming applications to training simulations and visualization tools.",
    technologies: ["Unity", "Unreal Engine", "ARCore", "ARKit", "WebXR", "Three.js", "Blender", "C#", "C++"],
    benefits: [
      "Immersive user experiences",
      "Interactive 3D visualization",
      "Training and simulation capabilities",
      "Enhanced engagement",
      "Cross-platform compatibility",
    ],
    useCases: [
      "Gaming applications",
      "Training and simulation",
      "Virtual showrooms",
      "Architectural visualization",
      "Educational experiences",
    ],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies including SEO, social media, content marketing, and analytics.",
    detailedDescription: "We help businesses grow their online presence through strategic digital marketing, including SEO optimization, social media management, and data-driven campaigns.",
    technologies: ["Google Analytics", "SEO Tools", "Social Media APIs", "Email Marketing Platforms", "Content Management Systems"],
    benefits: [
      "Increased online visibility",
      "Higher conversion rates",
      "Data-driven decision making",
      "Brand awareness and engagement",
      "Measurable ROI",
    ],
    useCases: [
      "SEO optimization",
      "Social media marketing",
      "Content marketing campaigns",
      "Pay-per-click advertising",
      "Email marketing automation",
    ],
  },
  {
    icon: Video,
    title: "2D & 3D Animation Videos",
    description: "Engaging animated content from 2D explainer videos to stunning 3D visualizations and animations.",
    detailedDescription: "We create compelling animated videos that tell your story, explain complex concepts, and engage your audience through professional 2D and 3D animation.",
    technologies: ["After Effects", "Blender", "Cinema 4D", "Maya", "Premiere Pro", "Adobe Creative Suite"],
    benefits: [
      "Engaging visual storytelling",
      "Complex concept explanation",
      "Professional production quality",
      "Brand consistency",
      "Versatile distribution formats",
    ],
    useCases: [
      "Product explainer videos",
      "Brand storytelling",
      "Training and educational content",
      "Marketing campaigns",
      "Social media content",
    ],
  },
  {
    icon: Sparkles,
    title: "AI Applications",
    description: "Intelligent AI-powered solutions including chatbots, machine learning models, and automation systems.",
    detailedDescription: "We develop AI-powered applications that automate processes, provide intelligent insights, and enhance user experiences through machine learning and natural language processing.",
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI", "Hugging Face", "Scikit-learn", "Keras", "NLP", "Computer Vision"],
    benefits: [
      "Process automation",
      "Intelligent decision making",
      "Enhanced user experiences",
      "Predictive analytics",
      "Cost reduction through efficiency",
    ],
    useCases: [
      "Chatbots and virtual assistants",
      "Predictive analytics",
      "Image and speech recognition",
      "Recommendation systems",
      "Process automation",
    ],
  },
]

const technologyCategories = [
  {
    category: "Frontend Technologies",
    description: "Modern frameworks and libraries for building user interfaces",
    technologies: ["React", "Next.js", "Vue.js", "Angular", "TypeScript", "JavaScript", "Tailwind CSS", "Redux"],
    why: "We use these technologies to create fast, responsive, and user-friendly interfaces that work seamlessly across all devices.",
  },
  {
    category: "Backend Technologies",
    description: "Robust server-side technologies for scalable applications",
    technologies: ["Node.js", "Python", "Java", "C#", "Django", "Express.js", "FastAPI", "Spring Boot"],
    why: "These technologies power our backend systems, ensuring reliable performance, security, and scalability for your applications.",
  },
  {
    category: "Cloud & DevOps",
    description: "Cloud infrastructure and deployment tools",
    technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Jenkins", "GitHub Actions"],
    why: "We leverage cloud platforms and DevOps tools to deploy, scale, and maintain your applications with high availability and performance.",
  },
  {
    category: "Mobile Development",
    description: "Cross-platform and native mobile app technologies",
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Expo"],
    why: "These tools enable us to build high-performance mobile applications that work seamlessly on iOS and Android platforms.",
  },
  {
    category: "AI & Machine Learning",
    description: "Artificial intelligence and machine learning frameworks",
    technologies: ["TensorFlow", "PyTorch", "OpenAI", "Hugging Face", "Scikit-learn", "Keras"],
    why: "We use these AI frameworks to build intelligent applications that learn, adapt, and provide valuable insights from data.",
  },
  {
    category: "Databases",
    description: "Relational and NoSQL database solutions",
    technologies: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "GraphQL"],
    why: "We choose the right database technology based on your needs, ensuring optimal performance, scalability, and data integrity.",
  },
]

export default function WorkPage() {
  const workJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "View Our Work - Services & Technologies",
    description: "Explore YAT India's comprehensive services and cutting-edge technologies",
    url: "https://yatindia.com/work",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: servicesWithTech.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
  }

  return (
    <main className="min-h-screen">
      <StructuredData data={workJsonLd} />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/80" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>
        <div className="container relative z-10 px-6 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
              View Our <span className="bg-gradient-primary bg-clip-text text-transparent">Work</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive services and the cutting-edge technologies we use to build exceptional digital solutions. 
              Learn how we transform ideas into reality.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section with Details */}
      <section className="py-16 md:py-24">
        <div className="container px-6 md:px-8 lg:px-12">
          <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Comprehensive solutions tailored to your business needs, powered by modern technologies
            </p>
          </div>

          <div className="space-y-16 md:space-y-24">
            {servicesWithTech.map((service, index) => {
              // Map service titles to IDs that match the services component
              const titleToIdMap: Record<string, string> = {
                "Website Development - Static & Dynamic": "website-development",
                "Ecommerce Applications": "ecommerce-applications",
                "Mobile App Development": "mobile-app-development",
                "Custom Software Development": "custom-software-development",
                "AR/VR Development": "ar-vr-development",
                "Digital Marketing": "digital-marketing",
                "2D & 3D Animation Videos": "animation-videos",
                "AI Applications": "ai-applications",
              };
              
              const serviceId = titleToIdMap[service.title] || service.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-+|-+$/g, '');
              
              return (
              <div
                key={index}
                id={serviceId}
                className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center scroll-mt-24 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Left Side - Icon and Content */}
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-display font-bold mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-lg mb-4">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.detailedDescription}
                  </p>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      Key Benefits
                    </h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Use Cases */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Target className="w-5 h-5 text-primary" />
                      Common Use Cases
                    </h4>
                    <ul className="space-y-2">
                      {service.useCases.map((useCase, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Start Your Project Button */}
                  <div className="mt-6">
                    <Link href="/get-started">
                      <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:shadow-glow">
                        Start Your Project
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Right Side - Technologies */}
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <div className="bg-muted/50 rounded-2xl p-6 md:p-8 border">
                    <h4 className="font-semibold mb-4 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-primary" />
                      Technologies We Use
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 rounded-lg bg-background border text-sm font-medium hover:border-primary/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Categories Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-6 md:px-8 lg:px-12">
          <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Technology Stack</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              We use cutting-edge technologies to build robust, scalable, and innovative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {technologyCategories.map((category, index) => (
              <div
                key={index}
                className="p-6 md:p-8 rounded-xl border bg-background hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-xl md:text-2xl font-display font-bold mb-2">
                  {category.category}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {category.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-muted text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {category.why}
                </p>
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
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24">
        <div className="container px-6 md:px-8 lg:px-12">
          <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">YAT India</span>?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              We combine expertise, innovation, and passion to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center p-6 rounded-xl border bg-background">
              <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2">High Performance</h3>
              <p className="text-sm text-muted-foreground">
                Optimized applications that load fast and scale seamlessly with your business.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl border bg-background">
              <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Secure & Reliable</h3>
              <p className="text-sm text-muted-foreground">
                Enterprise-grade security and reliability built into every solution we deliver.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl border bg-background">
              <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Expert Team</h3>
              <p className="text-sm text-muted-foreground">
                Experienced developers and designers committed to delivering excellence.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl border bg-background">
              <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Client-Focused</h3>
              <p className="text-sm text-muted-foreground">
                Your success is our priority. We partner with you every step of the way.
              </p>
            </div>
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
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-6 md:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Start Your <span className="bg-gradient-primary bg-clip-text text-transparent">Project</span>?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Let's discuss how we can help transform your ideas into reality using our expertise and cutting-edge technologies.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/get-started">
                <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:shadow-glow text-lg px-8">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="text-lg px-8 border-2">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

