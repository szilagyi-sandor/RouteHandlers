// TODO: CHECK
import React from "react";

import { RouteComponentProps } from "Modules/Routing/RouteHandlers_2/_Interfaces/RouteComponentProps";
import RouteMapper from "Modules/Routing/RouteHandlers_2/Components/RouteMapper/RouteMapper";

export default function AdminLayout(props: RouteComponentProps) {
  return (
    <section className="adminLayout">
      <header>
        <h2>Admin</h2>
      </header>

      <main className="content">
        <RouteMapper {...props.routeMapperProps} />
      </main>

      <footer>
        <p>This is the Admin layout footer.</p>
      </footer>
    </section>
  );
}
