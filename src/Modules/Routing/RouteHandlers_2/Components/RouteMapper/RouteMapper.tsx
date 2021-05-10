import React, { Suspense, useEffect } from "react";

import { RouteMapperProps } from "./interfaces";
import { Route, Switch } from "react-router-dom";
import { getRoutePaths } from "../../_Helpers/Path/getRoutePaths";
import RCRenderer from "./Parts/RCRenderer/RCRenderer";

// TODO: RuleChecks
// TODO: override props in layouts
export default function RouteMapper(props: RouteMapperProps) {
  const { routes, currentRoutes, suspenseFallback, renderTest } = props;
  const _currentRoutes = currentRoutes ? currentRoutes : routes;

  useEffect(() => {
    if (renderTest) {
      console.log(renderTest);
    }
  });

  return (
    <Suspense fallback={suspenseFallback}>
      <Switch>
        {Object.keys(_currentRoutes).map((routeKey, index) => {
          const route = _currentRoutes[routeKey];

          const { Component: RouteComponent, notExact } = route;
          const path = getRoutePaths(routes, route);

          return (
            <Route
              key={index}
              path={path}
              render={() => (
                <RCRenderer
                  RouteComponent={RouteComponent}
                  route={route}
                  routeMapperProps={props}
                />
              )}
              exact={!notExact}
            />
          );
        })}
      </Switch>
    </Suspense>
  );
}
