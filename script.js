console.log("Script loaded");

const choices = document.querySelectorAll("button");
const result = document.getElementById("result");

choices.forEach(choice => {
    choice.addEventListener("click", (e) => {
        const userChoice = e.target.id;
        const computerChoice = getComputerChoice();
        const winner = determineWinner(userChoice, computerChoice);
        displayResult(winner, computerChoice);
    });
});

function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber < 0.34) return "rock";
    if (randomNumber < 0.67) return "paper";
    return "scissors";
}

function determineWinner(user, computer) {
    if (user === computer) return "It's a tie!";
    if (
        (user === "rock" && computer === "scissors") ||
        (user === "paper" && computer === "rock") ||
        (user === "scissors" && computer === "paper")
    ) {
        return "You win!";
    }
    return "You lose!";
}

function displayResult(winner, computerChoice) {
    result.textContent = `Computer chose ${computerChoice}. ${winner}`;
}
