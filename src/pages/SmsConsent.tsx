import { Link } from "react-router-dom";

const SmsConsent = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-4xl px-4 pt-28 pb-12 sm:px-6 sm:pt-32 sm:pb-16 lg:px-8 md:pt-36 md:pb-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">SMS Consent</h1>
        <p className="text-sm sm:text-base text-muted-foreground mb-8">
          Last Updated: March 2026
        </p>

        <div className="space-y-8 sm:space-y-10 text-sm sm:text-base">
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">1. How Users Opt In</h2>
            <p className="text-muted-foreground leading-relaxed">
              Users opt in to receive SMS alerts during account registration in the AgriFlock 360 mobile application.
              During registration, users enter their phone number and explicitly select an unchecked consent checkbox.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Users are required to provide accurate registration information, including a valid mobile number, so we can
              deliver requested service notifications.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">2. Consent Checkbox Text</h2>
            <div className="rounded-lg border border-border bg-muted/30 p-4 sm:p-5">
              <p className="text-muted-foreground leading-relaxed">
                "I agree to receive SMS alerts and account notifications from AgriFlock 360. Message frequency varies.
                Message and data rates may apply. Reply STOP to opt out or HELP for assistance."
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">3. What Messages Are Sent</h2>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-muted-foreground">
              <li>Temperature alerts</li>
              <li>Humidity alerts</li>
              <li>Water level alerts</li>
              <li>Device connectivity alerts</li>
              <li>Account notifications (payments, subscriptions, renewals, and related service updates)</li>
            </ul>
            <p className="text-muted-foreground mt-3">Message frequency varies by farm activity and account status.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">4. STOP / HELP Instructions</h2>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-muted-foreground">
              <li>Reply STOP at any time to unsubscribe from SMS communications.</li>
              <li>Reply HELP for assistance.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">5. Policy Links</h2>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-muted-foreground">
              <li>
                <Link to="/privacy-policy" className="text-primary hover:text-primary/80 transition-colors">
                  Privacy Policy
                </Link>{" "}
                (
                <a
                  href="https://agriflock360.com/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  https://agriflock360.com/privacy-policy
                </a>
                )
              </li>
              <li>
                <Link to="/terms-conditions" className="text-primary hover:text-primary/80 transition-colors">
                  Terms & Conditions
                </Link>{" "}
                (
                <a
                  href="https://agriflock360.com/terms-conditions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  https://agriflock360.com/terms-conditions
                </a>
                )
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">6. Registration Screen Screenshots</h2>
            <p className="text-muted-foreground mb-4">
              The screenshot below shows the registration flow and the SMS consent language presented to users in the AgriFlock 360 app.
            </p>
            <div className="rounded-lg border border-border overflow-hidden bg-card max-w-md">
              <img
                src="/sms%20checkbox.jpeg"
                alt="AgriFlock 360 create account screen showing the SMS alerts and account notifications consent checkbox"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default SmsConsent;
