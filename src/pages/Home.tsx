import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { ArrowRight, Activity, Sprout, Zap, BarChart3, Shield, Clock, AlertTriangle, TrendingUp, ShoppingBag, GitBranch, GraduationCap, Heart, Smartphone, HelpCircle } from "lucide-react";
import heroImage from "@/assets/chicks-hero.webp";
import boyWithChicken from "@/assets/boy-with-chicken.png";
import farmImage from "@/assets/A360_Farm_Image.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

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

const faqs = [
  {
    question: "What is AgriFlock 360?",
    answer: "AgriFlock 360 is a mobile and web-based platform that uses AI, IoT, and data analytics to help poultry farmers manage their flocks, access credit, insurance, inputs, and markets, all in one place."
  },
  {
    question: "Who can use AgriFlock 360?",
    answer: "Any poultry farmer, from smallholder to mid-scale, can use the platform to improve productivity and profitability. It is currently being deployed across Kenya & the US. Extension officers to help them diagnose better and provide vaccination services. Poultry vendors and off-takers to access the farmers and buy grown chicken and eggs. Input providers to distribute and sell inputs."
  },
  {
    question: "How do I register as a farmer?",
    answer: "Download the AgriFlock 360 app from the Google Play Store & App Store or visit our website. Create an account and follow the prompts to register your farm."
  },
  {
    question: "Is the platform free to use?",
    answer: "Basic features are free (Quotations & alerts etc.) AI-powered tools may come with a small service fee."
  },
  {
    question: "What kind of AI tools are included?",
    answer: "The platform offers tools for precision feeding, disease detection, vaccination reminders, performance tracking, and more—all powered by AI."
  },
  {
    question: "How does AgriFlock 360 support sustainable farming?",
    answer: "We encourage climate-smart practices like composting, solar brooders, and biogas use, and we are working toward helping farmers earn from carbon credits."
  },
  {
    question: "Can I access the platform without a smartphone?",
    answer: "Yes. We are working on a USSD/SMS-based version to reach farmers with basic phones."
  },
  {
    question: "Is training provided for new users?",
    answer: "Yes. We provide video tutorials, in-app support, and extension officers to assist farmers in using the platform effectively."
  },
  {
    question: "Can I sell my chickens or eggs through the app?",
    answer: "Yes. The e-commerce module connects farmers with verified buyers, helping them access better prices and wider markets."
  },
  {
    question: "Is my data safe on AgriFlock 360?",
    answer: "Absolutely. We use end-to-end encryption and follow data protection regulations to keep farmer data secure."
  }
];

