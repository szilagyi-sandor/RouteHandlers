import { createRoutes } from "../RouteHandlers_2/_Helpers/Route/createRoutes";
import { processRoutes } from "../RouteHandlers_2/_Helpers/Route/processRoutes";
import { layoutComponents } from "./layoutComponents";
import { pageComponents } from "./pageComponents";

const { AdminLayout, RootLayout, SiteLayout } = layoutComponents;
const {
  AdminHomePage,
  AdminNotFoundPage,
  AdminRestrictedPage,
  AdminSuperSecretPage,
  HomePage,
  LoginPage,
  NotFoundPage,
  RestrictedPage,
} = pageComponents;
// TODO: Add props that can be injected from above to everything.

const adminSuperSecretPath = ["/super-secret/:id"];
const loginPath = ["/login", "/sign-in"];

// TODO: No need to export
export const unprocessedRoutes = createRoutes({
  root: {
    Component: RootLayout,
    paths: [""],
    notExact: true,
    documentTitle: "RouteHandlers ",
    _children: {
      admin: {
        Component: AdminLayout,
        authRule: "TODO",
        paths: ["/admin", "/administrator"],
        documentTitle: "| Admin ",
        _children: {
          home: {
            Component: AdminHomePage,
            paths: [""],
            documentTitle: "Home",
          },
          superSecret: {
            Component: AdminSuperSecretPage,
            authRule: "TODO",
            paths: adminSuperSecretPath,
            documentTitle: "Super secret",
          },
          restricted: {
            Component: AdminRestrictedPage,
            authRule: "TODO",
            paths: adminSuperSecretPath,
            documentTitle: "Restricted",
          },
          notFound: {
            Component: AdminNotFoundPage,
            authRule: "TODO",
            paths: ["*"],
            documentTitle: "Not found",
          },
        },
      },

      site: {
        Component: SiteLayout,
        paths: [""],
        notExact: true,
        _children: {
          home: {
            Component: HomePage,
            paths: ["/"],
            documentTitle: "Home",
          },
          login: {
            Component: LoginPage,
            authRule: "TODO",
            paths: loginPath,
            documentTitle: "Login",
          },
          restricted: {
            Component: RestrictedPage,
            authRule: "TODO",
            paths: loginPath,
            documentTitle: "Restricted",
          },
          notFound: {
            Component: NotFoundPage,
            authRule: "TODO",
            paths: [""],
            notExact: true,
            documentTitle: "Not found",
          },
        },
      },
    },
  },
});

export const routes = processRoutes(unprocessedRoutes);
