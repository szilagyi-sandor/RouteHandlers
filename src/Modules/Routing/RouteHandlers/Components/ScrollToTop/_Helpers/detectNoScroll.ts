// CHECKED 1.0
import { getRoutePaths } from "Modules/Routing/RouteHandlers/_Helpers/Path/getRoutePaths";
import { Route } from "Modules/Routing/RouteHandlers/_Interfaces/Route";
import { Routes } from "Modules/Routing/RouteHandlers/_Interfaces/Routes";
import { matchPath } from "react-router-dom";

export const detectNoScroll = (
  routes: Routes,
  routesToCheck: Route[],
  pathname: string,
  prevPath?: string
): boolean => {
  if (!prevPath) {
    return false;
  }

  for (let i = 0; i < routesToCheck.length; i++) {
    const routeToCheck = routesToCheck[i];
    const routePathsToCheck = getRoutePaths(routes, routeToCheck);

    if (routePathsToCheck) {
      const currentMatched = !!matchPath(pathname, {
        path: routePathsToCheck,
        exact: true,
      });

      const prevMatched = !!matchPath(prevPath, {
        path: routePathsToCheck,
        exact: true,
      });

      if (currentMatched && prevMatched) {
        return true;
      }
    }
  }

  return false;
};
