import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import { test } from "node:test";
import { contactApi } from "../src/services/api.ts";

const enquiry = {
  name: "Security Test", email: "security-test@example.com", company: "Test farm",
  topic: "General enquiry", message: "Local test only. Never delivered.", captchaToken: "test-token-not-valid-at-provider",
};

test("rejects missing CAPTCHA, invalid fields and header injection without sending", async t => {
  const fetch = t.mock.method(globalThis, "fetch", () => { throw new Error("Unexpected network access"); });
  for (const patch of [
    { captchaToken: "" }, { captchaToken: " ", message: "Valid message" },
    { captchaToken: "x".repeat(16385) }, { name: "" }, { name: "A".repeat(101) },
    { name: "Name\r\nBcc: other@example.com" }, { email: "bad-email" },
    { email: "person@example.com\r\nInjected: value" }, { company: "a\nb" },
    { company: "c".repeat(151) }, { message: "x".repeat(3001) },
    { message: "" }, { message: "Null\0byte" }, { topic: "Unapproved topic" },
  ]) {
    const result = await contactApi.submitEnquiry({ ...enquiry, ...patch });
    assert.equal(result.success, false);
    assert.ok(result.message.length);
  }
  assert.equal(fetch.mock.callCount(), 0);
});

test("sends only allowed fields, a CAPTCHA token and no credentials", async t => {
  let request;
  t.mock.method(globalThis, "fetch", async (url, options) => {
    request = { url, options, body: JSON.parse(options.body) };
    return Response.json({ success: true });
  });
  const result = await contactApi.submitEnquiry({ ...enquiry, name: "  Security Test  ", webhook: "https://example.invalid", message: "First line\nSecond line" });
  assert.deepEqual(result, { success: true });
  assert.equal(request.url, "https://api.web3forms.com/submit");
  assert.equal(request.options.method, "POST");
  assert.equal(request.options.credentials, "omit");
  assert.equal(request.options.redirect, "error");
  assert.equal(request.body["h-captcha-response"], enquiry.captchaToken);
  assert.equal(request.body.name, "Security Test");
  assert.equal(request.body.message, "First line\nSecond line");
  assert.equal(request.body.webhook, undefined);
  assert.equal(request.body.captchaToken, undefined);
});

test("does not report success on provider rejection, rate limit or malformed response", async t => {
  for (const response of [
    Response.json({ success: true }, { status: 403 }),
    Response.json({ success: false }),
    Response.json({ success: "true" }),
    Response.json(null),
    new Response("Rate limited", { status: 429 }),
    new Response("Not JSON"),
  ]) {
    const fetch = t.mock.method(globalThis, "fetch", async () => response);
    const result = await contactApi.submitEnquiry(enquiry);
    assert.equal(result.success, false);
    if (response.status === 429) assert.match(result.message, /Too many/);
    fetch.mock.restore();
  }
});

test("network failures cannot report a delivered enquiry", async t => {
  t.mock.method(globalThis, "fetch", async () => { throw new TypeError("Network failed"); });
  assert.equal((await contactApi.submitEnquiry(enquiry)).success, false);
});

test("times out and aborts a stalled enquiry", async t => {
  let triggerTimeout;
  let signal;
  const timer = t.mock.method(globalThis, "setTimeout", callback => { triggerTimeout = callback; return 123; });
  const cleanup = t.mock.method(globalThis, "clearTimeout", () => {});
  t.mock.method(globalThis, "fetch", (_, options) => {
    signal = options.signal;
    return new Promise((_, reject) => signal.addEventListener("abort", () => reject(new DOMException("Aborted", "AbortError"))));
  });
  const pending = contactApi.submitEnquiry(enquiry);
  assert.equal(timer.mock.calls[0].arguments[1], 20000);
  triggerTimeout();
  assert.equal((await pending).success, false);
  assert.equal(signal.aborted, true);
  assert.equal(cleanup.mock.callCount(), 1);
});

test("production output enforces headers and contains no logo processing stack", async () => {
  const headers = await readFile("dist/_headers", "utf8");
  assert.match(headers, /^\/\*\n/);
  const csp = headers.match(/Content-Security-Policy: (.+)/)[1];
  assert.match(csp, /frame-ancestors 'none'/);
  assert.match(csp, /object-src 'none'/);
  assert.match(csp, /base-uri 'none'/);
  const scripts = csp.match(/script-src ([^;]+)/)[1];
  assert.doesNotMatch(scripts, /unsafe-inline|unsafe-eval|https:\s|\*\s/);
  assert.match(scripts, /https:\/\/\*\.hcaptcha.com/);
  assert.match(csp, /connect-src [^;]*https:\/\/api.web3forms.com/);
  assert.match(headers, /Strict-Transport-Security: max-age=31536000/);
  assert.doesNotMatch(headers, /includeSubDomains|preload/);
  assert.match(headers, /X-Frame-Options: DENY/);
  assert.match(headers, /X-Content-Type-Options: nosniff/);
  assert.match(headers, /Permissions-Policy: camera=\(\), microphone=\(\), geolocation=\(\)/);
  await assert.rejects(access("dist/process-logo.html"));
  const lock = JSON.parse(await readFile("package-lock.json", "utf8"));
  for (const path of Object.keys(lock.packages)) assert.doesNotMatch(path, /(?:@huggingface\/transformers|onnxruntime|protobufjs|node_modules\/sharp|node_modules\/tar$)/);
  for (const path of ["contact", "coming-soon"]) {
    const html = await readFile(`dist/${path}.html`, "utf8");
    assert.match(html, /Form security check/);
    assert.match(html, /<button[^>]*type="submit"[^>]*disabled=""/);
  }
});
