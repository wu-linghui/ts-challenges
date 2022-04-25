import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<['a', 'b', 'c', 'd' ]>, ['a', 'b', 'c']>>,
  Expect<Equal<Shift<[3, 2, 1]>, 3>>,
  Expect<Equal<Shift<['a', 'b', 'c', 'd' ]>, 'a'>>,
  Expect<Equal<Push2<[3, 2], 1>, [3, 2, 1]>>,
  Expect<Equal<Push2<['a', 'b', 'c'], 'd'>, ['a', 'b', 'c', 'd']>>,
  Expect<Equal<UnShift<[3, 2], 1>, [1, 3, 2]>>,
  Expect<Equal<UnShift<['a', 'b', 'c'], 'd'>, ['d', 'a', 'b', 'c']>>,
]
