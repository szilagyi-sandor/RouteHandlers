// CHECKED 1.0
import { Route } from "../../_Interfaces/Route";
import { Routes } from "../../_Interfaces/Routes";
import { getNestedItem } from "../Generic/getNestedItem";

export const getRouteDocTitle = (routes: Routes, route: Route): string => {
  const titles: string[] = [];

  const { processedInfo } = route;

  // Handling parent titles.
  if (processedInfo && processedInfo.parentSelectors) {
    processedInfo.parentSelectors.forEach((ps) => {
      const parentRoute = getNestedItem(routes, ps);

      if (parentRoute && parentRoute.documentTitle) {
        titles.push(parentRoute.documentTitle);
      }
    });
  }

  // Handling route title.
  if (route.documentTitle) {
    titles.push(route.documentTitle);
  }

  return titles.join("");
};
