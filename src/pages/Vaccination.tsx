import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Calendar, Bell, Shield, Database, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import vaccinationImage from "@/assets/vaccination-module.jpg";

const features = [
  {
    icon: Calendar,
    title: "Auto-Schedule Vaccines",
    description: "Automated vaccination schedules based on breed type and production goals (broiler/layer)",
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description: "Timely notifications for due, overdue, and missed vaccinations to prevent lapses",
  },
  {
    icon: Shield,
    title: "Veterinary Verification",
    description: "Enable vets to approve or adjust vaccination data for quality assurance",
  },
  {
    icon: Database,
    title: "Complete Records",
    description: "Track vaccine name, dosage, route, batch number, cost, and administrator details",
  },
  {
    icon: FileText,
    title: "Data Export",
    description: "Export comprehensive vaccination reports in CSV/PDF formats for analysis",
  },
  {
    icon: CheckCircle2,
    title: "IoT Integration",
    description: "Linked with brooder temperature readings to assess vaccine timing and efficacy",
  },
];

const Vaccination = () => {
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
                  Health Service
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                Vaccination & Health{" "}
                <span className="text-gradient">Tracking</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground">
                Reduce preventable chick mortality by helping farmers and veterinarians 
                record, monitor, and verify vaccination schedules digitally.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/download">Start Tracking</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/download">Contact Sales</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={vaccinationImage}
                alt="Vaccination tracking system"
                className="rounded-2xl shadow-2xl hover-lift"
              />
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-xl border-2 border-primary/20">
                <div className="text-3xl font-bold text-gradient">95%</div>
                <div className="text-sm text-muted-foreground">Mortality Reduction</div>
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
              Comprehensive <span className="text-gradient">Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to maintain optimal flock health and vaccination compliance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="p-6 hover-lift border-2 hover:border-primary/50 transition-all"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <feature.icon className="h-10 w-10 text-primary mb-4" />
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
              How It <span className="text-gradient">Works</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {[
              {
                step: "01",
                title: "Register Your Flock",
                description: "Input flock details including breed, quantity, and production type to generate customized vaccination schedules",
              },
              {
                step: "02",
                title: "Receive Smart Alerts",
                description: "Get timely notifications via mobile app or SMS for upcoming vaccinations, ensuring no doses are missed",
              },
              {
                step: "03",
                title: "Record Administration",
                description: "Log vaccine details including dosage, batch number, administrator, and any observed reactions",
              },
              {
                step: "04",
                title: "Veterinary Verification",
                description: "Veterinarians can review, approve, or adjust records remotely, ensuring quality compliance",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center text-white font-bold text-xl shadow-glow group-hover:scale-110 transition-transform">
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

      {/* Database Schema Info */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 border-2 border-primary/20">
              <h2 className="text-3xl font-bold mb-6">Database Entities</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-primary">Flocks</h3>
                  <p className="text-sm text-muted-foreground">
                    Stores flock information including breed, size, age, and production type
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-primary">Vaccines</h3>
                  <p className="text-sm text-muted-foreground">
                    Master list of available vaccines with dosage guidelines and schedules
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-primary">Vaccination Records</h3>
                  <p className="text-sm text-muted-foreground">
                    Complete history of all administered vaccines with batch tracking
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-primary">Users</h3>
                  <p className="text-sm text-muted-foreground">
                    Multi-role support for farmers, veterinarians, and administrators
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
            Protect Your Flock's Health
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Start digitizing your vaccination records today
          </p>
          <Button variant="accent" size="lg">
            Get Started Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Vaccination;
