import React, { useEffect } from "react";

import RouteMapper from "../RouteHandlers_2/Components/RouteMapper/RouteMapper";
import { routes } from "../_Constants/routes";

// TODO:  drilledProps={{ test: "test" }}
export default function Routes() {
  useEffect(() => {
    console.log("routes render");
  });

  return (
    <RouteMapper
      routes={routes}
      suspenseFallback={"loading..."}
      renderTest={"routes render test"}
    />
  );
}
