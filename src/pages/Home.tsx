import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Activity, Sprout, Zap, BarChart3, Shield, Clock, AlertTriangle, TrendingUp, ShoppingBag, GitBranch, GraduationCap } from "lucide-react";
import heroImage from "@/assets/hero-farm.jpg";

const services = [
  {
    title: "Vaccination & Health Tracking",
    description: "Reduce preventable chick mortality with digital vaccination schedules, alerts, and veterinary verification.",
    icon: Activity,
    href: "/vaccination",
    color: "text-primary",
    available: true,
  },
  {
    title: "Precision Feeding Analytics",
    description: "Optimize feed allocation and measure efficiency with automated FCR tracking and growth analytics.",
    icon: Sprout,
    href: "/feeding",
    color: "text-accent",
    available: true,
  },
  {
    title: "Solar Smart Brooder IoT",
    description: "Monitor temperature, humidity, and power in real-time with solar-powered IoT integration.",
    icon: Zap,
    href: "/brooder",
    color: "text-primary-glow",
    available: true,
  },
  {
    title: "AI Analytics & Record Keeping",
    description: "Automated farm insights and performance data with intelligent record management and analytics.",
    icon: BarChart3,
    href: "/analytics",
    color: "text-primary",
    available: true,
  },
  {
    title: "Real-Time Disease Detection",
    description: "AI algorithms that monitor flock health, detect early disease signs, and recommend treatment.",
    icon: AlertTriangle,
    color: "text-accent",
    available: false,
  },
  {
    title: "Production Forecasting & Quotations",
    description: "Predict production costs, outputs, and profitability with accurate forecasting tools.",
    icon: TrendingUp,
    color: "text-primary-glow",
    available: false,
  },
  {
    title: "Direct Market Linkages",
    description: "Connect farmers to reliable buyers of grown chickens and verified input suppliers.",
    icon: ShoppingBag,
    color: "text-primary",
    available: false,
  },
  {
    title: "Blockchain Traceability",
    description: "Complete transparency from farm to fork with secure blockchain-based product tracking.",
    icon: GitBranch,
    color: "text-accent",
    available: false,
  },
  {
    title: "E-Extension Services",
    description: "On-demand training, advisory support, and vaccination services for continuous learning.",
    icon: GraduationCap,
    color: "text-primary-glow",
    available: false,
  },
];

const features = [
  {
    icon: BarChart3,
    title: "AI-Powered Analytics",
    description: "Predictive insights for disease prevention and feed optimization",
  },
  {
    icon: Shield,
    title: "Offline-First Design",
    description: "Works seamlessly in rural areas with automatic sync",
  },
  {
    icon: Clock,
    title: "Real-Time Monitoring",
    description: "Live IoT data updates every 5-10 minutes",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Modern smart poultry farm"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
                AI-Powered Poultry Management
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Digitizing Smallholder{" "}
              <span className="text-gradient">Poultry Farming</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl">
              Transform your poultry operations with IoT-integrated smart solar brooders, AI analytics, multiple integrated productivity tools and trace your chicken from farm to fork through blockchain technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/download">
                  Explore Platform <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/download">View Services</Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:flex sm:flex-wrap sm:gap-8 pt-8">
              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl font-bold text-gradient">100+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Birds Capacity</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl font-bold text-gradient-accent">100%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Solar Powered</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl font-bold text-gradient">24/7</div>
                <div className="text-xs sm:text-sm text-muted-foreground">IoT Monitoring</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 space-y-4 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                What is AgriFlock360
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-fade-in">
                <video
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                >
                  <source src="/AgriFlock360 Video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="space-y-6 animate-fade-in">
                <p className="text-lg text-muted-foreground">
                  AgriFlock360 is a comprehensive digital platform designed to revolutionize poultry farming through smart technology and data-driven insights.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <p className="text-foreground">
                      <span className="font-semibold">Smart Monitoring:</span> Real-time tracking of flock health, environmental conditions, and productivity metrics
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <p className="text-foreground">
                      <span className="font-semibold">AI-Powered Analytics:</span> Predictive insights for disease prevention, feed optimization, and production forecasting
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <p className="text-foreground">
                      <span className="font-semibold">IoT Integration:</span> Solar-powered sensors and automated systems for efficient farm management
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <p className="text-foreground">
                      <span className="font-semibold">Offline-First Design:</span> Works seamlessly in rural areas with limited connectivity
                    </p>
                  </div>
                </div>
                <div className="pt-4">
                  <Link to="/download">
                    <Button size="lg" className="group">
                      Get Started Today
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Our <span className="text-gradient">Solutions & Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete farm management system with health tracking, feeding optimization, and IoT automation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="p-8 hover-lift bg-card border-2 hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-start mb-6">
                  <service.icon className={`h-12 w-12 ${service.color}`} />
                  {!service.available && (
                    <Badge variant="secondary" className="text-xs">Coming Soon</Badge>
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                {service.available ? (
                  <Button variant="ghost" asChild className="group">
                    <Link to={service.href!}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                ) : (
                  <Button variant="ghost" disabled className="cursor-not-allowed opacity-60">
                    Coming Soon
                  </Button>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature) => (
              <div key={feature.title} className="text-center space-y-4">
                <div className="inline-flex p-4 rounded-2xl gradient-primary shadow-glow">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Join the digital agriculture revolution with AgriFlock360's complete IoT ecosystem
          </p>
          <Button variant="accent" size="lg" asChild>
            <Link to="/download">
              Get Started Today <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
