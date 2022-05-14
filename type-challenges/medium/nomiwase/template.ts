type String2Union<T extends string> = 
T extends `${infer first}${infer rest}`
? first | String2Union<rest>
: never;

type AllCombinations<S extends string, StrUnion extends string = String2Union<S>> = 
[StrUnion] extends [never]
? ""
: "" | {[key in StrUnion] : `${key}${AllCombinations<never, MyExclude<StrUnion, key>>}`}[StrUnion]
