// type MyCapitalize<S extends string> = S extends `${infer first}${infer rest}` ? `${Uppercase<first>}${rest}` : S;

type Dict = {
    'a': 'A',
    'b': 'B',
    'c': 'C',
    'd': 'D',
    'e': 'E',
    'f': 'F',
    'g': 'G',
    'h': 'H',
    'i': 'I',
    'j': 'J',
    'k': 'K',
    'l': 'L',
    'n': 'N',
    'm': 'M',
    'o': 'O',
    'p': 'P',
    'q': 'Q',
    'r': 'R',
    's': 'S',
    't': 'T',
    'u': 'U',
    'v': 'V',
    'w': 'W',
    'x': 'X',
    'y': 'Y',
    'z': 'Z',
}

type t10 = Expand<keyof Dict>;
type MyCapitalize<S extends string> = S extends `${infer first}${infer rest}` 
? (first extends keyof Dict ? `${Dict[first]}${rest}`: S)
: S;

