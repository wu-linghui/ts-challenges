type MyExclude<T, U> = T extends U ? never : T;
type t1 = "a" | "b" | "c";
type t2 = "a";
type t3 = MyExclude<t1, t2>;
/* 
    1.T extends U ->先循环T和U配备三元是返回空集合never、否返回T不配备的类型
    https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#distributive-conditional-types
 */