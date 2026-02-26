export function isString(value: unknown) : value is string {
   return typeof(value) === "string";
}

export function isNumber(value: unknown) : value is number  {
    return typeof(value) ==="number" && !Number.isNaN(value);
}

export  function isObject(value: unknown) : value is object {
    return typeof(value)==="object" && value !== null;
}

 export function isRecord(value: unknown) : value is Record<string, unknown> {
    return isObject(value) && !Array.isArray(value);
}