var p1Button = document.querySelector("#p1Button"); 
var p1Display = document.querySelector("#p1Score");
var p1Score = 0; 

var p2Button = document.querySelector("#p2Button"); 
var p2Display = document.querySelector("#p2Score");
var p2Score = 0;

var resetButton = document.querySelector("#reset");

var gameOver = false; 
var winningScore = 5; 

var inputButton = document.querySelector("input"); 
var maxScore = document.querySelector("#maxScore");

p1Button.addEventListener("click", function(){
    if (!gameOver){
        p1Score++; 
        p1Display.textContent = p1Score;
        if (p1Score === winningScore){
            gameOver = true; 
            p1Display.classList.add("winner");
        }
    } 
});

p2Button.addEventListener("click", function(){
    if (!gameOver){
        p2Score++; 
        p2Display.textContent = p2Score;
        if (p2Score === winningScore){
            gameOver = true; 
            p2Display.classList.add("winner");
        }
    } 
});

resetButton.addEventListener("click", function(){
    reset();
});

inputButton.addEventListener("change", function(){
    maxScore.textContent = inputButton.value; 
    winningScore = Number(inputButton.value);
    reset();
});

function reset(){
    gameOver = false;
    p2Score = 0;
    p1Score = 0;
    p1Display.textContent = p1Score; 
    p2Display.textContent = p2Score;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
}