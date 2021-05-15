// CHECKED 1.0
import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import { detectNoScroll } from "./_Helpers/detectNoScroll";
import { ScrollToTopProps } from "./interfaces";

export default function ScrollToTop({
  routes,
  noScrollRoutes,
}: ScrollToTopProps) {
  const { pathname } = useLocation();
  const [previousPath, setPreviousPath] = useState<string>();

  useEffect(() => {
    if (previousPath !== pathname) {
      let noScroll =
        routes && noScrollRoutes
          ? detectNoScroll(routes, noScrollRoutes, pathname, previousPath)
          : false;

      if (!noScroll) {
        window.scrollTo(0, 0);
      }

      setPreviousPath(pathname);
    }
  }, [pathname, previousPath, routes, noScrollRoutes]);

  return null;
}
