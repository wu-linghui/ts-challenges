type Head<T extends any[]> = 
T extends [infer first, ...any]
? first
: never;

type Pop2<T extends any[]> = 
T extends [any, ...infer rest]
? rest
: never;


type Zip<T extends any[], U extends any[], C extends any[] = []> = 
T extends []
? C
: U extends []
    ? C
    : Zip<Pop2<T>, Pop2<U>, [...C, [Head<T>, Head<U>]]>
