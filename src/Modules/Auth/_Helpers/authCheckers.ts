// TODO: CHECK
import { authCheckTypes } from "../_Constants/authCheckTypes";
import {
  AcceptedRolesAR,
  AuthRule,
  ExcludedRolesAR,
  RequiredLevelAR,
} from "../_Interfaces/AuthRule";

export function checkAuth(rule: AuthRule, roleId: number) {
  switch (rule.type) {
    case authCheckTypes.requiredLevel:
      return checkRequiredAuthLevel(rule, roleId);

    case authCheckTypes.acceptedRoles:
      return checkAcceptedRoles(rule, roleId);

    case authCheckTypes.excludedRoles:
      return checkExludedRoles(rule, roleId);

    default:
      return false;
  }
}

function checkRequiredAuthLevel(rule: RequiredLevelAR, roleId: number) {
  return roleId >= rule.level;
}

function checkAcceptedRoles(rule: AcceptedRolesAR, roleId: number) {
  return rule.roles.includes(roleId);
}

function checkExludedRoles(rule: ExcludedRolesAR, roleId: number) {
  return !rule.roles.includes(roleId);
}
