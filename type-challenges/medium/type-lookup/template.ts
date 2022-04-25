/* 
    1.U extends {type: T}相当于过滤出U这一联合类型里具有相同属性的对象
 */
type LookUp<U, T extends string> = U extends {type: T} ? U : never;