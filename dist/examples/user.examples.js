"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_schema_1 = require("../schemas/user.schema");
const validateObject_1 = require("../validators/validateObject");
const goodJson = `{"name":"Alice","age":30,"email":"alice@example.com"}`;
const badJson = `{"name":"Bob","age":"not-a-number","email":"bob@example.com","admin":true}`;
const goodData = JSON.parse(goodJson);
const badData = JSON.parse(badJson);
if ((0, validateObject_1.validateObject)(user_schema_1.userSchema, goodData)) {
    console.log("Good user:", goodData.name, goodData.age);
}
else {
    console.log("Good data failed validation (unexpected).");
}
const res = (0, validateObject_1.validateObjectDetailed)(user_schema_1.userSchema, badData);
if (res.ok) {
    console.log("Valid user (unexpected):", res.value);
}
else {
    console.log("Validation errors for badData:", res.errors);
}
//# sourceMappingURL=user.examples.js.map