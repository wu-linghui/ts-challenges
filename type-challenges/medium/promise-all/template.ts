
/* 
    [key in keyof T] : T[key] extends Promise<infer R> ? R : T[key]
    1、keyof T 将泛型数组T转为ts类型集合
    2、key in 循环T
    3、: T[key] 集合里的单个类型
    4、extends Promise<infer R>与Promise比较是否为Promise类型是的话，通过infer推导值类型
    5、? R : T[key] 第4步的判断true则返回infer R 的推导类型，false则返回T类型集合的当前的T[key]
 */
declare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise<{[key in keyof T] : T[key] extends Promise<infer R> ? R : T[key]}>
 
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)])

type t8 = typeof promiseAllTest3;
