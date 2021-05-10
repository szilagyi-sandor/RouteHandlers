// CHECKED 1.0
import { Route } from "../../_Interfaces/Route";

// Gets all the paths properties from a list of routes and returns them in an array.
// This is used as a helper function in internal helpers.
export const getPathsListFromRouteList = (routeList: Route[]): string[][] => {
  const output: string[][] = [];

  for (let i = 0; i < routeList.length; i++) {
    const route = routeList[i];

    if (route.paths.length === 0) {
      output.push([""]);
    } else {
      output.push(route.paths);
    }
  }

  return output;
};
