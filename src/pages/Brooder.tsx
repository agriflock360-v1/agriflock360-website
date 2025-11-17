import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Thermometer, Droplets, Battery, Wifi, QrCode, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import brooderImage from "@/assets/brooder-module.jpg";

const features = [
  {
    icon: Thermometer,
    title: "Temperature Control",
    description: "Real-time temperature monitoring with automatic alerts for deviations from optimal range",
  },
  {
    icon: Droplets,
    title: "Humidity Tracking",
    description: "Continuous humidity measurement to maintain ideal brooding conditions",
  },
  {
    icon: Battery,
    title: "Solar Power Status",
    description: "Monitor battery levels and solar charging status for uninterrupted operation",
  },
  {
    icon: Wifi,
    title: "GSM/Wi-Fi Connectivity",
    description: "Dual connectivity options ensuring data transmission even in remote areas",
  },
  {
    icon: QrCode,
    title: "Easy Device Binding",
    description: "Quick QR code pairing to connect and manage multiple brooder units",
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description: "Instant notifications for critical conditions, power failures, or sensor issues",
  },
];

const telemetryData = [
  { label: "Temperature", value: "32.5°C", status: "Normal", color: "text-primary" },
  { label: "Humidity", value: "65%", status: "Optimal", color: "text-primary" },
  { label: "Battery Level", value: "85%", status: "Good", color: "text-accent" },
  { label: "Signal Strength", value: "Strong", status: "Connected", color: "text-primary" },
];

const Brooder = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-10" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20">
                  IoT Module
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">
                Solar Smart Brooder{" "}
                <span className="text-gradient">IoT Integration</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Digitize and automate brooding for 300–1,000 chicks through IoT sensors, 
                AI alerts, and 100% solar-powered energy systems.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/download">Connect Device</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/download">View Demo</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={brooderImage}
                alt="Smart solar brooder"
                className="rounded-2xl shadow-2xl hover-lift"
              />
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-xl border-2 border-primary/20">
                <div className="text-3xl font-bold text-gradient">100%</div>
                <div className="text-sm text-muted-foreground">Solar Powered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Telemetry Demo */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Real-Time <span className="text-gradient">Monitoring</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Live sensor data updated every 5-10 minutes
              </p>
            </div>

            <Card className="p-8 border-2 border-primary/20">
              <div className="grid md:grid-cols-2 gap-6">
                {telemetryData.map((data) => (
                  <div
                    key={data.label}
                    className="flex items-center justify-between p-4 bg-muted/50 rounded-lg"
                  >
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">{data.label}</div>
                      <div className={`text-2xl font-bold ${data.color}`}>{data.value}</div>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                        {data.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Live - Updated 2 minutes ago
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              IoT <span className="text-gradient">Capabilities</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced sensor integration with cloud-based monitoring and control
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

      {/* Hardware Specifications */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 border-2 border-accent/20">
              <h2 className="text-3xl font-bold mb-6">Hardware Components</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <h3 className="font-semibold">Microcontroller</h3>
                    <p className="text-sm text-muted-foreground">ESP32 or STM32 for data processing and transmission</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <h3 className="font-semibold">Temperature Sensor</h3>
                    <p className="text-sm text-muted-foreground">High-precision digital sensor (±0.5°C accuracy)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <h3 className="font-semibold">Humidity Sensor</h3>
                    <p className="text-sm text-muted-foreground">Capacitive humidity sensor (±3% RH accuracy)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                  <div>
                    <h3 className="font-semibold">Solar Panel System</h3>
                    <p className="text-sm text-muted-foreground">50W panel with MPPT charge controller and battery backup</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <h3 className="font-semibold">Connectivity Module</h3>
                    <p className="text-sm text-muted-foreground">GSM/4G SIM800L or Wi-Fi ESP32 for data transmission</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Data Flow */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How Data <span className="text-gradient">Flows</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {[
              {
                step: "01",
                title: "Sensor Collection",
                description: "IoT sensors collect temperature, humidity, battery, and connectivity data every 5-10 minutes",
              },
              {
                step: "02",
                title: "Local Processing",
                description: "Microcontroller processes sensor readings and prepares data packet for transmission",
              },
              {
                step: "03",
                title: "Cloud Transmission",
                description: "Data sent via MQTT/HTTPS to AgriFlock Cloud Gateway (api.agriflock360.io)",
              },
              {
                step: "04",
                title: "Alert Processing",
                description: "Firebase Cloud Messaging triggers instant alerts for any abnormal conditions",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center text-white font-bold text-xl shadow-glow group-hover:scale-110 transition-transform">
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

      {/* Alert System */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 border-2 border-primary/20">
              <h2 className="text-3xl font-bold mb-6">Color-Coded Alert System</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-primary/5 rounded-lg border-2 border-primary/20">
                  <div className="w-12 h-12 rounded-full bg-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Green - Normal</h3>
                  <p className="text-sm text-muted-foreground">All parameters within optimal range</p>
                </div>
                <div className="text-center p-6 bg-accent/5 rounded-lg border-2 border-accent/20">
                  <div className="w-12 h-12 rounded-full bg-accent mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Amber - Warning</h3>
                  <p className="text-sm text-muted-foreground">Minor deviation requiring attention</p>
                </div>
                <div className="text-center p-6 bg-destructive/5 rounded-lg border-2 border-destructive/20">
                  <div className="w-12 h-12 rounded-full bg-destructive mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Red - Critical</h3>
                  <p className="text-sm text-muted-foreground">Immediate action required</p>
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
            Automate Your Brooding Process
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Experience 24/7 monitoring with 100% solar power
          </p>
          <Button variant="accent" size="lg">
            Get Your Smart Brooder
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Brooder;
