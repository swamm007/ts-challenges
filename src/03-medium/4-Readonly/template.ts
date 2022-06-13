type MyReadonly2<T, K> = {
    readonly [key in keyof T]: T[key]
}