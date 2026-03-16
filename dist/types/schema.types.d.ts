export type Guard<T> = (value: unknown) => value is T;
export type Schema<T> = {
    [K in keyof T]: Guard<T[K]>;
};
export type ValidationResult<T> = {
    ok: true;
    value: T;
} | {
    ok: false;
    errors: string[];
};
//# sourceMappingURL=schema.types.d.ts.map