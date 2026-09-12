import { LegalPage } from "@/components/LegalPage";
import { privacySections } from "@/data/policies/privacy";

const PrivacyPolicy = () => (
  <LegalPage
    kind="privacy"
    title="Privacy Policy"
    description="Understand what information we collect, how we use it and the choices you have across AgriFlock 360."
    updated="12 September 2026"
    effective="Effective immediately"
    highlights={[
      { title: "Information with a purpose", text: "Account, farm and device information helps us provide the services you use." },
      { title: "Choices about your data", text: "Request access, corrections or deletion, and contact our team with questions." },
      { title: "SMS is your choice", text: "Opt in to service messages in the app. Reply STOP to opt out or HELP for assistance." }
    ]}
    sections={privacySections}
  />
);

export default PrivacyPolicy;
