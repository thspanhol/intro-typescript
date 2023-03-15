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

// union type

let id: string | number = '10';

id = 200;

/* id = true; */

// type alias

type myIdType = number | string;

const userId: myIdType = 10
const productId: myIdType = '7'

// enum
// tamanho de roupas (size: Médio, size: Pequeno)

enum Size {
    P = 'Pequeno',
    M = 'Médio',
    G = 'Grande'
}

const camisa = {
    name: 'camisa',
    size: Size.G,
}

console.log(camisa);

// literal types
let teste: "algumvalor" | null;

/* teste = "outrovalor" */

teste = "algumvalor";
teste = null;

// funcoes

const sum = (a: number, b:number) => a + b;

console.log(sum(7,14));
/* console.log(sum('t','h')); */

const logger = (msg: string): void => console.log(msg);

const greeting = (name: string, greet?: string): void => {
    if (greet){
        console.log(`Olá ${greet} ${name}`);

    } else{
        console.log(`Olá ${name}`);    
    }
}

greeting('Thales');
greeting('Thales', 'Sir');

// interfaces

interface MathFunctionParams {
    n1: number,
    n2:number
}

const sumNumbers = (nums: MathFunctionParams) => nums.n1 + nums.n2;

console.log(sumNumbers({n1: 1, n2: 2}));

const multNumbers = (nums: MathFunctionParams) => nums.n1 * nums.n2;

console.log(multNumbers({n1: 1, n2: 2}));

const someNumbers: MathFunctionParams = {
    n1: 5,
    n2: 10
};

console.log(multNumbers(someNumbers));

// narrowing
// checagem de tipos

const doSomething = (info: number | boolean) => {
    if(typeof info === "number"){
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número");    
}

doSomething(7);
doSomething(true);

// generics

function showArraysItens<T>(arr: T[]) {
    arr.forEach((item) => console.log(`Item: ${item}`)
    )
}

const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];

showArraysItens(a1);
showArraysItens(a2);

// classes

class User {
    name
    role
    isApproved

    constructor(name: string, role: string, isApproved: boolean) {
        this.name = name
        this.role = role
        this.isApproved = isApproved
    }

    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
        
    }
}

const mika = new User('Mika', 'Admin', true);

console.log(mika);
mika.showUserName();

// interfaces em classes

interface IVehicle {
    brand: string
    showBrand(): void
}

class Car implements IVehicle {
    brand
    wheels

    constructor(brand: string, wheels: number){
        this.brand = brand
        this.wheels = wheels
    }

    showBrand(): void {
        console.log(`A marca do carro é: ${this.brand}`); 
    }
}

const fusca = new Car("VW", 4);

fusca.showBrand();

// herança

class SuperCar extends Car {
    engine

    constructor(brand: string, wheels: number, engine: number) {
        super(brand, wheels)
        this.engine = engine
    }
}

const a4 = new SuperCar("Audi", 4, 2.0)

console.log(a4);
a4.showBrand();

// decorators

// constructor decorator
function baseParameters() {
    return function <T extends {new (...args: any[]): {}}>(constructor: T) {
        return class extends constructor {
            id = Math.random();
            createdAt = new Date();
        }
    }
}

@baseParameters()
class Person {
    name

    constructor(name: string) {
        this.name = name
    }  
}

const bennett = new Person("Bennett");

console.log(bennett);





