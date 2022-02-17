console.log("Hello");
var choice = ["Rock", "Paper", "Scissors"];
var computerSelection = "Rock";
var playerSelection = "Paper";
var playerPoints = 0;
var computerPoints = 0;

function computerPlay(){
    var pickedChoice = choice[Math.floor(Math.random()*choice.length)]
    console.log(pickedChoice);
    return pickedChoice;
}

function playerPlay(){
    while(true){
        var pickedChoice = prompt("Please pick: 1-Rock, 2-Scissors, 3-Paper")
        if (pickedChoice == 1){
            return "Rock";
        }
        else if (pickedChoice == 2){
            return "Scissors";
        }
        else if (pickedChoice == 3){
            return "Paper";
        }
    }


    console.log(pickedChoice);
    return pickedChoice;
}

function playRound(computerSelection, playerSelection)
{
    //Win condition
    if ((playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Scissors" && computerSelection == "Paper"))
    {
        playerPoints += 1;
        return "You Win!";
    }
    //Lose condition
    else if ((playerSelection == "Rock" && computerSelection == "Paper") ||
    (playerSelection == "Paper" && computerSelection == "Scissors") ||
    (playerSelection == "Scissors" && computerSelection == "Rock"))
    {
        computerPoints += 1;
        return "You Lose!";
    }
    //Tie condition
    else if (playerSelection == computerSelection)
    {
        return "You Tie!";
    }    
}

function game(){
    while(true){
        var computerPick = computerPlay();
        var playerPick = playerPlay();
        console.log(playRound(computerPick,playerPick));
        console.log("Computer score: "+computerPoints.toString() + " Player Score: "+playerPoints.toString());
        if (computerPoints>=5)
        {
            console.log("You Lose The GAME!");
            break;
        }
        else if (playerPoints>= 5){
            console.log("You Win The GAME!");
            break;
        }
    }
}
//console.log(playRound(computerPlay(), playerSelection));

game();

/*
for (i = 0; i<100; i++)
{
    computerPlay();
}
*/