// CHECKED 1.0
import React, { lazy } from "react";

import { useAuthContext } from "Modules/Auth/Context/AuthContext";
import { adminRequiredAR } from "Modules/Auth/_Constants/authRules";
import { checkAuth } from "Modules/Auth/_Helpers/authCheckers";
import { Switch } from "react-router";
import { Route } from "react-router-dom";
import RootLayout from "Views/_Common/Layouts/_Root/RootLayout";
import { getLayoutPaths } from "../RouteHandlers/_Helpers/getLayoutPath";
import { adminRoutes } from "./Parts/Admin/_Constants/adminRoutes";

const AdminRoutes = lazy(() => import("./Parts/Admin/AdminRoutes"));
const SiteRoutes = lazy(() => import("./Parts/Site/SiteRoutes"));

export default function Routes() {
  const roleId = useAuthContext();

  return (
    <RootLayout>
      <Switch>
        {checkAuth(adminRequiredAR, roleId) && (
          <Route path={getLayoutPaths(adminRoutes)}>
            <AdminRoutes />
          </Route>
        )}

        <Route>
          <SiteRoutes />
        </Route>
      </Switch>
    </RootLayout>
  );
}
