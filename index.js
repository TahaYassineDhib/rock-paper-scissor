const getComputerChoice = () =>{
let computerChoice = Math.floor(Math.random() * 3) + 1;
if (computerChoice === 1 ) {
    return 'rock';
}
else if (computerChoice=== 2 ){
    return 'scissors'
}
else {return 'paper'}
}

const round = (playerSelection, computerSelection) =>{
    if (playerSelection === computerSelection){
        return 'tie'
    }
    else if (playerSelection === 'rock'& computerSelection ==='paper'){
    return 'you loose paper beats rock'}
    else if (playerSelection ==='rock' & computerSelection ==='scissor'){
        return 'you win rock beats scissor'
    }
    else if (playerSelection === 'paper' & computerSelection==='scissor'){
        return 'you loose scissor beats paper '
    }
    else {return 'you win paper beats rock'}
}




const game =()=>{
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('choose rock / paper / scissor')
        computerSelection = getComputerChoice();
        console.log(round(playerSelection,computerSelection)); 

     }
}
game();

