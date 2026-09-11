import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, ChevronDown, ExternalLink, Gift, Mail, Phone, QrCode, Smartphone, Stethoscope, Tractor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { pricingTerms } from "@/data/pricing";
import googlePlayIcon from "@/assets/google-play.png";
import appleIcon from "@/assets/apple-icon.svg";
import qrAndroid from "@/assets/google-play-qr.svg";
import qrIos from "@/assets/testflight-qr.svg";
import chooseRole from "@/assets/app-features/choose-role.jpeg";
import "./Download.css";

const playStoreUrl = "https://play.google.com/store/apps/details?id=com.mglobal.agriflock";
const testFlightUrl = "https://testflight.apple.com/join/QdMNfNtS";

const farmerSteps = [
  ["Choose Farmer", "Select the Farmer module when you create your account."],
  ["Pick your plan", `Choose a plan for your flock size and start your ${pricingTerms.trialDays}-day free trial.`],
  ["Set up your farm", "Add your farm and flock details, then start recording your daily work."],
];
const officerSteps = [
  ["Choose the vet module", "Select Veterinarian (Extension officer) during signup."],
  ["Accept the terms", "Read and accept the Terms & Conditions and Code of Conduct."],
  ["Submit your application", "Provide your personal and professional details, and upload your qualification documents."],
  ["Wait for approval", "Your application must be reviewed and approved before you can provide services."],
];
const downloadFaqs = [
  ["Do farmers and extension officers use the same app?", "Yes. Download AgriFlock 360, then choose Farmer or Veterinarian (Extension officer) during signup. Each role has its own module within the app."],
  ["How do I install on an iPhone or iPad?", "Use the Join on TestFlight button above. Install Apple’s TestFlight app if prompted, open the AgriFlock 360 invitation on your device, then accept the invitation and install the beta app."],
  ["How do I use a download QR code?", "Open your phone’s camera, point it at the code and tap the link that appears. The Android code opens Google Play; the iPhone and iPad code opens the TestFlight invitation. If you are already on your phone, use the download button instead."],
  ["Can I start providing services as soon as I sign up?", "Vets and extension officers must accept the terms, submit their details and qualification documents, and wait for approval before offering services."],
];

function DownloadQR({ image, platform }: { image: string; platform: string }) {
  return <details className="download-qr">
    <summary><QrCode size={17} aria-hidden="true" /><span>Scan with your phone</span><ChevronDown size={16} aria-hidden="true" /></summary>
    <figure><img src={image} alt={`QR code to open AgriFlock 360 on ${platform}`} width={200} height={200} /><figcaption>Open your phone’s camera and scan to continue on {platform}.</figcaption></figure>
  </details>;
}

