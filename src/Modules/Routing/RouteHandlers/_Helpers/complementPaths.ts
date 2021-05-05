// CHECKED 1.0
import { getCombinations } from "./combinations";

export const complementPaths = (route: string[], complement: string[]) =>
  getCombinations([route, complement]).map((c) => c.join(""));
