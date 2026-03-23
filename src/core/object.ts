import { Schema } from "./schema";

export function object<T> (
    shape: {[k in keyof T]: Schema<T[k]>}
): Schema<T> {
    return {
        parse : (value : unknown): value is T => {

            if (typeof value !== "object" || value === null) return false;

            const obj = value as Record<string, unknown>;
            const shapeKeys = Object.keys(shape);
            const inputKeys = Object.keys(obj);

            const hasOnlyValidKeys = inputKeys.every(key => shapeKeys.includes(key));
            if (!hasOnlyValidKeys) return false;

            const hasAllRequiredKeys = shapeKeys.every(key => key in obj);
            if (!hasAllRequiredKeys) return false;

            for (const key of shapeKeys) {
                const schema = shape[key as keyof T];
                const valueToCheck = obj[key];

                if (!schema.parse(valueToCheck)) {
                    return false;
                }
            }
            return true;
        }
    };
}