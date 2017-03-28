
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
    url: './images/game_cards/diamond/diamond-ace.jpeg'
  },
  {
    name: 'diamond-2',
    group: 'diamond',
    point: 2,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/diamond/diamond-2.jpeg'

  },
  {
    name: 'diamond-3',
    group: 'diamond',
    point: 3,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/diamond/diamond-3.jpeg'
  },
  {
    name: 'diamond-4',
    group: 'diamond',
    point: 4,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/diamond/diamond-4.jpeg'
  },
  {
    name: 'diamond-5',
    group: 'diamond',
    point: 5,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/diamond/diamond-5.jpeg'
  },
  {
    name: 'diamond-6',
    group: 'diamond',
    point: 6,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/diamond/diamond-6.jpeg'
  },
  {
    name: 'diamond-7',
    group: 'diamond',
    point: 7,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/diamond/diamond-7.jpeg'
  },
  {
    name: 'diamond-8',
    group: 'diamond',
    point: 8,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/diamond/diamond-8.jpeg'
  },
  {
    name: 'diamond-9',
    group: 'diamond',
    point: 9,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/diamond/diamond-9.jpeg'
  },
  {
    name: 'diamond-10',
    group: 'diamond',
    point: 10,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/diamond/diamond-10.jpeg'
  },
  {
    name: 'diamond-j',
    group: 'diamond',
    point: 10,
    figure: true,
    figureType: 'j',
    figureClass: 1,
    url: './images/game_cards/diamond/diamond-j.jpeg'
  },
  {
    name: 'diamond-q',
    group: 'diamond',
    point: 10,
    figure: true,
    figureType: 'q',
    figureClass: 2,
    url: './images/game_cards/diamond/diamond-q.jpeg'
  },
  {
    name: 'diamond-k',
    group: 'diamond',
    point: 10,
    figure: true,
    figureType: 'k',
    figureClass: 3,
    url: './images/game_cards/diamond/diamond-k.jpeg'
  },


  //Ground heart
  {
    name:  'heart-ace',
    group: 'heart',
    point: 1,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/heart/heart-ace.jpeg'
  },
  {
    name: 'heart-2',
    group: 'heart',
    point: 2,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/heart/heart-2.jpeg'

  },
  {
    name: 'heart-3',
    group: 'heart',
    point: 3,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/heart/heart-3.jpeg'
  },
  {
    name: 'heart-4',
    group: 'heart',
    point: 4,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/heart/heart-4.jpeg'
  },
  {
    name: 'heart-5',
    group: 'heart',
    point: 5,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/heart/heart-5.jpeg'
  },
  {
    name: 'heart-6',
    group: 'heart',
    point: 6,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/heart/heart-6.jpeg'
  },
  {
    name: 'heart-7',
    group: 'heart',
    point: 7,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/heart/heart-7.jpeg'
  },
  {
    name: 'heart-8',
    group: 'heart',
    point: 8,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/heart/heart-8.jpeg'
  },
  {
    name: 'heart-9',
    group: 'heart',
    point: 9,
    figure: false,
    figureType: 'none',
    url: './images/game_cards/heart/heart-9.jpeg'
  },
  {
    name: 'heart-10',
    group: 'heart',
    point: 10,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/heart/heart-10.jpeg'
  },
  {
    name: 'heart-j',
    group: 'heart',
    point: 10,
    figure: true,
    figureType: 'j',
    figureClass: 1,
    url: './images/game_cards/heart/heart-j.jpeg'
  },
  {
    name: 'heart-q',
    group: 'heart',
    point: 10,
    figure: true,
    figureType: 'q',
    figureClass: 2,
    url: './images/game_cards/heart/heart-q.jpeg'
  },
  {
    name: 'heart-k',
    group: 'heart',
    point: 10,
    figure: true,
    figureType: 'k',
    figureClass: 3,
    url: './images/game_cards/heart/heart-k.jpeg'
  },

  //Ground spade
  {
    name:  'spade-ace',
    group: 'spade',
    point: 1,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/spade/spade-ace.jpeg'
  },
  {
    name: 'spade-2',
    group: 'spade',
    point: 2,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/spade/spade-2.jpeg'

  },
  {
    name: 'spade-3',
    group: 'spade',
    point: 3,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/spade/spade-3.jpeg'
  },
  {
    name: 'spade-4',
    group: 'spade',
    point: 4,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/spade/spade-4.jpeg'
  },
  {
    name: 'spade-5',
    group: 'spade',
    point: 5,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/spade/spade-5.jpeg'
  },
  {
    name: 'spade-6',
    group: 'spade',
    point: 6,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/spade/spade-6.jpeg'
  },
  {
    name: 'spade-7',
    group: 'spade',
    point: 7,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/spade/spade-7.jpeg'
  },
  {
    name: 'spade-8',
    group: 'spade',
    point: 8,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/spade/spade-8.jpeg'
  },
  {
    name: 'spade-9',
    group: 'spade',
    point: 9,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/spade/spade-9.jpeg'
  },
  {
    name: 'spade-10',
    group: 'spade',
    point: 10,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/spade/spade-10.jpeg'
  },
  {
    name: 'spade-j',
    group: 'spade',
    point: 10,
    figure: true,
    figureType: 'j',
    figureClass: 1,
    url: './images/game_cards/spade/spade-j.jpeg'
  },
  {
    name: 'spade-q',
    group: 'spade',
    point: 10,
    figure: true,
    figureType: 'q',
    figureClass: 2,
    url: './images/game_cards/spade/spade-q.jpeg'
  },
  {
    name: 'spade-k',
    group: 'spade',
    point: 10,
    figure: true,
    figureType: 'k',
    figureClass: 3,
    url: './images/game_cards/spade/spade-k.jpeg'
  },

  //Ground club
  {
    name:  'club-ace',
    group: 'club',
    point: 1,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/club/club-ace.jpeg'
  },
  {
    name: 'club-2',
    group: 'club',
    point: 2,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/club/club-2.jpeg'

  },
  {
    name: 'club-3',
    group: 'club',
    point: 3,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/club/club-3.jpeg'
  },
  {
    name: 'club-4',
    group: 'club',
    point: 4,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/club/club-4.jpeg'
  },
  {
    name: 'club-5',
    group: 'club',
    point: 5,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/club/club-5.jpeg'
  },
  {
    name: 'club-6',
    group: 'club',
    point: 6,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/club/club-6.jpeg'
  },
  {
    name: 'club-7',
    group: 'club',
    point: 7,
    figure: false,
    figureType: 'none',
    url: './images/game_cards/club/club-7.jpeg'
  },
  {
    name: 'club-8',
    group: 'club',
    point: 8,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/club/club-8.jpeg'
  },
  {
    name: 'club-9',
    group: 'club',
    point: 9,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/club/club-9.jpeg'
  },
  {
    name: 'club-10',
    group: 'club',
    point: 10,
    figure: false,
    figureType: 'none',
    figureClass: 0,
    url: './images/game_cards/club/club-10.jpeg'
  },
  {
    name: 'club-j',
    group: 'club',
    point: 10,
    figure: true,
    figureType: 'j',
    figureClass: 1,
    url: './images/game_cards/club/club-j.jpeg'
  },
  {
    name: 'club-q',
    group: 'club',
    point: 10,
    figure: true,
    figureType: 'q',
    figureClass: 1,
    url: './images/game_cards/club/club-q.jpeg'
  },
  {
    name: 'club-k',
    group: 'club',
    point: 10,
    figure: true,
    figureType: 'k',
    figureClass: 2,
    url: './images/game_cards/club/club-k.jpeg'
  }

]// end of card object
