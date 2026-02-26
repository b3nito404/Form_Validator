"use strict";
/*ici on creer l'interface Options
interface Options {
    material: string;
    backlight: boolean;
}

//creation d'une Mapped list pour les Options afin d'eviter les repetitions
type ReadOnly<T> = {readonly [k in keyof T]: T[k]};
type Optional<T> = {[k in keyof T]?: T[k]};
type Nullable<T> ={[k in keyof T] : T[k] | null};


type ReadOnlyOptions = ReadOnly<Options>;
type OptionalOptions = Optional<Options>;
type NullableOptions = Nullable<Options>;

//using mapped list
 const option1: ReadOnlyOptions = {
    material: 'plastic',
    backlight: false,
 }*/
Object.defineProperty(exports, "__esModule", { value: true });
const Person = {
    name: true,
    age: false
};
console.log(Person);
//# sourceMappingURL=index.js.map