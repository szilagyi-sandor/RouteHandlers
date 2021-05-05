// CHECKED 1.0
import { getCombinations } from "./combinations";

export const convertToRoutePathObj = <T extends Record<string, string[][]>>(
  routePathObj: T
): Record<keyof T, string[]> => {
  let output = {} as Record<keyof T, string[]>;

  Object.keys(routePathObj).forEach((key: keyof T) => {
    output[key] = [
      ...getCombinations(routePathObj[key]).map((c) => c.join("")),
    ];
  });

  return output;
};
