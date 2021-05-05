// CHECKED 1.0
import React from "react";

import { useDocTitle } from "Modules/Routing/RouteHandlers/Hooks/useDocTitle/useDocTitle";
import { PageProps } from "Modules/Routing/RouteHandlers/_Interfaces/PageProps";
import { useAuthActionsContext } from "Modules/Auth/Context/AuthContext";
import { roles } from "Modules/Auth/_Constants/roles";
import { useHistory } from "react-router";
import { matchPath, useLocation } from "react-router-dom";
import { loginOwnPaths } from "Modules/Routing/Routes/Parts/Site/_Constants/siteRoutes";
import { getRoutePath } from "Modules/Routing/RouteHandlers/_Helpers/getRoutePath";
import { routes } from "Modules/Routing/Routes/_Constants/routes";

export default function LoginPage({ docTitle }: PageProps) {
  const setRoleId = useAuthActionsContext();

  const history = useHistory();
  const { pathname } = useLocation();
  useDocTitle(docTitle);

  // In a real application, this should be handled in the action, so it only redirects when
  // it's successful.
  const _setRoleId = (roleId: number) => {
    if (
      matchPath(pathname, {
        path: loginOwnPaths,
        exact: true,
      })
    ) {
      history.push(getRoutePath(routes.home));
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
            const role = (roles as Record<
              string,
              { id: number; value: string; name: string }
            >)[key];

            return (
              <div>
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
