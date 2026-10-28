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

arr.unshift("manoj singh")
console.log(arr)
