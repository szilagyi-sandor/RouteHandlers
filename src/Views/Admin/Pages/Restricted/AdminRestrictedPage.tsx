// CHECKED 1.0
import React from "react";

import { RouteComponentProps } from "Modules/Routing/RouteHandlers/_Interfaces/RouteComponentProps";
import { useDocTitle } from "Modules/Routing/RouteHandlers/Hooks/useDocTitle/useDocTitle";

export default function AdminRestrictedPage({
  route,
  routeMapperProps,
}: RouteComponentProps) {
  useDocTitle(routeMapperProps.routes, route);

  return (
    <section className="adminRestrictedPage">
      <header>
        <h3>Admin resticted page</h3>
      </header>

      <div className="content">
        <p>This is the admin restricted page.</p>
      </div>
    </section>
  );
}
