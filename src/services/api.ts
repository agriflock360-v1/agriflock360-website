import { z } from "zod";

export interface ContactEnquiry {
  name: string;
  email: string;
  company: string;
  topic: string;
  message: string;
  captchaToken: string;
}

type ContactSubmissionResult = { success: true } | { success: false; message: string };

const singleLine = (value: string) => !Array.from(value).some(char => char.charCodeAt(0) < 32 || char.charCodeAt(0) === 127);
const enquirySchema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(100, "Please keep your name under 100 characters.").refine(singleLine, "Please enter your name on one line."),
  email: z.string().trim().email("Please enter a valid email address.").max(254).refine(singleLine, "Please enter a valid email address."),
  company: z.string().trim().max(150, "Please keep the organisation name under 150 characters.").refine(singleLine, "Please enter the organisation name on one line."),
  topic: z.enum(["Farmer & app support", "Vets & extension officers", "Partnerships", "General enquiry", "Web app launch updates"]),
  message: z.string().trim().min(1, "Please enter your message.").max(3000, "Please keep your message under 3,000 characters.").refine(value => !value.includes(String.fromCharCode(0)), "Please remove unsupported characters from your message."),
  captchaToken: z.string().trim().min(1, "Please complete the security check before sending.").max(16384, "Please complete a new security check."),
});

// Public Web3Forms client key supplied for support@agriflock360.com.
const contactAccessKey = "b581fbf8-8a13-4fd2-ac6c-a5223e07e927";
const unconfirmedSubmission: ContactSubmissionResult = {
  success: false,
  message: "We couldn’t confirm your submission. Your details are still here. Please try again or email support@agriflock360.com.",
};

export const contactApi = {
  async submitEnquiry(enquiry: ContactEnquiry): Promise<ContactSubmissionResult> {
    const validation = enquirySchema.safeParse(enquiry);
    if (!validation.success) {
      return { success: false, message: validation.error.issues[0].message };
    }
    const details = validation.data;
    const controller = new AbortController();
    const timeout = globalThis.setTimeout(() => controller.abort(), 20000);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        credentials: "omit",
        redirect: "error",
        signal: controller.signal,
        body: JSON.stringify({
          access_key: contactAccessKey,
          from_name: "AgriFlock 360 Website",
          subject: `AgriFlock 360: ${details.topic} — ${details.name}`,
          name: details.name,
          email: details.email,
          replyto: details.email,
          organisation: details.company || "Not provided",
          enquiry_type: details.topic,
          message: details.message,
          "h-captcha-response": details.captchaToken,
        }),
      });

      if (response.status === 429) {
        return { success: false, message: "Too many submission attempts. Please wait before trying again, or email support@agriflock360.com. Your details are still here." };
      }

      const result: unknown = await response.json();
      if (!response.ok || typeof result !== "object" || result === null || !("success" in result) || result.success !== true) {
        return unconfirmedSubmission;
      }

      return { success: true };
    } catch {
      // Network failures and timeouts cannot confirm whether the provider received the enquiry.
      return unconfirmedSubmission;
    } finally {
      globalThis.clearTimeout(timeout);
    }
  },
};
