import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Activity, Sprout, Zap, BarChart3, Shield, Clock } from "lucide-react";
import heroImage from "@/assets/hero-farm.jpg";

const modules = [
  {
    title: "Vaccination & Health Tracking",
    description: "Reduce preventable chick mortality with digital vaccination schedules, alerts, and veterinary verification.",
    icon: Activity,
    href: "/vaccination",
    color: "text-primary",
  },
  {
    title: "Precision Feeding Analytics",
    description: "Optimize feed allocation and measure efficiency with automated FCR tracking and growth analytics.",
    icon: Sprout,
    href: "/feeding",
    color: "text-accent",
  },
  {
    title: "Solar Smart Brooder IoT",
    description: "Monitor temperature, humidity, and power in real-time with solar-powered IoT integration.",
    icon: Zap,
    href: "/brooder",
    color: "text-primary-glow",
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
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Digitizing Smallholder{" "}
              <span className="text-gradient">Poultry Farming</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
              Transform your poultry operations with IoT-integrated smart brooders, 
              AI analytics, and solar-powered technology designed for 300-1,000 birds.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/download">
                  Explore Platform <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/download">View Modules</Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-8 pt-8">
              <div className="space-y-1">
                <div className="text-4xl font-bold text-gradient">300+</div>
                <div className="text-sm text-muted-foreground">Birds Capacity</div>
              </div>
              <div className="space-y-1">
                <div className="text-4xl font-bold text-gradient-accent">100%</div>
                <div className="text-sm text-muted-foreground">Solar Powered</div>
              </div>
              <div className="space-y-1">
                <div className="text-4xl font-bold text-gradient">24/7</div>
                <div className="text-sm text-muted-foreground">IoT Monitoring</div>
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

      {/* Modules Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Three Integrated <span className="text-gradient">Modules</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete farm management system with health tracking, feeding optimization, and IoT automation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <Card
                key={module.title}
                className="p-8 hover-lift bg-card border-2 hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <module.icon className={`h-12 w-12 ${module.color} mb-6`} />
                <h3 className="text-2xl font-bold mb-4">{module.title}</h3>
                <p className="text-muted-foreground mb-6">{module.description}</p>
                <Button variant="ghost" asChild className="group">
                  <Link to={module.href}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
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
