// CHECKED 1.0
import { Route } from "../../_Interfaces/Route";
import { Routes } from "../../_Interfaces/Routes";

export interface ScrollToTopProps {
  routes?: Routes;
  // The component saves the previous pathname and if both the previous and the
  // current pathname matches the same route then the scrolling is not triggered.
  noScrollRoutes?: Route[];
}
