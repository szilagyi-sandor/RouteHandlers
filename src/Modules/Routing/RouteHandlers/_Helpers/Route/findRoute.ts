// CHECKED 1.0
import { matchPath } from "react-router-dom";
import { Route } from "../../_Interfaces/Route";
import { Routes } from "../../_Interfaces/Routes";
import { getRoutePaths } from "../Path/getRoutePaths";

export const findRoute = (
  routes: Routes,
  pathname: string,
  authChecker?: { (route: Route): boolean },
  currentRoutes?: Routes
): Route | undefined => {
  const _currentRoutes = currentRoutes || routes;
  const keys = Object.keys(_currentRoutes);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const route = _currentRoutes[key];
    const { authRule, _children } = route;

    const routePath = getRoutePaths(routes, route);

    if (routePath) {
      const matched = !!matchPath(pathname, {
        path: routePath,
        exact: !route.notExact,
      });

      const authPassed = authChecker && authRule ? authChecker(route) : true;

      if (matched && authPassed) {
        if (_children) {
          return findRoute(routes, pathname, authChecker, _children);
        } else {
          // The route matched, passed the authcheck and has no children.
          return route;
        }
      }
    }
  }

  return undefined;
};
