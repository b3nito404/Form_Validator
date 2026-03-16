"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateObject = validateObject;
exports.validateObjectDetailed = validateObjectDetailed;
const primitives_1 = require("../guards/primitives");
function validateObject(schema, value) {
    if (!(0, primitives_1.isRecord)(value))
        return false;
    const input = value;
    const schemaKeys = Object.keys(schema);
    const inputKeys = Object.keys(input);
    const hasOnlyValidKeys = inputKeys.every((k) => schemaKeys.includes(k));
    if (!hasOnlyValidKeys)
        return false;
    const hasAllRequiredKeys = schemaKeys.every((k) => k in input);
    if (!hasAllRequiredKeys)
        return false;
    for (const key of schemaKeys) {
        const guard = schema[key];
        const fieldValue = input[key];
        if (!guard(fieldValue))
            return false;
    }
    return true;
}
function validateObjectDetailed(schema, value) {
    if (!(0, primitives_1.isRecord)(value)) {
        return { ok: false, errors: ["value is not an object"] };
    }
    const input = value;
    const schemaKeys = Object.keys(schema);
    const inputKeys = Object.keys(input);
    const extraKeys = inputKeys.filter((k) => !schemaKeys.includes(k));
    const missingKeys = schemaKeys.filter((k) => !(k in input));
    const errors = [];
    if (extraKeys.length > 0) {
        errors.push(`unexpected keys: ${extraKeys.join(", ")}`);
    }
    if (missingKeys.length > 0) {
        errors.push(`missing required keys: ${missingKeys.map(String).join(", ")}`);
    }
    for (const key of schemaKeys) {
        const guard = schema[key];
        const exists = key in input;
        if (!exists)
            continue;
        const fieldValue = input[key];
        if (!guard(fieldValue)) {
            errors.push(`invalid type for key '${String(key)}'`);
        }
    }
    if (errors.length > 0)
        return { ok: false, errors };
    // At this point i think that its safe to cast input T because every guard passed
    return { ok: true, value: input };
}
//# sourceMappingURL=validateObject.js.map