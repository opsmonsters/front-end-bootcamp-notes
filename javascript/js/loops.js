//loops

// While Loop
let i = 0;

while (i < 10) {
  console.log("Gershon From while loop");
  console.log(i);
  i++;
}
console.log("Loop has ended");

// for loop
for (let j = 0; j <= 10; j++) {
  console.log("Gershon From For Loop");
  console.log(j);
}

for (let k = 0; k < 10; k++) {
  if (k % 2 == 1) {
    console.log(k + " Is Odd");
  }
}

//break
for (let l = 0; l < 10; l++) {
  if (l == 5) {
    break;
  }
  console.log("Inside break " + l + " times");
}

//continue
for (let m = 0; m < 10; m++) {
  if (m == 5) {
    continue;
  }
  console.log("Inside continue " + m + " times");
}
