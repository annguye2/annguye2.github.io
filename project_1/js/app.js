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
  var $p1score = $('#p1score'); // score for player 1
  var $p2score = $('#p2score'); // score for player 2
  var $groundNum = $('#groundNum'); // grund number
  var $numGameChoice = $('.numGameChoice'); // numbere of game choices div
  var $winner1 = $('#winner1'); // set P winner1 and winner2
  var $winner2 = $('#winner2');
  var $specialHand1 = $('#specialHand1');
  var $specialHand2 = $('#specialHand2');
  var $tie1 =  $('#tie1') // display game of TIE
  var $tie2 =  $('#tie2') // display game of TIE
  var numGames  = 10;           // default number of games for each grounds.
  var player1;  // create player 1 and 2
  var player2;
  var score;   // score for games
  var score1 = 0;
  var score2 = 0;
  var count = 0; // game control
  var tieMsg = false;
  var p1FigureHand = false;
  var p2FigureHand = false;


  var UI ={
    changeFontSize: function ($elem, size){
      $elem.css('font-size',  '25px')
    },
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
      $elem.css("visibility",'hidden');
      //$elem.hide;
    },
    // enable element
    enableElement: function ($elem){
      $elem.css("visibility",'visible');
    },
    changeElementClass: function ($elem) { //making the text shawdow
      $elem.addClass('shadow');
    },
    removeElementClass: function ($elem) { //making the text shawdow
      $elem.removeClass();
    },
    changeElementTextColor: function($elem, color){
      $elem.css('color', color);
    },
  }// End UI

  var App = { // App object
    dealCards: function (cards1, cards2){
      // set card image for player 1
      UI.changeBackgroundImage($p1card1, cards1[0].url);
      UI.changeBackgroundImage($p1card2, cards1[1].url);
      UI.changeBackgroundImage($p1card3, cards1[2].url);
      // set card image for player 2
      UI.changeBackgroundImage($p2card1, cards2[0].url);
      UI.changeBackgroundImage($p2card2, cards2[1].url);
      UI.changeBackgroundImage($p2card3, cards2[2].url);
    },
    // set Point for both players
    setPoint: function (){
      UI.changeElementText($p1point, "Point: " + gameExecution.getPlayer1().getPoint());
      UI.changeElementText($p2point, "Point: " + gameExecution.getPlayer2().getPoint());
    },
    setGameNumer:  function (){
      UI.changeElementText($groundNum, "GAME NUMBER: " + count);
    },
    setWinnerBackground(player){ // set winner background
      var imageUrl = "./images/winner.png"; // set winning image
      if(player == 'player-1'){
        UI.changeBackgroundImage($p1card1,imageUrl);
        UI.changeBackgroundImage($p1card2,imageUrl);
        UI.changeBackgroundImage($p1card3,imageUrl);
      }else if (player == 'player-2'){
        UI.changeBackgroundImage($p2card1,imageUrl);
        UI.changeBackgroundImage($p2card2,imageUrl);
        UI.changeBackgroundImage($p2card3,imageUrl);
      }

    }, //end
    settingWinnerText:  function(winnerName){ // add winner text and shadow
      if(winnerName == 'player-1'){
        UI.enableElement($winner1);
        UI.changeElementClass($winner1);
      }else if (winnerName == 'player-2'){
        UI.enableElement($winner2);
        UI.changeElementClass($winner2);
      }
    },
    setTieText:  function(){
      UI.enableElement($tie1); //enable element
      UI.enableElement($tie2); //enable element
      //UI.changeElementText($tie1, "The game is a TIE");
      //UI.changeElementText($tie2, "The game is a TIE");
      UI.changeElementClass($tie1); //enable element
      UI.changeElementClass($tie2);
    },
    setFigureHandText:  function($elem, msg){
      UI.enableElement($elem); //enable element
      UI.changeElementText($elem, msg);
      // UI.changeElementText($winner2, "This is a TIE");
      // UI.changeElementClass($winner1); //enable element
      // UI.changeElementClass($winner2);
    },
    hideTieText: function(){
      UI.disableElement($winner1);
      UI.disableElement($winner2);
      UI.disableElement($tie1);
      UI.disableElement($tie2);
    },
    hideSpecialHandText: function ($elem){
      UI.disableElement($elem);

    },
    /*color: #E8820C;*/
    changeElementTextColor: function(p1score, p2score){
      UI.changeElementTextColor($p1point,'#62C7FF');
      UI.changeElementTextColor($p2point,'#62C7FF');
      if(p1score == 1 ){
        UI.changeElementTextColor($p1score,'#62C7FF');
        UI.changeElementTextColor($p2score, '#E8820C');
      }
      if (p2score == 1){
        // UI.changeElementTextColor($p2point,'#62C7FF');
        UI.changeElementTextColor($p2score,'#62C7FF');
        UI.changeElementTextColor($p1score, '#E8820C');
        // UI.changeElementTextColor($p1point, '#62C7FF');

      }
      if(p2score == p1score){
        // UI.changeElementTextColor($p2point,'#62C7FF');
        UI.changeElementTextColor($p2score,'#62C7FF');
        // UI.changeElementTextColor($p2point, '#62C7FF');
        UI.changeElementTextColor($p2score,'#62C7FF');
      }
    },


    // start the game
    gameStart : function (){

      var arr = dealCards.shuffle(cards); // shuffling cards before deal out
      var cards1 = arr.slice(0,3); // get first 3 cards for player 1
      var cards2 = arr.slice(3,6); // get first 3 cards for player 2


      score.setGameCount();
      // if (score.getGameCount() < numGames) {//
      if (count <= parseInt(numGames)) {//

        this.setGameNumer(); // update current game number
        this.dealCards(cards1, cards2);   // get cards for player 2
        gameExecution.start(cards1, cards2); // start executing the  game
        this.setPoint(); // set point for both players
        if(parseInt(gameExecution.getPlayer1().getPoint()) > parseInt(gameExecution.getPlayer2().getPoint())){
          UI.changeImgSrc($p1img,"./images/game-win.png");
          UI.changeImgSrc($p2img,"./images/game-lost.png");
          score1 += 1;
          this.changeElementTextColor(1,0);
          score.setPlayer1Score(1);// set 1 point for player 1 and 0 point for player 2
          // UI.changeElementText($p1score, "Score: " +score.getPlayer1Score());
          UI.changeElementText($p1score, "Score: " + score1);
        }else  if(parseInt(gameExecution.getPlayer2().getPoint()) > parseInt(gameExecution.getPlayer1().getPoint())){
          UI.changeImgSrc($p1img,"./images/game-lost.png");
          UI.changeImgSrc($p2img, "./images/game-win.png" );
          score2 += 1;
          this.changeElementTextColor(0,1);
          score.setPlayer2Score(1);// set 1 point for player 2 and 0 point for player 1
          // UI.changeElementText($p2score, "Score: " + score.getPlayer2Score());
          UI.changeElementText($p2score, "Score: " + score2);
        }else if(parseInt(gameExecution.getPlayer2().getPoint()) == parseInt(gameExecution.getPlayer1().getPoint())){
          alert('this is a TIE')
          UI.changeImgSrc($p1img, "./images/game-win.png" );
          UI.changeImgSrc($p2img, "./images/game-win.png" );
          score1 += 1;
          score2 += 1;
          UI.changeElementText($p1score, "Score: " + score1);
          UI.changeElementText($p2score, "Score: " + score2);
          score.setPlayer1Score(1);// set 1 point for player 2 and 1 point for player 1
          score.setPlayer2Score(1);// set 1 point for player 2 and 1 point for player 1
          this.setTieText();
          tieMsg = true;
        }

        // if(gameExecution.getPlayer2().isSpecialHand()){
        //   alert ('set p2 special hand : ' + gameExecution.getPlayer1SpecialHand())
        //   // set figured hand for P2
        //   this.setFigureHandText($winner2,  gameExecution.getPlayer1SpecialHand())
        // }else if (gameExecution.getPlayer1().isSpecialHand()){
        //   alert ('set p1 specialhand : ' + gameExecution.getPlayer1SpecialHand())
        //   this.setFigureHandText($winner1,  gameExecution.getPlayer1SpecialHand())
        // }
        UI.disableElement($gameRadio);

      }
      //UI.disableElement($playbtn); // disable Play button until user restart the game
      // if (score.getGameCount() == numGames) {//
      if (count == parseInt(numGames)) {
        UI.changeElementText ($playbtn, 'CHECK');
        UI.changeFontSize($playbtn, '25px');
        //$playbtn.text('CHECK');
      }
      if (count == parseInt(numGames) + 1) {//
        UI.disableElement($playbtn);
        UI.enableElement($resetBtn);
        this.resetWinLostImg();
        if (player1 == score.isWinner()){
          this.setWinnerBackground(player1.getName());
          this.settingWinnerText(player1.getName()); // setting winner 1 msg
          UI.changeElementTextColor($p1score, '#62C7FF');
          UI.changeElementTextColor($p2score, '#62C7FF');
          UI.changeElementTextColor($p1point, '#E8820C');
          UI.changeElementTextColor($p2point, '#E8820C');

        }else if (player2 == score.isWinner()){
          this.setWinnerBackground(player2.getName());
          this.settingWinnerText(player2.getName()); // setting winner 2 msg
          UI.changeElementTextColor($p1score, '#62C7FF');
          UI.changeElementTextColor($p2score, '#62C7FF');
          UI.changeElementTextColor($p1point, '#E8820C');
          UI.changeElementTextColor($p2point, '#E8820C');

        }else{
          this.setWinnerBackground(player2.getName());
          this.setWinnerBackground(player1.getName());
          UI.changeElementTextColor($p1score, '#62C7FF');
          UI.changeElementTextColor($p2score, '#62C7FF');
          UI.changeElementTextColor($p1point, '#E8820C');
          UI.changeElementTextColor($p2point, '#E8820C');
          this.setTieText();  // set tie message for both user

        }
      }

    },

    resetWinLostImg: function(){
      UI.changeImgSrc($p1img,"./images/game-coin.jpg");
      UI.changeImgSrc($p2img,"./images/game-coin.jpg");
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
    hideItem: function(){
      // hide restart button
      UI.disableElement($resetBtn);
      UI.disableElement($numGameChoice);
      // hide numGame

    },
  }// end App

  var EventHandlers = { // Envent handlers object
    btnPlayOnClick: function (){  // Play button's on click event
    count += 1;
    if (tieMsg == true) {
      App.hideTieText();
      tieMsg == false;

      if (p1FigureHand == true){
        // hide text of p1 figure hand
        App.hideSpecialHandText($winner1);
        p1FigureHand = false;
      }
      if (p2FigureHand == true){
        // hide text of p1 figure hand
        App.hideSpecialHandText($winner2);
        p2FigureHand = false;
      }
    }

    App.hideItem();
    App.gameStart(); // start the game

    console.log(count);
  },
  btnResetOnClick: function(){ // reset button's on click event
  App.reloadPage(); //reload game
},
radioOnChange: function(){ // redio onchange event
  App.numberGames($(this)) // select number of game
  App.gameInitialize(); // initialize objects before the game start
}
}// end eventhandler

// Event listener
$playbtn.on('click',EventHandlers.btnPlayOnClick);
$resetBtn.on('click', EventHandlers.btnResetOnClick);
$gameRadio.on('change', EventHandlers.radioOnChange);

App.gameInitialize();

})// end of window onload
// end of file
