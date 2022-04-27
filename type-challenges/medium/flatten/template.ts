type Flatten<S extends any[]> = S extends [infer first, ...infer rest]
? first extends any[] ? [...Flatten<first>, ...Flatten<rest>] : [first, ...Flatten<rest>]
: [];
