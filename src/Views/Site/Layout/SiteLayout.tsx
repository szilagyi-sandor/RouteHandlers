// CHECKED 1.0
import React, { PropsWithChildren, Suspense } from "react";

export default function SiteLayout({ children }: PropsWithChildren<{}>) {
  return (
    <section className="siteLayout">
      <header>
        <h2>Site</h2>
      </header>

      <main className="content">
        <Suspense fallback="Site layout loading...">{children}</Suspense>
      </main>

      <footer>
        <p>This is the site layout footer.</p>
      </footer>
    </section>
  );
}
