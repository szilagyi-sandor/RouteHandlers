// CHECKED 1.0
import { Route } from "../../_Interfaces/Route";
import { getCombinations } from "../Generic/combinations";
import { getRouteFullPaths } from "./getRouteFullPath";

// Gets all route paths and return them concatenated.
// This is the only path handler that handles the additionalFullPaths
// property automatically.
export const getRoutePaths = (
  routeObj: Record<string, Route>,
  route: Route
): string[] => {
  const fullPaths = getRouteFullPaths(routeObj, route);

  if (!fullPaths || fullPaths.length === 0) {
    // Fallback in case something goes wrong.
    return ["/"];
  }

  return [
    ...getCombinations(fullPaths).map((p) => p.join("")),
    ...(route.additionalFullPaths ? route.additionalFullPaths : []),
  ];
};
