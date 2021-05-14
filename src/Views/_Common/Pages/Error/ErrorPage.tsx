// CHECKED 1.0
import React from "react";

import { useDocTitle } from "Modules/Routing/RouteHandlers/Hooks/useDocTitle/useDocTitle";

export default function ErrorPage() {
  useDocTitle(undefined, undefined, "RouteHandlers Error");

  return (
    <section className="errorPage">
      <header>
        <h1>Error page</h1>
      </header>

      <div className="content">
        <p>Sorry, something went wrong.</p>
      </div>
    </section>
  );
}
