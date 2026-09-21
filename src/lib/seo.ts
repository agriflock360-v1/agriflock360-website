import { farmerPlans, pricingTerms } from "../data/pricing.ts";

export const SITE_URL = "https://www.agriflock360.com";
const SITE_NAME = "AgriFlock 360";
const SOCIAL_IMAGE = `${SITE_URL}/agriflock360-social-preview.png`;
const SOCIAL_IMAGE_ALT = "AgriFlock 360 — Manage your flock, plan feeding and vaccinations, and connect with poultry professionals.";

interface PageSeo {
  path: string;
  title: string;
  description: string;
  label: string;
  noindex?: boolean;
  type?: "WebPage" | "AboutPage" | "ContactPage";
}

// Every public route belongs here. The build uses this list for HTML and sitemap output.
export const seoPages: PageSeo[] = [
  { path: "/", title: "Poultry Farm Management App in Kenya | AgriFlock 360", description: "Manage your poultry farm with AgriFlock 360. Track feeding, vaccinations, flock records and costs, and connect with vets and extension officers in Kenya.", label: "Home" },
  { path: "/features", title: "Poultry Management App Features | AgriFlock 360", description: "Explore AgriFlock 360 tools for flock records, feeding schedules, vaccination tracking, farm reports, quotations, marketplace access and veterinary support.", label: "App features" },
  { path: "/pricing", title: "Poultry App Pricing & Vet Service Rates | AgriFlock 360", description: `Compare poultry farmer plans from KES ${farmerPlans[0].price} per month after a ${pricingTerms.trialDays}-day free trial. View separate vet and extension officer service rates in Kenya.`, label: "Pricing" },
  { path: "/download", title: "Download the Poultry Farming App | AgriFlock 360", description: "Get AgriFlock 360 on Google Play or join the iPhone and iPad TestFlight beta. Sign up as a poultry farmer, veterinarian or extension officer.", label: "Download the app" },
  { path: "/vaccination", title: "Poultry Vaccination Tracking & Reminders | AgriFlock 360", description: "Keep poultry vaccination records organised with AgriFlock 360. Follow vaccination schedules, receive reminders and monitor flock health from your phone.", label: "Vaccination & health" },
  { path: "/feeding", title: "Poultry Feeding Schedules & Tracking | AgriFlock 360", description: "Plan poultry feeding schedules, track feed consumption and review growth with AgriFlock 360. Keep feeding records together as your flock develops.", label: "Precision feeding" },
  { path: "/analytics", title: "Poultry Farm Analytics & Reports | AgriFlock 360", description: "Explore AgriFlock 360 poultry farm analytics, performance reports and data insights to understand your flock and support farm management decisions.", label: "Farm analytics" },
  { path: "/about", title: "About Our Poultry Farming Platform | AgriFlock 360", description: "Meet the AgriFlock 360 team and advisors. Learn about our work to support poultry farmers through digital farm management, professional services and technology.", label: "About us", type: "AboutPage" },
  { path: "/contact", title: "Contact Our Poultry Farming Support Team | AgriFlock 360", description: "Contact AgriFlock 360 for app support, poultry farming enquiries, partnerships and professional services. Reach our team by email or phone in Kenya and the US.", label: "Contact us", type: "ContactPage" },
  { path: "/web-app", title: "Poultry Management Web App Plans | AgriFlock 360", description: "Explore the planned AgriFlock 360 web workspace for poultry records, reporting and professional support. Web access is in development; the mobile app is available.", label: "Web app overview" },
  { path: "/knowledge-base", title: "Poultry Platform Questions & Project Guide | AgriFlock 360", description: "Read practical answers about AgriFlock 360, offline recording, farmer feedback, solar brooding and environmental goals, with current and planned work explained.", label: "Project knowledge base" },
  { path: "/privacy-policy", title: "Privacy Policy | AgriFlock 360", description: "Read how AgriFlock 360 collects, uses, shares and protects personal information, and learn about your data rights and privacy choices.", label: "Privacy policy" },
  { path: "/terms-conditions", title: "Terms & Conditions | AgriFlock 360", description: "Review the AgriFlock 360 terms for accounts, subscriptions, payments, devices, professional services and responsibilities when using the platform.", label: "Terms & conditions" },
  { path: "/sms-consent", title: "SMS Consent & Messaging Preferences | AgriFlock 360", description: "Learn how AgriFlock 360 SMS consent works, what messages you may receive, possible charges and how to opt out or request help using STOP and HELP.", label: "SMS consent" },
  { path: "/coming-soon", title: "Web App Launch Updates | AgriFlock 360", description: "Register your interest in the AgriFlock 360 web app. Web access is in development; poultry farmers and professionals can get started with the mobile app today.", label: "Web launch updates", noindex: true },
];

const notFound: PageSeo = { path: "/404", title: "Page Not Found | AgriFlock 360", description: "This page could not be found. Explore AgriFlock 360 poultry farming tools or contact our team for help.", label: "Page not found", noindex: true };

