import { ArrowDown, ArrowRight, Leaf, Radio, Smartphone, Sun, Bird } from "lucide-react";
import { Link } from "react-router-dom";
import { HeroVideo } from "./HeroVideo";
import heroVideo from "@/assets/chicks-hero-continuous.mp4";
import heroPoster from "@/assets/chicks-continuous-poster.webp";
import heroPosterSmall from "@/assets/chicks-continuous-poster-small.webp";
import "./HomeHero.css";

const highlights = [
  { value: "100+", label: "Bird brooder capacity", icon: Bird },
  { value: "100%", label: "Solar powered", icon: Sun },
  { value: "24/7", label: "Farm monitoring", icon: Radio },
];

export const HomeHero = () => (
  <section className="home-hero" aria-labelledby="home-hero-heading">
    <div className="home-hero__frame">
      <HeroVideo videoSrc={heroVideo} posterSrc={heroPoster} posterSmallSrc={heroPosterSmall} />

      <div className="home-hero__content">
        <p className="home-hero__eyebrow">
          <Leaf size={17} strokeWidth={1.6} aria-hidden="true" />
          AI-Powered Poultry Management
        </p>

        <h1 id="home-hero-heading" className="home-hero__heading">
          Regenerative<br />
          Poultry Farming<br />
          <span>With AI Precision</span>
        </h1>

        <p className="home-hero__description">
          Transforming poultry operations with IoT-integrated smart solar brooders,
          AI analytics, integrated productivity tools and farm to fork blockchain
          traceability.
        </p>

        <div className="home-hero__actions">
          <Link to="/download" className="button-gold home-hero__button home-hero__button--primary">
            <Smartphone size={18} aria-hidden="true" />
            Explore via Mobile App
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <Link to="/coming-soon" className="button-gold home-hero__button home-hero__button--secondary">
            Explore via Web App
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>

        <a className="home-hero__discover" href="#platform-overview">
          <span className="home-hero__discover-icon"><ArrowDown size={16} aria-hidden="true" /></span>
          Discover AgriFlock 360
        </a>
      </div>

      <div className="home-hero__caption">
        <span className="home-hero__caption-line" aria-hidden="true" />
        <p>A better start.<br /><span>For every flock.</span></p>
      </div>
    </div>

    <div className="home-hero__footer">
      <p className="home-hero__note">
        Rooted in nature.<br />
        <span>Guided by intelligence.</span>
      </p>
      <dl className="home-hero__highlights">
        {highlights.map(({ value, label, icon: Icon }) => (
          <div className="home-hero__highlight" key={label}>
            <Icon className="home-hero__highlight-icon" size={25} strokeWidth={1.4} aria-hidden="true" />
            <div>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          </div>
        ))}
      </dl>
    </div>
  </section>
);
