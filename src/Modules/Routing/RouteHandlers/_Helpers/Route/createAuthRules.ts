// CHECKED 1.0
import { AuthRule } from "../../_Interfaces/AuthRule";

export const createAuthRules = <T extends Record<string, AuthRule>>(rules: T) =>
  rules;
