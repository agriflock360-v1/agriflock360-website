import { ArrowDown, ArrowRight, BarChart3, ChevronDown, Monitor, Smartphone, Sprout, Stethoscope, Tractor } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { WebMobileCTA, WebWorkspacePreview } from "@/components/WebAppShared";
import "./WebApp.css";

const plannedFocus = [
  { icon: Tractor, title: "Farm & flock overview", description: "Bring farm, house and batch information into a workspace that’s easier to review on a larger screen." },
  { icon: Sprout, title: "Feeding & flock health", description: "Keep feeding plans, vaccination schedules and health records together as you plan your flock’s care." },
  { icon: BarChart3, title: "Records & reporting", description: "Review production, costs and income in more detail to support the decisions you make for your farm." },
  { icon: Stethoscope, title: "Professional support", description: "Help farmers and approved vets or extension officers connect around professional poultry services." },
];
const webFaqs = [
  ["Can I launch the web app now?", "The web app is still in development. Use the launch updates page to register your interest, or download the mobile app to get started today."],
  ["Are the features on this page already available on the web?", "This page describes the planned web experience. The launch will confirm which tools are available. You can explore the Features page for the tools already shown in the mobile app."],
  ["Can farmers and vets get started before the web launch?", "Yes. Both roles are available in the mobile app. Farmers choose the Farmer module. Vets and extension officers choose their module, accept the terms, submit their details and qualification documents, and wait for approval before providing services."],
];

export default function WebApp() {
  return (
    <div className="web-page web-overview-page">
      <header className="web-overview-hero web-container">
        <div><p className="web-eyebrow">Meet the planned web experience</p><span className="web-status"><span className="web-status-dot" />In development</span><h1>Your farm.<br /><span>A wider view.</span></h1><p className="web-hero-intro">More space to review your records, plan ahead and understand your poultry operation. We’re working towards bringing AgriFlock 360 to your browser.</p><div className="web-actions"><Button variant="gold" asChild><Link to="/coming-soon#web-launch-updates">Get launch updates<ArrowRight size={18} aria-hidden="true" /></Link></Button><Link className="web-text-link" to="#planned-web-experience">Explore the plans<ArrowDown size={18} aria-hidden="true" /></Link></div><p className="web-overview-hero__note">The mobile app is available now. Web access is still in development.</p></div>
        <WebWorkspacePreview />
      </header>

      <section className="web-planned" id="planned-web-experience" tabIndex={-1} aria-labelledby="web-planned-heading"><div className="web-container">
        <div className="web-section-heading"><div><p className="web-eyebrow">The direction we’re building</p><h2 id="web-planned-heading">Built around<br />the work that matters.</h2></div><p>These are the focus areas for the planned browser experience. Available features will be confirmed at launch.</p></div>
        <div className="web-planned__grid">{plannedFocus.map(({ icon: Icon, title, description }, i) => <article key={title}><div className="web-planned__top"><Icon size={27} strokeWidth={1.5} aria-hidden="true" /><span aria-hidden="true">0{i + 1}</span></div><h3>{title}</h3><p>{description}</p></article>)}</div>
      </div></section>

      <section className="web-availability web-container" aria-labelledby="web-availability-heading">
        <div className="web-section-heading"><div><p className="web-eyebrow">Today & what’s next</p><h2 id="web-availability-heading">Choose your way in.</h2></div><p>Start with the mobile app today, or stay connected as we develop access through the web.</p></div>
        <div className="web-platforms">
          <article className="web-platform web-platform--mobile"><div className="web-platform__heading"><Smartphone size={27} strokeWidth={1.5} aria-hidden="true" /><span>Available today</span></div><h3>Take your farm with you.</h3><p>Record your daily work and access support from your phone.</p><dl><div><dt>Android</dt><dd>Download on Google Play</dd></div><div><dt>iPhone & iPad</dt><dd>Join the beta through TestFlight</dd></div><div><dt>Choose your role</dt><dd>Farmer or Veterinarian (Extension officer)</dd></div></dl><Link className="web-text-link" to="/download">Download the mobile app<ArrowRight size={18} aria-hidden="true" /></Link></article>
          <article className="web-platform"><div className="web-platform__heading"><Monitor size={27} strokeWidth={1.5} aria-hidden="true" /><span>In development</span></div><h3>Make room for a wider view.</h3><p>A browser workspace for a closer look at your poultry operation.</p><dl><div><dt>Planned access</dt><dd>Desktop & laptop browsers</dd></div><div><dt>Current status</dt><dd>Web access is in development</dd></div><div><dt>Your next step</dt><dd>Request launch updates from our team</dd></div></dl><Link className="web-text-link" to="/coming-soon#web-launch-updates">Keep me updated<ArrowRight size={18} aria-hidden="true" /></Link></article>
        </div>
      </section>

      <section className="web-faq web-container" aria-labelledby="web-faq-heading"><div><p className="web-eyebrow">A few useful answers</p><h2 id="web-faq-heading">Before the web launch.</h2><p>Learn what you can use today and how to follow what’s next.</p><Link className="web-text-link" to="/contact">Ask our team<ArrowRight size={18} aria-hidden="true" /></Link></div><div>{webFaqs.map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown size={18} aria-hidden="true" /></summary><p>{answer}</p></details>)}<Link className="web-text-link web-faq__features" to="/features">Explore mobile app features<ArrowRight size={18} aria-hidden="true" /></Link></div></section>
      <WebMobileCTA />
    </div>
  );
}
