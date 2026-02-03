import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Construction, ArrowLeft, Smartphone, Mail, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-primary/5 to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Card className="max-w-3xl mx-auto p-8 sm:p-12 text-center space-y-8 border-2 border-primary/20 bg-card/50 backdrop-blur">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse" />
              <div className="relative w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                <Construction className="w-12 h-12 text-primary animate-bounce" />
              </div>
            </div>
          </div>

          {/* Badge */}
          <Badge className="text-sm px-4 py-1.5">
            <Rocket className="w-4 h-4 mr-2 inline" />
            Coming Soon
          </Badge>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              Web App <span className="text-gradient">Under Construction</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              We're working hard to bring you an amazing web experience. Our web application is currently under development and will be launching soon!
            </p>
          </div>

          {/* Features Preview */}
          <div className="grid sm:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-lg bg-muted/50 border border-border/50">
              <div className="text-2xl font-bold text-gradient mb-2">✨</div>
              <div className="text-sm font-semibold mb-1">Enhanced Features</div>
              <div className="text-xs text-muted-foreground">Advanced analytics & reporting</div>
            </div>
            <div className="p-4 rounded-lg bg-muted/50 border border-border/50">
              <div className="text-2xl font-bold text-gradient mb-2">🚀</div>
              <div className="text-sm font-semibold mb-1">Better Performance</div>
              <div className="text-xs text-muted-foreground">Faster & more responsive</div>
            </div>
            <div className="p-4 rounded-lg bg-muted/50 border border-border/50">
              <div className="text-2xl font-bold text-gradient mb-2">📱</div>
              <div className="text-sm font-semibold mb-1">Multi-Device Access</div>
              <div className="text-xs text-muted-foreground">Desktop & tablet support</div>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-4 pt-4">
            <p className="text-muted-foreground">
              In the meantime, explore our full-featured mobile app:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/download">
                  <Smartphone className="mr-2 h-5 w-5" />
                  Download Mobile App
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </div>

          {/* Newsletter */}
          <div className="pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-4">
              Want to be notified when we launch?
            </p>
            <Button variant="ghost" size="sm" asChild>
              <a href="mailto:admin@agriflock360.com" className="inline-flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                Contact us at admin@agriflock360.com
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
