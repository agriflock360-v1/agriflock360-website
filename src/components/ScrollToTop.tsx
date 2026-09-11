import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // Run after route content has mounted, including direct section links.
    const frame = window.requestAnimationFrame(() => {
      let id = hash.slice(1);
      try { id = decodeURIComponent(id); } catch { /* Use a literal malformed hash. */ }
      const target = id ? document.getElementById(id) : null;
      if (target) {
        target.scrollIntoView({ block: "start", behavior: "instant" });
        target.focus({ preventScroll: true });
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }
    });
    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash, key]);

  return null;
}
