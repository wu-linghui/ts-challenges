type EndsWith<T extends string, U extends string> = 
U extends ""
? never
: T extends `${infer head}${U}`
? true
: false
