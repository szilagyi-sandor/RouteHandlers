// TODO: CHECK
import React from "react";

import { RouteComponentProps } from "Modules/Routing/RouteHandlers_2/_Interfaces/RouteComponentProps";

export default function RestrictedPage(props: RouteComponentProps) {
  // TODO:
  // useDocTitle(docTitle);

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
