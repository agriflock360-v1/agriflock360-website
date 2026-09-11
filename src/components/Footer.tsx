import { Link } from "react-router-dom";
import { Linkedin, Mail, Phone, Facebook, Instagram, Twitter } from "lucide-react";
import agriflockLogo from "@/assets/agriflock-logo-new.png";
import "./Footer.css";

const serviceLinks = [
  { label: "Explore App Features", href: "/features" },
  { label: "Vaccination & Health", href: "/vaccination" },
  { label: "Precision Feeding", href: "/feeding" },
  { label: "Farm Records & Reports", href: "/features#farm-reports" },
  // The brooder remains hidden while its patent is being processed.
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Mobile App", href: "/download" },
  { label: "Web App Overview", href: "/web-app" },
  { label: "Contact Us", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "SMS Consent", href: "/sms-consent" },
];

export const Footer = () => (
  <footer id="site-footer" className="site-footer">
    <div className="site-footer__inner">
      <div className="site-footer__main">
        <div className="site-footer__identity">
          <Link to="/" className="site-footer__brand" aria-label="AgriFlock 360 home">
            <img src={agriflockLogo} alt="" width={64} height={72} className="site-footer__logo" />
            <span>AgriFlock 360</span>
          </Link>
          <p className="site-footer__description">Digitizing smallholder poultry farming through AI-powered IoT solutions.</p>
          <div className="site-footer__socials">
            <a href="https://www.linkedin.com/company/agriflock-360" target="_blank" rel="noopener noreferrer" className="button-gold site-footer__social-link" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" aria-hidden="true" />
            </a>
            <a href="https://web.facebook.com/profile.php?id=61584028213600" target="_blank" rel="noopener noreferrer" className="button-gold site-footer__social-link" aria-label="Facebook">
              <Facebook className="h-5 w-5" aria-hidden="true" />
            </a>
            <a href="https://www.instagram.com/agriflock_360?igsh=a3NuY25heXh5MDRj&utm_source=qr" target="_blank" rel="noopener noreferrer" className="button-gold site-footer__social-link" aria-label="Instagram">
              <Instagram className="h-5 w-5" aria-hidden="true" />
            </a>
            <a href="https://x.com/agriflock360" target="_blank" rel="noopener noreferrer" className="button-gold site-footer__social-link" aria-label="X (Twitter)">
              <Twitter className="h-5 w-5" aria-hidden="true" />
            </a>
            <a href="https://www.tiktok.com/@agriflock_360?_r=1&_t=ZM-91tX5lPYKMq" target="_blank" rel="noopener noreferrer" className="button-gold site-footer__social-link" aria-label="TikTok">
              <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
          </div>
        </div>

        <nav className="site-footer__navigation" aria-labelledby="footer-services-heading">
          <h2 id="footer-services-heading">Solutions & Services</h2>
          <ul className="site-footer__links">
            {serviceLinks.map(({ label, href }) => <li key={href}><Link to={href}>{label}</Link></li>)}
          </ul>
        </nav>

        <nav className="site-footer__navigation" aria-labelledby="footer-company-heading">
          <h2 id="footer-company-heading">Company</h2>
          <ul className="site-footer__links">
            {companyLinks.map(({ label, href }) => <li key={href}><Link to={href}>{label}</Link></li>)}
          </ul>
        </nav>

        <div className="site-footer__contact">
          <h2>Get in touch</h2>
          <address>
            <div className="site-footer__contact-item">
              <Mail size={18} strokeWidth={1.5} aria-hidden="true" />
              <div><span>Email</span><a href="mailto:support@agriflock360.com">support@agriflock360.com</a></div>
            </div>
            <div className="site-footer__contact-item">
              <Phone size={18} strokeWidth={1.5} aria-hidden="true" />
              <div><span>Kenya</span><a href="tel:+254729554434">+254 729 554 434</a></div>
            </div>
            <div className="site-footer__contact-item">
              <Phone size={18} strokeWidth={1.5} aria-hidden="true" />
              <div><span>United States</span><a href="tel:+16674469432">+1 667 446 9432</a></div>
            </div>
          </address>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>&copy; {new Date().getFullYear()} AgriFlock 360. All rights reserved.</p>
        <nav className="site-footer__legal" aria-label="Legal information">
          {legalLinks.map(({ label, href }) => <Link key={href} to={href}>{label}</Link>)}
        </nav>
      </div>
      <p className="site-footer__credit">
        Developed by{" "}
        <a href="https://mglobalbusinessconsultancy.com" target="_blank" rel="noopener noreferrer">M'Global Business Consultancy</a>
      </p>
    </div>
  </footer>
);
