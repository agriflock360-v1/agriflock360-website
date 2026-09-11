export const featureDetails = [
  {
    id: "farm-management", label: "Your farm, organised", heading: "Every flock has a place.",
    intro: "Keep your farms, poultry houses and bird batches connected, so you can see what is happening across your operation.",
    points: [
      ["Organise farms and houses", "Add farms and poultry houses, then check each house’s capacity, current occupancy and remaining space."],
      ["Follow each batch", "Keep the bird type, age, bird count and batch status together from placement to completion."],
      ["See the daily picture", "Review live bird numbers, feeding, weights, mortality and vaccination activity for the batch you are working on."],
    ],
    detailTitle: "Managing the batch lifecycle",
    detail: "Open or edit a batch, mark it complete and review completed or removed batches. Batch history and restoration activity help you follow changes over time, while recent activity keeps daily records easy to find.",
    visual: "farm",
  },
  {
    id: "feeding", label: "Feeding plans & inventory", heading: "Know what to feed. Track what you use.",
    intro: "Follow feeding recommendations for your birds’ type and age, then keep a record of the feed actually used on your farm.",
    points: [
      ["Guidance for each growth stage", "See the recommended feed type, daily quantity per bird and for the flock, feeding times and weekly feed needs."],
      ["Use stored feed or a new purchase", "Choose From Store to record feed drawn from inventory, or New Purchase for feed bought and used now. Keep track of stock by feed type, bags and weight."],
      ["Compare the plan with your records", "Log actual quantities, date, time and notes. Review feed variance and compare sample bird weights with the recommended weight for their age."],
    ],
    detailTitle: "What goes into the recommendations?",
    detail: "The AgriFlock team maintains feed recommendations by bird category, age range and growth stage. Catalog information includes protein content, expected weight, feeding frequency and supplements where specified. Weighing records capture the sample’s average weight, date and notes to help you follow growth over time.",
    visual: "feeding",
  },
  {
    id: "flock-health", label: "Vaccination & flock health", heading: "Stay on top of flock care.",
    intro: "Bring vaccination schedules, medication records and mortality reports together in one health history for each batch.",
    points: [
      ["Keep the next vaccination in view", "Follow schedules for the bird type and age, including repeat rounds for laying birds. See completed, due today, upcoming and overdue vaccinations."],
      ["Prepare with reminders", "Feeding and vaccination reminders help you prepare for scheduled care. The AgriFlock team maintains the recommendations and reminder schedules."],
      ["Record what happened", "Log vaccinations and medication. Record deaths, when they occurred and the suspected causes so mortality and remaining bird numbers stay visible."],
    ],
    detailTitle: "More detail in your health records",
    detail: "Vaccination recommendations include the target disease, age window and administration information. Mortality records let you note day or night and select multiple suspected causes, including environmental conditions, disease, predators and feed or water issues. These records provide context when seeking veterinary support.",
    visual: "mortality",
  },
  {
    id: "farm-reports", label: "Farm records & financial reports", heading: "Turn daily records into a clearer picture.",
    intro: "Capture production, purchases, expenses and income as they happen. Review the results for one batch or across a farm.",
    points: [
      ["Record everyday production", "Keep feeding, health and weighing records alongside egg production. Note cracked or broken eggs, small or deformed eggs, and whether eggs were sold."],
      ["Keep costs and income together", "Record feed, vaccines, medication, equipment, housing, labour, purchased birds, utilities and other expenses. Review dated entries with quantities and supplier details where recorded."],
      ["Choose the report you need", "Open a Batch Report or Farm Report to review production and financial information, including income, expenditure, net profit and production cost per bird."],
    ],
    detailTitle: "Review activity over time",
    detail: "Use daily, weekly, monthly, yearly or custom date views where available to focus your reports. Dates, times and notes add context to production records, while recent activity helps you trace the entries behind your totals. Reports reflect the records entered for your farm.",
    visual: "reports",
  },
  {
    id: "farm-planning", label: "Housing & production planning", heading: "Plan the next step before you spend.",
    intro: "Explore poultry housing requirements and production estimates, using inputs you can adjust to your farm and local prices.",
    points: [
      ["Start with housing capacity", "Explore house quotations for 100, 300, 500 or 1,000 birds. Review materials, quantities, editable unit prices, subtotals and labour estimates alongside housing guidance."],
      ["Explore production scenarios", "Choose Layers, Broilers or Indigenous birds. The layer estimate covers rearing and laying stages, with inputs for flock size, mortality, laying period, feed costs, egg production and selling prices."],
      ["See how the numbers change", "Review estimated costs, revenue, monthly net profit, break-even timing and full-cycle results. Include end-of-cycle bird sales in your layer planning."],
    ],
    detailTitle: "Allow for the full cost of your farm",
    detail: "Adjust inputs to local conditions and budget separately for any excluded costs, such as housing, brooding, equipment, repairs, transport, electricity, water and labour. Estimates depend on your inputs, farm management and market conditions; they are not guaranteed returns.",
    visual: "planning",
  },
  {
    id: "veterinary-support", label: "Veterinary support", heading: "Find someone to help with flock care.",
    intro: "Use the veterinary directory to find an officer, learn about their experience and start a booking through the app.",
    points: [
      ["Explore the directory", "Search and filter veterinary officers, explore nearby or recommended listings, or browse all available profiles."],
      ["Review an officer’s profile", "View qualifications, experience, location and the availability, licence information and ratings shown on the profile."],
      ["Start a booking and follow your orders", "Use View Details or Book Now to take the next step. Find your service orders and completed visits in the app’s order history."],
    ],
    detailTitle: "Bring your farm history into the conversation",
    detail: "Keep the batch’s age, vaccination history, medication and mortality records handy when describing a concern. The directory helps you find support; an appointment depends on the officer’s availability and the booking arrangements.",
    visual: "vets",
  },
];

export const featureFaqs = [
  ["Which birds are the recommendations for?", "The catalogs cover broilers, growers before laying, laying hens, improved indigenous chickens such as Sasso, Kenbro and Kuroiler, and pure Kienyeji. Recommendations are organised by bird category and age."],
  ["Who maintains the feeding and vaccination guidance?", "The AgriFlock team manages the recommendation catalogs and alert schedules from the admin panel. Your flock’s type and age determine the relevant guidance shown in the app."],
  ["Can I manage more than one farm or batch?", "Yes. Farms contain poultry houses, and houses contain batches. You can keep records for individual batches and review reports at batch or farm level."],
  ["Are the production estimates the same as my farm’s results?", "Production estimates use the assumptions and prices you enter to help you plan. Farm reports use your recorded activity. Keep expenses and income up to date, and allow for costs excluded from an estimate."],
  ["How do I add my brooder device?", "Open Profile, choose My Brooder Devices and tap the QR scanner icon. Scan the QR code on your brooder to link the device to your account. You can return to My Devices to view the devices associated with your profile."],
  ["Where can I manage preferences or share feedback?", "Open Settings from your profile for app preferences and notifications. Use Feedback to share a suggestion, report a bug or ask a question."],
  ["Which tools are still in development?", "AI disease detection, direct market linkages, blockchain traceability, and farmer training and advisory tools are in development. They are separate from the app features described on this page."],
];
