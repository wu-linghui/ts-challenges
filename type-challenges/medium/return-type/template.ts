
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;


// 用infer解包
// type Unpacked<T> = T extends (infer R)[] ? R : T;
// type ids = number[];
// type idType = Unpacked<ids>;->idTyp类型为number

/* 
    1.infer->可以推断类型、联合类型、解包
*/