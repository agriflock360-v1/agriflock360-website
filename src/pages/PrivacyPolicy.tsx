import { Link } from "react-router-dom";
import { LegalPage, type LegalSection } from "@/components/LegalPage";

const sections: LegalSection[] = [
  {
    id: "privacy-introduction",
    title: "Introduction",
    content: (<>
<p>
  This Privacy Policy explains how AgriFlock 360 collects, uses, stores, and protects your data across the website, mobile app, IoT devices, and services.
</p>
    </>),
  },
  {
    id: "privacy-data",
    title: "Data We Collect",
    content: (<>
<div>
  <div>
    <h3>A. Personal Information</h3>
    <ul>
      <li>Full name</li>
      <li>Phone number</li>
      <li>Email address</li>
      <li>Location (for device activation)</li>
      <li>Identification details (if required for financing)</li>
    </ul>
  </div>

  <div>
    <h3>B. IoT Device Data</h3>
    <ul>
      <li>Temperature readings</li>
      <li>Humidity readings</li>
      <li>Device status (heater/fan activity)</li>
      <li>Sensor health</li>
      <li>Firmware version</li>
      <li>Power/battery levels</li>
      <li>GPS position (if enabled)</li>
    </ul>
  </div>

  <div>
    <h3>C. Farm Operational Data</h3>
    <ul>
      <li>Flock numbers</li>
      <li>Feed usage</li>
      <li>Vaccination logs</li>
      <li>Production performance</li>
    </ul>
  </div>

  <div>
    <h3>D. Payment Information</h3>
    <p>Used only for:</p>
    <ul>
      <li>PAYG repayments</li>
      <li>Lease-to-own installments</li>
    </ul>
    <p>We do not store full mobile-money payment credentials.</p>
  </div>

  <div>
    <h3>E. App & Website Usage Data</h3>
    <ul>
      <li>IP address</li>
      <li>Browser/device type</li>
      <li>Login timestamps</li>
      <li>Crash logs</li>
      <li>In-app behavior analytics</li>
    </ul>
  </div>
</div>
<h3>F. Professional applications</h3>
<p>Vets and extension officers submit personal and professional details and qualification documents during onboarding so their applications can be reviewed.</p>
<h3>G. Website enquiries</h3>
<p>When you send an enquiry, we receive your name, email address, selected topic, message and any farm or organisation name you provide. A web app launch-update request also includes your role if you choose to provide it.</p>
    </>),
  },
  {
    id: "privacy-website",
    title: "Website forms & knowledge-base guide",
    content: (<>
<h3>Contact and launch-update requests</h3>
<p>When you submit the Contact form or request web app launch updates, the information you enter is sent through Web3Forms to the AgriFlock 360 team. We use your details to respond to your enquiry or contact you about web app availability.</p>
<p>The Copy enquiry button copies the text to your clipboard. Copying alone does not send an enquiry to our team. You can paste it into an email and decide whether to send it.</p>
<h3>Ask AgriFlock</h3>
<p>The homepage knowledge-base guide processes questions in your browser. It does not send chat messages to our support inbox or an AI provider and does not save them in browser storage. Conversation history is kept temporarily while you remain on the homepage.</p>
<p>Clear conversation, reload the page or leave the homepage to clear that history. Closing and reopening the guide on the same homepage retains the current conversation. To send a message to our team, use the <Link to="/contact">Contact page</Link>.</p>
    </>),
  },
  {
    id: "privacy-use",
    title: "How We Use Your Data",
    content: (<>
<p>We use collected data to:</p>
<ol>
  <li>Power the AgriFlock360 platform features</li>
  <li>Display brooder performance in real-time</li>
  <li>Provide alerts & notifications</li>
  <li>Improve system performance</li>
  <li>Deliver customer support</li>
  <li>Facilitate PAYG/Lease-to-Own financing</li>
  <li>Detect fraud or device tampering</li>
  <li>Conduct anonymized analytics & reporting</li>
</ol>
<p>We do not sell your data to third parties.</p>
    </>),
  },
  {
    id: "privacy-sms",
    title: "SMS Communications & Mobile Information",
    content: (<>
<p>
  AgriFlock 360 collects and stores users' mobile phone numbers when they create an account and voluntarily provide their contact information within the AgriFlock 360 mobile application.
</p>

<h3>How We Use Your Phone Number</h3>
<p>If you explicitly opt in, we may use your phone number to send:</p>
<ul>
  <li>Brooder monitoring alerts (e.g., temperature, humidity, water level, device connectivity, power warnings)</li>
  <li>Account notifications (e.g., subscription confirmations, payment confirmations, renewal reminders)</li>
  <li>Service-related notifications</li>
</ul>
<p>Message frequency varies depending on farm activity and account status.</p>

<h3>Consent to Receive SMS Messages</h3>
<p>
  SMS messages are only sent to users who provide express consent by selecting an opt-in checkbox or enabling a toggle within the AgriFlock 360 app. Consent is not a condition of purchase.
</p>

<h3>Opt-Out Instructions</h3>
<p>
  You may opt out of receiving SMS messages at any time by replying STOP to any message. After opting out, you will no longer receive SMS notifications unless you re-enroll.
</p>
<p>For assistance, reply HELP or contact us at:</p>
<p>
  Kenya: <a href="tel:+254729554434">+254 729 554 434</a>
  <br />
  United States: <a href="tel:+16674469432">+1 667 446 9432</a>
  <br />
  Website: <Link to="/">agriflock360.com</Link>
</p>

<h3>Data Sharing & Sale of Information</h3>
<p>
  AgriFlock 360 does not sell, rent, or share mobile phone numbers or SMS consent information with third parties for marketing purposes.
</p>
<p>
  Your phone number is used solely to provide AgriFlock 360 services and related communications.
</p>

<h3>Data Protection</h3>
<p>
  We implement appropriate technical and organizational security measures to protect your personal information, including your mobile phone number, from unauthorized access, disclosure, or misuse.
</p><p>Message and data rates may apply. See <Link to="/sms-consent">SMS Consent</Link> for the registration screen and a guide to your messaging choices.</p>
    </>),
  },
  {
    id: "privacy-sharing",
    title: "Sharing of Data",
    content: (<>
<p>We may share data only with:</p>
<ul>
  <li>Payment processors (e.g., Daraja API)</li>
  <li>Cloud hosting providers (AWS, EMQX, Firebase)</li>
  <li>Customer-support partners</li>
<li>Web3Forms, which processes website enquiries and launch-update requests for delivery to our support team</li>
</ul>
<p>All partners must comply with strict data protection agreements.</p>
<p>
  <strong>We will never share personal data with:</strong>
</p>
<ul>
  <li>Marketers</li>
  <li>Advertisers</li>
  <li>Unverified third parties</li>
</ul>
<p>unless required by law.</p>
<p>Web3Forms processes form submissions and related delivery and anti-spam information as a service provider. Its handling and retention of submission data are described in the <a href="https://web3forms.com/privacy" target="_blank" rel="noopener noreferrer">Web3Forms Privacy Policy (opens in a new tab)</a>. Contact us if you want help with a request concerning your enquiry.</p>
    </>),
  },
  {
    id: "privacy-retention",
    title: "Data Retention",
    content: (<>
<p>Data is stored as long as:</p>
<ul>
  <li>Your account is active</li>
  <li>Your PAYG contract remains valid</li>
  <li>Your IoT devices remain registered</li>
</ul>
<p>
  Upon account deletion, personally identifiable data is deleted within 30 days, except where legal retention applies.
</p>
    </>),
  },
  {
    id: "privacy-security",
    title: "Security Measures",
    content: (<>
<p>We deploy industry-standard security measures:</p>
<ul>
  <li>TLS encryption</li>
  <li>Encrypted device credentials</li>
  <li>Signed OTA firmware</li>
  <li>JWT authentication</li>
  <li>Limited access control</li>
  <li>Encrypted cloud storage</li>
  <li>Regular security audits</li>
</ul>
<p>
  Despite best efforts, no system is completely immune to vulnerabilities.
</p>
    </>),
  },
  {
    id: "privacy-rights",
    title: "Your Rights as a User",
    content: (<>
<p>You may:</p>
<ul>
  <li>Request a copy of your data</li>
  <li>Request data deletion</li>
  <li>Opt out of marketing communications</li>
  <li>Update personal information</li>
</ul><p>To make a request or ask about your information, email <a href="mailto:support@agriflock360.com">support@agriflock360.com</a> or use our <Link to="/contact">Contact page</Link>.</p>
    </>),
  },
  {
    id: "privacy-children",
    title: "Children's Privacy",
    content: (<>
<p>
  AgriFlock360 does not knowingly collect data from minors under 18.
</p>
    </>),
  },
  {
    id: "privacy-cookies",
    title: "Cookies and Tracking",
    content: (<>
<p>We use cookies for:</p>
<ul>
  <li>Authentication</li>
  <li>Session tracking</li>
  <li>Improved performance</li>
  <li>Analytics</li>
</ul>
<p>
  You may disable cookies, but some features may not function fully.
</p>
    </>),
  },
  {
    id: "privacy-transfers",
    title: "International Data Transfers",
    content: (<>
<p>Data may be stored in:</p>
<ul>
  <li>Kenya</li>
  <li>Europe</li>
  <li>United States</li>
</ul>
<p>
  All transfers align with GDPR-equivalent protection standards.
</p>
    </>),
  },
  {
    id: "privacy-updates",
    title: "Updates to This Policy",
    content: (<>
<p>
  We may update this Privacy Policy occasionally. Continued use of the platform constitutes acceptance of the updated version.
</p>
    </>),
  },
  {
    id: "privacy-contact",
    title: "Contact Us",
    content: (<>
<p>For questions or concerns:</p>
<p>
  <strong>AgriFlock 360</strong><br />
  Email: <a href="mailto:support@agriflock360.com">support@agriflock360.com</a>
  <br />
  Kenya: <a href="tel:+254729554434">+254 729 554 434</a>
  <br />
  United States: <a href="tel:+16674469432">+1 667 446 9432</a>
  <br />
  Website: <Link to="/">agriflock360.com</Link>
</p>
    </>),
  }
];

const PrivacyPolicy = () => (
  <LegalPage
    kind="privacy"
    title="Privacy Policy"
    description="Understand what information we collect, how we use it and the choices you have across AgriFlock 360."
    updated="11 September 2026"
    effective="Effective immediately"
    highlights={[
    { title: "Information with a purpose", text: "Account, farm and device information helps us provide the services you use." },
    { title: "Choices about your data", text: "Request access, corrections or deletion, and contact our team with questions." },
    { title: "SMS is your choice", text: "Opt in to service messages in the app. Reply STOP to opt out or HELP for assistance." }
    ]}
    sections={sections}
  />
);

export default PrivacyPolicy;
