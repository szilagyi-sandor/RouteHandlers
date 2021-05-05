// CHECKED 1.0
import React from "react";

import { useDocTitle } from "Modules/Routing/RouteHandlers/Hooks/useDocTitle/useDocTitle";
import { PageProps } from "Modules/Routing/RouteHandlers/_Interfaces/PageProps";

export default function AdminHomePage({ docTitle }: PageProps) {
  useDocTitle(docTitle);

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
