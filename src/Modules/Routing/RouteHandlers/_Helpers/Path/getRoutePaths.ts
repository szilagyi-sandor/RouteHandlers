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
): string[] | undefined => {
  const fullPaths = getRouteFullPaths(routeObj, route);

  const output = [
    ...(fullPaths ? getCombinations(fullPaths).map((p) => p.join("")) : []),
    ...(route.additionalFullPaths ? route.additionalFullPaths : []),
  ];

  // If the Route has no path (which might happen if it or one of its parent has no own path defined or selectors are not valid)
  // and no additionalFullPaths is added we return undefined.
  return output.length > 0 ? output : undefined;
};
