type IsTuple<T> = 
[T] extends [never] 
? false
: T extends []
? true 
: T extends Readonly<[infer first, ...infer rest]> 
? true 
: false;
