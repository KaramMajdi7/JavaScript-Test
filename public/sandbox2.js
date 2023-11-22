"use strict";
const char = "Karam";
// console.log(char);
const input = document.querySelectorAll("input");
// console.log(input);
// input.forEach(i => {
//     console.log(i);
// }); 
const circ = (diameter) => {
    return diameter * Math.PI;
};
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
};
// console.log(test.name);
// explicit types
let names2 = [];
// union types
let mixed2 = ["Karam", 25];
// console.log(mixed2);
// object
let test1;
test1 = {
    name: "Karam",
    age: 25,
};
// test1 = "Karam"; --> Error
// test1 = []; --> Success
let test2;
test2 = {
    name: "Karam",
};
// console.log(test2);
// let test3 = {
//     name: string;
//     age: number;
// }
// Dynamic (any) types
let test3 = 25;
test3 = "Karam";
// console.log(test3);  
// Functions
const add = (a, b, c) => {
    return a + b + (c || 0);
};
// console.log(add(5, 10, 5));
// Using a return type
const fun = (a, b) => {
    console.log(a + b);
};
const logData = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greetUser = (user) => {
    console.log(`Hello ${user.name}`);
};
let logUserDetails;
logUserDetails = (user) => {
    console.log(`${user.name} has a uid of ${user.uid}`);
};
