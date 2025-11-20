import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Calculator, AlertCircle, LineChart, Scale, Droplet } from "lucide-react";
import { Link } from "react-router-dom";
import feedingImage from "@/assets/feeding-module.jpg";

const features = [
  {
    icon: Calculator,
    title: "Daily Feed Plans",
    description: "Auto-generated feeding plans based on bird age, breed, and growth targets",
  },
  {
    icon: Scale,
    title: "FCR Calculation",
    description: "Automatic Feed Conversion Ratio tracking to measure efficiency and profitability",
  },
  {
    icon: LineChart,
    title: "Growth Analytics",
    description: "Real-time charts showing feed efficiency trends and weight progression",
  },
  {
    icon: Droplet,
    title: "Water Monitoring",
    description: "Track water intake patterns alongside feed consumption for health insights",
  },
  {
    icon: AlertCircle,
    title: "Smart Alerts",
    description: "Notifications for feed shortages, wastage, or abnormal consumption patterns",
  },
  {
    icon: TrendingUp,
    title: "Cost Analysis",
    description: "Calculate feed cost per bird and optimize your budget allocation",
  },
];

const Feeding = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 gradient-accent opacity-10" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20">
                  Feeding Service
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                Precision Feeding &{" "}
                <span className="text-gradient-accent">Performance Analytics</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground">
                Optimize daily feed allocation and measure feed-to-weight efficiency 
                for smallholder farmers managing birds.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="accent" size="lg" asChild>
                  <Link to="/download">Start Optimizing</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/download">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={feedingImage}
                alt="Precision feeding system"
                className="rounded-2xl shadow-2xl hover-lift"
              />
              <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-xl border-2 border-accent/20">
                <div className="text-3xl font-bold text-gradient-accent">1.65</div>
                <div className="text-sm text-muted-foreground">Target FCR</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Powerful <span className="text-gradient-accent">Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Data-driven insights to maximize feed efficiency and profitability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="p-6 hover-lift border-2 hover:border-accent/50 transition-all"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <feature.icon className="h-10 w-10 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Feed Optimization <span className="text-gradient-accent">Process</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {[
              {
                step: "01",
                title: "Set Growth Targets",
                description: "Input target weight, production timeline, and breed specifications to generate optimal feeding schedules",
              },
              {
                step: "02",
                title: "Track Daily Consumption",
                description: "Log daily feed amounts, water intake, and any mortality events for accurate FCR calculations",
              },
              {
                step: "03",
                title: "Sample Bird Weights",
                description: "Regularly weigh sample birds to monitor growth progression and adjust feeding plans",
              },
              {
                step: "04",
                title: "Analyze Performance",
                description: "View real-time dashboards showing FCR trends, cost analysis, and efficiency recommendations",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center text-white font-bold text-xl shadow-accent-glow group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground text-lg">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FCR Benchmarks */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 border-2 border-accent/20">
              <h2 className="text-3xl font-bold mb-6">Understanding Feed Conversion Ratio</h2>
              <div className="prose prose-slate max-w-none">
                <p className="text-muted-foreground mb-4">
                  Feed Conversion Ratio (FCR) measures how efficiently birds convert feed into body weight. 
                  Lower FCR means better efficiency and profitability.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <div className="text-2xl font-bold text-primary">1.5 - 1.7</div>
                    <div className="text-sm text-muted-foreground mt-2">Excellent (Broilers)</div>
                  </div>
                  <div className="text-center p-4 bg-accent/5 rounded-lg">
                    <div className="text-2xl font-bold text-accent">1.8 - 2.0</div>
                    <div className="text-sm text-muted-foreground mt-2">Good (Broilers)</div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold">2.0+</div>
                    <div className="text-sm text-muted-foreground mt-2">Needs Improvement</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Database Schema */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 border-2 border-accent/20">
              <h2 className="text-3xl font-bold mb-6">Database Entities</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-accent">Feed Plans</h3>
                  <p className="text-sm text-muted-foreground">
                    Customized feeding schedules based on growth targets and breed specifications
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-accent">Feed Logs</h3>
                  <p className="text-sm text-muted-foreground">
                    Daily records of feed consumption, water intake, and mortality events
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-accent">Weight Samples</h3>
                  <p className="text-sm text-muted-foreground">
                    Periodic weight measurements to track growth and calculate FCR
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-accent">Feed Alerts</h3>
                  <p className="text-sm text-muted-foreground">
                    Automated notifications for shortages, wastage, or efficiency issues
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Maximize Feed Efficiency
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Start tracking your FCR and reducing feed costs today
          </p>
          <Button variant="accent" size="lg">
            Begin Optimization
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Feeding;
