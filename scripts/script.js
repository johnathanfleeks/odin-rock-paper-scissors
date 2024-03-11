const container = document.querySelector('.btn-container');
container.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if(!isButton){
        return;
    }
    playGame(event.target.id, getComputerChoice());
})

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


function playGame(playerSelection, computerSelection) {
    const newSpan = document.createElement('span');
    const newLi = document.createElement('li');
    let ul = document.querySelector('.result');

    let playerScore = document.querySelector('.player-score');
    let computerScore = document.querySelector('.computer-score');

    if (playerSelection === computerSelection) {
        newSpan.innerText= 'Draw! Try Again!';
        newLi.appendChild(newSpan);
        ul.appendChild(newLi);
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'||
        playerSelection === 'paper' && computerSelection === 'rock'|| 
        playerSelection === 'scissors' && computerSelection === 'paper') {
        newSpan.innerText = `You win! ${playerSelection[0].toUpperCase() + playerSelection.slice(1)} beats ${computerSelection[0].toUpperCase() + computerSelection.slice(1)}!`;
        newLi.appendChild(newSpan);
        ul.appendChild(newLi);
        
        playerScore.textContent++;
    } else {
        newSpan.innerText = `You lose! ${computerSelection[0].toUpperCase() + computerSelection.slice(1)} beats ${playerSelection[0].toUpperCase() + playerSelection.slice(1)}!`;
        newLi.appendChild(newSpan);
        ul.appendChild(newLi);
        
        computerScore.textContent++;
    }

    if(playerScore.textContent == 5) {
        alert('YOU WIN!');
        resetGame();
    } else if(computerScore.textContent == 5) {
        alert('YOU LOSE!');
        resetGame();
    }
}

function resetGame() {
    let playerScore = document.querySelector('.player-score');
    let computerScore = document.querySelector('.computer-score');

    const ul = document.querySelector('.result');

    playerScore.textContent = 0;
    computerScore.textContent = 0;
    ul.textContent = '';
}
