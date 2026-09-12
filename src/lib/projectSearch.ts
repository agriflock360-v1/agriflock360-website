// Document-specific questions must not be swallowed by broad SMS, free-trial,
// finance or web-app rules. Answers remain curated, with no private document data.
export function findProjectTopic(text: string): string | undefined {
  const has = (pattern: RegExp) => pattern.test(text);
  if (has(/\b(whatsapp|whats app)\b/)) return "whatsapp-status";
  if (has(/\b(survey|surveys|satisfaction|questionnaire)\b/)) {
    if (has(/\b(sms|text|replies|reply|free|charge|charged|cost|fee)\b/)) return "survey-sms";
    return "farmer-feedback";
  }
  if (has(/\b(offline|without internet|no internet|no signal|poor connectivity|lost connection)\b/)) {
    if (has(/\b(web app|browser app)\b/)) return "web";
    if (has(/\b(reports?|dashboard|booking|book|search|browse|browsing|payment|payments|billing|subscription|inventory|telemetry|expense list)\b/)) return "offline-online";
    if (has(/\b(sync|synced|synchronise|synchronize|reconnect|queued|when online|connection returns)\b/)) return "offline-sync";
    return "offline-records";
  }
  if (has(/\b(sync|synced|synchronise|synchronize|reconnect)\b/) && has(/\b(records?|forms?|data|connection)\b/)) return "offline-sync";
  if (has(/\b(backup|backups|disaster recovery|service recovery|data loss|recover records)\b/)) return "service-continuity";
  if (has(/\b(carbon|co2|co2e|emissions|offsets?)\b/)) return "carbon-readiness";
  if (has(/\b(five million|5 million|5000000|farmers reached|farmers deployed|actual impact|impact scenario)\b/)) return "impact-scale";
  if (has(/\b(charcoal|woodland|forest|forests|deforestation|trees saved|save trees)\b/)) return "charcoal-impact";
  if (has(/\b(regenerative|compost|composting|agroforestry)\b/)) return "regenerative-practices";
  if (has(/\b(target market|market focus|expansion|east africa|international markets)\b/)) return "project-market";
  if (has(/\b(mvp|concept note|product approach|predictive|optimisation|optimization)\b/)) return "product-approach";
  if (has(/\b(solar|brooder|brooders)\b/) && has(/\b(design|designed|concept|capacity|hardware|solar|heating|specification|specifications)\b/)) return "solar-brooder";
  if (has(/\b(feedback|satisfaction surveys)\b/) && !has(/\b(contact form|website guide|chatbot)\b/)) return "farmer-feedback";
  if (has(/\b(project documents|project reports|project guide|project impact|knowledge base|impact report)\b/)) return "project-documents";
  return undefined;
}
