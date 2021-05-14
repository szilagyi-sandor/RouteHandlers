// CHECKED 1.0
import React, { Suspense, useCallback, useMemo } from "react";

import { useAuthContext } from "Modules/Auth/Context/AuthContext";
import { checkAuth } from "Modules/Auth/_Helpers/authCheckers";
import RouteMapper from "../RouteHandlers/Components/RouteMapper/RouteMapper";
import { Route } from "../RouteHandlers/_Interfaces/Route";
import { routes } from "../_Constants/routes";

export default function Routes() {
  const roleId = useAuthContext();
  const _drilledProps = useMemo(() => ({ test: "test" }), []);
  const authChecker = useCallback(
    (route: Route) => {
      return checkAuth(roleId, route.authRule);
    },
    [roleId]
  );

  return (
    <Suspense fallback={"App loading..."}>
      <RouteMapper
        routes={routes}
        drilledProps={_drilledProps}
        authChecker={authChecker}
      />
    </Suspense>
  );
}
