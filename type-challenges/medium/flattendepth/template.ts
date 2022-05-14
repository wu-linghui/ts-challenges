type FlattenArray<T, D = 1, C extends any[] = [0]> = 
T extends any[] 
? D extends C["length"]
  ? T
  : T extends [infer first, ...infer rest]
    ? [...FlattenArray<first, D, [...C, 0]>, ...FlattenArray<rest, D, C>]
    : T
: [T];

type FlattenDepth<T extends any[], D = 1> = 
T extends [infer first, ...infer rest]
? [...FlattenArray<first, D>, ...FlattenDepth<rest, D>]
: T;
