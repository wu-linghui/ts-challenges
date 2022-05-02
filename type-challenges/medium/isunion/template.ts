type IsUnion<T, U = T> = T extends T
? [MyExclude<U, T>] extends never[]
    ? false : true
: never;