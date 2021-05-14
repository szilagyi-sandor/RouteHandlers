// CHECKED 1.0
import React from "react";

import { useDocTitle } from "Modules/Routing/RouteHandlers/Hooks/useDocTitle/useDocTitle";
import { RouteComponentProps } from "Modules/Routing/RouteHandlers/_Interfaces/RouteComponentProps";

export default function RestrictedPage({
  route,
  routeMapperProps,
}: RouteComponentProps) {
  useDocTitle(routeMapperProps.routes, route);

  return (
    <section className="restrictedPage">
      <header>
        <h3>Resticted page</h3>
      </header>

      <div className="content">
        <p>This is the restricted page.</p>
      </div>
    </section>
  );
}
