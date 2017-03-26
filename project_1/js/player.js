

console.log('connected to player.js');
//====================//====================//===================//
var Player = function(playerName){
  var name = playerName;
  var score = 0;
  var currPoint = 0;
  var winGame = false; // bool for wininng the game after many ground

  this.getScore = function (){ // get current score
    return score;
  }
  // increase the score for each game
  this.increaseScore = function (){//increasing score by 1
    score += 1;
  }
  // get name current player
  this.getName = function (){
    return name;
  }
  //reset the score
  this.resetScore = function (){ // reset score to  zero  for another game (hint: 10, or 20 grounds)
    score = 0;
  }
  this.setPoint = function (points){ // get point for each game (  from game object)
    currPoint = points; // get point for each game
  }
  this.getPoint = function(){
    return currPoint;
  }

  this.setWinGame = function(isWin){
    winGame = isWin;
    return winGame;
  }


}// End player class

//====================//====================//===================//





















//
