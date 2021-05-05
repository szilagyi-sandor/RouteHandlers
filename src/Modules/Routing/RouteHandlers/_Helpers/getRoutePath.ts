// CHECKED 1.0
export const getRoutePath = (route: string[], index = 0): string =>
  route[index] ? route[index] : route[0];