const Home = () => {
  const videoSection = useScrollReveal();
  const impactSection = useScrollReveal();
  const featuresSection = useScrollReveal();
  
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
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-background/30" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
                AI-Powered Poultry Management
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Regenerative Poultry Farming{" "}
              <span className="text-gradient">With AI Precision</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl">
              Transforming poultry operations with IoT-integrated smart solar brooders, AI analytics, integrated productivity tools and farm to fork blockchain traceability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/download">
                  <Smartphone className="mr-2 h-5 w-5" />
                  Explore via Mobile App <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/coming-soon">
                  Explore via Web App <ArrowRight className="ml-2" />
                </Link>
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
      <section 
        ref={videoSection.ref}
        className={`relative py-12 sm:py-16 md:py-20 overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background opacity-0 ${
          videoSection.isVisible ? "animate-slide-up-fade" : ""
        }`}
      >
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-8 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4 animate-fade-in">
              <Badge className="mb-2 sm:mb-4 text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5">Platform Overview</Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gradient px-4">
                What is AgriFlock 360?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                An end-to-end smart farming solution that transforms traditional poultry farming into a data-driven, efficient operation with cutting-edge technology and AI-powered insights.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
              {/* Video Container */}
              <div className="relative group animate-fade-in order-1">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl sm:rounded-3xl blur-lg sm:blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl backdrop-blur-sm bg-background/50">
                  <div className="aspect-[16/9]">
                    <img
                      src={farmImage}
                      alt="AgriFlock 360 - Regenerative poultry farming with AI precision"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6 sm:space-y-8 animate-fade-in order-2">
                <p className="text-base sm:text-lg md:text-xl text-foreground leading-relaxed">
                  AgriFlock 360 helps smallholder farmers reduce flock mortality, increase efficiencies and profit through sustainable practices.
                </p>

                <div className="space-y-3 sm:space-y-4 md:space-y-5">
                  <Card className="p-4 sm:p-5 hover-lift border-l-4 border-l-primary bg-card/50 backdrop-blur">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-sm sm:text-base text-foreground mb-1">Smart Monitoring</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Real-time tracking of flock health, environmental conditions, and productivity metrics
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4 sm:p-5 hover-lift border-l-4 border-l-accent bg-card/50 backdrop-blur">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-sm sm:text-base text-foreground mb-1">AI-Powered Analytics</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Predictive insights for disease prevention, feed optimization, and production forecasting
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4 sm:p-5 hover-lift border-l-4 border-l-primary bg-card/50 backdrop-blur">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-sm sm:text-base text-foreground mb-1">IoT Integration</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Solar-powered sensors and automated systems for efficient farm management
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4 sm:p-5 hover-lift border-l-4 border-l-accent bg-card/50 backdrop-blur">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-sm sm:text-base text-foreground mb-1">Offline-First Design</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Works seamlessly in rural areas with limited connectivity
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Link to="/download" className="flex-1 sm:flex-initial">
                    <Button size="lg" className="w-full sm:w-auto group gradient-hero text-sm sm:text-base">
                      <Smartphone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      Explore via Mobile App
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/coming-soon" className="flex-1 sm:flex-initial">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto text-sm sm:text-base">
                      Explore via Web App
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
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

      {/* Impact Section */}
      <section 
        ref={impactSection.ref}
        className={`py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 opacity-0 ${
          impactSection.isVisible ? "animate-slide-up-fade" : ""
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative group animate-fade-in order-2 lg:order-1">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl">
                <img 
                  src={boyWithChicken} 
                  alt="Young farmer with chicken showing the human connection to poultry farming" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 animate-fade-in order-1 lg:order-2">
              <div className="inline-block">
                <Badge className="text-sm px-4 py-1.5">
                  <Heart className="w-4 h-4 mr-2 inline" />
                  Our Impact
                </Badge>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Empowering the Next Generation of{" "}
                <span className="text-gradient">Smart Farmers</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every farmer has a story. AgriFlock 360 is more than technology—it's about preserving livelihoods, feeding communities, and creating opportunities for smallholder farmers and their families.
              </p>

              <div className="space-y-4">
                <Card className="p-5 border-l-4 border-l-primary bg-card/50 backdrop-blur">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base mb-1">Protecting Livelihoods</h3>
                      <p className="text-sm text-muted-foreground">
                        Reducing mortality rates by up to 40% through smart monitoring and early disease detection
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-5 border-l-4 border-l-accent bg-card/50 backdrop-blur">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base mb-1">Increasing Profitability</h3>
                      <p className="text-sm text-muted-foreground">
                        Optimizing feed costs and improving efficiency to boost farm income by 25-30%
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-5 border-l-4 border-l-primary bg-card/50 backdrop-blur">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base mb-1">Building Knowledge</h3>
                      <p className="text-sm text-muted-foreground">
                        Providing training and advisory services to help farmers make data-driven decisions
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="pt-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/about">
                    Learn About Our Mission <ArrowRight className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        ref={featuresSection.ref}
        className={`py-20 opacity-0 ${
          featuresSection.isVisible ? "animate-slide-up-fade" : ""
        }`}
      >
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

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block">
                <Badge className="text-sm px-4 py-1.5">
                  <HelpCircle className="w-4 h-4 mr-2 inline" />
                  FAQ
                </Badge>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
                Frequently Asked <span className="text-gradient">Questions</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Everything you need to know about AgriFlock 360
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border-2 border-border rounded-lg px-6 hover:border-primary/50 transition-colors"
                >
                  <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:text-primary py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">Still have questions?</p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Contact Us <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
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
            Join the digital agriculture revolution with AgriFlock 360's complete IoT ecosystem
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="accent" size="lg" asChild>
              <Link to="/download">
                <Smartphone className="mr-2 h-5 w-5" />
                Explore via Mobile App <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="text-white border-white hover:bg-white hover:text-primary">
              <Link to="/coming-soon">
                Explore via Web App <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
