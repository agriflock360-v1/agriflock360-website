const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Terms & Conditions</h1>
        <p className="text-sm sm:text-base text-muted-foreground mb-8">
          Last Updated: March 2026 | Effective Date: Immediately upon acceptance
        </p>

        <div className="space-y-8 sm:space-y-10 text-sm sm:text-base">
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Welcome to AgriFlock 360, a digital and IoT-enabled poultry management platform designed to help farmers improve productivity through real-time brooder monitoring, production tracking, payment management, and data-driven farm decisions.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              By accessing or using our website, mobile app, dashboard, and IoT devices, you agree to be bound by these Terms & Conditions ("Terms"). If you do not agree, you may not use the platform or any associated services.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">2. Definitions</h2>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-muted-foreground">
              <li><strong>"Platform/We"</strong> refers to the AgriFlock 360 website, mobile app, admin dashboard, and IoT ecosystem.</li>
              <li><strong>"User", "You"</strong> refers to any farmer, organization, administrator, or agent using the platform.</li>
              <li><strong>"IoT Device"</strong> refers to the Smart Brooder or any hardware connected to the platform.</li>
              <li><strong>"PAYG"</strong> means Pay-As-You-Go financing model.</li>
              <li><strong>"Lease-to-Own"</strong> refers to a structured installment payment system enabling long-term device ownership.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">3. Eligibility</h2>
            <p className="text-muted-foreground mb-2">To use this Platform, You must:</p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-muted-foreground">
              <li>Be at least 18 years old.</li>
              <li>Have the legal capacity to enter a binding agreement.</li>
              <li>Provide accurate and verifiable account information.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">4. User Account Responsibilities</h2>
            <p className="text-muted-foreground mb-2">By creating an account, you agree to:</p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-muted-foreground">
              <li>Provide accurate registration information.</li>
              <li>Maintain the confidentiality of your login credentials.</li>
              <li>Notify us immediately if your account is compromised.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">5. Use of the Platform</h2>
            <p className="text-muted-foreground mb-2">You agree to use AgriFlock360 for lawful purposes only and not to:</p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-muted-foreground">
              <li>Upload malicious code, viruses, or harmful content.</li>
              <li>Interfere with IoT device operations.</li>
              <li>Tamper with firmware or hardware components.</li>
              <li>Attempt to bypass PAYG or payment mechanisms.</li>
              <li>Duplicate or resell any part of the platform without written consent.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">6. IoT Device Usage</h2>
            <p className="text-muted-foreground mb-2">By activating and using IoT devices (Smart Brooders), you agree that:</p>
            <ol className="list-decimal pl-5 sm:pl-6 space-y-1 text-muted-foreground">
              <li>The device must remain connected to power and internet for optimal operation.</li>
              <li>Firmware may be automatically updated to improve performance and security.</li>
              <li>Tampering with the device, sensors, wiring, or firmware voids warranties.</li>
              <li>The device must be used according to the installation guide provided.</li>
            </ol>
            <p className="text-muted-foreground mt-3">
              <strong>PAYG/Lease-to-Own Users:</strong> IoT devices may remotely lock or disable heating/automation functions if payments become overdue, after reasonable notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">7. Payment Terms</h2>
            <p className="text-muted-foreground mb-2">For PAYG/Lease-to-Own smart brooder purchases:</p>
            <ol className="list-decimal pl-5 sm:pl-6 space-y-1 text-muted-foreground">
              <li>Payments are made through supported mobile-money channels (e.g., M-Pesa, Airtel Money).</li>
              <li>Missed payments may trigger device restrictions or reminders.</li>
              <li>Ownership transfers only upon full settlement of the agreed amount.</li>
            </ol>
            <p className="text-muted-foreground mt-3">
              All digital subscriptions, storage fees, or platform charges (if applicable) are non-refundable unless required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">8. Data Usage, Ownership & Rights</h2>
            <p className="text-muted-foreground mb-2">By using the platform, you grant AgriFlock360 the right to:</p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-muted-foreground">
              <li>Collect and store device telemetry data (temperature, humidity, device status).</li>
              <li>Analyze aggregated usage data to improve system performance.</li>
              <li>Use non-personal insights for research, analytics, and service improvements.</li>
            </ul>
            <p className="text-muted-foreground mt-3 font-semibold">Your personal data will never be sold to third parties.</p>
            <p className="text-muted-foreground mt-3 mb-2">You retain ownership of:</p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-muted-foreground">
              <li>Your personal information</li>
              <li>Farm records</li>
              <li>Production data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">9. Service Availability</h2>
            <p className="text-muted-foreground mb-2">We strive to ensure 99% uptime but do not guarantee:</p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-muted-foreground">
              <li>Uninterrupted access</li>
              <li>Error-free operation</li>
              <li>Timely notifications under extreme network outages</li>
            </ul>
            <p className="text-muted-foreground mt-3 mb-2">IoT operations may be affected by:</p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-muted-foreground">
              <li>Internet downtimes</li>
              <li>Power outages</li>
              <li>GSM/Wi-Fi failures</li>
              <li>Environmental hazards</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              We are not liable for losses related to connectivity interruptions beyond our control.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">10. Intellectual Property</h2>
            <p className="text-muted-foreground mb-3">
              All intellectual property—software, hardware designs, firmware, trademarks, brand identity, and documentation—belongs exclusively to AgriFlock 360.
            </p>
            <p className="text-muted-foreground mb-2">Users may not:</p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-muted-foreground">
              <li>Reverse-engineer</li>
              <li>Copy</li>
              <li>Modify</li>
              <li>Resell</li>
              <li>Derive competing products</li>
            </ul>
            <p className="text-muted-foreground mt-2">without written permission.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">11. Limitation of Liability</h2>
            <p className="text-muted-foreground mb-2">AgriFlock 360 is not liable for:</p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-muted-foreground">
              <li>Loss of livestock caused by environmental factors</li>
              <li>User misuse of brooder hardware</li>
              <li>Incorrect farm operational procedures</li>
              <li>Third-party service outages (e.g., Safaricom, AWS, Vercel, Firebase)</li>
              <li>Loss of data from device tampering or unauthorized modifications</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              Our maximum liability is limited to the amount paid by the user for the service within the previous 12 months.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">12. Suspension or Termination</h2>
            <p className="text-muted-foreground mb-2">We may suspend or terminate your account if:</p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-muted-foreground">
              <li>You violate these Terms</li>
              <li>You tamper with devices</li>
              <li>You engage in fraudulent or harmful behavior</li>
              <li>Payments remain overdue beyond agreed limits</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">13. Updates to Terms</h2>
            <p className="text-muted-foreground">
              We may revise these Terms occasionally. Continued use of the Platform constitutes acceptance of updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">14. SMS Program Terms</h2>
            <p className="text-muted-foreground mb-3">
              By opting in to SMS communications from AgriFlock 360, you agree to receive service-related text messages associated with your account, farm activity, devices, payments, subscriptions, and renewals.
            </p>
            <p className="text-muted-foreground mb-2">These SMS messages may include:</p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-muted-foreground">
              <li>Temperature, humidity, water level, and device connectivity alerts</li>
              <li>Account notifications, payment reminders, subscription notices, and renewal updates</li>
              <li>Customer care and support follow-up messages related to your use of the platform</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              Message frequency varies based on your farm activity, device status, and account status. Message and data rates may apply.
            </p>
            <p className="text-muted-foreground mt-3">
              You can opt out of SMS messages at any time by replying <strong>STOP</strong>. For assistance, reply <strong>HELP</strong>.
            </p>
            <p className="text-muted-foreground mt-3">
              SMS consent is not a condition of purchase, and consent applies only to AgriFlock 360 service communications requested or authorized by you.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">15. SMS Consent and Policy Links</h2>
            <p className="text-muted-foreground mb-2">
              Additional information about our SMS program and consent process is available at:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-muted-foreground">
              <li>SMS Consent: https://agriflock360.com/sms-consent</li>
              <li>Privacy Policy: https://agriflock360.com/privacy-policy</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">16. Governing Law</h2>
            <p className="text-muted-foreground mb-2">
              These Terms are governed by the Laws of Kenya & the State of Delaware/Colorado, USA. Disputes will be resolved through:
            </p>
            <ol className="list-decimal pl-5 sm:pl-6 space-y-1 text-muted-foreground">
              <li>Negotiation</li>
              <li>Mediation</li>
              <li>Arbitration or Court (State of Delaware or Colorado, USA)</li>
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
