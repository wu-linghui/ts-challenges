type IsNever<T> = [T] extends [never] ? true : false;
// ts官方文档解释
// Because never can not exntends never, but never[] can extends never[]
// https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types