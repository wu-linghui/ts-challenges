type TupleToNestedObject<T extends readonly any[], U> = 
T extends [infer first, ...infer rest]
? {[key in first as T[0]] : TupleToNestedObject<rest, U>}
: U