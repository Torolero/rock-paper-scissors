/*
Plan: No user interface, just console.
Randomly generate an input (rock, paper or scissors).
Return input to the user as a string.
*/
const body = document.querySelector("body");

const rockButton = document.createElement("button");
rockButton.textContent = "Rock";
body.appendChild(rockButton);

const paperButton = document.createElement("button");
paperButton.textContent = "Paper";
body.appendChild(paperButton);

const scissorsButton = document.createElement("button");
scissorsButton.textContent = "Scissors";
body.appendChild(scissorsButton);

let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");

const mainDiv = document.createElement("div");
body.appendChild(mainDiv);

const scoresParagraph = document.createElement("p");

const choicesP = document.createElement("p");

const roundResults = document.createElement("p");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const humanChoice = button.textContent.toLowerCase();
    const computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);

    scoresParagraph.textContent = `Computer Score is: ${computerScore} and Human Score is: ${humanScore}`;
    mainDiv.appendChild(scoresParagraph);

    choicesP.textContent = `Computer Choice is: ${getComputerChoice()} and Human Choice is: ${button.textContent.toLocaleLowerCase()}`;
    mainDiv.appendChild(choicesP);
    mainDiv.appendChild(roundResults);

    console.log("Computer Score is: " + computerScore);
    console.log("Human Score is: " + humanScore);

    winner();
  });
});


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
};
// let computerChoice = getComputerChoice();


/*
User will now input a choice
The computer will take that choice 
The computer will return user choice
*/

/*function getHumanChoice() {
    let humanChoice = prompt("Rock? Paper? Scissors?");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}*/

// let humanChoice = getHumanChoice();

/*
Create variables for computer and user score
*/


/*
Take both the computer and user choices
Compare both choices and determine winner
Increment the winning player score by one
Announce the winner
*/


function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Paper beats Rock");
        roundResults.textContent = `You lose! Paper beats Rock`;

        computerScore++;
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats Scissors");
        roundResults.textContent = "You win! Rock beats Scissors";

        humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors beats Paper");
        roundResults.textContent = "You lose! Scissors beats Paper";
        computerScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats Rock");
        roundResults.textContent = "You win! Paper beats Rock";
        humanScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beats Paper");
        roundResults.textContent = "You win! Scissors beats Paper";
        humanScore++;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose! Rock beats Scissors");
        roundResults.textContent = "You lose! Rock beats Scissors";
        computerScore++;
    } else if (humanChoice == "rock" && computerChoice == "rock" || humanChoice == "paper" && computerChoice == "paper" || humanChoice == "scissors" && computerChoice == "scissors"){
        console.log("Nobody wins. It's a Tie!");
        roundResults.textContent = "Nobody wins. It's a Tie!";
    }
}

// playRound(humanChoice, computerChoice);


/*
Need to be able to play the game for 5 rounds
Keep track of score across rounds
Announces winner at the end
*/

function playGame() {
    for (let i = 0; i < 5; i++) {
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();
    playRound(humanChoice, computerChoice);    
    console.log("Computer Score is: " + computerScore);
    console.log("User Score is: " + humanScore);
}
    // console.log("Computer Score is: " + computerScore);
    // console.log("User Score is: " + humanScore);
    // getComputerChoice();
    // getHumanChoice();
    // playRound();
    return humanScore;
    return computerScore;
}
// playGame();

// for (let i = 0; i < 4; i++) {
//     playGame();
// }

function winner() {
    if (humanScore > computerScore) {
        console.log("Congratulations you won!");
} else if (humanScore < computerScore) {
    console.log("You suck loser!");
} else {
    console.log("It's a tie!");
}

    if (humanScore == 5) {
        alert("Human Wins!");
    } else if (computerScore == 5) {
        alert("Computer Wins!");
    }
}

