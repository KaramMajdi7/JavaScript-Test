// String 
// console.log("Hello World!");

// String Concatenation
let firstName = "Karam";
let lastName = "Majdi";

let fullName = firstName + " " + lastName;

// console.log(fullName);

// Getting Characters
// console.log(fullName[0]);

// String Length
// console.log(fullName.length);

// String Methods
// console.log(fullName.toUpperCase());   
// console.log(fullName.toLowerCase()); 
// console.log(fullName.indexOf("K"));

// console.log(fullName.lastIndexOf("a"));
 
// console.log(fullName.slice(0, 5));
// console.log(fullName.substr(2, 9));

let res = fullName.replace("a", "!");
// console.log(res);

// Math Operators
let x = 2;
let mathRes = x**3;
// console.log(mathRes);

let y = 10;

// console.log(x * "Hello");
// console.log(x + "Hello");

// Template Strings
let title = "Oliver Twist";
let author = "CHarles Dickens";
let likes = 100;

// Concatenation way
let concWay = "The book " + title + " by " + author + " has " + likes + " likes";
// console.log(concWay);

// Template String way (Backticks)
let tempWay = `The book title is ${title} by ${author} and it has ${likes} likes`;
// console.log(tempWay);

// Creating HTML Templates
let html = `
<h2>The book title is: ${title}</h2>
<p>By ${author}</p>
<span>This book has ${likes} likes</span>
`;

// Arrays
let testArr = ["Karam", "Majdi", "Mansour"];

// Array Methods
// console.log(testArr.length);
// console.log(testArr.join(" - "));
// console.log(testArr.indexOf("Majdi"));

let concRes = testArr.concat(["Hello", "World"]);
// console.log(concRes);

let pushRes = testArr.push("Hello");
// console.log(testArr);
pushRes = testArr.pop();
// console.log(testArr);

// Booleans & Comparisons
let email = "test@gmail.com";

let resBool = email.includes("@");
// console.log(resBool);

// Comparison Operators
let age = 25;
// console.log(age == 25);
// console.log(age != 25);
// console.log(age > 20);

// Loose Comparison
// console.log(age == 25);
// console.log(age == "25");

// Strict Comparison
// console.log(age === 25);
// console.log(age === "25");

// Type Conversion
let score = "100";
let num = 150;

score = Number(score);
numChr = String(num); 

// console.log(score + 1);

// console.log(typeof score);
// console.log(typeof numChr);



//////////////////////////////////////////////////////////////////
// Loops
//////////////////////////////////////////////////////////////////

// For Loops
// for(let i=0; i<5; i++){
//     console.log(`Loop: ${i}`);
// }

const arrNames = ["Karam", "Majdi", "Mansour"];
// for(let i=0; i<arrNames.length; i++){
//     console.log(arrNames[i]);
// }

// While Loops
// let i = 0;
// while(i < 5){
//     console.log(`Loop: ${i}`);
//     i++;
// }

// let i = 0;
// while(i < arrNames.length){
//     console.log(arrNames[i]);
//     i++;
// }

// Do While Loops
let i = 6;

// do{
//     console.log(`Loop: ${i}`);
//     i++;
// } while(i < 5);

// If Statements (Logical Operators - OR || and AND &&)
// const age_2 = 9;
// if(age_2 > 20){
//     console.log("You are over 20 years old");
// } else if (age_2 >= 10){
//     console.log("You are over 10 years old");
// } else {
//     console.log("You are under 10 years old");
// }

const scores = [50, 25, 0, 30, 100, 20, 10];

// for(let i = 0; i < scores.length; i++){
//     // Continue
//     if(scores[i] === 0){
//         continue;
//     }

//     console.log(`Your score is ${scores[i]}`); 
    
//     if(scores[i] === 100){
//         console.log("Congrats, you got the top score!");
//         break;
//     }
// }

// Switch Statements
// const grade = "D";

// switch(grade){
//     case "A":
//         console.log("You got an A!");
//         break;
//     case "B":
//         console.log("You got an B!");
//         break;
//     case "C":
//         console.log("You got an C!");
//         break;
//     case "D":
//         console.log("You got an D!");
//         break;
//     case "E":
//         console.log("You got an E!");
//         break;
//     default:
//         console.log("Not a valid grade!");
// }

// Variables & Block Scope
let age_3 = 30;

// if(true){
//     let age_3 = 40;
//     let name = "Karam";
//     console.log("Inside 1st code block: ", age_3, name);

//     if(true){
//         let age_3 = 50;
//         console.log("Inside 2nd code block: ", age_3);
//         var test = "hello";
//     }
// }

// console.log("Outside code block: ", age_3, name, test);



//////////////////////////////////////////////////////////////////
// Functions
//////////////////////////////////////////////////////////////////

