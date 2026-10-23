// Loops :- it is a statement which is run as well as when our condition is true...

// while loop
//  do while loop
// for loop

// 1. Intialise a variable
// 2. condition
// 3. incremnet / decrement

let x = 1;

while (x <= 20) {
  console.log(x);
  x++;
}

// One time run as well as our condition is false.
let y = 1;

do {
  console.log(y);
  y++;
} while (y > 10);

//  for loop

for (let z = 1; z < 10; z++) {
  console.log(z);
}

for (let z = 10; z >= 1; z--) {
  console.log(z);
}
