// CHECKED 1.0
import { routes } from "./routes";
import { createRoutePaths } from "../RouteHandlers/_Helpers/Path/createRoutePaths";

const { root } = routes;
const { admin, site } = root._children;
const { home, login } = site._children;
const { home: adminHome, superSecret } = admin._children;

export const routePaths = createRoutePaths(routes, {
  home,
  login,
  adminHome,
  superSecret,
});
