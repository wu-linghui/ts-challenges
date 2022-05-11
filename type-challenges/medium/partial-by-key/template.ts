type Copy<T extends object> = { [K in keyof T]: T[K] }

type PartialByKeys<T, K = "empty"> = 
[K] extends ["empty"]
? {[key in keyof T]?: T[key]}
: Copy<{[key2 in keyof MyPick<T, K & keyof T>]?: T[key2]} & MyOmit<T, keyof MyPick<T, K & keyof T>>>


// type t14 = PartialByKeys<User, "name">