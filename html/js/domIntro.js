//id selector
let redBox = document.getElementById("box1-id");
console.log(redBox);

//selector
let ul = document.querySelectorAll("#box1-id > div > ul");
console.log(ul);

//tag name
let divs = document.getElementsByTagName("div");
console.log(divs);

// className
let boxClass = document.getElementsByClassName("box1");
console.log(boxClass);

//name
let names = document.getElementsByName("box1name");
console.log(names);

let clickCount = 0;

function buttonClicked() {
  //selecting a button
  let scoreSpan = document.getElementById("score");
  clickCount++;
  scoreSpan.textContent = clickCount;
}