export function getPageSeo(pathname: string): PageSeo {
  const path = pathname.split(/[?#]/)[0].replace(/\/+$/, "").toLowerCase() || "/";
  return seoPages.find(page => page.path === path) ?? notFound;
}

export function getStructuredData(page: PageSeo) {
  if (page.noindex) return null;
  const url = `${SITE_URL}${page.path}`;
  const organizationId = `${SITE_URL}/#organization`;
  const websiteId = `${SITE_URL}/#website`;
  const graph: Record<string, unknown>[] = [
    {
      "@type": "Organization", "@id": organizationId, name: SITE_NAME,
      alternateName: "AgriFlock360", url: `${SITE_URL}/`,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/agriflock360-logo.png`, width: 512, height: 512 },
      email: "support@agriflock360.com",
      sameAs: ["https://www.linkedin.com/company/agriflock-360", "https://web.facebook.com/profile.php?id=61584028213600", "https://www.instagram.com/agriflock_360", "https://x.com/agriflock360", "https://www.tiktok.com/@agriflock_360"],
      contactPoint: [
        { "@type": "ContactPoint", telephone: "+254729554434", contactType: "customer service", areaServed: "KE", availableLanguage: "English" },
        { "@type": "ContactPoint", telephone: "+16674469432", contactType: "customer service", areaServed: "US", availableLanguage: "English" },
      ],
    },
    { "@type": "WebSite", "@id": websiteId, url: `${SITE_URL}/`, name: SITE_NAME, alternateName: "AgriFlock360", publisher: { "@id": organizationId }, inLanguage: "en" },
    { "@type": page.type ?? "WebPage", "@id": `${url}#webpage`, url, name: page.title, description: page.description, isPartOf: { "@id": websiteId }, about: { "@id": organizationId }, inLanguage: "en" },
  ];
  if (page.path !== "/") {
    graph.push({ "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`, itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: page.label, item: url },
    ] });
    graph[2].breadcrumb = { "@id": `${url}#breadcrumb` };
  }
  // App information is limited to pages that actually describe the app.
  // Do not advertise a free subscription, a released web app or invented ratings.
  if (["/", "/features", "/pricing", "/download"].includes(page.path)) {
    graph.push({ "@type": "SoftwareApplication", "@id": `${SITE_URL}/#app`, name: SITE_NAME,
      url: `${SITE_URL}/download`, applicationCategory: "BusinessApplication", operatingSystem: "Android, iOS (TestFlight beta)",
      publisher: { "@id": organizationId }, description: "Poultry farm management with flock records, feeding guidance, vaccination tracking and access to professional support.",
      ...(page.path === "/pricing" ? { offers: farmerPlans.map(plan => ({
        "@type": "Offer", name: `${plan.name} farmer plan`, price: plan.price, priceCurrency: "KES", url: `${SITE_URL}/pricing#farmer-plans`,
        description: `${plan.flock}. Billed monthly after a ${pricingTerms.trialDays}-day free trial. Professional services are charged separately.`,
        priceSpecification: { "@type": "UnitPriceSpecification", price: plan.price, priceCurrency: "KES", unitText: "MONTH", billingDuration: "P1M" },
      })) } : {}),
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}

const escapeHtml = (value: string) => value.replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]!);

// Shared by the static build and client navigation, so the two cannot drift.
export function renderSeoHead(pathname: string): string {
  const page = getPageSeo(pathname);
  const meta = (key: string, value: string, property = false) => `<meta data-seo ${property ? "property" : "name"}="${key}" content="${escapeHtml(value)}" />`;
  const schema = getStructuredData(page);
  return [
    `<title data-seo>${escapeHtml(page.title)}</title>`,
    meta("description", page.description),
    meta("robots", page.noindex ? "noindex, follow" : "index, follow, max-image-preview:large"),
    ...(!page.noindex ? [`<link data-seo rel="canonical" href="${SITE_URL}${page.path}" />`] : []),
    meta("og:title", page.title, true), meta("og:description", page.description, true),
    meta("og:type", "website", true), meta("og:site_name", SITE_NAME, true), meta("og:locale", "en_KE", true),
    ...(!page.noindex ? [meta("og:url", `${SITE_URL}${page.path}`, true)] : []),
    meta("og:image", SOCIAL_IMAGE, true), meta("og:image:secure_url", SOCIAL_IMAGE, true), meta("og:image:type", "image/png", true),
    meta("og:image:width", "1200", true), meta("og:image:height", "630", true), meta("og:image:alt", SOCIAL_IMAGE_ALT, true),
    meta("twitter:card", "summary_large_image"), meta("twitter:site", "@AgriFlock360"),
    meta("twitter:title", page.title), meta("twitter:description", page.description), meta("twitter:image", SOCIAL_IMAGE), meta("twitter:image:alt", SOCIAL_IMAGE_ALT),
    ...(schema ? [`<script data-seo type="application/ld+json">${JSON.stringify(schema).replace(/</g, "\\u003c")}</script>`] : []),
  ].join("\n    ");
}
