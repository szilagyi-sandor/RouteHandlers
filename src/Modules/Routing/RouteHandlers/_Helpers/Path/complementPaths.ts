// CHECKED 1.0
import { getCombinations } from "../Generic/combinations";

export const complementPaths = (
  complement: string[],
  routePath?: string[]
): string[] => {
  if (!routePath) {
    // In case the route has no path on it's own, we simply return the complement value.
    return complement;
  }

  return getCombinations([routePath, complement]).map((c) => c.join(""));
};
