type Utils<L, C extends any[] = [], R = L> = 
C["length"] extends L
? R
: Utils<L, [...C, 0], C["length"] | R>

type NumberRange<L, H> = L | MyExclude<Utils<H>, Utils<L>>
// type t14 = Utils<2>