// CHECKED 1.0
export interface NestableObject<T> {
  _children?: Record<string, T>;
}
