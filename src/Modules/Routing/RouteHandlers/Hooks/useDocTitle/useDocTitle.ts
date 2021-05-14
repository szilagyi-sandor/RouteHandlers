// CHECKED 1.0
import { useEffect } from "react";

import { getRouteDocTitle } from "../../_Helpers/Route/getRouteDocTitle";
import { Route } from "../../_Interfaces/Route";
import { Routes } from "../../_Interfaces/Routes";

export const useDocTitle = (
  routes?: Routes,
  route?: Route,
  addition?: string
) => {
  useEffect(() => {
    let title = "";
    if (routes && route) {
      title = getRouteDocTitle(routes, route);
    }

    if (addition) {
      title += ` addition`;
    }

    document.title = title;
  }, [routes, route, addition]);
};