// Function Declaration
function test(){
    console.log("Hello World!");
};

// Function Expression
const greet = function(name, age){
    console.log(`Hello ${name}, you are ${age} years old!`);
};

// test();
// greet("Karam", 22);

// Returning Values
const calcArea = function(radius){
    return 3.14 * radius**2;
};

const area = calcArea(5);
// console.log(area);

// Arrow Functions
const calcAreaArrow = radius => {
    return 3.14 * radius**2;
}

const calcAreaArrow2 = radius => 3.14 * radius**2;

// const areaArrow = calcAreaArrow(5);
// console.log(`The area is ${areaArrow}`);

// const areaArrow2 = calcAreaArrow2(5);
// console.log(`The area2 is ${areaArrow2}`);

// Practice Arrow Functions
const greetArrow = () => "Hello World!";

const calcBill = (products, tax) => {
    let total = 0;
    for(let i =0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
}

// console.log(greetArrow());
// console.log(calcBill([10, 15, 30], 0.2));

// Callbacks & Foreach
// const myFunc = (callBackFunc) => {
//     let x = 1;
//     let y = 2;
//     callBackFunc(x, y);
// }

// myFunc((x, y) => {
//     console.log(x + y);
// });

let arrNames2 = ["Karam", "Majdi", "Mansour"];

// arrNames2.forEach((name, index) => {
//     console.log(name, index);
// });

// const printName = (name, index, arr) => {
//     console.log(`Hello ${name}, your index is ${index} and your array is ${arr}`);
// }

// arrNames2.forEach(printName);

// Get a reference to the "ul"
// const ul = document.querySelector(".names");

// arrNames2.forEach((name, index) => {
//     let html = `<li>${index} - ${name}</li>`;
//     ul.innerHTML += html;
// });



//////////////////////////////////////////////////////////////////
// Objects
//////////////////////////////////////////////////////////////////

// Object Literals

let user = {
    name: "Karam",
    age: 22,
    email: "Karam@test.com",
    number: 123456789,
    blogs: [
        {
            title: "Blog 1",
            likes: 30,
        },
        {
            title: "Blog 2",
            likes: 50,
        }
    ],
    login: () => {
        console.log("The user logged in");
    },
    logBlogs() {
        console.log(`The user ${this.name} has written the following blogs:`);
        this.blogs.forEach(blog => {
            console.log(blog);
        });
    },
};

// console.log(user);
// console.log(user.name); // Dot Notation
// console.log(user["name"]); // Square Bracket Notation

// console.log(typeof user);

// user.login();
// user.logBlogs();


// Reference Types

// let score_1 = 50;
// let score_2 = score_1;

// console.log(`score_1: ${score_1}, score_2: ${score_2}`);

// let obj_1 = {
//     name: "name of obj",
//     index: 1,
// };

// let obj_2 = obj_1;

// console.log(`obj_1: ${obj_1.name}, obj_2: ${obj_2.name}`);

// score_1 = 100;
// console.log(`score_1: ${score_1}, score_2: ${score_2}`);

// obj_1.name = "new name";
// console.log(`obj_1: ${obj_1.name}, obj_2: ${obj_2.name}`);



//////////////////////////////////////////////////////////////////
// DOM
//////////////////////////////////////////////////////////////////

const para = document.querySelectorAll("p");

// para.forEach((p,index) => {
//     console.log(p.innerText, index);
// })

// console.log(para[0].innerHTML);

const errors = document.querySelectorAll(".error");
// errors.forEach(error => {
//     console.log(`Using the querySelectorAll: ${error.innerText}`);
// });

const page_title = document.getElementById("page-title");
// page_title.innerText = " - New Title";

const classes = document.getElementsByClassName("error");
// console.log(classes);
// console.log(classes[0]);

// Can't use forEach on classes using getElementsByClassName
// classes.forEach(error => {
//     console.log(error);
// })

const tags = document.getElementsByTagName("p");
// console.log(tags);

const parChange = document.querySelector("p");
// parChange.innerHTML = "Hello World! 2";


const parChangeAll = document.querySelectorAll("p");
parChangeAll.forEach((par, index) => {
    if(index % 2 === 0){
        par.innerHTML = "Hello World! ----- New -----";
    }
});

// parChange.innerText = "Test";

// const names_3 = ["Karam", "Majdi", "Mansour"];
// const content = document.querySelector(".content");

// names_3.forEach(name => {
//     content.innerHTML += `<p>${name}</p>`;
// });

const link = document.querySelector("a");

link.setAttribute("href", "https://www.youtube.com");
link.innerText = "Youtube";

page_title.style.margin = "25px 25px";

const par_1 = document.querySelector("p");
par_1.classList.remove("errors");