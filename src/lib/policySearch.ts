// Match common visitor wording to published sections before broad product keywords
// such as "web", "payments" or "sell" can misroute a policy question.
export function findPolicyTopic(text: string): string | undefined {
  const has = (pattern: RegExp) => pattern.test(text);
  const data = has(/\b(data|information|records|privacy)\b/);
  const sms = has(/\b(sms|text messages?|texts|messaging)\b/);

  if (has(/\b(policies|legal documents)\b/) && !data && !sms) return "policies";
  if (has(/\b(governing law|governed|jurisdiction|disputes?|arbitration|mediation|delaware|colorado)\b/)) return "terms-governing-law";
  if (has(/\b(liability|liable|compensation)\b/) || has(/\bresponsible for (loss|losses|livestock)\b/)) return "terms-liability";
  if (has(/\b(refund|refunds|refundable|non refundable|payment terms|billing policy)\b/)) return "terms-payments";
  if (has(/\b(suspend|suspended|suspension|terminate|terminated|termination)\b/)) return "terms-termination";
  if (has(/\b(copyright|intellectual property|trademark|reverse engineer)\b/) || has(/\b(copy|modify|resell)\b.*\b(software|platform|code|brand)\b/)) return "terms-ip";
  if (has(/\b(uptime|uninterrupted|outages?|downtime|availability guarantee)\b/)) return "terms-availability";
  if (has(/\b(warranties|warranty|lock|locked|disable|disabled|overdue|missed payments?)\b/) && has(/\b(device|devices|brooder|iot|heating|payments?)\b/)) return "terms-devices";
  if (has(/\b(payg|lease to own)\b/) && has(/\b(mean|means|meaning|definition|what is)\b/)) return "terms-definitions";
  if (has(/\b(prohibited|acceptable use|unlawful|malicious|bypass)\b/)) return "terms-use";
  if (has(/\b(account responsibilities|login credentials|account compromised|protect my account)\b/)) return "terms-account";
  if (has(/\b(minimum age|age limit|age requirement|old enough|eligibility|eligible|under 18|under eighteen)\b/)) return "terms-eligibility";
  if (has(/\b(children|child|minors)\b/) && data) return "privacy-children";

  if (sms) {
    if (has(/\b(screenshot|screen|image|example)\b/)) return "sms-registration-screen";
    if (has(/\b(wording|checkbox say|checkbox text|exact text|consent text|language)\b/)) return "sms-consent-wording";
    if (has(/\b(marketing|shared|share|sell|selling|rent|third parties)\b/)) return "sms-privacy";
    if (has(/\b(terms|program)\b/)) return "terms-sms";
    if (has(/\b(frequency|often|rates|cost|costs|charged|charges|carrier|what messages|which messages|what sms|receive)\b/)) return "sms-messages";
    if (has(/\b(opt in|sign up|register|registration|consent|checkbox|optional|required|purchase|enrol)\b/) && !has(/\b(stop|opt out|unsubscribe|help)\b/)) return "sms-opt-in";
    // The overview includes STOP/HELP and provides a browsable contents list.
    return "sms";
  }
  if (has(/\b(stop|opt out|unsubscribe)\b.*\b(messages|alerts|texts)\b/)) return "sms";
  if (has(/\b(phone|mobile) number\b/) && has(/\b(marketing|share|shared|sell|rent)\b/)) return "sms-privacy";
  if (has(/\b(cookies?|session tracking)\b/)) return "privacy-cookies";
  if (has(/\b(web3forms|clipboard|copy enquiry|contact form|launch update)\b/) || (has(/\b(chat|chatbot|guide|conversation)\b/) && has(/\b(history|save|saved|store|stored|send|sent|clear|delete|privacy|data)\b/))) return "privacy-website";
  if (data) {
    if (has(/\b(own|owns|ownership|owner)\b/)) return "terms-data";
    if (has(/\b(retention|retain|kept|keep|how long|30 days|thirty days|after deletion|after account deletion)\b/)) return "privacy-retention";
    if (has(/\b(rights|delete|deletion|erase|correct|rectify|export|copy|access|update my)\b/)) return "privacy-rights";
    if (has(/\b(stored|hosted|transfers?|overseas|countries|country|gdpr)\b/)) return "privacy-transfers";
    if (has(/\b(share|sharing|shared|sell|sold|selling|third parties|partners)\b/)) return "privacy-sharing";
    if (has(/\b(collect|collected|collection|gather)\b/)) return "privacy-data";
    if (has(/\b(protect|protection|encryption|encrypted|security|secure)\b/)) return "privacy-security";
    if (has(/\b(use|uses|used|purpose)\b/)) return "privacy-use";
    if (has(/\b(contact|concerns|complaint|question)\b/)) return "privacy-contact";
    if (has(/\b(policy)\b/) && has(/\b(change|changes|update|updated|revise)\b/)) return "privacy-updates";
  }
  if (has(/\b(terms|conditions)\b/)) {
    if (has(/\b(change|changes|update|updated|revise)\b/)) return "terms-updates";
    if (has(/\b(apply|applies|cover|scope)\b/)) return "terms-introduction";
    return "terms";
  }
  if (has(/^(privacy|privacy policy|data privacy|data protection)$/)) return "privacy";
  return undefined;
}
