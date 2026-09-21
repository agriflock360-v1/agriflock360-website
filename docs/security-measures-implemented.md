# AgriFlock 360 — security measures implemented

Completed: 22 September 2026. Branch: `feature/seo-security-hardening`.

This report covers the public marketing website and its build dependencies. The changes are implemented and tested locally; they have not been deployed. The earlier SEO changes are preserved. Cloudflare and Web3Forms account settings were not changed.

## 1. Patched dependencies and removed the public logo utility

The preceding audit reported 19 affected package entries: 2 critical, 10 high, 6 moderate and 1 low. After remediation and a clean `npm ci`, a fresh `npm audit --json` reports **0 known vulnerabilities across all severities**, including development dependencies. This is an advisory snapshot, not a guarantee that the application has no vulnerabilities. The earlier counts included transitive packages and were not 19 demonstrated production exploits.

| Component | Implemented change |
| --- | --- |
| Vite | Updated from 8.0.0 to 8.3.0; the manifest minimum now matches the patched release. |
| React Router / React Router DOM | Updated from 6.30.3 to 7.18.4, with compatible browser and server router imports. |
| PostCSS | Updated the locked 8.5.8 to 8.5.28 and raised the manifest minimum. |
| Transitive packages | Refreshed affected entries in `package-lock.json`, including dependencies used by build and lint tooling. |
| Logo processing | Removed `/process-logo`, its page, background-removal helper and `@huggingface/transformers`. The ONNX, protobuf, sharp and tar dependency chain is no longer in the lockfile. |
| CAPTCHA | Added `@hcaptcha/react-hcaptcha` 2.2.0 for the supported Web3Forms integration. |

The removed tool operated on a public logo; it was not a privileged admin interface. Removing it reduces unnecessary code and dependencies. `/process-logo` now returns a real HTTP 404 under Cloudflare Pages and is absent from generated HTML and the sitemap.

Implementation: [`package.json`](../package.json), [`package-lock.json`](../package-lock.json), [`src/App.tsx`](../src/App.tsx), [`src/main.tsx`](../src/main.tsx), [`src/entry-server.tsx`](../src/entry-server.tsx).

## 2. Security response headers

[`public/_headers`](../public/_headers) is copied into the production build and applies the following headers to static responses:

| Header | Protection and deliberate scope |
| --- | --- |
| `Content-Security-Policy` | Restricts content to the site and explicitly allowed providers. Blocks framing, plugin objects, injected base URLs and inline JavaScript. No `unsafe-inline` or `unsafe-eval` is allowed for scripts. |
| `X-Frame-Options: DENY` | Provides an additional clickjacking defense for browsers that support this header. |
| `Strict-Transport-Security: max-age=31536000` | Instructs browsers receiving the HTTPS response to use HTTPS for that host for one year. Does not include `includeSubDomains` or `preload`; other AgriFlock services have not been reviewed for those settings. |
| `X-Content-Type-Options: nosniff` | Prevents supported browsers from interpreting resources as a different content type. |
| `Referrer-Policy: strict-origin-when-cross-origin` | Limits cross-origin referrer information to the origin and omits it on HTTPS-to-HTTP downgrades. |
| `Permissions-Policy` | Disables unused camera, microphone, geolocation, payment, USB, accelerometer, gyroscope and magnetometer capabilities. |

The CSP permits local scripts and hCaptcha scripts/frames; connections to Web3Forms and hCaptcha; Google Fonts styles/fonts; and local media. The hCaptcha wildcard follows its documented rotating-host requirements. Inline **styles** remain permitted for the existing React/Radix UI; this exception does not enable inline scripts. `upgrade-insecure-requests` is included.

These headers depend on the hosting platform honoring `_headers`. Vite's ordinary development/preview server does not do that; checks use Cloudflare's Pages emulator. If Pages Functions or Workers are introduced, their responses need equivalent headers in that code. Cloudflare redirects and other services are outside this file's coverage.

## 3. CAPTCHA on both public submission forms

The Contact enquiry and web app launch-update forms now display hCaptcha using Web3Forms' documented public site key. Both require a nonempty verification token before enabling Send. The shared API layer also rejects requests missing that token and includes the token in the provider's `h-captcha-response` field.

- Token expiration and challenge expiration disable submission until the visitor completes a new check.
- Each submission attempt clears the token, including rejected or uncertain requests, so a potentially consumed token is not reused.
- Widget failures offer a retry and the support email address. Loader telemetry and user-journey logging are disabled in the React integration.
- The existing Copy enquiry option still works without completing CAPTCHA; copying does not send a form request.
- The website privacy policy now identifies hCaptcha and explains that its verification token accompanies the enquiry sent to Web3Forms.

**Required account step:** enable hCaptcha enforcement for the matching form in the Web3Forms dashboard. Browser validation can be bypassed; protection against direct requests depends on the receiving provider rejecting missing, invalid, expired and reused tokens. This account setting was not accessible or verified during implementation. Do not interpret a disabled Send button as proof of server-side enforcement. No hCaptcha secret belongs in this frontend.

Implementation: [`SpamProtection.tsx`](../src/components/SpamProtection.tsx), [`Contact.tsx`](../src/pages/Contact.tsx), [`WebAppInterestForm.tsx`](../src/components/WebAppInterestForm.tsx), [`privacy.tsx`](../src/data/policies/privacy.tsx).

## 4. Validated form payloads and safer failure handling

The shared [`src/services/api.ts`](../src/services/api.ts) validates enquiries with Zod before making a network request:

