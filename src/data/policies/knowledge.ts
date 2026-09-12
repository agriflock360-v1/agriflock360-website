import { Children, isValidElement, type ReactNode } from "react";
import type { KnowledgeArticle } from "../knowledgeBase";
import { privacySections } from "./privacy";
import { termsSections } from "./terms";
import { smsSections } from "./sms";

export const policyDocuments = [
  { id: "privacy", title: "Privacy Policy", path: "/privacy-policy", sections: privacySections },
  { id: "terms", title: "Terms & Conditions", path: "/terms-conditions", sections: termsSections },
  { id: "sms", title: "SMS Consent", path: "/sms-consent", sections: smsSections },
];

// Only public, static policy content is read here. No HTML injection, crawling or API calls.
// Reading the same sections as the pages prevents a separate copy of policy wording drifting.
function policyText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(policyText).join("");
  if (!isValidElement<{ children?: ReactNode; className?: string }>(node)) return "";
  if (node.props.className === "sr-only") return "";
  if (node.type === "br") return "\n";
  const text = Children.toArray(node.props.children).map(policyText).join("");
  if (node.type === "li") return `• ${text.trim()}\n`;
  if (typeof node.type === "string" && ["p", "h3", "ul", "ol", "div", "blockquote", "figcaption", "figure"].includes(node.type)) return "\n\n" + text.trim() + "\n\n";
  return text;
}

