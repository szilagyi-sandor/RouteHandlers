// TODO: CHECK
import React from "react";

import { RouteComponentProps } from "Modules/Routing/RouteHandlers_2/_Interfaces/RouteComponentProps";

export default function AdminRestrictedPage(props: RouteComponentProps) {
  // TODO:
  // useDocTitle(docTitle);

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
