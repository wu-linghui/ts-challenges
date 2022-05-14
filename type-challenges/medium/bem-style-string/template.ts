type TB<I extends string> = `${I}`

type TE<I extends string[]> = I extends [] ? "" : `__${I[number]}`

type TM<I extends string[]> = I extends [] ? "" : `--${I[number]}`


type BEM<B extends string, E extends string[], M extends string[]> = 
`${TB<B>}${TE<E>}${TM<M>}`