const Download = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Download the App | AgriFlock 360";
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <div className="download-page">
      <header className="download-hero download-container">
        <div className="download-hero__copy">
          <p className="download-eyebrow">The AgriFlock 360 mobile app</p>
          <h1>Your farm.<br />Your expertise.<br /><span>One app.</span></h1>
          <p className="download-hero__intro">Manage your flock or bring professional support to farmers. Download AgriFlock 360 and choose the role that fits your work.</p>
          <div className="download-stores" id="download-options" tabIndex={-1} aria-label="App download options">
            <section className="download-store" aria-labelledby="android-heading">
              <div className="download-store__heading"><span className="download-store__icon"><img src={googlePlayIcon} alt="" width={26} height={26} /></span><div><h2 id="android-heading">Android</h2><p>Google Play</p></div></div>
              <p className="download-store__description">Install the app directly from Google Play.</p>
              <Button variant="gold" asChild><a href={playStoreUrl} target="_blank" rel="noopener noreferrer">Get it on Google Play<ExternalLink size={16} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a></Button>
              <DownloadQR image={qrAndroid} platform="Google Play" />
            </section>
            <section className="download-store" aria-labelledby="ios-heading">
              <div className="download-store__heading"><span className="download-store__icon"><img src={appleIcon} alt="" width={26} height={26} /></span><div><h2 id="ios-heading">iPhone & iPad</h2><p>TestFlight beta</p></div></div>
              <p className="download-store__description">Install TestFlight, then join the AgriFlock 360 beta.</p>
              <Button variant="gold" asChild><a href={testFlightUrl} target="_blank" rel="noopener noreferrer">Join on TestFlight<ExternalLink size={16} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a></Button>
              <DownloadQR image={qrIos} platform="TestFlight" />
            </section>
          </div>
          <div className="download-trial"><Gift size={21} strokeWidth={1.5} aria-hidden="true" /><p>Farmer plans include a <strong>{pricingTerms.trialDays}-day free trial.</strong> <Link to="/pricing#farmer-plans">View plans<ArrowRight size={15} aria-hidden="true" /></Link></p></div>
        </div>
        <figure className="download-preview">
          <div className="download-preview__heading"><span />One download. Two ways to grow.</div>
          <div className="download-preview__phone"><img src={chooseRole} alt="AgriFlock 360 signup screen offering Farmer and Veterinarian (Extension officer) roles" width={590} height={1280} fetchPriority="high" /></div>
          <figcaption><Smartphone size={18} aria-hidden="true" /><span>Choose your role when you sign up.<br /><strong>Both modules are in the same app.</strong></span></figcaption>
        </figure>
      </header>

      <section id="choose-your-role" className="download-roles" aria-labelledby="download-roles-heading" tabIndex={-1}>
        <div className="download-container">
          <div className="download-section-heading"><div><p className="download-eyebrow">After installing</p><h2 id="download-roles-heading">Start with your role.</h2></div><p>Choose the module that matches what you do. Here’s what happens next.</p></div>
          <div className="download-roles__grid">
            <article className="download-role download-role--farmer" aria-labelledby="download-farmer-heading">
              <div className="download-role__heading"><span><Tractor size={26} strokeWidth={1.5} aria-hidden="true" /></span><div><p>For poultry farmers</p><h3 id="download-farmer-heading">Manage your farm.</h3></div></div>
              <p className="download-role__intro">Keep feeding, vaccinations, records and planning together as your flock grows.</p>
              <ol>{farmerSteps.map(([title, description], i) => <li key={title}><span aria-hidden="true">0{i + 1}</span><div><h4>{title}</h4><p>{description}</p></div></li>)}</ol>
              <div className="download-role__note"><Check size={18} aria-hidden="true" /><p>All farmer plans include vaccination tracking, feeding guidance, marketplace access and quotations.</p></div>
              <Link className="download-text-link" to="/pricing#farmer-plans">Compare farmer plans<ArrowRight size={18} aria-hidden="true" /></Link>
            </article>
            <article className="download-role download-role--officer" aria-labelledby="download-officer-heading">
              <div className="download-role__heading"><span><Stethoscope size={26} strokeWidth={1.5} aria-hidden="true" /></span><div><p>For vets & extension officers</p><h3 id="download-officer-heading">Put your expertise to work.</h3></div></div>
              <p className="download-role__intro">Apply to offer consultations and professional services to poultry farmers.</p>
              <ol>{officerSteps.map(([title, description], i) => <li key={title}><span aria-hidden="true">0{i + 1}</span><div><h4>{title}</h4><p>{description}</p></div></li>)}</ol>
              <Link className="download-text-link" to="/pricing#extension-officers">View service rates & earnings<ArrowRight size={18} aria-hidden="true" /></Link>
            </article>
          </div>
        </div>
      </section>

      <section className="download-faq download-container" aria-labelledby="download-faq-heading">
        <div><p className="download-eyebrow">Getting started, made clear</p><h2 id="download-faq-heading">A little help<br />before you begin.</h2><p>Explore the tools inside AgriFlock 360 before setting up your account.</p><Link className="download-text-link" to="/features">Explore app features<ArrowRight size={18} aria-hidden="true" /></Link></div>
        <div>{downloadFaqs.map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown size={18} aria-hidden="true" /></summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="download-help" aria-labelledby="download-help-heading"><div className="download-container"><div><p className="download-eyebrow">We’re here to help</p><h2 id="download-help-heading">Need a hand getting started?</h2><p>Our team can help with installation, choosing your module and the next steps.</p><div className="download-help__contacts"><a href="mailto:support@agriflock360.com"><Mail size={17} aria-hidden="true" /><span>support@agriflock360.com</span></a><a href="tel:+254729554434"><Phone size={17} aria-hidden="true" /><span>+254 729 554 434</span></a></div></div><Button variant="gold" size="lg" asChild><Link to="/contact">Contact the Team<ArrowRight size={18} aria-hidden="true" /></Link></Button></div></section>
    </div>
  );
};

export default Download;
