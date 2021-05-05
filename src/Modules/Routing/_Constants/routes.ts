import { createRoutes } from "../RouteHandlers_2/_Helpers/createRoutes";

// TODO: Add props that can be injected from above to everything.

const adminSuperSecretPath = ["/super-secret/:id"];
const loginPath = ["/login", "/sign-in"];

export const unproccessedRoutes = createRoutes({
  root: {
    Component: "TODO",
    paths: [""],
    notExact: true,
    documentTitle: "RouteHandlers ",
    _children: {
      admin: {
        Component: "TODO",
        authRule: "TODO",
        paths: ["/admin", "/administrator"],
        documentTitle: "| Admin ",
        _children: {
          home: {
            Component: "TODO",
            paths: [""],
            documentTitle: "Home",
          },
          superSecret: {
            Component: "TODO",
            authRule: "TODO",
            paths: adminSuperSecretPath,
            documentTitle: "Super secret",
          },
          restricted: {
            Component: "TODO",
            authRule: "TODO",
            paths: adminSuperSecretPath,
            documentTitle: "Restricted",
          },
          notFound: {
            Component: "TODO",
            authRule: "TODO",
            paths: ["*"],
            documentTitle: "Not found",
          },
        },
      },

      site: {
        Component: "TODO",
        paths: [""],
        notExact: true,
        _children: {
          home: {
            Component: "TODO",
            paths: [""],
            documentTitle: "Home",
          },
          login: {
            Component: "TODO",
            authRule: "TODO",
            paths: loginPath,
            documentTitle: "Login",
          },
          restricted: {
            Component: "TODO",
            authRule: "TODO",
            paths: loginPath,
            documentTitle: "Restricted",
          },
          notFound: {
            Component: "TODO",
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
