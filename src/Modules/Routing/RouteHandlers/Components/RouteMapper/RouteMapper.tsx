// CHECKED 1.0
import React from "react";

import { RouteMapperProps } from "./interfaces";
import { Route, Switch } from "react-router-dom";
import { getRoutePaths } from "../../_Helpers/Path/getRoutePaths";
import RCRenderer from "./Parts/RCRenderer/RCRenderer";

export default function RouteMapper(props: RouteMapperProps) {
  const { routes, currentRoutes, authChecker } = props;
  const _currentRoutes = currentRoutes ? currentRoutes : routes;

  return (
    <Switch>
      {Object.keys(_currentRoutes).map((routeKey, index) => {
        const route = _currentRoutes[routeKey];

        const { notExact } = route;
        const path = getRoutePaths(routes, route);

        // Not rendering the routes that has no path or do not pass the auth check.
        if (!path || (authChecker && !authChecker(route))) {
          return null;
        }

        return (
          <Route key={index} path={path} exact={!notExact}>
            <RCRenderer route={route} routeMapperProps={props} />
          </Route>
        );
      })}
    </Switch>
  );
}
