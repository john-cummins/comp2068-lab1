//user prompt. converted to lowercase.
var userChoice = prompt("Rock, Paper, Scissors! Choose one.").toLowerCase()

//computer choice is completely random. 
var computerChoice  = Math.random();

//Switch function for determining computerChoice
switch(computerChoice) {
  case computerChoice < 0.34:
    computerChoice = "rock";
    break;
  case computerChoice > 0.68:
    computerChoice = "paper";
    break;
  default:
    computerChoice = "scissors";
    break;
}

//message report to user to ensure no cheating
console.log("On one side, we have the computer! They have chosen: " + computerChoice + ". And our human contestant has chosen: " + userChoice + ". Lets look at the results!");

//Switch statement to determine victor. Default includes when the user does not write a valid choice.
switch(true) {
  case (userChoice === "rock" && computerChoice === "scissors") || (userChoice === "scissors" && computerChoice === "paper") || (userChoice === "paper" && computerChoice === "rock"):
    console.log("User wins!");
    break;
  case (userChoice === "scissors" && computerChoice === "rock") || (userChoice === "paper" && computerChoice === "scissors") || (userChoice === "rock" && computerChoice === "paper"):
    console.log("Computer wins!");
    break;
  default:
    console.log("It's a tie!");
    break;
}
