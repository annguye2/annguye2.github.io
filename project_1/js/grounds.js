

console.log('connected to grounds.js');


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

//testing

//for testing purpose

//end test , should bee remove after all


// all input from below assumed set aftet submit/check button is click
// the input should be taken from  this file or created UI file that can read the input form UI
var n = 12;
var cards1 = [cards[n],cards[n+13],cards[n+13] ]; // cards for player1. this information will take from UI
var cards2 = [cards[11],cards[11+12],cards[11+13] ]; // getting from input for player 1
var numGround = 10 ;// assume player wanted to play 10 game/ground

//create game excution obj
var gameExecution ={
ground: numGround,        // taking from input on summit click
player1:  new Player(),   // create player 1 obj
player1:  new Player(),   // create player 2 obj
gameForPlayer1 : new PlayerPerGame(),  // create game  for player1
gameForPlayer2 : new PlayerPerGame(),  // create game for player 2

calculatePoint : function (){

  
}


}
