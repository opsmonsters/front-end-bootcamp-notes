console.log("Starting Game");

let isGameRunning = true;

while (isGameRunning) {
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
    break;
  }

  if (userChoice == "rock" && computerChoice == "sissor") {
    console.log("You Win");
    break;
  }

  if (userChoice == "paper" && computerChoice == "rock") {
    console.log("You Win");
    break;
  }

  if (userChoice == "sissor" && computerChoice == "paper") {
    console.log("You Win");
    break;
  }

  console.log("Computer Win");
  isGameRunning = false;
}
