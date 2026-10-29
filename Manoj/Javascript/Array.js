// Array :- its is used to store multiple data and values.
// Array works on index number. 0,1,2,3,4,5,6

let arr = [1, 2, 4, 5, 5, 5, 5, 5, 5, 533, 232, 3, 23];
console.log(arr);

// To find the length
console.log(arr.length);

// to access a element/data
console.log(arr[10]);

// to change a value
arr[5] = "Manoj";
console.log(arr);

// Methods....
// pop :- to remove a value from tha last of our aaray.
// push :- to add a value from the last of our array.

arr.pop();
arr.pop();
arr.pop();
console.log(arr);

arr.push(12);
arr.push("kumar");
arr.push(21);
console.log(arr);

// Shift :- remove first element of our array
// unshift :- add first element of our array

arr.shift();
console.log(arr);

arr.unshift("manoj singh");
console.log(arr);

// Concat :- which is used to add two or more array values.
let x = [1, 2, 3, 4, 4, 4, 4, 4, 4, 4, 4];
let y = [5, 6, 7, 78];
let y1 = [5, 6, 7, 78];

let z = x.concat(y);
let z1 = y.concat(x, y1);
console.log(z);
console.log(z1);

// Splice :-
// 1. index number
// 2. remove items
// 3. add value

x.splice(3, 3, "Hii");
console.log(x);

// slice :- to cut a piece of array. last index number is not include in slice method
let a = [1, 2, 3, 4, 5, 6, 74, 4, 3, 3, 3, 2, 222, 1, 1, 1, 1];

console.log(a)
let newarr = a.slice(0,6)
console.log(newarr)
