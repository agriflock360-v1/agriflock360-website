import { Link } from "react-router-dom";
import { Linkedin, Mail, Phone, Facebook, Instagram, Twitter } from "lucide-react";
import agriflockLogo from "@/assets/agriflock-logo.jpg";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={agriflockLogo} alt="AgriFlock 360 Logo" className="w-10 h-10 rounded-lg object-contain" />
              <span className="text-xl font-bold">AgriFlock360</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Digitizing smallholder poultry farming through AI-powered IoT solutions.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/vaccination" className="hover:text-primary transition-colors">
                  Vaccination & Health
                </Link>
              </li>
              <li>
                <Link to="/feeding" className="hover:text-primary transition-colors">
                  Precision Feeding
                </Link>
              </li>
              <li>
                <Link to="/brooder" className="hover:text-primary transition-colors">
                  Smart Brooder
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm mb-6">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:info@agriflock360.io" className="hover:text-primary transition-colors">
                  info@agriflock360.io
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                  +123 456 7890
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-4">
              <a href="#" className="text-primary hover:text-primary/80 transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary hover:text-primary/80 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary hover:text-primary/80 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary hover:text-primary/80 transition-colors" aria-label="X (Twitter)">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary hover:text-primary/80 transition-colors" aria-label="TikTok">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-muted-foreground space-y-2">
          <p>&copy; {new Date().getFullYear()} AgriFlock360. All rights reserved.</p>
          <p>
            Developed by{" "}
            <a 
              href="https://mglobalbusinessconsultancy.netlify.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors font-medium"
            >
              M'Global Business Consultancy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
