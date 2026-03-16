"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
// src/schemas/user.schema.ts
const primitives_1 = require("../guards/primitives");
exports.userSchema = {
    name: primitives_1.isString,
    age: primitives_1.isNumber,
    email: primitives_1.isString,
};
//# sourceMappingURL=user.schema.js.map