// U本身就是类数组集合
type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer U) => any ? U : never;
