type Join<T extends any[], K extends string | number = "empty", C extends string = ""> = 
T extends [infer first, ...infer rest]
? T["length"] extends 1 
  ? Join<rest, K, `${C}${first & string}`>
  : Join<rest, K, `${C}${first & string}${K}`>
: C;
