type LengthOfString<S extends string, A extends unknown[] = []> = 
S extends `${infer first}${infer rest}`
? LengthOfString<rest, [...A, first]>
: A["length"]
