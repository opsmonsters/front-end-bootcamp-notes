console.log("Starting Game");

let userScore = 0;
let computerScore = 0;

let winningScore = 2;

while (userScore < winningScore && computerScore < winningScore) {
  let userChoice = prompt("Enter your choice");

  let randomNumber = Math.floor(Math.random() * 3);
  let computerChoice = "";
  if (randomNumber === 0) {
    computerChoice = "rock";
  } else if (randomNumber === 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "sissor";
  }

  console.log("Your Choice " + userChoice);
  console.log("Computer Choice " + computerChoice);

  if (userChoice == computerChoice) {
    console.log("Match Draw");
    continue;
  }

  if (userChoice == "rock" && computerChoice == "sissor") {
    console.log("You Win");
    userScore++;
    continue;
  }

  if (userChoice == "paper" && computerChoice == "rock") {
    console.log("You Win");
    userScore++;
    continue;
  }

  if (userChoice == "sissor" && computerChoice == "paper") {
    console.log("You Win");
    userScore++;
    continue;
  }

  console.log("Computer Win");
  computerScore++;
}

console.log("======================================================");
console.log("===========          GAME OVER    ====================");

if (userScore > computerScore) {
  console.log("You win");
} else {
  console.log("Computer Win");
}
console.log("======================================================");
console.log("======================================================");
