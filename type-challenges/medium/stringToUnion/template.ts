type StringToUnion<T extends string, A extends unknown[] = []> =
T extends `${infer first}${infer rest}`
? StringToUnion<rest, [...A, first]>
: A[number];
