//gets a random player option for the computer
function get_computer_choice() {
    //generates a random number to determine what to return
    let randomInt = Math.floor(Math.random() * 3);
    if (randomInt == 0) {
        return "Rock";
    } else if (randomInt == 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

//determines if the player has won the round
function player_win(player_selection, computer_selection) {
    player_selection = player_selection.toLowerCase();
    computer_selection = computer_selection.toLowerCase();
    if (player_selection === computer_selection) {
        return 0;
    } else if ((player_selection === "rock" && computer_selection === "scissors")
        || (player_selection === "paper" && computer_selection === "rock")
        || (player_selection === "scissors" && computer_selection === "paper")) {
        return 1;
    } else {
        return -1;
    }
}

//checks if the player option is valid
function valid_player_option(player_selection) {
    player_selection = player_selection.toLowerCase();
    if (player_selection === "rock") {
        return true;
    } else if (player_selection === "paper") {
        return true;
    } else if (player_selection === "scissors") {
        return true;
    }
    return false;

}

//Plays one round of the rock, paper, scissors game. Returns 0 if it is tie, 1 if player wins, and -1 if computer wins.
function play_round(player_selection, computer_selection) {
    let determineWin = player_win(player_selection, computer_selection);
    player_selection = capitalize(player_selection);
    if (determineWin == 0) {
        console.log("Tie Game!");
        return 0;
        //eturn 0;
    } else if (determineWin == 1) {
        console.log("You win! " + player_selection + " beats " + computer_selection + ".");
        return 1;
    } else if (determineWin == -1) {
        console.log("You lose! " + computer_selection + " beats " + player_selection + ".");
        return -1;
    }
}

//Capitalizes the first letter of the string and lowercase all the others. 
function capitalize(text) {
    let capitalizeString = text.substring(0, 1).toUpperCase();
    capitalizeString += text.substring(1, text.length).toLowerCase();
    return capitalizeString;
}


//Plays the rock, paper, and scissors game 5 times and keep track of the scores.
function game() {
    let player_win = 0, computer_win = 0;
    let message = "";
    let player_option = "";
    // for(let i = 0; i < 5; i++){
    //     do{
    //         //prompts the user for player option they want to play
    //         player_option = prompt("Pick a player: rock, paper, or scissors"); 
    //         player_option = player_option.toLowerCase();
    //     } while(!valid_player_option(player_option)); //makes sure that the user puts in the valid player option
    //     let computer_selection = get_computer_choice(); //gets the randomized computer choice
    //     let curr_round = play_round(player_option, computer_selection); 
    //     if(curr_round === 1){ //if curr_round is 1, then increment player_win
    //         player_win ++;
    //     } else if(curr_round === -1){ //if curr_round is -1, then increment computer_win
    //         computer_win++;
    //     }
    //     console.log("Player score: " + player_win); 
    // }

    //QUERY ALL THE BUTTONS
    const rock = document.querySelector("#rock")
    const paper = document.querySelector("#paper")
    const scissor = document.querySelector("#scissor")
    let curr_round = 0
    //call player round with computer selection and user's selection
    // let computer_selection = get_computer_choice()
    const resultContainer = document.querySelector("#result")

    //Display player score
    const player = document.createElement('p')
    player.classList.add("score")
    player.textContent = "Player score: " + player_win
    resultContainer.appendChild(player)

    //Display computer score
    const comp = document.createElement('p')
    comp.classList.add("score")
    comp.textContent = "Computer score: " + computer_win
    resultContainer.appendChild(comp)

    //Display the winner 
    const win = document.createElement('p')
    win.classList.add("score")
    resultContainer.appendChild(win)

    rock.addEventListener('click', () => {
        curr_round = play_round("rock", get_computer_choice())
        if (curr_round === 1) { //if curr_round is 1, then increment player_win
            player_win++;
        } else if (curr_round === -1) { //if curr_round is -1, then increment computer_win
            computer_win++;
        }
        player.textContent = "Player score: " + player_win
        comp.textContent = "Computer score: " + computer_win
        if (player_win == 5 || computer_win == 5) {
            //stop the game and announce the winner 
            win.textContent = print_winner(player_win, computer_win)
            rock.disabled = true
            paper.disabled = true
            scissor.disabled = true
        }

        // console.log("Player score: " + player_win);
    })
    paper.addEventListener('click', () => {
        curr_round = play_round("paper", get_computer_choice())
        if (curr_round === 1) { //if curr_round is 1, then increment player_win
            player_win++;
        } else if (curr_round === -1) { //if curr_round is -1, then increment computer_win
            computer_win++;
        }
        player.textContent = "Player score: " + player_win
        comp.textContent = "Computer score: " + computer_win
        if (player_win == 5 || computer_win == 5) {
            //stop the game and announce the winner 
            win.textContent = print_winner(player_win, computer_win)
            rock.disabled = true
            paper.disabled = true
            scissor.disabled = true
        }
        // console.log("Player score: " + player_win);
    })
    scissor.addEventListener('click', () => {
        curr_round = play_round("scissors", get_computer_choice())
        if (curr_round === 1) { //if curr_round is 1, then increment player_win
            player_win++;
        } else if (curr_round === -1) { //if curr_round is -1, then increment computer_win
            computer_win++;
        }
        player.textContent = "Player score: " + player_win
        comp.textContent = "Computer score: " + computer_win
        if (player_win == 5 || computer_win == 5) {
            //stop the game and announce the winner 
            win.textContent = print_winner(player_win, computer_win)
            rock.disabled = true
            paper.disabled = true
            scissor.disabled = true
        }
        // console.log("Player score: " + player_win);
    })


   return print_winner(player_win, computer_win)
}

function print_winner(player_win, computer_win)
{
    let message = ""
    if (player_win > computer_win) { //if player_win > computer_win, print that player wins
        message = "Player wins with score " + player_win + " to " + computer_win;
    } else if (player_win < computer_win) { //if player_win < computer_win, print that computer wins
        message = "Computer wins with score " + computer_win + " to " + player_win;
    } else {//if player_win = computer_win, print that player and computer tied
        message = "Tie with score " + player_win + " to " + computer_win;
    }
    return message;
}
console.log(game());