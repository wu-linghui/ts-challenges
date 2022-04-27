type Permutation<T1, T2 = T1> =
[T1] extends [never]
? []
: T1 extends T2
? [T1, ...Permutation<MyExclude<T2, T1>>]
: [];

// 解析
// https://github.com/type-challenges/type-challenges/issues/614

