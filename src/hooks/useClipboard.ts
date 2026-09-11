import { useCallback, useState } from "react";

/**
 * Copies text to the clipboard and reports a transient "copied" state,
 * useful for driving a button label change without extra bookkeeping.
 */
export function useClipboard(resetAfterMs = 1800) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(
    async (text: string) => {
      // Prefer the async Clipboard API, but browsers/sandboxes that deny it
      // (missing permission, non-secure context, restrictive iframe) still
      // deserve a working copy button — fall back to the legacy textarea trick.
      let ok = false;
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(text);
          ok = true;
        }
      } catch {
        ok = false;
      }

      if (!ok) {
        try {
          const textarea = document.createElement("textarea");
          textarea.value = text;
          textarea.style.position = "fixed";
          textarea.style.opacity = "0";
          document.body.appendChild(textarea);
          textarea.select();
          ok = document.execCommand("copy");
          document.body.removeChild(textarea);
        } catch {
          ok = false;
        }
      }

      if (ok) {
        setCopied(true);
        window.setTimeout(() => setCopied(false), resetAfterMs);
      }
      return ok;
    },
    [resetAfterMs],
  );

  return { copied, copy };
}
