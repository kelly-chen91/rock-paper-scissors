function get_computer_choice(){
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

function player_win(player_selection, computer_selection){
    player_selection = player_selection.toLowerCase();
    computer_selection = computer_selection.toLowerCase();
    if(player_selection === computer_selection){
        return 0;
    } else if ((player_selection === "rock" && computer_selection === "scissors")
                || (player_selection === "paper" && computer_selection === "rock")
                || (player_selection === "scissors" && computer_selection === "paper")){
        return 1;
    } else {
        return -1;
    }
}

function valid_player_option(player_selection){
    player_selection = player_selection.toLowerCase();
    if(player_selection === "rock"){
        return true;
    } else if(player_selection === "paper"){
        return true;
    } else if(player_selection === "scissors"){
        return true;
    }
    return false;

}

function play_round(player_selection, computer_selection){
    let determineWin = player_win(player_selection, computer_selection);
    player_selection = capitalize(player_selection);
    if(!player_selection === "rock" && !player_selection === "paper" && !player_selection === "scissors"){
        return "Invalid Game.";
    }

    if(determineWin == 0) {
        console.log("Tie Game!");
        return 0;
        //eturn 0;
    } else if (determineWin == 1){
        console.log("You win! " + player_selection + " beats " + computer_selection + ".");
        return 1;
    } else if(determineWin == -1){
        console.log("You lose! " + computer_selection + " beats " + player_selection + ".");
        return -1;
    }
}
function capitalize(text){
    let capitalizeString = text.substring(0,1).toUpperCase();
    capitalizeString += text.substring(1, text.length).toLowerCase();
    return capitalizeString;
}
//change play round to 
let winScore = 0, loseScore = 0;
// function game() {
//     let playerOption = prompt("Pick a player: rock, paper, or scissors");
//     playerOption = playerOption.toLowerCase();
//     let computer_selection = getComputerChoice();
//     let score = playRound(playerOption, computer_selection);
//     if(score == 1){
//         winScore++;
//     } else if (score == -1){
//         loseScore++;
//     }

// }

function game(){
    let player_win = 0, computer_win = 0; 
    let message = "";
    let player_option = "";
    for(let i = 0; i < 5; i++){
        do{
            //console.log("This is running");
            player_option = prompt("Pick a player: rock, paper, or scissors");
            player_option = player_option.toLowerCase();
            //console.log("valid player option? " + valid_player_option(player_option));
        } while(!valid_player_option(player_option));
        let computer_selection = get_computer_choice();
        let curr_round = play_round(player_option, computer_selection);
        if(curr_round === 1){
            player_win ++;
        } else if(curr_round === -1){
            computer_win++;
        }
        //player_win += play_round(player_option, computer_selection);
        console.log("Player score: " + player_win);
    }
    if(player_win > computer_win){
        message = "Player wins with score " + player_win + " to " + computer_win;
    } else if (player_win < computer_win){
        message = "Computer wins with score " + computer_win + " to " + player_win;
    } else {
        message = "Tie with score " + player_win + " to " + computer_win;
    }
    return message;
}

console.log(game());

// const player_selection = "rock";
// const computer_selection = getComputerChoice();
// console.log(playRound(player_selection, computer_selection));
// for(let i = 0; i < 5; i++){
//     console.log(game());
// }