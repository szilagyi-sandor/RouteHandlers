// TODO: CHECK
import React, { useEffect } from "react";

import { RouteComponentProps } from "Modules/Routing/RouteHandlers_2/_Interfaces/RouteComponentProps";
import RouteMapper from "Modules/Routing/RouteHandlers_2/Components/RouteMapper/RouteMapper";

export default function SiteLayout(props: RouteComponentProps) {
  useEffect(() => {
    // TODO:
    // console.log("sitelayout render");
  });

  return (
    <section className="siteLayout">
      <header>
        <h2>Site</h2>
      </header>

      <main className="content">
        <RouteMapper {...props.routeMapperProps} />
      </main>

      <footer>
        <p>This is the site layout footer.</p>
      </footer>
    </section>
  );
}
