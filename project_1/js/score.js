
console.log('connected to score.js');

var Score = function (newPlayer1, newPlayer2, numGames){
  var player1 = newPlayer1;//new Player (newPlayer1.getName());
  var player2 = newPlayer2;///new Player (newPlayer2.getName());
  var numberOfGames = numGames;
  var gameCount = 0;
  this.setPlayers = function (){
  }
  //this function will  setCore for both players, either 1 or 0
  this.setScore = function (player1Score, player2Score){ //  set score for each player
   if (!this.gameOver()){
    player1.setScore(player1Score);
    player2.setScore(player2Score);
    this.setNumberOfGames();
  }else {
    alert ('game is over ')
  }
  }
  this.getPlayer1Score = function (){
    //console.log(this.player1.getScore());
    return player1.getScore();
  }
  this.getPlayer2Score = function (){
    //console.log(this.player1.getScore());
    return player2.getScore();
  }
  this.isWinner = function (){
      if (this.getPlayer1Score() > this.getPlayer2Score()){
        return player1;
      }else if (this.getPlayer2Score() > this.getPlayer1Score()){
        return player2;
      }else {return "Tie";}
  }
  this.setNumberOfGames = function (){
      gameCount += 1;
  }
  this.getGameCount = function (){
     return gameCount;
  }
  this.gameOver = function (){
    return (gameCount == numberOfGames);
  }

}// end of class Score
