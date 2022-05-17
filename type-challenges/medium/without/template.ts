type Without<T, U, C extends any[] = []> = 
T extends [infer first, ...infer rest]
? Includes<U extends any[] ? U : [U], first> extends true
  ? Without<rest, U, C>
  : Without<rest, U, [...C, first]>
: C;