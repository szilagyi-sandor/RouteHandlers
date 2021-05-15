// CHECKED 1.0
import { Route } from "../../_Interfaces/Route";

export const getRouteId = (
  route: Route,
  divider: string = "#"
): string | undefined => {
  const { processedInfo } = route;
  if (!processedInfo) {
    return undefined;
  }

  let output: string[] = [processedInfo.key];

  if (processedInfo.parentSelectors) {
    const firstParent =
      processedInfo.parentSelectors[processedInfo.parentSelectors.length - 1];

    output = [...firstParent, ...output];
  }

  return output.join(divider);
};
