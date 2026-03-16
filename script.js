/*
Plan: No user interface, just console.
Randomly generate an input (rock, paper or scissors).
Return input to the user as a string.
*/

function getComputerChoice() {
    let choice = Math.random();

    if (choice >= 0.66) {
        console.log("rock");
    } else if (choice <= 0.33) {
        console.log("paper");
    }else {
        console.log("scissors");
    }
    return choice;
}
getComputerChoice();

/*
User will now input a choice
The computer will take that choice 
The computer will return user choice
*/

function getHumanChoice() {
    let userChoice = prompt("Rock? Paper? Scissors?");
    return userChoice;
}
getHumanChoice();