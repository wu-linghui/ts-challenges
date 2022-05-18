type Trunc<T extends string | number> = 
`${T}` extends `${infer A}.${any}`
? A
: `${T}`