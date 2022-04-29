type AnyOf<T extends readonly any[]> =
T[number] extends 0 | "" | false | [] | {[key: string | number]: never}
? false
: true;