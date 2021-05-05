// CHECKED 1.0
import React, { PropsWithChildren, Suspense } from "react";

import { getRoutePath } from "Modules/Routing/RouteHandlers/_Helpers/getRoutePath";
import { routes } from "Modules/Routing/Routes/_Constants/routes";
import { generatePath, Link } from "react-router-dom";
import { roles } from "Modules/Auth/_Constants/roles";
import {
  useAuthActionsContext,
  useAuthContext,
} from "Modules/Auth/Context/AuthContext";

// If the links are filtered based on the roleId or something, it should be stored in state,
// and a helper function should create that array of links. This is good because it's possible that
// we always want to show the admin link but when the user is not logged in it will render the login page.
export default function RootLayout({ children }: PropsWithChildren<{}>) {
  const roleId = useAuthContext();
  const setRoleId = useAuthActionsContext();

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
              <Link to={getRoutePath(routes.home)}>home</Link>
            </li>

            <li>
              <Link to={getRoutePath(routes.login)}>login</Link>
            </li>

            <li>
              <Link to={getRoutePath(routes.adminHome)}>adminHome</Link>
            </li>

            <li>
              <Link
                to={generatePath(getRoutePath(routes.adminSuperSecret), {
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
        <Suspense fallback="Root layout loading...">{children}</Suspense>
      </main>

      <footer>
        <p>This is the root layout footer.</p>
      </footer>
    </section>
  );
}
