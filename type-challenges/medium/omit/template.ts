
/* 
    该写法是用key去继承泛型K而K继承的是泛型T并用as做类型断言，
    故传入Todo未声明的key值会报错
 */
// type MyOmit<T, K> = {
type MyOmit<T, K extends keyof T> = {
    [Key in keyof T as Key extends K ? never : Key]: T[Key];
};
