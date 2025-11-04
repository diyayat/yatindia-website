import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, User, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import { StructuredData } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Blog - Research Papers & Technology Resources | YAT India",
  description: "Explore groundbreaking research papers and open source documents that shaped the future of technology and software development. Curated by YAT India experts, featuring HTTP, MapReduce, TensorFlow, Bitcoin, and more influential papers.",
  keywords: [
    "technology research papers",
    "software development research",
    "computer science papers",
    "open source documents",
    "technology blog",
    "software engineering research",
    "distributed systems papers",
    "machine learning research",
  ],
  openGraph: {
    title: "Blog - Research Papers & Technology Resources | YAT India",
    description: "Explore groundbreaking research papers and open source documents that shaped technology. Curated by YAT India experts.",
    url: "https://yatindia.com/blog",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "YAT India Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Research Papers & Technology Resources",
    description: "Explore groundbreaking research papers and open source documents that shaped technology. Curated by YAT India experts.",
  },
  alternates: {
    canonical: "https://yatindia.com/blog",
  },
}

const researchPapers = [
  {
    title: "HTTP/1.1: Hypertext Transfer Protocol",
    excerpt: "The foundational protocol that powers the World Wide Web. This RFC defines the protocol used for transmitting hypermedia documents and establishing the basis for web communication as we know it.",
    date: "June 1999",
    authors: "R. Fielding, J. Gettys, J. Mogul, H. Frystyk, L. Masinter, P. Leach, T. Berners-Lee",
    category: "Web Protocols",
    url: "https://datatracker.ietf.org/doc/html/rfc2616",
    impact: "Foundation of the modern web",
  },
  {
    title: "The Google File System",
    excerpt: "A scalable distributed file system for large distributed data-intensive applications. This paper describes Google's approach to handling massive amounts of data across commodity hardware.",
    date: "October 2003",
    authors: "Sanjay Ghemawat, Howard Gobioff, Shun-Tak Leung",
    category: "Distributed Systems",
    url: "https://static.googleusercontent.com/media/research.google.com/en//archive/gfs-sosp2003.pdf",
    impact: "Inspired Hadoop and modern distributed storage",
  },
  {
    title: "MapReduce: Simplified Data Processing on Large Clusters",
    excerpt: "A programming model and an associated implementation for processing and generating large data sets. This paper revolutionized big data processing and inspired frameworks like Hadoop and Spark.",
    date: "December 2004",
    authors: "Jeffrey Dean, Sanjay Ghemawat",
    category: "Big Data",
    url: "https://static.googleusercontent.com/media/research.google.com/en//archive/mapreduce-osdi04.pdf",
    impact: "Revolutionized big data processing",
  },
  {
    title: "Bigtable: A Distributed Storage System for Structured Data",
    excerpt: "A distributed storage system for managing structured data designed to scale to a very large size across thousands of commodity servers. This system influenced many NoSQL databases including HBase and Cassandra.",
    date: "November 2006",
    authors: "Fay Chang, Jeffrey Dean, Sanjay Ghemawat, Wilson C. Hsieh, Deborah A. Wallach, Mike Burrows, Tushar Chandra, Andrew Fikes, Robert E. Gruber",
    category: "Databases",
    url: "https://static.googleusercontent.com/media/research.google.com/en//archive/bigtable-osdi06.pdf",
    impact: "Foundation for modern NoSQL databases",
  },
  {
    title: "Bitcoin: A Peer-to-Peer Electronic Cash System",
    excerpt: "The original whitepaper that introduced blockchain technology and cryptocurrency. This paper proposed a solution to the double-spending problem using a peer-to-peer network, revolutionizing digital transactions.",
    date: "October 2008",
    authors: "Satoshi Nakamoto",
    category: "Blockchain",
    url: "https://bitcoin.org/bitcoin.pdf",
    impact: "Created the cryptocurrency and blockchain revolution",
  },
  {
    title: "Dynamo: Amazon's Highly Available Key-value Store",
    excerpt: "A highly available key-value storage system that some of Amazon's core services use to provide an always-on experience. This paper influenced the design of many modern distributed databases.",
    date: "October 2007",
    authors: "Giuseppe DeCandia, Deniz Hastorun, Madan Jampani, Gunavardhan Kakulapati, Avinash Lakshman, Alex Pilchin, Swaminathan Sivasubramanian, Peter Vosshall, Werner Vogels",
    category: "Distributed Systems",
    url: "https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf",
    impact: "Influenced modern NoSQL and distributed systems",
  },
  {
    title: "Representational State Transfer (REST)",
    excerpt: "The architectural style that defines how web services should be designed. This dissertation introduced REST principles that became the foundation for modern API design.",
    date: "2000",
    authors: "Roy Thomas Fielding",
    category: "Web Architecture",
    url: "https://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm",
    impact: "Foundation of modern RESTful APIs",
  },
  {
    title: "The Chubby Lock Service for Loosely-Coupled Distributed Systems",
    excerpt: "A lock service for loosely-coupled distributed systems. Chubby provides an interface much like a distributed file system with advisory locking, useful for coordination tasks.",
    date: "November 2006",
    authors: "Mike Burrows",
    category: "Distributed Systems",
    url: "https://static.googleusercontent.com/media/research.google.com/en//archive/chubby-osdi06.pdf",
    impact: "Influenced distributed coordination systems",
  },
  {
    title: "Spanner: Google's Globally-Distributed Database",
    excerpt: "A globally-distributed database that provides externally consistent distributed transactions, cross-datacenter replication, and automatic failover. This paper influenced modern distributed SQL databases.",
    date: "October 2012",
    authors: "James C. Corbett, Jeffrey Dean, Michael Epstein, Andrew Fikes, Christopher Frost, J. J. Furman, Sanjay Ghemawat, Andrey Gubarev, Christopher Heiser, Peter Hochschild, Wilson Hsieh, Sebastian Kanthak, Eugene Kogan, Hongyi Li, Alexander Lloyd, Sergey Melnik, David Mwaura, David Nagle, Sean Quinlan, Rajesh Rao, Lindsay Rolig, Yasushi Saito, Michal Szymaniak, Christopher Taylor, Ruth Wang, Dale Woodford",
    category: "Databases",
    url: "https://static.googleusercontent.com/media/research.google.com/en//archive/spanner-osdi2012.pdf",
    impact: "Pioneered globally-distributed databases",
  },
  {
    title: "TensorFlow: Large-Scale Machine Learning on Heterogeneous Distributed Systems",
    excerpt: "An interface for expressing machine learning algorithms and an implementation for executing such algorithms. This paper describes the TensorFlow system that became a cornerstone of modern ML infrastructure.",
    date: "March 2016",
    authors: "Martin Abadi, Ashish Agarwal, Paul Barham, Eugene Brevdo, Zhifeng Chen, Craig Citro, Greg S. Corrado, Andy Davis, Jeffrey Dean, Matthieu Devin, Sanjay Ghemawat, Ian Goodfellow, Andrew Harp, Geoffrey Irving, Michael Isard, Yangqing Jia, Rafal Jozefowicz, Lukasz Kaiser, Manjunath Kudlur, Josh Levenberg, Dan Mane, Rajat Monga, Sherry Moore, Derek Murray, Chris Olah, Mike Schuster, Jonathon Shlens, Benoit Steiner, Ilya Sutskever, Kunal Talwar, Paul Tucker, Vincent Vanhoucke, Vijay Vasudevan, Fernanda Viegas, Oriol Vinyals, Pete Warden, Martin Wattenberg, Martin Wicke, Yuan Yu, Xiaoqiang Zheng",
    category: "Machine Learning",
    url: "https://arxiv.org/abs/1603.04467",
    impact: "Revolutionized machine learning infrastructure",
  },
  {
    title: "The Linux Kernel",
    excerpt: "The open-source monolithic Unix-like computer operating system kernel. This project demonstrated the power of open-source collaboration and became the foundation for Android, servers, and embedded systems worldwide.",
    date: "September 1991",
    authors: "Linus Torvalds and the Linux Community",
    category: "Operating Systems",
    url: "https://www.kernel.org/doc/html/latest/",
    impact: "Powering billions of devices worldwide",
  },
  {
    title: "The C10K Problem",
    excerpt: "A classic paper on the challenges of handling 10,000 simultaneous connections on a single server. This document influenced the design of modern web servers and event-driven architectures.",
    date: "February 2006",
    authors: "Dan Kegel",
    category: "Web Servers",
    url: "http://www.kegel.com/c10k.html",
    impact: "Shaped modern async web server design",
  },
]

