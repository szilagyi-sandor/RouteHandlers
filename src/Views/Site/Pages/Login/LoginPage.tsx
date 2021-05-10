// TODO: CHECK
import React from "react";

import { useAuthActionsContext } from "Modules/Auth/Context/AuthContext";
import { roles } from "Modules/Auth/_Constants/roles";
import { useHistory } from "react-router";
import { matchPath, useLocation } from "react-router-dom";
import { RouteComponentProps } from "Modules/Routing/RouteHandlers_2/_Interfaces/RouteComponentProps";

// TODO: A lot going on in here
export default function LoginPage(props: RouteComponentProps) {
  const setRoleId = useAuthActionsContext();

  const history = useHistory();
  const { pathname } = useLocation();
  // TODO:
  // useDocTitle(docTitle);

  // In a real application, this should be handled in the action, so it only redirects when
  // it's successful.
  const _setRoleId = (roleId: number) => {
    // TODO: This logic is missing
    // if (
    //   matchPath(pathname, {
    //     path: loginOwnPaths,
    //     exact: true,
    //   })
    // ) {
    //   history.push(getRoutePath(routes.home));
    // }

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
