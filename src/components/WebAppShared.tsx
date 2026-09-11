import { ArrowRight, BarChart3, Monitor, Smartphone, Sprout, Tractor } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function WebWorkspacePreview() {
  return (
    <figure className="web-preview">
      <div className="web-preview__window">
        <div className="web-preview__toolbar"><span className="web-preview__dots" aria-hidden="true"><i /><i /><i /></span><span>AgriFlock 360 · Web</span><Monitor size={16} aria-hidden="true" /></div>
        <div className="web-preview__body">
          <p className="web-eyebrow">The planned workspace</p>
          <h2>Your farm,<br />with room to think.</h2>
          <div className="web-preview__focus">{[
            { icon: Tractor, title: "Farm & flocks", caption: "See the bigger picture" },
            { icon: Sprout, title: "Feeding & health", caption: "Plan the care ahead" },
            { icon: BarChart3, title: "Records & reports", caption: "Make sense of your work" },
          ].map(({ icon: Icon, title, caption }) => <div key={title}><Icon size={22} strokeWidth={1.5} aria-hidden="true" /><div><strong>{title}</strong><span>{caption}</span></div></div>)}</div>
          <div className="web-preview__footer"><span className="web-status-dot" />In development</div>
        </div>
      </div>
      <figcaption>A concept illustration of the web experience we’re working towards.</figcaption>
    </figure>
  );
}

export function WebMobileCTA() {
  return (
    <section className="web-mobile-cta" aria-labelledby="web-mobile-heading">
      <div className="web-container">
        <div><p className="web-eyebrow">Available on mobile today</p><h2 id="web-mobile-heading">You can start growing now.</h2><p>One app for farmers and vets or extension officers. Get it on Google Play, or join the iPhone and iPad beta through TestFlight.</p></div>
        <div className="web-mobile-cta__actions"><Button variant="gold" asChild><Link to="/download"><Smartphone size={20} aria-hidden="true" />Get the Mobile App<ArrowRight size={18} aria-hidden="true" /></Link></Button><Link className="web-text-link" to="/pricing">View plans & service rates<ArrowRight size={17} aria-hidden="true" /></Link></div>
      </div>
    </section>
  );
}
