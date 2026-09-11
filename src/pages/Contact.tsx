import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Copy, Handshake, LoaderCircle, Mail, MessageSquare, Phone, Send, Smartphone, Stethoscope, Tractor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { contactApi } from "@/services/api";
import "./Contact.css";

const supportEmail = "support@agriflock360.com";
const enquiryTopics = [
  { title: "Farmer & app support", icon: Tractor, hint: "Tell us what you need help with, your device type and what happens in the app." },
  { title: "Vets & extension officers", icon: Stethoscope, hint: "Tell us whether you need help applying, following up on an application or using the officer module." },
  { title: "Partnerships", icon: Handshake, hint: "Tell us about your organisation, who you work with and how you would like to collaborate." },
  { title: "General enquiry", icon: MessageSquare, hint: "Tell us a little about yourself and how we can help." },
];
const helpfulLinks = [
  { number: "01", title: "Get the app", description: "Download for Android or join the iOS beta, then choose your module.", label: "Download AgriFlock 360", to: "/download" },
  { number: "02", title: "Understand the pricing", description: "Compare farmer plans and see the rates for professional services.", label: "View plans & service rates", to: "/pricing" },
  { number: "03", title: "Explore what’s inside", description: "Discover the tools for feeding, vaccinations, farm records and more.", label: "Explore app features", to: "/features" },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [topic, setTopic] = useState("General enquiry");
  const [status, setStatus] = useState("");
  const [statusKind, setStatusKind] = useState<"success" | "error" | "info">("info");
  const [isCopying, setIsCopying] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const pendingAction = useRef(false);
  const isBusy = isCopying || isSubmitting;
  const selectedTopic = enquiryTopics.find((item) => item.title === topic)!;

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Contact Us | AgriFlock 360";
    return () => { document.title = previousTitle; };
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.setCustomValidity("");
    setFormData((previous) => ({ ...previous, [e.target.name]: e.target.value }));
    setStatus("");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (pendingAction.current) return;
    const form = event.currentTarget;
    for (const field of ["name", "message"]) {
      const input = form.elements.namedItem(field) as HTMLInputElement | HTMLTextAreaElement;
      if (!input.value.trim()) {
        input.setCustomValidity(`Please enter your ${field}.`);
        input.reportValidity();
        return;
      }
    }

    const subject = `${topic} — ${formData.name.trim()}`;
    const body = [
      `Enquiry: ${topic}`,
      `Name: ${formData.name.trim()}`,
      `Email: ${formData.email.trim()}`,
      `Organisation: ${formData.company.trim() || "Not provided"}`,
      "",
      "Message:",
      formData.message.trim(),
    ].join("\r\n");
    const submitter = (event.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null;

    if (submitter?.value === "copy") {
      pendingAction.current = true;
      setIsCopying(true);
      try {
        await navigator.clipboard.writeText(`To: ${supportEmail}\r\nSubject: ${subject}\r\n\r\n${body}`);
        setStatusKind("info");
        setStatus("Copied. Paste the details into your email, then send it to support@agriflock360.com.");
      } catch {
        setStatusKind("error");
        setStatus("Copying isn’t available in this browser. You can select and copy your message, or use Send enquiry.");
      } finally {
        setIsCopying(false);
        pendingAction.current = false;
      }
      return;
    }

    pendingAction.current = true;
    setIsSubmitting(true);
    setStatus("");
    try {
      const result = await contactApi.submitEnquiry({ ...formData, topic });
      if (result.success === true) {
        setStatusKind("success");
        setStatus(`Thank you. Your enquiry has been submitted to our team. We’ll use ${formData.email.trim()} to get back to you.`);
        setFormData({ name: "", email: "", company: "", message: "" });
        setTopic("General enquiry");
      } else {
        setStatusKind("error");
        setStatus(result.message);
      }
    } finally {
      setIsSubmitting(false);
      pendingAction.current = false;
    }
  };

  return (
    <div className="contact-page">
      <header className="contact-hero contact-container">
        <div><p className="contact-eyebrow">Contact AgriFlock 360</p><h1>Let’s talk.<br /><span>Let’s grow.</span></h1></div>
        <div className="contact-hero__intro"><p>Getting started on your farm, bringing your expertise to farmers or exploring a partnership? We’d love to hear from you.</p><a className="contact-text-link" href="#contact-enquiry">Start a conversation<ArrowRight size={18} aria-hidden="true" /></a></div>
      </header>

      <section className="contact-conversation" aria-label="Contact details and enquiry form">
        <div className="contact-container contact-conversation__grid">
          <aside className="contact-direct" aria-labelledby="contact-direct-heading">
            <div className="contact-direct__card">
              <p className="contact-eyebrow">A direct connection</p>
              <h2 id="contact-direct-heading">Reach our team.</h2>
              <p>Choose email or give us a call. We can help you find your next step with AgriFlock 360.</p>
              <address className="contact-channels">
                <a href={`mailto:${supportEmail}`}><Mail size={21} strokeWidth={1.5} aria-hidden="true" /><span><span className="contact-channels__label">Email us</span><span className="contact-channels__value">{supportEmail}</span></span><ArrowRight size={17} aria-hidden="true" /></a>
                <a href="tel:+254729554434"><Phone size={21} strokeWidth={1.5} aria-hidden="true" /><span><span className="contact-channels__label">Call · Kenya</span><span className="contact-channels__value">+254 729 554 434</span></span><ArrowRight size={17} aria-hidden="true" /></a>
                <a href="tel:+16674469432"><Phone size={21} strokeWidth={1.5} aria-hidden="true" /><span><span className="contact-channels__label">Call · United States</span><span className="contact-channels__value">+1 667 446 9432</span></span><ArrowRight size={17} aria-hidden="true" /></a>
              </address>
              <div className="contact-direct__note"><MessageSquare size={19} aria-hidden="true" /><p>For app support, include your device type and a short description of the issue so we can understand what’s happening.</p></div>
            </div>
            <div className="contact-officers"><Stethoscope size={23} strokeWidth={1.5} aria-hidden="true" /><div><h3>Joining as a vet or extension officer?</h3><p>Apply in the app: choose the vet module, accept the terms, submit your details and qualification documents, then wait for approval.</p><Link className="contact-text-link" to="/download#choose-your-role">See how to get started<ArrowRight size={17} aria-hidden="true" /></Link></div></div>
          </aside>

          <div className="contact-enquiry" id="contact-enquiry" tabIndex={-1}>
            <p className="contact-eyebrow">Tell us what’s on your mind</p>
            <h2 id="contact-form-heading">How can we help?</h2>
            <p className="contact-enquiry__intro" id="contact-form-note">Tell us what you need and send your enquiry directly to our team. We’ll use your email address to get back to you.</p>
            <form onSubmit={handleSubmit} aria-labelledby="contact-form-heading" aria-describedby="contact-form-note" aria-busy={isBusy}>
              <fieldset className="contact-topics" disabled={isBusy}>
                <legend>What would you like to talk about?</legend>
                <div className="contact-topics__grid">{enquiryTopics.map(({ title, icon: Icon }) => <label key={title} className={`contact-topic${topic === title ? " contact-topic--selected" : ""}`}><Icon size={19} strokeWidth={1.5} aria-hidden="true" /><span>{title}</span><input type="radio" name="topic" value={title} checked={topic === title} onChange={() => { setTopic(title); setStatus(""); }} /></label>)}</div>
              </fieldset>

              <fieldset className="contact-fields" disabled={isBusy}>
                <legend className="sr-only">Your contact details and message</legend>
                <div className="contact-field"><Label htmlFor="contact-name">Full name <span>(required)</span></Label><Input id="contact-name" name="name" autoComplete="name" placeholder="Your full name" value={formData.name} onChange={handleChange} required maxLength={100} /></div>
                <div className="contact-field"><Label htmlFor="contact-email">Email address <span>(required)</span></Label><Input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} required maxLength={254} /></div>
                <div className="contact-field contact-field--wide"><Label htmlFor="contact-company">Farm / organisation <span>(optional)</span></Label><Input id="contact-company" name="company" autoComplete="organization" placeholder="Your farm or organisation name" value={formData.company} onChange={handleChange} maxLength={150} /></div>
                <div className="contact-field contact-field--wide"><Label htmlFor="contact-message">Your message <span>(required)</span></Label><p className="contact-field__hint" id="contact-message-hint">{selectedTopic.hint}</p><Textarea id="contact-message" name="message" placeholder="How can we help?" value={formData.message} onChange={handleChange} required aria-describedby="contact-message-hint" rows={5} maxLength={3000} /></div>
              </fieldset>
              <div className="contact-form-actions"><Button variant="gold" type="submit" disabled={isBusy}>{isSubmitting ? <>Sending…<LoaderCircle className="contact-sending-icon" size={17} aria-hidden="true" /></> : <>Send enquiry<Send size={17} aria-hidden="true" /></>}</Button><Button variant="ghost" type="submit" value="copy" disabled={isBusy}><Copy size={16} aria-hidden="true" />{isCopying ? "Copying…" : "Copy enquiry"}</Button></div>
              <p className="contact-form-help">Prefer to email us yourself? Write to <a href={`mailto:${supportEmail}`}>{supportEmail}</a>, or copy your enquiry to use in your email app.</p>
              <div className={`contact-form-status contact-form-status--${statusKind}`} role="status" aria-atomic="true">{status && <p>{status}</p>}</div>
            </form>
          </div>
        </div>
      </section>

      <section className="contact-help contact-container" aria-labelledby="contact-help-heading">
        <div className="contact-help__heading"><div><p className="contact-eyebrow">A few useful starting points</p><h2 id="contact-help-heading">Find your next step.</h2></div><Smartphone size={30} strokeWidth={1.3} aria-hidden="true" /></div>
        <div className="contact-help__grid">{helpfulLinks.map(({ number, title, description, label, to }) => <article key={to}><span className="contact-help__number" aria-hidden="true">{number}</span><h3>{title}</h3><p>{description}</p><Link className="contact-text-link" to={to}>{label}<ArrowRight size={17} aria-hidden="true" /></Link></article>)}</div>
      </section>
    </div>
  );
};

export default Contact;
