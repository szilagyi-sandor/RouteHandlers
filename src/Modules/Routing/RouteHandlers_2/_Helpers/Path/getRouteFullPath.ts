// CHECKED 1.0
import { Route } from "../../_Interfaces/Route";
import { getCombinations } from "../Generic/combinations";
import { getPathsListFromRouteList } from "./getPathsListFromRouteList";
import { getNestedItemList } from "../Generic/getNestedItemList";
import { filterOutParentSelectors } from "../Selector/filterOutParentSelectors";
import { getAllSelectorsFromSelector } from "../Selector/getAllSelectorsFromSelector";

// Gets all route paths and return them without concatenating it.
// Hint: This does not handle the additionalFullPaths property.
export const getRouteFullPaths = (
  routeObj: Record<string, Route>,
  route: Route
): string[][] | undefined => {
  let output: string[][] | undefined = [];

  const { paths, processedInfo, _children } = route;
  const _path = paths.length === 0 ? [""] : paths;

  // Taking care of parent routes.
  if (processedInfo && processedInfo.parentSelectors) {
    const parentSelectors = processedInfo.parentSelectors;
    const parentRouteList = getNestedItemList(routeObj, parentSelectors);

    if (!parentRouteList) {
      // We are returning undefined, if there's something wrong with the
      // current routes parent selectors.
      return undefined;
    }

    output = getPathsListFromRouteList(parentRouteList);
  }

  // Adding the current route path.
  output.push(_path);

  // Taking care of children.
  // Hint: Children selectors are relative to current route, so when we create
  // their paths based on children we will get only the parts we need.
  if (_children && processedInfo && processedInfo.childrenSelectors) {
    const childrenSelectors = processedInfo.childrenSelectors;
    // Children's has to be combined (to only combine paths with the correct parents),
    // and for that we only need the routes without children.
    const combinedChildrenPaths: string[] = [];
    const childPageSelectors = filterOutParentSelectors(childrenSelectors);

    for (let i = 0; i < childPageSelectors.length; i++) {
      const childPageSelector = childPageSelectors[i];
      const childPageSelectorParts = getAllSelectorsFromSelector(
        childPageSelector
      );
      const childPageRoutes = getNestedItemList(
        _children,
        childPageSelectorParts
      );

      if (!childPageRoutes) {
        // We are returning undefined, if there's something wrong with the
        // current routes child selectors.
        return undefined;
      }

      const relativeChildPagePaths = getPathsListFromRouteList(childPageRoutes);

      if (relativeChildPagePaths) {
        getCombinations(relativeChildPagePaths).forEach((rcpp) =>
          combinedChildrenPaths.push(rcpp.join(""))
        );
      }
    }

    output.push(combinedChildrenPaths);
  }

  return output;
};