export default function BlogPage() {
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "YAT India Blog",
    description: "Curated research papers and open source documents that shaped technology",
    url: "https://yatindia.com/blog",
    publisher: {
      "@type": "Organization",
      name: "YAT India",
      url: "https://yatindia.com",
    },
  };

  return (
    <main className="min-h-screen">
      <StructuredData data={blogJsonLd} />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/80" />
        <div className="container relative z-10 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Curated by our team of experts, discover the groundbreaking research papers and open source documents 
              that revolutionized technology. From foundational web protocols to cutting-edge distributed systems, 
              we meticulously select papers that have shaped the future of software development.
            </p>
          </div>
        </div>
      </section>

      {/* Research Papers Grid */}
      <section className="py-24">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchPapers.map((paper, index) => (
              <article
                key={index}
                className="group rounded-xl border bg-background overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary">
                      {paper.category}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                    {paper.title}
                  </h2>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed flex-1">
                    {paper.excerpt}
                  </p>
                  
                  <div className="mb-3">
                    <span className="text-xs font-medium text-primary/80 bg-primary/5 px-2 py-1 rounded">
                      {paper.impact}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{paper.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span className="truncate">{paper.authors.split(',')[0]} {paper.authors.split(',').length > 1 ? 'et al.' : ''}</span>
                    </div>
                  </div>
                  
                  <a
                    href={paper.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center group/btn"
                  >
                    <Button variant="ghost" className="p-0 h-auto">
                      Read Paper
                      <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Curated by YAT India Experts
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              Our team meticulously curates these influential research papers and documents that have fundamentally 
              changed the landscape of computer science and software engineering. Each paper in our collection has 
              shaped the way we build, deploy, and scale modern applications at YAT India.
            </p>
            <p className="text-muted-foreground">
              All papers are freely available and open source. Click "Read Paper" to access the full document and 
              explore the research that drives innovation in our industry.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

