/* 
    看来复数转成字符串类型系统会默认转成绝对值
 */
type Absolute<T extends number | string | bigint> =
`${T}` extends `-${infer R}`
? `${R}`
: `${T}`;
