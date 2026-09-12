import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, Check, ChevronDown, FileText, Mail, MessageSquare, Printer, ShieldCheck } from "lucide-react";
import "./LegalPage.css";
import type { LegalSection } from "@/data/policies/types";

interface LegalPageProps {
  kind: "privacy" | "terms" | "sms";
  title: string;
  description: string;
  updated: string;
  effective?: string;
  highlights: { title: string; text: string }[];
  sections: LegalSection[];
}

const documents = [
  { kind: "privacy", title: "Privacy Policy", to: "/privacy-policy", icon: ShieldCheck },
  { kind: "terms", title: "Terms & Conditions", to: "/terms-conditions", icon: FileText },
  { kind: "sms", title: "SMS Consent", to: "/sms-consent", icon: MessageSquare },
];

export function LegalPage({ kind, title, description, updated, effective, highlights, sections }: LegalPageProps) {
  const [active, setActive] = useState(sections[0].id);
  const mobileContents = useRef<HTMLDetailsElement>(null);
  const Icon = documents.find(document => document.kind === kind)!.icon;

  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${title} | AgriFlock 360`;
    return () => { document.title = previousTitle; };
  }, [title]);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      let current = sections[0].id;
      for (const section of sections) {
        if ((document.getElementById(section.id)?.getBoundingClientRect().top ?? Infinity) <= 160) current = section.id;
      }
      setActive(current);
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(frame); };
  }, [sections]);

  const contents = (label: string) => <nav aria-label={label}><ol>{sections.map((section, index) => <li key={section.id}><Link to={`#${section.id}`} aria-current={active === section.id ? "location" : undefined} onClick={() => { if (mobileContents.current) mobileContents.current.open = false; }}><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>{section.title}</Link></li>)}</ol></nav>;

  return (
    <div className={`legal-page legal-page--${kind}`}>
      <header className="legal-hero legal-container">
        <nav className="legal-document-nav" aria-label="Policies and consent">{documents.map(({ kind: documentKind, title: label, to, icon: DocumentIcon }) => <Link key={to} to={to} aria-current={kind === documentKind ? "page" : undefined}><DocumentIcon size={17} aria-hidden="true" /><span>{label}</span></Link>)}</nav>
        <div className="legal-hero__layout">
          <div><p className="legal-eyebrow">AgriFlock 360 · Policies & your choices</p><h1>{title}</h1><p className="legal-intro">{description}</p><div className="legal-meta"><span>Last updated: <strong>{updated}</strong></span>{effective && <span>{effective}</span>}</div></div>
          <div className="legal-hero__aside"><span className="legal-hero__icon"><Icon size={32} strokeWidth={1.4} aria-hidden="true" /></span><p>Clear information.<br /><strong>In one place.</strong></p><Link to={`#${sections[0].id}`}>Read the full document<ArrowDown size={17} aria-hidden="true" /></Link></div>
        </div>
      </header>

      <section className="legal-overview" aria-labelledby="legal-overview-heading"><div className="legal-container"><div className="legal-overview__heading"><h2 id="legal-overview-heading">At a glance</h2><p>A quick guide. The full details follow below.</p></div><div className="legal-highlights">{highlights.map((highlight, i) => <article key={highlight.title}><span className="legal-highlight__number" aria-hidden="true">0{i + 1}</span><h3>{highlight.title}</h3><p>{highlight.text}</p></article>)}</div></div></section>

      <div className="legal-container legal-layout">
        <aside className="legal-sidebar"><div className="legal-sidebar__inner"><p className="legal-eyebrow">In this document</p>{contents("Document sections")}<button className="legal-print" onClick={() => window.print()}><Printer size={17} aria-hidden="true" />Print / save PDF</button><div className="legal-sidebar__help"><Mail size={19} aria-hidden="true" /><p>Need help with a policy?</p><Link to="/contact">Talk to our team<ArrowRight size={15} aria-hidden="true" /></Link></div></div></aside>
        <div className="legal-document">
          <div className="legal-mobile-tools"><details ref={mobileContents}><summary>In this document<ChevronDown size={18} aria-hidden="true" /></summary>{contents("Document sections on mobile")}</details><button className="legal-print" onClick={() => window.print()}><Printer size={17} aria-hidden="true" />Print / save PDF</button></div>
          {sections.map((section, index) => <section className="legal-section" key={section.id} id={section.id} tabIndex={-1} aria-labelledby={`${section.id}-heading`}><header className="legal-section__heading"><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><h2 id={`${section.id}-heading`}>{section.title}</h2></header><div className="legal-copy">{section.content}</div></section>)}
        </div>
      </div>

      <section className="legal-contact" aria-labelledby="legal-contact-heading"><div className="legal-container"><div><p className="legal-eyebrow"><Check size={16} aria-hidden="true" />We’re here to help</p><h2 id="legal-contact-heading">Your questions matter.</h2><p>Contact the AgriFlock 360 team about your information, our terms or SMS preferences.</p><a href="mailto:support@agriflock360.com">support@agriflock360.com</a></div><Link className="button-gold" to="/contact">Contact the team<ArrowRight size={18} aria-hidden="true" /></Link></div></section>
    </div>
  );
}
