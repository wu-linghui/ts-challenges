type Pop<T extends any[]> = T extends [...infer rest, any] ? rest : never;

// shift
type Shift<T extends any[]> = T extends [infer first, ...infer rest] ? first : never;

// unshift
type UnShift<T extends any[], U> = [U, ...T];

// push
type Push2<T extends any[], U> = [...T, U];