"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const guards_1 = require("./guards");
exports.userSchema = {
    name: guards_1.isString,
    age: guards_1.isNumber,
    email: guards_1.isString
};
//# sourceMappingURL=shema.js.map