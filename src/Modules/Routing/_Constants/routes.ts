// CHECKED 1.0
import { authRules } from "Modules/Auth/_Constants/authRules";
import { complementPaths } from "../RouteHandlers/_Helpers/Path/complementPaths";
import { createRoutes } from "../RouteHandlers/_Helpers/Route/createRoutes";
import { processRoutes } from "../RouteHandlers/_Helpers/Route/processRoutes";
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

const adminSuperSecretPath = ["/super-secret/:id"];
const loginPath = ["/login", "/sign-in"];
const adminLayoutPath = ["/admin", "/administrator"];

const unprocessedRoutes = createRoutes({
  root: {
    Component: RootLayout,
    paths: [""],
    notExact: true,
    documentTitle: "RouteHandlers ",
    _children: {
      admin: {
        Component: AdminLayout,
        authRule: authRules.adminReq,
        paths: adminLayoutPath,
        documentTitle: "| Admin ",
        _children: {
          home: {
            Component: AdminHomePage,
            paths: [""],
            documentTitle: "Home",
          },
          superSecret: {
            Component: AdminSuperSecretPage,
            authRule: authRules.superAdminReq,
            paths: adminSuperSecretPath,
            documentTitle: "Super secret",
          },
          restricted: {
            Component: AdminRestrictedPage,
            paths: adminSuperSecretPath,
            documentTitle: "Restricted",
          },
          notFound: {
            Component: AdminNotFoundPage,
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
            authRule: authRules.visitorAcceptedReq,
            paths: [...loginPath, ...complementPaths(["*"], adminLayoutPath)],

            documentTitle: "Login",
          },
          restricted: {
            Component: RestrictedPage,
            paths: [...complementPaths(["*"], adminLayoutPath)],
            documentTitle: "Restricted",
          },
          notFound: {
            Component: NotFoundPage,
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
