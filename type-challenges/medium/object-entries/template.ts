type ObjectEntries<T> = {
    [key in keyof T] -?: [key, T[key] extends (infer R | undefined) ? R : T[key]]
// }
}[keyof T]

// interface Model {
//     name: string
//     age: number
//     locations: string[] | null
// }


// type t14 = ObjectEntries<Model>["name" | "age"]
// [ ]相当于 js 对象取 key 的 value，keyof T 是这个对象的 key 的 union，union 在计算结果的时候，是 union 里的每个类型分别计算，然后结果再合成 union


// type t15 = [keyof {
//     name: ["name", string];
//     age: ["age", number];
//     locations: ["locations", string[] | null];
// }]