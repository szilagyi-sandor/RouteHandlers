// CHECKED 1.0
import { AuthRule } from "./AuthRule";
import { RouteComponent } from "./RouteComponent";
import { Routes } from "./Routes";

export interface Route {
  Component: RouteComponent;
  // These are going to be concatenated with parents and children.
  paths?: string[];
  // These are not going to be concatenated as the path not even to the children, just simply added.
  additionalFullPaths?: string[];
  authRule?: AuthRule;
  notExact?: boolean;
  documentTitle?: string;
  _children?: Routes;

  // This will be added by the processRoutes function.
  processedInfo?: {
    parentSelectors?: string[][];
    childrenSelectors?: string[][];
    key: string;
  };
}
