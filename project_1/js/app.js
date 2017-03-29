// console.clear();

$(function(){
  var $p1card1 = $('#p1card1'); // cards for player1
  var $p1card2 = $('#p1card2');
  var $p1card3 = $('#p1card3');
  var $p2card1 = $('#p2card1');
  var $p2card2 = $('#p2card2'); // cards for player2
  var $p2card3 = $('#p2card3');
  var $playbtn = $('.playbtn'); // play button
  var $p1point = $('#p1point'); // points for player 1
  var $p2point = $('#p2point'); // point for player 2
  var $p1img   = $('#p1img');   // player 1 win/lost img
  var $p2img   = $('#p2img');   // player 2 win/lost img
  var $resetBtn = $('#reset');  // reset/restart button
  var $gameRadio  = $('.radio') // radio buttons for number of games
  var numGames  = 10;           // default number of games for each grounds.
  var $p1score = $('#p1score'); // score for player 1
  var $p2score = $('#p2score'); // score for player 2
  var $groundNum = $('#groundNum'); // grund number
  var player1;  // create player 1 and 2
  var player2;
  var score;   // score for games

  var UI ={
    //change background image
    changeBackgroundImage: function($elem, url){
      $elem.css('background-image', "url(" + url +  ")" );
    },
    //change element text
    changeElementText: function($elem, newText){
      $elem.text(newText);
    },
    //change image source
    changeImgSrc: function ($elem, url){
      $elem.attr('src', url);
    },
    // disable element
    disableElement: function ($elem){
     $elem.prop("disabled",true);
    },
    // enable element
    enableElement: function ($elem){
      $elem.prop("disabled",false);
    }
  }// End UI

  var App = { // App object
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
    // set Point for both players
    setPoint: function (player1, player2){
      UI.changeElementText($p1point, "Point: " + gameExecution.getPlayer1().getPoint() )
      UI.changeElementText($p2point, "Point: " + gameExecution.getPlayer2().getPoint() )
    },
    //set score for both players
    setScore: function(){
      UI.changeElementText($p1score, "Score: " +score.getPlayer1Score() )
      UI.changeElementText($p2score, "Score: " +score.getPlayer2Score() )
    },
    //set game number for each game
    setGameNumer:  function (){
      UI.changeElementText($groundNum, "GAME NUMBER: " +score.getGameCount() )
    },
    setWinnerBackground(player){ // set winner background
        var imageUrl = "./images/winner.png"; // set winning image
      if('player-1'){
        UI.changeBackgroundImage($p1card1,imageUrl);
        UI.changeBackgroundImage($p1card2,imageUrl);
        UI.changeBackgroundImage($p1card3,imageUrl);
      }else if ('player-2'){
        UI.changeBackgroundImage($p2card1,imageUrl);
        UI.changeBackgroundImage($p2card2,imageUrl);
        UI.changeBackgroundImage($p2card3,imageUrl);
      }

    }, //end

    // start the game
    gameStart : function (){
      //console.log('number game:  ' + numGames);
      var arr = dealCards.shuffle(cards); // shuffling cards before deal out
      var cards1 = arr.slice(0,3); // get first 3 cards for player 1
      var cards2 = arr.slice(3,6); // get first 3 cards for player 2
      this.dealCards(cards1, cards2);   // get cards for player 2
      if (!score.gameOver()) {
        gameExecution.start(cards1, cards2); // start executing the  game
        this.setPoint(); // set point for both players
        if(gameExecution.getPlayer1().getPoint() > gameExecution.getPlayer2().getPoint()){
          UI.changeImgSrc($p1img,"./images/game-win.png");
          UI.changeImgSrc($p2img,"./images/game-lost.png");
          score.setScore(1,0);// set 1 point for player 1 and 0 point for player 2
        }else  if(gameExecution.getPlayer2().getPoint() > gameExecution.getPlayer1().getPoint()){
          UI.changeImgSrc($p1img,"./images/game-lost.png");
          UI.changeImgSrc($p2img, "./images/game-win.png" );
          score.setScore(0,1);// set 1 point for player 2 and 0 point for player 1
        }else{
          UI.changeImgSrc($p1img, "./images/game-win.png" );
          UI.changeImgSrc($p2img, "./images/game-win.png" );
          score.setScore(0,1);// set 1 point for player 2 and 1 point for player 1
        }
        this.setScore(); //update score to both user
        this.setGameNumer(); // update current game number
        UI.disableElement($gameRadio);
      }else{

        UI.disableElement($playbtn); // disable Play button until user restart the game
        // var imageUrl = "./images/winner.png"; // set winning image
        // set winning-player background to dolar sign
        if (player1 == score.isWinner()){
          this.setWinnerBackground(player1.getName())
          // UI.changeBackgroundImage($p1card1,imageUrl);
          // UI.changeBackgroundImage($p1card2,imageUrl);
          // UI.changeBackgroundImage($p1card3,imageUrl);
        }else if (player2 == score.isWinner()){
          //alert (player2.getName());
          this.setWinnerBackground(player2.getName());
          // UI.changeBackgroundImage($p2card1,imageUrl)
          // UI.changeBackgroundImage($p2card2,imageUrl)
          // UI.changeBackgroundImage($p2card3,imageUrl)
        }else{
          alert('TIE');
            this.setWinnerBackground(player2.getName());
            this.setWinnerBackground(player1.getName())
        }

        /// get the function that anounce the winner here
      }

    },
    // refresh/reload page
    reloadPage: function(){
      window.location.reload();
    },
    // set number of games
    numberGames: function ($elem){
      numGames =  $elem.val();
    },
    // initialize players and score objects
    gameInitialize: function (){
      player1 = new Player('player-1'); // create player 1 and 2
      player2 = new Player('player-2');
      score = new Score(player1, player2, numGames)
    },
  }// end App

  var EventHandlers = { // Envent handlers object
    btnPlayOnClick: function (){  // Play button's on click event
      App.gameStart(); // start the game
    },
    btnResetOnClick: function(){ // reset button's on click event
      App.reloadPage(); //reload game
    },
    radioOnChange: function(){ // redio onchange event
      App.numberGames($(this)) // select number of game
    }
  }// end eventhandler

  $playbtn.on('click',EventHandlers.btnPlayOnClick);
  $resetBtn.on('click', EventHandlers.btnResetOnClick);
  $gameRadio.on('change', EventHandlers.radioOnChange);

  App.gameInitialize(); // initialize objects before the game start

})// end of window onload
// end of file
