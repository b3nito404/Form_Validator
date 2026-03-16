import { isRecord } from "../guards/primitives";
import type { Schema, ValidationResult } from "../types/schema.types";

export function validateObject<T>(schema: Schema<T>, value: unknown): value is T {
  if (!isRecord(value)) return false;

  const input = value as Record<string, unknown>;
  const schemaKeys = Object.keys(schema) as Array<keyof T>;
  const inputKeys = Object.keys(input);

  const hasOnlyValidKeys = inputKeys.every((k) =>
    (schemaKeys as string[]).includes(k)
  );
  if (!hasOnlyValidKeys) return false;

  const hasAllRequiredKeys = schemaKeys.every((k) => k in input);
  if (!hasAllRequiredKeys) return false;

  for (const key of schemaKeys) {
    const guard = schema[key];
    const fieldValue = input[key as string];
    if (!guard(fieldValue)) return false;
  }

  return true;
}

export function validateObjectDetailed<T>(
  schema: Schema<T>,
  value: unknown
): ValidationResult<T> {
  if (!isRecord(value)) {
    return { ok: false, errors: ["value is not an object"] };
  }

  const input = value as Record<string, unknown>;
  const schemaKeys = Object.keys(schema) as Array<keyof T>;
  const inputKeys = Object.keys(input);

  const extraKeys = inputKeys.filter((k) => !(schemaKeys as string[]).includes(k));
  const missingKeys = schemaKeys.filter((k) => !(k in input));

  const errors: string[] = [];

  if (extraKeys.length > 0) {
    errors.push(`unexpected keys: ${extraKeys.join(", ")}`);
  }

  if (missingKeys.length > 0) {
    errors.push(`missing required keys: ${missingKeys.map(String).join(", ")}`);
  }

  
  for (const key of schemaKeys) {
    const guard = schema[key];
    const exists = key in input;
    if (!exists) continue; 
    const fieldValue = input[key as string];
    if (!guard(fieldValue)) {
      errors.push(`invalid type for key '${String(key)}'`);
    }
  }

  if (errors.length > 0) return { ok: false, errors };

  // At this point i think that its safe to cast input T because every guard passed
  return { ok: true, value: input as T };
}