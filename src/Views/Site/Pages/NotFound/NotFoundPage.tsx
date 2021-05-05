// CHECKED 1.0
import React from "react";

import { useDocTitle } from "Modules/Routing/RouteHandlers/Hooks/useDocTitle/useDocTitle";
import { PageProps } from "Modules/Routing/RouteHandlers/_Interfaces/PageProps";

export default function NotFoundPage({ docTitle }: PageProps) {
  useDocTitle(docTitle);

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
