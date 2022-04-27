type AppendArgument<Fn extends (...args: any[]) => any, A> =
Fn extends (...args: infer Args) => infer result
? (...args: [...Args, A]) => result
: never;
