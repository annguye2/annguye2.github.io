

console.log('connected to grounds.js');
//===========================//===============================//

var PlayerPerGame = function(cards){
  var eachGame = new Game(cards); // game1
  this.calculatePoint =  function(){ // calculate point for each player
    eachGame.calculatePoint();  // calculate point for current game
    if(eachGame.getPoint()!= 0){// this is posible of a triple hand, or none-triple hand
      if (eachGame.tripleHand())
      {
        return "Triple-Hand"; // return triple hand if 3 cards point of 3+3+3
      }else{
        return eachGame.getPoint(); // not triple hand, so return regular calculated point
      }
    }
    else // posibble of either figuarehand or tripple-figure hand ()
    {
      if (eachGame.tripleFigureHand()){ // 3kings, 3 queens, or 3 j
        return "Triple-Figure-Hand";
      }
      else if(eachGame.figureHand()){
        return  "Figure-Hand";
      }
      else {
        return eachGame.getPoint();
      }
    }
  }
}// end Playerpergame class
//===========================//===============================//

//create game excution obj
var gameExecution = {

  player1:  new Player('Player-1'),   // create player 1 obj
  player2:  new Player('Player-2'),   // create player 2 obj

  calculatePointForEachGame: function (gamePerPlayer){
    return gamePerPlayer.calculatePoint();  // calculate each ground for each player

  },
  setPointForCurrentGame: function (playerPoint, player){
    if (playerPoint == 'Triple-Figure-Hand') {
      player.setSpecialHand(playerPoint);
      playerPoint = 20;  // add 5 point for the winner with Triple-Figure-Hand
      player.setPoint(playerPoint);


    }
    else if(playerPoint == 'Triple-Hand'){
      player.setSpecialHand(playerPoint);
      playerPoint =  15;  // add 5 point for the winner with Triple-Figure-Hand
      player.setPoint(playerPoint);


    }
    else if(playerPoint == 'Figure-Hand'){
      player.setSpecialHand(playerPoint);
      playerPoint =  10;  // add 5 point for the winner with Triple-Figure-Hand
      player.setPoint(playerPoint);
    

    }else{
      player.setPoint(playerPoint);

    }


  },

  setScore: function(player1,player2){
    if(this.player1.getPoint() > this.player2.getPoint()){
      player1.increaseScore();
    }else if (this.player1.getPoint() < this.player2.getPoint()){
      this.player2.increaseScore();
    }
    else if (this.player1.getPoint() == this.player2.getPoint()){
      //alert('We have a tie! Both players are the same point');
      this.player2.increaseScore();
      this.player1.increaseScore();
    }
  },

  getPlayer1: function (){
    return this.player1;
  },
  getPlayer2: function (){
    return this.player2;
  },

  getPlayer1SpecialHand : function(){
    return this.player1.getSpecialHand();
  },
  getPlayer1SpecialHand : function(){
    return this.player2.getSpecialHand();
  },


  start: function(player1Cards, player2Cards){
    // card1 and cards2 are input taken from UI
    var player1Point = 0;
    var player2Point = 0;
    // if (this.count <= this.grounds) // game runs and will stop when reached number of selected ground
    var gameForPlayer1 = new PlayerPerGame(player1Cards);  // create  a game  for player1
    var gameForPlayer2 = new PlayerPerGame(player2Cards);  // create a game for player 2
    player1Point = this.calculatePointForEachGame(gameForPlayer1); //get point for player 1
    player2Point = this.calculatePointForEachGame (gameForPlayer2); // get point for  player 2
    this.setPointForCurrentGame (player1Point, this.player1); // set current point for player1
    this.setPointForCurrentGame (player2Point, this.player2); // set current point for player1
    this.setScore (this.player1, this.player2);

  }

} // end of Game execution







//
