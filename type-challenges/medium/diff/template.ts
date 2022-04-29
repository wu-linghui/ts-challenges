type Diff<O, O1> = {
    [key in MyExclude<keyof O, keyof O1> | MyExclude<keyof O1, keyof O>] : key extends keyof O
    ? O[key]
    : key extends keyof O1
        ? O1[key]
        : never
}
