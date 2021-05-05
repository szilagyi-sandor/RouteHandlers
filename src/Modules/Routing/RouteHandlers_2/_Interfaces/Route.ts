import { Routes } from "./Routes";

export interface Route {
  // TODO:
  Component: any;
  // These are going to be concatenated with parents and children.
  paths: string[];
  // These are going to be concatenated as the path, just simply added.
  additionalFullPaths?: string[];
  // TODO:
  authRule?: any;
  notExact?: boolean;
  documentTitle?: string;
  _children?: Routes;
  // This will be added by the processRoutes function.
  proccessedInfo?: {
    parentSelectors?: string[][];
    childrenSelectors?: string[][];
    calculatedPaths?: string[];
  };
}
