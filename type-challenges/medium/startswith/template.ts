type StartsWith<T extends string, U extends string> = 
U extends ""
? never
: T extends `${U}${infer end}`
? true
: false
