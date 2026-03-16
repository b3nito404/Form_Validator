import { userSchema, User } from "../schemas/user.schema";
import { validateObject, validateObjectDetailed } from "../validators/validateObject";

const goodJson = `{"name":"Alice","age":30,"email":"alice@example.com"}`;
const badJson = `{"name":"Bob","age":"not-a-number","email":"bob@example.com","admin":true}`;

const goodData: unknown = JSON.parse(goodJson);
const badData: unknown = JSON.parse(badJson);

if (validateObject(userSchema, goodData)) {

  console.log("Good user:", goodData.name, goodData.age);
} else {
  console.log("Good data failed validation (unexpected).");
}

const res = validateObjectDetailed(userSchema, badData);
if (res.ok) {
  console.log("Valid user (unexpected):", res.value);
} else {
  console.log("Validation errors for badData:", res.errors);
}