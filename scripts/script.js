function getPlayerChoice() {
    let playerSelection = prompt('Rock, paper, or scissors').toLowerCase();
    
   while(playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
        playerSelection = prompt('Come on now... Rock, paper, or scissors').toLowerCase();
    }

    return playerSelection;
}

function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 99);

    if (randNum < 33) {
        return 'rock';
    } else if (randNum < 66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}


function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        return 'Draw! Try Again!';
    } 
    else if(playerSelection === 'rock' && computerSelection === 'scissors'
    || playerSelection === 'paper' && computerSelection === 'rock'
    || playerSelection === 'scissors' && computerSelection === 'paper'
    ) {
        return `You win! ${playerSelection[0].toUpperCase() + playerSelection.slice(1)} beats ${computerSelection[0].toUpperCase() + computerSelection.slice(1)}!`;
    } 
    else {
        return `You lose! ${computerSelection[0].toUpperCase() + computerSelection.slice(1)} beats ${playerSelection[0].toUpperCase() + playerSelection.slice(1)}!`;
    }
}

function playGame() {
    for(let i = 1; i <= 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

playGame();