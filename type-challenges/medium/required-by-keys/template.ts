type RequiredByKeys<T, K = "empty"> = 
[K] extends ["empty"]
? {[key in keyof T]-?: T[key]}
: Copy<{[key2 in keyof MyPick<T, K & keyof T>] -?: T[key2]} & MyOmit<T, keyof MyPick<T, K & keyof T>>>