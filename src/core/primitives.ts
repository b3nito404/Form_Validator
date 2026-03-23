import { Schema } from "./schema";

export function string(): Schema<string> {
    return {
        parse :(value : unknown):value is string => 
          typeof value === "string"
    };   
}

export function number() : Schema<number> {
    return {
        parse :(value : unknown): value is number =>
            typeof value === "number"
    }
}