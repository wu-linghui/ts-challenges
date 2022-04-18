// type First<T extends any[]> = T["length"] extends 0 ? never : T[0]

// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never;

// type First<T extends any[]> = T extends [] ? never : T[0];

type First<T extends any[]> = T extends [infer First, ...infer Rest]
? First
: never;

// type First<T extends any[]> = Extract<T[number], T[0]>;


/* 
    1.Extract<UnionType, ExcludedMembers>
    https://www.typescriptlang.org/docs/handbook/utility-types.html#extracttype-union
 */