"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isString = isString;
exports.isNumber = isNumber;
exports.isObject = isObject;
exports.isRecord = isRecord;
function isString(value) {
    return typeof value === "string";
}
function isNumber(value) {
    return typeof value === "number" && !Number.isNaN(value);
}
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isRecord(value) {
    return isObject(value) && !Array.isArray(value);
}
//# sourceMappingURL=primitives.js.map