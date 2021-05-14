// CHECKED 1.0
import React, { Suspense } from "react";

import { RouteComponentProps } from "Modules/Routing/RouteHandlers/_Interfaces/RouteComponentProps";

export default function AdminLayout({ children }: RouteComponentProps) {
  return (
    <section className="adminLayout">
      <header>
        <h2>Admin</h2>
      </header>

      <main className="content">
        <Suspense fallback={"Admin loading..."}>{children}</Suspense>
      </main>

      <footer>
        <p>This is the Admin layout footer.</p>
      </footer>
    </section>
  );
}
