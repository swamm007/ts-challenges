import type { Equal, Expect } from '@type-challenges/utils'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
// 获取元组数据的类型的联合类型
type data = (typeof tuple)[number];

type cases = [
  Expect<Equal<TupleToObject<typeof tuple>, { 'tesla': 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }>>,
]

type error = TupleToObject<[[1, 2], {}]>