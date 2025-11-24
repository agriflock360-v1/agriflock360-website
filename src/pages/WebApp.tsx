import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Monitor, Smartphone, Check, X, ArrowRight, BarChart3, Users, FileText, Settings, Zap, Cloud, Globe, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const webFeatures = [
  {
    icon: BarChart3,
    title: "Advanced Analytics Dashboard",
    description: "Comprehensive data visualization and reporting with exportable insights",
    available: { web: true, mobile: true }
  },
  {
    icon: Users,
    title: "Multi-User Management",
    description: "Assign roles, permissions, and collaborate with your team",
    available: { web: true, mobile: false }
  },
  {
    icon: FileText,
    title: "Detailed Reports & Export",
    description: "Generate PDF reports and export data in multiple formats",
    available: { web: true, mobile: true }
  },
  {
    icon: Settings,
    title: "Advanced Farm Configuration",
    description: "Configure complex farm settings and automation rules",
    available: { web: true, mobile: false }
  },
  {
    icon: Zap,
    title: "Real-Time Monitoring",
    description: "Live IoT sensor data and instant notifications",
    available: { web: true, mobile: true }
  },
  {
    icon: Cloud,
    title: "Bulk Data Operations",
    description: "Import/export large datasets and batch operations",
    available: { web: true, mobile: false }
  },
  {
    icon: Globe,
    title: "Offline Mode",
    description: "Work without internet and sync when connected",
    available: { web: false, mobile: true }
  },
  {
    icon: Lock,
    title: "Push Notifications",
    description: "Instant alerts for critical farm events",
    available: { web: false, mobile: true }
  },
];

const benefits = [
  {
    title: "Larger Screen Experience",
    description: "View comprehensive data visualizations and manage multiple tasks simultaneously on a full-sized display.",
    icon: Monitor
  },
  {
    title: "Team Collaboration",
    description: "Invite team members, assign roles, and manage your poultry operations collaboratively from anywhere.",
    icon: Users
  },
  {
    title: "Advanced Configuration",
    description: "Access advanced settings, automation rules, and detailed farm configuration options not available on mobile.",
    icon: Settings
  },
  {
    title: "Powerful Reporting",
    description: "Generate detailed reports, export data in multiple formats, and perform in-depth analysis of your farm performance.",
    icon: FileText
  }
];

const WebApp = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-background via-primary/5 to-accent/5 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse-slow" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="text-sm px-4 py-1.5">
              <Monitor className="w-4 h-4 mr-2 inline" />
              Web Platform
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Manage Your Farm from{" "}
              <span className="text-gradient">Any Browser</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Access AgriFlock360's powerful web platform for comprehensive farm management, advanced analytics, and team collaboration—all from your desktop or laptop.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button variant="hero" size="lg" asChild>
                <a href="https://app.agriflock360.io" target="_blank" rel="noopener noreferrer">
                  <Monitor className="mr-2 h-5 w-5" />
                  Launch Web App <ArrowRight className="ml-2" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/download">
                  <Smartphone className="mr-2 h-5 w-5" />
                  Get Mobile App
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Why Choose the <span className="text-gradient">Web Platform?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the full power of AgriFlock360 with features designed for desktop productivity
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={benefit.title}
                className="p-8 hover-lift bg-card border-2 hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 shadow-glow">
                    <benefit.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Comparison Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-gradient">Web vs Mobile</span> Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Compare features across platforms and choose what works best for your workflow
            </p>
          </div>

          {/* Desktop Comparison Table */}
          <div className="hidden lg:block max-w-5xl mx-auto">
            <Card className="overflow-hidden border-2">
              <div className="grid grid-cols-12 bg-gradient-to-r from-primary/10 to-accent/10 p-6 font-semibold border-b">
                <div className="col-span-6">Feature</div>
                <div className="col-span-3 text-center flex items-center justify-center gap-2">
                  <Monitor className="h-5 w-5 text-primary" />
                  <span>Web App</span>
                </div>
                <div className="col-span-3 text-center flex items-center justify-center gap-2">
                  <Smartphone className="h-5 w-5 text-accent" />
                  <span>Mobile App</span>
                </div>
              </div>
              {webFeatures.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`grid grid-cols-12 p-6 ${
                    index !== webFeatures.length - 1 ? "border-b" : ""
                  } hover:bg-muted/50 transition-colors`}
                >
                  <div className="col-span-6 flex items-start gap-4">
                    <feature.icon className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                  <div className="col-span-3 flex items-center justify-center">
                    {feature.available.web ? (
                      <Check className="h-6 w-6 text-green-600" />
                    ) : (
                      <X className="h-6 w-6 text-muted-foreground/40" />
                    )}
                  </div>
                  <div className="col-span-3 flex items-center justify-center">
                    {feature.available.mobile ? (
                      <Check className="h-6 w-6 text-green-600" />
                    ) : (
                      <X className="h-6 w-6 text-muted-foreground/40" />
                    )}
                  </div>
                </div>
              ))}
            </Card>
          </div>

          {/* Mobile Comparison Cards */}
          <div className="lg:hidden space-y-4">
            {webFeatures.map((feature) => (
              <Card key={feature.title} className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <feature.icon className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
                <div className="flex gap-4 pt-4 border-t">
                  <div className="flex-1 flex items-center justify-center gap-2 p-3 rounded-lg bg-muted/50">
                    <Monitor className="h-4 w-4 text-primary" />
                    {feature.available.web ? (
                      <Check className="h-5 w-5 text-green-600" />
                    ) : (
                      <X className="h-5 w-5 text-muted-foreground/40" />
                    )}
                  </div>
                  <div className="flex-1 flex items-center justify-center gap-2 p-3 rounded-lg bg-muted/50">
                    <Smartphone className="h-4 w-4 text-accent" />
                    {feature.available.mobile ? (
                      <Check className="h-5 w-5 text-green-600" />
                    ) : (
                      <X className="h-5 w-5 text-muted-foreground/40" />
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Case Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Choose the Right <span className="text-gradient">Platform</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4 shadow-glow">
                  <Monitor className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Best for Web App</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Detailed data analysis and reporting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Managing multiple farms or team members</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Complex configuration and automation setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Bulk data operations and exports</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-accent/5 to-accent/10 border-2 border-accent/20">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center mb-4 shadow-glow">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Best for Mobile App</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>On-the-go monitoring and quick updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Field work with offline capabilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Instant push notifications for alerts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Quick logging and record updates</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Start Managing Your Farm Today
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Access AgriFlock360 from any device—use the web app for comprehensive management or mobile app for on-the-go operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="accent" size="lg" asChild>
              <a href="https://app.agriflock360.io" target="_blank" rel="noopener noreferrer">
                <Monitor className="mr-2 h-5 w-5" />
                Launch Web App <ArrowRight className="ml-2" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="text-white border-white hover:bg-white hover:text-primary">
              <Link to="/download">
                <Smartphone className="mr-2 h-5 w-5" />
                Download Mobile App
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebApp;
