type MapTypes<T, R extends Record<"mapTo" | "mapFrom", any>> = {
    [key in keyof T] : T[key] extends R["mapFrom"]
    ? R extends {"mapFrom": T[key]}
      ? R["mapTo"]
      : never
    : T[key]
}

/* 
    对于下面这个例子来说因为mapTo为联合类型会自动分发也就是计算2次不进行
    ? R extends {"mapFrom": T[key]}
      ? R["mapTo"]
      : never
    处理的话会返回string | boolean这一联合类型
 */
// type t14 = MapTypes<
// { name: string; date: Date }, 、
// { mapFrom: string; mapTo: boolean } 
// | { mapFrom: Date; mapTo: string }>