// CHECKED 1.0
import { lazy } from "react";

export const pageComponents = {
  AdminHomePage: lazy(() => import("Views/Admin/Pages/Home/AdminHomePage")),
  HomePage: lazy(() => import("Views/Site/Pages/Home/HomePage")),
  LoginPage: lazy(() => import("Views/Site/Pages/Login/LoginPage")),
  NotFoundPage: lazy(() => import("Views/Site/Pages/NotFound/NotFoundPage")),
  RestrictedPage: lazy(
    () => import("Views/Site/Pages/Restricted/RestrictedPage")
  ),
  AdminSuperSecretPage: lazy(
    () => import("Views/Admin/Pages/SuperSecret/AdminSuperSecretPage")
  ),
  AdminRestrictedPage: lazy(
    () => import("Views/Admin/Pages/Restricted/AdminRestrictedPage")
  ),
  AdminNotFoundPage: lazy(
    () => import("Views/Admin/Pages/NotFound/AdminNotFoundpage")
  ),
};
