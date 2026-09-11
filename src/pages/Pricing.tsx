import { useEffect } from "react";
import { ArrowDown, ArrowRight, Check, ChevronDown, ClipboardList, Gift, MapPin, Phone, ShoppingBag, Smartphone, Sprout, Stethoscope, Syringe, Tractor, Truck, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { farmerPlans, professionalServices, pricingTerms } from "@/data/pricing";
import "./Pricing.css";

const includedFeatures = [
  { icon: Syringe, title: "Vaccination tracking", description: "Keep vaccination records and receive reminders." },
  { icon: Sprout, title: "Feeding guidance", description: "Follow smart feeding schedules and monitor feeding." },
  { icon: ShoppingBag, title: "Marketplace access", description: "Access the marketplace through your farmer account." },
  { icon: ClipboardList, title: "Quotations", description: "Use the quotation tools to plan your poultry operation." },
];

const serviceIcons = { advisory: Phone, investigation: Stethoscope, assessment: Tractor, training: Users, vaccination: Syringe };
const formatPrice = (price: number) => price.toLocaleString("en-KE");

const officerOnboarding = [
  { title: "Select the vet module", description: "Choose Veterinarian (Extension officer) when you sign up in the app." },
  { title: "Accept the terms", description: "Read and accept the Terms & Conditions and Code of Conduct for extension officers." },
  { title: "Submit your application", description: "Provide your personal and professional details, and upload your qualification documents." },
  { title: "Wait for approval", description: "Your application must be reviewed and approved before you can offer services." },
];

const pricingFaqs = [
  { question: "Which farmer plan should I choose?", answer: "Choose by flock size: Bronze for fewer than 300 chicks, Silver for 300–600, Gold for 601–1,000, and Platinum for more than 1,000. All four plans include vaccination tracking, feeding guidance, marketplace access and quotations." },
  { question: "How long is the free trial?", answer: `Every farmer plan includes a ${pricingTerms.trialDays}-day free trial. The monthly prices shown above apply after the trial.` },
  { question: "Are veterinary services included in my subscription?", answer: `Veterinary and extension officer services are charged separately from your farmer app subscription. Each service has a fixed fee, a per-person rate or a per-bird rate, as listed above. In-person visits also carry a transport charge of KES ${pricingTerms.transportPerKm} per kilometre. Remote advisory calls have no transport charge.` },
  { question: "Can I change my farmer plan?", answer: "Yes. You can upgrade or change your plan in the app at any time as your flock grows or your needs change." },
  { question: "How do I join as a vet or extension officer?", answer: "Download the app and select Veterinarian (Extension officer). Read and accept the Terms & Conditions and Code of Conduct, submit your personal and professional details with your qualification documents, then wait for approval. You can offer services once your application is approved." },
];

const Pricing = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Pricing | AgriFlock 360";
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <div className="pricing-page">
      <header className="pricing-hero pricing-container">
        <div className="pricing-hero__topline">
          <p className="pricing-eyebrow">AgriFlock 360 pricing</p>
          <span className="pricing-market"><MapPin size={15} aria-hidden="true" />Kenya · KES</span>
        </div>
        <h1>The right plan for your flock.<br /><span>The right support to grow.</span></h1>
        <p className="pricing-hero__intro">One app, two modules. Farmers manage their flocks with a monthly plan. Vets and extension officers provide professional services, priced separately.</p>
        <nav className="pricing-modules" aria-label="Explore pricing by app module">
          <Link to="#farmer-plans"><span className="pricing-module-icon"><Tractor aria-hidden="true" /></span><span><strong>Farmer module</strong><span>Explore monthly plans from KES 150</span></span><ArrowDown size={19} aria-hidden="true" /></Link>
          <Link to="#extension-officers"><span className="pricing-module-icon"><Stethoscope aria-hidden="true" /></span><span><strong>Extension officer module</strong><span>View professional service rates & earnings</span></span><ArrowDown size={19} aria-hidden="true" /></Link>
        </nav>
      </header>

      <section id="farmer-plans" className="pricing-farmers pricing-container" aria-labelledby="farmer-plans-heading" tabIndex={-1}>
        <div className="pricing-section-heading">
          <div><p className="pricing-eyebrow">01 / Farmer module</p><h2 id="farmer-plans-heading">A plan for every flock.</h2></div>
          <p>Choose the plan that fits your flock size. All prices are in Kenyan shillings, billed monthly after your free trial.</p>
        </div>
        <div className="pricing-trial"><Gift size={23} strokeWidth={1.5} aria-hidden="true" /><div><strong>Start with a {pricingTerms.trialDays}-day free trial.</strong><span>Included with every farmer plan.</span></div></div>
        <div className="pricing-plans">
          {farmerPlans.map(plan => (
            <article className={`pricing-plan pricing-plan--${plan.id}`} key={plan.id} aria-labelledby={`${plan.id}-heading`}>
              <p className="pricing-plan__audience">{plan.audience}</p>
              <h3 id={`${plan.id}-heading`}>{plan.name}</h3>
              <p className="pricing-plan__price"><span>KES</span> <strong>{formatPrice(plan.price)}</strong><span>/ month</span></p>
              <p className="pricing-plan__flock"><Tractor size={18} aria-hidden="true" />{plan.flock}</p>
              <p className="pricing-plan__included"><Check size={17} aria-hidden="true" />All farmer features listed below</p>
              <Button variant="gold" asChild><Link to="/download" aria-label={`Start a free trial of the ${plan.name} plan`}>Start Free Trial<ArrowRight size={17} aria-hidden="true" /></Link></Button>
            </article>
          ))}
        </div>
        <p className="pricing-plan-note"><Smartphone size={17} aria-hidden="true" /><span>Choose your plan in the app. You can upgrade or change it at any time.</span></p>

        <div className="pricing-included" aria-labelledby="included-heading">
          <div className="pricing-included__heading"><h3 id="included-heading">Included in every farmer plan</h3><Link to="/features">Explore app features<ArrowRight size={17} aria-hidden="true" /></Link></div>
          <ul>{includedFeatures.map(({ icon: Icon, title, description }) => <li key={title}><Icon size={24} strokeWidth={1.5} aria-hidden="true" /><h4>{title}</h4><p>{description}</p></li>)}</ul>
        </div>
      </section>

      <section id="extension-officers" className="pricing-services" aria-labelledby="services-heading" tabIndex={-1}>
        <div className="pricing-container">
          <div className="pricing-section-heading">
            <div><p className="pricing-eyebrow">02 / Veterinary & extension services</p><h2 id="services-heading">Expert support.<br />Clear service rates.</h2></div>
            <p>Book professional support through the app. These are the service fees charged to farmers for work provided by vets and extension officers.</p>
          </div>
          <div className="pricing-services__layout">
            <div>
              <ul className="pricing-service-list" aria-label="Professional service prices in Kenya">
                {professionalServices.map(service => {
                  const Icon = serviceIcons[service.id];
                  return <li className="pricing-service" key={service.id}>
                    <span className="pricing-service__icon"><Icon size={23} strokeWidth={1.5} aria-hidden="true" /></span>
                    <div className="pricing-service__copy"><h3>{service.name}</h3><p>{service.description}</p></div>
                    <div className="pricing-service__price"><strong>KES {formatPrice(service.price)}</strong><span>{service.basis}</span><small>{service.note}</small></div>
                  </li>;
                })}
              </ul>
              <div className="pricing-transport"><Truck size={25} strokeWidth={1.5} aria-hidden="true" /><div><h3>Transport · KES {pricingTerms.transportPerKm} per kilometre</h3><p>Applies only to in-person visits. Remote advisory calls have no transport charge. Confirm the travel distance and total cost when arranging a visit.</p></div></div>
            </div>

            <aside className="pricing-officer" aria-labelledby="officer-heading">
              <span className="pricing-officer__icon"><Stethoscope size={27} strokeWidth={1.5} aria-hidden="true" /></span>
              <p className="pricing-eyebrow">Extension officer module</p>
              <h3 id="officer-heading">Bring your expertise<br />to more farms.</h3>
              <p>Offer services and consultations as an independent professional through AgriFlock 360.</p>
              <dl className="pricing-revenue"><div><dt>Officer share</dt><dd>{pricingTerms.officerShare}%</dd></div><div><dt>Platform share</dt><dd>{pricingTerms.platformShare}%</dd></div></dl>
              <p className="pricing-officer__share-note">For each completed job, {pricingTerms.officerShare}% of the service revenue goes to the officer and {pricingTerms.platformShare}% to the platform.</p>
              <div className="pricing-officer__join"><p>Submit your details and qualification documents in the app. <strong>Approval is required before you can provide services.</strong></p><Button variant="gold" asChild><Link to="/download">Apply as an Officer<ArrowRight size={17} aria-hidden="true" /></Link></Button></div>
            </aside>
          </div>
          <div className="pricing-services__footer"><div><p>Professional service fees are separate from your farmer subscription.</p><p>Service payments are made via mobile money and recorded in the app.</p></div><Link to="/download">Get the app to book a service<ArrowRight size={17} aria-hidden="true" /></Link></div>
          <div className="pricing-officer-start" aria-labelledby="officer-start-heading"><h3 id="officer-start-heading">How to join as a vet or extension officer</h3><ol>{officerOnboarding.map(({ title, description }, index) => <li key={title}><span aria-hidden="true">0{index + 1}</span><h4>{title}</h4><p>{description}</p></li>)}</ol></div>
        </div>
      </section>

      <section className="pricing-faq pricing-container" aria-labelledby="pricing-faq-heading">
        <div><p className="pricing-eyebrow">Before you get started</p><h2 id="pricing-faq-heading">A few helpful answers.</h2><p>Need help choosing a plan or arranging a service?</p><Link className="pricing-text-link" to="/contact">Talk to our team<ArrowRight size={18} aria-hidden="true" /></Link></div>
        <div>{pricingFaqs.map(({ question, answer }) => <details key={question}><summary>{question}<ChevronDown size={18} aria-hidden="true" /></summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="pricing-closing" aria-labelledby="pricing-closing-heading"><div className="pricing-container"><div><p className="pricing-eyebrow">Your next step</p><h2 id="pricing-closing-heading">Start with your role.<br /><span>Grow with AgriFlock 360.</span></h2><p>Download the app and choose Farmer or Veterinarian (Extension officer) to get started.</p></div><Button variant="gold" size="lg" asChild><Link to="/download"><Smartphone size={19} aria-hidden="true" />Get the App<ArrowRight size={19} aria-hidden="true" /></Link></Button></div></section>
    </div>
  );
};

export default Pricing;
