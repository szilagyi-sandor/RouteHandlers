// CHECKED 1.0
export const checkSelectorsParentChildRelation = (
  parentSelector: string[],
  childSelector: string[]
): boolean => {
  if (parentSelector.length >= childSelector.length) {
    return false;
  }

  for (let i = 0; i < parentSelector.length; i++) {
    if (parentSelector[i] !== childSelector[i]) {
      return false;
    }
  }

  return true;
};
