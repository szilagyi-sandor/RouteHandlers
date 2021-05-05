// CHECKED 1.0
import React, { PropsWithChildren, Suspense } from "react";

export default function AdminLayout({ children }: PropsWithChildren<{}>) {
  return (
    <section className="adminLayout">
      <header>
        <h2>Admin</h2>
      </header>

      <main className="content">
        <Suspense fallback="Admin layout loading...">{children}</Suspense>
      </main>

      <footer>
        <p>This is the Admin layout footer.</p>
      </footer>
    </section>
  );
}
