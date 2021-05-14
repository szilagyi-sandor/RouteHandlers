// CHECKED 1.0
import { PropsWithChildren } from "react";
import { RouteMapperProps } from "../Components/RouteMapper/interfaces";
import { Route } from "./Route";

export type RouteComponentProps = PropsWithChildren<{
  routeMapperProps: RouteMapperProps;
  route: Route;
}>;
