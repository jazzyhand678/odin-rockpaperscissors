// for game logic
let humanScore = 0;
let computerScore = 0;
const options = ['rock', 'paper', 'scissors'];

// for game UI
const rockBtn = document.getElementById("rock");
const sciBtn = document.getElementById("scissors");
const papBtn = document.getElementById("paper");

function getComputerChoice() {
    let computerChoice = options[Math.floor(Math.random() * options.length)];
    console.log(computerChoice);
    return computerChoice;
}

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) {
        console.log("You tied!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "SCISSORS" && computerChoice === "PAPER") ||
        (humanChoice === "PAPER" && computerChoice === "ROCK")
    ) {
        console.log("You win! " + humanChoice + " beats " + computerChoice + " !");
        humanScore++;
    } else {
        console.log("You lost! " + computerChoice + " beats " + humanChoice + " !");
        computerScore++;
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
}

/*function playGame() {
    let message = '';
    let i = 0;
    while (i < 5) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoice);
        i++;
    }
    if (humanScore > computerScore) {
        message = 'Congratulations! You are the winner!';
    } else if (humanScore === computerScore) {
        message = 'Not bad! You tied!';
    } else {
        message = 'Uh oh! You lost!';
    }
    resetGame();
    return console.log(message);
}


playGame();*/

rockBtn.addEventListener("click", () => {playRound("rock")});
sciBtn.addEventListener("click", () => {playRound("scissors")});
papBtn.addEventListener("click", () => {playRound("paper")});