import { ArrowRight, Leaf, Monitor, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import "./HomeClosingCTA.css";

export const HomeClosingCTA = () => (
  <section id="get-started" className="home-closing" aria-labelledby="get-started-heading">
    <div className="home-closing__panel">
      <div className="home-closing__content">
        <p className="home-closing__eyebrow"><Leaf size={17} strokeWidth={1.5} aria-hidden="true" />Grow with AgriFlock 360</p>
        <h2 id="get-started-heading">Manage your farm<br /><span>with confidence.</span></h2>
        <p className="home-closing__description">
          Track flock health, plan feeding, and keep your farm records in one place.
          Get started with the AgriFlock 360 mobile app.
        </p>
      </div>
      <div className="home-closing__actions">
        <Button variant="gold" size="lg" asChild>
          <Link to="/download">
            <Smartphone aria-hidden="true" /><span>Get the Mobile App</span><ArrowRight aria-hidden="true" />
          </Link>
        </Button>
        <p className="home-closing__platforms">Available on Android and iOS</p>
        <Button variant="gold" size="lg" asChild>
          <Link to="/coming-soon">
            <Monitor aria-hidden="true" /><span>Web App (Coming Soon)</span><ArrowRight aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </div>
  </section>
);
