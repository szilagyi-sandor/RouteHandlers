import { Route } from "Modules/Routing/RouteHandlers_2/_Interfaces/Route";
import { RouteComponent } from "Modules/Routing/RouteHandlers_2/_Interfaces/RouteComponent";
import { RouteMapperProps } from "../../interfaces";

export interface RCRendererProps {
  routeMapperProps: RouteMapperProps;
  route: Route;
  RouteComponent: RouteComponent;
}
