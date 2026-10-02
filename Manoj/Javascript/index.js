// Javascript is a programing language. it is used to develop our websites / application.
// it is precompiled(complier) , interpted and scripted language.

// machine languge :-  binary numbers (0,1)

// link to our html page :-
// internal :- script tag apply into the body ad head tag.
// external :- external file link by the link into the head.

// Variables :- it is used to store our data.

// create a varible :-

let x = 10;

// let :- keywords
//  x :- variable name
// = :- assingment operator
// 10 :- data

console.log(x);

let b = 20;
console.log(b);

// Keywords :- let , var , const

// 1. let :- it is not re-declared.
// :- it can be re-assign.
// :- it is a block scope

let a = 10;
// let a = 20;
console.log("a is ", a);

// re-assign kr rhe h
a = 30;
console.log("a is after line number 38 ", a);

{
  let manoj = 1;
  console.log("maonoj", manoj);
}

// not access the value outer the block..
// console.log("maonoj", manoj);

// 2. Var :- it can be re-declared.
// it can be re-assign.
// it can not be block scope

{
  var number = 12;
  console.log("inner number", number);
}

console.log("outer", number);


// 3. const :- it can not be re-declared.
// it can not be re-assign.
//  it can be a block scope.