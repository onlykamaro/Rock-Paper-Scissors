// Generate a random move from PC (Rock or Paper or Scissors) it needs to be an array and using random number generator 
function getComputerChoice() {   // A function without any parameters
    let choices = ['rock', 'paper', 'scissors']; // An array of three choices
    return choices[Math.floor(Math.random() * choices.length)]; // Returning one of the choices using random number generator times length of an array
}
// Function that plays one round of RPS
function playRound (playerSelection, computerSelection) { // I create a function with 2 properties (Players choice and Computers choice)
    let playerPoint = 0; // Set user/player score to 0 
    
    if ((playerSelection == "rock" && computerSelection == "scissors") || 
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock"))
    {   
        playerPoint = 1;    // If the games outcome is either one of those 3 above then player receives 1 point
        console.log(`You win! ${playerSelection} is stronger than ${computerSelection}`)    // If player wins show in console the outcome
    } else if (playerSelection == computerSelection) {
        console.log(`It's a draw between ${playerSelection} and ${computerSelection}`)
    } else {
        console.log(`You lose! ${computerSelection} is stronger than ${playerSelection}`)   // If player loses show in console this outcome
    }
    return playerPoint;     // Return (to use later this function) player point count
}

function game(roundTotal = 5) {
    let roundsPlayed = 0;
    let playerScore = 0;

    while (roundsPlayed <= roundTotal) {
        let playerSelection = prompt('Rock, Paper or Scissors?')
        playerSelection = playerSelection.toLowerCase();
        if ((playerSelection != 'rock') &&
            (playerSelection != 'paper') && 
            (playerSelection != 'scissors'))
        { continue }

        let computerSelection = getComputerChoice();
        if (playerSelection == computerSelection) {
            console.log(`It's a draw! You both chose ${playerSelection}`)
            continue
        }

        playerScore += playRound(playerSelection, computerSelection)
        roundsPlayed++
    }

    if (playerScore > (roundsPlayed / 2)) {
        console.log(`You won ${playerScore} out of ${roundsPlayed} rounds. YOU WIN!!!`)
    } else if (playerScore == (roundsPlayed / 2)) {
        console.log(`You won ${playerScore} out of ${roundsPlayed} rounds. It's a draw`)
    } else {
        console.log(`You won ${playerScore} out of ${roundsPlayed} rounds. You lose!`)
    }
}


