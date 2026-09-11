import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, Monitor, Smartphone, X } from "lucide-react";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { appSolutions, upcomingSolutions } from "@/data/solutions";
import agriflockLogo from "@/assets/agriflock-logo-new.png";
import "./Navbar.css";

const leadingLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Features", href: "/features" },
];
const trailingLinks = [
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];
const startLinks = [
  { name: "Explore via Mobile App", href: "/download", icon: Smartphone },
  { name: "Launch Web App", href: "/coming-soon", icon: Monitor },
  { name: "Learn About Web App", href: "/web-app", icon: Monitor },
];

export const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => { setMobileMenuOpen(false); }, [location.key]);
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1200px)");
    const closeOnDesktop = () => { if (desktop.matches) setMobileMenuOpen(false); };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  const navLink = ({ name, href }: typeof leadingLinks[number]) => (
    <Link key={href} to={href} className={`site-nav__link${location.pathname === href ? " is-active" : ""}`}
      aria-current={location.pathname === href ? "page" : undefined} onClick={() => setMobileMenuOpen(false)}>{name}</Link>
  );

  return (
    <nav className="site-nav" aria-label="Primary navigation" onKeyDown={(event) => {
      if (event.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
        menuButton.current?.focus();
      }
    }}>
      <div className="site-nav__inner">
        <div className="site-nav__bar">
          <Link to="/" className="site-nav__brand" aria-label="AgriFlock 360 home">
            <img src={agriflockLogo} alt="" width={56} height={64} /><span>AgriFlock 360</span>
          </Link>
          <div className="site-nav__desktop">
            {leadingLinks.map(navLink)}
            <DropdownMenu>
              <DropdownMenuTrigger className="site-nav__link">Our Products &amp; Services<ChevronDown size={14} aria-hidden="true" /></DropdownMenuTrigger>
              <DropdownMenuContent align="center" collisionPadding={12} className="site-nav__dropdown">
                {appSolutions.map(({ id, title, icon: Icon }) => (
                  <DropdownMenuItem key={id} asChild><Link to={`/features#${id}`}><Icon aria-hidden="true" size={18} /><span>{title}</span></Link></DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuLabel>In development</DropdownMenuLabel>
                {upcomingSolutions.map(({ title, icon: Icon }) => (
                  <DropdownMenuItem key={title} disabled><Icon size={18} aria-hidden="true" /><span>{title}</span></DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            {trailingLinks.map(navLink)}
            <DropdownMenu>
              <DropdownMenuTrigger asChild><Button variant="gold" className="site-nav__start">Get Started<ChevronDown size={14} aria-hidden="true" /></Button></DropdownMenuTrigger>
              <DropdownMenuContent align="end" collisionPadding={12} className="site-nav__dropdown">
                {startLinks.map(({ name, href, icon: Icon }) => (
                  <DropdownMenuItem key={href} asChild><Link to={href}><Icon size={18} aria-hidden="true" /><span>{name}</span></Link></DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <button ref={menuButton} className="site-nav__toggle button-gold" aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation" aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMobileMenuOpen((open) => !open)}>
            {mobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
        <div id="mobile-navigation" className="site-nav__mobile" hidden={!mobileMenuOpen}>
          {leadingLinks.map(navLink)}
          <details className="site-nav__mobile-group">
            <summary>Our Products &amp; Services<ChevronDown size={16} aria-hidden="true" /></summary>
            {appSolutions.map(({ id, title, icon: Icon }) => (
              <Link key={id} to={`/features#${id}`} onClick={() => setMobileMenuOpen(false)}><Icon size={18} aria-hidden="true" /><span>{title}</span></Link>
            ))}
            <p>In development</p>
            {upcomingSolutions.map(({ title }) => <span className="site-nav__upcoming" key={title}>{title}</span>)}
          </details>
          {trailingLinks.map(navLink)}
          <details className="site-nav__mobile-group site-nav__mobile-start">
            <summary className="button-gold">Get Started<ChevronDown size={16} aria-hidden="true" /></summary>
            {startLinks.map(({ name, href, icon: Icon }) => (
              <Link key={href} to={href} onClick={() => setMobileMenuOpen(false)}><Icon size={18} aria-hidden="true" /><span>{name}</span></Link>
            ))}
          </details>
        </div>
      </div>
    </nav>
  );
};
