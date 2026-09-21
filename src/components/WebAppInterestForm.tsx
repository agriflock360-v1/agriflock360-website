import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { ArrowRight, BellRing, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { contactApi } from "@/services/api";
import { SpamProtection } from "./SpamProtection";

export function WebAppInterestForm() {
  const [details, setDetails] = useState({ name: "", email: "", role: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ success: boolean; message: string } | null>(null);
  const pending = useRef(false);
  const [captchaToken, setCaptchaToken] = useState("");
  const [captchaReset, setCaptchaReset] = useState(0);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    event.target.setCustomValidity("");
    setDetails(previous => ({ ...previous, [name]: value }));
    setFeedback(null);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (pending.current) return;
    const nameInput = event.currentTarget.elements.namedItem("name") as HTMLInputElement;
    if (!details.name.trim()) {
      nameInput.setCustomValidity("Please enter your name.");
      nameInput.reportValidity();
      return;
    }

    if (!captchaToken) {
      setFeedback({ success: false, message: "Please complete the security check before sending." });
      return;
    }
    pending.current = true;
    setIsSubmitting(true);
    setFeedback(null);
    try {
      const result = await contactApi.submitEnquiry({
        name: details.name,
        email: details.email,
        company: "",
        topic: "Web app launch updates",
        captchaToken,
        message: `Please email me about the availability of the AgriFlock 360 web app.\nMy role: ${details.role || "Not specified"}.`,
      });
      if (result.success === true) {
        setFeedback({ success: true, message: `Thank you. Your request has been sent to our team, with ${details.email.trim()} as your contact for web app updates.` });
        setDetails({ name: "", email: "", role: "" });
      } else {
        setFeedback({ success: false, message: result.message });
      }
    } finally {
      setCaptchaToken("");
      setCaptchaReset(value => value + 1);
      pending.current = false;
      setIsSubmitting(false);
    }
  };

  return (
    <section className="web-interest" id="web-launch-updates" tabIndex={-1} aria-labelledby="web-interest-heading">
      <span className="web-interest__icon"><BellRing size={24} strokeWidth={1.5} aria-hidden="true" /></span>
      <p className="web-eyebrow">Stay connected</p>
      <h2 id="web-interest-heading">Hear when it’s ready.</h2>
      <p className="web-interest__intro">Let our team know you’d like updates about the web app launch.</p>
      <form onSubmit={handleSubmit} aria-labelledby="web-interest-heading" aria-describedby="web-interest-note" aria-busy={isSubmitting}>
        <fieldset disabled={isSubmitting}>
          <legend className="sr-only">Your details for web app launch updates</legend>
          <div><Label htmlFor="web-interest-name">Full name <span>(required)</span></Label><Input id="web-interest-name" name="name" autoComplete="name" value={details.name} onChange={handleChange} placeholder="Your full name" required maxLength={100} /></div>
          <div><Label htmlFor="web-interest-email">Email address <span>(required)</span></Label><Input id="web-interest-email" name="email" type="email" autoComplete="email" value={details.email} onChange={handleChange} placeholder="you@example.com" required maxLength={254} /></div>
          <div><Label htmlFor="web-interest-role">I’m a… <span>(optional)</span></Label><select id="web-interest-role" name="role" value={details.role} onChange={handleChange}><option value="">Choose your role</option><option>Farmer</option><option>Vet / extension officer</option><option>Partner / organisation</option><option>Other</option></select></div>
        </fieldset>
        <SpamProtection key={captchaReset} onVerify={setCaptchaToken} />
        <Button variant="gold" type="submit" disabled={isSubmitting || !captchaToken}>{isSubmitting ? <>Sending…<LoaderCircle className="web-interest__spinner" size={18} aria-hidden="true" /></> : <>Request launch updates<ArrowRight size={18} aria-hidden="true" /></>}</Button>
        <p id="web-interest-note" className="web-interest__note">Your request goes to the AgriFlock 360 team. We’ll use your email to contact you about web app availability.</p>
      </form>
      <div className={`web-interest__feedback${feedback?.success === false ? " web-interest__feedback--error" : ""}`} role="status" aria-atomic="true">{feedback && <p>{feedback.message}</p>}</div>
    </section>
  );
}
