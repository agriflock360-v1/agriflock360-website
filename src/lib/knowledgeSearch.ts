import { knowledgeArticles, type KnowledgeArticle } from "../data/knowledgeBase";

export interface KnowledgeReply {
  message?: string;
  article?: KnowledgeArticle;
  suggestions: string[];
}

const aliases: Record<string, string> = {
  costs: "price", cost: "price", pricing: "price", prices: "price", fees: "price", fee: "price", rates: "price", much: "price", charge: "price", charges: "price",
  plans: "plan", subscriptions: "plan", subscription: "plan", monthly: "month",
  vets: "vet", veterinary: "vet", veterinarian: "vet", veterinarians: "vet", officers: "officer",
  vaccines: "vaccination", vaccine: "vaccination", vaccinations: "vaccination", vaccinate: "vaccination", jabs: "vaccination",
  feeding: "feed", feeds: "feed", farmers: "farmer", chickens: "bird", chicken: "bird", birds: "bird", chicks: "bird",
  signup: "register", registration: "register", joining: "join", downloading: "download", installation: "install",
  reports: "report", records: "record", houses: "house", batches: "batch", farms: "farm", quotations: "quotation", estimates: "estimate",
  features: "feature", services: "service", eggs: "egg", reminders: "reminder", notifications: "notification",
  founded: "founder", founders: "founder", breeds: "breed",
};
const stopWords = new Set("a an the and or for to of in on at by with as is are was be do does did can could should would will i me my we our you your it its this that these those how what when where which please tell about want need know get some any have has use using all also there than from help work works does supported through app".split(" "));
const normalize = (text: string) => text.toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, " ").trim();
const tokens = (text: string) => [...new Set(normalize(text).split(" ").filter(word => word && !stopWords.has(word)).map(word => aliases[word] || word))];
const index = knowledgeArticles.map(article => ({ article, words: new Set(tokens([article.title, article.question, ...article.keywords].join(" "))) }));
const getArticle = (id: string) => knowledgeArticles.find(article => article.id === id)!;
const answer = (id: string, suggestions: string[] = []): KnowledgeReply => ({ article: getArticle(id), suggestions });

export function searchKnowledge(question: string): KnowledgeReply {
  const text = normalize(question.slice(0, 400));
  const words = tokens(text);
  const has = (...terms: string[]) => terms.some(term => words.includes(term));
  const exact = knowledgeArticles.find(article => normalize(article.question) === text);
  if (exact) return { article: exact, suggestions: [] };

  if (/^(hi|hello|hey|good morning|good afternoon|good evening|thanks|thank you)$/.test(text)) {
    return { message: "Hello! I can help you explore AgriFlock 360 using answers from our website. Choose a topic or ask a specific question below.", suggestions: ["company", "plans", "download"] };
  }
  if (/\b(sick|dying|bleeding|diarrhea|diarrhoea|treat|treatment|diagnose|dosage|dose|antibiotic|emergency)\b/.test(text)) {
    return { message: "This guide covers AgriFlock's tools and services; it cannot assess a bird's health or recommend treatment. Contact a qualified vet or extension officer about your flock. You can find officers and start a booking in the app.", suggestions: ["veterinary-support", "service-rates", "support"] };
  }
  if (/\b(my|our)\b.*\b(application|approval|booking|order|payment|refund|account)\b/.test(text) && /\b(status|check|pending|approved|received|where|when|track|failed)\b/.test(text)) {
    return { message: "I cannot access accounts, bookings, payments or approval records. Please contact the AgriFlock team for help with your specific request.", suggestions: ["support", "vet-signup"] };
  }
  if (has("transport", "travel", "kilometre", "kilometer", "km", "mileage")) return answer("transport", ["service-rates"]);
  if (has("trial", "free")) return answer("trial", ["plans"]);
  if (has("earn", "earnings", "commission", "revenue", "payout", "salary")) return answer("earnings", ["service-rates", "vet-signup"]);
  if (has("price") && has("vet", "service", "vaccination", "call", "training", "visit", "investigation", "assessment")) return answer("service-rates", ["transport", "plans"]);
  if (has("plan", "bronze", "silver", "gold", "platinum") || (has("price") && words.every(word => ["price", "app", "farmer", "month", "kenya", "bird", "agriflock", "360"].includes(word)))) return answer("plans", ["trial", "service-rates"]);
  if (has("vet", "officer") && has("register", "join", "become", "apply", "qualification", "qualifications", "approval", "documents", "onboarding")) return answer("vet-signup", ["earnings", "download"]);
  if (has("device", "devices", "brooder") && has("add", "link", "scan", "pair", "connect", "register")) return answer("devices");
  if (has("web", "browser", "desktop", "laptop", "computer")) return answer("web", ["download"]);
  if (has("download", "install", "android", "ios", "iphone", "ipad", "testflight", "qr")) return answer("download", ["farmer-signup", "vet-signup"]);
  if (/\b(sign up|signup|create an account|register|registration)\b/.test(text) && !has("vet", "officer")) return answer("farmer-signup", ["vet-signup"]);
  if (has("sell", "buyer", "buyers", "marketplace", "blockchain", "traceability", "insurance", "financing")) return answer("roadmap", ["plans", "support"]);
  if (/^(vet|vets|veterinarian|veterinary|extension officer|extension officers)$/.test(text)) {
    return { message: "Are you looking for professional support, service prices, or information about joining as an officer?", suggestions: ["veterinary-support", "service-rates", "vet-signup"] };
  }

  const ranked = index.map(({ article, words: articleWords }) => {
    const matches = words.filter(word => articleWords.has(word));
    const coverage = words.length ? matches.length / words.length : 0;
    const score = matches.reduce((total, word) => total + Math.log(1 + index.length / index.filter(entry => entry.words.has(word)).length), 0);
    return { article, coverage, score, matches: matches.length };
  }).filter(result => result.coverage >= 0.6 && result.matches > 0).sort((a, b) => b.score - a.score || b.coverage - a.coverage);

  const best = ranked[0];
  if (best && best.score >= 1.5) {
    const alternatives = ranked.slice(1, 3).map(result => result.article.id);
    if (ranked[1] && best.score - ranked[1].score < 0.4) {
      return { message: "I found a few relevant topics. Which one would you like to explore?", suggestions: [best.article.id, ...alternatives] };
    }
    return { article: best.article, suggestions: alternatives };
  }
  return { message: "I don't have a published answer to that question in this website's knowledge base. Try a specific topic below, or contact our team for help.", suggestions: ["features", "plans", "support"] };
}
