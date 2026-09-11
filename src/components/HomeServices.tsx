import { ArrowRight, ChevronDown, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { appSolutions, upcomingSolutions } from "@/data/solutions";
import "./HomeServices.css";

type ServiceCardProps = {
  service: (typeof appSolutions)[number];
};

const ServiceCard = ({ service }: ServiceCardProps) => {
  const Icon = service.icon;
  const headingId = `home-service-${service.id}`;
  const actionLabel = `Learn more about ${service.title}`;

  return (
    <article className="home-services__card" aria-labelledby={headingId}>
      <div className="home-services__card-top">
        <span className="home-services__icon"><Icon size={28} strokeWidth={1.5} aria-hidden="true" /></span>
        <span className="home-services__status"><span aria-hidden="true" />In the app</span>
      </div>
      <h3 id={headingId}>{service.title}</h3>
      <p className="home-services__description">{service.description}</p>
      <div className="home-services__card-action">
        <Button variant="gold" asChild>
          <Link to={service.href} aria-label={actionLabel}>
            {service.action} <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </article>
  );
};

export const HomeServices = () => (
  <section id="services" className="home-services" aria-labelledby="services-heading">
    <div className="home-services__inner">
      <header className="home-services__header">
        <div>
          <p className="home-services__eyebrow"><span aria-hidden="true" />Tools for your farm</p>
          <h2 id="services-heading">Our Solutions<br /><span>&amp; Services</span></h2>
        </div>
        <p className="home-services__introduction">
          Organise your farm, follow feeding and vaccination recommendations, and keep track of production and costs with AgriFlock 360.
        </p>
      </header>

      <div className="home-services__grid">
        {appSolutions.map((service) => <ServiceCard key={service.id} service={service} />)}
      </div>

      <div className="home-services__download">
        <p>Put these tools to work on your farm.</p>
        <Button variant="gold" asChild>
          <Link to="/features">Explore All Features<ArrowRight aria-hidden="true" /></Link>
        </Button>
      </div>

      <details className="home-services__upcoming">
        <summary>
          <Clock3 size={18} strokeWidth={1.5} aria-hidden="true" />
          <span>More tools in development</span>
          <ChevronDown className="home-services__upcoming-chevron" size={18} aria-hidden="true" />
        </summary>
        <ul aria-label="Features in development">
          {upcomingSolutions.map(({ title, icon: Icon }) => (
            <li key={title}><Icon size={18} strokeWidth={1.5} aria-hidden="true" />{title}</li>
          ))}
        </ul>
      </details>
    </div>
  </section>
);
