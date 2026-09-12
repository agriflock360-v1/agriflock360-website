import { LegalPage } from "@/components/LegalPage";
import { termsSections } from "@/data/policies/terms";

const TermsConditions = () => (
  <LegalPage
    kind="terms"
    title="Terms & Conditions"
    description="The terms for using our platform, managing your account, paying for services and working with AgriFlock 360."
    updated="12 September 2026"
    effective="Effective upon acceptance"
    highlights={[
      { title: "Your account, your responsibilities", text: "Use accurate information, protect your login and use the platform lawfully." },
      { title: "Plans and services are separate", text: "Farmer subscriptions include a free trial. Professional services have their own rates." },
      { title: "Two roles in one app", text: "Farmers manage their flocks. Vets and extension officers apply and wait for approval." }
    ]}
    sections={termsSections}
  />
);

export default TermsConditions;
