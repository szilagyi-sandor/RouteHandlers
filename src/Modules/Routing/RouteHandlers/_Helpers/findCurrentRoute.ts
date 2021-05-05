// CHECKED 1.0
import { matchPath } from "react-router-dom";
import { Routes } from "../_Interfaces/Routes";

// The order of the routes matter here, since this will return the first that matches the pathname.
export const findCurrentRoute = (routes: Routes, pathname: string) => {
  const keys = Object.keys(routes);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const route = routes[key];

    const matched = !!matchPath(pathname, {
      path: route,
      exact: true,
    });

    if (matched) {
      return { key, route };
    }
  }

  return undefined;
};
