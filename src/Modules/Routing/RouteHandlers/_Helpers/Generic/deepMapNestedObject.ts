// CHECKED 1.0
import { NestableObject } from "../../_Interfaces/NestableObject";

export const deepMapNestedObject = <T extends NestableObject<T>>(
  obj: Record<string, T>,
  mapperFunc: (item: T, selector: string[], indexes: number[]) => void,
  prevSelector: string[] = [],
  prevIndexes: number[] = []
) => {
  Object.keys(obj).forEach((key, index) => {
    const item = obj[key];
    const currentSelector = [...prevSelector, key];
    const currentIndexes = [...prevIndexes, index];

    mapperFunc(item, currentSelector, currentIndexes);

    if (item._children) {
      deepMapNestedObject(
        item._children,
        mapperFunc,
        currentSelector,
        currentIndexes
      );
    }
  });
};
