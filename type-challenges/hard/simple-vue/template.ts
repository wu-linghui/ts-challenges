type GetComputedType<C extends Record<string, any>> = {
    [P in keyof C] : ReturnType<C[P]>
}
  
declare function SimpleVue<D, C, M>(
    options: {
        // data(this: {}): D,
        data: (this: {}) => D,
        computed: C & ThisType<D & GetComputedType<C> & M>
        methods: M & ThisType<D & GetComputedType<C> & M>
}): D & GetComputedType<C> & M

/* 
    1.ReturnType<Type>用于处理函数声明、返回的的类型
    https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype
    2.ThisType<Type>->混合类型
    https://www.typescriptlang.org/docs/handbook/utility-types.html#thistypetype
    3.Record<key, type>->通过key传入的键名绑定同一个接口规定的类型
    https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type
 */