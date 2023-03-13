// tsc --init gera arquivo de config
//tsc -w auto att

// string, boolean, number ...
const x: number = 7;

console.log(x);

// inferencia x annotation

const y = 12; //inferencia

const z: number = 12; // annotation

// tipos básicos

let firstName: string = "Thales";
const age: number = 26;
const isAdmin: boolean = true;

// String != string

console.log(typeof firstName);

firstName = "Spanhol";

// object

const myNumbers: number[] = [1, 2, 3];

console.log(myNumbers);
console.log(myNumbers.length);
/* console.log(myNumbers.toUpperCase());     erro   */

// tuplas

let myTuple: [number, string, string[]];

myTuple = [5, "teste", ["a", "b"]];

/* myTuple = [true, false, true]    erro  */

//object literals -> {prop: value}

const user: {name: string, age: number} = {
    name: "Thales Spanhol",
    age: 26
};

console.log(user);
console.log(user.name);

/* user.job = "Programador"     erro   */

// any

let a: any = 0;
a = "teste";
a = true;
a = [];



