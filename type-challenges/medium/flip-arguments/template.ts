type Reverse2<T extends any[]> = T extends [...infer first, infer rest]
? [rest, ...Reverse2<first>]
: [];

type FlipArguments<T> = T extends (...args: infer R) => infer U 
? (...args: Reverse2<[...R]>) => U
: never;
