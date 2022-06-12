type MyOmit<T, K extends keyof T> = {
    [key in keyof T]: key extends K ? never: T[key]
}