import { isNumber, isString } from "../guards/primitives";
import type { Schema } from "../types/schema.types";

export interface User {
  name: string;
  age: number;
  email: string;
}

export const userSchema: Schema<User> = {
  name: isString,
  age: isNumber,
  email: isString,
};