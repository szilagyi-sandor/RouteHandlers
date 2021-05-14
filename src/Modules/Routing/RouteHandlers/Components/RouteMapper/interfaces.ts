// CHECKED 1.0
import { Routes } from "Modules/Routing/RouteHandlers/_Interfaces/Routes";
import { Route } from "../../_Interfaces/Route";

export interface RouteMapperProps {
  routes: Routes;
  currentRoutes?: Routes;
  // Should be memoized to prevent unnecessary rerenders.
  drilledProps?: Record<string, any>;
  // Should be memoized to prevent unnecessary rerenders.
  authChecker?: (route: Route) => boolean;
}
