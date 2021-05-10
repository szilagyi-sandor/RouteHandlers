// TODO: CHECK
import React, { useEffect } from "react";

import { generatePath, Link } from "react-router-dom";
import { roles } from "Modules/Auth/_Constants/roles";
import {
  useAuthActionsContext,
  useAuthContext,
} from "Modules/Auth/Context/AuthContext";
import { RouteComponentProps } from "Modules/Routing/RouteHandlers_2/_Interfaces/RouteComponentProps";
import { routePaths } from "Modules/Routing/_Constants/routePaths";
import RouteMapper from "Modules/Routing/RouteHandlers_2/Components/RouteMapper/RouteMapper";

// If the links are filtered based on the roleId or something, it should be stored in state,
// and a helper function should create that array of links. This is good because it's possible that
// we always want to show the admin link but when the user is not logged in it will render the login page.
export default function RootLayout(props: RouteComponentProps) {
  const roleId = useAuthContext();
  const setRoleId = useAuthActionsContext();

  useEffect(() => {
    console.log("rootlayout render");
  }, [props]);

  return (
    <section className="rootLayout">
      <header>
        <h1>Root</h1>

        {roleId > roles.visitor.id && (
          <div>
            <div>Logged in, roleId: {roleId}</div>

            <div>
              <button onClick={() => setRoleId(roles.visitor.id)}>
                log out
              </button>
            </div>
          </div>
        )}

        <nav>
          <ul>
            <li>
              <Link to={routePaths.home}>home</Link>
            </li>

            <li>
              <Link to={routePaths.login}>login</Link>
            </li>

            <li>
              <Link to={routePaths.adminHome}>adminHome</Link>
            </li>

            <li>
              <Link
                to={generatePath(routePaths.superSecret, {
                  id: 42,
                })}
              >
                adminSuperSecret
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="content">
        <RouteMapper {...props.routeMapperProps} />
      </main>

      <footer>
        <p>This is the root layout footer.</p>
      </footer>
    </section>
  );
}
