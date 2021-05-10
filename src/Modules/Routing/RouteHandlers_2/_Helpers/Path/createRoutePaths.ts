// CHECKED 1.0

import { Route } from "../../_Interfaces/Route";
import { getRoutePath } from "./getRoutePath";

// Creates an object with the same attributes as the param but the values
// are the first path of the corresponding route.
export const createRoutePaths = <T extends Record<string, Route>>(
  routeObj: Record<string, Route>,
  param: T
): Record<keyof T, string> => {
  const output = {} as Record<keyof T, string>;

  Object.keys(param).forEach((key: keyof T) => {
    output[key] = getRoutePath(routeObj, param[key]);
  });

  return output;
};
