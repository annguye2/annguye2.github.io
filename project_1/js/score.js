
console.log('connected to score.js');

var Score = function (newPlayer1, newPlayer2, numGames){
  var player1 = newPlayer1;//new Player (newPlayer1.getName());
  var player2 = newPlayer2;///new Player (newPlayer2.getName());
  var numberOfGames = numGames;
  var gameCount = 0;
  this.setPlayers = function (){
  }

  this.setPlayer1Score = function(player1Score){
      player1.setScore(player1Score);
  }
  this.setPlayer2Score = function(player2Score){
      player2.setScore(player2Score);
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
      //return "Tie";
  }
  this.setGameCount = function (){
      gameCount += 1;
  }
  this.getGameCount = function (){
     return gameCount;
  }
  this.gameOver = function (){
    console.log(gameCount);
    return (gameCount == numberOfGames);
  }

}// end of class Score
