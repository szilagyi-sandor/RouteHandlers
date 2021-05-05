// CHECKED 1.0
import { Routes } from "../_Interfaces/Routes";

// The parentPaths order matters here.
export const createFullRoutePathObj = <T extends Record<string, Routes>>(
  layoutPaths: string[][],
  routePathObj: T
): Record<keyof T, string[][]> => {
  const output = {} as Record<keyof T, string[][]>;

  Object.keys(routePathObj).forEach((key: keyof T) => {
    output[key] = [...layoutPaths, routePathObj[key].path];
  });

  return output;
};
