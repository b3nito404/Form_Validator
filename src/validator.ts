import {User} from "./types";
import { isRecord } from "./guards";
import { isNumber } from "./guards";
import { isString } from "./guards";


const userKeys = ["name","age","email"] as const 
function isUserStrict(value: unknown): value is User {
    if(!isRecord(value)) return false;

    const inputKeys = Object.keys(value);

    const hasOnlyValidKeys = inputKeys.every(key => userKeys.includes(key as typeof userKeys[number]));
    const hasAllrequiredkeys = userKeys.every(key => key in value);

    if (!hasOnlyValidKeys || !hasAllrequiredkeys) return false;
    return (
        "name" in value &&
        isString(value.name) && "age" in value && 
        isNumber(value.age) && "email" in value &&
        isString(value.email)
    );
}