- Trims fields; checks required values, email format and the allowed enquiry topics.
- Limits names to 100 characters, email addresses to 254, organisations to 150, messages to 3,000 and tokens to 16,384.
- Rejects control characters in single-line fields and null bytes in messages; ordinary multiline messages remain supported.
- Builds the outbound payload from explicitly selected fields. Unexpected input properties cannot override provider configuration.
- Omits browser credentials from the cross-origin request and rejects redirects.
- Aborts requests after 20 seconds. Provider rejection, malformed responses, network failures and timeouts do not produce a success message.
- Shows a useful rate-limit message for HTTP 429. On failure, both forms retain entered details and require a new CAPTCHA.

These checks reduce accidental malformed requests and unsafe field composition in the website flow. They are client-side checks and do not replace Web3Forms' own validation, CAPTCHA verification or rate limits. The existing Web3Forms access key is intentionally public and is not treated as a private credential.

## 5. Local development and secret-file hygiene

- Vite development and preview servers now bind to `127.0.0.1`, reducing accidental exposure on the local network. LAN access requires an intentional host override.
- `.env` and `.env.*` files are ignored by Git, while a non-secret `.env.example` remains permitted. Cloudflare emulator state is also ignored.
- The lockfile is retained and a clean `npm ci` was verified. Use it in deployment builds to install the reviewed versions.

Ignoring a file does not remove it from Git history, prevent force-adding it or hide values bundled by Vite. Do not store secrets in client-side code or `VITE_*` variables.

Implementation: [`vite.config.ts`](../vite.config.ts), [`.gitignore`](../.gitignore).

## 6. Validation

Verified with Node 24.11.1:

| Check | Result |
| --- | --- |
| `npm ci` | Clean dependency installation passed. |
| `npm audit --json` | 0 known vulnerabilities. |
| `npm run build` | Passed; 15 routes, one 404 page and 14 sitemap URLs. |
| `npm run test:security` | All 6 tests passed: validation, payload restrictions, provider rejection, network failure, timeout and production header/dependency checks. |
| `npm run test:seo` | Passed for every generated route, metadata, indexing directives and assets. |
| `npm run test:knowledge` | Passed: 79 visitor questions and 83 sourced articles. |
| TypeScript | Both application and Node/config projects passed. |
| ESLint on changed security source files | Passed. Repository-wide lint still has existing errors in `command.tsx`, `textarea.tsx` and `tailwind.config.ts`. |
| `git diff --check` | Passed. |
| Cloudflare Pages emulator + Chromium | All 15 routes loaded with security headers. Missing URLs, `/brooder` and `/process-logo` returned 404. |
| Browser enforcement | CSP rejected cross-origin framing and injected inline JavaScript. |
| Mocked form flows | Both forms included CAPTCHA tokens; expiration, success reset, provider rate limits and widget retry behaved correctly. Copy enquiry sent no request. |
| Navigation and rendering | Client navigation, back history and removed-route recovery passed after the router update. All 14 public pages remained readable without JavaScript. No hydration errors were observed. |
| Mobile layout | Contact, launch signup, home and pricing fit a 390px viewport. |
| Real hCaptcha integration | The actual SDK and visible checkbox loaded under the CSP without blocked requests or CSP errors. No challenge was solved or real form submitted. |

Security tests mock the receiving service; they do not send real enquiries. The tests are retained in [`scripts/security.test.mjs`](../scripts/security.test.mjs).

Browser verification used the built output served by Cloudflare's local Pages emulator. All three form submissions were intercepted and returned mocked responses. These checks do not demonstrate production deployment, email delivery or provider-side CAPTCHA enforcement. HSTS delivery was checked as a header; its browser persistence requires a deployed HTTPS response.

## 7. Deployment and provider checklist

1. Enable hCaptcha enforcement for the existing form in the Web3Forms dashboard. Confirm provider-side rate limiting/spam protection and, if supported by the plan, restrict allowed domains to the intended production hosts.
2. Build and deploy the complete `dist` directory to Cloudflare Pages, including `_headers` and `404.html`. Keep the existing apex-to-www and HTTP-to-HTTPS redirects. See [SEO and Search Console](seo.md) for route hosting and sitemap steps.
3. Check response headers on the live homepage, contact page and a missing URL. Verify `/process-logo` returns 404 and the site refuses embedding in an unrelated page.
4. Complete a real CAPTCHA on each deployed form and make a controlled delivery test using an approved test address. Verify the message reaches the team and the widget resets. Browser integration tests here do not prove email delivery.
5. Confirm Web3Forms rejects missing/invalid/reused tokens using a provider-supported test workflow. Account-side configuration and actual token rejection remain unverified until this step is completed.
6. Re-run dependency audits regularly and after package changes. Review CSP allowlists when adding third-party scripts, fonts, embeds or APIs instead of broadly relaxing the policy.

This work does not assess the mobile app, `api.agriflock360.com`, authenticated systems, Cloudflare account/WAF settings or email authentication records. It is a targeted hardening implementation for this repository, not a full penetration test.

## References

- [Cloudflare Pages response headers](https://developers.cloudflare.com/pages/configuration/headers/)
- [Web3Forms hCaptcha integration and account activation](https://docs.web3forms.com/getting-started/customizations/spam-protection/hcaptcha)
- [hCaptcha integration and CSP requirements](https://docs.hcaptcha.com/)
- [Official hCaptcha React integration](https://github.com/hCaptcha/react-hcaptcha)
- [React Router v6-to-v7 migration](https://reactrouter.com/7.18.4/upgrading/v6)
- [OWASP HTTP security headers guidance](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html)
