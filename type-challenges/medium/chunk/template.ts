type Chunk<T extends any[], N extends number, Part extends any[] = []> = 
T extends [infer first, ...infer rest]
? Part["length"] extends N
  ? [Part, ...Chunk<T, N>]
  : Chunk<rest, N, [...Part, first]>
: Part extends []
  ? Part
  : [Part]