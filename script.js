let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.random();
    let result = "";
    if (computerChoice < (1/3)) {
        result = "Rock";
    }
    else if (computerChoice >= (1/3) && computerChoice < (1/3*2)) {
        result = "Paper";
    }
    else {
        result = "Scissors";
    }
    return result;
}

function getHumanChoice() {
    let userInput = prompt("Enter your choice of Rock, Paper, or Scissors:");
    return userInput;
}