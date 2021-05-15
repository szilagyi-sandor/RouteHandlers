// CHECKED 1.0

import { createAuthRules } from "Modules/Routing/RouteHandlers/_Helpers/Route/createAuthRules";

export const authRules = createAuthRules({
  adminReq: { id: 1 },
  superAdminReq: {
    id: 2,
  },
  visitorAcceptedReq: {
    id: 3,
  },
});
