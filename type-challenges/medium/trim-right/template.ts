type TrimRight<S extends string> = S extends `${infer L}${Space}`
? TrimRight<L>
: S;
