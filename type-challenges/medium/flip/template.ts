type Flip<T extends Record<string, boolean | number | string>> = {
    [key in keyof T as `${T[key]}`] : key
}
