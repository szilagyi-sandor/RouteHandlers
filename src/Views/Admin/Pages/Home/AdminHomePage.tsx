// TODO: CHECK
import React from "react";

import { RouteComponentProps } from "Modules/Routing/RouteHandlers_2/_Interfaces/RouteComponentProps";

export default function AdminHomePage(props: RouteComponentProps) {
  // TODO:
  // useDocTitle(docTitle);

  return (
    <section className="adminHomePage">
      <header>
        <h3>Admin home page</h3>
      </header>

      <div className="content">
        <p>This is the Admin home page.</p>
      </div>
    </section>
  );
}
