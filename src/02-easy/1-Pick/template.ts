type MyPick<T, K extends keyof T> = {
    [I in K]: T[I];
}