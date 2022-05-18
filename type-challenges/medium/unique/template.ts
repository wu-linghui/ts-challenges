type In<A, B extends any[]> = 
B extends [infer first, ...infer rest]
? Equal2<A, first> extends true
  ? true
  : In<A, rest>
: false;

type Unique<T extends any[], C extends any[] = []> = 
T extends [infer first, ...infer rest]
? In<first, C> extends false
  ? Unique<rest, [...C, first]>
  : Unique<rest, C>
: C;
