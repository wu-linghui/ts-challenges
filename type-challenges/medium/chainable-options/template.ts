
// type Chainable<T extends {}={}> = {
//   option<K extends string,V>(key: K, value: V):Chainable<T & {[k in K]:V}>
//   get(): T
// }

// 判断传入的key是否重复，true则直接类型约束为string，false则返回空集合
type Omit2<K, T> = K extends T ? never : K;
// 判断对象是否为空对象，true则直接类型约束为string
type EmptyObject<T> = keyof T extends keyof {} ? true : false;

type Chainable<T extends {} = {}> = {
  option<Key extends EmptyObject<T> extends true
  ? string
  : Omit2<keyof T, Key> extends true 
  ? never
  : string
  ,Value>
  (key: Key, value: Value): Chainable<T & {[key in Key] : Value}>
  get(): T
}
