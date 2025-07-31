console.log("Script loaded");


function getComputerChoice() {
let computerChoiceVariable = Math.random();

if (computerChoiceVariable < 0.34) {
    computerChoice = "rock";
} else if (computerChoiceVariable <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}
return computerChoice;
}
//console.log(computerChoiceVariable);
console.log("Computer choice is: " + getComputerChoice());