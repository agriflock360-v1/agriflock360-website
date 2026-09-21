import { useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

interface SpamProtectionProps {
  onVerify: (token: string) => void;
}

// Public site key documented by Web3Forms for its managed hCaptcha integration.
const web3FormsSiteKey = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";

export function SpamProtection({ onVerify }: SpamProtectionProps) {
  const [status, setStatus] = useState("Loading security check…");
  const [failed, setFailed] = useState(false);
  const [attempt, setAttempt] = useState(0);

  const expire = () => {
    onVerify("");
    setStatus("Your security check expired. Please complete it again.");
  };

  return (
    <div className="my-5 space-y-3" aria-label="Form security check">
      <HCaptcha
        key={attempt}
        sitekey={web3FormsSiteKey}
        reCaptchaCompat={false}
        sentry={false}
        userJourneys={false}
        size="compact"
        onReady={() => { setFailed(false); setStatus("Complete the security check before sending."); }}
        onVerify={token => { setFailed(false); setStatus("Security check complete."); onVerify(token); }}
        onExpire={expire}
        onChalExpired={expire}
        onError={() => {
          onVerify("");
          setFailed(true);
          setStatus("The security check could not load. Retry or email support@agriflock360.com.");
        }}
      />
      <p className="text-sm text-muted-foreground" role="status" aria-live="polite">{status}</p>
      {failed && <button type="button" className="text-sm underline underline-offset-4" onClick={() => {
        onVerify("");
        setFailed(false);
        setStatus("Loading security check…");
        setAttempt(value => value + 1);
      }}>Retry security check</button>}
      <p className="text-xs text-muted-foreground">
        Protected by hCaptcha. <a href="https://www.hcaptcha.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">Privacy</a> and <a href="https://www.hcaptcha.com/terms" target="_blank" rel="noopener noreferrer" className="underline">Terms</a> apply.
      </p>
    </div>
  );
}
