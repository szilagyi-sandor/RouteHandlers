// TODO: CHECK
import { AuthRule } from "../_Interfaces/AuthRule";
import { authCheckTypes } from "./authCheckTypes";
import { roles } from "./roles";

export const adminRequiredAR: AuthRule = {
  type: authCheckTypes.requiredLevel,
  level: roles.admin.id,
};

export const superAdminRequiredAR: AuthRule = {
  type: authCheckTypes.requiredLevel,
  level: roles.superAdmin.id,
};

export const OnlyVisitorAR: AuthRule = {
  type: authCheckTypes.acceptedRoles,
  roles: [roles.visitor.id],
};
