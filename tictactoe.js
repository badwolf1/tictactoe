console.log("Hello");
var choice = ["Rock", "Paper", "Scissors"];
var computerSelection = "";
var playerSelection = "";
var playerPoints = 0;
var computerPoints = 0;
var currentGame = 0;

function startNewGame(pickOption)
{
    if (pickOption == "Yes")
    {
        currentGame = 1;
        consoleBody.style.display = "none";
        scoreKeeper();
        score.style.display = 'block';
    }
    else if (pickOption == "No")
    {
        currentGame = 0;
        consoleBody.style.display = "none";
        scoreKeeper();
        score.style.display = 'block';
    }
}

function computerPlay()
{
    var pickedChoice = choice[Math.floor(Math.random()*choice.length)];
    pickedChoice = ""+pickedChoice+"";
    return pickedChoice;
}

function scoreKeeper()
{
    score.textContent = "Player Score: "+playerPoints.toString()+" Computer Score: "+computerPoints.toString();
}

/*
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
*/

function playRound(btnPick)
{
    var computerSelection = computerPlay();
    var playerSelection = btnPick.toString();
    console.log("computerSelection: "+ computerSelection);
    console.log("playerSelection: "+ playerSelection);
    //Win condition
    if (currentGame == 1){
    
        if ((playerSelection == "Rock" && computerSelection == "Scissors") ||
        (playerSelection == "Paper" && computerSelection == "Rock") ||
        (playerSelection == "Scissors" && computerSelection == "Paper"))
        {
            playerPoints += 1;
        }
        //Lose condition
        else if ((playerSelection == "Rock" && computerSelection == "Paper") ||
        (playerSelection == "Paper" && computerSelection == "Scissors") ||
        (playerSelection == "Scissors" && computerSelection == "Rock"))
        {
            computerPoints += 1;
        }
        //Tie condition
        else if (playerSelection == computerSelection)
        {
            console.log('Tie')
        }

        console.log("Computer score: "+computerPoints.toString() + " Player Score: "+playerPoints.toString());
        scoreKeeper();
        winCondition();
    }
    else if (currentGame == 0)
    {

    }  
}

function winCondition(){
    if (computerPoints>=5)
    {
        console.log("You Lose The GAME!");
        currentGame = 0;
        playerPoints = 0;
        computerPoints = 0;        
        content.textContent="You Lose The GAME! Would you like to play again?";
        consoleBody.style.display = "block";
        //consoleBody.appendChild(content);

    }
    else if (playerPoints>= 5)
    {
        console.log("You Win The GAME!");
        currentGame = 0;
        playerPoints = 0;
        computerPoints = 0; 
        content.textContent= "You Win The GAME! Would you like to play again?"; 
        consoleBody.style.display = "block";
       // consoleBody.appendChild(content);
    }
}

var btn_rock = document.querySelector('#rock');
var btn_paper = document.querySelector('#paper');
var btn_scissors = document.querySelector('#scissors');

btn_rock.addEventListener('click',() =>{
    playRound('Rock');
})
btn_paper.addEventListener('click',() =>{
    playRound('Paper');
})
btn_scissors.addEventListener('click',() =>{
    playRound('Scissors');
})

var consoleBody = document.querySelector("#console");
var HTMLBody = document.querySelector("body");
var content = document.createElement('p');
content.classList.add('winDisplay');
content.textContent = "Would you like to play a New Game?";
consoleBody.appendChild(content);

//New Game Options
//Yes
var newGame_yes = document.createElement('button');
newGame_yes.textContent = "Yes";
newGame_yes.classList.add('btn1_choice');
newGame_yes.setAttribute('id','newGame_yes');
newGame_yes.addEventListener('click',()=>{
    startNewGame('Yes');
})
consoleBody.appendChild(newGame_yes);

//No
var newGame_no = document.createElement('button');
newGame_no.textContent = "No";
newGame_no.classList.add('btn1_choice');
newGame_no.setAttribute('id','newGame_no');
newGame_no.addEventListener('click',()=>{
    startNewGame('No');
})
consoleBody.appendChild(newGame_no);

//Create Score Display
var score = document.createElement('p');
score.style.display = 'none';
score.setAttribute('id','score')
score.textContent = "Player Score: "+playerPoints.toString()+" Computer Score: "+computerPoints.toString();
HTMLBody.appendChild(score);