// // if-else Statements (Conditions) :- it is a statement which is run when our condition is true.

// // Syntax :-

// // if(condition){
// //     code to be executed.
// // }

// // if

// let x = 10;

// if (x == 10) {
//   console.log("x is equal to 10");
// }

// // if-else

// let y = 101;
// if (y == 10) {
//   console.log("y is equal to 10");
// } else {
//   console.log("y is not equal to 10");
// }

// // Multiple conditions:- if else elseif

// let z = 89;

// if (z == 10) {
//   console.log("z si equal to 10");
// } else if (z > 10) {
//   console.log("z is greater than 10");
// } else {
//   console.log("z is smaller than 10");
// }

// // Questions :-
// // To find greater number

let x = 10;
let y = 10;

if (x > y) {
  console.log("X is greater than Y");
} else if (x == y) {
  console.log(" x is equal to y");
} else {
  console.log("y is greater than x");
}

// to find a number is Positive / negative

let number = -2;

if (number >= 0) {
  console.log("Positive");
} else {
  console.log("negative");
}

// Calculator

let operator = "*";
let num = 10;
let num2 = 20;

if (operator == "+") {
  console.log("num + num2 ", num + num2);
} else if (operator == "-") {
  console.log("num - num2", num - num2);
} else if (operator == "*") {
  console.log("num * num2", num * num2);
} else if (operator == "/") {
  console.log("num / num2", num / num2);
} else {
  console.log("Operator is not match (+,-,*,/)");
}
