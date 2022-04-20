// type MyExclude<T, K> = T extends K ? never : T;

// type MyReadonly2<T, K extends keyof T = keyof T> = {
//     [V in MyExclude<keyof T, K>] : T[V];
// } & {
//     readonly [U in K] : T[U];
// }

// type MyReadonly2<T, K extends keyof T = keyof T> = Omit<T, K> & Readonly<Pick<T, K>>

interface Todo1 {
    title: string
    description?: string
    completed: boolean
}

type MyReadonly2<T, K extends keyof T = keyof T> = {
    [key in keyof T as key extends K ? never : key] : T[key]
} & {
    readonly [key in K] : T[key]
}

type t4 = MyReadonly2<Todo1, 'title' | 'description'>;

