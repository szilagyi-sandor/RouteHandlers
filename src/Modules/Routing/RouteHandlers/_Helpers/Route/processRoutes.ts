// CHECKED 1.0
import { Route } from "../../_Interfaces/Route";
import { Routes } from "../../_Interfaces/Routes";
import { deepMapNestedObject } from "../Generic/deepMapNestedObject";
import { getNestedItem } from "../Generic/getNestedItem";
import { getAllSelectorsFromSelector } from "../Selector/getAllSelectorsFromSelector";

export const processRoutes = <T extends Routes>(unprocessedRoutes: T): T => {
  let output: T = { ...unprocessedRoutes };

  deepMapNestedObject(output, (route, selector) => {
    // We are taking the previous item to enable creating deep copies without
    // modifying the input.
    const previousSelector = selector.slice(0, -1);
    const lastKey = selector[selector.length - 1];
    // The previousSelector on the first level is empty, but getNesteditem returns undefined in
    // that case, which is perfect for us.
    const previousRoute = getNestedItem(output, previousSelector);

    if (previousRoute && previousRoute._children) {
      const allParentSelectors = getAllSelectorsFromSelector(previousSelector);

      // Setting curent item's parentsInfo.
      previousRoute._children = {
        ...previousRoute._children,
        [lastKey]: {
          ...route,
          processedInfo: {
            parentSelectors: allParentSelectors,
          },
        },
      };

      // Looping through all parents to complement their childrenInfo.
      allParentSelectors.forEach((parentSelector, index) => {
        let parentRoute: Route | undefined;
        if (index === allParentSelectors.length - 1) {
          // We already took the first parent, so let's use it here!
          parentRoute = previousRoute;
        } else {
          parentRoute = getNestedItem(output, parentSelector);
        }

        // This should always be true, but better check.
        if (parentRoute && parentRoute._children && parentRoute.processedInfo) {
          parentRoute.processedInfo = {
            ...parentRoute.processedInfo,
            childrenSelectors: [
              ...(parentRoute.processedInfo.childrenSelectors
                ? parentRoute.processedInfo.childrenSelectors
                : []),
              selector.slice(parentSelector.length),
            ],
          };
        }
      });
    } else {
      // Handling first level items is necessary to manage the object references.
      output = {
        ...output,
        [lastKey]: {
          ...route,
          processedInfo: {},
        },
      };
    }
  });

  return output;
};
