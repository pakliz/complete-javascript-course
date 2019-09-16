/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


//var dice = Math.floor(Math.random() * 6) + 1;
var scores, roundScore, activePlayer, gamePlaying, previousRoll;
init();

//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//let x = document.querySelector('#score-' + activePlayer).textContent;
//console.log("x: " + x);




// function button() {
//     //do something here
// };
//button();
//$('.btn-roll').addEventListener('click', button); //without () b/c we want event listener to do it, button is callback

//event for the ROLL BUTTON
document.querySelector('.btn-roll').addEventListener('click', function() {

    if(gamePlaying) {

        //1. random number , do not use let b/c it's global?
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        //console.log("activePlayer: " + activePlayer + " | dice rolled: " + dice + " , previous: " + previousRoll);
        
        //2. display result
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        
        document.getElementById('dice-1').src = 'dice-'+ dice1 + '.png'; //dice has the number from 1-6
        document.getElementById('dice-2').src = 'dice-'+ dice2 + '.png';
        //3. update round score if the rolled number is not 1
        
        //check if previous roll is a 6
        //challenge
        /*
        if(dice === 6 && previousRoll === 6 ){
            //roundScore = 0; //lose entire score
            scores[activePlayer] = 0; //lose entire score
            nextPlayer(); 
        } else if(dice !== 1) {
        //add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }
        else {
            //next player's turn
            nextPlayer();
        }
        previousRoll = dice;
        */

        if(dice1 !== 1 && dice2 !== 1) {
            //add score
            roundScore += (dice1 + dice2);
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }
        else {
            //next player's turn
            nextPlayer();
        }
    }
});

//when pressing the 'hold' button
document.querySelector('.btn-hold').addEventListener('click', function() {

    if(gamePlaying) {


        //add current score to global score
        scores[activePlayer] += roundScore;

        //update UI 
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        var input = document.querySelector('.final-score').value;
        var winningScore;
        // undefined, 0, null or "" are coerced to false
        // anything else is coerced to true
        if(input) {
           winningScore = input;
        } else {
            winningScore = 100;
        }
        
        //check if player WON the game
        if(scores[activePlayer] >= winningScore){
            document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;

        } else {
        //next player's turn
            nextPlayer();
        }
    }  
});



function nextPlayer() {

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    previousRoll = 0;
    
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

};

function init() {

    scores = [0,0];
    roundScore = 0;
    activePlayer = 0; //0 - first, 1 -second player
    gamePlaying = true;
    previousRoll = 0;
   
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');
};


document.querySelector('.btn-new').addEventListener('click', init); //passing init() will b immediately called
