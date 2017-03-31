
console.clear();
console.log( "connected to cards.js");
// This is poker card data storage
var cards =[
  //Ground diamond
  {
    name:  'diamond-ace',
    group: 'diamond',
    point: 1,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/diamond/diamond-ace.png'
  },
  {
    name: 'diamond-2',
    group: 'diamond',
    point: 2,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/diamond/diamond-2.png'

  },
  {
    name: 'diamond-3',
    group: 'diamond',
    point: 3,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/diamond/diamond-3.png'
  },
  {
    name: 'diamond-4',
    group: 'diamond',
    point: 4,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/diamond/diamond-4.png'
  },
  {
    name: 'diamond-5',
    group: 'diamond',
    point: 5,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/diamond/diamond-5.png'
  },
  {
    name: 'diamond-6',
    group: 'diamond',
    point: 6,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/diamond/diamond-6.png'
  },
  {
    name: 'diamond-7',
    group: 'diamond',
    point: 7,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/diamond/diamond-7.png'
  },
  {
    name: 'diamond-8',
    group: 'diamond',
    point: 8,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/diamond/diamond-8.png'
  },
  {
    name: 'diamond-9',
    group: 'diamond',
    point: 9,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/diamond/diamond-9.png'
  },
  {
    name: 'diamond-10',
    group: 'diamond',
    point: 10,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/diamond/diamond-10.png'
  },
  {
    name: 'diamond-j',
    group: 'diamond',
    point: 10,
    figure: true,
    figureType: 'j',
    figureClass: 1,
    url: './images/game_cards/diamond/diamond-j.png'
  },
  {
    name: 'diamond-q',
    group: 'diamond',
    point: 10,
    figure: true,
    figureType: 'q',
    figureClass: 2,
    url: './images/game_cards/diamond/diamond-q.png'
  },
  {
    name: 'diamond-k',
    group: 'diamond',
    point: 10,
    figure: true,
    figureType: 'k',
    figureClass: 3,
    url: './images/game_cards/diamond/diamond-k.png'
  },


  //Ground heart
  {
    name:  'heart-ace',
    group: 'heart',
    point: 1,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/heart/heart-ace.png'
  },
  {
    name: 'heart-2',
    group: 'heart',
    point: 2,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/heart/heart-2.png'

  },
  {
    name: 'heart-3',
    group: 'heart',
    point: 3,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/heart/heart-3.png'
  },
  {
    name: 'heart-4',
    group: 'heart',
    point: 4,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/heart/heart-4.png'
  },
  {
    name: 'heart-5',
    group: 'heart',
    point: 5,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/heart/heart-5.png'
  },
  {
    name: 'heart-6',
    group: 'heart',
    point: 6,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/heart/heart-6.png'
  },
  {
    name: 'heart-7',
    group: 'heart',
    point: 7,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/heart/heart-7.png'
  },
  {
    name: 'heart-8',
    group: 'heart',
    point: 8,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/heart/heart-8.png'
  },
  {
    name: 'heart-9',
    group: 'heart',
    point: 9,
    figure: false,
    figureType: 'none',
    url: './images/game_cards/heart/heart-9.png'
  },
  {
    name: 'heart-10',
    group: 'heart',
    point: 10,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/heart/heart-10.png'
  },
  {
    name: 'heart-j',
    group: 'heart',
    point: 10,
    figure: true,
    figureType: 'j',
    figureClass: 1,
    url: './images/game_cards/heart/heart-j.png'
  },
  {
    name: 'heart-q',
    group: 'heart',
    point: 10,
    figure: true,
    figureType: 'q',
    figureClass: 2,
    url: './images/game_cards/heart/heart-q.png'
  },
  {
    name: 'heart-k',
    group: 'heart',
    point: 10,
    figure: true,
    figureType: 'k',
    figureClass: 3,
    url: './images/game_cards/heart/heart-k.png'
  },

  //Ground spade
  {
    name:  'spade-ace',
    group: 'spade',
    point: 1,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/spade/spade-ace.png'
  },
  {
    name: 'spade-2',
    group: 'spade',
    point: 2,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/spade/spade-2.png'

  },
  {
    name: 'spade-3',
    group: 'spade',
    point: 3,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/spade/spade-3.png'
  },
  {
    name: 'spade-4',
    group: 'spade',
    point: 4,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/spade/spade-4.png'
  },
  {
    name: 'spade-5',
    group: 'spade',
    point: 5,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/spade/spade-5.png'
  },
  {
    name: 'spade-6',
    group: 'spade',
    point: 6,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/spade/spade-6.png'
  },
  {
    name: 'spade-7',
    group: 'spade',
    point: 7,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/spade/spade-7.png'
  },
  {
    name: 'spade-8',
    group: 'spade',
    point: 8,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/spade/spade-8.png'
  },
  {
    name: 'spade-9',
    group: 'spade',
    point: 9,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/spade/spade-9.png'
  },
  {
    name: 'spade-10',
    group: 'spade',
    point: 10,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/spade/spade-10.png'
  },
  {
    name: 'spade-j',
    group: 'spade',
    point: 10,
    figure: true,
    figureType: 'j',
    figureClass: 1,
    url: './images/game_cards/spade/spade-j.png'
  },
  {
    name: 'spade-q',
    group: 'spade',
    point: 10,
    figure: true,
    figureType: 'q',
    figureClass: 2,
    url: './images/game_cards/spade/spade-q.png'
  },
  {
    name: 'spade-k',
    group: 'spade',
    point: 10,
    figure: true,
    figureType: 'k',
    figureClass: 3,
    url: './images/game_cards/spade/spade-k.png'
  },

  //Ground club
  {
    name:  'club-ace',
    group: 'club',
    point: 1,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/club/club-ace.png'
  },
  {
    name: 'club-2',
    group: 'club',
    point: 2,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/club/club-2.png'

  },
  {
    name: 'club-3',
    group: 'club',
    point: 3,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/club/club-3.png'
  },
  {
    name: 'club-4',
    group: 'club',
    point: 4,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/club/club-4.png'
  },
  {
    name: 'club-5',
    group: 'club',
    point: 5,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/club/club-5.png'
  },
  {
    name: 'club-6',
    group: 'club',
    point: 6,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/club/club-6.png'
  },
  {
    name: 'club-7',
    group: 'club',
    point: 7,
    figure: false,
    figureType: 'none',
    url: './images/game_cards/club/club-7.png'
  },
  {
    name: 'club-8',
    group: 'club',
    point: 8,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/club/club-8.png'
  },
  {
    name: 'club-9',
    group: 'club',
    point: 9,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/club/club-9.png'
  },
  {
    name: 'club-10',
    group: 'club',
    point: 10,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/club/club-10.png'
  },
  {
    name: 'club-j',
    group: 'club',
    point: 10,
    figure: true,
    figureType: 'j',
    figureClass: 1,
    url: './images/game_cards/club/club-j.png'
  },
  {
    name: 'club-q',
    group: 'club',
    point: 10,
    figure: true,
    figureType: 'q',
    figureClass: 1,
    url: './images/game_cards/club/club-q.png'
  },
  {
    name: 'club-k',
    group: 'club',
    point: 10,
    figure: true,
    figureType: 'k',
    figureClass: 2,
    url: './images/game_cards/club/club-k.png'
  }

]// end of card object
