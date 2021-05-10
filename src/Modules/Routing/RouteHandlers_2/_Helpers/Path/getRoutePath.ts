// CHECKED 1.0
import { Route } from "../../_Interfaces/Route";
import { getCombinations } from "../Generic/combinations";
import { getRouteFullPaths } from "./getRouteFullPath";

// Gets one route path that is selectable with the index.
export const getRoutePath = (
  routeObj: Record<string, Route>,
  route: Route,
  index?: number
): string => {
  const paths = getRouteFullPaths(routeObj, route);

  if (!paths || paths.length === 0) {
    // Fallback in case something goes wrong.
    return "/";
  }

  // If we have an index, we create all the combinations, and select the one given.
  if (index) {
    const combinations = getCombinations(paths);
    return combinations[index]
      ? combinations[index].join("")
      : combinations[0].join("");
  }

  // If there's no given index, we take the first paths. This is faster.
  return paths.map((p) => p[0]).join("");
};
