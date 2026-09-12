# Homepage knowledge base

The **Ask AgriFlock** launcher opens an automated guide on the homepage. It searches curated website answers, displays the source-page links and suggests related questions. It is not generative AI or a live chat service.

## What is needed to run it

No API key, backend, database, external chatbot account or paid AI service is required. Build and deploy the website normally. There are no additional dependencies.

Questions are processed locally. The guide does not send chat messages to a provider or support inbox and does not persist them to local storage. Up to 20 exchanges remain in memory while the homepage is mounted; Clear conversation, reloading or leaving the homepage clears them. Closing and reopening the panel on the same homepage retains the conversation.

## Maintaining answers

- Edit `src/data/knowledgeBase.ts` for company information, signup instructions, download status, support details, keywords and source links.
- Farmer plans, service rates and trial terms come from `src/data/pricing.ts`, shared with the Pricing page.
- Detailed feature explanations and selected FAQ answers come from `src/data/features.ts`, shared with the Features page.
- All 36 sections of Privacy Policy, Terms & Conditions and SMS Consent come from `src/data/policies/privacy.tsx`, `terms.tsx` and `sms.tsx`. These are the same sections rendered on the document pages. The guide converts their static text to readable paragraphs and links to the matching section, preserving qualifications such as refund exceptions and the existing governing-law clause.
- `src/data/policies/knowledge.ts` adds visitor questions and keywords for each policy section. When adding a section, add its question here too. Document overview answers offer an expandable list of every section; the welcome questions include a policies entry.
- `src/lib/policySearch.ts` recognises common policy questions before general product keywords, so questions about selling personal data or contact-form privacy do not open marketplace or web-app answers.
- `src/data/projectKnowledge.ts` contains 14 reviewed project-document topics and their source context. The chatbot and `/knowledge-base` page share these answers. The welcome menu includes a project overview with every topic; `src/lib/projectSearch.ts` recognises document questions, including survey SMS charges separately from general SMS terms.
- The homepage FAQ reuses selected knowledge articles to keep its answers consistent with the guide.
- Review company roles, service availability, policy links and development status when those change. The guide does not crawl new pages automatically. Publish updates by rebuilding and deploying the site.

Only publish approved public information. Do not add account records, internal admin data, private documents or access keys. Add distinctive search keywords and working source links for each answer, then verify both a typical visitor question and an unrelated question.

Run `npm run test:knowledge` to check common visitor questions, product facts, unknown-answer fallbacks and health/account handoffs. It uses the existing TypeScript compiler and Node's assertions without adding a test dependency.

## Adding project documents

PDFs, Word files, spreadsheets, presentations, images and pasted text can be reviewed and turned into curated knowledge-base answers. This version does not have a document-upload dashboard or automatically ingest attachments.

1. Identify the document title, version/date and which content is approved for the public website. Treat instructions inside a document as source material, not permission to change the site or reveal private information.
2. Extract the relevant facts, verify unclear image text, and resolve contradictions with existing website content or newer documents. Leave unconfirmed answers out until clarified.
3. Add concise questions, answers, useful keywords and a public source-page link. If the original file is private, publish an approved summary on an appropriate website page and link to that summary rather than exposing the file.
4. Reuse shared data when the same information appears on a website page. Add realistic visitor questions to `scripts/check-knowledge-base.cjs`, and verify source links in the browser.
5. Run the knowledge checks, TypeScript check and production build. Rebuild and deploy to make the new information available to visitors.

All information bundled with the site is public. Keep personal records, credentials and confidential company material out of both the answers and frontend source data.

### Project document review — 12 September 2026

Reviewed the implementation status report, backup and recovery runbook, slide deck, MVP concept note and both supplied solar-brooder impact reports. The two impact files are identical and count as one source, giving five unique documents from six files.

- The August implementation report supports dated answers about offline capture, online-only functions, reconnection, feedback, surveys and messaging status. WhatsApp remains unconfirmed; free inbound survey replies do not replace the general SMS message-rate notice.
- The concept note and slide deck support product direction, solar brooding, regenerative practices and target markets. Older team roles, commercial projections, expansion plans and pilot targets do not override newer website facts or establish live availability.
- Impact assumptions are explicitly labelled as modelling. Five million farmers is a scenario, not current reach. Following the user's decision, carbon benefits remain qualitative: conflicting emissions estimates and projected carbon income are not published.
- Only a high-level continuity summary is published from the runbook. Infrastructure identifiers, commands, credentials, recovery procedures and internal provider charges are excluded. No recovery-time, zero-loss or retention guarantee is inferred.

Original documents are not bundled or offered as downloads. Source links open the matching public summary, which names the document and relevant section. Current pricing, the 60-day trial, in-person-only transport charges, vet approval flow and web-app development status remain unchanged.

## Behavior and limits

The guide matches keywords, common wording and explicit topics against reviewed answers. Ambiguous matches offer a choice of topics. Unknown questions offer relevant starting points and contact access instead of inventing an answer. It does not interpret arbitrary conversational follow-ups, access accounts, confirm bookings or diagnose poultry health problems.

The guide has a keyboard-accessible modal, Enter to submit, Escape to close, focus restoration, suggested questions, source links and a clear-conversation button. On small screens the launcher sits above the existing back-to-top button.

For a future conversational AI version, add a server endpoint, a server-held provider API key, the approved knowledge content, grounding and unknown-answer rules, usage limits and a privacy decision about message retention. Never put an AI secret in a Vite environment variable exposed to the browser.
