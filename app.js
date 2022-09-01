var scores, roundScore, activePlayer, gamePlaying;

init();


// document.querySelector('#score-0').textContent = dice;
// document.querySelector('#current-' +activePlayer).textContent = dice;



document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
    //Random number
    var dice = Math.floor(Math.random() *6)+1;

    // Displaye the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' +dice+ '.png';

    // Update the roundScore if thr rolled number was not 1
    if (dice !== 1) {
        //add score
        roundScore += dice;
        document.querySelector('#current-' +activePlayer).textContent = roundScore;
    } else {
        // next player
        nextPlayer();
        
    }
    }
    


    
} );

document.querySelector('.btn-hold').addEventListener('click' , function(){
    if (gamePlaying) {
    // Add current score to globale score
    scores[activePlayer] += roundScore;
    //  update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    // check if player won the game
    if (scores[activePlayer] >=20) {
        document.querySelector('#name-' + activePlayer).textContent = 'WINNER';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' +activePlayer+ '-panel').classList.add('WINNER');
        document.querySelector('.player-' +activePlayer+ '-panel').classList.remove('active');
        gamePlaying = false;
    }else{
        // next player
        nextPlayer();
    }
        
    }
    // Add current score to globale score
    scores[activePlayer] += roundScore;
    //  update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    // check if player won the game
    if (scores[activePlayer] >=20) {
        document.querySelector('#name-' + activePlayer).textContent = 'WINNER';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' +activePlayer+ '-panel').classList.add('WINNER');
        document.querySelector('.player-' +activePlayer+ '-panel').classList.remove('active');
        gamePlaying = false;
    }else{
        // next player
        nextPlayer();
    }

    
});



function nextPlayer() {
     // next player
     if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
    roundScore = 0;

    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display='none';

    
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';

document.getElementById('name-0').textContent='Player 1';
document.getElementById('name-1').textContent='Player 2';

document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
document.querySelector('.player-1-panel').classList.remove('active');
    
}
































































































































































































// var scores, roundScore, activePlayer;
// scores = [0,0];
// roundScore = 0;
// activePlayer = 0;

// document.querySelector('.dice').style.display='none';

// document.getElementById('score-0').textContent='0';
// document.getElementById('score-1').textContent='0';
// document.getElementById('current-0').textContent='0';
// document.getElementById('current-1').textContent='0';

// document.querySelector('.btn-roll').addEventListener('click', function() {
//     //Random number

//     var dice = Math.floor(Math.random() *6)+1;

//     //Display the result

//     var diceDOM = document.querySelector(".dice");
//     diceDOM.style.display='block';
//     diceDOM.src = "dice-" +dice+ ".png";

//     // update de roundScore if the rolled number was not a 1

//     if (dice !== 1) {
//         // Add scores 
//         roundScore += dice
//         document.querySelector('#current-'+activePlayer).textContent=roundScore;
//     }
//     else{
//         nextPlayer();
//     }
// });
// document.querySelector('.btn-hold').addEventListener('click', function(){
//     // add current score to globale score 
//        scores[activePlayer] += roundScore;
//     // update the UI 
//        document.querySelector('#score-' + activePlayer).textContent= scores[activePlayer];
//     // check if player won the game
//     if (scores[activePlayer]>=20) {
//         document.querySelector('#name-'+activePlayer).textContent = "WINNER§";
//         document.querySelector('.dice').style.display='none';
//         document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
//         document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        
//     }else{
//     // nextPlayer
//        nextPlayer();

//     }
//     // nextPlayer
//        nextPlayer();
// });
// function nextPlayer() {
//     if (activePlayer===0) {
//         activePlayer =1;
//     }else{
//         activePlayer =0;
//     }
//     document.getElementById('current-0').textContent='0';
//     document.getElementById('current-1').textContent='0';
//     document.querySelector('.player-0-panel').classList.toggle('active');
//     document.querySelector('.player-1-panel').classList.toggle('active');
//     document.querySelector('.dice').style.display='none';
// }


















// dice = Math.floor(Math.random() *6) + 1;
// document.querySelector('#score-0').textContent = dice;

// var x = document.querySelector('#score-0').textContent;
// console.log(x);
// document.querySelector('.dice').style.display ="none "

// function btn() {
//     var dice = Math.floor(Math.random()*6)+1;
//     var diceDOM = document.querySelector('.dice'); 
//     diceDOM.style.display='block';
//     diceDOM.src = 'dice-' + dice + '.png';
//     document.querySelector('.dice').style.display="block";

    
// }
// btn();
// document.querySelector('.btn-roll').addEventListener('click',btn);
