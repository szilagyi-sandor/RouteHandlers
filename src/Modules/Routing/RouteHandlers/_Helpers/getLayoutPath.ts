// CHECKED 1.0
import { Routes } from "../_Interfaces/Routes";

export const getLayoutPaths = (
  routes: Routes,
  additional: string[] = []
): string[] => {
  const output: string[] = [...additional];

  Object.keys(routes).forEach((key) => {
    routes[key].forEach((p) => output.push(p));
  });

  return output;
};
