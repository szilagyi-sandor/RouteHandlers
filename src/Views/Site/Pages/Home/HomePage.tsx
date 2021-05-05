// CHECKED 1.0
import React from "react";

import { useDocTitle } from "Modules/Routing/RouteHandlers/Hooks/useDocTitle/useDocTitle";
import { PageProps } from "Modules/Routing/RouteHandlers/_Interfaces/PageProps";

export default function HomePage({ docTitle }: PageProps) {
  useDocTitle(docTitle);

  return (
    <section className="homePage">
      <header>
        <h3>Home page</h3>
      </header>

      <div className="content">
        <p>This is the home page.</p>
      </div>
    </section>
  );
}
