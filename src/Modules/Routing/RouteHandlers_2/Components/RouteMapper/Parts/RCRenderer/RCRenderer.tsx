import React, { useEffect, useMemo, useRef } from "react";

import { RCRendererProps } from "./interfaces";

// This renders the routeComponent with memoized objects to prevent rerenders.
export default function RCRenderer({
  RouteComponent,
  route,
  routeMapperProps,
}: RCRendererProps) {
  // const _routeMapperProps = useMemo(
  //   () => ({
  //     ...routeMapperProps,
  //     currentRoutes: route._children ? route._children : {},
  //     renderTest: undefined,
  //   }),
  //   [routeMapperProps, route]
  // );

  useEffect(() => {
    if (routeMapperProps.renderTest) {
      console.log(`RCRenderer - ${routeMapperProps.renderTest}`);
    }
  });

  const _routeMapperProps = useRef({
    ...routeMapperProps,
    currentRoutes: route._children ? route._children : {},
    renderTest: undefined,
  });

  const _route = useRef(route);

  return (
    <RouteComponent
      routeMapperProps={_routeMapperProps.current}
      route={_route.current}
    />
  );
}
