import type { KnowledgeArticle } from "./knowledgeBase";

export const projectSources = {
  feedback: { title: "Feedback Collection System — Implementation Status Report", date: "13 August 2026" },
  deck: { title: "AgriFlock 360 slide deck", date: "June 2025 cover date" },
  impact: { title: "Solar Smart Brooder Impact Report", date: "Undated modelling report" },
  concept: { title: "MVP Technical Concept Note", date: "Design concept" },
  continuity: { title: "Backup & Recovery Runbook", date: "9 June 2026" },
} as const;

type SourceId = keyof typeof projectSources;
export interface ProjectTopic extends KnowledgeArticle {
  status: "Reported implementation" | "Design direction" | "Modelled potential" | "Documented approach";
  documentRefs: { id: SourceId; section: string }[];
}

// Curated public summaries only. Original documents, internal infrastructure and
// commercial planning details are deliberately not bundled with the website.
const topic = (entry: Omit<ProjectTopic, "sources">): ProjectTopic => ({
  ...entry,
  sources: [{ label: `Project guide: ${entry.title}`, to: `/knowledge-base#${entry.id}` }],
});

export const projectKnowledgeArticles: ProjectTopic[] = [
  topic({
    id: "offline-records", question: "Can I use AgriFlock 360 without internet?", title: "Keep recording when connectivity drops",
    status: "Reported implementation",
    answer: ["The 13 August 2026 implementation report confirms offline capture for daily feed, vaccination, medication, mortality, weight and product records; expense recording; adding or editing batches; adding, editing or deleting houses; adding or editing farms; and feedback or satisfaction surveys.", "Supported entries are saved on the device and synchronised with the server when connectivity returns. Offline support covers these specific recording tasks; it does not make every app feature available without internet."],
    keywords: ["offline internet connectivity signal network rural coop logging recording forms without connection no signal"],
    related: ["offline-online", "offline-sync", "farmer-feedback"],
    documentRefs: [{ id: "feedback", section: "Sections 3 and 3.1: implemented offline features" }],
  }),
  topic({
    id: "offline-online", question: "Which features still need an internet connection?", title: "What still needs a connection",
    status: "Reported implementation",
    answer: ["The implementation report lists dashboards, reports, vet browsing and search, vet bookings and orders, payments, subscription and billing status, and live device or PAYG readings as server-dependent. Cached information, where available, is not a live update.", "Recording an expense can work offline, but the expenditure list still depends on server data. Batch details and completed batches are limited to cached reads. Adding inventory was a possible future extension, not an implemented offline feature in the report."],
    keywords: ["online offline limits exclusions dashboard reports vet booking payments subscription billing telemetry inventory expense list cached reads"],
    related: ["offline-records", "offline-sync", "web"],
    documentRefs: [{ id: "feedback", section: "Sections 3.1 and 3.2: offline boundaries and exclusions" }],
  }),
  topic({
    id: "offline-sync", question: "What happens to records entered while offline?", title: "From device storage to synchronised records",
    status: "Reported implementation",
    answer: ["For supported offline forms, information is captured locally on the device and queued for submission when the connection returns. This lets farmers continue daily recording in areas with unreliable connectivity.", "Reconnect to synchronise those entries. The report does not specify a maximum offline duration or a guaranteed synchronisation time. This website guide cannot inspect your device or check whether your individual records have synced; contact the team if you need help."],
    keywords: ["offline sync synchronise synchronize synced reconnect queued local storage records pending upload connection returns"],
    related: ["offline-records", "offline-online", "support"],
    documentRefs: [{ id: "feedback", section: "Section 3: local capture and sync on reconnect" }],
  }),
  topic({
    id: "farmer-feedback", question: "How can farmers submit feedback or satisfaction surveys?", title: "Feedback that reaches the team",
    status: "Reported implementation",
    answer: ["The August 2026 implementation report marks feedback submissions and satisfaction surveys as implemented. Farmers can use the feedback screen and satisfaction survey prompts in the app.", "These feedback forms support offline capture: responses are queued locally and submitted when connectivity returns. For a direct support enquiry, use the website Contact page. Answering this website guide is not a feedback submission to the team."],
    keywords: ["feedback survey surveys satisfaction responses opinion suggestions farmers experience questionnaire"],
    related: ["survey-sms", "offline-sync", "support"],
    documentRefs: [{ id: "feedback", section: "Sections 1–3: feedback submissions and satisfaction surveys" }],
  }),
  topic({
    id: "survey-sms", question: "Are replies to satisfaction survey SMS free?", title: "SMS survey replies",
    status: "Reported implementation",
    answer: ["The 13 August 2026 implementation report states that inbound replies to the satisfaction-survey SMS service are free to users, with the survey service fee paid by AgriFlock 360.", "This statement concerns that survey service, not all SMS or mobile data use. Our SMS Consent page explains the general message-rate notice, opt-in choice and STOP / HELP instructions. Contact the team about a specific survey or charge."],
    keywords: ["survey sms replies free reply surveys satisfaction cost charge charged fee text questionnaire"],
    related: ["farmer-feedback", "sms", "support"],
    documentRefs: [{ id: "feedback", section: "Section 6: survey SMS billing and inbound replies" }],
  }),
  topic({
    id: "whatsapp-status", question: "Is WhatsApp messaging available?", title: "WhatsApp availability",
    status: "Reported implementation",
    answer: ["WhatsApp messaging was still pending in the 13 August 2026 implementation report. The documents reviewed do not confirm a subsequent launch, so this guide does not list WhatsApp as an available messaging channel.", "Use the app's supported feedback options or the Contact page to reach the team. SMS communications are subject to the consent choices described on the SMS Consent page."],
    keywords: ["whatsapp whats app channel messaging available live launched pending alerts notifications"],
    related: ["farmer-feedback", "sms", "support"],
    documentRefs: [{ id: "feedback", section: "Section 5: WhatsApp module status" }],
  }),
  topic({
    id: "solar-brooder", question: "What is the Smart Solar Brooder designed to do?", title: "Solar-powered brooding and farm records",
    status: "Design direction",
    answer: ["The Smart Solar Brooder concept combines solar-powered brooding with connected environmental monitoring. It is designed to reduce dependence on charcoal heating and bring brooder information together with feeding, flock-health and production records.", "Temperature and humidity monitoring, device alerts and links to farm records are part of the concept. The design documents are not a current sales specification: confirm available hardware, capacity, installation requirements and pricing with the AgriFlock 360 team."],
    keywords: ["solar smart brooder brooders heating charcoal clean energy sensors temperature humidity monitoring hardware capacity specification"],
    related: ["product-approach", "charcoal-impact", "support"],
    documentRefs: [{ id: "concept", section: "Overview and section 2C: Solar Smart Brooder integration" }, { id: "impact", section: "Impact overview" }],
  }),
  topic({
    id: "product-approach", question: "How do health tracking, feeding and connected brooders fit together?", title: "Three connected areas of farm management",
    status: "Design direction",
    answer: ["The MVP concept brings together vaccination and health tracking, feeding and performance records, and connected solar brooders. The aim is to help farmers consider flock care, feed use, growth and brooder conditions together when reviewing their farm.", "Predictive disease alerts, AI feed optimisation, carbon tracking and additional feed-sensor integrations are described as later phases. They should not be read as confirmed live features. The app currently has the two signup roles you can see on our Download page: Farmer and Veterinarian (Extension officer); the web app remains in development."],
    keywords: ["mvp concept product approach health feeding brooder connected integration ai predictive optimization three areas architecture future phases"],
    related: ["features", "roles", "roadmap"],
    documentRefs: [{ id: "concept", section: "Sections 1–4: architecture, core capabilities and later phases" }, { id: "deck", section: "Slides 4 and 10–12: product direction" }],
  }),
  topic({
    id: "regenerative-practices", question: "What does regenerative poultry farming mean for AgriFlock 360?", title: "Farming, clean energy and healthier ecosystems",
    status: "Design direction",
    answer: ["The project connects better poultry management with clean-energy brooding and regenerative practices. The slide deck describes solar brooders, composting and agroforestry as part of this direction, alongside digital farm records and guidance.", "The aim is to reduce dependence on charcoal, make better use of farm resources and support farmer livelihoods. These are project goals; the documents do not establish a guaranteed result for an individual farm."],
    keywords: ["regenerative regeneration sustainability sustainable compost composting agroforestry trees ecosystem environment clean energy livelihoods"],
    related: ["solar-brooder", "charcoal-impact", "project-market"],
    documentRefs: [{ id: "deck", section: "Slides 4 and 10: regenerative tools and intended outcomes" }, { id: "impact", section: "Narrative summary" }],
  }),
  topic({
    id: "charcoal-impact", question: "How could solar brooders reduce charcoal use and pressure on forests?", title: "The report's charcoal and forest model",
    status: "Modelled potential",
    answer: ["The Solar Smart Brooder Impact Report models replacing about 300 kg of charcoal per farmer each year. On its stated assumptions, it estimates roughly 3.3–6.7 trees and 0.042–0.060 hectares of woodland preserved per farmer annually.", "These are modelled estimates, not measured outcomes promised for every brooder. Actual savings depend on the farm's previous heating fuel use, adoption and operating conditions. The report describes before-and-after charcoal weighing as part of verifying the baseline."],
    keywords: ["charcoal forest forests woodland trees saved deforestation fuel 300 kg annual avoided wood environmental impact"],
    related: ["impact-scale", "carbon-readiness", "solar-brooder"],
    documentRefs: [{ id: "impact", section: "Summary of impact metrics; methodology and assumptions" }],
  }),
  topic({
    id: "impact-scale", question: "Has AgriFlock 360 already reached five million farmers?", title: "Five million farmers is an impact scenario",
    status: "Modelled potential",
    answer: ["No current deployment total of five million farmers is established by these documents. Five million is the adoption scenario used in the Solar Smart Brooder Impact Report to illustrate potential scale.", "At its assumed 300 kg of charcoal replaced per farmer annually, that scenario models 1.5 million tonnes of charcoal avoided each year. It is not a claim about charcoal savings already achieved. Older pitch-deck pilot and expansion targets are plans, not evidence of completed deployments."],
    keywords: ["five million 5 million farmers reached deployed deployment adoption scale scenario actual impact results numbers achieved pilots targets"],
    related: ["charcoal-impact", "carbon-readiness", "project-market"],
    documentRefs: [{ id: "impact", section: "Five-million-farmer scenario and methodology" }, { id: "deck", section: "Slides 6, 8 and 12: planned deployment and pilots" }],
  }),
  topic({
    id: "carbon-readiness", question: "Can farmers already earn carbon-credit income through AgriFlock 360?", title: "Carbon finance is a project ambition",
    status: "Modelled potential",
    answer: ["The project documents describe the potential for carbon finance from replacing charcoal heating with solar brooding. The impact report models possible income; it does not establish that credits have been issued or that farmers are already receiving payouts through AgriFlock 360.", "The documents use different carbon-saving estimates, so this guide does not state a single verified emissions saving or guaranteed carbon income. Contact the team about programme availability and the evidence needed for a specific project."],
    keywords: ["carbon credit credits finance income payout payouts emissions co2 co2e climate verified verification certification offset offsets saving footprint tonnes tons"],
    related: ["charcoal-impact", "impact-scale", "support"],
    documentRefs: [{ id: "impact", section: "Carbon-income scenarios and assumptions" }, { id: "concept", section: "Sections 5–6: success indicators and impact linkage" }],
  }),
  topic({
    id: "project-market", question: "Who is the project designed for and where does it aim to grow?", title: "Smallholder farmers at the centre",
    status: "Design direction",
    answer: ["The documents focus on smallholder poultry farmers, especially those facing unreliable connectivity, limited access to farm-management tools and the cost of conventional brooding. Kenya is described as the initial focus market.", "The slide deck describes ambitions to expand across East Africa, the wider continent and selected international markets. These are strategic goals, not confirmation that every service is available in those locations. Contact the team for current availability in your area."],
    keywords: ["target market audience smallholder rural kenya africa expansion east africa countries location availability designed whom"],
    related: ["offline-records", "roles", "partnerships"],
    documentRefs: [{ id: "deck", section: "Slides 2, 6, 11 and 12: farmer needs and market direction" }, { id: "concept", section: "Overview: rural connectivity and smallholder focus" }],
  }),
  topic({
    id: "service-continuity", question: "How does AgriFlock 360 prepare for data loss or service recovery?", title: "A documented backup and recovery approach",
    status: "Documented approach",
    answer: ["The June 2026 recovery runbook documents two complementary backup layers: whole-server snapshots and separate database backups. It describes automated daily backups, protected backup storage and checking restored data before returning a recovered service to use.", "This describes the documented recovery approach, not a guarantee of zero data loss or a fixed recovery time. The website guide cannot inspect backups, restore accounts or recover your records. Contact the team for help with a specific incident."],
    keywords: ["backup backups recovery restore restored disaster data loss resilience continuity lost records incident database server"],
    related: ["privacy", "terms-availability", "support"],
    documentRefs: [{ id: "continuity", section: "Sections 1–2 and 6–7: backup layers and recovery verification" }],
  }),
];

export const projectKnowledgeOverview: KnowledgeArticle = {
  id: "project-documents", question: "What should I know about the project and its impact?", title: "Explore the project knowledge base",
  answer: ["Learn about supported offline tasks, farmer feedback, messaging availability, the solar-brooder concept, regenerative farming and the assumptions behind the project's impact models.", "The guide distinguishes reported implementations from design plans and modelled potential. Current signup roles, pricing and web-app availability follow the newer website information."],
  keywords: ["project guide documents knowledge information reports impact background research overview"],
  sources: [{ label: "Project knowledge base", to: "/knowledge-base" }],
  topics: projectKnowledgeArticles.map(article => article.id),
  related: ["offline-records", "solar-brooder", "carbon-readiness"],
};
