type TupleToObject<T extends readonly (string | number | symbol)[]> = {
    [key in T[number]] : key;
}

// type TupleToObject<T extends readonly string[]> = {
//     [key in T[number]] : key;
// }

/* 
  1.typeof将js的转为ts类型
  2.[key in T[number]]循环数组
  3.[key in T] 循环对象
 */