// type Includes<T extends readonly any[], U> = T extends [infer first, ...infer rest]
// ? first extends U
//     ? true
//     : Includes<rest, U>
// : false;

// 利用infer取到数组的第一个，和U对比。
// 相等的话说明U存在于T直接返回true，不相等则用数组剩余部分递归执行Includes

type Equal2<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false

type Includes<T extends any[], K> = T extends [infer R, ...infer U]
    ? Equal2<R, K> extends true
        ? true
        : Includes<U, K>
    : false;