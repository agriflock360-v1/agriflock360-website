import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Menu, X, ChevronDown, Activity, Sprout, Zap, BarChart3, AlertTriangle, TrendingUp, ShoppingBag, GitBranch, GraduationCap, Smartphone, Monitor } from "lucide-react";
import { useState, useEffect } from "react";
import agriflockLogo from "@/assets/agriflock-logo-new.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
];

const services = [
  {
    name: "Vaccination & Health Tracking",
    href: "/vaccination",
    icon: Activity,
    available: true,
  },
  {
    name: "Precision Feeding Analytics",
    href: "/feeding",
    icon: Sprout,
    available: true,
  },
  /* Temporarily disabled while brooder patent is being processed
  {
    name: "Solar Smart Brooder IoT",
    href: "/brooder",
    icon: Zap,
    available: true,
  },
  */
  {
    name: "AI Analytics & Record Keeping",
    href: "/analytics",
    icon: BarChart3,
    available: true,
  },
  {
    name: "Real-Time Disease Detection",
    icon: AlertTriangle,
    available: false,
  },
  {
    name: "Production Forecasting & Quotations",
    icon: TrendingUp,
    available: false,
  },
  {
    name: "Direct Market Linkages",
    icon: ShoppingBag,
    available: false,
  },
  {
    name: "Blockchain Traceability",
    icon: GitBranch,
    available: false,
  },
  {
    name: "E-Extension Services",
    icon: GraduationCap,
    available: false,
  },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-lg" 
        : "bg-background/80 backdrop-blur-lg border-b border-transparent"
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3 shrink-0">
            <img src={agriflockLogo} alt="AgriFlock 360 Logo" className="w-16 h-16 rounded-lg object-contain" />
            <span className="text-lg sm:text-xl font-bold text-gradient whitespace-nowrap">AgriFlock 360</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  location.pathname === item.href
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="px-4 py-2">
                  Our Products & Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 bg-background border-border z-50">
                {services.map((service) => (
                  service.available ? (
                    <DropdownMenuItem key={service.name} asChild>
                      <Link to={service.href!} className="flex items-center gap-3 cursor-pointer">
                        <service.icon className="h-4 w-4 text-primary" />
                        <span>{service.name}</span>
                      </Link>
                    </DropdownMenuItem>
                  ) : (
                    <DropdownMenuItem key={service.name} disabled className="flex items-center gap-3 opacity-60">
                      <service.icon className="h-4 w-4" />
                      <span className="flex-1">{service.name}</span>
                    </DropdownMenuItem>
                  )
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="hero" size="sm" className="ml-4">
                  Get Started
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-background border-border z-50">
                <DropdownMenuItem asChild>
                  <Link to="/download" className="flex items-center gap-3 cursor-pointer">
                    <Smartphone className="h-4 w-4 text-primary" />
                    <span>Explore via Mobile App</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/coming-soon" className="flex items-center gap-3 cursor-pointer">
                    <Monitor className="h-4 w-4 text-primary" />
                    <span>Launch Web App</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/web-app" className="flex items-center gap-3 cursor-pointer">
                    <Monitor className="h-4 w-4 text-accent" />
                    <span>Learn About Web App</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-[80vh] opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}>
          <div className="space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-4 py-3 rounded-lg transition-all duration-200 ${
                  location.pathname === item.href
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-foreground hover:bg-muted"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="px-4 py-2">
              <p className="text-sm font-semibold text-muted-foreground mb-2">Our Products & Services</p>
              <div className="space-y-1">
                {services.map((service) => (
                  service.available ? (
                    <Link
                      key={service.name}
                      to={service.href!}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-muted transition-all duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <service.icon className="h-4 w-4 text-primary" />
                      <span className="text-sm">{service.name}</span>
                    </Link>
                  ) : (
                    <div
                      key={service.name}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg opacity-60"
                    >
                      <service.icon className="h-4 w-4" />
                      <span className="text-sm flex-1">{service.name}</span>
                    </div>
                  )
                ))}
              </div>
            </div>
            
            <div className="px-4 pt-4 space-y-2">
              <Button variant="hero" size="sm" className="w-full" asChild>
                <Link to="/download">
                  <Smartphone className="mr-2 h-4 w-4" />
                  Explore via Mobile App
                </Link>
              </Button>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link to="/coming-soon">
                  <Monitor className="mr-2 h-4 w-4" />
                  Launch Web App
                </Link>
              </Button>
              <Button variant="ghost" size="sm" className="w-full" asChild>
                <Link to="/web-app">
                  Learn About Web App
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
