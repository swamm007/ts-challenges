type MyReadonly2<T, K extends keyof T> = T & {readonly [key in K]: T[key]}
