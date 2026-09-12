import { featureDetails, featureFaqs } from "./features";
import { farmerPlans, pricingTerms, professionalServices } from "./pricing";
import { policyDocuments, policyKnowledgeArticles } from "./policies/knowledge";

export interface KnowledgeArticle {
  id: string;
  question: string;
  title: string;
  answer: string[];
  keywords: string[];
  sources: { label: string; to: string }[];
  related?: string[];
  topics?: string[];
  policy?: boolean;
}

const source = (label: string, to: string) => ({ label, to });
const prices = source("Farmer plans", "/pricing#farmer-plans");
const services = source("Service rates & officer earnings", "/pricing#extension-officers");
const download = source("Download & signup steps", "/download");
const contact = source("Contact our team", "/contact");
const money = (amount: number) => `KES ${amount.toLocaleString("en-KE")}`;
const featureKeywords: Record<string, string[]> = {
  "farm-management": ["farm flock batch house capacity occupancy lifecycle complete restore history"],
  feeding: ["feed feeding inventory stock bags purchase store weight weighing growth protein quantity schedule"],
  "flock-health": ["vaccination medication mortality deaths health record vaccine reminders overdue history"],
  "farm-reports": ["egg eggs production record report profit financial finance income expenditure expenses cost labour supplier weights broken cracked"],
  "farm-planning": ["housing quotation quote estimate calculator material budget production planning layer broiler indigenous scenario break even labour"],
  "veterinary-support": ["vet veterinarian directory nearby find book booking appointment profile qualifications location ratings order visit"],
};

