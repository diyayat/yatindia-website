import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { 
  Heart, 
  Wallet, 
  Truck, 
  Briefcase, 
  CreditCard, 
  Building2, 
  Package, 
  Calculator, 
  ShoppingCart, 
  GraduationCap, 
  Smartphone, 
  Fuel, 
  Hammer, 
  Plane, 
  Sprout, 
  Home, 
  Newspaper 
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Industries We Serve - Healthcare, Fintech, Education & More",
  description: "We serve diverse industries with custom software solutions tailored to their unique needs. Healthcare, fintech, transportation, financial services, retail, banking, supply chain, education, real estate, construction, and more. Industry-specific software solutions in India.",
  keywords: [
    "healthcare software development",
    "fintech software solutions",
    "education software",
    "retail software development",
    "banking software",
    "supply chain software",
    "real estate software",
    "construction software",
    "industry-specific software",
    "custom software for industries",
  ],
  openGraph: {
    title: "Industries We Serve - Healthcare, Fintech, Education & More | YAT India",
    description: "Custom software solutions for diverse industries: Healthcare, fintech, transportation, financial services, retail, banking, supply chain, education, and more.",
    url: "https://yatindia.com/industries",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "YAT India Industries",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve - YAT India",
    description: "Custom software solutions for diverse industries: Healthcare, fintech, education, retail, banking, and more.",
  },
  alternates: {
    canonical: "https://yatindia.com/industries",
  },
}

const industries = [
  {
    title: "Healthcare",
    description: "Ensures a smooth, digital healthcare experience. Our technology ranks patient privacy, streamlines clinical workflows, and boosts patient engagement. It bridges the gap between healthcare providers and patients.",
    icon: Heart,
    link: "/industries/healthcare",
  },
  {
    title: "Fintech",
    description: "We cover sectors ranging from healthcare to fintech, and education to construction. Our expertise ensures that every client receives a solution suited to their industry's demands.",
    icon: Wallet,
    link: "/industries/fintech",
  },
  {
    title: "Transportation and Logistics",
    description: "Maximizes supply chain efficiency and boosts production. Our solutions cater to real-time data processing, fleet management, and efficient route planning.",
    icon: Truck,
    link: "/industries/logistics",
  },
  {
    title: "Business Software Development",
    description: "We cover sectors ranging from healthcare to fintech, and education to construction. Our expertise ensures that every client receives a solution suited to their industry's demands.",
    icon: Briefcase,
    link: "/industries/business-software-development",
  },
  {
    title: "Financial Services",
    description: "We offer full financial services software. It covers risk management, managing compliance, and financial planning. Our software solutions provide businesses and consumers with a secure, fast, and easy experience.",
    icon: CreditCard,
    link: "/industries/finance",
  },
  {
    title: "Retail",
    description: "Drives business success and delights customers. We help companies manage stock and serve customers through inventory and e-commerce solutions. These solutions also help build customer relationships and integrate with e-commerce platforms.",
    icon: ShoppingCart,
    link: "#",
  },
  {
    title: "Banking",
    description: "Enhance customer service and online banking with secure transactions. We implement omnichannel banking strategies and integrate innovative fintech solutions. This helps us meet the changing needs of the banking sector.",
    icon: Building2,
    link: "#",
  },
  {
    title: "Supply Chain Development",
    description: "Boost supply chain efficiency. Our software services target inventory management, demand forecasting, and logistics. We utilize advanced technology and best practices to help businesses reduce costs and work better.",
    icon: Package,
    link: "#",
  },
  {
    title: "Accounting",
    description: "Provide financial reporting tools, including budgeting and tax planning. We design software solutions for accuracy and efficiency. It simplifies financial oversight for businesses.",
    icon: Calculator,
    link: "#",
  },
  {
    title: "e-Commerce",
    description: "Creating user-friendly shopping platforms. Our engineers add advanced payment gateways. Using data analytics for personalized customer experiences and streamlined business operations.",
    icon: ShoppingCart,
    link: "#",
  },
  {
    title: "Education",
    description: "Educative software that transforms learning and teaching experiences. Our application services help with interactive learning. It provides efficient management and e-learning solutions, making education more accessible and effective.",
    icon: GraduationCap,
    link: "#",
  },
  {
    title: "On-Demand App Development",
    description: "Build custom on-demand apps for various industries with easy-to-use interfaces and high performance. We build apps that help companies provide fast, reliable services. These apps boost customer satisfaction and loyalty.",
    icon: Smartphone,
    link: "#",
  },
  {
    title: "Oil & Gas",
    description: "Help oil and gas companies with exploration, production, and distribution. We understand their unique challenges. Our solutions improve operations and inform decisions. This helps companies increase their productivity and reduce costs.",
    icon: Fuel,
    link: "#",
  },
  {
    title: "Construction",
    description: "Focuses on project management, structural design, and resource allocation. Our solutions aim to enhance production and streamline the construction process.",
    icon: Hammer,
    link: "#",
  },
  {
    title: "Travel",
    description: "We understand that the travel industry is dynamic. We create efficient booking systems and manage customer relationships and itineraries. Companies use our software solutions to simplify operations and boost customer satisfaction.",
    icon: Plane,
    link: "#",
  },
  {
    title: "Agriculture",
    description: "Helps farmers and agribusinesses boost their productivity and efficiency. We develop solutions for agriculture businesses in crop management and supply chain optimization.",
    icon: Sprout,
    link: "#",
  },
  {
    title: "Real Estate",
    description: "Help a real estate company stand out. Our software helps businesses manage properties, build customer relationships, and showcase them.",
    icon: Home,
    link: "#",
  },
  {
    title: "News",
    description: "Empower agencies to dominate their content strategy and connect with a massive audience. Our solutions focus on management, engagement, and distribution. We provide agencies with the tools to compete in the digital world.",
    icon: Newspaper,
    link: "#",
  },
]

export default function IndustriesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/80" />
        <div className="container relative z-10 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Industries We <span className="bg-gradient-primary bg-clip-text text-transparent">Serve</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We deliver custom software solutions tailored to the unique needs of diverse industries. 
              From healthcare to fintech, we help businesses transform and thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group relative rounded-xl border bg-background overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Background Gradient Overlay */}
                <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-300 bg-gradient-to-br from-primary/10 to-accent/10" />
                
                {/* Content */}
                <div className="relative p-8 min-h-[420px] flex flex-col">
                  {/* Icon */}
                  <div className="mb-6 h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <industry.icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-primary transition-colors">
                    {industry.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground flex-grow leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

