"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const guards_1 = require("./guards");
const guards_2 = require("./guards");
const guards_3 = require("./guards");
const userKeys = ["name", "age", "email"];
function isUserStrict(value) {
    if (!(0, guards_1.isRecord)(value))
        return false;
    const inputKeys = Object.keys(value);
    const hasOnlyValidKeys = inputKeys.every(key => userKeys.includes(key));
    const hasAllrequiredkeys = userKeys.every(key => key in value);
    if (!hasOnlyValidKeys || !hasAllrequiredkeys)
        return false;
    return ("name" in value &&
        (0, guards_3.isString)(value.name) && "age" in value &&
        (0, guards_2.isNumber)(value.age) && "email" in value &&
        (0, guards_3.isString)(value.email));
}
//# sourceMappingURL=validator.js.map