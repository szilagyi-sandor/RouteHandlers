// CHECKED 1.0
import { createRoutePathObj } from "Modules/Routing/RouteHandlers/_Helpers/createRoutePathObj";
import { createRoutes } from "Modules/Routing/RouteHandlers/_Helpers/createRoutes";
import { adminlayoutPath } from "./adminLayoutPath";

const adminSuperSecretOwnPaths = ["/super-secret/:id"];
export const adminRoutes = createRoutes({
  ...createRoutePathObj([adminlayoutPath], {
    adminHome: [""],
    adminSuperSecret: adminSuperSecretOwnPaths,
    adminRestrictedPage: adminSuperSecretOwnPaths,
  }),
});
