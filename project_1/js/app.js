// console.clear();

$(function(){
  var $p1card1 = $('#p1card1');
  var $p1card2 = $('#p1card2');
  var $p1card3 = $('#p1card3');
  var $p2card1 = $('#p2card1');
  var $p2card2 = $('#p2card2');
  var $p2card3 = $('#p2card3');
  var $playbtn = $('.playbtn');
  var $p1point = $('#p1point');
  var $p2point = $('#p2point');
  var $p1img   = $('#p1img');
  var $p2img   = $('#p2img');
  var $resetBtn =$ ('#reset');

  var UI ={
    changeBackgroundImage: function($elem, url){
      $elem.css('background-image', "url(" + url +  ")" );
    },
    changePointText: function($elem, newText){
      $elem.text("Point: " + newText);
    },

   changeImgSrc: function ($elem, url){
     $elem.attr('src', url);
   }
  }// End UI


  var App = {
    dealCards: function (cards1, cards2){
      // set card image for player 1
      UI.changeBackgroundImage($p1card1, cards1[0].url)
      UI.changeBackgroundImage($p1card2, cards1[1].url)
      UI.changeBackgroundImage($p1card3, cards1[2].url)
      // set card image for player 2
      UI.changeBackgroundImage($p2card1, cards2[0].url)
      UI.changeBackgroundImage($p2card2, cards2[1].url)
      UI.changeBackgroundImage($p2card3, cards2[2].url)
    },
    setPoint: function (player1, player2){
     UI.changePointText($p1point, gameExecution.getPlayer1().getPoint() )
     UI.changePointText($p2point, gameExecution.getPlayer2().getPoint() )
    } ,

    gameStart : function (){
      var arr = dealCards.shuffle(cards); // shuffleing cards before deal out
      var cards1 = arr.slice(0,3);
      var cards2 = arr.slice(3,6);
      App.dealCards(cards1, cards2);   // get cards for player 2
      gameExecution.start(cards1, cards2); // card1, cards2 taken from inpute UI
      App.setPoint(gameExecution.getPlayer1(), gameExecution.getPlayer2())
       if(gameExecution.getPlayer1().getPoint() > gameExecution.getPlayer2().getPoint()){
         UI.changeImgSrc($p1img,"./images/game-win.png");
         UI.changeImgSrc($p2img,"./images/game-lost.png");
       }else  if(gameExecution.getPlayer2().getPoint() > gameExecution.getPlayer1().getPoint()){
         UI.changeImgSrc($p1img,"./images/game-lost.png");
         UI.changeImgSrc($p2img, "./images/game-win.png" );
       }else{
         UI.changeImgSrc($p1img, "./images/game-win.png" );
         UI.changeImgSrc($p2img, "./images/game-win.png" );
       }


    },
     reloadPage: function(){
   window.location.reload();
}

  }// end App

  var EventHandlers = {
    btnPlayOnClick: function (){
      App.gameStart();
    },
   btnResetOnClick: function(){
     App.reloadPage();
   }
  }// end eventhandler



  $playbtn.on('click',EventHandlers.btnPlayOnClick);
  $resetBtn.on('click', EventHandlers.btnResetOnClick);




})// end of window onload






























//
// console.log(cardBankStr);
// console.log(testStr);

//this is a good section for adding image in to DOM
// $test.css('background-image', "url(" + './images/game_cards/diamond/diamond-2.jpeg' + ")" )
// $test.css('background-image', "url(" + cards[51].url + ")" )

// background-image: url('../images/game_cards/diamond/diamond-2.jpeg')

// var cardArr = [cards[11],cards[11+13],cards[11+13+13] ];
// console.log(cardArr);
// console.log(player);
// console.log(player.getPoint());
