import { ArrowRight, GraduationCap, Heart, Shield, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import boyWithChicken from "@/assets/boy-with-chicken.png";
import "./HomeImpact.css";

const impacts = [
  {
    title: "Protecting Livelihoods",
    description: "Reducing mortality rates by up to 40% through smart monitoring and early disease detection",
    icon: Shield,
  },
  {
    title: "Increasing Profitability",
    description: "Optimizing feed costs and improving efficiency to boost farm income by 25-30%",
    icon: TrendingUp,
  },
  {
    title: "Building Knowledge",
    description: "Providing training and advisory services to help farmers make data-driven decisions",
    icon: GraduationCap,
  },
];

export const HomeImpact = () => (
  <section id="our-impact" className="home-impact" aria-labelledby="impact-heading">
    <div className="home-impact__inner">
      <div className="home-impact__story">
        <figure className="home-impact__portrait">
          <img
            src={boyWithChicken}
            alt="A young farmer smiling while holding a chicken."
            width={394}
            height={447}
            loading="lazy"
            decoding="async"
          />
          <figcaption>Every farmer<br />has a story.</figcaption>
        </figure>

        <div className="home-impact__content">
          <p className="home-impact__eyebrow">
            <Heart size={16} strokeWidth={1.5} aria-hidden="true" /> Our Impact
          </p>
          <h2 id="impact-heading">
            Empowering the Next Generation of <span>Smart Farmers</span>
          </h2>
          <p className="home-impact__description">
            AgriFlock 360 is more than technology—it's about preserving livelihoods,
            feeding communities, and creating opportunities for smallholder farmers
            and their families.
          </p>
          <Button variant="gold" size="lg" asChild className="home-impact__cta">
            <Link to="/about">
              Learn About Our Mission <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>

      <ul className="home-impact__benefits">
        {impacts.map(({ title, description, icon: Icon }) => (
          <li className="home-impact__benefit" key={title}>
            <span className="home-impact__icon"><Icon size={25} strokeWidth={1.5} aria-hidden="true" /></span>
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
