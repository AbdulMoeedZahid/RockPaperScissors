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
// console.log("Computer choice is: " + getComputerChoice());

function getPlayerChoice() {
let playerChoice = prompt("Please enter your choice: rock, paper, or scissors");
playerChoice = playerChoice.toLowerCase();
if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
    alert("Invalid choice. Please try again.");
    return getPlayerChoice();
}
return playerChoice;
}

// console.log("Player choice is: " + getPlayerChoice());

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return "You win! " + playerSelection + " beats " + computerSelection;
    } else {
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}   

console.log(playRound(getPlayerChoice(), getComputerChoice()));