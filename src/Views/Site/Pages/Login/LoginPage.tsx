// CHECKED 1.0
import React from "react";

import { useAuthActionsContext } from "Modules/Auth/Context/AuthContext";
import { roles } from "Modules/Auth/_Constants/roles";
import { RouteComponentProps } from "Modules/Routing/RouteHandlers/_Interfaces/RouteComponentProps";
import { useDocTitle } from "Modules/Routing/RouteHandlers/Hooks/useDocTitle/useDocTitle";
import { matchPath, useHistory, useLocation } from "react-router-dom";
import { getRoutePath } from "Modules/Routing/RouteHandlers/_Helpers/Path/getRoutePath";
import { routes } from "Modules/Routing/_Constants/routes";
import { getRoutePaths } from "Modules/Routing/RouteHandlers/_Helpers/Path/getRoutePaths";

export default function LoginPage({
  route,
  routeMapperProps,
}: RouteComponentProps) {
  useDocTitle(routeMapperProps.routes, route);

  const setRoleId = useAuthActionsContext();
  const history = useHistory();
  const { pathname } = useLocation();

  const { site } = routes.root._children;
  const { home, login } = site._children;

  const _setRoleId = (roleId: number) => {
    if (
      matchPath(pathname, {
        path: getRoutePaths(routes, login),
        exact: true,
      })
    ) {
      // In a real application, this should be handled in the action, so it only redirects when
      // it's successful.
      history.push(getRoutePath(routes, home));
    }

    setRoleId(roleId);
  };

  return (
    <section className="loginPage">
      <header>
        <h3>Login page</h3>
      </header>

      <div className="content">
        <p>This is the login page.</p>

        {Object.keys(roles)
          .filter((key) => key !== "visitor" && key !== "unknown")
          .map((key) => {
            // EnumObject helper from BLC can be used here.
            const role = (
              roles as Record<
                string,
                { id: number; value: string; name: string }
              >
            )[key];

            return (
              <div key={role.id}>
                <button onClick={() => _setRoleId(role.id)}>
                  Login as {role.name}
                </button>
              </div>
            );
          })}
      </div>
    </section>
  );
}
