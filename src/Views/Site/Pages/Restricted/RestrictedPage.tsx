// CHECKED 1.0
import React from "react";

import { useDocTitle } from "Modules/Routing/RouteHandlers/Hooks/useDocTitle/useDocTitle";
import { PageProps } from "Modules/Routing/RouteHandlers/_Interfaces/PageProps";

export default function RestrictedPage({ docTitle }: PageProps) {
  useDocTitle(docTitle);

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
