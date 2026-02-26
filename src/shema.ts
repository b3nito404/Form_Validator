import { isNumber, isString } from "./guards";
import { Schema } from "./types";
import { User } from "./types";

export const userSchema: Schema<User> = {
    name: isString,
    age: isNumber,
    email: isString
}