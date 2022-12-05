alert("Hello\nWelcome to rock paper scissors!\nGood luck beating the machine 😊");
console.log(`Let's start the game!`)

function computerPlay(){
    let computerSelection  = Math.floor(Math.random()*3)

    if(computerSelection  <= 1){
        return "Rock"
    }
    else if(computerSelection  <= 2){
        return "Paper"
    } else {
        return   "Scissors"
    }
}

function singleRound(playerSelection, computerSelection){
    let result = ''
    if(playerSelection === 'rock' && computerSelection === 'scissors'){
        return result = 'You win! Rock was a good choice!'
    } 
    else if(playerSelection === 'rock' && computerSelection === 'paper'){
        return result = 'You lose! You should not have picked rock'
    } 
    else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        return result = 'You lose! You should not have picked paper'
    } 
    else if(playerSelection === 'paper' && computerSelection === 'rock'){
        return result = 'You win! Paper was a good choice!'
    } 
    else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        return result = 'You lose! You should not have picked scissors'
    } 
    else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        return result = 'You win! Scissors was a good choice!'
    } 
    else{
        return result = 'You tie!'
    }
}



function game(){
    let playerScore = 0
    let computerScore = 0
    
    for (let i = 0; i<5; i++) {
        let player = prompt('What do you chose? Rock, Paper or Scissors')
        let playerSelection = player.toLowerCase().trim()
        let computerSelection = computerPlay()
      if ( playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
        let result = singleRound(playerSelection, computerSelection);
        console.log("Player: " + playerSelection);
        console.log("Computer: " + computerSelection);
        if (result === "You win! Rock was a good choice!") {
          playerScore++;
        } else if (result === "You win! Paper was a good choice!") {
          playerScore++;
        } else if (result === "You win! Scissors was a good choice!") {
          playerScore++;
        } else if (result === "You lose! You should not have picked rock") {
          computerScore++;
        } else if (result === "You lose! You should not have picked paper") {
          computerScore++;
        } else if (result === "You lose! You should not have picked scissors") {
          computerScore++;
        } else if (result === "You tie!") {
          playerScore;
          computerScore;
        }
        console.log(result);
        console.log("Player score: " + playerScore);
        console.log("Computer score: " + computerScore);
      } else if (playerSelection.includes(" ")) {
        alert("there is an extra space");
        i--;
      } else if (playerSelection === "") {
        alert(
          "Please enter a word"
        );
        i--;
      } else {
        console.log("The word must be rock, paper or scissors");
        i--;
      }
    }
    if (playerScore > computerScore) {
      console.log("You win!");
    } else if (playerScore < computerScore) {
      console.log("Computer wins!");
    } else {
      console.log("You tie");
    }
  }
  
  game();