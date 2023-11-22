const char = "Karam";
// console.log(char);

const input = document.querySelectorAll("input");
// console.log(input);

// input.forEach(i => {
//     console.log(i);
// }); 

const circ = (diameter:number) => {
    return diameter * Math.PI;
}

// console.log(circ(3));

// Arrays

let names = ["Karam", "Majdi", "Mansour"];
// names.push(3); --> Error
// names.push("Ahmad"); --> Success
// names[2] = 3; --> Error
// names[2] = "Ahmad"; --> Success


let mixed = ["Karam", "Majdi", "Mansour", 1, 2, 3];
// mixed.push("Ahmad"); --> Success
// mixed.push(3); --> Success
// mixed[2] = "Ahmad"; --> Success
// mixed[2] = 3; --> Success

// Objects

let test = {
    name: "Karam",
    age: 25,
}

// console.log(test.name);

// explicit types
let names2: string[] = [];

// union types
let mixed2: (string | number)[] = ["Karam", 25];
// console.log(mixed2);

// object
let test1 : object;
test1 = {
    name: "Karam",
    age: 25,
}
// test1 = "Karam"; --> Error
// test1 = []; --> Success

let test2 : {
    name: string;
    age?: number; // optional
}

test2 = { 
    name: "Karam",
}

// console.log(test2);

// let test3 = {
//     name: string;
//     age: number;
// }

// Dynamic (any) types
let test3 : any = 25;
test3 = "Karam";
// console.log(test3);  

// Functions
const add = (a: number, b:number, c?:number) => {
    return a + b + (c || 0);
}

// console.log(add(5, 10, 5));

// Using a return type
const fun = (a: number, b: number): void => {
    console.log(a + b);
}

// fun(5, 10)

// Type Aliases
type StringOrNum = string | number;
type objWithName = {name: string, uid: StringOrNum};

const logData = (uid: StringOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}

const greetUser = (user: objWithName) => {
    console.log(`Hello ${user.name}`);
}

// Function Signatures
type StringOrNum2 = string | number;
type userInfo = {name: string, uid: StringOrNum2};

let logUserDetails: (obj: userInfo) => void;

logUserDetails = (user: userInfo) => {
    console.log(`${user.name} has a uid of ${user.uid}`);
};