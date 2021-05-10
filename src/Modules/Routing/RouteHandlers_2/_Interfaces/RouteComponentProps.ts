import { RouteMapperProps } from "../Components/RouteMapper/interfaces";
import { Route } from "./Route";

// TODO: Should be routeCompProps
// TODO: Add and check drilledProps
export interface RouteComponentProps {
  routeMapperProps: RouteMapperProps;
  route: Route;
}
