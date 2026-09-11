// Kenya rates supplied in the farmer app and service catalog screenshots.
// Trial duration and in-person-only transport were confirmed by the user.
export const farmerPlans = [
  { id: "bronze", name: "Bronze", price: 150, flock: "Fewer than 300 chicks", audience: "For small-scale farmers" },
  { id: "silver", name: "Silver", price: 350, flock: "300–600 chicks", audience: "For medium-scale farmers" },
  { id: "gold", name: "Gold", price: 550, flock: "601–1,000 chicks", audience: "For large-scale farmers" },
  { id: "platinum", name: "Platinum", price: 750, flock: "More than 1,000 chicks", audience: "For larger flocks" },
] as const;

export const professionalServices = [
  { id: "advisory", name: "Advisory Call (Remote)", description: "Speak with a vet or extension officer for advice remotely.", price: 500, basis: "per call", note: "Paid upfront · No transport charge" },
  { id: "investigation", name: "Disease Investigation", description: "Get professional help investigating a flock health concern.", price: 1000, basis: "per service", note: "Fixed service fee" },
  { id: "assessment", name: "Farm Visit & Assessment", description: "Arrange an on-farm visit to assess your poultry operation.", price: 800, basis: "per visit", note: "Fixed service fee" },
  { id: "training", name: "Training / Group Session", description: "Learn with other farmers in a group training session.", price: 200, basis: "per person", note: "Priced by attendance" },
  { id: "vaccination", name: "Vaccination", description: "Arrange a vaccination service for your flock.", price: 10, basis: "per bird", note: "Priced by flock size" },
] as const;

export const pricingTerms = { trialDays: 60, transportPerKm: 15, officerShare: 80, platformShare: 20 } as const;
