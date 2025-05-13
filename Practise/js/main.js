let playgame=confirm("Shall we play rock,paper or scissor?");
if (playgame){
    let playerChoice = prompt("Please enter rock, paperr,scissor.");
    if(playerChoice){
        let playerOne = playerChoice.trim().toLowerCase();
        if(playerOne === "rock"|| playerOne === "paper"|| playerOne === "scissor"){
            let computerChoice = Math.floor(Math.random()* 3 +1);
            let computer = computerChoice === 1 ? "rock" : computerChoice === 2 ? "paper" : "scissor";
            
            let result = 
            playerOne === computer ? `PlayerOne : ${playerOne}\nComputer : ${computer}\nTie game`  : playerOne === "rock" && computer === "paper" ? `playerOne : ${playerOne}\nComputer : ${computer}\nComputer wins!`
            : playerOne === "paper" && computer === "scissor" ? `playerOne : ${playerOne}\nComputer : ${computer}\nComputer wins!` : 
            playerOne === "scissor" && computer === "rock" ? `playerOne : ${playerOne}\nComputer : ${computer}\nComputer wins!` :
            `playerOne : ${playerOne}\nComputer : ${computer}\nPlayerOne Wins!`;
            alert(result);
            let playAgain = confirm("PlayAgain?");
            playAgain ? location.reload() : alert("Ok, thank you for playing!");
        }else{
            alert("you didin't enter rock,paper,scissor.");
        }
    }else{
        alert("I guess you changed your mind. Maybe next time.");
    }

}else{
    alert("ok, maybe next time.");
}