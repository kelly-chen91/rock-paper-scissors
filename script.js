function getComputerChoice(){
    //generates a random number to determine what to return
    let randomInt = Math.floor(Math.random() * 3);
    if(randomInt == 0){
        return "Rock";
    } else if(randomInt == 1){
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playerWin(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if(playerSelection === computerSelection){
        return 0;
    } else if ((playerSelection === "rock" && computerSelection === "scissors")
                || (playerSelection === "paper" && computerSelection === "rock")
                || (playerSelection === "scissors" && computerSelection === "paper")){
        return 1;
    } else {
        return 2;
    }
}

function playRound(playerSelection, computerSelection){
    let determineWin = playerWin(playerSelection, computerSelection);
    playerSelection = capitalize(playerSelection);
    if(!playerSelection === "rock" && !playerSelection === "paper" && !playerSelection === "scissors"){
        return "Invalid Game.";
    }

    if(determineWin == 0) {
        return "Tie Game!";
    } else if (determineWin == 1){
        return "You win! " + playerSelection + " beats " + computerSelection + ".";
    } else if(determineWin == 2){
        return "You lose! " + computerSelection + " beats " + playerSelection + ".";
    }
}
function capitalize(text){
    let capitalizeString = text.substring(0,1).toUpperCase();
    capitalizeString += text.substring(1, text.length).toLowerCase();
    return capitalizeString;
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));