// type MyAwaited<T> = T extends Promise<infer R> ? R : never;

// type MyAwaited<类型> = 类型 extends Promise<infer 待推断的占位变量> ? MyAwaited<待推断的占位变量> : 类型

type MyAwaited<T extends Promise<unknown>> = 
T extends Promise<infer R>
    ? R extends Promise<unknown>
        ? MyAwaited<R>
        : R
    : never;