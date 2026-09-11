import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Resets scroll position on route change — SPA navigation doesn't do this for free. */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
