import { LegalPage } from "@/components/LegalPage";
import { smsSections } from "@/data/policies/sms";

export default function SmsConsent() {
  return (
    <LegalPage
      kind="sms"
      title="SMS Consent"
      description="Choose the updates you receive. Understand how to opt in, what to expect and how to stop messages or get help."
      updated="12 September 2026"
      highlights={[
        { title: "An explicit choice", text: "SMS consent is a separate, initially unchecked option during registration in the app." },
        { title: "Know what to expect", text: "Service alerts and account updates vary in frequency. Message and data rates may apply." },
        { title: "Stay in control", text: "Reply STOP to unsubscribe or HELP for assistance. SMS consent is not a condition of purchase." },
      ]}
      sections={smsSections}
    />
  );
}
