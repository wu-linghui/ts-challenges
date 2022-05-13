type Shift2<T extends any[]> = T extends [infer first, ...infer rest] ? rest : never;
