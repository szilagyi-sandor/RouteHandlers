// CHECKED 1.0
import React, { lazy } from "react";

import { Route, Switch } from "react-router-dom";
import SiteLayout from "Views/Site/Layout/SiteLayout";
import { siteRoutes } from "./_Constants/siteRoutes";
import { useAuthContext } from "Modules/Auth/Context/AuthContext";
import { checkAuth } from "Modules/Auth/_Helpers/authCheckers";
import { OnlyVisitorAR } from "Modules/Auth/_Constants/authRules";

const HomePage = lazy(() => import("Views/Site/Pages/Home/HomePage"));
const LoginPage = lazy(() => import("Views/Site/Pages/Login/LoginPage"));
const RestrictedPage = lazy(
  () => import("Views/Site/Pages/Restricted/RestrictedPage")
);
const NotFoundPage = lazy(
  () => import("Views/Site/Pages/NotFound/NotFoundPage")
);

export default function SiteRoutes() {
  const roleId = useAuthContext();

  return (
    <SiteLayout>
      <Switch>
        <Route path={siteRoutes.home} exact>
          <HomePage docTitle="Home - RouteHandlers" />
        </Route>

        {checkAuth(OnlyVisitorAR, roleId) && (
          <Route path={siteRoutes.login} exact>
            <LoginPage docTitle="Login - RouteHandlers" />
          </Route>
        )}

        <Route path={siteRoutes.restrictedPage} exact>
          <RestrictedPage docTitle="Restricted - RouteHandlers" />
        </Route>

        <Route>
          <NotFoundPage docTitle="Not found - RouteHandlers" />
        </Route>
      </Switch>
    </SiteLayout>
  );
}