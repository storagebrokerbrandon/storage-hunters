import { track } from "@vercel/analytics";

// Central event tracking. Add Google Analytics / Meta Pixel calls here later
// and every CTA and form on the site picks them up automatically.
export function trackEvent(
  name: string,
  props?: Record<string, string | number | boolean>
) {
  try {
    track(name, props);
  } catch {
    // analytics should never break the UI
  }
}