const topics: Record<string, { question: string; keywords: string[] }> = {
  "privacy-introduction": { question: "What does the Privacy Policy cover?", keywords: ["privacy policy scope covers website mobile iot services"] },
  "privacy-data": { question: "What information do you collect?", keywords: ["collect collected collection personal data information phone email location gps telemetry payments qualifications documents analytics"] },
  "privacy-website": { question: "Do you save chatbot messages or contact form details?", keywords: ["chat chatbot guide conversation history stored saved browser storage contact form web3forms enquiry clipboard copy launch updates"] },
  "privacy-use": { question: "How do you use my information?", keywords: ["purpose use uses information data analytics fraud reporting support alerts"] },
  "privacy-sms": { question: "How is my phone number used for SMS?", keywords: ["privacy sms mobile number phone consent marketing protect sharing"] },
  "privacy-sharing": { question: "Who can you share my data with?", keywords: ["share sharing sell sold rent third parties partners hosting cloud providers processors web3forms marketers advertisers"] },
  "privacy-retention": { question: "How long do you keep my data?", keywords: ["retention retain keep kept long duration deletion thirty 30 days active account registered"] },
  "privacy-security": { question: "How do you protect my data?", keywords: ["security secure protect protection tls encryption encrypted jwt signed firmware credentials audits"] },
  "privacy-rights": { question: "Can I access, correct or delete my data?", keywords: ["rights access request copy export update correct rectification delete deletion erase personal data information"] },
  "privacy-children": { question: "Do you collect information from children?", keywords: ["children child minors under eighteen 18 privacy information"] },
  "privacy-cookies": { question: "Does AgriFlock 360 use cookies?", keywords: ["cookies cookie tracking session analytics disable browser authentication"] },
  "privacy-transfers": { question: "Where is my data stored?", keywords: ["international transfers transfer stored storage hosted overseas country countries kenya europe united states gdpr"] },
  "privacy-updates": { question: "Can the Privacy Policy change?", keywords: ["privacy policy update changes revised continued acceptance"] },
  "privacy-contact": { question: "Who can I contact about privacy?", keywords: ["privacy contact concerns support email number kenya united states"] },
  "terms-introduction": { question: "What do the Terms & Conditions apply to?", keywords: ["terms conditions agreement acceptance platform applies website mobile dashboard devices access"] },
  "terms-definitions": { question: "What do Platform, PAYG and Lease-to-Own mean?", keywords: ["definitions meaning payg pay as you go lease own platform user iot device hardware"] },
  "terms-eligibility": { question: "What are the age and eligibility requirements?", keywords: ["eligibility eligible minimum age eighteen 18 capacity qualifications officer professional approval conduct"] },
  "terms-account": { question: "What are my account responsibilities?", keywords: ["account responsibilities credentials confidential compromised protect login accurate registration notify"] },
  "terms-use": { question: "What use of the platform is prohibited?", keywords: ["acceptable use prohibited lawful unlawful rules tamper viruses malicious bypass resale consent"] },
  "terms-devices": { question: "What are the rules for IoT devices and overdue payments?", keywords: ["device iot brooder rules warranty warranties tamper firmware power internet missed overdue payment lock disable notice installation"] },
  "terms-payments": { question: "What are the payment and refund terms?", keywords: ["payments terms refund refundable refunds billing charges trial subscription service mobile money payg installments ownership transport fees"] },
  "terms-data": { question: "Who owns my farm records and production data?", keywords: ["data ownership owns owner retain personal farm records production telemetry rights insights research"] },
  "terms-availability": { question: "Is uninterrupted access or uptime guaranteed?", keywords: ["availability uptime guarantee guaranteed uninterrupted outage downtime connectivity failure errors power network 99 percent"] },
  "terms-ip": { question: "Who owns the software and can I copy or resell it?", keywords: ["intellectual property copyright trademark software hardware designs firmware brand reverse engineer copy modify resell permission"] },
  "terms-liability": { question: "What do the Terms say about liability and losses?", keywords: ["liability liable losses loss livestock compensation responsible maximum twelve 12 months"] },
  "terms-termination": { question: "When can an account be suspended or terminated?", keywords: ["suspend suspended suspension termination terminated fraud overdue tamper violations"] },
  "terms-updates": { question: "Can the Terms & Conditions change?", keywords: ["terms conditions updated update change changes revise acceptance continued"] },
  "terms-sms": { question: "What are the SMS Program Terms?", keywords: ["sms program terms conditions stop help consent purchase messages frequency rates"] },
  "terms-policies": { question: "Which other policies are linked from the Terms?", keywords: ["terms sms privacy policies linked documents additional program consent"] },
  "terms-governing-law": { question: "Which law governs the Terms and how are disputes resolved?", keywords: ["governing law governed jurisdiction legal disputes dispute negotiation mediation arbitration court kenya delaware colorado usa"] },
  "sms-opt-in": { question: "How do I give SMS consent in the app?", keywords: ["sms consent opt in checkbox unchecked separate voluntary optional required purchase registration app website enrol"] },
  "sms-consent-wording": { question: "What does the SMS consent checkbox say?", keywords: ["sms consent wording text checkbox language quote exact says"] },
  "sms-messages": { question: "What SMS messages will I receive and will they cost me?", keywords: ["sms messages texts sent receive frequency often rates cost charge carrier mobile provider temperature humidity water renewal alerts"] },
  "sms-stop-help": { question: "How do I unsubscribe from SMS or get messaging help?", keywords: ["sms stop help opt out unsubscribe unenrol messages text support contact reenrol"] },
  "sms-privacy": { question: "Is my mobile number shared for marketing?", keywords: ["mobile phone number sms consent marketing promotional share sell rent privacy"] },
  "sms-registration-screen": { question: "Where can I see the SMS registration screenshot?", keywords: ["sms screenshot screen registration example image checkbox consent app"] },
};

export const policyKnowledgeArticles: KnowledgeArticle[] = policyDocuments.flatMap(document =>
  document.sections.map(section => {
    const topic = topics[section.id];
    if (!topic) throw new Error(`Add a knowledge-base question for policy section: ${section.id}`);
    return {
      id: section.id,
      question: topic.question,
      title: `${document.title}: ${section.title}`,
      answer: policyText(section.content).trim().split(/\n\s*\n/).filter(Boolean),
      keywords: topic.keywords,
      sources: [{ label: `${document.title} — ${section.title}`, to: `${document.path}#${section.id}` }],
      related: [document.id, "support"],
      policy: true,
    };
  })
);
