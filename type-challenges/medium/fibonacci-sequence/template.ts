type BuildArray<Len extends number, V extends any[] = []> = 
V["length"] extends Len ? V : BuildArray<Len, [...V, any]>

type Add<A extends number, B extends number> = 
[...BuildArray<A>, ...BuildArray<B>]["length"]

type Fibonacci<
T extends number,
Cur extends number = 2,
Day2 extends number = 0,
Day1 extends number = 1
> = Cur extends T
? Add<Day2, Day1>
: Fibonacci<T, Add<Cur, 1> & number, Day1, Add<Day1, Day2> & number>
