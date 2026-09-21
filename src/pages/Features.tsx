import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, BellRing, Check, ChevronDown, ClipboardList, House, MapPin, QrCode, Smartphone, Sprout, Stethoscope, Tractor, Users, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { appSolutions } from "@/data/solutions";
import { featureDetails, featureFaqs } from "@/data/features";
import feeding from "@/assets/app-features/feeding.jpeg";
import mortality from "@/assets/app-features/mortality.jpeg";
import reports from "@/assets/app-features/reports.jpeg";
import housing from "@/assets/app-features/housing.jpeg";
import production from "@/assets/app-features/production.jpeg";
import devices from "@/assets/app-features/devices.jpeg";
import "./Features.css";

const shortLabels = ["Farm & flocks", "Feeding", "Flock health", "Records & reports", "Planning", "Veterinary support"];

function AppPreview({ src, title, caption, eager = false }: { src: string; title: string; caption: string; eager?: boolean }) {
  return (
    <figure className="features-preview">
      <Dialog>
        <DialogTrigger asChild>
          <button className="features-preview__button" aria-label={`Enlarge app preview: ${title}`}>
            <img src={src} alt={title} width={738} height={1600} loading={eager ? "eager" : "lazy"} decoding="async" />
            <span className="features-preview__zoom"><ZoomIn size={17} aria-hidden="true" /><span>View screen</span></span>
          </button>
        </DialogTrigger>
        <DialogContent className="features-preview-dialog">
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{caption} Example app screen.</DialogDescription>
          <div className="features-preview-dialog__image" tabIndex={0} role="region" aria-label="Scroll through the app preview"><img src={src} alt={title} width={738} height={1600} /></div>
        </DialogContent>
      </Dialog>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

function FarmDiagram() {
  return (
    <div className="features-diagram">
      <p className="features-diagram__label">How your farm is organised</p>
      <div className="features-diagram__node"><Tractor aria-hidden="true" /><div><strong>Your farm</strong><span>One place for the whole operation</span></div></div>
      <div className="features-diagram__connector" aria-hidden="true" />
      <div className="features-diagram__pair">
        {["House A", "House B"].map((name) => <div className="features-diagram__node" key={name}><House aria-hidden="true" /><div><strong>{name}</strong><span>Capacity & occupancy</span></div></div>)}
      </div>
      <div className="features-diagram__connector" aria-hidden="true" />
      <div className="features-diagram__node features-diagram__batch"><Users aria-hidden="true" /><div><strong>Bird batches</strong><span>Type · age · bird numbers · status</span></div></div>
      <div className="features-diagram__tags"><span>Daily records</span><span>Batch history</span><span>Farm reports</span></div>
      <p className="features-diagram__note">An illustration of the farm, house and batch structure.</p>
    </div>
  );
}

function VetDiagram() {
  const steps = [
    { icon: MapPin, title: "Find an officer", text: "Search the veterinary directory by location and your needs." },
    { icon: Stethoscope, title: "Get to know their experience", text: "Review qualifications, profile details and availability." },
    { icon: ClipboardList, title: "Take the next step", text: "Start a booking and follow your service orders." },
  ];
  return <div className="features-vet-guide"><p className="features-diagram__label">From finding support to booking</p>{steps.map(({ icon: Icon, title, text }, i) => (
    <div className="features-vet-guide__step" key={title}><span className="features-vet-guide__icon"><Icon aria-hidden="true" /></span><div><span className="features-vet-guide__number">0{i + 1}</span><h3>{title}</h3><p>{text}</p></div></div>
  ))}</div>;
}

function FeatureVisual({ visual }: { visual: string }) {
  if (visual === "farm") return <FarmDiagram />;
  if (visual === "vets") return <VetDiagram />;
  if (visual === "planning") return <div className="features-preview-pair"><AppPreview src={housing} title="Poultry house capacity options" caption="Choose your housing capacity" /><AppPreview src={production} title="Layer production estimate inputs" caption="Adjust your planning assumptions" /></div>;
  const preview = {
    feeding: { src: feeding, title: "Record feed from store or a new purchase", caption: "Record how feed is used" },
    mortality: { src: mortality, title: "Record mortality and suspected causes", caption: "Keep a record of flock losses" },
    reports: { src: reports, title: "Choose a batch or farm report", caption: "Review a batch or the whole farm" },
  }[visual];
  return preview ? <AppPreview {...preview} /> : null;
}

const Features = () => {
  return (
    <div className="features-page">
      <header className="features-hero">
        <div className="features-container features-hero__grid">
          <div className="features-hero__copy">
            <p className="features-eyebrow"><span />Inside the AgriFlock 360 app</p>
            <h1>Your farm.<br />Every detail,<br /><em>in one place.</em></h1>
            <p className="features-hero__intro">From the first flock to your next production cycle, keep feeding, health, records and planning close at hand.</p>
            <div className="features-actions"><Button variant="gold" size="lg" asChild><Link to="/download"><Smartphone aria-hidden="true" />Get the App<ArrowRight aria-hidden="true" /></Link></Button><Link className="features-text-link" to="#explore">Explore the features<ArrowDown size={18} aria-hidden="true" /></Link></div>
            <div className="features-hero__highlights"><span><Sprout size={17} aria-hidden="true" />Guidance by bird type & age</span><span><ClipboardList size={17} aria-hidden="true" />Records for every batch</span></div>
          </div>
          <div className="features-hero__visual">
            <div className="features-hero__visual-heading"><span className="features-live-dot" />A closer look at your app<span>Plan · Record · Review</span></div>
            <div className="features-preview-pair"><AppPreview src={housing} title="House quotation in the AgriFlock app" caption="Plan your poultry house" eager /><AppPreview src={reports} title="Report selection in the AgriFlock app" caption="Understand your farm" eager /></div>
            <p className="features-hero__visual-note">Real app previews. Tap a screen to take a closer look.</p>
          </div>
        </div>
      </header>

      <section id="explore" tabIndex={-1} className="features-explore features-container" aria-labelledby="features-explore-heading">
        <div className="features-section-heading"><div><p className="features-eyebrow"><span />Built around your daily work</p><h2 id="features-explore-heading">Explore what you can do.</h2></div><p>Start with what matters to your farm. Each tool connects to the records you keep and the decisions you make.</p></div>
        <nav className="features-jump" aria-label="Explore app features">{appSolutions.map(({ id, icon: Icon }, i) => <Link key={id} to={`#${id}`}><Icon size={22} strokeWidth={1.5} aria-hidden="true" /><span>{shortLabels[i]}</span><ArrowDown size={15} aria-hidden="true" /></Link>)}</nav>
      </section>

      <div className="features-container features-sections">
        {featureDetails.map(({ id, label, heading, intro, points, detailTitle, detail, visual }, i) => (
          <section key={id} id={id} tabIndex={-1} className={`features-detail${i % 2 ? " features-detail--reverse" : ""}`} aria-labelledby={`${id}-heading`}>
            <div className="features-detail__copy">
              <p className="features-eyebrow"><span />0{i + 1} / {label}</p>
              <h2 id={`${id}-heading`}>{heading}</h2><p className="features-detail__intro">{intro}</p>
              <ul className="features-benefits">{points.map(([title, description]) => <li key={title}><span><Check size={15} aria-hidden="true" /></span><div><h3>{title}</h3><p>{description}</p></div></li>)}</ul>
              <details className="features-disclosure"><summary>{detailTitle}<ChevronDown size={18} aria-hidden="true" /></summary><p>{detail}</p></details>
            </div>
            <div className={`features-detail__visual features-detail__visual--${visual}`}><FeatureVisual visual={visual} /></div>
          </section>
        ))}
      </div>

      <section className="features-guidance" aria-labelledby="guidance-heading"><div className="features-container features-guidance__grid">
        <div><p className="features-eyebrow"><span />Guidance that follows growth</p><h2 id="guidance-heading">The right schedule<br />for your bird category.</h2><p>The AgriFlock team maintains feeding and vaccination recommendations in the admin panel, organised by bird type and age. The app brings that guidance into your flock’s daily routine.</p></div>
        <div><ul className="features-bird-types">{["Broilers", "Growers before laying", "Layers", "Improved indigenous", "Pure Kienyeji"].map((type) => <li key={type}><Check size={16} aria-hidden="true" />{type}</li>)}</ul><p className="features-guidance__caption">Improved indigenous includes Sasso, Kenbro and Kuroiler.</p><div className="features-guidance__reminder"><BellRing aria-hidden="true" /><p><strong>Time to prepare.</strong><br />Scheduled feed and vaccination reminders help you keep upcoming care in view.</p></div></div>
      </div></section>

      <section id="devices" tabIndex={-1} className="features-container features-devices" aria-labelledby="devices-heading">
        <div className="features-devices__copy"><p className="features-eyebrow"><span />Your profile & devices</p><h2 id="devices-heading">Your brooder,<br />linked to your account.</h2><p>Add your brooder device from your profile using its QR code. Return to My Devices to see the devices associated with your account.</p><ol className="features-device-steps"><li><span>1</span>Open Profile and choose My Brooder Devices.</li><li><span>2</span>Tap the QR scanner icon.</li><li><span>3</span>Scan the QR code on your brooder to link it.</li></ol><div className="features-profile-note"><QrCode size={24} aria-hidden="true" /><p>Use your brooder’s QR code for device registration. Settings and Feedback are also available from your profile.</p></div></div>
        <div className="features-devices__visual"><AppPreview src={devices} title="My Devices with QR scanner icon" caption="Add a device from My Devices" /></div>
      </section>

      <section className="features-start" aria-labelledby="features-start-heading"><div className="features-container"><p className="features-eyebrow"><span />A simple way to begin</p><h2 id="features-start-heading">Make it part of your farm day.</h2><ol>{[
        ["Set up your farm", "Add your farm, houses and bird batches."], ["Check the guidance", "Review feed recommendations and upcoming vaccinations."], ["Record the day", "Log feed, production, health events, expenses and income."], ["Review & plan", "Use your reports and estimates to plan your next steps."],
      ].map(([title, text], i) => <li key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></div></section>

      <section className="features-container features-faq" aria-labelledby="features-faq-heading"><div><p className="features-eyebrow"><span />A few useful answers</p><h2 id="features-faq-heading">Before you get started.</h2><Link to="/contact" className="features-text-link">Talk to our team<ArrowRight size={18} aria-hidden="true" /></Link></div><div>{featureFaqs.map(([question, answer]) => <details className="features-disclosure" key={question}><summary>{question}<ChevronDown size={18} aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></section>

      <section className="features-closing" aria-labelledby="features-closing-heading"><div className="features-container"><div><p className="features-eyebrow"><span />Your next step</p><h2 id="features-closing-heading">Get to know your farm better.</h2><p>Bring your flock’s daily work together with AgriFlock 360.</p></div><Button variant="gold" size="lg" asChild><Link to="/download"><Smartphone aria-hidden="true" />Download the App<ArrowRight aria-hidden="true" /></Link></Button></div></section>
    </div>
  );
};
export default Features;
