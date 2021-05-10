import { RouteComponent } from "./RouteComponent";
import { Routes } from "./Routes";

// TODO: Test: Component should be able to get simple/lazyloaded components
export interface Route {
  // TODO: WAS HERE. Create the lazy loading part and make sure this interface works properly.
  Component: RouteComponent;
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
  processedInfo?: {
    parentSelectors?: string[][];
    childrenSelectors?: string[][];
  };
}
