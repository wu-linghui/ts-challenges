type If<C extends boolean, T, F> = C extends true ? T : F

type t6 = If<null, 1, 2>

let u: boolean = null;