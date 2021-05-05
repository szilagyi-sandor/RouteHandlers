// CHECKED 1.0
import React from "react";

import { useDocTitle } from "Modules/Routing/RouteHandlers/Hooks/useDocTitle/useDocTitle";
import { PageProps } from "Modules/Routing/RouteHandlers/_Interfaces/PageProps";

export default function AdminSuperSecretPage({ docTitle }: PageProps) {
  useDocTitle(docTitle);

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
