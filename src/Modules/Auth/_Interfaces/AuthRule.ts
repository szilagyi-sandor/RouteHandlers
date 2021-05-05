// CHECKED 1.0
import { AuthCheckTypes } from "./AuthCheckTypes";

export type AuthRule = RequiredLevelAR | AcceptedRolesAR | ExcludedRolesAR;

export interface RequiredLevelAR {
  type: AuthCheckTypes["requiredLevel"];
  level: number;
}

export interface AcceptedRolesAR {
  type: AuthCheckTypes["acceptedRoles"];
  roles: number[];
}

export interface ExcludedRolesAR {
  type: AuthCheckTypes["excludedRoles"];
  roles: number[];
}
