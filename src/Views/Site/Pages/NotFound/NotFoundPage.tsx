// CHECKED 1.0
import React from "react";

import { RouteComponentProps } from "Modules/Routing/RouteHandlers/_Interfaces/RouteComponentProps";
import { useDocTitle } from "Modules/Routing/RouteHandlers/Hooks/useDocTitle/useDocTitle";

export default function NotFoundPage({
  route,
  routeMapperProps,
}: RouteComponentProps) {
  useDocTitle(routeMapperProps.routes, route);

  return (
    <section className="notFoundPage">
      <header>
        <h3>Not found page</h3>
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
