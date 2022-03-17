function computerPlay(){
    let random = Math.floor(Math.random() * 10);	
    
    if (random<4) {
        return "rock" 

    } else if (random>4 && random<8) {
        return "paper"

    } else
        return "scissors"
}

const computerSelection = computerPlay();
const playerSelection = prompt().toLowerCase()


function playRound(playerSelection, computerSelection) {

    if (
        playerSelection !== "rock" && 
        playerSelection !== "paper" && 
        playerSelection !== "scissors") {
    
        return alert("Wrong text!");
    }

    if (playerSelection===computerSelection){
        return "Tie!"
    }
    
    if(playerSelection==="rock" && computerSelection==="paper") {
        return "You Lose! Paper beats Rock"
    } 
        
    if (playerSelection==="paper" && computerSelection==="scissors") {
        return "You Lose! Scissors beats Paper";
    }
    
    return "You Win!";
}

const result = playRound(playerSelection, computerSelection);
console.log(result);
console.log('computer:',computerSelection);
