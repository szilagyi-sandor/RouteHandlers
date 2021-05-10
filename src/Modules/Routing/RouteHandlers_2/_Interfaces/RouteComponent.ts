import { ComponentType } from "react";
import { RouteComponentProps } from "./RouteComponentProps";

export type RouteComponent =
  | React.LazyExoticComponent<ComponentType<RouteComponentProps>>
  | ComponentType<RouteComponentProps>;
