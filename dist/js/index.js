"use strict";
// tsc --init gera arquivo de config
//tsc -w auto att
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
// union type
let id = '10';
id = 200;
const userId = 10;
const productId = '7';
// enum
// tamanho de roupas (size: Médio, size: Pequeno)
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: 'camisa',
    size: Size.G,
};
console.log(camisa);
// literal types
let teste;
/* teste = "outrovalor" */
teste = "algumvalor";
teste = null;
// funcoes
const sum = (a, b) => a + b;
console.log(sum(7, 14));
/* console.log(sum('t','h')); */
const logger = (msg) => console.log(msg);
const greeting = (name, greet) => {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
    }
    else {
        console.log(`Olá ${name}`);
    }
};
greeting('Thales');
greeting('Thales', 'Sir');
const sumNumbers = (nums) => nums.n1 + nums.n2;
console.log(sumNumbers({ n1: 1, n2: 2 }));
const multNumbers = (nums) => nums.n1 * nums.n2;
console.log(multNumbers({ n1: 1, n2: 2 }));
const someNumbers = {
    n1: 5,
    n2: 10
};
console.log(multNumbers(someNumbers));
// narrowing
// checagem de tipos
const doSomething = (info) => {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número");
};
doSomething(7);
doSomething(true);
// generics
function showArraysItens(arr) {
    arr.forEach((item) => console.log(`Item: ${item}`));
}
const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
showArraysItens(a1);
showArraysItens(a2);
// classes
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }
}
const mika = new User('Mika', 'Admin', true);
console.log(mika);
mika.showUserName();
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é: ${this.brand}`);
    }
}
const fusca = new Car("VW", 4);
fusca.showBrand();
// herança
class SuperCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("Audi", 4, 2.0);
console.log(a4);
a4.showBrand();
// decorators
// constructor decorator
function baseParameters() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createdAt = new Date();
            }
        };
    };
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    baseParameters()
], Person);
const bennett = new Person("Bennett");
console.log(bennett);
