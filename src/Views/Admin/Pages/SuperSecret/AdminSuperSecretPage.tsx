// TODO: CHECK
import React from "react";

import { RouteComponentProps } from "Modules/Routing/RouteHandlers_2/_Interfaces/RouteComponentProps";

export default function AdminSuperSecretPage(props: RouteComponentProps) {
  // TODO:
  // useDocTitle(docTitle);

  return (
    <section className="adminSuperSecretPage">
      <header>
        <h3>Admin super secret page</h3>
      </header>

      <div className="content">
        <p>This is the Admin super secret page.</p>
      </div>
    </section>
  );
}
