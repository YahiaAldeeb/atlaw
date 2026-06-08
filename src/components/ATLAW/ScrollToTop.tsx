import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// On every route change, send the visitor to the top of the next page.
// Exception: when the URL carries a hash (e.g. /#global-reach), scroll to that
// section instead so in-page anchors still work.
export const ScrollToTop = (): null => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
};
