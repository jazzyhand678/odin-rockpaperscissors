let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.random();
    let result = "";
    if (computerChoice < (1/3)) {
        result = "Rock";
    } else if (computerChoice >= (1/3) && computerChoice < (1/3*2)) {
        result = "Paper";
    } else {
        result = "Scissors";
    }
    return result;
}

function getHumanChoice() {
    let userInput = prompt("Enter your choice of Rock, Paper, or Scissors:");
    return userInput;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toUpperCase();
    computerChoice = computerChoice.toUpperCase();

    if (humanChoice === computerChoice) {
        console.log("You tied!");
    } else if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
        console.log("You win! " + humanChoice + " beats " + computerChoice + " !");
        humanScore++;
    } else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
        console.log("You win! " + humanChoice + " beats " + computerChoice + " !");
        humanScore++;
    } else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
        console.log("You win! " + humanChoice + " beats " + computerChoice + " !");
        humanScore++;
    } else {
        console.log("You lost! " + computerChoice + " beats " + humanChoice + " !");
        computerScore++;
    }
    return;
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
}

function playGame() {
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


playGame();