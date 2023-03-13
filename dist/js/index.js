"use strict";
// tsc --init gera arquivo de config
//tsc -w auto att
// string, boolean, number ...
const x = 7;
console.log(x);
// inferencia x annotation
const y = 12; //inferencia
const z = 12; // annotation
// tipos básicos
let firstName = "Thales";
const age = 26;
const isAdmin = true;
// String != string
console.log(typeof firstName);
firstName = "Spanhol";
// object
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
/* console.log(myNumbers.toUpperCase());     erro   */
// tuplas
let myTuple;
myTuple = [5, "teste", ["a", "b"]];
/* myTuple = [true, false, true]    erro  */
//object literals -> {prop: value}
const user = {
    name: "Thales Spanhol",
    age: 26
};
console.log(user);
console.log(user.name);
/* user.job = "Programador"     erro   */
// any
let a = 0;
a = "teste";
a = true;
a = [];
