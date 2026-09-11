import { Activity, ArrowRight, BarChart3, Leaf, Shield, Smartphone, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import farmImage from "@/assets/A360_Farm_Image.jpg";
import "./HomeOverview.css";

const features = [
  {
    title: "Smart Monitoring",
    description: "Real-time tracking of flock health, environmental conditions, and productivity metrics.",
    icon: Activity,
  },
  {
    title: "AI-Powered Analytics",
    description: "Predictive insights for disease prevention, feed optimization, and production forecasting.",
    icon: BarChart3,
  },
  {
    title: "IoT Integration",
    description: "Solar-powered sensors and automated systems for efficient farm management.",
    icon: Zap,
  },
  {
    title: "Offline-First Design",
    description: "Works seamlessly in rural areas with limited connectivity.",
    icon: Shield,
  },
];

export const HomeOverview = () => (
  <section id="platform-overview" className="home-overview" aria-labelledby="overview-heading">
    <div className="home-overview__inner">
      <header className="home-overview__header">
        <div>
          <p className="home-overview__eyebrow">
            <span aria-hidden="true" /> Platform overview
          </p>
          <h2 id="overview-heading">What is<br /><span>AgriFlock 360?</span></h2>
        </div>
        <div className="home-overview__introduction">
          <p className="home-overview__lead">
            Better care for your flock.<br />More confidence in every decision.
          </p>
          <p>
            An end-to-end smart farming solution that brings your farm data,
            connected tools, and AI-powered insights together—helping smallholder
            farmers reduce flock mortality, improve efficiency, and grow profits
            through sustainable practices.
          </p>
        </div>
      </header>

      <div className="home-overview__grid">
        <figure className="home-overview__visual">
          <img
            src={farmImage}
            alt="Illustration of a poultry farm connecting solar power, AI insights, productivity tools, and farm-to-fork traceability."
            width={1536}
            height={1024}
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            <span className="home-overview__caption-icon"><Leaf size={26} strokeWidth={1.5} aria-hidden="true" /></span>
            <div>
              <p>Built around the way you farm.</p>
              <span>Connected technology. Practical support. Sustainable growth.</span>
            </div>
          </figcaption>
        </figure>

        <div className="home-overview__details">
          <ul className="home-overview__features">
            {features.map(({ title, description, icon: Icon }, index) => (
              <li className="home-overview__feature" key={title}>
                <span className="home-overview__feature-icon"><Icon size={23} strokeWidth={1.6} aria-hidden="true" /></span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
                <span className="home-overview__number" aria-hidden="true">0{index + 1}</span>
              </li>
            ))}
          </ul>
          <div className="home-overview__actions">
            <Button variant="gold" size="lg" asChild>
              <Link to="/download">
                <Smartphone aria-hidden="true" /> Explore via Mobile App <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Button variant="gold" size="lg" asChild>
              <Link to="/coming-soon">
                Explore via Web App <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);
