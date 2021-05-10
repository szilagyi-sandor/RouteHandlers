export interface NestableObject<T> {
  _children?: Record<string, T>;
}
