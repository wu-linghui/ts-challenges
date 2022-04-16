type DeepReadonly<T> = {
    readonly [k in keyof T]: T[k] extends Record<string, any>
      ? T[k] extends Function
        ? T[k]
        : DeepReadonly<T[k]>
      : T[k]
}

/* 
    1.Record<key, type>->通过key传入的键名绑定同一个接口规定的类型
    在这题里type可以是function、和interface、type
    https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type
 */