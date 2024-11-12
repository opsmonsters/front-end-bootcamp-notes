//functions

// function <name> (<input1>, <input2>) {
//function body
// }

//basic function

function printName() {
  console.log("========================");
  console.log("Gershon");
  console.log("========================");
}

function printNameFromParameters(name, age) {
  console.log("========================");
  console.log(name);
  console.log(age);
  console.log("========================");
}

// printName();
// printNameFromParameters("Ajin", 20);
// printNameFromParameters("Anantha", 19);
// printNameFromParameters("Divya", 19);

// Return keyword
function addTwoNumbers(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

function multiplyTwoNumbers(num1, num2) {
  let mul = num1 * num2;
  return mul;
}

// let a = addTwoNumbers(5, 10);
// console.log(a);
// let b = multiplyTwoNumbers(5, 10);
// console.log(b);

// Arrow Functions
// let <functionName> = (<inputs>) => <function_body>
let addTwoNumbersArrow = (num1, num2) => num1 + num2;

let c = addTwoNumbersArrow(1, 2);
console.log(c);
