type IsUnion<T, U=T> = T extends U
 ? [U] extends [T] ? false : true
 : never

//  type IsUnion<T, U=T> = T extends U
//  ? [T] : never;

type t13 = IsUnion<'a'|'b'|'c'|'d'>