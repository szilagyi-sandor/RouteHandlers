// CHECKED 1.0
import React from "react";

import { RouteComponentProps } from "Modules/Routing/RouteHandlers/_Interfaces/RouteComponentProps";
import { useDocTitle } from "Modules/Routing/RouteHandlers/Hooks/useDocTitle/useDocTitle";

export default function AdminHomePage({
  route,
  routeMapperProps,
}: RouteComponentProps) {
  useDocTitle(routeMapperProps.routes, route);

  return (
    <section className="adminHomePage">
      <header>
        <h3>Admin home page</h3>
      </header>

      <div className="content">
        <p>This is the Admin home page.</p>
      </div>
    </section>
  );
}
