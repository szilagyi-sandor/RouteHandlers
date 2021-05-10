// TODO: CHECK
import React from "react";

import { RouteComponentProps } from "Modules/Routing/RouteHandlers_2/_Interfaces/RouteComponentProps";

export default function AdminNotFoundPage(props: RouteComponentProps) {
  // TODO:
  // useDocTitle(docTitle);

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
