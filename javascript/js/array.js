// Creation
// let <array_name> = [ <value1>, <value2>, <value3>  ]
let countries = ["India", "Pakistan", "China"];

let numbers = [1, 2, 3, 4, 5];

let randomArray = ["Some Text", 1, 34234.234, true];

console.log(countries);

//Accessing
console.log(countries[0]);
console.log(countries[2]);

//Inserting
countries.push("Sri Lanka");

console.log(countries);

//removing
countries.pop();
console.log(countries);

//loop
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i]);
}

// for each (Functional)
countries.forEach((country) => {
  console.log(country);
});
