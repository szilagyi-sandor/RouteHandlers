// CHECKED 1.0
import React, { Suspense } from "react";

import { RouteComponentProps } from "Modules/Routing/RouteHandlers/_Interfaces/RouteComponentProps";

export default function SiteLayout({ children }: RouteComponentProps) {
  return (
    <section className="siteLayout">
      <header>
        <h2>Site</h2>
      </header>

      <main className="content">
        <Suspense fallback={"Site loading..."}>{children}</Suspense>
      </main>

      <footer>
        <p>This is the site layout footer.</p>
      </footer>
    </section>
  );
}
