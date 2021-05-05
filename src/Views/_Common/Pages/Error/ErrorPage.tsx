// CHECKED 1.0
import React from "react";

import { useDocTitle } from "Modules/Routing/RouteHandlers/Hooks/useDocTitle/useDocTitle";
import { PageProps } from "Modules/Routing/RouteHandlers/_Interfaces/PageProps";

export default function ErrorPage({ docTitle }: PageProps) {
  useDocTitle(docTitle);

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
