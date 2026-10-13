// // // // Javascript is a programing language. it is used to develop our websites / application.
// // // // it is precompiled(complier) , interpted and scripted language.

// // // // machine languge :-  binary numbers (0,1)

// // // // link to our html page :-
// // // // internal :- script tag apply into the body ad head tag.
// // // // external :- external file link by the link into the head.

// // // // Variables :- it is used to store our data.

// // // // create a varible :-

// // // let x = 10;

// // // // let :- keywords
// // // //  x :- variable name
// // // // = :- assingment operator
// // // // 10 :- data

// // // console.log(x);

// // // let b = 20;
// // // console.log(b);

// // // // Keywords :- let , var , const

// // // // 1. let :- it is not re-declared.
// // // // :- it can be re-assign.
// // // // :- it is a block scope

// // // let a = 10;
// // // // let a = 20;
// // // console.log("a is ", a);

// // // // re-assign kr rhe h
// // // a = 30;
// // // console.log("a is after line number 38 ", a);

// // // {
// // //   let manoj = 1;
// // //   console.log("maonoj", manoj);
// // // }

// // // // not access the value outer the block..
// // // // console.log("maonoj", manoj);

// // // // 2. Var :- it can be re-declared.
// // // // it can be re-assign.
// // // // it can not be block scope

// // // {
// // //   var number = 12;
// // //   console.log("inner number", number);
// // // }

// // // console.log("outer", number);

// // // // 3. const :- it can not be re-declared.
// // // // it can not be re-assign.
// // // //  it can be a block scope.

// // let x = 10;

// // // Variables name :- Identifiers
// // // not a number :-
// // // A to Z || a to z :- any name
// // let y = 10;
// // // Any name
// // let manoj = 20;
// // // Any Alphabets + number
// // let a10 = 20;
// // let rajesh1 = 20;

// // // variabel name start with underscore
// // let _man = 10;

// // // case- sensitive :- capital name/letters , small name/letters
// // let a = 10;
// // let A = 100;

// // // camel case :- word's first letter small, after that all first letter of word is Capital.
// // let employesSalaryData = 10;
// // let manojSingh = 10;

// // // Pascal case :- All Word's first letter is capital
// // let EmployeServiceData = 20;

// // // snake case :- Seprate all words by underscore..
// // let employe_service_data = 20;

// // Data Types :-

// // Number
// let x = 10;

// // String :- Store character values.
// // Used single quotes and double quotes

// let name2 = "manoj singh";
// let name1 = "Rahul Kumar";

// console.log(name2);

// // Null :-
// let a = null;

// // undefined
// let y;
// console.log(y);

// // Boolean values :- true and false
// let t = true;
// let f = false;

// // Array :- is is used to store multiple values/data.
// // Create a array
// let arr = [1, 2, 3, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6];
// console.log(arr);

// // Object :- is is used to store multiple values/data in the form of key and values
// let obj = {
//   id: 1,
//   name: "manoj singh",
//   classe: "12th",
// };

// console.log(obj);

// Operators :-

// // 1. Arithmetic Operators
// // +
// let x = 103;
// let y = 20;

// let z = x + y;
// console.log("z is", z);

// // -
// let minus = x - y;
// console.log("Substract is:", minus);
// // *

// let mul = x * y;
// console.log(mul);

// // /

// let divide = x / y;
// console.log(divide);

// // % modulus :- remainder
// let a = 10;
// let b = 4;

// let md = a % b;
// console.log("reminder", md);

// // ++ increment op :- increase by 1
// let num = 10;
// let inc = ++num;
// let inc1 = ++num;
// console.log(inc1);

// // -- decrement op :- decrese by 1
// let num1 = 10;
// let d = --num1;
// console.log(d);

// // ** expontation op :- Power
// let p = 3;
// let power = 12;

// let pp = p ** power;
// console.log(pp);

// 2. comparision Operators :- result based on bollean value.

let number1 = 10;
let number2 = 20;
let number3 = "10";
let number4 = 20;

// == check equal values

console.log(number1 == number2); // false
console.log(number2 == number4); // true
console.log(number1 == number3); // true

// != :- vice-versa of ==
console.log(number1 != number2); // true
console.log(number2 != number4); // false

// === check value and data types
console.log(number1 === number2); // false
console.log(number2 === number4); // true
console.log(number1 === number3); // false

// !==  :- vice versa of ===
console.log(number2 !== number4); // false
console.log(number1 !== number3); // true

let number5 = 20;
let number6 = 10;
let number7 = 10;

// <= less than or equal
console.log(number5 <= number6); // false
console.log(number6 <= number7); // true

// >=  greter than or eqaul

// Assignemnt Operators :-
// =
// +=
let a1 = 10;
let a2 = a1 + 10;
console.log("a1 after +10", a1); // 10
let a3 = (a1 += 10);
console.log("a1 after +=", a1); // 20

// -=
// *=

console.log(a1 *= 2); // 40

// /=


// **=
// %=
