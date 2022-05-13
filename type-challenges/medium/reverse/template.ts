type Reverse<T extends any[], U extends any[] = []> = 
T extends [...infer first, infer rest]
? Reverse<first, [...U, rest]>
: U;
