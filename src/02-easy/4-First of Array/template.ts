// type First<T extends any[]> = T extends [] ? never : T[0]


type First<T extends any[]> = T extends [infer P, ...infer reset] ? P : never

type Last<T extends any[]> = T extends [...infer reset, infer P] ? P : never
