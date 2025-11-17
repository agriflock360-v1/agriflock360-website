import { Link } from "react-router-dom";
import { Linkedin, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 gradient-hero rounded-lg flex items-center justify-center shadow-glow">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-xl font-bold">AgriFlock360</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Digitizing smallholder poultry farming through AI-powered IoT solutions.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Modules</h3>
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
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
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
              <li className="flex items-center space-x-2">
                <Linkedin className="h-4 w-4 text-primary" />
                <a href="#" className="hover:text-primary transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AgriFlock360. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
