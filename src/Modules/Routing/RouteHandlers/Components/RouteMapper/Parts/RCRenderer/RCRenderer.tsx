// CHECKED 1.0
import React, { useMemo } from "react";

import { RCRendererProps } from "./interfaces";
import RouteMapper from "../../RouteMapper";

// This renders the routeComponent with memoized objects to prevent rerenders.
export default function RCRenderer({
  route,
  routeMapperProps,
}: RCRendererProps) {
  const { _children, Component: RouteComponent } = route;

  const _routeMapperProps = useMemo(
    () => ({
      ...routeMapperProps,
      currentRoutes: _children ? _children : {},
    }),
    [routeMapperProps, _children]
  );

  return (
    <RouteComponent routeMapperProps={_routeMapperProps} route={route}>
      {_children && <RouteMapper {..._routeMapperProps} />}
    </RouteComponent>
  );
}