// Curated public website content only. Keep operational/private data out of this file.
// Prices and feature explanations reuse the same data as their source pages.
export const knowledgeArticles: KnowledgeArticle[] = [
  {
    id: "company", question: "What is AgriFlock 360?", title: "Meet AgriFlock 360",
    answer: ["AgriFlock 360 brings poultry farm management, feeding and vaccination guidance, farm records, planning tools and access to veterinary support together. The company focuses on helping smallholder farmers build more sustainable poultry operations.", "The mobile app has two modules: Farmer and Veterinarian (Extension officer). The web app is still in development."],
    keywords: ["about company project agriflock agriflock360 purpose overview do"],
    sources: [source("About AgriFlock 360", "/about"), source("App features", "/features")],
  },
  {
    id: "mission", question: "What is the company's mission?", title: "Our purpose",
    answer: ["Our mission is to empower smallholder poultry farmers with smart, sustainable technology, tools and markets under one platform. Our vision is digitally empowered farmers driving food security and sustainable livelihoods in Africa and beyond.", "Our values include innovation, farmer-first design, regenerative farming, data privacy, offline accessibility, and continuous learning and growth."],
    keywords: ["mission vision values sustainability sustainable regenerative environment climate carbon goals"],
    sources: [source("Our mission, vision & values", "/about")],
  },
  {
    id: "team", question: "Who is behind AgriFlock 360?", title: "Our people",
    answer: ["Abisai Nandi is Founder & CIO, and Peter Davis Krahenbuhl is Co-founder & Chief Advisor. The leadership team also includes Jacqueline Maganga, Marketing Director, and James Obimbo, Partner & CFO.", "Our engineering team includes Mititi Isaac, Mumbua Mutuku, Dickson Mumo and Hemstone Alumasa. Board advisors are Andy Olek, Dr. Jon Moyle and Babu S. Rahman. Their roles, biographies and LinkedIn links are on the About page."],
    keywords: ["team people founder founders cofounder leadership engineering engineers advisors board staff who behind abisai nandi peter davis krahenbuhl jacqueline maganga james obimbo mititi isaac mumbua mutuku dickson mumo hemstone alumasa andy olek jon moyle babu rahman"],
    sources: [source("Meet our team", "/about#about-team")],
  },
  {
    id: "partnerships", question: "How can we partner with AgriFlock 360?", title: "Build the future with us",
    answer: ["We welcome conversations with partners who want to support poultry farmers and sustainable agriculture. Use the Partnerships topic on the Contact page and tell us about your organisation and how you would like to work together.", "For investment, research, distribution, jobs or other opportunities, contact the team to discuss what is currently available."],
    keywords: ["partner partnership partnerships organisation organization investor invest investment research distributor distribution career job jobs hiring work together"],
    sources: [source("Build the future with us", "/about#build-the-future"), contact],
  },
  {
    id: "roles", question: "Who can use the app?", title: "One app, two modules",
    answer: ["Poultry farmers use the Farmer module to manage their farms and flocks. Vets and extension officers use the Veterinarian (Extension officer) module to apply to provide professional services.", "Both roles are in the same mobile app. Choose your role during signup; vets must complete their application and wait for approval."],
    keywords: ["roles modules users use farmer farmers veterinarian extension officer two eligible eligibility audience"],
    sources: [source("Choose your role", "/download#choose-your-role")],
  },
  {
    id: "farmer-signup", question: "How do I register as a farmer?", title: "Getting started as a farmer",
    answer: ["1. Download AgriFlock 360 and choose Farmer when creating your account.\n2. Choose a plan for your flock size.\n3. Add your farm and flock details, then start recording your daily work.", `All farmer plans include a ${pricingTerms.trialDays}-day free trial.`],
    keywords: ["farmer register registration signup sign up join create account start started onboarding"],
    sources: [download, prices],
  },
  {
    id: "vet-signup", question: "How do I join as a vet or extension officer?", title: "Apply to provide services",
    answer: ["1. Select Veterinarian (Extension officer) in the app.\n2. Read and accept the Terms & Conditions and Code of Conduct.\n3. Submit your personal and professional details and qualification documents.\n4. Wait for review and approval before offering services.", "For questions about your application or approval status, contact the team. This guide cannot check individual applications."],
    keywords: ["vet veterinarian veterinary extension officer join register registration signup sign up become apply application qualifications documents approval onboarding licence license"],
    sources: [source("Vet signup steps", "/download#choose-your-role"), contact],
  },
  {
    id: "plans", question: "How much do farmer plans cost?", title: "Farmer plans in Kenya",
    answer: [farmerPlans.map(plan => `${plan.name}: ${money(plan.price)}/month — ${plan.flock}.`).join("\n"), `Every plan includes a ${pricingTerms.trialDays}-day free trial, vaccination tracking, feeding guidance, marketplace access and quotations. Veterinary services are charged separately.`],
    keywords: ["price pricing cost costs fee fees subscription plan plans monthly month bronze silver gold platinum cheapest affordable birds chicks flock kenya kes shilling"],
    sources: [prices, services],
  },
  {
    id: "trial", question: "Is there a free trial?", title: `${pricingTerms.trialDays} days to get started`,
    answer: [`All farmer plans include a ${pricingTerms.trialDays}-day free trial. The published monthly subscription rates apply after the trial. Veterinary and extension services are charged separately.`, "Choose a plan for your flock size in the app. For account-specific billing questions, contact the team."],
    keywords: ["free trial trials duration days sixty long included expire expires end"],
    sources: [prices],
  },
  {
    id: "service-rates", question: "What do veterinary services cost?", title: "Vet & extension service rates in Kenya",
    answer: [professionalServices.map(service => `${service.name}: ${money(service.price)} ${service.basis}.`).join("\n"), `These services are separate from farmer subscriptions. Transport is ${money(pricingTerms.transportPerKm)}/km for in-person visits only. Remote advisory calls have no transport charge and are paid upfront. Service payments use mobile money and are recorded in the app.`],
    keywords: ["vet veterinary veterinarian extension officer service services price prices pricing fees cost costs rates vaccination training group consultation advisory remote call assessment investigation visit book booking"],
    sources: [services, source("Find veterinary support", "/features#veterinary-support")],
  },
  {
    id: "transport", question: "When is transport charged?", title: "Transport for in-person visits",
    answer: [`Transport costs ${money(pricingTerms.transportPerKm)} per kilometre and applies only to in-person visits. Remote advisory calls do not have a transport charge.`, "Confirm the travel distance and total cost when arranging a visit."],
    keywords: ["transport travel distance km kilometre kilometer mileage charge charged remote in person"],
    sources: [services],
  },
  {
    id: "earnings", question: "How do vets and extension officers earn?", title: "Earnings for completed services",
    answer: [`Officers receive ${pricingTerms.officerShare}% of service revenue for each completed job, and AgriFlock 360 receives ${pricingTerms.platformShare}% as platform commission. Payments are made via mobile money and recorded in the app.`, "Officers are independent professionals and must complete onboarding and receive approval before offering services."],
    keywords: ["earn earnings revenue income commission share split percentage eighty twenty payout paid salary officer vet professional independent mobile money mpesa"],
    sources: [services],
  },
  {
    id: "download", question: "Where can I download the app?", title: "Get the mobile app",
    answer: ["Android: use the Google Play button on our Download page.\niPhone and iPad: use Join on TestFlight. Install Apple's TestFlight app if prompted, accept the AgriFlock 360 invitation and install the beta.", "Both download buttons and scannable QR codes are on the Download page. The iOS version is a TestFlight beta."],
    keywords: ["download install installation android ios iphone ipad apple app store play store google testflight beta qr mobile phone smartphone"],
    sources: [download],
  },
  {
    id: "web", question: "Can I use the web app now?", title: "Web app: in development",
    answer: ["The AgriFlock 360 web app is still in development. The planned browser experience focuses on farm overviews, feeding and flock health, records and professional support. Features will be confirmed at launch.", "Use the mobile app now, or request launch updates on the Launch Web App page. A launch date has not been announced on the website."],
    keywords: ["web website browser desktop laptop computer launch live available availability release date coming soon development updates waitlist"],
    sources: [source("Web app overview", "/web-app"), source("Request launch updates", "/coming-soon#web-launch-updates"), download],
  },
  {
    id: "features", question: "What features are in the app?", title: "Tools for your poultry operation",
    answer: ["The app covers farm and flock management, feeding plans and inventory, vaccination and health records, farm and financial reports, housing and production planning, and finding veterinary support.", "The Features page explains each tool with examples from the app."],
    keywords: ["features functionality tools functions capabilities solutions products services included offer offers"],
    sources: [source("Explore app features", "/features")],
  },
  ...featureDetails.map(feature => ({
    id: feature.id, question: `How does ${feature.label.toLowerCase()} work?`, title: feature.label,
    answer: [feature.intro, feature.points.map(([title, detail]) => `${title}: ${detail}`).join("\n\n")],
    keywords: [...feature.points.map(([title]) => title), ...featureKeywords[feature.id]],
    sources: [source(feature.label, `/features#${feature.id}`)],
  })),
  {
    id: "devices", question: "How do I add a brooder device?", title: "Link a device to your profile",
    answer: [featureFaqs[4][1]],
    keywords: ["add link scan pair connect device devices brooder qr profile scanner register registration"],
    sources: [source("Profile & devices", "/features#devices")],
  },
  {
    id: "preferences", question: "Where can I change settings or send feedback?", title: "Preferences and feedback",
    answer: [featureFaqs[5][1]],
    keywords: ["settings preferences notification notifications profile feedback suggestion bug"],
    sources: [source("Profile & settings", "/features#devices"), contact],
  },
  {
    id: "bird-types", question: "Which birds are the recommendations for?", title: "Guidance by bird type and age",
    answer: [featureFaqs[0][1]],
    keywords: ["bird type breed breeds broiler broilers grower growers layer layers hens indigenous kienyeji sasso kenbro kuroiler catalog recommendations categories age"],
    sources: [source("Feeding and vaccination guidance", "/features#feeding")],
  },
  {
    id: "recommendations", question: "Who maintains the feeding and vaccination guidance?", title: "Recommendations for your flock",
    answer: [featureFaqs[1][1], "The app matches guidance to your flock's bird type and age. Use your records and a qualified professional's advice when discussing care for your flock."],
    keywords: ["maintains maintains team admin catalogs schedules recommendations reminders alert alerts notification notifications guidance"],
    sources: [source("Feeding & health features", "/features#flock-health")],
  },
  {
    id: "multiple-farms", question: "Can I manage more than one farm or batch?", title: "Manage farms, houses and batches",
    answer: [featureFaqs[2][1]],
    keywords: ["multiple several many more than one farms houses batches capacity occupancy"],
    sources: [source("Farm management", "/features#farm-management")],
  },
  {
    id: "roadmap", question: "Which tools are still in development?", title: "What is still being developed?",
    answer: [featureFaqs[6][1], "The browser-based web app is also in development. We have not published launch dates for these tools. Contact the team for current information about specific hardware, financing, insurance or other offerings."],
    keywords: ["roadmap future planned upcoming development ai disease detection market marketplace linkages sell buyer buyers eggs chicken blockchain traceability training credit financing loan loans insurance carbon brooder hardware solar sensor sensors iot"],
    sources: [source("Features & development status", "/features#features-faq-heading"), source("Web app overview", "/web-app"), contact],
  },
  {
    id: "support", question: "How can I contact the team?", title: "Talk to AgriFlock 360",
    answer: ["Email: support@agriflock360.com\nKenya: +254 729 554 434\nUnited States: +1 667 446 9432", "The Contact page accepts enquiries about farmer and app support, vets and extension officers, partnerships and general questions. For app issues, include your device type and a short description of the problem."],
    keywords: ["contact contacts support help human person agent team email phone telephone call kenya usa us united states reach address location office password login account issue problem bug feedback"],
    sources: [contact],
  },
  {
    id: "privacy", question: "What happens to my data?", title: "Privacy and your information",
    answer: ["The website's Privacy Policy explains what information the website, mobile app, devices and services collect and how it is handled. Contact the team for questions or requests relating to your account data.", "This homepage guide searches public website content on your device. It does not send your chat messages to the team or an AI provider, and it does not save them between page visits. Use the Contact page if you want to send an enquiry."],
    keywords: ["privacy private data personal information safe secure security stored storage saved history chat messages encryption delete deletion"],
    sources: [source("Privacy Policy", "/privacy-policy"), contact],
    topics: policyDocuments.find(document => document.id === "privacy")!.sections.map(section => section.id),
    related: ["privacy-data", "privacy-rights", "privacy-retention"],
  },
  {
    id: "sms", question: "How do I opt in or stop SMS messages?", title: "Your SMS choices",
    answer: ["SMS consent is a separate, initially unchecked choice during registration in the mobile app. Messages cover service alerts and account notifications. Message frequency varies; message and data rates may apply. SMS consent is not a condition of purchase.", "Reply STOP to unsubscribe or HELP for assistance. Contact the team if you need help with your messaging preferences. Reading the SMS Consent page or using this guide does not enrol you in SMS messaging."],
    keywords: ["sms text texts messaging message messages consent opt in opt out stop unsubscribe help checkbox phone alerts"],
    sources: [source("SMS Consent", "/sms-consent"), source("STOP & HELP instructions", "/sms-consent#sms-stop-help"), contact],
    topics: policyDocuments.find(document => document.id === "sms")!.sections.map(section => section.id),
    related: ["sms-opt-in", "sms-messages", "sms-stop-help"],
  },
  {
    id: "terms", question: "Where can I read the terms?", title: "Terms and policies",
    answer: ["The website's Terms & Conditions and Privacy Policy are linked below. Vets and extension officers also read and accept their Terms & Conditions and Code of Conduct during onboarding in the app.", "For a specific refund, cancellation, billing or contractual question, contact the team with the details. This guide cannot decide requests or access your account."],
    keywords: ["terms conditions policy policies conduct refund refunds cancellation cancel billing contract agreement"],
    sources: [source("Terms & Conditions", "/terms-conditions"), source("Privacy Policy", "/privacy-policy"), contact],
    topics: policyDocuments.find(document => document.id === "terms")!.sections.map(section => section.id),
    related: ["terms-eligibility", "terms-payments", "terms-governing-law"],
  },
  {
    id: "policies", question: "What are your privacy, terms and SMS policies?", title: "Policies & your choices",
    answer: ["Explore the Privacy Policy for information collection, use, sharing, security and your data rights. Read the Terms & Conditions for account responsibilities, payments, devices and service rules. SMS Consent explains opting in, message types and charges, and STOP / HELP instructions.", "Choose a document below to browse its sections or ask a specific question. Policy answers use the same published text as the document pages."],
    keywords: ["policies documents legal privacy terms conditions sms consent"],
    sources: policyDocuments.map(document => source(document.title, document.path)),
    related: ["privacy", "terms", "sms"],
  },
  ...policyKnowledgeArticles,
];

export const defaultQuestions = ["plans", "features", "vet-signup", "download", "company", "policies", "support"];

// Reuse the same approved answers in the homepage FAQ and the chat guide.
export const homepageFaqs = ["company", "roles", "farmer-signup", "plans", "trial", "vet-signup", "service-rates", "download", "web", "roadmap"]
  .map(id => knowledgeArticles.find(article => article.id === id)!);
