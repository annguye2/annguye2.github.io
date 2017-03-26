

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
// all input from below assumed set aftet submit/check button is click
// the input should be taken from  this file or created UI file that can read the input form UI
var n = 2;
var cards1 = [cards[n],cards[n+3],cards[n+13] ]; // cards for player1. this information will take from UI
var cards2 = [cards[1],cards[11+13],cards[11+13 + 3] ]; // getting from input for player 1
var numGround = 10 ;// assume player wanted to play 10 game/ground
console.log(cards1);
console.log(cards2);
// End test


//create game excution obj
var gameExecution = {
  grounds: numGround,        // taking from input on summit click
  player1:  new Player('Player 1'),   // create player 1 obj
  player2:  new Player('Player 2'),   // create player 2 obj
  count : 0, // keep track of number ground

  calculatePointForEachGame: function (gamePerPlayer){
    return gamePerPlayer.calculatePoint();  // calculate each ground for each player

  },
  setPointForCurrentGame: function (playerPoint, player){
    if (playerPoint == 'Triple-Figure-Hand') {
      playerPoint = 20;  // add 5 point for the winner with Triple-Figure-Hand
      alert ('Congratulation!!! You won a game with Triple-Figure-Hand.\n20 points are added for your account')
    }
    else if(playerPoint == 'Triple-Hand'){
      playerPoint =  15;  // add 5 point for the winner with Triple-Figure-Hand
      alert ('Congratulation!!! You won a game with Triple-Hand.\n15 points are added for your record')
    }
    else if(playerPoint == 'Figure-Hand'){
      playerPoint =  10;  // add 5 point for the winner with Triple-Figure-Hand
      alert ('Congratulation!!! You won a game with Figure-Hand.\n10points are added for your record')
    }
    player.setPoint(playerPoint);

  },

  setScore: function(player1,player2){
     if(player1.getPoint() > player2.getPoint()){
       player1.increaseScore();

     }else if (player1.getPoint() < player2.getPoint()){
       player2.increaseScore();
     }
     else if (player1.getPoint() = player2.getPoint()){
       alert('We have a tie! Both players are the same point');
       player2.increaseScore();
       player1.increaseScore();
     }
  },

  getGameWiner: function(){

  },


  start: function(){
    // card1 and cards2 are input taken from UI
    var player1Point = 0;
    var player2Point = 0;
    if (this.count <= this.grounds) // game runs and will stop when reached number of selected ground
    gameForPlayer1 = new PlayerPerGame(cards1),  // create  a game  for player1
    gameForPlayer2 = new PlayerPerGame(cards2),  // create a game for player 2
    player1Point = this.calculatePointForEachGame(gameForPlayer1); //get point for player 1
    player2Point = this.calculatePointForEachGame (gameForPlayer2); // get point for  player 2
    this.setPointForCurrentGame (player1Point, this.player1); // set current point for player1
    this.setPointForCurrentGame (player2Point, this.player2); // set current point for player1
    this.setScore (this.player1, this.player2);

    console.log("player 1 point :  " + this.player1.getPoint());
    console.log("player 2 point :  " + this.player2.getPoint());
    console.log('====================');
    console.log("player 1 score :  " + this.player1.getScore());
    console.log("player 2 score :  " + this.player2.getScore());
    this.count += 1; //game count

  }




} // end of Game execution
var n = 2;

for (var i = 0; i < 4 ; i++) {

  gameExecution.start();
}
