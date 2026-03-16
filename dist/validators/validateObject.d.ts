import type { Schema, ValidationResult } from "../types/schema.types";
export declare function validateObject<T>(schema: Schema<T>, value: unknown): value is T;
export declare function validateObjectDetailed<T>(schema: Schema<T>, value: unknown): ValidationResult<T>;
//# sourceMappingURL=validateObject.d.ts.map