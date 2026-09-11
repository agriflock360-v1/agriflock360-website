import { useEffect } from "react";
import { ArrowRight, CalendarDays, Monitor, Smartphone, Stethoscope, Tractor } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { WebAppInterestForm } from "@/components/WebAppInterestForm";
import { WebMobileCTA } from "@/components/WebAppShared";
import { pricingTerms } from "@/data/pricing";
import "./WebApp.css";

export default function ComingSoon() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Web App Coming Soon | AgriFlock 360";
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <div className="web-page web-launch-page">
      <div className="web-launch-hero web-container">
        <header className="web-launch-copy">
          <p className="web-eyebrow">AgriFlock 360 for the web</p>
          <span className="web-status"><span className="web-status-dot" />In development</span>
          <h1>More room<br />to grow.<br /><span>Coming soon.</span></h1>
          <p className="web-hero-intro">We’re building a browser workspace for your poultry operation. Web access is still in development, and you can get started with the mobile app today.</p>
          <div className="web-actions"><Button variant="gold" asChild><Link to="/download"><Smartphone size={19} aria-hidden="true" />Get the Mobile App<ArrowRight size={18} aria-hidden="true" /></Link></Button><Link className="web-text-link" to="/web-app">Learn about the web app<ArrowRight size={18} aria-hidden="true" /></Link></div>
          <div className="web-launch-notes"><div><Monitor size={22} strokeWidth={1.5} aria-hidden="true" /><p><strong>A bigger-screen workspace</strong><span>A browser experience for desktop and laptop use.</span></p></div><div><CalendarDays size={22} strokeWidth={1.5} aria-hidden="true" /><p><strong>Follow the launch</strong><span>Request updates from our team as web access gets closer.</span></p></div></div>
        </header>
        <WebAppInterestForm />
      </div>

      <section className="web-roles" aria-labelledby="web-roles-heading"><div className="web-container">
        <div className="web-section-heading"><div><p className="web-eyebrow">Keep moving with mobile</p><h2 id="web-roles-heading">Your role.<br />Your next step.</h2></div><p>Both modules are already in the mobile app. Choose the one that matches your work when you sign up.</p></div>
        <div className="web-roles__grid">
          <article><span className="web-role-icon"><Tractor size={27} strokeWidth={1.5} aria-hidden="true" /></span><div><p className="web-eyebrow">For farmers</p><h3>Bring your farm day together.</h3><p>Manage flocks, follow feeding and vaccination guidance, and keep your farm records in one place.</p><p className="web-role-note">Farmer plans include a {pricingTerms.trialDays}-day free trial.</p><Link className="web-text-link" to="/pricing#farmer-plans">Compare farmer plans<ArrowRight size={17} aria-hidden="true" /></Link></div></article>
          <article><span className="web-role-icon"><Stethoscope size={27} strokeWidth={1.5} aria-hidden="true" /></span><div><p className="web-eyebrow">For vets & extension officers</p><h3>Apply to support farmers.</h3><p>Choose the vet module, accept the terms, and submit your details and qualification documents for review.</p><p className="web-role-note">Approval is required before you can provide services.</p><Link className="web-text-link" to="/download#choose-your-role">See the signup steps<ArrowRight size={17} aria-hidden="true" /></Link></div></article>
        </div>
        <p className="web-support-line">Need help choosing your next step? <Link className="web-text-link" to="/contact">Talk to our team<ArrowRight size={16} aria-hidden="true" /></Link></p>
      </div></section>
      <WebMobileCTA />
    </div>
  );
}
