// CHECKED 1.0
import { complementPaths } from "Modules/Routing/RouteHandlers/_Helpers/complementPaths";
import { createRoutes } from "Modules/Routing/RouteHandlers/_Helpers/createRoutes";
import { adminlayoutPath } from "../../Admin/_Constants/adminLayoutPath";

// This will be used to redirect from login page, when the user is logged in
// and to show the restricted page if the user is not logged in.
export const loginOwnPaths = ["/login"];

// The login page also matches every adminLayoutPath, so if the admin route
// not rendered because of restriction, the login page will be rendered.
export const siteRoutes = createRoutes({
  home: ["/"],
  login: [...loginOwnPaths, ...complementPaths(adminlayoutPath, ["*"])],
  restrictedPage: [
    ...loginOwnPaths,
    ...complementPaths(adminlayoutPath, ["*"]),
  ],
});
