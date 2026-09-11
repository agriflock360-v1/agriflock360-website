# Homepage knowledge base

The **Ask AgriFlock** launcher opens an automated guide on the homepage. It searches curated website answers, displays the source-page links and suggests related questions. It is not generative AI or a live chat service.

## What is needed to run it

No API key, backend, database, external chatbot account or paid AI service is required. Build and deploy the website normally. There are no additional dependencies.

Questions are processed locally. The guide does not send chat messages to a provider or support inbox and does not persist them to local storage. Up to 20 exchanges remain in memory while the homepage is mounted; Clear conversation, reloading or leaving the homepage clears them. Closing and reopening the panel on the same homepage retains the conversation.

## Maintaining answers

- Edit `src/data/knowledgeBase.ts` for company information, signup instructions, download status, support details, keywords and source links.
- Farmer plans, service rates and trial terms come from `src/data/pricing.ts`, shared with the Pricing page.
- Detailed feature explanations and selected FAQ answers come from `src/data/features.ts`, shared with the Features page.
- The homepage FAQ reuses selected knowledge articles to keep its answers consistent with the guide.
- Review company roles, service availability, policy links and development status when those change. The guide does not crawl new pages automatically. Publish updates by rebuilding and deploying the site.

Only publish approved public information. Do not add account records, internal admin data, private documents or access keys. Add distinctive search keywords and working source links for each answer, then verify both a typical visitor question and an unrelated question.

Run `npm run test:knowledge` to check common visitor questions, product facts, unknown-answer fallbacks and health/account handoffs. It uses the existing TypeScript compiler and Node's assertions without adding a test dependency.

## Behavior and limits

The guide matches keywords, common wording and explicit topics against reviewed answers. Ambiguous matches offer a choice of topics. Unknown questions offer relevant starting points and contact access instead of inventing an answer. It does not interpret arbitrary conversational follow-ups, access accounts, confirm bookings or diagnose poultry health problems.

The guide has a keyboard-accessible modal, Enter to submit, Escape to close, focus restoration, suggested questions, source links and a clear-conversation button. On small screens the launcher sits above the existing back-to-top button.

For a future conversational AI version, add a server endpoint, a server-held provider API key, the approved knowledge content, grounding and unknown-answer rules, usage limits and a privacy decision about message retention. Never put an AI secret in a Vite environment variable exposed to the browser.
