import { Link } from "react-router-dom";
import { LegalPage, type LegalSection } from "@/components/LegalPage";
import { pricingTerms } from "@/data/pricing";

const sections: LegalSection[] = [
  {
    id: "terms-introduction",
    title: "Introduction",
    content: (<>
<p>
  Welcome to AgriFlock 360, a digital and IoT-enabled poultry management platform designed to help farmers improve productivity through real-time brooder monitoring, production tracking, payment management, and data-driven farm decisions.
</p>
<p>
  By accessing or using our website, mobile app, dashboard, and IoT devices, you agree to be bound by these Terms & Conditions ("Terms"). If you do not agree, you may not use the platform or any associated services.
</p>
<div className="legal-note"><p><strong>Current access:</strong> the mobile app has Farmer and Veterinarian (Extension officer) modules. The web app is still in development. The iPhone and iPad app is available through TestFlight beta; Android access is through Google Play. See <Link to="/download">app download options</Link>.</p></div>
    </>),
  },
  {
    id: "terms-definitions",
    title: "Definitions",
    content: (<>
<ul>
  <li><strong>"Platform/We"</strong> refers to the AgriFlock 360 website, mobile app, admin dashboard, and IoT ecosystem.</li>
  <li><strong>"User", "You"</strong> refers to any farmer, organization, administrator, or agent using the platform.</li>
  <li><strong>"IoT Device"</strong> refers to the Smart Brooder or any hardware connected to the platform.</li>
  <li><strong>"PAYG"</strong> means Pay-As-You-Go financing model.</li>
  <li><strong>"Lease-to-Own"</strong> refers to a structured installment payment system enabling long-term device ownership.</li>
</ul>
    </>),
  },
  {
    id: "terms-eligibility",
    title: "Eligibility",
    content: (<>
<p>To use this Platform, You must:</p>
<ul>
  <li>Be at least 18 years old.</li>
  <li>Have the legal capacity to enter a binding agreement.</li>
  <li>Provide accurate and verifiable account information.</li>
</ul>
<h3>Vets and extension officers</h3>
<p>To apply, choose Veterinarian (Extension officer) in the app, accept the Terms & Conditions and Code of Conduct, and submit your personal and professional details with qualification documents. You must wait for review and approval before providing services.</p>
<p>Officers provide services as independent professionals. They must provide accurate qualifications, act professionally, respect farmers’ property and privacy, and record services accurately in the app.</p>
    </>),
  },
  {
    id: "terms-account",
    title: "User Account Responsibilities",
    content: (<>
<p>By creating an account, you agree to:</p>
<ul>
  <li>Provide accurate registration information.</li>
  <li>Maintain the confidentiality of your login credentials.</li>
  <li>Notify us immediately if your account is compromised.</li>
</ul>
    </>),
  },
  {
    id: "terms-use",
    title: "Use of the Platform",
    content: (<>
<p>You agree to use AgriFlock360 for lawful purposes only and not to:</p>
<ul>
  <li>Upload malicious code, viruses, or harmful content.</li>
  <li>Interfere with IoT device operations.</li>
  <li>Tamper with firmware or hardware components.</li>
  <li>Attempt to bypass PAYG or payment mechanisms.</li>
  <li>Duplicate or resell any part of the platform without written consent.</li>
</ul>
    </>),
  },
  {
    id: "terms-devices",
    title: "IoT Device Usage",
    content: (<>
<p>By activating and using IoT devices (Smart Brooders), you agree that:</p>
<ol>
  <li>The device must remain connected to power and internet for optimal operation.</li>
  <li>Firmware may be automatically updated to improve performance and security.</li>
  <li>Tampering with the device, sensors, wiring, or firmware voids warranties.</li>
  <li>The device must be used according to the installation guide provided.</li>
</ol>
<p>
  <strong>PAYG/Lease-to-Own Users:</strong> IoT devices may remotely lock or disable heating/automation functions if payments become overdue, after reasonable notice.
</p>
    </>),
  },
  {
    id: "terms-payments",
    title: "Payment Terms",
    content: (<>
<h3>Farmer subscriptions</h3>
<p>Farmer plans include a {pricingTerms.trialDays}-day free trial. Monthly charges apply after the trial. The <Link to="/pricing#farmer-plans">Pricing page</Link> lists the Kenya plans, flock-size ranges and included features.</p>
<h3>Veterinary and extension services</h3>
<p>Professional services are charged separately from farmer subscriptions. Services may have a fixed fee, a per-person rate or a per-bird rate. Transport is KES {pricingTerms.transportPerKm} per kilometre for in-person visits only. Remote advisory calls have no transport charge and are paid upfront.</p>
<p>For completed jobs, {pricingTerms.officerShare}% of service revenue goes to the officer and {pricingTerms.platformShare}% to the platform. Service payments use mobile money and are recorded in the app. Confirm the service details, travel distance and total cost when arranging a visit. See <Link to="/pricing#extension-officers">service rates and earnings</Link>.</p>
<h3>Device payment arrangements</h3>
<p>For PAYG/Lease-to-Own smart brooder purchases:</p>
<ol>
  <li>Payments are made through supported mobile-money channels (e.g., M-Pesa, Airtel Money).</li>
  <li>Missed payments may trigger device restrictions or reminders.</li>
  <li>Ownership transfers only upon full settlement of the agreed amount.</li>
</ol>
<p>
  All digital subscriptions, storage fees, or platform charges (if applicable) are non-refundable unless required by law.
</p>
    </>),
  },
  {
    id: "terms-data",
    title: "Data Usage, Ownership & Rights",
    content: (<>
<p>By using the platform, you grant AgriFlock360 the right to:</p>
<ul>
  <li>Collect and store device telemetry data (temperature, humidity, device status).</li>
  <li>Analyze aggregated usage data to improve system performance.</li>
  <li>Use non-personal insights for research, analytics, and service improvements.</li>
</ul>
<p>Your personal data will never be sold to third parties.</p>
<p>You retain ownership of:</p>
<ul>
  <li>Your personal information</li>
  <li>Farm records</li>
  <li>Production data</li>
</ul>
    </>),
  },
  {
    id: "terms-availability",
    title: "Service Availability",
    content: (<>
<p>We strive to ensure 99% uptime but do not guarantee:</p>
<ul>
  <li>Uninterrupted access</li>
  <li>Error-free operation</li>
  <li>Timely notifications under extreme network outages</li>
</ul>
<p>IoT operations may be affected by:</p>
<ul>
  <li>Internet downtimes</li>
  <li>Power outages</li>
  <li>GSM/Wi-Fi failures</li>
  <li>Environmental hazards</li>
</ul>
<p>
  We are not liable for losses related to connectivity interruptions beyond our control.
</p>
<h3>Website knowledge-base guide</h3>
<p>The homepage guide provides answers from public website information. It cannot access your account, check applications or bookings, or assess a bird’s health. Contact our team for account questions and a qualified professional for flock health concerns.</p>
    </>),
  },
  {
    id: "terms-ip",
    title: "Intellectual Property",
    content: (<>
<p>
  All intellectual property—software, hardware designs, firmware, trademarks, brand identity, and documentation—belongs exclusively to AgriFlock 360.
</p>
<p>Users may not:</p>
<ul>
  <li>Reverse-engineer</li>
  <li>Copy</li>
  <li>Modify</li>
  <li>Resell</li>
  <li>Derive competing products</li>
</ul>
<p>without written permission.</p>
    </>),
  },
  {
    id: "terms-liability",
    title: "Limitation of Liability",
    content: (<>
<p>AgriFlock 360 is not liable for:</p>
<ul>
  <li>Loss of livestock caused by environmental factors</li>
  <li>User misuse of brooder hardware</li>
  <li>Incorrect farm operational procedures</li>
  <li>Third-party service outages (e.g., Safaricom, AWS, Vercel, Firebase)</li>
  <li>Loss of data from device tampering or unauthorized modifications</li>
</ul>
<p>
  Our maximum liability is limited to the amount paid by the user for the service within the previous 12 months.
</p>
    </>),
  },
  {
    id: "terms-termination",
    title: "Suspension or Termination",
    content: (<>
<p>We may suspend or terminate your account if:</p>
<ul>
  <li>You violate these Terms</li>
  <li>You tamper with devices</li>
  <li>You engage in fraudulent or harmful behavior</li>
  <li>Payments remain overdue beyond agreed limits</li>
</ul>
    </>),
  },
  {
    id: "terms-updates",
    title: "Updates to Terms",
    content: (<>
<p>
  We may revise these Terms occasionally. Continued use of the Platform constitutes acceptance of updated Terms.
</p>
    </>),
  },
  {
    id: "terms-sms",
    title: "SMS Program Terms",
    content: (<>
<p>
  By opting in to SMS communications from AgriFlock 360, you agree to receive service-related text messages associated with your account, farm activity, devices, payments, subscriptions, and renewals.
</p>
<p>These SMS messages may include:</p>
<ul>
  <li>Temperature, humidity, water level, and device connectivity alerts</li>
  <li>Account notifications, payment reminders, subscription notices, and renewal updates</li>
  <li>Customer care and support follow-up messages related to your use of the platform</li>
</ul>
<p>
  Message frequency varies based on your farm activity, device status, and account status. Message and data rates may apply.
</p>
<p>
  You can opt out of SMS messages at any time by replying <strong>STOP</strong>. For assistance, reply <strong>HELP</strong>.
</p>
<p>
  SMS consent is not a condition of purchase, and consent applies only to AgriFlock 360 service communications requested or authorized by you.
</p>
    </>),
  },
  {
    id: "terms-policies",
    title: "SMS Consent and Policy Links",
    content: (<>
<p>
  Additional information about our SMS program and consent process is available at:
</p>
<ul>
  <li><Link to="/sms-consent">SMS Consent</Link></li>
  <li><Link to="/privacy-policy">Privacy Policy</Link></li>
</ul>
    </>),
  },
  {
    id: "terms-governing-law",
    title: "Governing Law",
    content: (<>
<p>
  These Terms are governed by the Laws of Kenya & the State of Delaware/Colorado, USA. Disputes will be resolved through:
</p>
<ol>
  <li>Negotiation</li>
  <li>Mediation</li>
  <li>Arbitration or Court (State of Delaware or Colorado, USA)</li>
</ol>
    </>),
  }
];

const TermsConditions = () => (
  <LegalPage
    kind="terms"
    title="Terms & Conditions"
    description="The terms for using our platform, managing your account, paying for services and working with AgriFlock 360."
    updated="11 September 2026"
    effective="Effective upon acceptance"
    highlights={[
    { title: "Your account, your responsibilities", text: "Use accurate information, protect your login and use the platform lawfully." },
    { title: "Plans and services are separate", text: "Farmer subscriptions include a free trial. Professional services have their own rates." },
    { title: "Two roles in one app", text: "Farmers manage their flocks. Vets and extension officers apply and wait for approval." }
    ]}
    sections={sections}
  />
);

export default TermsConditions;
