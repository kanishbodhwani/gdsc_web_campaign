// Primitive types 

// 1. Number
// 2. BigInt // 123921903901209381n
// 3. String
// 4. Boolean
// 5. Null
// 6. Undefined
// 7. Symbol // Symbol("id")


// Reference types

//  - object
//  - function
//  - array

// console.log("Hi I am Javascript");

// var let const 

// const pi = 3.14
// pi = 1 
// cannot do this becuase with const you cannot change the value

// Let --> is block level 

// for(let i = 0; i < 3; i++) {
// console.log(i) --> it will console here
// }
// console.log(i) ---> Not here


// Var is for variables available to the entire function 

// for(var j = 0; j < 3; j++) {
    // console.log(j) --> it will console here
// }
// console.log(j) ---> it will console here


// Template strings 

// (function() {
// let name = "John Doe";
// console.log(`Hello ${name}`);
// })();

// falsy values

// 0
// ""
// null
// undefined
// NaN
// false

// if(undefined) {
//     console.log("I am true");
// }


// Operator precedence
// Short-circuit evaluation

// a || (b * c); // evaluate `a` first, then produce `a` if `a` is "truthy"
// a && (b < c); // evaluate `a` first, then produce `a` if `a` is "falsy"
// a ?? (b || c); // evaluate `a` first, then produce `a` if `a` is not `null` and not


// Logical operators

// && --> and
// || --> or
// ! --> not

// OR '||' operator finds the first truthy value
// const result = value1 || value2 || value3; what is wrong in this code?

// AND '&&' operator 
// In classical programming, AND returns true if both operands are truthy and false otherwise:

// NOT '!' operator
// The NOT operator converts the operand to boolean type: true becomes false, and vice versa:   

// null || undefined ?? "foo"; // 



// Comparison operators
// console.log(5 == "5")



// Functions

// function add(a, b) {
//     return a + b;
// }

// console.log(add(1, 2));

// IIFE

// (function() {
//     console.log("I am IIFE");
// })();
// (function() {
//     console.log("I am IIFE");
// }());

// Arrow functions

// const add = (a, b) => {
//     return a + b;
// }

// console.log(add(1, 2));

// const add = (a, b) => a + b;


// Default parameters
// const add = (a = 0, b = 0) => a + b; 

// Anonymous functions
// no specified name 

// Object literals

// const person = {
//     name: "John Doe",
//     age: 30,
//     greet: function() {
//         console.log("Hello");
//     }
// }

// console.log(person.name);


// Advanced concepts 

// Optional chaining

// const person = {
//     name: "John Doe",
//     age: 30,
//     greet: function() {
//         console.log("Hello");
//     }
// }

// console.log(person?.name);


// Arrays

// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers[0]);

// arrays methods

// const numbers = [1, 2, 3, 4, 5];

// numbers.push(6);
// numbers.unshift(0);
// numbers.pop();
// numbers.shift();
// numbers.splice(2, 1);
// numbers.reverse();
// numbers.sort();
// numbers.concat([6, 7, 8]);
// console.log(numbers.join(" - "));


// filter 

// const filtered = numbers.filter(function(value) {
//     return value > 3;
// });


// map 

// const mapped = numbers.map(function(value) {
//     return value * 2;
// });


// reduce

// const reducedArray = numbers.reduce(function(accumulator, value) {
//     console.log(accumulator, value);
//     return accumulator + value;
// }, 0);

// console.log(reducedArray);


// String functions 

// const name = "John Doe";

// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name.charAt(0));
// console.log(name.indexOf("Doe"));
// console.log(name.lastIndexOf("Doe"));
// console.log(name.substring(0, 4));
// console.log(name.slice(0, 7));
// console.log(name.split(" "));
// console.log(name.replace("Doe", "Smith"));
// console.log(name.includes("Doe"));


// Destructoring

// const person = {
//     name: "John Doe",
//     age: 30,
//     greet: function() {
//         console.log(this.name);
//     }
// }

// console.log(person['name'])

// const { name, age } = person;


// Spread 

// const person2 = {
//     ...person,
//     name: "Rohan"
// }

// // console.log(person2);

// person2.greet()

// closures

// function outer() {
//     let a = 10;
//     function inner() {
//         console.log(a);
//     }
//     return inner;
// }

// const innerFunc = outer();
// innerFunc();

// const innerFunc2 = outer();
// innerFunc2();


// setTimeout and setInterval

// setTimeout(function() {
//     console.log("Hello");
// }, 1000);

// let i = 0;
// const timer = setInterval(function() {
//     ++i;
//     if(i === 5) {
//         clearInterval(timer);
//     }
//     console.log(i);
// }, 1000);

// async await

// (async function() {
//     const todos = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     console.log(todos);
// })();


// Promises

// const promise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve("Hello");
//     }, 1000);
// });

// promise.then(function(value) {
//     console.log(value);
// });

// this keyword

// const person = {
//     name: "John Doe",
//     age: 30,
//     greet: function() {
//         console.log(this.name);
//     }
// }

// person.greet();

// try catch

// try {
//     console.log("Hello");
//     throw new Error("Something went wrong");
// } catch(error) {
//     console.log(error);
// } finally {
//     console.log("Finally");
// }


