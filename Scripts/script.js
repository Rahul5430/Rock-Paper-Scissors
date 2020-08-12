let playerscore = 0;
let compscore = 0;
let rounds = 0;
let currentlyPlaying = true;
let result;

let scoreboard = document.getElementById('scoreboard');
let round = document.getElementById('round');
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let gameStatus = document.getElementById('status');

rock.addEventListener('click', function() {
    if (rounds < 5) {
        return playRound('rock')
    } else {
        currentlyPlaying === false
    }
});

paper.addEventListener('click', function() {
    if (rounds < 5) {
        return playRound('paper')
    } else {
        currentlyPlaying === false
    }
});

scissors.addEventListener('click', function() {
    if (rounds < 5) {
        return playRound('scissors')
    } else {
        currentlyPlaying === false
    }
});

function computerPlay() {
    let random = Math.floor(Math.random() * 3),
    choice;
    switch(random) {
        case 0:
            choice = 'rock';
            break;
        case 1:
            choice = 'paper';
            break;
        case 2:
            choice = 'scissors';
            break;
    }
    return choice;
}

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    rounds++;
    rounds < 5 ? round.textContent = 'Round ${rounds + 1}/5' : round.textContent = 'Round ${rounds}/5';
    if (playerSelection === computerSelection) {
        scoreboard.textContent = '${playerscore} : ${compscore}';
    }
    else if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors' && computerSelection == 'paper')) {
        playerscore++;
        scoreboard.textContent = '${playerscore} : ${compscore}'; 
    }
    else if ((playerSelection == 'rock' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'scissors') || (playerSelection == 'scissors' && computerSelection == 'rock')) {
        compscore++;
        scoreboard.textContent = '${playerscore} : ${compscore}'; 
    }

    if (playerscore > compscore) {
        gameStatus.textContent = "I chose ${computerSelection}. You're ahead! For now...";
    }
    else if (playerscore < compscore) {
        gameStatus.textContent = "I chose ${computerSelection}. Better catch up!";
    }
    else {
        gameStatus.textContent = "I chose ${computerSelection}. It seems I am only as worthy as you, human.";
    }

    if (round === 5) {
        if (playerscore > compscore) result = 'You Win!';
        else if (playerscore < compscore) result = 'You Lose!';
        else result = "It's a Draw!";
        round.textContent = 'GAME OVER!';
        gameStatus.style.backgroundColor = '#ddd';
        gameStatus.innerHTML = 'I chose ${computerSelection}. ${result} <br><strong style="calc(font-size: 1.3rem + 0.6vw)">Play Again?</strong>';
    }
    return gameStatus;
}

gameStatus.addEventListener('click', reset);

function reset() {
    if (rounds === 5) {
        return playerscore = 0,
        compscore = 0,
        rounds = 0;
        scoreboard.textContent = '${playerscore} : ${compscore}',
        round.textContent = 'Round ${rounds + 1}/5',
        gameStatus.textContent = 'Good Luck!',
        gameStatus.style.backgroundColor = '#fff',
        currentlyPlaying = true;
    } else {
        return gameStatus.textContent = 'Finish the game, silly!';
    }
}