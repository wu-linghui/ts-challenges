/*
    1、这道对字符串类型的约束运算处理和数组的有相似之处一个是...解构符号对数组里元素的处理
    一个是`${}`模板字符串对字符串内容的推导约束处理
 */

type TrimLeft<S extends string> = S extends `${" " | "\n" | "\t"}${infer rest}` ? TrimLeft<rest> : S;