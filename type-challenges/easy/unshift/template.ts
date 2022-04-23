// type Unshift<T extends any[], U> = U extends any[] ? [...U, ...T] : [U, ...T];
type Unshift<T extends any[], U> = [U, ...T]

type t6 = Unshift<['1', 2, '3'],boolean>