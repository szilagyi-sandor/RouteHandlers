// CHECKED 1.0
import React, {
  createContext,
  useContext,
  PropsWithChildren,
  useState,
} from "react";

import { roles } from "../_Constants/roles";

const authContext = createContext<number>(roles.unknown.id);
const authActionsContext = createContext<{ (roleid: number): void }>(() => {});

export const useAuthContext = () => useContext(authContext);
export const useAuthActionsContext = () => useContext(authActionsContext);

export default function AuthCP({ children }: PropsWithChildren<{}>) {
  // In normal applications, this is the place, to set the initial role based on
  // an API call, and do not display children if it's unknown. Also this provider
  // should be placed in the App to show if it's loading.
  const [roleId, setRoleId] = useState<number>(roles.visitor.id);
  return (
    <authContext.Provider value={roleId}>
      <authActionsContext.Provider value={setRoleId}>
        {children}
      </authActionsContext.Provider>
    </authContext.Provider>
  );
}
