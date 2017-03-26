
console.log('connected to game.js');
//This class is implementing the game calculatePoint, ect for each game, for a player
var Game = function (newCards) {// 3 dealed card out for each PlayerCards
  var cards = newCards ; // 3 cards passed in
  var point = 0;         // initial Point = 0

  this.getPoint = function (){ //get current point
    return point;
  }

  this.calculatePoint = function (){ // calculatePoint from current ground
    var total = 0 ;
    for (var i = 0; i < cards.length; i++) {
      total += cards[i].point;
    }
     point = (total % 10);
  }

  this.tripleHand = function (){// check triple hand
    // the cards are triple hand when they all have the same points and not any figure
    return ((cards[0].point === cards[1].point) && (cards[1].point === cards[2].point) && (!cards[0].figure && !cards[1].figure && !cards[2].figure ))
  }

  this.figureHand = function(){// check if the cards are figureHand
    return ( (cards[0].figure &&  cards[1].figure && cards[2].figure) &&
           ((cards[0].figureType != cards[1].figureType) || ( cards[1].figureType != cards[2].figureType )))
  }

  this.tripleFigureHand = function(){// check if the cards are triplel-figure hand
    return ((cards[0].figureType == cards[1].figureType) && (cards[1].figureType == cards[2].figureType))

  }


}// end Cards class
