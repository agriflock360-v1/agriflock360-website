export interface ContactEnquiry {
  name: string;
  email: string;
  company: string;
  topic: string;
  message: string;
}

type ContactSubmissionResult = { success: true } | { success: false; message: string };

// Public Web3Forms client key supplied for support@agriflock360.com.
const contactAccessKey = "b581fbf8-8a13-4fd2-ac6c-a5223e07e927";
const unconfirmedSubmission: ContactSubmissionResult = {
  success: false,
  message: "We couldn’t confirm your submission. Your details are still here. Please try again or email support@agriflock360.com.",
};

export const contactApi = {
  async submitEnquiry(enquiry: ContactEnquiry): Promise<ContactSubmissionResult> {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 20000);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          access_key: contactAccessKey,
          from_name: "AgriFlock 360 Website",
          subject: `AgriFlock 360: ${enquiry.topic} — ${enquiry.name.trim()}`,
          name: enquiry.name.trim(),
          email: enquiry.email.trim(),
          replyto: enquiry.email.trim(),
          organisation: enquiry.company.trim() || "Not provided",
          enquiry_type: enquiry.topic,
          message: enquiry.message.trim(),
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
      window.clearTimeout(timeout);
    }
  },
};
