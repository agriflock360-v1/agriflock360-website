import { Link } from "react-router-dom";
import type { LegalSection } from "./types";
import { ArrowUpRight } from "lucide-react";

export const smsSections: LegalSection[] = [
  {
    id: "sms-opt-in",
    title: "How you choose to receive SMS",
    content: (
      <>
        <p>You choose whether to receive SMS alerts during registration in the AgriFlock 360 mobile app. Provide a valid mobile number and use the separate SMS consent checkbox, which starts unchecked.</p>
        <ol>
          <li>Open the app and enter your registration details.</li>
          <li>Read the SMS consent wording beneath the account fields.</li>
          <li>Select the SMS checkbox if you want to receive these messages.</li>
        </ol>
        <p>The SMS choice is separate from accepting the Terms & Conditions and Privacy Policy. SMS consent is not a condition of purchase.</p>
        <div className="legal-note"><p><strong>Your choice happens in the app.</strong> Reading this page, using the website knowledge-base guide or sending a website enquiry does not enrol you in SMS messaging.</p></div>
        <p><Link to="/download">Download the app</Link> to get started.</p>
      </>
    ),
  },
  {
    id: "sms-consent-wording",
    title: "Consent wording in the app",
    content: (
      <>
        <p>The registration screen shown below presents this SMS consent wording:</p>
        <blockquote className="legal-consent-quote">“I agree to receive SMS alerts and account notifications for Agriflock 360. Message frequency varies. Message and data rates may apply.”</blockquote>
        <p>You can reply STOP to unsubscribe or HELP for assistance. See the <Link to="#sms-stop-help">STOP & HELP instructions</Link> below and the <Link to="/terms-conditions#terms-sms">SMS Program Terms</Link> for details.</p>
      </>
    ),
  },
  {
    id: "sms-messages",
    title: "Messages, frequency & charges",
    content: (
      <>
        <p>Messages relate to your account and the farm or device services you use. They may include:</p>
        <ul>
          <li>Temperature and humidity alerts.</li>
          <li>Water level and device connectivity alerts.</li>
          <li>Account notifications, including payments, subscriptions and renewals.</li>
          <li>Related service updates.</li>
        </ul>
        <h3>How often will messages arrive?</h3>
        <p>Message frequency varies with farm activity, device alerts and account status.</p>
        <h3>Will my mobile provider charge me?</h3>
        <p>Message and data rates may apply. Check your mobile plan or contact your provider for details of any charges.</p>
      </>
    ),
  },
  {
    id: "sms-stop-help",
    title: "Stop messages or get help",
    content: (
      <>
        <p>Reply to an AgriFlock 360 SMS with the relevant keyword:</p>
        <div className="legal-keywords">
          <div><strong>STOP</strong><p>Reply STOP at any time to unsubscribe from SMS communications.</p></div>
          <div><strong>HELP</strong><p>Reply HELP for assistance with SMS communications.</p></div>
        </div>
        <p>After opting out, you will no longer receive SMS messages unless you re-enrol.</p>
        <p>If you need help with your messaging preferences, contact our team:</p>
        <ul>
          <li>Email: <a href="mailto:support@agriflock360.com">support@agriflock360.com</a></li>
          <li>Kenya: <a href="tel:+254729554434">+254 729 554 434</a></li>
          <li>United States: <a href="tel:+16674469432">+1 667 446 9432</a></li>
        </ul>
        <p>You can also <Link to="/contact">send an enquiry through the Contact page</Link>.</p>
      </>
    ),
  },
  {
    id: "sms-privacy",
    title: "Your mobile information & policies",
    content: (
      <>
        <p>We do not sell, rent or share your mobile number or SMS consent with third parties for their marketing or promotional purposes. Your number is used for AgriFlock 360 service communications as described in our policies.</p>
        <ul>
          <li><Link to="/privacy-policy#privacy-sms">Privacy Policy: SMS communications and mobile information</Link></li>
          <li><Link to="/terms-conditions#terms-sms">Terms & Conditions: SMS Program Terms</Link></li>
        </ul>
      </>
    ),
  },
  {
    id: "sms-registration-screen",
    title: "See the registration screen",
    content: (
      <>
        <p>This app screenshot shows the registration form and the separate SMS consent checkbox.</p>
        <figure className="legal-sms-screenshot">
          <a href="/sms%20checkbox.jpeg" target="_blank" rel="noopener noreferrer" aria-label="View the full registration screenshot in a new tab">
            <img src="/sms%20checkbox.jpeg" width={720} height={1600} loading="lazy" alt="AgriFlock 360 registration screen with separate unchecked boxes for accepting policies and receiving SMS alerts; SMS wording explains variable frequency and possible message and data rates." />
          </a>
          <figcaption>
            <strong>A separate choice for SMS.</strong>
            <p>The SMS box starts unchecked. Read the wording and select it if you want to receive service alerts and account notifications.</p>
            <a href="/sms%20checkbox.jpeg" target="_blank" rel="noopener noreferrer">View full screenshot<ArrowUpRight size={16} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
          </figcaption>
        </figure>
      </>
    ),
  },
];
