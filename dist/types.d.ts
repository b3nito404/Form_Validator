export interface User {
    name: string;
    age: number;
    email: string;
}
export type Schema<T> = {
    [k in keyof T]: (value: unknown) => value is T[k];
};
//# sourceMappingURL=types.d.ts.map