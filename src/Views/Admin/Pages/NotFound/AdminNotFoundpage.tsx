// CHECKED 1.0
import React from "react";

import { useDocTitle } from "Modules/Routing/RouteHandlers/Hooks/useDocTitle/useDocTitle";
import { RouteComponentProps } from "Modules/Routing/RouteHandlers/_Interfaces/RouteComponentProps";

export default function AdminNotFoundPage({
  route,
  routeMapperProps,
}: RouteComponentProps) {
  useDocTitle(routeMapperProps.routes, route);

  return (
    <section className="adminNotFoundPage">
      <header>
        <h3>Admin not found page</h3>
      </header>

      <div className="content">
        <p>
          The link is incorrect or the page has been removed. Make sure the link
          you are trying to open is correct.
        </p>
      </div>
    </section>
  );
}
