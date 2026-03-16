/*
Plan: No user interface, just console.
Randomly generate an input (rock, paper or scissors).
Return input to the user as a string.
*/

function getComputerChoice() {
    let choice = Math.random();
    console.log(choice);
    if (choice >= 0.66) {
        console.log("rock");
    } else if (choice <= 0.33) {
        console.log("paper");
    }else {
        console.log("scissors");
    }

}
getComputerChoice();