// Empty array which can be used to push the players score to each time the dice is rolled
var playerScoreResult= []
// Global Variable rollMax selector used to disable roll when a total of 3 rolls have been used
var rollMax = document.querySelector("#tog");
// While the array is empty hide the below 2 entries and show the value once their index has been populated within the PlayerScore Result Array
var hideResultThree = document.querySelector("#bestOfThree").classList.add("invisible")
var hideResultTwo = document.querySelector("#bestOfTwo").classList.add("invisible")
// Function which gets executed on click every time the button is selected
function diceRoll(){
// Randomise number from 1 - 6 same as dice roll possibility
var randNumberOne = Math.floor(Math.random() * 6) + 1;
var randNumberTwo = Math.floor(Math.random() * 6) + 1;
// Use query selector to alter the image and set attribute to a randomnuumber using a variable which generates a random number
document.querySelector(".img1 ").setAttribute("src", `./images/dice${randNumberOne}.png`);
document.querySelector(".img2 ").setAttribute("src", `./images/dice${randNumberTwo}.png`);
// Create an if else statement to determine the outcome eachtime the dice is rolled
if(randNumberOne > randNumberTwo) {
   p1 =  document.querySelector("h1 ").textContent = "PLay 1 wins";
   playerScoreResult.push(p1)
} else if (randNumberOne < randNumberTwo) {
   var p2 = document.querySelector("h1 ").textContent = "PLay 2 wins";
    playerScoreResult.push(p2)
// If the outcone of the dice roll is equal then set textContent to a draw between the two players
} else {
    var draw = document.querySelector("h1 ").textContent = "It's a draw!";
    playerScoreResult.push(draw)
}



const names = ['Mike', 'Matt', 'Nancy', 'Adam', 'Jenny', 'Nancy', 'Carl']

const count = playerScoreResult =>
  playerScoreResult.reduce((a, b) => ({ ...a,
    [b]: (a[b] || 0) + 1
  }), {}) // don't forget to initialize the accumulator

const duplicates = dict =>
  Object.keys(dict).filter((a) => dict[a] > 1)

console.log(count(playerScoreResult)) // { Mike: 1, Matt: 1, Nancy: 2, Adam: 1, Jenny: 1, Carl: 1 }
console.log(duplicates(count(playerScoreResult))) // [ 'Nancy' ]
var result = duplicates(count(playerScoreResult));
document.querySelector("h1 ").textContent = result;



// itterates through the length of the array and spits the result out into bestOfOne - statment is no longer required but will keep for now
for(var i=0; i < playerScoreResult.length; i++) {
    document.getElementById("bestOfOne").innerHTML = playerScoreResult[0];
   }
   if(playerScoreResult.length >=2){
       if(hideResultTwo == "undefined" || playerScoreResult == "undefined"){
        var hideResultTwo = document.querySelector("#bestOfTwo").classList.add("invisible");
       } else {
        document.getElementById("bestOfTwo").innerHTML = playerScoreResult[1];
        document.querySelector("#bestOfTwo").classList.remove("invisible");
       }}
// Roll is Disabled once a total of three roles have been used - user will have to restart the application - perhaps show a prompt to restart ?
    if(playerScoreResult.length >= 3){
       document.getElementById("bestOfThree").innerHTML = playerScoreResult[2];
       document.querySelector("#bestOfThree").classList.remove("invisible")
       rollMax.disabled = true;
};

// Determine who is the winner
if(playerScoreResult.includes)

// console statment used for testing will remove once I publish this application onto the web.
       console.log(playerScoreResult);   
}
// Restart the dice roll to 6 for the players to restart the game with the dice rolls starting at 6
function restartDiceRoll(){
rollMax.disabled = false;
document.querySelector(".img1 ").setAttribute("src", `./images/dice6.png`);
document.querySelector(".img2 ").setAttribute("src", `./images/dice6.png`);
document.getElementById("bestOfOne").innerHTML = "Score Results"
document.querySelector("#bestOfTwo").classList.add("invisible");
document.querySelector("#bestOfThree").classList.add("invisible")
// Empties Array once the user wants to play a new game
playerScoreResult.length = 0;
};

// ### Code updates - Program who won the best of 3 and also program to click restart once a maximum of 3 rolls has been used hence the name of the game  ###