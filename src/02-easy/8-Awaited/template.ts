// 第一种
// type MyAwaited<T> = T extends  Promise<infer P> ? (MyAwaited<P> extends never ? P : MyAwaited<P>) : never;
// 第二种
type MyAwaited<T extends Promise<unknown>> = T extends  Promise<infer P> ? (P extends Promise<unknown> ? MyAwaited<P> : P) : never;