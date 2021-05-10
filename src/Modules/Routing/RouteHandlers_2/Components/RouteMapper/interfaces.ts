import { SuspenseProps } from "react";
import { Routes } from "Modules/Routing/RouteHandlers_2/_Interfaces/Routes";

export interface RouteMapperProps {
  routes: Routes;
  currentRoutes?: Routes;
  suspenseFallback: SuspenseProps["fallback"];
  drilledProps?: Record<string, any>;

  // TODO: remove
  renderTest?: string;

  // TODO:
  // If this is false AutoMapper will not check authRules. If the value
  // is undefined it's treated as true.
  // autoCheckRules?: boolean;
  // authChecker?: AuthChecker;
}
