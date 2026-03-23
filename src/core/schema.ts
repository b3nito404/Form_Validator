export type Schema<T> = {
    parse : (value: unknown) => value is T;
}