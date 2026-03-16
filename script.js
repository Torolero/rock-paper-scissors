/*
Plan: No user interface, just console.
Randomly generate an input (rock, paper or scissors).
Return input to the user as a string.
*/

function getComputerChoice() {
    let choice = Math.random();

    if (choice >= 0.66) {
        console.log("rock");
        choice = "rock";
    } else if (choice <= 0.33) {
        console.log("paper");
        choice = "paper";
    }else {
        console.log("scissors");
        choice = "scissors";
    }
    return choice;
}
let computerChoice = getComputerChoice();



/*
User will now input a choice
The computer will take that choice 
The computer will return user choice
*/

function getHumanChoice() {
    let userChoice = prompt("Rock? Paper? Scissors?");
    userChoice = userChoice.toLowerCase();
    return userChoice;
}
let userChoice = getHumanChoice();

/*
Create variables for computer and user score
*/

let humanScore = 0;
let computerScore = 0;

/*
Take both the computer and user choices
Compare both choices and determine winner
Increment the winning player score by one
Announce the winner
*/

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Paper beats Rock");
        computerScore++;
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats Scissors");
        humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors beats Paper");
        computerScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats Rock");
        humanScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beats Paper");
        humanScore++;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose! Rock beats Scissors");
        computerScore++;
    } else if (humanChoice == computerChoice){
        console.log("Nobody wins. It's a Tie!");
    }

}
playRound(userChoice, computerChoice);

/*
Need to be able to play the game for 5 rounds
Keep track of score across rounds
Announces winner at the end
*/
