// CHECKED 1.0
import { AuthRule } from "Modules/Routing/RouteHandlers/_Interfaces/AuthRule";
import { authRules } from "../_Constants/authRules";
import { roles } from "../_Constants/roles";

// This function has to be created in every project, so the params can be customized.
export function checkAuth(roleId: number, rule?: AuthRule): boolean {
  if (!rule) {
    return true;
  }

  switch (rule.id) {
    case authRules.adminReq.id:
      return checkAdminReq(roleId);

    case authRules.superAdminReq.id:
      return checkSuperAdminReq(roleId);

    case authRules.visitorAcceptedReq.id:
      return checkVisitorAcceptedReq(roleId);

    default:
      return false;
  }
}

function checkAdminReq(roleId: number) {
  return roleId >= roles.admin.id;
}

function checkSuperAdminReq(roleId: number) {
  return roleId >= roles.superAdmin.id;
}

function checkVisitorAcceptedReq(roleId: number) {
  return roleId === roles.visitor.id;
}
