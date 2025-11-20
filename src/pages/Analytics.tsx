import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, Database, FileText, Brain, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Monitor flock performance with live data dashboards and key performance indicators",
  },
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Get intelligent recommendations based on historical data and predictive analytics",
  },
  {
    icon: Database,
    title: "Automated Record Keeping",
    description: "Automatically track feed consumption, mortality rates, growth patterns, and costs",
  },
  {
    icon: TrendingUp,
    title: "Performance Forecasting",
    description: "Predict future outcomes and optimize production based on current trends",
  },
  {
    icon: FileText,
    title: "Comprehensive Reports",
    description: "Generate detailed reports for financial analysis, compliance, and decision-making",
  },
  {
    icon: CheckCircle2,
    title: "Multi-Batch Tracking",
    description: "Manage and compare data across multiple batches and production cycles",
  },
];

const Analytics = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-10" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
                  Analytics Service
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                AI Analytics &{" "}
                <span className="text-gradient">Record Keeping</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground">
                Transform your farm data into actionable insights with AI-powered analytics 
                and automated record-keeping for smarter decision-making.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/download">Start Analyzing</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/download">Contact Sales</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl shadow-2xl hover-lift bg-gradient-to-br from-primary/20 to-primary/5 p-12 border border-primary/20">
                <BarChart3 className="w-full h-64 text-primary" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-xl border-2 border-primary/20">
                <div className="text-3xl font-bold text-gradient">40%</div>
                <div className="text-sm text-muted-foreground">Efficiency Increase</div>
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
              Powerful <span className="text-gradient">Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to track, analyze, and optimize your poultry farm operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 hover-lift space-y-4 border-2 border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                Why Choose Our <span className="text-gradient">Analytics</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Data-driven decisions lead to better outcomes
              </p>
            </div>

            <div className="space-y-8">
              <Card className="p-8 border-2 border-border/50">
                <h3 className="text-2xl font-bold mb-4">Automated Data Collection</h3>
                <p className="text-muted-foreground text-lg">
                  No more manual record-keeping. Our system automatically captures and organizes 
                  all farm data from feeding, vaccination, mortality, and growth metrics into 
                  one centralized platform.
                </p>
              </Card>

              <Card className="p-8 border-2 border-border/50">
                <h3 className="text-2xl font-bold mb-4">AI-Powered Recommendations</h3>
                <p className="text-muted-foreground text-lg">
                  Leverage machine learning algorithms that analyze your farm's historical data 
                  to provide personalized recommendations for feed optimization, disease prevention, 
                  and production forecasting.
                </p>
              </Card>

              <Card className="p-8 border-2 border-border/50">
                <h3 className="text-2xl font-bold mb-4">Financial Intelligence</h3>
                <p className="text-muted-foreground text-lg">
                  Track costs, revenue, and profitability in real-time. Generate financial reports 
                  that help you understand your ROI, identify cost-saving opportunities, and make 
                  informed investment decisions.
                </p>
              </Card>

              <Card className="p-8 border-2 border-border/50">
                <h3 className="text-2xl font-bold mb-4">Compliance & Traceability</h3>
                <p className="text-muted-foreground text-lg">
                  Maintain complete records for regulatory compliance and buyer requirements. 
                  Export detailed reports that demonstrate transparency and adherence to quality 
                  standards.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Make <span className="text-gradient">Data-Driven Decisions?</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Start tracking and analyzing your farm's performance today
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/download">Get Started</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Analytics;
