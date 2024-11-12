// || -> OR
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// && -> AND
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// NOT
console.log(!true);
console.log(!false);

// nullish operator ??
let firstName;
let lastName;
console.log(firstName ?? lastName ?? "User");
