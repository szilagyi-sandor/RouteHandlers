import { lazy } from "react";

export const layoutComponents = {
  AdminLayout: lazy(() => import("Views/Admin/Layout/AdminLayout")),
  SiteLayout: lazy(() => import("Views/Site/Layout/SiteLayout")),
  RootLayout: lazy(() => import("Views/_Common/Layouts/_Root/RootLayout")),
};
